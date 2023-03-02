class Bicycle {
    constructor(name, brand, size, price, color, durability){
        this.name = name;
        this.brand = brand;
        this.size = size;
        this.price = price;
        this.color = color;
        this.durability = durability;
    }
}

// Create 6 Objects for Bicycle Class
const bicycle1 = new Bicycle('3T', 'Carbon race', 90, 50000, 'Black', 'Fourtyyears')
const bicycle2 = new Bicycle('All-citycicles', 'Iconic', 80, 90000, 'Silver', 'Twentyyears')
const bicycle3 = new Bicycle('Alchemy', 'Carbon and titanium', 40, 10000, 'Orange', 'Tenyears')
const bicycle4 = new Bicycle('Bianch', 'Iconic', 70, 30000, 'Yellow', 'Fivedays')
const bicycle5 = new Bicycle('Breezer', 'Mountain', 60, 40000, 'Blue', 'Threeyears')
const bicycle6 = new Bicycle('Brompton', 'Iconic', 50, 20000, 'Grey', 'Fiveyears')





class Student {
    constructor(name, age, gender, studentnumber, nationality, stream) {
      this.name = name;
      this.age = age;
      this.gender = gender;
      this.occupation = studentnumber;
      this.nationality = nationality;
      this.stream = stream;
    }
  }
  
  // create 6 objects for Student class
  const student1 = new student('Mike Alex', 13, 'male', 001, 'Ugandan', 'A');
  const student2 = new student('Auke louis', 15, 'male', 002, 'congolese', 'B');
  const student3 = new student('Namutebi Jackie', 16, 'female', 003, 'Ugandan', 'C');
  const student4 = new student('Katumba Wamala', 8, 'male', 004, 'Tanzanian', 'D');
  const student5 = new student('Okoth Judith', 9, 'female', 005, 'Southsudanese', 'E');
  const student6 = new student('Buke Mercy', 11, 'female', 006, 'British', 'F')
  

class Petrostation {
    constructor(rubby, total, shell, gapko, harred, vision){
        this.rubby = rubby;
        this.total = total;
        this.shell = shell;
        this.gapko = gapko;
        this.harred = harred;
        this.vision = vision;

    }
}

class Laptop {
    constructor(brand, model, price, screenSize, storage, color) {
      this.brand = brand;
      this.model = model;
      this.price = price;
      this.screenSize = screenSize;
      this.storage = storage;
      this.color = color;
    }
  }
  
  // create 6 objects for Laptop class
  const laptop1 = new Laptop('Apple', 'Macbook Pro', 1500, '13 inch', '256 GB', 'Silver');
  const laptop2 = new Laptop('Dell', 'XPS 13', 1200, '13 inch', '512 GB', 'Pupple');
  const laptop3 = new Laptop('HP', 'Spectre x360', 1300, '13 inch', '512 GB', 'Yellow');
  const laptop4 = new Laptop('Lenovo', 'ThinkPad X1 Carbon', 1600, '14 inch', '1 TB', 'Silver');
  const laptop5 = new Laptop('Asus', 'ZenBook UX425', 1000, '14 inch', '512 GB', 'Black');
  const laptop6 = new Laptop('Apple', 'Convertable 2 in 1', 1550, '10 inch', '500 GB', 'Grey')

  class Animal {
    constructor(name, species, color, age, size, speed) {
        this.name = name;
        this.species = species;
        this.color = color;
        this.age = age;
        this.size = size;
        this.speed = speed;
    }
}
// Create 6 Object for Animal Class
let animal1 = new Animal('Max', 'dog', 'brown', 5, 20, 120);
let animal2 = new Animal('Whiskers', 'cat', 'black', 3, 10, 100);
let animal3 = new Animal('Bubbles', 'fish', 'orange', 1, 2, 300);
let animal4 = new Animal('Rocky', 'hamster', 'white', 2, 3, 2000);
let animal5 = new Animal('Mimi', 'rabbit', 'gray', 4, 1.5, 130);
let animal6 = new Animal('Mimi', 'pig', 'black', 7, 40, 150)


