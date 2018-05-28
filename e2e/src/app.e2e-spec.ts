import { AppPage } from './app.po';
import {$, $$, by, element, protractor} from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;
  const inputElement = element(by.className('new-todo'));

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display Todos', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Todos');
  });

  it('should add task in list', () => {
    page.navigateTo();
    inputElement.sendKeys('test task', protractor.Key.ENTER);
    expect($$('.todo-list li').count()).toBe(1);
  });

  it('should add task in list and delete task', () => {
    page.navigateTo();
    inputElement.sendKeys('test task', protractor.Key.ENTER);
    inputElement.clear();
    inputElement.sendKeys('test task2', protractor.Key.ENTER);
    inputElement.clear();
    inputElement.sendKeys('test task3', protractor.Key.ENTER);
    inputElement.clear();
    const list = element(by.css('li'));
    $$('.toggle').get(1).click();
    expect($$('.todo-list li').get(1).getAttribute('class')).toMatch('complete');
  });

});
