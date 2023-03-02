class Team{
    constructor(name, position, home, trophies, city){
    this.name = name;
    this.position = position;
    this.home = home;
    this.trophies = trophies;
    this.city = city;
    }
}

let Team1= new Team("Pirates", 1, "Kings park", 5, "Bwoyos");
let Team2 = new Team("Kobs", 2, "Legends", 3, "Kyadi");
let Team3 = new Team("Heathens", 3, "Kyadi", 2, "Kyadondo");
let Team4 = new Team("Rhinos", 8, 'Legends', 0, "Lugogo");
let Team5 = new Team("Buffaloes", 5, "kyadi", 0, "kyadondo");
console.log(Team1);



class Country{
    constructor(name, continent, stauts, city, rating){
        this.name = name;
        this.continent = continent;
        this.stauts = stauts;
        this.city = city;
        this.rating = rating;
    }
}

let Count1 = new Country("Uganda", "Africa", "LDC", "Kampala", "poor");
let Count2 = new Country("South Africa", "Africa", "developed", "Pretotia", 'top class');
let Count3 = new Country( "USA", "Americas", "HDC", "D.C", "desirable");
let Count4 = new Country("India", "Asia", "developed", "Mumbai", "over populated");
let Count5 = new Country("England", "Europe", "HDC", "London", "world class");
console.log(Count1,Count2);


//class 3
class Student{
    constructor(name, age, level, gender, position){
        this.name = name;
        this.age = age;
        this.level = level;
        this.gender = gender;
        this.position = position;
    }
}
let Stu1 = new Student("Mike", 16, "S.3", "M", 5);
let Stu2 = new Student("Angel", 12, "S.1", "F", 2);
let Stu3 = new Student("Mary", 18, "S.5", "F", 4);
let Stu4 = new Student("Ben", 20, "S.6", "M", 3);
let Stu5 = new Student("Tony", 14, "S.2", "M", 1);
console.log( Stu3);

//4
class Worker{
    constructor(number, id, gender, age, hours){
        this.number = number;
        this.id = id;
        this.gender = gender;
        this.age = age;
        this.hours = hours;
    }
}
let Wor1 = new Worker(001, 101, "M", 22, 5);
let Wor2 = new Worker(002, 102, "M", 25, 8);
let Wor3 = new Worker(003, 107, "F", 30, 10);
let Wor4 = new Worker(005, 110, "M", 35, 7);
let Wor5 = new Worker(006, 120, "F", 40, 4);
console.log(Wor1);

//5
class Book{
    constructor(genre, company, position, country, number){
        this.genre = genre;
        this.company = company;
        this.position = position;
        this.country = country;
        this.number = number;
    }
}
let Book1 = new Book("educational", "MK", 1, "Uganda", 100);
let Book2 = new Book("fiction", "Dreamworks", 2, "USA", 1000);
let Book3 = new Book("romance", "Lobre", 4, "UK", 50);
let Book4 = new Book("animation", "Disney", 3, "UK", 500);
let Book5 = new Book("crime", "Crimelab", 10, "France", 20);
console.log(Book2,Book5);
//6
class School{
    constructor(name, location, students, fees, position){
        this.name = name;
        this.location = location;
        this.students = students;
        this.fees = fees;
        this.position = position;
    }
}
let Sch1 = new School("Hillside", "Naalya", 2000, 2.1, 1);
let Sch2 = new School("KPS", "Kampala", 1900, 2.3, 5);
let Sch3 = new School("Greenhill", "Kibuli", 1500, 1.9, 6);
let Sch4 = new School("Victorious", "Bugolobi", 1200, 1.8, 11);
let Sch5 = new School("Silver Spoon", "Kibuli", 1000, 1.5, 30);
console.log(Sch2,Sch5);



//7
class Uniform{
    constructor(color, number, day, time, price){
        this.color = color;
        this.number = number;
        this.day = day;
        this.time = time;
        this.price = price;
    }
}

let Un1 = new Uniform("green", 1, "Sunday", "morning", 10000);
let Un2 = new Uniform("blue", 2, "everyday", "evening", 24500);
let Un3 = new Uniform("yellow", 1, "Wednesday", "morning", 1000);
let Un4 = new Uniform("white", 2, "Monday and Thursday", "day time", 15000);
let Un5 = new Uniform("black", 1, "Saturday", "night", 1000);
console.log(Un4);

//8
class Market{
    constructor(name, location, size, vendors, stalls){
        this.name = name;
        this.location = location;
        this.size = size
        this.vendors = vendors; 
        this.stalls = stalls;
    }
}
let Mrt1 = new Market("Nakawa", "Nakawa", "2 km", 100, 1500);
let Mrt2 = new Market("Owino", "Kampala", "5 km", 1000, 1500);
let Mrt3 = new Market("Boke", "Tororo", "1 km", 500, 500);
let Mrt4 = new Market("Starway", "Naalya", "0.5 km", 50, 30);
let Mrt5 = new Market("Kikono", "Bukasa", "1 km", 20, 15);
console.log(Mrt1);


//9
class Animal{
    constructor(name, age, number, type, food){
        this.name = name;
        this.age = age; 
        this.number = number;
        this.type = type;
        this.food = food;
    }
}
let Anm1 = new Animal("elephant", 15, 10, "mammal", "grass");
let Anm2 = new Animal("lion", 10, 5, "mammal", "meat");
let Anm3 = new Animal("rhino", 10, 10, "mammal", "grass");
let Anm4 = new Animal("snake", 4, 10, "reptile", "lizards");
let Anm5 = new Animal("croc", 15, 5, "reptile", "meat");




//10
class Shoe{
    constructor(color, size, number, price, brand ){
         this.color = color;
         this.size = size;
         this.number = number;
         this.price = price;
         this.brand = brand
    }
}
let Shoe1 = new Shoe("black", 10, 50, 150000, "Gucci");
let Shoe2 = new Shoe("blue", 9, 40, 200000, "Jordan");
let Shoe3 = new Shoe("red", 12, 20, 250000, "kyrie");
let Shoe4 = new Shoe("grey", 7, 10, 100000, "Fenti" );
let Shoe5 = new Shoe("white", 9, 20, 180000, "trainers");
console.log(Shoe1.color);