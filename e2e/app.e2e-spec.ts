import { TrackChartTestPage } from './app.po';

describe('track-chart-test App', () => {
  let page: TrackChartTestPage;

  beforeEach(() => {
    page = new TrackChartTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
