//Classess
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

class Farmer {
  constructor(firstName, lastName, age, address, farmerType) {
    this.name = firstName + " " + lastName;
    this.age = age;
    this.address = address;
    this.type = farmerType;
  }
}
const Farmer1 = new Farmer("Geogrey", "Odep", 45, "Tororo", "Mixed Farmer");
const Farmer2 = new Farmer("Jane", "Nakato", 50, "Mukono", "Poultry Farmer");
const Farmer3 = new Farmer("Mercy", "Awino", 49, "Busia", "Mixed Farmer");
const Farmer4 = new Farmer("Paul", "Ongaba", 45, "Palisa", "Mixed Farmer");
const Farmer5 = new Farmer("Rose", "Bsaso", 45, "Seeta", "Piggery Farmer");
console.log(Farmer1);
console.log(Farmer2);
console.log(Farmer3);
console.log(Farmer4);
console.log(Farmer5);

class StudentGrades {
  constructor(studentName, course, marks, cu, gp) {
    this.name = studentName;
    this.course = course;
    this.marks = marks;
    this.cu = cu;
    this.gp = gp;
  }
}
let Student1 = new StudentGrades("Wamon John Brian", "Debugging", 75, 4, 4);
let Student2 = new StudentGrades(
  "Olamba Annet",
  "Object oriented Programming",
  85,
  4,
  5
);
let Student3 = new StudentGrades("James Odong", "Networking", 75, 4, 4);
let Student4 = new StudentGrades("Janet Akello", "Programming", 95, 4, 5);
let Student5 = new StudentGrades("Adong Holga", "Networking", 89, 4, 5);
console.log(Student1);
console.log(Student2);
console.log(Student3);
console.log(Student4);
console.log(Student5);

class Song {
  constructor(title, writer, album, artist, yearReleased) {
    this.title = title;
    this.writer = writer;
    this.album = album;
    this.artist = artist;
    this.yearReleased = yearReleased;
  }
}
const Song1 = new Song(
  "Love theory",
  "Jonathan McReynolds",
  "Love Theory",
  "Kirk franklin",
  2019
);
const Song2 = new Song("Nyimbo", "Pompi", "Bwana", "Pompi ft Mag44", 2019);
const Song3 = new Song(
  "Hello peace",
  "Brandon Lake",
  "Kingdom Book",
  "Mavrick City Music",
  2022
);
const Song4 = new Song(
  "Up",
  "Tauren Wells",
  "joy in the Morning",
  "Tauren Wells",
  2022
);
const Song5 = new Song(
  "Desire",
  "Lomoblaze",
  "Sunday in lagos",
  "Lomoblaze",
  2022
);
console.log(Song1);
console.log(Song2);
console.log(Song3);
console.log(Song4);
console.log(Song5);

class Bill {
  constructor(id, type, date, time, waSsuccess, payee) {
    this.id = id;
    this.type = type;
    this.date = date;
    this.time = time;
    this.waSsuccess = waSsuccess;
    this.payee = payee;
  }
}
const Bill1 = new Bill(102, "Water Bill", "12-12-2022", "17:00", true, "NWSC");
const Bill2 = new Bill(
  1000,
  "Electricity Bill",
  "13-03-2022",
  "13:00",
  true,
  "UMEME"
);
const Bill3 = new Bill(111, "Internet", "11-11-2022", "03:00", true, "Zuku");
const Bill4 = new Bill(198, "Airtime", "14-06-2022", "06:00", true, "MTN");
const Bill5 = new Bill(456, "PAYE", "12-09-2022", "11:00", true, "URA");
console.log(Bill1);
console.log(Bill2);
console.log(Bill3);
console.log(Bill4);
console.log(Bill5);
class Venue {
  constructor(lat, long, name, capacity, city) {
    this.location = {
      latitude: lat,
      longitude: long,
      name: name,
      capacity: capacity,
      city: city,
    };
  }
}
const Venue1 = new Venue(23456, 123456, "MTN Arena Lugogo", 8000, "Kampala");
const Venue2 = new Venue(7890, 1233756, "Theatre Labonita", 5000, "Kampala");
const Venue3 = new Venue(
  143728384,
  12347456,
  "Kololo Airstrip",
  30000,
  "Kampala"
);
const Venue4 = new Venue(
  456789,
  0987656,
  "Lugogo Hokey Grounds",
  20000,
  "Kampala"
);
const Venue5 = new Venue(
  222456,
  123356,
  "Lugogo Cricket Oval",
  30000,
  "Kampala"
);
const Venue6 = new Venue(14334, 4334, "Tobani Center", 15000, "Kampala");
console.log(Venue1);
console.log(Venue2);
console.log(Venue3);
console.log(Venue4);
console.log(Venue5);
console.log(Venue6);
