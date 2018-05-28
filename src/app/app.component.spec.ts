import {TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {TodoDataService} from './todo-data.service';
import {FormsModule} from '@angular/forms';

describe('AppComponent', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComponent ],
      imports: [FormsModule],
      providers: [ TodoDataService ] // declare the test service
    });
  });

  it('the quantity should be displayed correctly', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.debugElement.componentInstance;
    component.addTodo();
    fixture.detectChanges();
    const count = fixture.debugElement.nativeElement.querySelector('strong').textContent;
    expect(count).toEqual('1');
  });

  it('clicking the user on the cross to the right of item causes it to be deleted with the correct parameter.', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.debugElement.componentInstance;
    const data = {
      id: 1,
      title: '',
      complete: false
    };

    spyOn(component , 'removeTodo').and.callFake(function(arg) {
      expect(arg.id).toMatch('1');
    });
    component.removeTodo(data);

    expect(component.removeTodo).toHaveBeenCalledWith(data);
  });

});