class Phone {
    constructor(brand, model, color, storage, price, size) {
        this.brand = brand;
        this.model = model;
        this.color = color;
        this.storage = storage;
        this.price = price;
        this.size = size;
    }
}

// Create 6 Objects for Phone class
let phone1 = new Phone('Apple', 'iPhone 13 Pro Max', 'White', '256GB', 1099, 60);
let phone2 = new Phone('Samsung', 'Galaxy S21 Ultra', ' Black', '512GB', 1199, 70);
let phone3 = new Phone('OnePlus', '9 Pro', 'Mist', '256GB', 969, 80);
let phone4 = new Phone('Google', 'Pixel 6 Pro', 'Black', '128GB', 899, 130);
let phone5 = new Phone('Xiaomi', 'Mi 12', 'grey', '256GB', 899, 200);
let phone6 = new Phone('Lg', 'x-10', 'Black','350GB', 2090, 100)


class Country {
    constructor(name, capital, population, language, currency) {
        this.name = name;
        this.capital = capital;
        this.population = population;
        this.language = language;
        this.currency = currency;
        this.location = location;
    }
}

// Create 6 Objects for Country Class
const country1 = new Country('United States', 'Washington, D.C.', 331, 449, 281, 'English', 'US Dollar', 'North America');
const country2 = new Country('China', 'Beijing', 1, 398, 583, 368, 'Mandarin', 'Yen', 'Southeast Asia');
const country3 = new Country('Brazil', 'Brasília', 213, 993, 437, 'Portuguese', 'Brazilian Real','South America');
const country4 = new Country('Russia', 'Moscow', 145, 912, 025, 'Russian', 'Russian Ruble', 'Europe');
const country5 = new Country('India', 'New Delhi', 1, 366, 417, 754, 'Hindi', 'Indian Rupee', 'Southern Asia');
const country6 = new Country('Uganda', 'Kampala', 430,000,000, 'Luganda', 'Shillings', 'Africa' )


class Song{
    constructor(name,category,artist,length,language, view){
        this.name = name;
        this.category = category;
        this.artist = artist;
        this.length = length;
        this.language = language;
        this.view = view;
    }
}

// Create 6 Object for Song Class
const song1= new Song('Balo Balo', 'Hip hop', 'Mdura', '2','Luganda',100,000);
const song2 = new Song('Kulosa', 'Hip hop', 'Oxlade', 3, 'English', 70000);
const song3 = new Song('Lockdown', 'Reggae', 'Koffee', 3, 'English', 5000);
const song4 = new Song('Bandana', 'Jazz', 'Fireboy', 1,'English', 30000);
const song5 = new Song('Vivir Mi Vida','Classical','Marc Anthony', 4, 'Spanish', 4000);
const song6 = new Song('Kipepewo', 'Hiphop', 'Chamelon', 4, 'Luganda', 10000)


class Car {
    constructor(make, model, year, color, price, speed) {
      this.make = make;
      this.model = model;
      this.year = year;
      this.color = color;
      this.price = price;
      this.speed = speed;
    }
  }
  
  // Create 6 Objects for Car class
  const car1 = new Car('Toyota', 'Camry', 2020, 'black', 5000, 180);
  const car2 = new Car('Honda', 'Civic', 2018, 'white', 10000, 140);
  const car3 = new Car('Ford', 'F-150', 2015, 'blue', 25000, 180);
  const car4 = new Car('Chevrolet', 'Malibu', 2017, 'red', 20000, 500);
  const car5 = new Car('BMW', 'X5', 2019, 'silver', 350000, 250);
  const car6 = new Car('Ferrari', 'M1', 2023, 'Grey', 40000, 350)

  class Fruit {
    constructor(mango, orange, apple, pineapple, watermelon, sugarcane){
        this.mango = mango;
        this.orange = orange;
        this.apple = apple;
        this.pineapple = pineapple;
        this.watermelon = watermelon;
        this.sugarcane = sugarcane;
    }
  }

