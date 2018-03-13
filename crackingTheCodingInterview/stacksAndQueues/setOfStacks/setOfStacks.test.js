'use strict';
const SetOfStacks = require('./SetOfStacks');

describe(`SetOfStacks`, () => {
  test(`SetOfStacks push should add an element to the top of the stack and create a new sub-stack if a stack reaches capacity`, () => {
    let stack = new SetOfStacks(3);
    stack.push(2);
    stack.push(4);
    stack.push(8);
    stack.push(3);
    stack.push(1);
    expect(stack.pop()).toBe(1);
  });

  test(`SetOfStacks pop should remove the last element from the top of the stack and delete a sub-stack if it is empty`, () => {
    let stack = new SetOfStacks(3);
    stack.push(2);
    stack.push(4);
    stack.push(8);
    stack.push(3);
    stack.push(1);
    expect(stack.pop()).toBe(1);
    expect(stack.pop()).toBe(3);
    expect(stack.stacks[1]).toBeFalsey;
  });
});
