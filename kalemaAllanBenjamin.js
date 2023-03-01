//Class 1
class BasketballTeam{

    constructor(name,gender,wins,losses,region){
        this.name = name;
        this.gender = gender;
        this.losses = losses;
        this.wins = wins;
        this.region = region;

    }

}

let team1 = new BasketballTeam("Golden State Warriors","Men",32,30,"San Francisco");
let team2 = new BasketballTeam("Team Talas","Men",3,5,"Mbale");
let team3 = new BasketballTeam("Team Mooni","Men",5,3,"Mbale");
let team4 = new BasketballTeam("City Oil","Men",8,0,"Kampala");
let team5 = new BasketballTeam("City Flamer","Men",4,4,"Mbale");


//Class 2----------------------------------------
class Player{

    constructor(game,fullname,teamName,gamesPlayed,yearsOnTeam){
        this.game = game;
        this.fullname = fullname;
        this.teamName = teamName;
        this.gamesPlayed = gamesPlayed;
        this.yearsOnTeam = yearsOnTeam;

    }

}

let athelete1 = new Player("Basketball","Kalema Allan","Team Talas",10,2);
let athelete2 = new Player("Atheletics","Kiplangat Henry","Team Uganda",12,3);
let athelete3 = new Player("Football","Rashford Marcus","Manchester United",228,7);
let athelete4 = new Player("Basketball","Lebron James","L.A Lakers",1413,18);
let athelete5 = new Player("Golf","Tiger Woods","Team Tiger","Too many","Forever");

//Class 3---------------------------------------------------------
class Event{

    constructor(eventName,eventType,venue,feeGeneral,feeVIP,feeVVIP){
        this.eventName = eventName;
        this.eventType = eventType;
        this.venue = venue;
        this.feeGeneral = feeGeneral;
        this.feeVIP = feeVIP;
        this.feeVVIP = feeVVIP;

    }
}

let event1 = new Event("Gwanga Mujje","Concert","Mbale S.S",10000,20000,500000);
let event2 = new Event("Elgon Festival","Festival","Elgon Museum",20000,30000,500000);
let event3 = new Event("Ekidigida","Concert","Lugogo Cricket Oval",10000,20000,1000000);
let event4 = new Event("Mu Kikadde","Live Band","Thatch Gardens",10000,20000,200000);
let event5 = new Event("Rythm Night","Live Band","Club El Tanjia",10000,null,null);

//Class 4-------------------------------------------------------------
class StageAct{

    constructor(category,performerID,genre,duration,region){
        this.category = category;
        this.performerID = performerID;
        this.genre = genre;
        this.duration = duration;
        this.region = region;
    }

}

let act1= new StageAct("Dance","ACT-10001","Hiphop",10,"Wakiso");
let act2= new StageAct("Poetry","ACT-12002","Hiphop",4,"Kampala");
let act3= new StageAct("Live Painting","ACT-10501","Canvas Painting",20,"Entebbe");
let act4= new StageAct("Live Band","ACT-15001","RnB",30,"Kampala");
let act5= new StageAct("Dance","ACT-14001","Folk Dance",10,"Masaka");

//Class 5----------------------------------------------------
class Song{

    construtor(title,artist,genre,year,album){

            this.title = title;
            this.artist = artist;
            this.genre = genre;
            this.year = year;
            this.album = album;
    }
}

let song1 = new Song("Dueces","Chris Brown","RnB Hiphop",2011,"FAME");
let song2 = new Song("Ndura","Byg Ben Sukuya","Hiphop",2017,"Ndura EP");
let song3 = new Song("Drunk in love","Rihanna","RnB/Soul",2011,"Talk that talk");
let song4 = new Song("O","Omarion","RnB/Soul",2005,"O");
let song5 = new Song("Hotline Bling","Drake","Hiphop",2016,"Views");


//Class 5-------------------------------------------------------
class Movie{

    construtor(actor,title,category,year,writer,director){
        this.actor = actor;
        this.title = title;
        this.category = category;
        this.year = year;
        this.director = director;
    }
}

