/**
 * This program runs alongside Stack.ts
 * in order to add items to and view a popped stack.
 *
 * By:      Aidan Lalonde-Novales
 * Version: 1.0
 * Since:   2022-10-11
 */

import Stack from './Stack'
import promptSync from 'prompt-sync'

// Constants
const prompt = promptSync()
const myStack = new Stack()

// Input & Process
while (true) {
  const tempNum = Number(prompt('Enter a number to add (-1 to pop): '))
  if (tempNum === -1) {
    break
  } else {
    myStack.push(tempNum)
  }
}

// Output
console.log('\nOriginal Stack:')
console.log(myStack.getStack())
console.log('\nPopped Item:')
console.log(myStack.popStack())

console.log('\nDone.')
