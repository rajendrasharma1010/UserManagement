import {trigger, animate, style, group, query, transition} from '@angular/animations';

export const routerTransition = trigger('routerTransition', [
  transition('* => *', [
    query(':enter, :leave', style({ position: 'fixed' }), { optional: true }),
    group([
      query(':enter', [
        style({ transform: 'translateY(-100%)' }),
        animate('0.5s ease-in-out', style({ transform: 'translateY(0%)' }))
      ], { optional: true }),
      query(':leave', [
        style({ transform: 'scale(1)', opacity: '.5' }),
        animate('0.4s ease-in-out', style({ transform: 'scale(0)' }))
      ], { optional: true })
    ])
  ])
]); 


