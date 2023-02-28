class User {
constructor(name, email, username, password, age) {
    this.name = name;
    this.email = email;
    this.username = username;
    this.password = password;
    this.age = age;
}
}

let user1 = new User("John Doe", "johndoe@example.com", "johndoe", "password123", 25);
let user2 = new User("Jane Smith", "janesmith@example.com", "janesmith", "password456", 30);
let user3 = new User("Michael Brown", "michaelbrown@example.com", "michaelbrown", "password789", 40);
let user4 = new User("Lily Wang", "lilywang@example.com", "lilywang", "passwordabc", 20);
let user5 = new User("David Lee", "davidlee@example.com", "davidlee", "passworddef", 50);
console.log(user1)  
//
class Car {
    constructor(make, model, year, color, price) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
        this.price = price;
    }
    }
    
    let car1 = new Car("Honda", "Civic", 2022, "red", 20000);
    let car2 = new Car("Toyota", "Camry", 2021, "blue", 25000);
    let car3 = new Car("Ford", "Mustang", 2023, "yellow", 35000);
    let car4 = new Car("Tesla", "Model S", 2021, "white", 80000);
    let car5 = new Car("BMW", "M3", 2022, "black", 60000);
    console.log(car1)      
    //
    class Book {
        constructor(title, author, genre, pageCount, publisher) {
            this.title = title;
            this.author = author;
            this.genre = genre;
            this.pageCount = pageCount;
            this.publisher = publisher;
        }
        }
        
        let book1 = new Book("To Kill a Mockingbird", "Harper Lee", "Classic", 281, "J. B. Lippincott & Co.");
        let book2 = new Book("1984", "George Orwell", "Dystopian", 328, "Secker & Warburg");
        let book3 = new Book("The Catcher in the Rye", "J.D. Salinger", "Coming-of-Age", 234, "Little, Brown and Company");
        let book4 = new Book("Pride and Prejudice", "Jane Austen", "Romance", 279, "T. Egerton, Whitehall");
        let book5 = new Book("The Great Gatsby", "F. Scott Fitzgerald", "Literary Fiction", 180, "Charles Scribner's Sons");
        console.log(book1)          

        ///
        class Animal {
            constructor(name, species, age, color, weight) {
                this.name = name;
                this.species = species;
                this.age = age;
                this.color = color;
                this.weight = weight;
            }
            }
            
            let animal1 = new Animal("Max", "Dog", 5, "brown", 25);
            let animal2 = new Animal("Mittens", "Cat", 3, "gray", 10);
            let animal3 = new Animal("Lucky", "Horse", 8, "brown",11)
            let animal4 = new Animal("simple","dog",3,"white",12)
            let animal5 = new Animal("Maxi", "cow", 5, "brown", 25);
            console.log(animal5)

///
class Movie {
constructor(title, director, genre, releaseYear, runtime) {
    this.title = title;
    this.director = director;
    this.genre = genre;
    this.releaseYear = releaseYear;
    this.runtime = runtime;
}
}

let movie1 = new Movie("The Godfather", "Francis Ford Coppola", "Crime", 1972, 175);
let movie2 = new Movie("The Shawshank Redemption", "Frank Darabont", "Drama", 1994, 142);
let movie3 = new Movie("The Dark Knight", "Christopher Nolan", "Action", 2008, 152);
let movie4 = new Movie("Inception", "Christopher Nolan", "Sci-Fi", 2010, 148);
let movie5 = new Movie("Pulp Fiction", "Quentin Tarantino", "Crime", 1994, 154);
console.log(movie2)  
//
class Laptop {
constructor(brand, model, displaySize, processor, ram) {
    this.brand = brand;
    this.model = model;
    this.displaySize = displaySize;
    this.processor = processor;
    this.ram = ram;
}
}

let laptop1 = new Laptop("Apple", "MacBook Air", 13, "Apple M1", 8);
let laptop2 = new Laptop("Dell", "XPS 13", 13, "Intel Core i7", 16);
let laptop3 = new Laptop("HP", "Spectre x360", 15, "Intel Core i7", 16);
let laptop4 = new Laptop("Lenovo", "ThinkPad X1 Carbon", 14, "Intel Core i7", 16);
let laptop5 = new Laptop("Microsoft", "Surface Laptop 4", 15, "Intel Core i7", 16);
console.log(laptop2) 
// 
class Restaurant {
constructor(name, cuisine, address, rating, phone) {
    this.name = name;
    this.cuisine = cuisine;
    this.address = address;
    this.rating = rating;
    this.phone = phone;
}
}

