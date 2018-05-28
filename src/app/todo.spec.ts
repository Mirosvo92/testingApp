import {Todo} from './todo';

describe('Todo', () => {
  it('should create an instance of Todo', () => {
    expect(new Todo()).toBeTruthy();
  });
  it('should accept values', () => {
    const pastebin = new Todo({
      id: 111,
      title: 'Hello world',
      complete: false
    });
    expect(pastebin.id).toEqual(111);
    expect(pastebin.complete).toEqual(false);
    expect(pastebin.title).toEqual('Hello world');
  });

});
