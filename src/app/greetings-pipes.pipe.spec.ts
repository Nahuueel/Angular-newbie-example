import { GreetingsPipesPipe } from './greetings-pipes.pipe';

describe('GreetingsPipesPipe', () => {
  it('create an instance', () => {
    const pipe = new GreetingsPipesPipe();
    expect(pipe).toBeTruthy();
  });
});
