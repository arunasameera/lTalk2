import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/') as Promise<any>;
  }


// master commit1


// master commit2

// feature commit1

// feature commit2


  getTitleText() {
    return element(by.css('app-root h1')).getText() as Promise<string>;
  }
}
