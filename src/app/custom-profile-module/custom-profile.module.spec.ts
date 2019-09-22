import { CustomProfileModule } from './custom-profile.module';

describe('CustomProfileModuleModule', () => {
  let customProfileModule: CustomProfileModule;

  beforeEach(() => {
    customProfileModule = new CustomProfileModule();
  });

  it('should create an instance', () => {
    expect(customProfileModule).toBeTruthy();
  });
});
