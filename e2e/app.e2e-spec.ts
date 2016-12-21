import { WizardAppPage } from './app.po';

describe('wizard-app App', function() {
  let page: WizardAppPage;

  beforeEach(() => {
    page = new WizardAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
