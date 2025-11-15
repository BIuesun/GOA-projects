// 1.შექმენით რამოდენიმე ობიექტი სადაც ტელეფონის მოდელებს შეინახავთ და ასევე სხვა მახასიათებლებს.
const phones = [
    {
        brand: "Apple",
        model: "iPhone 14 Pro",
        releaseYear: 2022,
        screenSize: "6.1 inches",
        storage: ["128GB", "256GB", "512GB", "1TB"],
        camera: {
            main: "48MP",
            front: "12MP"
        },
        price: 999,
        inStock: true
    },
    {
        brand: "Samsung",
        model: "Galaxy S23 Ultra",
        releaseYear: 2023,
        screenSize: "6.8 inches",
        storage: ["256GB", "512GB", "1TB"],
        camera: {
            main: "200MP",
            front: "12MP"
        },
        price: 1199,
        inStock: true
    },
    {
        brand: "Google",
        model: "Pixel 7 Pro",
        releaseYear: 2022,
        screenSize: "6.7 inches",
        storage: ["128GB", "256GB", "512GB"],
        camera: {
            main: "50MP",
            front: "10.8MP"
        },
        price: 899,
        inStock: false
    }
];
phones.forEach(phone => {
    console.log(`Brand: ${phone.brand}`);
    console.log(`Model: ${phone.model}`);
    console.log(`Release Year: ${phone.releaseYear}`);
    console.log(`Screen Size: ${phone.screenSize}`);
    console.log(`Storage Options: ${phone.storage.join(", ")}`);
    console.log(`Main Camera: ${phone.camera.main}`);
    console.log(`Front Camera: ${phone.camera.front}`);
    console.log(`Price: $${phone.price}`);
    console.log(`In Stock: ${phone.inStock ? "Yes" : "No"}`);
    console.log("-------------------");
});

// 2.შექმენით class იგივე მონაცემებით.

class Phone{
    constructor(brand, model, releaseYear, screenSize, storage, camera, price, inStock) {
        this.brand = brand;
        this.model = model;
        this.releaseYear = releaseYear;
        this.screenSize = screenSize;
        this.storage = storage;
        this.camera = camera;
        this.price = price;
        this.inStock = inStock;
    }
    displayDetails() {
        console.log(`Brand: ${this.brand}`);
        console.log(`Model: ${this.model}`);
        console.log(`Release Year: ${this.releaseYear}`);
        console.log(`Screen Size: ${this.screenSize}`);
        console.log(`Storage Options: ${this.storage.join(", ")}`);
        console.log(`Main Camera: ${this.camera.main}`);
        console.log(`Front Camera: ${this.camera.front}`);
        console.log(`Price: $${this.price}`);
        console.log(`In Stock: ${this.inStock ? "Yes" : "No"}`);
        console.log("-------------------");
    }
}