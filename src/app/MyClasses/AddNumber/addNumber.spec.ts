import {AddNumber} from './AddNumber';

describe('AddNumber', () => {
  it('should create an instance of AddNumber', () => {
    expect(new AddNumber()).toBeTruthy();
  });

  it('should return string value', () => {
    const pastebin = new AddNumber();
    const answer =  pastebin.add('34658374653562386593745687465', '7209347938346534472309420349');
    expect(answer).toEqual('41867722591908921066055107814');
  });

});
