import { TravelappPage } from './app.po';

describe('travelapp App', function() {
  let page: TravelappPage;

  beforeEach(() => {
    page = new TravelappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
