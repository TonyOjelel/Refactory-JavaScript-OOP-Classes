//In the answers below, we have created 10 classes with atleast 5 properties and atleast 5 objects
//for each class.eg: class Person with five properties (name, age, gender, height, and weight) 
//and console.log(Person1) that outputs a string representation of the person's details. We have 
//also created five objects of the Person class and console.log() their respective output. 

// Class 1: Person
class Person {
  constructor(name, age, gender, height, weight) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.height = height;
    this.weight = weight;
  }
}

// Objects for Person class
const person1 = new Person("John", 25, "male", 180, 75);
const person2 = new Person("Alice", 30, "female", 165, 55);
const person3 = new Person("Bob", 40, "male", 170, 80);
const person4 = new Person("Emma", 28, "female", 175, 65);
const person5 = new Person("David", 45, "male", 190, 95);

// Class 2: Car
class Car {
  constructor(make, model, year, color, price) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.price = price;
  }
}

// Objects for Car class
const car1 = new Car("Toyota", "Camry", 2020, "black", 25000);
const car2 = new Car("Honda", "Civic", 2018, "white", 20000);
const car3 = new Car("Ford", "F-150", 2015, "blue", 30000);
const car4 = new Car("Chevrolet", "Malibu", 2017, "red", 22000);
const car5 = new Car("BMW", "X5", 2019, "silver", 45000);

// Class 3: Book
class Book {
  constructor(title, author, publisher, publicationYear, genre) {
    this.title = title;
    this.author = author;
    this.publisher = publisher;
    this.publicationYear = publicationYear;
    this.genre = genre;
  }
}

// Objects for Book class
const book1 = new Book("To Kill a Mockingbird", "Harper Lee", "J. B. Lippincott & Co.", 1960, "Classic");
const book2 = new Book("The Catcher in the Rye", "J.D. Salinger", "Little, Brown and Company", 1951, "Classic");
const book3 = new Book("The Hunger Games", "Suzanne Collins", "Scholastic Press", 2008, "Young Adult");
const book4 = new Book("The Da Vinci Code", "Dan Brown", "Doubleday", 2003, "Thriller");
const book5 = new Book("The Lord of the Rings", "J.R.R. Tolkien", "George Allen & Unwin", 1954, "Fantasy");


// Class 4: Animal 
class Animal {
constructor(species, sound, color, numOfLegs, isPredator) {
this.species = species;
this.sound = sound;
this.color = color;
this.numOfLegs = numOfLegs;
this.isPredator = isPredator;
}
}

// Objects for Animal class
const Animal1 = new Animal("Lion", "Roar", "Golden", 4, true);
const Animal2 = new Animal("Penguin", "Squawk", "Black and White", 2, false);
const Animal3 = new Animal("Elephant", "Trumpet", "Gray", 4, false);
const Animal4 = new Animal("Snake", "Hiss", "Green", 0, true);
const Animal5 = new Animal("Parrot", "Squawk", "Multicolored", 2, false);


// Class 5: Movie
class Movie {
constructor(title, director, releaseYear, genre, runtime) {
this.title = title;
this.director = director;
this.releaseYear = releaseYear;
this.genre = genre;
this.runtime = runtime;
}
}

// Objects for Movie class
const movie1 = new Movie("The Shawshank Redemption", "Frank Darabont", 1994, "Drama", 142);
const movie2 = new Movie("The Dark Knight", "Christopher Nolan", 2008, "Action", 152);
const movie3 = new Movie("Forrest Gump", "Robert Zemeckis", 1994, "Drama", 142);
const movie4 = new Movie("Star Wars: A New Hope", "George Lucas", 1977, "Science Fiction", 121);
const movie5 = new Movie("The Godfather", "Francis Ford Coppola", 1972, "Drama", 177);

// Class 6: Laptop
class Laptop {
constructor(brand, model, processor, ram, storage) {
this.brand = brand;
this.model = model;
this.processor = processor;
this.ram = ram;
this.storage = storage;
}
}

// Objects for Laptop class
const laptop1 = new Laptop("Apple", "MacBook Pro", "Intel Core i5", "8 GB", "256 GB SSD");
const laptop2 = new Laptop("Dell", "XPS 13", "Intel Core i7", "16 GB", "512 GB SSD");
const laptop3 = new Laptop("Lenovo", "ThinkPad X1 Carbon", "Intel Core i5", "8 GB", "256 GB SSD");
const laptop4 = new Laptop("HP", "Spectre x360", "Intel Core i7", "16 GB", "1 TB SSD");
const laptop5 = new Laptop("Asus", "ZenBook Pro Duo", "Intel Core i9", "32 GB", "1 TB SSD");

// Class 7: Restaurant
class Restaurant {
constructor(name, cuisine, rating, location, priceRange) {
this.name = name;
this.cuisine = cuisine;
this.rating = rating;
this.location = location;
this.priceRange = priceRange;
}
}

