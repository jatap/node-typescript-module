import { expect } from 'chai';
import { Greeter } from '../src/greeter';

describe('Greeter', () => {

  it('greets with message', () => {
    const greeter = new Greeter('friend');
    expect(greeter.greet()).to.equal('Bonjour, friend!');
  });

});
