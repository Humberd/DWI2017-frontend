import { DWI2017FrontendPage } from './app.po';

describe('dwi2017-frontend App', () => {
  let page: DWI2017FrontendPage;

  beforeEach(() => {
    page = new DWI2017FrontendPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
