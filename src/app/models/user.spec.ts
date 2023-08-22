import { User } from './user';

describe('User', () => {
  it('should create an instance', () => {
    expect(new User(2, "KDK", "NDD", "JJDF", "DSJJDS", "SKDKS")).toBeTruthy();
  });
});
