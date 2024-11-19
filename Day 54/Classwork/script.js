let arr = [4,5,3,6,8,2,1,7,22,0,3];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) continue;  
    console.log(arr[i]);
}