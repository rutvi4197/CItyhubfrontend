import { CityhubfrontendPage } from './app.po';

describe('cityhubfrontend App', function() {
  let page: CityhubfrontendPage;

  beforeEach(() => {
    page = new CityhubfrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
