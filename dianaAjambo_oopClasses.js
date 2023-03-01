//Number1
class Patient {
    constructor(patientName, age, height, sex, nationality){
        this.patientName = patientName;
        this.age = age;
        this.height = height;
        this.sex = sex;
        this.nationality = nationality;
    }
}
//Objects
let patient1 = new Patient ("Diana", 30, "173cm", "female", "ugandan");
let patient2 = new Patient ("Claire", 25, "170cm", "female", "kenyan");
let patient3 = new Patient ("Moses", 20, "180cm", "male", "tanzanian");
let patient4 = new Patient ("Rita", 18, "165cm", "female", "kenyan");
let patient5 = new Patient ("Brenda", 35, "172cm", "female", "ugandan");

console.log(patient5)

//Number2
class Supplier {
    constructor (legalName, natureOfBusiness, address, founded, country){
        this.legalName = legalName;
        this.natureOfBusiness = natureOfBusiness;
        this.address = address;
        this.founded = founded;
        this.country = country;
    }
}
//Objects
let supplier1 = new Supplier ("kakira", "manufacturing", "lugazi", 1986, "uganda");
let supplier2 = new Supplier ("serena", "hotel", "durban", 1945, "southAfrica");
let supplier3 = new Supplier ("monitor", "publishing", "nairobi",1975, "kenya");
let supplier4 = new Supplier ("ruparelia", "realestate", "kigali", 1983, "rwanda");
let supplier5 = new Supplier ("stanbic", "finance", "lagos", 1954, "nigeria");

console.log(supplier5)

//Number3

class Movie {
     constructor (title,director, yearProduced,duration,genre){        
        this.title = title ;
        this.director = director;
        this.yearProduced = yearProduced;
        this.duration = duration;
        this.genre = genre;
     }
}
//Objects
let movie1 = new Movie ("babylon", "damien", 2022, "189 min", "comedy");
let movie2 = new Movie ("titanic", "cameron", 1997, "194 min","romance");
let movie3 = new Movie ("pinocchio", "gorman", 2022, "117 min", "animation");
let movie4 = new Movie ("plane", "gerard", 2023, "107 min", "adventure");
let movie5 = new Movie ("topGun", "scott", 1986, "109 min", "action");



//Number4

class Television {
    constructor (brand, type, resolution, display, tuner){
        this.brand = brand;
        this.type = type;
        this.resolution = resolution;
        this.display = display;
        this.tuner = tuner;
    }
}
//Objects
let television1 = new Television ("hisense", "led", "HD Ready", "40 inches", "analog");
let television2 = new Television ("samsung", "qled", "FullHD", "60 inches", "smart");
let television3 = new Television ("LG", "oled", "8k(UHD)", "65 inches", "smart");
let television4 = new Television ("sony", "led", "4k(UHD)", "50 inches", "smart");
let television5 = new Television ("globalstar", "led", "HD", "32 inches", "digital");



//Number5

class Laptop {
    constructor (brand, screenSize, speed, storage, color){
        this.brand = brand;
        this.screenSize = screenSize;
        this.speed = speed;
        this.storage = storage;
        this.color = color;
    }
}
//Objects
let ideaPad = new Laptop ("lenovo", 15.6, "8GB RAM", "256 GB", "Almond");
let inspiron = new Laptop ("dell", 15.6, "32 GB RAM", "1TB", "black");
let aspire5 = new Laptop ("acer", 15.6, "8GB RAM", "500GB", "silver");
let macBookAir = new Laptop ("apple", 13, "8GB RAM", "256GB", "gray");
let premium = new Laptop ("HP", 17.3, "16GB RAM", "1TB", "silver");



//Number6

class SamsungPhone {
    constructor (weight, memory, speed, mainCamera, battery){
        this.weight = weight;
        this.memory = memory;
        this.speed = speed;
        this.mainCamera = mainCamera;
        this.battery = battery;
    }
}
//Objects
let s21 = new SamsungPhone ("169 g", "256 GB", "8GB RAM", "12 MP", "4000 mAh");
let s22 = new SamsungPhone ("168 g", "256 GB", "8GB RAM", "50 MP", "3700 mAh");
let s23 = new SamsungPhone ("168 g", "512 GB", "4GB RAM", "50 MP", "3900 mAh");
let s20 = new SamsungPhone ("163 g", "128GB", "6GB RAM", "12 MP", "4000 mAh");
let s10 = new SamsungPhone ("157 g", "128GB", "3GB RAM", "12 MP", "3400 mAh");


//Number7

class Dress {
    constructor (style, pattern, designer, fabric, color){
        this.style = style;
        this.pattern = pattern;
        this.designer = designer;
        this.fabric = fabric;
        this.color = color;
    }
}
//Objects
let dress1 = new Dress ("elegant", "plain", "versace", "polyster", "yellow");
let dress2 = new Dress (" casual", "graphic", "dior", "cotton", "multicolor");
let dress3 = new Dress ("party", "floral", "klein", "polyster", "multicolor");
let dress4 = new Dress ("vintage", "plain", "chanel", "woven", "pink");
let dress5 = new Dress ("modest", "striped", "valentino", "chiffon", "maroon");


