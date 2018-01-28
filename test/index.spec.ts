import { expect } from 'chai';
import * as index from '../src/index';

describe('Greeter', () => {

  it('has Greeter available', () => {
    expect(index.Greeter).to.not.be.undefined;
  });

});