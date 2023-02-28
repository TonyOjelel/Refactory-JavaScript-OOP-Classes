// Define the Phone class
class Phone {
    constructor(brand, model, color, storage, price, camera) {
        this.brand = brand;
        this.model = model;
        this.color = color;
        this.storage = storage;
        this.price = price;
        this.camera = camera;
    }
}

// Creating 6 Phone objects
const iphone = new Phone("iphone", "iPhone 13", "Blue", "128GB", 999, "Dual 12MP");
const samsung = new Phone("Samsung", "Galaxy S21", "Black", "256GB", 799, "Triple 12MP");
const pixel = new Phone("Google", "Pixel 6", "White", "128GB", 699, "Dual 50MP");
const onePlus = new Phone("OnePlus", "9 Pro", "Silver", "256GB", 899, "Quad 48MP");
const xiaomi = new Phone("Xiaomi", "Mi 11", "Green", "128GB", 699, "Triple 108MP");
const xperia = new Phone("Sony", "Xperia 5 III", "Red", "256GB", 999, "Triple 12MP");

// Testing the objects by logging their properties
console.log(iphone.brand);
console.log(samsung.model);
console.log(pixel.color);
console.log(onePlus.storage);
console.log(xiaomi.price);
console.log(xperia.camera);


// Define the Laptop class
class Laptop {
    constructor(brand, model, color, processor, ram, storage) {
        this.brand = brand;
        this.model = model;
        this.color = color;
        this.processor = processor;
        this.ram = ram;
        this.storage = storage;
    }
}

// Create 6 Laptop objects
const mackBook = new Laptop("Apple", "MacBook Pro", "Space Gray", "Intel Core i7", "16GB", "512GB SSD");
const dell = new Laptop("Dell", "XPS 13", "Silver", "Intel Core i5", "8GB", "256GB SSD");
const hp = new Laptop("HP", "Spectre x360", "Gold", "Intel Core i7", "16GB", "1TB SSD");
const lenovo = new Laptop("Lenovo", "ThinkPad X1 Carbon", "Black", "Intel Core i7", "16GB", "512GB SSD");
const asus = new Laptop("Asus", "ZenBook 14", "Gray", "AMD Ryzen 7", "16GB", "512GB SSD");
const acer = new Laptop("Acer", "Swift 5", "White", "Intel Core i7", "16GB", "512GB SSD");

// Testing the objects by logging their properties
console.log(mackBook.brand);
console.log(dell.model);
console.log(hp.color);
console.log(lenovo.processor);
console.log(asus.ram);
console.log(acer.storage);

// Define the Book class
class Book {
    constructor(title, author, pages, language, publisher, year) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.language = language;
        this.publisher = publisher;
        this.year = year;
    }
}

// Create programming book objects
const book1 = new Book(
    "JavaScript: The Definitive Guide",
    "David Flanagan", 746,
    "English",
    "O'Reilly Media",
    2011);
const book2 = new Book(
    "Head First Design Patterns",
    "Eric Freeman, Elisabeth Robson, " +
    "Bert Bates, Kathy Sierra", 676,
    "English",
    "O'Reilly Media",
    2004);
const book3 = new Book(
    "Clean Code: A Handbook of Agile Software Craftsmanship",
    "Robert C. Martin",
    464, "English",
    "Prentice Hall",
    2008);
const book4 = new Book(
    "The Pragmatic Programmer: From Journeyman to Master",
    "Andrew Hunt, David Thomas",
    352, "English",
    "Addison-Wesley Professional",
    1999);
const book5 = new Book(
    "Code Complete: A Practical Handbook of Software Construction",
    "Steve McConnell",
    960, "English",
    "Microsoft Press",
    2004);
const book6 = new Book(
    "Effective JavaScript: 68 Specific Ways to Harness the Power of JavaScript",
    "David Herman",
    240,
    "English",
    "Addison-Wesley Professional",
    2012);

// Testing the programming book objects by logging their properties
console.log(book1.title);
console.log(book2.author);
console.log(book3.pages);
console.log(book4.language);
console.log(book5.publisher);
console.log(book6.year);

// Define the OperatingSystem class
class OperatingSystem {
    constructor(name, developer, releaseDate, latestVersion, supportedPlatforms, kernelType) {
        this.name = name;
        this.developer = developer;
        this.releaseDate = releaseDate;
        this.latestVersion = latestVersion;
        this.supportedPlatforms = supportedPlatforms;
        this.kernelType = kernelType;
    }
}

// Create OS objects
const os1 = new OperatingSystem(
    "Windows 10",
    "Microsoft",
    "July 29, 2015",
    "21H2",
    ["PC", "Xbox", "Surface Hub"],
    "Hybrid");
const os2 = new OperatingSystem(
    "macOS Big Sur",
    "Apple",
    "November 12, 2020",
    "11.6.1",
    ["Mac"],
    "XNU");
const os3 = new OperatingSystem(
    "Ubuntu 21.10",
    "Canonical Ltd.",
    "October 14, 2021",
    "21.10",
    ["PC", "Server"],
    "Linux");
const os4 = new OperatingSystem(
    "Android 12",
    "Google",
    "October 4, 2021",
    "12.1.0",
    ["Mobile", "Tablet"],
    "Linux");
const os5 = new OperatingSystem(
    "iOS 16",
    "Apple",
    "February 20, 2023",
    "15.4",
    ["iPhone", "iPad", "iPod Touch"],
    "XNU");
const os6 = new OperatingSystem(
    "Chrome OS",
    "Google",
    "June 15, 2011",
    "97.0.4692.101",
    ["Chromebook"],
    "Linux");

