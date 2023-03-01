class Phone { // initialising class
    constructor(phonename, color, storagecapacity, model, screensize) {
        this.phonename = phonename;
        this.color = color;
        this.storagecapacity = storagecapacity;
        this.model = model;
        this.screensize = screensize;
    }
}

let phone1 = new Phone('samsung', 'black', 'gb128', 's10', '4*2');
let phone2 = new Phone('tecno', 'blue', '64gb', 'spark', '3*2');
let phone3 = new Phone('Appe', 'grey', '256gb', 'iphonex', '4*2');
let phone4 = new Phone('redmi', 'red', '100gb', 'redmi', '5');
let phone = new Phone('oneplus', 'white', '128gb', '4');

console.log(phone1, phone2, phone3, phone4, phone);

// Class 2
class FarmAnimal {
    constructor(animalname, color, weight, breed, age
    ) {
        this.animalname = animalname;
        this.color = color;
        this.weight = weight;
        this.breed = breed;
        this.age = age;

    }
}
// 
let FarmAnimal1 = new FarmAnimal('Bull', 'Brown', '153kg', 'AberdeenAngus', '12months');
let FarmAnimal2 = new FarmAnimal('Goat', 'black', '70kg', 'Redkalahari', '1year');
let FarmAnimal3 = new FarmAnimal('sheep', 'grey', '65kg', 'localbreed', '9months');
let FarmAnimal4 = new FarmAnimal('donkey', 'white', '45kg', 'exotic', '13months');
let FarmAnimal5 = new FarmAnimal('Dog', 'brown', '22kg', 'Germanshepered');
console.log(FarmAnimal1, FarmAnimal2, FarmAnimal3, FarmAnimal4, FarmAnimal5);

// class 3
class Televisionscreen {
    constructor(screenname, type, color, screensize, shape) {
        this.screenname = screenname;
        this.type = type;
        this.color = color;
        this.screensize = screensize;
        this.shape = shape;
    }
}

let Televisionscreen1 = new Televisionscreen('Hisense', 'SmartTV', 'black', '42inches', 'rectangle');
let Televisionscreen2 = new Televisionscreen('Saachi', 'digitalTV', 'grey', '32inches', 'rectangle');
let Televisionscreen3 = new Televisionscreen('Samsung', 'analog', 'white', '12inches', 'sguare');
let Televisionscreen4 = new Televisionscreen('LG', 'flatscreen', 'blue', '43inches', 'rectangle');
let Televisionscreen5 = new Televisionscreen('Apple', 'smartTV', 'grey', '55inches', 'rectangle');
console.log(Televisionscreen1, Televisionscreen2, Televisionscreen3, Televisionscreen4, Televisionscreen5);

// Class 4
class Footballclub {
    constuctor(name, location, manager, captain, league, position) {
        this.name = name;
        this.location = location;
        this.manager = manager;
        this.captain = captain;
        this.league = league;
        this.position = position;
    }
}
let Footballclub1 = new Footballclub('Arsenal', 'England', 'Odegaard', 'premierleague', 'one');
let Footballclub2 = new Footballclub('Napoli', 'Italy', 'Oshimen', 'Serie A', '1');
let Footballclub3 = new Footballclub('RealMadrid', 'spain', 'Benzema', 'laliga', '2');
let Footballclub4 = new Footballclub('Freiburg', 'Germany', 'KoloMuani', 'bundesliga', '4');
let Footballclub5 = new Footballclub('KCCA', 'Uganda', 'Okwir', 'Azampremierleague', '1');


console.log(Footballclub1, Footballclub2, Footballclub3, Footballclub4, Footballclub5);

//class 5
class Socialmedia {
    constructor(name, location, founder, networth, uses) {
        this.name = name;
        this.location = location;
        this.founder = founder;
        this.networth = networth;
        this.uses = uses;
    }
}
let Socialmedia1 = new Socialmedia('facebook', 'USA', 'MarkZuckerberg', '500billion', 'posting pictures');
let Socialmedia2 = new Socialmedia('twitter', 'washington', 'Elonmusk', '800bilion', 'messaging');
let Socialmedia3 = new Socialmedia('tiktok', 'China', 'zinchenxi', '45billion', 'postingvideos');
let Socialmedia4 = new Socialmedia('instagram', 'New york', 'mark', '265billion', 'videocall');
let Socialmedia5 = new Socialmedia('WhatsApp', 'America', 'John', '347billion', 'sharing pictures');

