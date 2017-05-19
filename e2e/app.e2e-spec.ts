import { VoyageAppPage } from './app.po';

describe('voyage-app App', () => {
  let page: VoyageAppPage;

  beforeEach(() => {
    page = new VoyageAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
