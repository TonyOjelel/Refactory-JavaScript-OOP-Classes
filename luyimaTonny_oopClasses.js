//class1
class Girlfriend{
    constructor(name, weight, location, color, height){
      this.name = name;
      this.weight = weight;
      this.location = location;
      this.color = color;
      this.height = height;
    }
}
  let girlfriend1 = new Girlfriend("cathy", 55, "kampala", "brown", 5);
  let girlfriend2 = new Girlfriend("betty", 65, "kampala", "chocolate", 4);
  let girlfriend3 = new Girlfriend("shakirah", 45, "kampala", "brown", 6);
  let girlfriend4 = new Girlfriend("Ritah", 97, "kampala", "black", 4);
  let girlfriend5 = new Girlfriend("Jane", 43, "kampala", "brown", 5);
  console.log(girlfriend5);
  
  
  //class2
  class Phone {
      constructor(model, manufacturer, storage, color, year) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.storage = storage;
        this.color = color;
        this.year = year;
      }
    }
    
    const phone1 = new Phone("iPhone 13 Pro", "Apple", "128 GB", "blue", 2012);
    const phone2 = new Phone("iPhonne 14", "Apple", "256 GB", "grey", 2020);
    const phone3 = new Phone("iPhone 14 pro", "Apple", "128 GB", "Black", 2022);
    const phone4 = new Phone("Samsung s10+", "Samsung", "256 GB", "white", 2019);
    const phone5 = new Phone("Samsung s20", "Samsung", "256 GB", "pink", 2017);
    console.log(phone2);
  
    //class3
    class Car {
    constructor(company, model, year, color, quantity) {
      this.company = company;
      this.model = model;
      this.year = year;
      this.color = color;
      this.quantity = quantity;
    }
  }
  
  const car1 = new Car("Toyota", "Harrier", 2020, "blue", 25);
  const car2 = new Car("Honda", "Honda", 2018, "white", 34);
  const car3 = new Car("Ford", "Ranger", 2015, "white", 28);
  const car4 = new Car("Toyota", "Passo", 2017, "black", 23);
  const car5 = new Car("BMW", "C-class", 2019, "black", 41);
  console.log(car3);
  
  //class4
  class Laptop {
      constructor(brand,operatingSystem,ram,speed,cpu){
          this.brand = brand;
          this.operatingSystem = operatingSystem;
          this.ram = ram;
          this.speed = speed;
          this.cpu = cpu;
      }
  
  }
  
  const laptop1 = new Laptop("HP","Windows 10 Pro","32 GB", "3.4 Ghz","Intel");
  const laptop2 = new Laptop("HP","Windows 11 Pro","8 GB", "1.9 Ghz","Intel");
  const laptop3 = new Laptop("Dell","Windows 10 Pro","16 GB","2.5 Ghz","Intel");
  const laptop4 = new Laptop("Dell","Windows 11","4 GB","4.2 Ghz","Intel");
  const laptop5 = new Laptop("lenovo","Windows 7","2 GB","1.5 Ghz","Intel");
  console.log(laptop5);
  
  //class5
  class Monitor{
      constructor(make,type,size,resolution,price){
          this.make = make;
          this.type = type;
          this.size = size;
          this.resolution = resolution;
          this.price = price;
      }
  } 
  
  const monitor1 = new Monitor("Hisense","Smart","65 Inch","4K","$1500");
  const monitor2 = new Monitor("LG","Smart","64 Inch","8K","$1300");
  const monitor3 = new Monitor("Dell","analog","32 Inch","4K","$900");
  const monitor4 = new Monitor("LG","Smart","65 Inch","2K","$1400");
  const monitor5 = new Monitor("skyTech","analog","65 Inch","1K","$2000");
  console.log(monitor1);
  
  //class6
  class Country{
      constructor(name, quantity, location, language, Activity) {
          this.name = name;
          this.quantity = quantity;
          this.location = location;
          this.language = language;
          this.Activity = Activity;
        }
  }
  let country1 = new Country("Uganda", 1800000, "eastAfrica", "Luganda", "tourism");
  let country2 = new Country("Kenya", 709900, "eastAfrica", "kiswahili", "business");
  let country3 = new Country("Burundi", 800998, "eastAfrica", "French", "farming");
  let country4 = new Country("Sudan", 789000, "eastAfrica", "swahili", "business");
  let country5 = new Country("somalia", 890000, "Africa", "kiswahili", "fishing");
  console.log(country4);
  
  //class7
  class University {
      constructor(name, type, location, students, facilitators) {
        this.name = name;
        this.type = type;
        this.location = location;
        this.students = students;
        this.facilitators = facilitators;
      }
    }
    
    let university1 = new University("MUBS", "Public", "Nakawa", 315660, 500);
    let university2 = new University("MAK", "Public", "Makerere", 1734381, 1007);
    let university3 = new University("UCU", "Private", "mukono", 11320, 432);
    let university4 = new University("KYU", "Private", "Kireka", 2238, 400);
    let university5 = new University("CLARKE", "Private", "muyenga", 1876, 207);
    console.log(university2);
  
  //class8
  class teacher {
    constructor(name, age, gender, subject, weight) {
      this.name = name;
      this.age = age;
      this.gender = gender;
      this.subject = subject;
      this.weight = weight;
    }
  }
  
  const teacher1 = new teacher("Tonny", 25, "male", "math", 35);
  const teacher2 = new teacher("Kasoma", 30, "male", "english", 45);
  const teacher3 = new teacher("Joel", 40, "male", "ICT", 46);
  const teacher4 = new teacher("Emilly", 28, "female", "physics", 95);
  const teacher5 = new teacher("Davido", 45, "male", "biology", 55);
  console.log(teacher1);
  
  //class9
  class User {
  constructor(name, email, username, password, age) {
      this.name = name;
      this.email = email;
      this.username = username;
      this.password = password;
      this.age = age;
  }
  }
  
  let user1 = new User("John Doe", "johndoe@example.com", "johndoe", "password123", 25);
  let user2 = new User("Jane Smith", "janesmith@example.com", "janesmith", "password456", 30);
  let user3 = new User("Michael Brown", "michaelbrown@example.com", "michaelbrown", "password789", 40);
  let user4 = new User("Lily Wang", "lilywang@example.com", "lilywang", "passwordabc", 20);
  let user5 = new User("David Lee", "davidlee@example.com", "davidlee", "passworddef", 50);
  console.log(user5);
  
  //class10
  class Fruit {
    constructor(name, quantity, origin, color, weight){
        this.name = name;
        this.quantity = quantity;
        this.origin = origin;
        this.color = color;
        this.weight = weight;
    }
  }
  let fruit1 = new Fruit("mango", 50, "Uganda", "green", 5);
  let fruit2 = new Fruit("orange", 500, "Kenya", "orange", 4);
  let fruit3 = new Fruit("apple", 100, "UK", "green", 5);
  let fruit4 = new Fruit("berries",1000, "Dubai", "red", 2);
  let fruit5 = new Fruit("grapes", 680, "southAfrica", "lemon-green", 3);
  console.log(fruit3);
  