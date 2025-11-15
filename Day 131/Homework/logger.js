export function createLogger({level='info', prefix='[LOG]'}={}){
  const levels = ['error','warn','info']
  const levelIndex = levels.indexOf(level)

  function log(msgLevel, msg){
    if(levels.indexOf(msgLevel) <= levelIndex){
      console.log(`${prefix} [${msgLevel.toUpperCase()}] ${msg}`)
    }
  }

  return {
    error: (msg)=>log('error', msg),
    warn: (msg)=>log('warn', msg),
    info: (msg)=>log('info', msg)
  }
}

export default createLogger

function mapWith(fn, arr){
  const res = []
  for(let i=0;i<arr.length;i++) res.push(fn(arr[i],i,arr))
  return res
}

function filterWith(fn, arr){
  const res = []
  for(let i=0;i<arr.length;i++) if(fn(arr[i],i,arr)) res.push(arr[i])
  return res
}

function reduceWith(fn, arr, initial){
  let acc = initial
  for(let i=0;i<arr.length;i++) acc = fn(acc, arr[i], i, arr)
  return acc
}

console.log(mapWith(x=>x*2,[1,2,3]))
console.log(filterWith(x=>x%2===0,[1,2,3,4])) 
console.log(reduceWith((a,b)=>a+b,[1,2,3,4],0))


function makeCounter(start){
  let count = start
  return {
    inc: ()=>count++,
    dec: ()=>count--,
    get: ()=>count
  }
}

const c1 = makeCounter(0)
const c2 = makeCounter(10)

c1.inc(); c1.inc()
c2.dec()

console.log(c1.get()) 
console.log(c2.get())

