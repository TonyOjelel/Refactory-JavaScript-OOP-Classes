//Calssess
class Animal {
  constructor(name, color, type, sound) {
    this.name = name;
    this.color = color;
    this.type = type;
    this.sound = sound;
    this.speak = () => {
      return `The ${this.name} Says ${this.sound}`;
    };
  }
}
//Animal Objects
let Pig = new Animal("Pig", "Black", "Omnivores", "Oink");
console.log(`=================${Pig.name}=====================`);
console.log(Pig);
console.log(Pig.speak());

let Cow = new Animal("Cow", "Black", "Herbivores", "Moo");
console.log(`=================${Cow.name}=====================`);
console.log(Cow);
console.log(Cow.speak());

let Goat = new Animal("Goat", "White", "Herbivores", "Baa");
console.log(`=================${Goat.name}=====================`);
console.log(Goat);
console.log(Goat.speak());

let Cat = new Animal("Cat", "white", "Carnivores ", "Meow,");
console.log(`=================${Cat.name}=====================`);
console.log(Cat);
console.log(Cat.speak());

let Dog = new Animal("Dog", "white", "Carnivores ", "Bark");
console.log(`=================${Dog.name}=====================`);
console.log(Dog);
console.log(Dog.speak());

//Class book
class Book {
  constructor(title, author, yearPublished, isFree) {
    this.title = title;
    this.author = author;
    this.yearPublished = yearPublished;
    this.isFree = isFree;
    this.checkYear = () => {
      return `${this.title} by ${this.author} was released in ${this.yearPublished}`;
    };
    this.checkBook = () => {
      return `${this.title} by ${this.author} is ${
        isFree ? "free" : "paid for"
      } book to read`;
    };
  }
}

//Book objects
let Book1 = new Book(
  "Programming made is easy",
  "Johnathan McKeler",
  2016,
  true
);
console.log("================Book1====================");
console.log(Book1);
console.log(Book1.checkBook());
console.log(Book1.checkYear());

let Book2 = new Book("PHP The Right Way", "John Smith", 2015, false);
console.log("================Book2====================");
console.log(Book2);
console.log(Book2.checkBook());
console.log(Book1.checkYear());

let Book3 = new Book("Effective Golang", "Frankilin Moore", 2019, true);
console.log("================Book3====================");
console.log(Book3);
console.log(Book3.checkBook());
console.log(Book1.checkYear());

let Book4 = new Book("Your First Year in Code PDF", "Tim Willimas", 2019, true);
console.log("================Book4====================");
console.log(Book4);
console.log(Book4.checkBook());
console.log(Book1.checkYear());

let Book5 = new Book(
  "JavaScript for Impatient Programmers (ES2022 edition)",
  "Gravly Timothy",
  2022,
  true
);
console.log("================Book5====================");
console.log(Book5);
console.log(Book5.checkBook());
console.log(Book1.checkYear());

let Book6 = new Book(
  "HTML to React: The Ultimate Guide PDF.",
  "Jane Choudry",
  2021,
  true
);
console.log("================Book6====================");
console.log(Book6);
console.log(Book6.checkBook());
console.log(Book1.checkYear());

class Phone {
  constructor(os, model, version, brand, color, price, manufacturer) {
    this.os = os;
    this.model = model;
    this.version = version;
    this.brand = brand;
    this.color = color;
    this.price = price;
    this.manufacturer = manufacturer;
    this.displayPhoneDetails = () => {
      return {
        os: this.os,
        model: this.model,
        version: this.version,
        brand: this.brand,
        color: this.color,
        price: this.price,
        manufacturedBy: this.manufacturer,
      };
    };
  }
}
const Phone1 = new Phone(
  "android",
  "Tecno Spark 8",
  12.0,
  "Tecno",
  "Silver",
  400000,
  "Tecno Mobile"
);
const Phone2 = new Phone(
  "iOS",
  "Iphone 13 Pro Max",
  13,
  "Iphone",
  "Black",
  1500000,
  "Apple"
);
const Phone3 = new Phone(
  "iOS",
  "Iphone 14 Pro Max",
  14,
  "Iphone",
  "Silver",
  4000000,
  "Apple"
);
const Phone4 = new Phone(
  "android",
  "Samsang S6",
  12,
  "Samsang",
  "Black",
  1800000,
  "Samsang"
);
const Phone5 = new Phone(
  "android",
  "Infix Hot 12",
  12,
  "Infinix",
  "Black",
  800000,
  "Infinix Mobile"
);
console.log(Phone1.displayPhoneDetails());
console.log(Phone2.displayPhoneDetails());
console.log(Phone3.displayPhoneDetails());
console.log(Phone4.displayPhoneDetails());
console.log(Phone5.displayPhoneDetails());

class Product {
  constructor(id, name, price, discount, size) {
    this.id = id;
    this.price = price;
    this.name = name;
    this.discount = discount;
    this.size = size;
    this.productDetails = {
      id: this.id,
      name: this.name,
      price: this.price,
      discount: this.discount,
    };
  }
}
const Product1 = new Product(1, "ear-pods", 50000, (20 / 100) * 100, "4cm");
const Product2 = new Product(2, "Laptop", 400000, (5 / 100) * 100, "10 iches");
const Product3 = new Product(3, "Iphone", 200000, (1 / 100) * 100, "4.5 iches");
const Product4 = new Product(4, "Mouse", 50000, (18 / 100) * 100, "5 iches");
const Product5 = new Product(5, "Keyboard", 50000, (18 / 100) * 100, "15cm");
console.log(Product1.productDetails);
console.log(Product2.productDetails);
console.log(Product3.productDetails);
console.log(Product4.productDetails);
console.log(Product5.productDetails);

class Pen {
  constructor(color, brand, lidColor) {
    this.color = color;
    this.brand = brand;
    this.write = () => {
      return `This is pen writes a ${color} cluor`;
    };
    this.showColor = () => {
      return `it is a ${color} ${brand} pen`;
    };
    this.open = () => {
      return "Pen is opened";
    };
  }
}
console.log("=============Pens===============");
const Pen1 = new Pen("Blue", "Nataraj", "blue");
const Pen2 = new Pen("Blue", "Bic", "blue");
const Pen3 = new Pen("Red", "Bic", "red");
const Pen4 = new Pen("Black", "Nice clear", "black");
const Pen5 = new Pen("Blue", "Smile", "blue");
console.log(Pen1.write(), " And", Pen1.showColor());
console.log(Pen2.write(), " And", Pen2.showColor());
console.log(Pen3.write(), " And", Pen3.showColor());
console.log(Pen4.write(), " And", Pen4.showColor());
console.log(Pen5.write(), " And", Pen5.showColor());
