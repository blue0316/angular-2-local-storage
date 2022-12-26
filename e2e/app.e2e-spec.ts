import { RtmsAdminPage } from './app.po';

describe('rtms-admin App', function() {
  let page: RtmsAdminPage;

  beforeEach(() => {
    page = new RtmsAdminPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
