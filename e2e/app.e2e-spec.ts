import { HungyiAngularPage } from './app.po';

describe('hungyi-angular App', () => {
  let page: HungyiAngularPage;

  beforeEach(() => {
    page = new HungyiAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
