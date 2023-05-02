import { PrecioPipe } from './precio.pipe';

describe('PrecioPipe', () => {
  it('create an instance', () => {
    const pipe = new PrecioPipe();
    expect(pipe).toBeTruthy();
  });
});
