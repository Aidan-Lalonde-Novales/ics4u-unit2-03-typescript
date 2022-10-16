/**
 * This file pushes to, pops, and prints a stack.
 *
 * By:      Aidan Lalonde-Novales
 * Version: 1.0
 * Since:   2022-10-11
 */

class Stack {
  private readonly stack: number[] = []

  // getter method - returns the stack
  getStack(): number[] {
    return this.stack
  }

  // push method - inserts a number to the stack
  push(tempNum: number): void {
    this.stack.push(tempNum)
  }

  // pop method - pops the brackets of the stack
  popStack(): number | undefined {
    return this.stack.pop()
  }
}

export = Stack
