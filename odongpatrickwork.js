// OOP
// Object-Oriented Programming(OOP) is a programming paradigm based on the concepts of Objects.
// That means everything that we achieve in OOP language is through objects here object defines the real-world entities like Student or Car (More detail soon).
// By using OOP, you make sure that only allowed members of one code is accessible to others. That makes your code fully secured to unauthenticated access (within the code).
// example.

class User {
    constructor(name, userName, password ,ninNumber ,phoneNumber) {
      this.name = name;
      this.userName = userName;
      this.password = password;
      this.ninNumber = ninNumber;
      this.phoneNumber = phoneNumber;
    }
}
let login = new User ("patrick","patrick001","password","ninNumber","phoneNumber"
)
console.log(login)

// example 2

class Dog {
  constructor(name, breed, color, age,size){
    this.name = name;
    this.breed= breed;
    this.color = color;
    this.age = age;
    this.size = size;
  }
}

let germandog= new Dog("jesse","german","black","10","size")

console.log(germandog)

// example 3

class Book{

  constructor(title,author,numberOfpage,publisher,size){
    this.title = title;
    this.author = author;
    this.numberOfpage = numberOfpage;
    this.publisher = publisher;
    this.size = size;
  }
}

let Book1= new Book("Javascrip","irene","100","refactory","big")

console.log("printing out this key ward ",Book1)


// example 4

class Phone{
  constructor(storage,bettery,screensize,size,ram,){
    this.storage = storage;
    this.bettery = bettery;
    this.screensize = screensize;
    this.size = size;
    this.ram = ram;

  }
}

let tecno= new Phone("128","strong","100","6","small")

console.log("printing out this key ward ",tecno)

// example 5

class Form{
  constructor(phoneNumber,user,userName,recoveryNumber, password){
    this.phoneNumber = phoneNumber;
    this.user = user;
    this.userName = userName;
    this.recoveryNumber = recoveryNumber;
    this.password = password;


  }
}

let Form1= new Form("phoneNumber","user","james","recoveryNumber","passward")

console.log("printing out this key ward" ,Form1)


// example 6

class Student{
  constructor(name,height,age,weight, color){
    this.name = name;
    this.height = height;
    this.age = age;
    this.weight = weight;
    this.color = color;
 

  }
}

let Student1= new Student("jimmy","55metter","13","60kg","dark")

console.log("printing out this key ward" ,Student1)


// example7
class Chair{
  constructor(plastic,roko,sofa,lsharp,matelic){
      this.plastic = plastic;
    this.roko = roko;
    this.sofa = sofa;
    this.lsharp = lsharp;
    this.matelic = matelic;
 

  }
}

let Chair1= new Chair("plastic","roko","sofa","lsharp","matelic")

console.log("printing out this key ward" ,Chair1)

// examle8

class Computer{
  constructor(size,color,type,sharp,capacity){
    this.size = size;
    this.color = color;
    this.type = type;
    this.sharp = sharp;
    this.capacity = capacity;
 

  }
}

let dell=new Computer("14.5","black","hp","sharp","cpacity")

console.log("printing out this key ward" ,dell)

// example 9

class Motorcyle{
  constructor(baja,type,color,tvs,speed){
    this.baja = baja;
    this.color = color;
    this.type = type;
    this.tvs = tvs;
    this.speed = speed;
 

  }
}

let motorcyle1= new Motorcyle("baja","black","type","tvs","speed")

console.log("printing out this key ward" ,motorcyle1)

// example 10

class Tribe{
  constructor(color,weight,height,region,behavior){
    this.weight = weight;
    this.color = color;
    this.height = height;
    this.region = region;
    this.behavior = behavior;
 

  }
}

let Tribe1= new Tribe("weight","black","tall","region","behavior")

console.log("printing out this key ward" ,Tribe1)

