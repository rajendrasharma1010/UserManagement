import { Component, OnChanges, OnInit, SimpleChange, Input, Output, EventEmitter } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../interfaces';
import { assign } from 'lodash';
import { FancyImageUploaderOptions, UploadedFile } from 'ng2-fancy-image-uploader';


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  userForm: FormGroup;
  uploadOptions: FancyImageUploaderOptions;
  @Input() user;
  @Output() submitEvent = new EventEmitter<User>();
  @Output() cancelEvent = new EventEmitter();

  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    this.uploadOptions = {
      maxImageSize: 1, 
      uploadUrl: 'https://fancy-image-uploader-demo.azurewebsites.net/api/demo/upload'
    };

    this.userForm = this.fb.group({
      name: this.fb.group({
        first: [this.user.name.first, [Validators.required, Validators.minLength(2)]],
        last: [this.user.name.last, [Validators.required, Validators.minLength(2)]],
      }),
      email: [this.user.email, [Validators.required, Validators.email, Validators.minLength(6) ]],
      description: [this.user.description, [Validators.required, Validators.maxLength(2000)]]
    });
  }

  onSubmit({ value, valid }: { value: any, valid: boolean }) {
    assign( this.user, value);
    this.submitEvent.emit(this.user);
  }
  onCancel() {
    this.cancelEvent.emit();
  }
  onUpload(file: UploadedFile) {
    console.log(file.response);
  }
}
export default {
  components: {
    ViewPaneInfo
  },
  props: {
    question: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      selectedSorting: 'votes',
      sortingOptions: ['votes', 'last activity', 'creation date']
    }
  },
  computed: {
    sortedAnswers() {
      switch (this.selectedSorting) {
        case 'last activity':
          return this.question.answers
            .concat()
            .sort(
              (a, b) => (a.last_activity_date < b.last_activity_date ? 1 : -1)
            )
        case 'creation date':
          return this.question.answers
            .concat()
            .sort(function (a, b) { if (a.rate < b.rate) { return 1 } if (a.rate > b.rate) { return -1; } return 0; })
        default:
          return this.question.answers
      }
    }
  },
  methods: {
    getDate(timestamp) {
		
      //return formatDate(timestamp)
    }
  }
}

