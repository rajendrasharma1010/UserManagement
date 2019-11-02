import { firstLetterUppercase } from './first-letter-uppercase.pipe';

describe('firstLetterUppercase', () => {
  it('create an instance', () => {
    const pipe = new firstLetterUppercase();
    expect(pipe).toBeTruthy();
  });
});