// Testing the OS objects by logging their properties
console.log(os1.name);
console.log(os2.developer);
console.log(os3.releaseDate);
console.log(os4.latestVersion);
console.log(os5.supportedPlatforms);
console.log(os6.kernelType);

class Person {
    constructor(name, age, gender, email, phone) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.email = email;
        this.phone = phone;
    }
}

const person1 = new Person("John", 25, "Male", "john@example.com", "+256701234567");
const person2 = new Person("Jane", 30, "Female", "jane@example.com", "+256712345678");
const person3 = new Person("David", 40, "Male", "david@example.com", "+256773456789");
const person4 = new Person("Mary", 35, "Female", "mary@example.com", "+256784567890");
const person5 = new Person("Peter", 20, "Male", "peter@example.com", "+256755678901");

console.log(person1.name);
console.log(person2.age);
console.log(person3.gender);
console.log(person4.email);
console.log(person5.phone);


class Car {
    constructor(make, model, year, color, mileage) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
        this.mileage = mileage;
    }

}

const car1 = new Car("Toyota", "Corolla", 2010, "blue", 50000);
const car2 = new Car("Honda", "Civic", 2015, "red", 40000);
const car3 = new Car("Ford", "Mustang", 2020, "black", 10000);
const car4 = new Car("Chevrolet", "Camaro", 2018, "white", 25000);
const car5 = new Car("Tesla", "Model S", 2022, "silver", 500);

console.log(car1.make);
console.log(car2.model);
console.log(car3.year);
console.log(car4.color);
console.log(car5.mileage);


class House {
    constructor(address, price, numBedrooms, numBathrooms, hasGarage) {
        this.address = address;
        this.price = price;
        this.numBedrooms = numBedrooms;
        this.numBathrooms = numBathrooms;
        this.hasGarage = hasGarage;
    }
}

const house1 = new House('123 Main St', 250000, 3, 2, true);
const house2 = new House('456 Elm St', 350000, 4, 3, true);
const house3 = new House('789 Oak St', 175000, 2, 1, false);
const house4 = new House('101 Pine St', 450000, 5, 4, true);
const house5 = new House('222 Maple St', 200000, 2, 2, false);

console.log(house1.address);
console.log(house2.price);
console.log(house3.numBathrooms);
console.log(house4.numBedrooms);
console.log(house5.hasGarage);


class Country {
    constructor(name, population, capital, currency, language) {
        this.name = name;
        this.population = population;
        this.capital = capital;
        this.currency = currency;
        this.language = language;
    }
}

const country1 = new Country('United States', 328200000, 'Washington, D.C.', 'US Dollar', 'English');
const country2 = new Country('China', 1400000000, 'Beijing', 'Chinese Yuan', 'Mandarin');
const country3 = new Country('Brazil', 209500000, 'Brasília', 'Brazilian Real', 'Portuguese');
const country4 = new Country('India', 1371000000, 'New Delhi', 'Indian Rupee', 'Hindi');
const country5 = new Country('Russia', 144500000, 'Moscow', 'Russian Ruble', 'Russian');

console.log(country1.name);
console.log(country2.population);
console.log(country3.currency);
console.log(country4.capital);
console.log(country5.language);

class WebBrowser {
    constructor(name, version, operatingSystem, isMobile, defaultSearchEngine) {
        this.name = name;
        this.version = version;
        this.operatingSystem = operatingSystem;
        this.isMobile = isMobile;
        this.defaultSearchEngine = defaultSearchEngine;
    }
}

const browser1 = new WebBrowser('Chrome', '98.0.4758.102', 'Windows 10', false, 'Google');
const browser2 = new WebBrowser('Safari', '15.2.1', 'macOS Monterey', false, 'Google');
const browser3 = new WebBrowser('Firefox', '97.0.1', 'Windows 10', false, 'Google');
const browser4 = new WebBrowser('Opera', '80.0.4170.63', 'Windows 10', false, 'Google');
const browser5 = new WebBrowser('Edge', '98.0.1108.50', 'Windows 10', false, 'Bing');

console.log(browser1.name);
console.log(browser2.version);
console.log(browser3.operatingSystem);
console.log(browser4.isMobile);
console.log(browser5.defaultSearchEngine);

class ProgrammingLanguage {
    constructor(name, designedBy, yearReleased, typingDiscipline, website) {
        this.name = name;
        this.designedBy = designedBy;
        this.yearReleased = yearReleased;
        this.typingDiscipline = typingDiscipline;
        this.website = website;
    }
}

const lang1 = new ProgrammingLanguage(
    'JavaScript', 'Brendan Eich',
    1995, 'Dynamic',
    'https://developer.mozilla.org/en-US/docs/Web/JavaScript');
const lang2 = new ProgrammingLanguage(
    'Python',
    'Guido van Rossum',
    1991,
    'Dynamic',
    'https://www.python.org/');
const lang3 = new ProgrammingLanguage(
    'Java',
    'James Gosling',
    1995,
    'Static',
    'https://www.java.com/');
const lang4 = new ProgrammingLanguage(
    'Swift',
    'Chris Lattner',
    2014,
    'Static',
    'https://swift.org/');
const lang5 = new ProgrammingLanguage(
    'C++',
    'Bjarne Stroustrup',
    1985,
    'Static',
    'https://isocpp.org/');

console.log(lang1.name);
console.log(lang2.designedBy);
console.log(lang3.yearReleased);
console.log(lang4.typingDiscipline);
console.log(lang5.website);
