export function add(a,b){ return a+b }
export function multiply(a,b){ return a*b }


export default function formatDate(date){
  return date.toISOString().split('T')[0]
}

export function parseDate(str){
  return new Date(str)
}


import formatDate, { parseDate } from './utils.js'

const today = new Date()
console.log(formatDate(today))
console.log(parseDate("2025-11-15"))



let count = 0
export function inc(){ count++ }
export function get(){ return count }



