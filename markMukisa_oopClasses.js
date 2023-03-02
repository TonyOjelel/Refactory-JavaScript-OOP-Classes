// class One
class StudentInfo {
    constructor(name,age,gender,id,email,semester,entryYear) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.id = id;
        this.email = email;
        this.semester = semester;
        this.entryYear = entryYear;
    }
}

const studentOne = new StudentInfo("Henry",22,"Male",8331,"henrym@gmail.com",3,2020);
const studentTwo = new StudentInfo("Rene",21,"Female",8332,"renep@gmailcom",2,2020);
const studentThree = new StudentInfo("Joseph",20,"Male",8333,"josephk@gmailcom",1,2021);
const studentFour = new StudentInfo("Mary",23,"Female",8334,"marynambi@gmailcom",3,2019);
const studentFive = new StudentInfo("Fred",19,"Male",8335,"fred@gmail.com",2,2023);
// console.log(studentOne);

// class two
class Sermon {
    constructor(title,preacher,category,date,duration){
        this.title = title;
        this.preacher = preacher;
        this.category = category;
        this.date = date;
        this.duration = duration;
    }
}

const sermon1 = new Sermon("Glory in Tribulation","Ps Zack","Faith","February 2,2023","1 hour");
const sermon2 = new Sermon("The Transformed working Mind","Ps Moses","Christian Conduct","January 21,2023","50 minutes");
const sermon3 = new Sermon("The spirit of Grace","Ps Grace","Grace","March 5,2023","1 hour");
const sermon4 = new Sermon("Heavenly Bliss,Here In We Groan","Ps Fredrick","Knowledge and Wisdom","June 8,2022","40 minutes");
const sermon5 = new Sermon("Glory in Tribulation","Ps Modesty","Submission","August 18,2022","30 minutes");
// console.log(sermon1);


// class three
class Television{
    constructor(brand,type,screenSize,resolution,price){
        this.brand = brand;
        this.type = type;
        this.screenSize = screenSize;
        this.resolution = resolution;
        this.price = price;
    }
} 

const tvOne = new Television("OnePlus 650Q2 Pro","Smart Tv","65 Inch","4K","$1500");
const tvTwo = new Television("Samsung QN65QN800BFXZC","Smart Tv","64 Inch","8K","$1300");
const tvThree = new Television("Sony XR-65X90K","Smart Tv","32 Inch","4K","$900");
const tvFour = new Television("LG OLED65R1PTA","Smart Tv","65 Inch","2K","$1400");
const tvFive = new Television("Hisense 65A65H","Smart Tv","65 Inch","1K","$2000");
// console.log(tvFive);


// class four
class Shoe{
    constructor(name,style,sole,price,upperType){
        this.name = name;
        this.style = style;
        this.sole = sole;
        this.price = price;
        this.upperType = upperType;
    }
}

const shoe1 = new Shoe("Balenciaga","Sneaker","Non-slip rubber","$41","leather");
const shoe2 = new Shoe("Steve Madden","Sneaker","Synthetic rubber","$65","Chambray cotton");
const shoe3 = new Shoe("Skecher","Oxford","Synthetic rubber","$54","Canvas");
const shoe4 = new Shoe("Levi's","Causual sneaker","Rubber","$34","Synthetic leather");
const shoe5 = new Shoe("Adidas","Tennis shoe","Rubber","$49","Suede leather");
// console.log(shoe3);

// class five 
class Patient{
    constructor(name,gender,age,height,weight,bloodType,illness){
        this.name = name;
        this.gender = gender;
        this.age = age;
        this.height = height;
        this.weight = weight;
        this.bloodType = bloodType;
        this.illness = illness;
    }
}
const patient1 = new Patient("Yole Kevin","Male",23,"170 cm","64 kg","O","Asthma");
const patient2 = new Patient("Mutumba Isaac","Male",26,"140 cm","54 kg","A","Cancer");
const patient3 = new Patient("Nabukenya Sandra","Female",28,"150 cm","60 kg","B","Diabetes");
const patient4 = new Patient("Kirabo Godwin","Male",30,"190 cm","70 kg","AB","Anemia");
const patient5 = new Patient("Aguti Edith","Female",22,"140 cm","58.5 kg","O","Kidney Disease");
// console.log(patient3);


