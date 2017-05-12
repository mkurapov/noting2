import { Noting2Page } from './app.po';

describe('noting2 App', () => {
  let page: Noting2Page;

  beforeEach(() => {
    page = new Noting2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
