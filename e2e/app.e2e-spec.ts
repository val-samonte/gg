import { GgPage } from './app.po';

describe('gg App', () => {
  let page: GgPage;

  beforeEach(() => {
    page = new GgPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
