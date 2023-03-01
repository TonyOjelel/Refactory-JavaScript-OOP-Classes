// Assignment: Create 10 classes with atleast five or properties and give at least 5 objects for each class.


// This is the class Tree and it's properties
class Tree {
    constructor(scientificName, name, origin, height, color, use) {
        this.scientificName = scientificName;
        this.name = name;
        this.origin = origin;
        this.height = height;
        this.color = color;
        this.use = use;
    }
}
// These are the objects
let tree1 = new Tree("Eucalyptus", "Gum", "Australia", 200, "Green", "Furniture");
let tree2 = new Tree("Acer palmatum", "Maple", "Japan", 25, "red", "Poetry and Art");
let tree3 = new Tree("Ficus benghalensis", "Indian banyan", "India", 21, "Green", "Furniture");
let tree4 = new Tree("Swietenia mahogani", "Mahogany", "Americas", 40, "Green", "Furniture");
let tree5 = new Tree("Prunus serulata", 'Sakura', "Japan", 40, "ft", "Pale pink and white", "Skincare products");

console.log(tree2);
console.log(tree3);
console.log(tree5);

// CLASS ANIME
class Anime {
    constructor(title, writer, demographic, publisher, releaseyear) {
        this.title = title;
        this.writer = writer;
        this.demographic = demographic;
        this.publisher = publisher;
        this.releaseyear = releaseyear;
    }
}
// These are the objects 
var anime1 = new Anime("One piece", "Eiichiro Oda", "Shonen", "Shueisha", 1997);
var anime2 = new Anime("Kimetsu no yaiba", "Koyoharu Gotouge", "Shonen", "Shueisha", 2016);
var anime3 = new Anime("Attack on Titan", "Hajime Isayama", "Shonen", "Kodansha", 2009);
var anime4 = new Anime("Vinland saga", "Makoto Yukimira", "Shonen", "Kodansha", 2005);
var anime5 = new Anime("Naruto", "Masashi Kishimoto", "Shonen", "Shueisha", 1999);

console.log(anime3);
console.log(anime4.writer);
console.log(anime5.title);

// CLASS GLASS
class Glass {
    constructor(name, country, year, shape, drink) {
        this.name = name;
        this.country = country;
        this.year = year;
        this.shape = shape;
        this.drink = drink;
    }
}
let glass1 = new Glass("Martini", "U.S.A", 1920, "Inverted cone", "Vodka");
let glass2 = new Glass("Glencairn", "Scotland", 2001, "Tulip", "Whisky");
let glass3 = new Glass("Irish coffee glass", "Ireland", 1900, "Cylinder", "Mixed");
let glass4 = new Glass("Flute", "France", 1974, "Conical", "Champagne");
let glass5 = new Glass("Tumbler", "U.S.A", 1946, "Cylinder", "Mixed");

console.log(glass1);
console.log(glass2.drink);

// Class Actor
class Actor {
    constructor(name, age, gender, genre, location) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.genre = genre;
        this.location = location;
    }
}
let actor1 = new Actor("James franco", 40, "Male", "Horror", "California");
let actor2 = new Actor("Will smith", 53, "Male", "Action", "California");
let actor3 = new Actor("Lupita Nyongo", 35, "Female", "Action", "Kenya");
let actor4 = new Actor("Christopher Moltisante", 45, "Male", "Crime", "New Jersey");
let actor5 = new Actor("Idris Elba", 50, "Male", "Mixed", "London");

console.log(actor1);
console.log(actor4.genre);

// CLASS PERSON
class Person {
    constructor(name, gender, dateofbirth, email, username, password) {
        this.name = name;
        this.gender = gender;
        this.dateofbirth = dateofbirth;
        this.email = email;
        this.username = username;
        this.password = password;
    }
}

let person1 = new Person("Jamie", "Female", "20th/june/1998", "Jamie2@gmail.com", "Jamex", "Incorrect");
let person2 = new Person("Sanemi", "Male", "7th/august/1993", "SanemiOb@gmail.com", "SanemiOb", "GothamKnight231");
let person3 = new Person("Obanai", "Male", "2nd/July/1996", "obanai3000@gmail.com", "ObanaiSenpai", "1Hashira");
let person4 = new Person("Tengen", "Male", "2nd/january/1990", "tengen55@gmail.com", "uzuitengen", "6odofflashiness");
let person5 = new Person("Achiro", "Female", "4th/april/1998", "achirowinnie@gmail.com", "Winzie", "winzieisawesome");

console.log(person3.dateofbirth);
console.log(person5.email);

// CLASS FARMER
class Farmer {
    constructor(name, age, gender, district, product, contact) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.district = district;
        this.product = product;
        this.contact = contact;
    }
}

