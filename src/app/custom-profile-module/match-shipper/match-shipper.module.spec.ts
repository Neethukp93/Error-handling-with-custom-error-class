import { MatchShipperModule } from './match-shipper.module';

describe('MatchShipperModule', () => {
  let matchShipperModule: MatchShipperModule;

  beforeEach(() => {
    matchShipperModule = new MatchShipperModule();
  });

  it('should create an instance', () => {
    expect(matchShipperModule).toBeTruthy();
  });
});