console.log(Socialmedia1, Socialmedia2, Socialmedia3, Socialmedia4, Socialmedia5);

// class 6
class Hospital {
    constructor(location, name, services, workinghours, payments) {
        this.location = location;
        this.name = name;
        this.services = services;
        this.workinghours = workinghours;
        this.payments = payments;
    }
}
let Hospital1 = new Hospital('kampala', 'mulago', 'generaltreatments', '24/7', 'bank');
let Hospital2 = new Hospital('Gulu', 'Lacor', 'Maternity', '27/7', 'mobilemoney');
let Hospital3 = new Hospital('kampala', 'KIH', 'generaltreatments', '24/7', 'cash');
let Hospital4 = new Hospital('pader', 'kalongo', 'reproductive health', '24/7', 'bank');
let Hospital5 = new Hospital('Nairobb', 'the Agakhan', 'special treatments', '24/7', 'bank');

console.log(Hospital1, Hospital2, Hospital3, Hospital4, Hospital5);

// class 7
class Country {
    constructor(name, city, president, currency, officallanguage) {
        this.name = name;
        this.city = city;
        this.president = president;
        this.currency = currency;
        this.officallanguage = officallanguage;

    }
}
// statements
let Country1 = new Country('Uganda', 'kampala', 'Museveni', 'uganda shillings ', 'English');
let Country2 = new Country('Kenya', 'Nairobi', 'Ruto', 'kenya shillings', 'English');
let Country3 = new Country('USA', 'WashingtonDC', 'USdollar', 'English');
let Country4 = new Country('India', 'New Delhi', 'Reshi', 'Rupee', 'Hindi');
let Country5 = new Country('Nigeria', 'Abuja', 'Buhari', 'naira', 'ENGLISH');

console.log(Country1, Country2, Country3, Country4, Country5);

//class 8
class Prisoner {
    constructor(name, address, gender, crime, penalty) {
        this.name = name;
        this.address = address;
        this.gender = gender;
        this.crime = crime;
        this.penalty = penalty;
    }
} let Prisoner1 = new Prisoner('Okello', 'gulu', 'male', 'murder', 'death');
let Prisoner2 = new Prisoner('kamule', 'kisoro', 'male', 'theft', '2 months in prison');
let Prisoner3 = new Prisoner('betty', 'wakiso', 'female', 'robbery', '4 months');
let Prisoner4 = new Prisoner('Dolly', 'mokono', 'female', 'assault', '6 months');
let Prisoner5 = new Prisoner('Levy', 'jinja', 'male', 'rape', 'life imprisonment');

console.log(Prisoner1, Prisoner2, Prisoner3, Prisoner4, Prisoner5);

//class 9 
class Student {
    constructor(name, course, gender, age, grade) {
        this.name = name;
        this.course = course;
        this.gender = gender;
        this.age = age;
        this.grade = grade;
    }
}
let Student1 = new Student('okello', 'agriculture', 'male', 'two');
let Student2 = new Student('mercy', 'biology', 'female', 'three');
let Student3 = new Student('Patrick', 'maths', 'male', 'one');
let Student4 = new Student('Jacob', 'accounting', 'male', 'five');
let Student5 = new Student('Sarah', 'law', 'female', 'four');

console.log(Student1, Student2, Student3, Student4, Student5);

//class 10 
class company {
    constructor(name, location, products, networth, rating) {
        this.name = name;
        this.location = location;
        this.products = products;
        this.networth = networth;
        this.rating = rating;
    }
}
let company1 = new company('cocacola', 'mukono', 'softdrinks', '365m', '8/10');
let company2 = new company('Uganda bweries limited', 'beers', 'kampala', '456m', '9/10');
let company3 = new company('bluewave', 'jinja', 'mineral water', '398', '8/10');
let company4 = new company('kfc', 'nakawa', 'fried chicken', '699', '9/10');
let company5 = new company('Atis', 'biscuits', 'kampla', '7767m', '7/10');

console.log(company1, company2, company3, company4, company5)