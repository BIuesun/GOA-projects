// 1.შექმენით პატარა ობიექტი ადამიანების ინფორმაციის შესახებ, მაგალითად person1 ობიექტში იქნება key: age, name, lastname, height და ა.შ.
let obj = {
    name:"Luka",
    last_name:"Chumbashvili",
    age:"16",
}

// 2.შექმენით მეთოდები ორი სხვადასხვა გზით.

let mth = {
    name:"Luka",
    greet:function(){
        console.log(`Hello ${this.name}`)
    },
    greet2(){
        console.log(`Sup`)
    }
}
mth.greet()
mth.greet2()

// "this" miutitebs objectze, umetesad globalze

