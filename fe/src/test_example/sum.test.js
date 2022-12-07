import { describe, expect, it } from 'vitest';

import sum from './sum';

describe('sum', () => {
  it('1+2=3', () => {
    expect(sum(1, 2)).toEqual(3);
  });
});
