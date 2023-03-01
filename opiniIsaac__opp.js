// class of distrcts 
class District {
    constructor(name,county,subCounty,parish,village){
        this.name= name;
        this.county= county;
        this.subCounty=subCounty;
        this.parish=parish;
        this.village=village;
    }
}


// objects of districts 

let district1 = new District("Moyo","westMoyo","Obongi","celecala","Edua")
let district2 = new District("Wakiso","kira","Namugongo","kyaliwagala","ssonde")
let district3 = new District("Kampala","kawempe","banda","kisaia","Eua")
let district4 = new District("Luwer0","westLuero","Obi","kyi","udi")
let district5 = new District("Gulu","tiptip","kii","bedidi","odo")



// class of countries

class Country{
    constructor(name,president,year,language,city){
        this.name = name;
        this.president = president;
        this.year =year;
        this.language= language;
        this.city=city;

    }
}

let Country1 = ("Uganda","museveni",1962,"English","kampala")
let Country2 = ("kenya","kenyatta",1965,"English","nairobi")
let Country4 = ("rwanda","museveni",1966,"french","kigali")
let Country5 = ("Usa","biden",1890,"English","washingston")
// class of movie
 class Music {
    constructor(title,year,artist,label,duration){
        this.title = title;
        this.year= year;
        this.artist = artist;
        this.label= label;
        this.duration=duration;

    }
 }

 let music1 = new Music("fwa fwa",2020,"awzi","swangz",2)
 let music2 = new Music("sorry",2015,"justin","sonny",4)
 let music3 = new Music("location",2020,"dave","sonny",5)
 let music4 = new Music("cocodile",2020,"skillbeng","carribean",2)
 let music5 = new Music("fella",2016,"navyKenzo","tz",2)

class Movie{
    constructor(title,director,year,actor,company){
        this.title = title;
        this.director = director;
        this.year =year;
        this.actor= actor;
        this.company=company;

    }
}

let movie1 = new Movie("Dune","Denis",2021,"zendaya","warner")
let movie2 = new Movie("Dispatch","Anderson",2020,"Bill","wSearchLight")
let movie3 = new Movie("power","campion",2021,"benedict","netflix")
let movie4 = new Movie("belfast","kenneth",2021,"Jamie","focus")
let movie5 = new Movie("licorice","Paul",2021,"Bradely","MGM")

// class of books

class  Book{
    constructor(title,author,pages,language,pulisher){
        this.title=title;
        this.author= author;
        this.pages= pages;
        this.language=language;
        this.pulisher-pulisher;
    }
}

let book1 = new Book("richDadPoorDad","robert",348,"English","mk")
let book2 = new Book("richestManInBabylon","tom",248,"English","MGN")
let book3 = new Book("power","%)cent",234,"English","mk")
let book4 = new Book("EloquentsJS","tim",348,"English","elok")
let book5 = new Book("softskils","Isaac",948,"English","mk")


// class of persons

class  Person{
    constructor(name,age,gender,address,occupation){
        this.name=name;
        this.age= age;
        this.gender= gender;
        this.address=address;
        this.occupation-occupation;
    }
}

let person1 = new Person("Tom",22,"male","sonde","student")
let person2 = new Person("Josh",42,"male","Ede","lawyer")
let person3 = new Person("Tracy",22,"female","sonde","doctor")
let person4 = new Person("Joan",62,"female","sonde","retired")
let person5 = new Person("Tom",32,"male","sonde","accountant")

// class of peoducts

class  Product{
    constructor(name,category,price,description,manufacturer){
        this.name=name;
        this.category= category;
        this.price= price;
        this.description=description;
        this.manufacturer-manufacturer;
    }
}

let product1 = new Product("Iphone14","phones",2000,"lastest","apple")
let product2 = new Product("Sumgung","phones",4000,"ultra 22","sumsung")
let product3 = new Product("MacBook","laptops",9000,"8gb ram","apple")
let product4 = new Product("usb","cables",900,"2meteres","apples")
let product5 = new Product("T-shirt","clothes",400,"small size","Vasace")

// class of customers

class  Customer{
    constructor(name,age,gender,email,phone){
        this.name=name;
        this.age= age;
        this.gender= gender;
        this.email=email;
        this.phone-phone;
    }
}

let customer1 = new Customer("Peter", 30, "male", "peter@gmail.com",0_903_0930)
let customer2 = new Customer("chris", 34, "male", "chris@gmail.com",0_903_0930)
let customer3 = new Customer("Jojo", 60, "female", "Jojo@gmail.com",0_903_430)
let customer4 = new Customer("Peace", 40, "female", "peter@gmail.com",0_903_0530)
let customer5 = new Customer("Pual", 30, "male", "paul@gmail.com",0_903_0330)

// class of Laptop

class Laptop {
    constructor(name,model,ScreenSize,ram,processor){
        this.name=name;
        this.model=model;
        this.ScreenSize=ScreenSize;
        this.ram=ram;
        this.processor=processor;
    }
}

let laptop1 = new Laptop ("apple","max book pro",16.5,"16gb","M2")
let laptop2 = new Laptop ("Hp","Envy",13.5,"8gb","intel")
let laptop3 = new Laptop ("Dell","brazer",16,"4gb","intel 5")
let laptop4 = new Laptop ("lenovo","notebook",15,"8gb","intel9")
let laptop5 = new Laptop ("Hp","Envy Pro",15,"16gb","intel")

// class of car


class Car{
    constructor(make,model,year,color,mileage){
        this.make=make;
        this.model=model;
        this.year=year;
        this.color=color;
        this.mileage=mileage;
    }
}

let car1 = new Car (2022,"forestor",2022,"red",0)
let car2 = new Car (2015,"bugatti",2022,"blue",10)
let car3 = new Car (2022,"urs",2021,"red",200)
let car4 = new Car (2000,"primo",2023,"blue",100)
let car5 = new Car (1999,"ferrara",2022,"black",0)