// Objects for Restaurant class
const restaurant1 = new Restaurant("Joe's Pizza", "Italian", 4.5, "New York City", "$$");
const restaurant2 = new Restaurant("Sushi Dai", "Japanese", 4.9, "Tokyo", "$$$");
const restaurant3 = new Restaurant("El Celler de Can Roca", "Spanish", 4.8, "Girona", "$$$$");
const restaurant4 = new Restaurant("Noma", "Danish", 4.7, "Copenhagen", "$$$$");
const restaurant5 = new Restaurant("Osteria Francescana", "Italian", 4.8, "Modena", "$$$$");

// Class 8: Phone
class Phone {
    constructor(model, manufacturer, storage, color, price) {
      this.model = model;
      this.manufacturer = manufacturer;
      this.storage = storage;
      this.color = color;
      this.price = price;
    }
  }
  
  // Objects for Phone class
  const phone1 = new Phone("iPhone 13 Pro", "Apple", "128 GB", "Graphite", 999);
  const phone2 = new Phone("Galaxy S21", "Samsung", "256 GB", "Phantom Black", 799);
  const phone3 = new Phone("Pixel 6 Pro", "Google", "128 GB", "Stormy Black", 899);
  const phone4 = new Phone("OnePlus 9 Pro", "OnePlus", "256 GB", "Morning Mist", 969);
  const phone5 = new Phone("Xperia 1 III", "Sony", "256 GB", "Frosted Black", 1299);

// Class 9: Product
class Product {
    constructor(name, price, category, description, inStock) {
      this.name = name;
      this.price = price;
      this.category = category;
      this.description = description;
      this.inStock = inStock;
    }
  }
  
  // Objects for Product class
  const product1 = new Product("Samsung Galaxy S21 Ultra", 1199, "Smartphones", "Samsung's latest flagship smartphone", true);
  const product2 = new Product("Sony WH-1000XM4", 349, "Headphones", "Sony's noise-cancelling headphones", true);
  const product3 = new Product("Samsung Galaxy Tab S7", 649, "Tablets", "Samsung's premium Android tablet", true);
  const product4 = new Product("DJI Mavic Air 2", 799, "Drones", "DJI's compact and powerful drone", false);
  const product5 = new Product("Bose SoundLink Revolve+", 299, "Speakers", "Bose's portable Bluetooth speaker", true);
  
  // Class 10: Hotel
class Hotel {
    constructor(name, city, numberOfRooms, rating, isPetFriendly) {
      this.name = name;
      this.city = city;
      this.numberOfRooms = numberOfRooms;
      this.rating = rating;
      this.isPetFriendly = isPetFriendly;
    }
  }
  
  // Objects for Hotel class
  const hotel1 = new Hotel("Hilton San Francisco Union Square", "San Francisco", 1914, 4.0, true);
  const hotel2 = new Hotel("The Plaza Hotel", "New York City", 282, 4.4, false);
  const hotel3 = new Hotel("Ritz-Carlton Tokyo", "Tokyo", 247, 4.8, false);
  const hotel4 = new Hotel("Shangri-La Hotel Paris", "Paris", 101, 4.7, true);
  const hotel5 = new Hotel("JW Marriott Marquis Hotel Dubai", "Dubai", 1608, 4.6, true);
  

// Testing

console.log("****************1****************")
console.log(person1);
console.log(person2);
console.log(person3);
console.log(person4);
console.log(person5);

console.log("****************2****************")
console.log(car1);
console.log(car2);
console.log(car3);
console.log(car4);
console.log(car5);

console.log("****************3*****************")
console.log(product1);
console.log(product2);
console.log(product3);
console.log(product4);
console.log(product5);

console.log("****************4*****************")
console.log(Animal1);
console.log(Animal2);
console.log(Animal3);
console.log(Animal4);
console.log(Animal5);

console.log("****************5*****************")
console.log(movie1);
console.log(movie2);
console.log(movie3);
console.log(movie4);
console.log(movie5);

console.log("****************6******************")
console.log(laptop1);
console.log(laptop2);
console.log(laptop3);
console.log(laptop4);
console.log(laptop5);

console.log("****************7******************")
console.log(restaurant1);
console.log(restaurant2);
console.log(restaurant3);
console.log(restaurant4);
console.log(restaurant5);

console.log("****************8******************")
console.log(phone1);
console.log(phone2);
console.log(phone3);
console.log(phone4);
console.log(phone5);

console.log("****************9******************")
console.log(product1);
console.log(product2);
console.log(product3);
console.log(product4);
console.log(product5);

console.log("***************10******************")
console.log(hotel1);
console.log(hotel2);
console.log(hotel3);
console.log(hotel4);
console.log(hotel5);

