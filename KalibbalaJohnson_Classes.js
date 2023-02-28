
// First class
class Phone {
    constructor(brand, model, color, storage, price) {
        this.brand = brand;
        this.model = model;
        this.color = color;
        this.storage = storage;
        this.price = price;
    }
}
let phone1 = new Phone('Apple', 'iPhone 13 Pro Max', 'Graphite', '256GB', 1099);
let phone2 = new Phone('Samsung', 'Galaxy S21 Ultra', 'Phantom Black', '512GB', 1199);
let phone3 = new Phone('OnePlus', '9 Pro', 'Morning Mist', '256GB', 969);
let phone4 = new Phone('Google', 'Pixel 6 Pro', 'Stormy Black', '128GB', 899);
let phone5 = new Phone('Xiaomi', 'Mi 12', 'Cosmic Black', '256GB', 899);



//Second class
class Animal {
    constructor(name, species, color, age, size) {
        this.name = name;
        this.species = species;
        this.color = color;
        this.age = age;
        this.size = size;
    }
}
let animal1 = new Animal('Max', 'dog', 'brown', 5, 20);
let animal2 = new Animal('Whiskers', 'cat', 'black', 3, 10);
let animal3 = new Animal('Bubbles', 'fish', 'orange', 1, 2);
let animal4 = new Animal('Rocky', 'hamster', 'white', 2, 3);
let animal5 = new Animal('Mimi', 'rabbit', 'gray', 4, 2.5);



//Third class
class Car {
    constructor(make, model, year, color, price) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
        this.price = price;
    let car1 = new Car('Toyota', 'Camry', 2020, 'silver', 25000);
let car2 = new Car('Honda', 'Civic', 2018, 'red', 20000);
let car3 = new Car('Ford', 'Mustang', 2019, 'blue', 30000);
let car4 = new Car('Benz', 'Mercedes', 2021, 'yellow', 70000);
let car5 = new Car('Tesla', 'S', 2022, 'white', 90000);



// Fourth class
class Company {
    constructor(name, industry, employees, revenue, founded) {
        this.name = name;
        this.industry = industry;
        this.employees = employees;
        this.revenue = revenue;
        this.founded = founded;
    }
}let company1 = new Company('Sumsung', 'Technology', 150000, 274.5, 1976);
let company2 = new Company('Amazon', 'Retail', 1335000, 386.1, 1994);
let company3 = new Company('Google', 'Technology', 135301, 181.7, 1998);
let company4 = new Company('KFC', 'Consumer Goods', 100000, 67.7, 1837);
let company5 = new Company('ABSA Bank', 'Finance', 257444, 131.4, 1799);



//Fifth class
class Film {
    constructor(title, director, genre, releaseYear, duration) {
        this.title = title;
        this.director = director;
        this.genre = genre;
        this.releaseYear = releaseYear;
        this.duration = duration;
    }
}
const movie1 = new Film('Avengers', 'Mary Smith', 'Drama', 1994, 142);
const movie2 = new Film('Pirates of Sea', 'John Mark', 'Crime', 1972, 175);
const movie3 = new Film('The Dark Knight', 'Christopher Nolan', 'Action', 2008, 152);
const movie4 = new Film('Inception', 'Christopher Nolan', 'Sci-Fi', 2010, 148);
const movie5 = new Film('Spiderman', 'Quentin Tarantino', 'Crime', 1994, 154);



//sixth class
class Product {
    constructor(name, category, price, brand, color) {
        this.name = name;
        this.category = category;
        this.price = price;
        this.brand = brand;
        this.color = color;
    }
}
const product1 = new Product('iPhone 13 Pro', 'Electronics', 999, 'Apple', 'Graphite');
const product2 = new Product('AirPods Pro', 'Electronics', 249, 'Apple', 'White');
const product3 = new Product('Nike Air Force 1', 'Shoes', 90, 'Nike', 'Black');
const product4 = new Product('Adidas Ultraboost 21', 'Shoes', 180, 'Adidas', 'Grey');
const product5 = new Product('Samsung 55" 4K TV', 'Electronics', 799, 'Samsung', 'Black');



//Seventh class
class Student {
    constructor(name, age, grade, major, gpa) {
        this.name = name;
        this.age = age;
        this.grade = grade;
        this.major = major;
        this.gpa = gpa;
    }
}
const student1 = new Student('John Smith', 18, 12, 'Computer Science', 3.8);
const student2 = new Student('Emma Johnson', 19, 11, 'English', 3.4);
const student3 = new Student('Aiden Lee', 20, 12, 'Biology', 3.9);
const student4 = new Student('Sophia Davis', 19, 11, 'Psychology', 3.7);
const student5 = new Student('Jacob Wilson', 18, 10, 'Mathematics', 3.6);




//eihghth class
class Song {
    constructor(title, artist, album, genre, releaseYear) {
        this.title = title;
        this.artist = artist;
        this.album = album;
        this.genre = genre;
        this.releaseYear = releaseYear;
    }
}
const song1 = new Song('Bohemian Rhapsody', 'Queen', 'A Night at the Opera', 'Rock', 2012);
const song2 = new Song('Like a Rolling Stone', 'Bob Dylan', 'Highway 61 Revisited', 'Rock', 2010);
const song3 = new Song('Smells Like Teen Spirit', 'Nirvana', 'Nevermind', 'Grunge', 2018);
const song4 = new Song('Billie Jean', 'Michael Jackson', 'Thriller', 'Pop', 1994);
const song5 = new Song('I Will Always Love You', 'Whitney Houston', 'The Bodyguard', 'Pop', 2006);



//Nineth class
class Country {
    constructor(name, capital, population, language, currency) {
        this.name = name;
        this.capital = capital;
        this.population = population;
        this.language = language;
        this.currency = currency;
    }
}
const country1 = new Country('United States', 'Washington, D.C.', 331, 449, 281, 'English', 'US Dollar');
const country2 = new Country('China', 'Beijing', 1, 398, 583, 368, 'Mandarin', 'Yen');
const country3 = new Country('Brazil', 'Brasília', 213, 993, 437, 'Portuguese', 'Brazilian Real');
const country4 = new Country('Russia', 'Moscow', 145, 912, 025, 'Russian', 'Russian Ruble');
const country5 = new Country('India', 'New Delhi', 1, 366, 417, 754, 'Hindi', 'Indian Rupee');



//Tenth class
class Person {
    constructor(name, age, gender, occupation, nationality) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.occupation = occupation;
        this.nationality = nationality;
    }
}
const person1 = new Person('Alice', 25, 'female', 'software developer', 'American');
const person2 = new Person('Bob', 30, 'male', 'doctor', 'British');
const person3 = new Person('Charlie', 40, 'male', 'teacher', 'Canadian');
const person4 = new Person('Diana', 28, 'female', 'lawyer', 'Australian');
const person5 = new Person('Ethan', 22, 'male', 'student', 'Indian');