// class six
class BackPack{
    constructor(brand,color,material,weight,externalDepth){
        this.brand = brand;
        this.color = color;
        this.material = material;
        this.weight = weight;
        this.externalDepth = externalDepth;
    }
}

const backpack1 = new BackPack("Wenger","Blue","Leather","900g","370 mm");
const backpack2 = new BackPack("Brunelo Cucinelli","Black","Nylon","1.1kg","400 mm");
const backpack3 = new BackPack("Luis Vuiton","Red","Calf Leather","600g","250 mm");
const backpack4 = new BackPack("Gucci","Gray","Leather","700g","300 mm");
const backpack5 = new BackPack("Michael Kors","Green","Leather","600g","430 mm");
// console.log(backpack3);

// class seven 
class Movie {
    constructor(title,genre,contentRating,releaseDate,director){
        this.title = title,
        this.genre = genre,
        this.contentRating = contentRating;
        this.releaseDate = releaseDate;
        this.director = director;
    }
}

const movie1 = new Movie("Black Adam","Thriller","PG","November 5,2022","Sccot Cooper");
const movie2 = new Movie("The Pale Blue Eye","Crime","R","January 5,2023","Luis Bayard");
const movie3 = new Movie("Do Revenge","Comedy","TV-MA","August 15,2022","Jennifer Kaytin");
const movie4 = new Movie("Enola Homles 2","Adventure","PG-13","November 5,2022","Maya Hawke");
const movie5 = new Movie("Scream","Horror","R","December 2,2022","Camila Mendes");
// console.log(movie2);


// class eight
class Song{
    constructor(name,category,artist,length,language){
        this.name = name;
        this.category = category;
        this.artist = artist;
        this.length = length;
        this.language = language;
    }
}

const songOne = new Song("Balo Balo","Hip hop","Mdura","2 mins","Luganda");
const songTwo = new Song("Kulosa","Hip hop","Oxlade","2 mins","English");
const songThree = new Song("Lockdown","Reggae","Koffee","3 mins","English");
const songFour = new Song("Bandana","Jazz","Fireboy","1 min","English");
const songFive = new Song("Vivir Mi Vida","Classical","Marc Anthony","4 mins","Spanish");
// console.log(songFive);

// class nine 
class Phone{
    constructor(name,color,size,brand,os,model){
        this.name = name;
        this.color = color;
        this.size = size;
        this.brand = brand;
        this.os = os
        this.model = model;
    }
}

const firstPhone = new Phone("Galaxy S22","Pink Gold"," 6.1\" ","Sumsung","Android 12","SM-S901B");
const secondPhone = new Phone("Phantom X","Starry Night Blue","6.7 inches","Techo","Android 11","AC8");
const thirdPhone = new Phone("iPhone 14 Plus","Purple"," 6.7\" ","Apple","iOS 16","A2886");
const fourthPhone = new Phone("Nova Y61","Mint Green"," 6.5\" ","Huawei","EMUI 12","EVE-LX9");
const fifthPhone = new Phone("Xperia 5 IV","Green"," 6.1\" ","Sony","Android 12","XQCQ62B-GC");
console.log(thirdPhone);



// class ten 
class Computer {
    constructor(brand,os,ram,cpuModel,speed,cpuManufacturer){
        this.brand = brand;
        this.os = os;
        this.ram = ram;
        this.cpuModel = cpuModel;
        this.speed = speed;
        this.cpuManufacture = cpuManufacturer;
    }

}

const computerOne = new Computer("Dell","Windows 10 Pro","32 GB","Core i7","3.4 Ghz","Intel");
const computerTwo = new Computer("HP","Windows 11 Pro","8 GB","Core i5","1.9 Ghz","Intel");
const computerThree = new Computer("Asus","Windows 10 Pro","16 GB","Core i7","2.5 Ghz","Intel");
const computerFour = new Computer("Lenovo","Windows 11","4 GB","Core i7","4.2 Ghz","Intel");
const computerFive = new Computer("Dell","Windows 7","2 GB","Intel Core 2 Duo","1.5 Ghz","Intel");
// console.log(computerTwo);





 




