
class car {
    constructor(brand, model, year, color, mileage) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.color = color;
        this.mileage = mileage;
    }     
}

const car1 = new car("Toyota","Noah","2022","Purple","1032794");
const car2 = new car("Nissan","Figa","2000","White","10477875");
const car3 = new car("Ford","Cherokee", "2011","Black","100938");
const car4 = new car("Honda","CV-R","2022","Green","1928738");
const car5 = new car("Chevloret","crystal","2003","Red","1028767")

console.log(car1);
console.log(car2);
console.log(car3);
console.log(car4);
console.log(car5);

class Book {
    constructor(title, author, genre, year, publisher) {
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.year = year;
        this.publisher = publisher;
    }
}

const book1 = new Book("To Kill a Mockingbird","Harper Lee","Fiction","1960","J.B.Lippincott & CO");
const book2 = new Book("1984","George Orwell","Dystopian Fiction","1949","Secker & Warburg");
const book3 = new Book("Physical chemistry","Keith Obot","2008","Longhorn publishers");
const book4 = new Book("48 laws of power","David Green","Educational","1993","Fountain");
const book5 = new Book("The catcher in the Rye","J.D.Salinger","Fiction","1951","Little, brown and company");

console.log(book1);
console.log(book2);
console.log(book3);
console.log(book4);
console.log(book5);

class employee {
    constructor(title, age, sex, qualification ,post) {
        this.title = title;
        this.age = age;
        this.sex = sex;
        this.qualification = qualification;
        this.post = post;
    }     
}

const employee1 = new employee("Mr.Tom","54","Male","B.Sc","IT specialist");
const employee2 = new employee("Miss. Ann","32","Female","BBA","Administrator");
const employee3 = new employee("Mr. Racheal","28", "Female","BFin","Accountant");
const employee4 = new employee("Mr.Richard","48","Male","BSW","Human Resource Manager");
const employee5 = new employee("Miss Olivia","26","Female","Certificate in computer science","Receptionist")

console.log(employee1);
console.log(employee2);
console.log(employee3);
console.log(employee4);
console.log(employee5);


class user {
    constructor(name, email, password, age, address) {
        this.name = name;
        this.email = email;
        this.password =password;
        this.age = age;
        this.address = address;
    }
}

const user1 = new user("Eric Solomon","ericsolomon838@gmail.com","esanders1220","20","Namugongo,Uganda");
const user2 = new user("Jane Smith","janesmith@yahoo.com","jsmith84","35","Bradford,UK");
const user3 = new user("Bob Jonhson","bjohnson@gmail.com", "johnb32","25","Leeds,UK");
const user4 = new user("Sarah William","swilliams@gmail.com","swilliams22","42","Maryland,RSA");
const user5 = new user("David Lee","dlee@hotmail.com","davidlee986","55","Boston,USA")

console.log(user1);
console.log(user2);
console.log(user3);
console.log(user4);
console.log(user5);

class house {
    constructor(style, roofing, floor, color, location) {
        this.style = style;
        this.roofing = roofing;
        this.floor = floor;
        this.color = color;
        this.location = location;
    }
}

const house1 = new house("Bungalow","ironsheets","tiles","white","kisaasi");
const house2 = new house("flat","tiled","tiles","brown","nalya");
const house3 = new house("semi-detached","ironsheets", "tiles","grey","ntinda");
const house4 = new house("Tent","polyster","grass","Green","naguru");
const house5 = new house("Hut","grass","mud","Red","masaka")

console.log(house1);
console.log(house2);
console.log(house3);
console.log(house4);
console.log(house5);

class human {
    constructor(status, height, weight, age, appearance) {
        this.status = status;
        this.height = height;
        this.weight = weight;
        this.age = age;
        this.appearance = appearance;
    }
}

const human1 = new human("Female","5.9ft","78kg","32","average");
const human2 = new human("Female","5.4ft","47kg","21","slim");
const human3 = new human("Male","6ft","60kg","35","athlete");
const human4 = new human("Male","5.5ft","130kg","26","thick");
const human5 = new human("Female","5.8ft","89kg","32","curvy")

console.log(human1);
console.log(human2);
console.log(human3);
console.log(human4);
console.log(human5);

class school {
    constructor( name, motto, uniform, pupils , location) {
        this.name = name;
        this.motto = motto;
        this.uniform = uniform;
        this.pupils = pupils;
        this.location = location;
    }
}

const school1 = new school("our lady of africa","ever forward","blue","mixed","namilyango");
const school2 = new school("uganda martyrs primary","education is the key to life","white and chaki","mixed","namugongo");
const school3 = new school("namugongo parents primary","light for future", "maroon and whitw","mixed","namugongo");
const school4 = new school("kyambogo college","lorem ipsum","grey and white","single","kyambogo");
const school5 = new school("meritah junior school","strive for future","yellow and brown","mixed","seeta")

console.log(school1);
console.log(school2);
console.log(school3);
console.log(school4);
console.log(school5);

class animals {
    constructor(type, species, size, color, origin) {
        this.type = type;
        this.species = species;
        this.size = size;
        this.color= color;
        this.origin = origin;
    }
}
const animals1 = new animals("Dog","german sphepherd","2yrs","black","German");
const animals2 = new animals("Rabbit","newzealand white","6months","White","Newzealand");
const animals3 = new animals("Cow","Freshian", "1yr","Brown","Britain");
const animals4 = new animals("Pig","Long white","8months","White","Australia");
const animals5 = new animals("Sheep","marino","2yrs","Brown","France")

console.log(animals1);
console.log(animals2);
console.log(animals3);
console.log(animals4);
console.log(animals5);

class tree {
    constructor(type, species, height, longivity, finalproduct) {
        this.type = type;
        this.species = species;
        this.height = height;
        this.longivity = longivity;
        this.finalproduct = finalproduct;
    }
}
const tree1 = new tree("Mango","Mangifera indica","33ft","100yrs","mangoes");
const tree2 = new tree("Pine","Eastern white","24m","450yrs","Furniture");
const tree3 = new tree("Mahogany","Swietenia mahogany", "75ft","350yrs","Furniture");
const tree4 = new tree("Hemlock","Eastern hemlock","70ft","800yrs","Paper");
const tree5 = new tree("Avacado","Hass avacodo","20ft","200yrs","Ovacados");

console.log(tree1);
console.log(tree2);
console.log(tree3);
console.log(tree4);
console.log(tree5);

class fruit {
    constructor(type, species, color, usage, origin) {
        this.type = type;
        this.species = species;
        this.color = color;
        this.usage = usage;
        this.origin = origin;
    }
}
const fruit1 = new fruit("Water Melon","Citrus Melon","Red","Dessert","Wales");
const fruit2 = new fruit("Strawberry","Frogaria","Pink","Dessert","Britain");
const fruit3 = new fruit("Tomato","Solanum lycopersicumgi","Red","Dessert","India");
const fruit4 = new fruit("Jack fruit","Sindoor","Yellow","Dessert","India");
const fruit5 = new fruit("Orange","Citrus","Orange","Juice","Australia")

console.log(fruit1);
console.log(fruit2);
console.log(fruit3);
console.log(fruit4);
console.log(fruit5);
