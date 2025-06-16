// 1.შექმენი კლასი Product, სადაც ფასისთვის გამოიყენება getter და setter, და setter-ში აკრძალულია უარყოფითი რიცხვი.

class Product{
    constructor(name,price){
        this.name = name;
        this.price = price;
    }
    get price(){
        return this._price;
    }
    set price(value){
        if(value < 0){
            console.log("negatives are prohibited");
        }else{
            this._price = value;
        }
    }
}

let prod = new Product("kvercxi",60);;
console.log(prod.price);
prod.price = -10;
console.log(prod.price);



// 2.შექმენი კლასი Rectangle, რომელსაც აქვს ფართობის getter და ზომების setter, რომელიც იღებს ობიექტს {width, height}.

class Rectangle{
    constructor(width,height){
        this._width = width;
        this._height = height;
    }
    get area(){
        return this._width * this._height;
    }
    set parameters({width,height}){
        if(width > 0 && height > 0){
            this._width = width;
            this._height = height;
        }else{
            return `this rectangle cant exist`
        }
    }
}
let rect = new Rectangle(10,5);
console.log(rect.area);
rect.parameters = ({width:50,height:2})
console.log(rect.area)