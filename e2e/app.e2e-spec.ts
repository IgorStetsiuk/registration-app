import { SimpleAppPage } from './app.po';

describe('simple-app App', () => {
  let page: SimpleAppPage;

  beforeEach(() => {
    page = new SimpleAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
