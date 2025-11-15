// 3) 
let num: number = 10
let str: string = "Hello"
let bool: boolean = true
let arr: number[] = [1, 2, 3]
let anyVar: any = "can be anything"
let unknownVar: unknown = 5
let voidVar: void = undefined
let nullVar: null = null
let undefinedVar: undefined = undefined

// 4)
let variableName: string = "text"

// 5)
let a: number = 5
let b: number = 10
console.log(a + b)
// 7) 
function add(x: number, y: number): number {
  return x + y
}

// 8)
function logMessage(msg: string): void {
  console.log(msg)
}

// 9)
function sumFive(a: number, b: number, c: number, d: number, e: number): number {
  return a + b + c + d + e
}

// 10)
let numbers: number[] = []
let names: string[] = []

// 11) 
let nums: number[] = [1,2,3,4,5]

// 12) 
let nameList: string[] = ["Luka","Nika","Ana"]

// 13) 
function printArray(arr: any[]) {
  for (let i=0;i<arr.length;i++){
    console.log(arr[i])
  }
}

// 14) 
function combineArrays<T>(arr1: T[], arr2: T[]): T[] {
  return arr1.concat(arr2)
}

// 15)
let userTuple: [string, number, boolean]

// 16)
let user: [string, number, boolean] = ["Luka", 25, true]
