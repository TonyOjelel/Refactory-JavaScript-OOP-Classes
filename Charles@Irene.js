class Car {
    constructor(make, model, year, color, price) {
      this.make = make;
      this.model = model;
      this.year = year;
      this.color = color;
      this.price = price;
    }
  }
  
  // create 5 objects for Car class
  const car1 = new Car("Ford", "Mustang", 2022, "red", 35000);
  const car2 = new Car("Toyota", "Corolla", 2021, "blue", 22000);
  const car3 = new Car("Honda", "Civic", 2023, "black", 25000);
  const car4 = new Car("Chevrolet", "Camaro", 2022, "yellow", 40000);
  const car5 = new Car("Nissan", "Altima", 2020, "silver", 18000);
  
  class Book {
    constructor(title, author, publisher, pages, genre) {
      this.title = title;
      this.author = author;
      this.publisher = publisher;
      this.pages = pages;
      this.genre = genre;
    }
  }
  
  // create 5 objects for Book class
  const book1 = new Book("To Kill a Mockingbird", "Harper Lee", "J. B. Lippincott & Co.", 281, "fiction");
  const book2 = new Book("The Great Gatsby", "F. Scott Fitzgerald", "Charles Scribner's Sons", 180, "fiction");
  const book3 = new Book("1984", "George Orwell", "Secker & Warburg", 328, "fiction");
  const book4 = new Book("The Catcher in the Rye", "J.D. Salinger", "Little, Brown and Company", 277, "fiction");
  const book5 = new Book("Pride and Prejudice", "Jane Austen", "T. Egerton, Whitehall", 308, "fiction");
  
  class Movie {
    constructor(title, director, year, genre, rating) {
      this.title = title;
      this.director = director;
      this.year = year;
      this.genre = genre;
      this.rating = rating;
    }
  }
  
  // create 5 objects for Movie class
  const movie1 = new Movie("The Shawshank Redemption", "Frank Darabont", 1994, "drama", 9.3);
  const movie2 = new Movie("The Godfather", "Francis Ford Coppola", 1972, "crime", 9.2);
  const movie3 = new Movie("The Dark Knight", "Christopher Nolan", 2008, "action", 9.0);
  const movie4 = new Movie("Pulp Fiction", "Quentin Tarantino", 1994, "crime", 8.9);
  const movie5 = new Movie("Forrest Gump", "Robert Zemeckis", 1994, "drama", 8.8);
  
  class Person {
    constructor(name, age, gender, occupation, nationality) {
      this.name = name;
      this.age = age;
      this.gender = gender;
      this.occupation = occupation;
      this.nationality = nationality;
    }
  }
  
  // create 5 objects for Person class
  const person1 = new Person("John Doe", 25, "male", "developer", "American");
  const person2 = new Person("Jane Doe", 30, "female", "teacher", "Canadian");
  const person3 = new Person("Bob Smith", 45, "male", "lawyer", "Uganda");
  const person4 = new Person("Mercy Aber", 41, "female", "Doctor", "Kenya");
  const person5 = new Person("Charles Oroma", 24, "male", "Software developer", "Uganda");

  class Product {
    constructor(name, brand, price, rating, description) {
      this.name = name;
      this.brand = brand;
      this.price = price;
      this.rating = rating;
      this.description = description;
    }
  }
  
  // create 5 objects for Product class
  const product1 = new Product("iPhone 13", "Apple", 1099, 4.5, "The latest iPhone model");
  const product2 = new Product("Galaxy S21", "Samsung", 899, 4.3, "A popular Android phone");
  const product3 = new Product("XPS 13", "Dell", 1299, 4.7, "A high-end laptop");
  const product4 = new Product("Echo Dot", "Amazon", 49, 4.2, "A smart speaker");
  const product5 = new Product("PlayStation 5", "Sony", 499, 4.9, "A next-gen gaming console");

  console.log(product1)
  
  class Restaurant {
    constructor(name, cuisine, rating, location, priceRange) {
      this.name = name;
      this.cuisine = cuisine;
      this.rating = rating;
      this.location = location;
      this.priceRange = priceRange;
    }
  }
  
  // create 5 objects for Restaurant class
  const restaurant1 = new Restaurant("Joe's Pizza", "Italian", 4.5, "New York", "$$");
  const restaurant2 = new Restaurant("Sushi Nakazawa", "Japanese", 4.8, "New York", "$$$$");
  const restaurant3 = new Restaurant("El Pollo Loco", "Mexican", 4.2, "Los Angeles", "$");
  const restaurant4 = new Restaurant("Le Bernardin", "French", 4.9, "New York", "$$$$");
  const restaurant5 = new Restaurant("Gjelina", "American", 4.4, "Los Angeles", "$$");
  
  class Animal {
    constructor(name, species, diet, habitat, lifespan) {
      this.name = name;
      this.species = species;
      this.diet = diet;
      this.habitat = habitat;
      this.lifespan = lifespan;
    }
  }
  
  // create 5 objects for Animal class
  const animal1 = new Animal("Lion", "Panthera leo", "Carnivore", "Savanna", 10);
  const animal2 = new Animal("Panda", "Ailuropoda melanoleuca", "Herbivore", "Bamboo forest", 20);
  const animal3 = new Animal("Kangaroo", "Macropus", "Herbivore", "Grasslands", 6);
  const animal4 = new Animal("Elephant", "Loxodonta", "Herbivore", "Savanna", 70);
  const animal5 = new Animal("Gorilla", "Gorilla", "Herbivore", "Rainforest", 35);
  
  class Fruit {
    constructor(name, color, taste, price, availability) {
      this.name = name;
      this.color = color;
      this.taste = taste;
      this.price = price;
      this.availability = availability;
    }
  }
  
  // create 5 objects for Fruit class
  const fruit1 = new Fruit("Apple", "Red", "Sweet", 1, "Year-round");
  const fruit2 = new Fruit("Banana", "Yellow", "Sweet", 0.5, "Year-round");
  const fruit3 = new Fruit("Orange", "Orange", "Citrus", 1.5, "Winter");
  const fruit4 = new Fruit("Watermelon", "Green", "Sweet", 4, "Summer");
  const fruit5 = new Fruit("Grape", "Purple", "Sweet", 2, "Summer");
  
  class Laptop {
    constructor(brand, model, price, screenSize, storage) {
      this.brand = brand;
      this.model = model;
      this.price = price;
      this.screenSize = screenSize;
      this.storage = storage;
    }
  }
  
  // create 5 objects for Laptop class
  const laptop1 = new Laptop("Apple", "Macbook Pro", 1500, "13 inch", "256 GB");
  const laptop2 = new Laptop("Dell", "XPS 13", 1200, "13 inch", "512 GB");
  const laptop3 = new Laptop("HP", "Spectre x360", 1300, "13 inch", "512 GB");
  const laptop4 = new Laptop("Lenovo", "ThinkPad X1 Carbon", 1600, "14 inch", "1 TB");
  const laptop5 = new Laptop("Asus", "ZenBook UX425", 1000, "14 inch", "512 GB");
  
  class Clothing {
    constructor(type, brand, color, size, price) {
      this.type = type;
      this.brand = brand;
      this.color = color;
      this.size = size;
      this.price = price;
    }
  }
  
  // create 5 objects for Clothing class
  const clothing1 = new Clothing("Shirt", "Nike", "Red", "Large", 40);
  const clothing2 = new Clothing("Dress", "Zara", "Black", "Medium", 50);
  const clothing3 = new Clothing("Jeans", "Levi's", "Blue", "32x30", 80);
  const clothing4 = new Clothing("Sweater", "H&M", "Gray", "Small", 30);
  const clothing5 = new Clothing("Jacket", "The North Face", "Green", "Medium", 100);
  
  