let movie1 = new Movie("Johnny Depp","Rango","Animation",2011,"Gore Verbinski");
let movie2 = new Movie("Ryan Reynolds","Dead Pool","Action",2016,"Simon Kinberg");
let movie3 = new Movie("Tyler Perry","Medea's Witness Protecction","Comedy",2012,"Tyler Perry");
let movie4 = new Movie("Steve Carell","Despicable Me","Animation",2011,"Pierre Coffin");
let movie5 = new Movie("Angelina Jolie","Salt","Action",2010,"Philip Noyce");


//Class 7---------------------------------------------------------
class Phone{

    constructor(type,brand,model,cardType,cost,batteryType){
        this.type = type;
        this.brand = brand;
        this.model = model;
        this.cardType = cardType;
        this.cost = cost;
        this.batteryType = batteryType;
    }
}

let phone1 = new Phone("Tablet","Samsung","Samsung Galaxy Note 10","Single SIM",3500000,"Internal");
let phone2 = new Phone("Smart","Samsung","Samsung Galaxy S20","Dual SIM",2300000,"Internal");
let phone3 = new Phone("Smart","Sony","Xperia Z3 Compact","Single SIM",250000,"Internal");
let phone4 = new Phone("Smart","Tecno","Tecno Spark 3","Dual SIM",350000,"Internal");
let phone5 = new Phone("Smart","Sony","Xperia XZ3","Single SIM",1300000,"Internal");


//Class 8---------------------------------------------------------------
class Student{

    constructor(firstName,lastName,courseName,GPA,year,retakeCount){
        this.firstName = firstName;
        this.lastName = lastName;
        this.courseName = courseName;
        this.GPA = GPA;
        this.year = year;
        this.retakeCount = retakeCount;
    }
} 

let stud1 = new Student("Arnold", "Sentamu", "Telecom Engineering",3.98,2,0);
let stud2 = new Student("Ismail", "Kato", "Electrical Engineering",4,0);
let stud3 = new Student("Charles", "Katerega", "Medicine",3.5,0);
let stud4 = new Student("Richard", "Opio", "Software Engineering",3.8,0);
let stud5 = new Student("Allan", "Kalema", "Computer Engineering",4.2,0);

//Class 9--------------------------------------------------------
class BankAccount{

    constructor(accType,accName,bankName,branch,bal,status){
        this.accType = accType;
        this.accName = accName;
        this.bankName = bankName;
        this.branch = branch;
        this.bal = bal;
        this.status = status;
    }
}

let account1 = new BankAccount("Savings","KSoft Soluitons Uganda","Housing Finance","Kampala",500000,"Active");
let account2 = new BankAccount("Current","Kalema Allan Bejamin","Housing Finance","Kampala",85000000,"Active");
let account3 = new BankAccount("Fixed","Kalema Allan","Bank of Africa","Kampala",7600000,"Active");
let account4 = new BankAccount("Toto Account","Kalema Ernest","KCBBank","Kampala",900000,"Active");
let account5 = new BankAccount("Savings","KSoft Soluitons Uganda","Housing Finance","Kampala",500000,"Active");


//Class 10----------------------------------------------
class Drink{

    contructor(type,brand,packageType,size,cost,manufacturer){
        this.Type = Type;
        this.brand = brand;
        this.packageType = packageType;
        this.size = size;
        this.cost = cost;
        this.manufacturer = manufacturer;
    }
}


let Drink1 = new Drink("Soda","Coke","Plastic Bottle","500ML",1500,"Coca-Cola");  
let Drink2 = new Drink("Soda","Fanta","Plastic Bottle","500ML",1500,"Coca-Cola");
let Drink3 = new Drink("Soda","Pepsi","Plastic Bottle","300ML",1500,"Crown Beverages");  
let Drink4 = new Drink("Beer","Guiness","Can","500ML",8000,"UBL"); 
let Drink5 = new Drink("Red Wine","Robertson","Bottle","750ML",47000,"Robertson Winery"); 
