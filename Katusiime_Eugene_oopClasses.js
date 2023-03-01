class Phone {
    constructor(Name, RAM, ROM, Camera, Software) {
    this.Name = Name;
    this.RAM = RAM;
    this.ROM = ROM;
    this.Camera = Camera;
    this.Software=Software;
    }
}
let Redmi = new Phone('Redmi', 6, 128, '16mp', 'Android 11')
let Samsung = new Phone('Samsung', 8, 256, '100mp', 'Android 13')
let Iphone = new Phone('Iphone',3 ,64 ,'12mp', 'ios14')
let Oppo = new Phone('Oppo', 6, 128,'13mp', 'Android 13' )
let Vivo = new Phone('Vivo', 6, 128,'13mp', 'Android 13')
console.log(Iphone)

class Animal {
    constructor(Name, Color, Habitat, Type, Domestication){
        this.Name = Name;
        this.Color = Color;
        this.Habitat = Habitat;
        this.Type = Type;
        this.Domestication = Domestication;
    }
}
let lion = new Animal('Lion', 'Brown', 'Forest', 'Carnivore', 'Wild')
let tiger = new Animal('Tiger','White','Forest','Carnivore','Wild')
let pig = new Animal('Pig','Pink','Mud','Omnivore','Domestic')
let goat = new Animal('Goat','Black','Farm','Herbivore','Domestic')
let Dog = new Animal('Dog','Brown','Home','Omnivore','Domestic')
console.log(Dog)
class Human {
    constructor(Name,Location,Height,Weight,Gender) {
    this.Name = Name;
    this.Location = Location;
    this.Height = Height;
    this.Weight = Weight;
    this.Gender = Gender;
    }
}
let Peter = new Human('Peter','Lugazi','6ft',70,'Male')
let John = new Human('John','Mutungo','5ft',68,'Male')
let Matthew = new Human('Matthew','Gaba','6ft',100,'Male')
let Philip = new Human('Philip','Kyebando','6"5',98,'Male')
let Sandra = new Human('Sandra','Ntinda','5ft',50,'Female')
console.log(Peter)
class School {
    constructor(subject,stream,age,role,Gender){
        this.subject = subject;
        this.stream = stream;
        this.age = age;
        this.role = role;
        this.Gender = Gender;
    }
}
let student1 = new School('Math','Green',17,'Headboy','Male')
let student2 = new School('Economics','Green',17,'Headgirl','Female')
let student3 = new School('Physics','Red',18,'Chairman','Male')
let student4 = new School('Literature','Yellow',17,'Class Monitor','Male')
let student5 = new School('Divinity','Blue',17,'Secretary','Female')
console.log(student1)
class Transport{
    constructor(mode,speed,size,price,capacity){
        this.mode = mode;
        this.speed = speed;
        this.price = price;
        this.size = size;
        this.capacity = capacity;
    }
}
let train = new Transport('train','70Km/hr','Large','2$',50)
let taxi = new Transport('Taxi','50KM/hr','Medium','1$',14)
let airplane = new Transport('Airplane','300KM/hr','Large','100$',350)
let boat = new Transport('boat','40km/hr','small','5$',7)
let helicopter = new Transport('helicopter','140km/hr','medium','50$',5)

console.log (helicopter)


class Camera{
    constructor(Name,year,sesnorSize,quality,fps){
        this.Name=Name;
        this.year=year;
        this.sesnorSize=sesnorSize;
        this.quality=quality;
        this.fps=fps;
    }
}
let canon = new Camera('Canon EOS',2019,'2 inches','4k','60fps')
let Nikon = new Camera('Nikon',2020,'2.5 inches','4k',30)
let Sony = new Camera('Sony',2020,'2 inches','4K',30)
let Fujifilm = new Camera('Fujifilm',2022,'3 inches','4K',60)
let Panasonic = new Camera('Panasonic',2021,'2.5 inches','4K',30)
console.log(Panasonic)
class Flower{
    constructor(Name,color,pollination,scent,occasion){
        this.Name=Name;
        this.color=color;
        this.pollination=pollination;
        this.scent=scent;
        this.occasion=occasion;
    }
}
let rose = new Flower('Rose','Red','Insect pollination','sweet','Date')
let Sunflower = new Flower('Sunflower','Yellow and brown','Insect pollination','slightly nutty','Home beauty')
let lily = new Flower('lily','white','Insect pollination','sweet spicy','Wedding')
let Orchid = new Flower('Orchid','purple','animal pollination','sweet musky','Birthday')
let Lavender = new Flower('Lavender','Purple','Insect pollination','sweet herbal','Home beauty')
console.log(Orchid)
class Country{
    constructor(continent,Name,population,president,Major_relegion){
        this.continent = continent;
        this.Name = Name;
        this.population = population;
        this.president = president;
        this.Major_relegion = Major_relegion;
    }
}
let USA = new Country('North America','USA','331 million','Joe Biden','Christianity')
let Brazil = new Country('South America','Brazil','213 million','Jair Bolsonaro','Christianity')
let China = new Country('Asia','China','1.4 billion','Xi Jinping','Buddhism')
let Nigeria = new Country('Africa','Nigeria','211 million','Muhammadu Buhari','Christianity')
let France = new Country('Europe','France','67 million','Emmanuel Macron','Christianity')
console.log(Brazil)

class Cloth{
    constructor(material,Name,softness,durability,style){
        this.material = material;
        this.Name = Name;
        this.softness = softness;
        this.durability = durability;
        this.style = style;
    }
}
let shirt = new Cloth('cotton','T-shirt','soft and comfortable','medium','casual')
let jeans = new Cloth('Denim','Denim Jeans','Rigid but softens with wear','High','casual')
let sweater = new Cloth('Wool sweater','Wool','Soft and warm','High','casual')
let blouse = new Cloth('Silk blouse','silk','Soft and luxurious','High','Dressy or professional')
let jacket = new Cloth('Leather Jacket','Leather','Stiff but softens with wear','High','casual')
console.log(jacket)

class software{
    constructor(Name,device,year,type,purpose){
        this.Name = Name;
        this.device = device;
        this.year = year;
        this.type = type;
        this.purpose = purpose;
    }
}
let Windows = new software('Microsoft windows 10','Personal computer',2015,'operating system','Manages computer hardware')
let Adobe = new software('Adobe photoshop','Personal computers and mobile devices',1990,'Graphics editor','Allows users to create and edit digital images and graphics')
let Mozilla = new software('Mozilla firefox','Personal computers and mobile devices',2002,'web browser','Allows users to browse the internet and access websites')
let Qucikbooks = new software('Quickbooks','Personal computers and mobile devices',1983,'Accounting software','Helps manage financial data')
let Autodesk = new software('Autodesk AutoCAD','Personal computers',1982,'Computer aided design software','Allows users to create and edit 2D and 3D designs') 
console.log(Mozilla)