let farmer1 = new Farmer("John", 25, "Male", "Katakwi", "Sugarcane", "077#######");
let farmer2 = new Farmer("Isaac", 28, "Male", "Fort potal", "Tea", "078#######");
let farmer3 = new Farmer("Alaso", 38, "Female", "Serere", "Maize", "075#######");
let farmer4 = new Farmer("Acham", 35, "Female", "Palisa", "Groundnuts", "075#######");
let farmer5 = new Farmer("Quino", 55, "Female", "Arua", "Khat", "078#######");

console.log(farmer1);
console.log(farmer2);
console.log(farmer3);
console.log(farmer4);
console.log(farmer5);

//CLASS MOVIE
class Movie {
    constructor(title, writer, director, genre, releaseyear, company) {
        this.title = title;
        this.writer = writer;
        this.director = director;
        this.genre = genre;
        this.releaseyear = releaseyear;
        this.company = company;
    }
}

let movie1 = new Movie("Avatar", "James Cameroon", "James Cameroon", "Sci-fi", 2009, "20th century fox");
let movie2 = new Movie("Prey", "Patrick aison", "Dan trachtenberg", "Sci-fi/action", 2022, "Hulu");
let movie3 = new Movie("Swordfish", "Skip woods", "Dominic sena", "Action thriller", 2001, "Silver pictures");
let movie4 = new Movie("Training day", "David ayer", "Antoine fuqua", "Crime thriller", 2001, "Village roadshow pictures");
let movie5 = new Movie("Interstellar", "Jonathan nolan", "Christopher nolan", "sci-fi", 2014, "Legendary pictures");

console.log(movie1);
console.log(movie2.director);
console.log(movie3);
console.log(movie4);
console.log(movie5.company);

// CLASS BOOK
class Book {
    constructor(title, author, genre, country, language, published, publisher) {
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.country = country;
        this.language = language;
        this.published = published;
        this.publisher = publisher;
    }
}

let book1 = new Book("Alchemist", "Paulo coelho", "Quest, fantasy", "Brazil", "Portuguese", 1988, "HarperTorch");
let book2 = new Book("Houseboy", "Ferdinand oyono", "diary", "Cameroon", "French", 1956, "Editions julliard");
let book3 = new Book("The little prince", "Antoine de saint", "Fantasy", "France", "French", 1943, "Garlimard/Reynal & Hitchcock");
let book4 = new Book("Things fall apart", "Chinua achebe", "Colonialism", "Nigeria", "English", 1958, "William Heinemann ltd");
let book5 = new Book("The fate of the banished", "Julius ocwinyo", "Fiction", "Uganda", "English", 1997, "Fountain publishers");

console.log(book1);
console.log(book2.country);
console.log(book3.language);
console.log(book4);
console.log(book5);

//CLASS SHOE
class Shoe {
    constructor(name, feature, material, size, color) {
        this.name = name;
        this.feature = feature;
        this.material = material;
        this.size = size;
        this.color = color;
    }
}
let shoe1 = new Shoe("Oxford", "Almond toe", "Leather", 9, "Brown");
let shoe2 = new Shoe("Loafer", "Small saddle on top and no laces", "Leather", 7.5, "Black");
let shoe3 = new Shoe("The chelsea boot", "Strings on the side", "Leather", 9, "Desert brown");
let shoe4 = new Shoe("Clarks", "Dangling notches", "Suede", 8, "Cream");
let shoe5 = new Shoe("Marks and Spencer", "Pointed front " , "Leather", 8, "Black");

console.log(shoe1);
console.log(shoe2);
console.log(shoe3);
console.log(shoe4);
console.log(shoe5);


// CLASS ANIMAL
class Animal{
    constructor(category, name, prey, features, origin) {
        this.category = category;
        this.name = name;
        this.prey = prey;
        this.features = features;
        this.origin = origin;
    }
} 
// These are the Objects
let animal1 = new Animal("Mammal", "lion", "Buffalo", "Mane, brown color", "South and East Africa");
let animal2 = new Animal("Mammal", "Tiger", "Wild boar", "Orange with black stripes", "Asia");
let animal3 = new Animal("Reptile", "Crocodile", "Wildebeest", "Scaly body and lizard like form", "Africa");
let animal4 = new Animal("Mammal", "Cheetah", "zebra", "Dotted spots and extreme speed", "Africa");
let animal5 = new Animal("Reptile", "Tortoise", "Plants", "Large shells and slow movement", "South Africa");

console.log(animal1);
console.log(animal2);
console.log(animal3);
console.log(animal4.prey);
console.log(animal5);
