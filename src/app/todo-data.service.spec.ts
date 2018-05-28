import {TestBed} from '@angular/core/testing';
import {TodoDataService} from './todo-data.service';
import {AppComponent} from './app.component';
import {Todo} from './todo';


describe('TodoDataService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ TodoDataService ] // declare the test service
    });
  });

  it('should add todo to the list increases its length by one', () => {
    const todoDataService = TestBed.get(TodoDataService);
    const data = {
      title: 'testing',
      complete: false
    };
    const lnAfterAdd = todoDataService.todos.length + 1;
    todoDataService.addTodo(data);
    expect(todoDataService.todos.length).toEqual(lnAfterAdd);
  });

  it('last element of the list should corresponds to the added task', () => {
    const todoDataService = TestBed.get(TodoDataService);
    const data = {
      title: 'testing',
      complete: false
    };

    todoDataService.addTodo(data);
    expect(todoDataService.todos[todoDataService.todos.length - 1].title).toEqual(data.title);
  });
});