let restaurant1 = new Restaurant("SushiSamba", "Japanese", "87 Seventh Avenue South, New York, NY 10014", 4.5, "+1 212-691-7885");
let restaurant2 = new Restaurant("Pizzeria Uno", "Italian", "29 E Ohio St, Chicago, IL 60611", 4.2, "+1 312-321-1000");
let restaurant3 = new Restaurant("Dinosaur Bar-B-Que", "Barbecue", "246 W Willow St, Syracuse, NY 13202", 4.4, "+1 315-476-4937");
let restaurant4 = new Restaurant("The French Laundry", "French", "6640 Washington St, Yountville, CA 94599", 4.9, "+1 707-944-2380");
let restaurant5 = new Restaurant("Le Bernardin", "French", "155 W 51st St, New York, NY 10019", 4.8, "+1 212-554-1515");
console.log(restaurant3)  

///
class Product {
constructor(name, description, price, category, manufacturer) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.category = category;
    this.manufacturer = manufacturer;
}
}

let product1 = new Product("iPhone 13 Pro","good",300000,"large","samsung")
let product11 = new Product("andriod","good",235000,"large","samsung")
let product12 = new Product("itelp456","better",600000,"large","samsung")
let product14 = new Product("infinix","expensive",100000,"large","samsung")
let product15 = new Product("camon","great",400000,"large","samsung")
let product13 = new Product("surface","nice",3000000,"large","samsung")
console.log(product1)
//
class Phone {
constructor(brand, model, displaySize, storage, camera) {
    this.brand = brand;
    this.model = model;
    this.displaySize = displaySize;
    this.storage = storage;
    this.camera = camera;
}
}

let phone1 = new Phone("Samsung", "Galaxy S21", 6.2, "128GB", "64MP");
let phone2 = new Phone("Apple", "iPhone 12", 6.1, "128GB", "12MP");
let phone3 = new Phone("OnePlus", "8T", 6.55, "256GB", "48MP");
let phone4 = new Phone("Google", "Pixel 5", 6.0, "128GB", "12.2MP");
let phone5 = new Phone("Xiaomi", "Mi 11", 6.81, "256GB", "108MP");
console.log(phone3)
//
class School {
    constructor(name, type, location, enrollment, mascot) {
      this.name = name;
      this.type = type;
      this.location = location;
      this.enrollment = enrollment;
      this.mascot = mascot;
    }
  }
  
  let school1 = new School("Harvard University", "Private Ivy League Research University", "Cambridge, Massachusetts", 31,566, "Crimson");
  let school2 = new School("Stanford University", "Private Research University", "Stanford, California", 17,381, "Cardinal");
  let school3 = new School("Massachusetts Institute of Technology", "Private Research University", "Cambridge, Massachusetts", 11,320, "Engineers");
  let school4 = new School("California Institute of Technology", "Private Research University", "Pasadena, California", 2,238, "Beavers");
  let school5 = new School("University of Chicago", "Private Research University", "Chicago, Illinois", 17,002, "Maroons");
  console.log(school5)
  ///
  class Furniture {
    constructor(name, material, color, dimensions, weightCapacity) {
      this.name = name;
      this.material = material;
      this.color = color;
      this.dimensions = dimensions;
      this.weightCapacity = weightCapacity;
    }
  }
  
  let furniture1 = new Furniture("Sofa", "Leather", "Brown", "83 x 39 x 35 in", 750);
  let furniture2 = new Furniture("Sofa", "Leather", "Brown", "83 x 39 x 35 in", 750);
  let furniture19 = new Furniture("Sofa", "Leather", "Brown", "83 x 39 x 35 in", 750);
  let furniture10 = new Furniture("Sofa", "Leather", "Brown", "83 x 39 x 35 in", 750);
  let furniture11 = new Furniture("Sofa", "Leather", "Brown", "83 x 39 x 35 in", 750);
  console.log(furniture10)