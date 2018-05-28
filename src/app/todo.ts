export class Todo {
  id: number;
  title = '';
  complete = false;

  constructor(values: { [key: string]: any } = {}) {
    Object.assign(this, values);
  }
}
