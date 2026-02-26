// type annotations
// Aula https://www.youtube.com/watch?v=fQxgKChQvt4

const myStr: string = "weedub"
const myNumber: number = 22  // can be Infinity or NaN
const myBoolean: boolean = false

const myAny: any = {}  // Any type, used in a specific context
const myNull: null = null
const myUndefined: undefined = undefined

// const mySymbol: symbol = 
// const myBigInt: bigint = 

function sum(a: number, b: number): number {
    return a + b
}


function greet(name: string, age?: number): string {
    return name
}



// --------
// Type Inference

const myVar2 = "weedub" // Ts can infer what kind of variable i have, once i place a value

// myVar2 = "ac"

const filter = (value: number) => value < 0

const numbers = [-3, -2, -1, 0, 1, 2, 3]

numbers.filter(filter)