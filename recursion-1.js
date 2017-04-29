//-----------------------------------------
// TASK 1: validEnclosures()
//
//   Check to see that a set of enclosures (parentheses, braces, brackets) 
//   is valid.
//  
//   e.g. validEnclosures('{}') => true
//   e.g. validEnclosures('{()}') => true
//   e.g. validEnclosures('{[])}') => false
//   e.g. validEnclosures('{([])}') => true
//
//  Hint: You may want to use recursion ;)
//
//------------------------------------------

 
console.assert(validEnclosures('{}') === true)
console.assert(validEnclosures('{(}') === false)
console.assert(validEnclosures('{[][]}') === true)
console.assert(validEnclosures('{[[])}') === false)
console.assert(validEnclosures('{([])}') === true)
console.assert(validEnclosures('[{}[()()]]') === true)
