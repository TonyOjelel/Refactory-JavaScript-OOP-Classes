class Organisation {
    constructor(location,Employees,offices,type_of_org,name) {
      this.location = location;
      this.Employees = Employees;
      this.offices = offices;
      this.type_of_org= this.type_of_org;
      this.name= name;
    }
  }

  // Objects for Organisation class
  const Org1 = new Organisation("Ntinda", 100,50,"Private", "KAAL CAPITAL");
  const Org2= new Organisation("Namugongo",50,20, "Private", "MUNA Enterprise");
  const Org3 = new Organisation("Mbuya",50,50 ,"Public", "MCE SACCO");
  const Org4 = new Organisation("Pader",20,15 ,"Public","Pader Pharmacy");
  const Org5 = new Organisation("Makindye",30,15,"Public","Mak SACCO");


class Employer {
    constructor(id,Firstname,Lastname,salary,residence) {
      this.id = id;
      this.Firstname = Firstname;
      this.Lastname = Lastname;
      this.salary= salary;
      this.residence= residence;
    }
  }

  // Objects for Employer class
  const Emp1 = new Employer(001, "Francis","Mpuga", 5000000, "Mbuya");
  const Emp2= new Employer(002, "Newton","Arinda" ,2800000,"Kyebando");
  const Emp3 = new Employer(003, "Tobin","Rogers" ,4700000, "Gayaza");
  const Emp4 = new Employer(004, "Paison","Mpangana" ,10000000,"Kireka");
  const Emp5 = new Employer(005,"Mark","Dubois",6000000,"Ntinda");


  class Employee {
    constructor(id,Firstname,Lastname,salary,residence) {
      this.id = id;
      this.Firstname = Firstname;
      this.Lastname = Lastname;
      this.salary= salary;
      this.residence= residence;
    }
  }

  // Objects for Employee class
  const Emp01 = new Employee(01, "Sseki","Mpuga", 500000, "Matugga");
  const Emp02= new Employee(02, "Gordon","Atuhe" ,280000,"Kireka");
  const Emp03 = new Employee(03, "Ture","Ssekaja" ,470000, "Gayaza");
  const Emp04 = new Employee(04, "Saison","Mpangana" ,1000000,"Muyenga");
  const Emp05 = new Employee(05,"Matthew","Damba",600000,"Namugongo");

  class Office {
    constructor(Desks,chairs,laptops,employees,shelves) {
      this.Desks = this.Desks;
      this.chairs = chairs;
      this.laptops = laptops;
      this.employees= employees;
      this.shelves=shelves;
    }
  }

  // Objects for Office class
  const Office1 = new Office(8,8,8,8,4);
  const Office2= new Office(5,5,5,5,3);
  const Office3 = new Office(10,10,10,10,5);
  const Office4 = new Office(9,9,9,9,4);
  const Office5 = new Office(4,4,4,4,2);

  class Laptop {
    constructor(windowvers,ram,generation,storage,price) {
      this.windowvers = windowvers;
      this.ram = ram;
      this.storage = storage;
      this.generation= generation;
      this.price= price;
    }
  }

  // Objects for Laptop class
  const Lap1 = new Laptop("Windows 10","8gbram","256gb","5thgen",850000);
  const Lap2= new Laptop("Windows 10","4gbram","500gb","5thgen",500000);
  const Lap3 = new Laptop("Windows 8","4gbram","300gb","4thgen",500000);
  const Lap4 = new Laptop("Windows 8","Dualcore","500gb","3thgen",450000);
  const Lap5 = new Laptop("Windows 11","16gbram","500gb","8thgen",2500000);

  class Church {
    constructor(name, location, pastor, no_of_congregation,services) {
      this.name = name;
      this.location= location;
      this.pastor = pastor;
      this.no_of_congregation= no_of_congregation;
      this.services=services;
    }
  }

  // Objects for Church class
  const Church1 = new Church("Mbuya Pentecoastal Church","Mbuya","Pastor Henry Minani",500,"2 services");
  const Church2= new Church("Makerere Community Church","Makerere","Pastor Martin Ssempa",800,"2services");
  const Church3 = new Church("Miracle Center Cathedral","Kampala","Pastor Robert Kayanja",5000,"3 services");
  const Church4 = new Church("Light the World Church","Nansana","Pastor Wilson Bugembe",1000,"2 services");
  const Church5 = new Church("Christian Life Church","Makerere Kavule","Pastor Jackson Ssenyonga",2000,"3 services");

  class Pastors {
    constructor(firstname,lastname, Church,family,residence) {
      this.firstname = firstname;
      this.lastname = lastname;
      this.Church = Church;
      this.family= family;
      this.residence= residence;
    }
  }

  // Objects for Pastors class
  const Pastor1 = new Pastors("Minani","Henry","Mbuya Pentecoastal Church","5 children","Mukono");
  const Pastor2= new Laptop("Ssempa","Martin","Makerere Community Church","5 children","Kampala");
  const Pastor3 = new Laptop("Kayanja","Robert","Miracle Center Cathedral","3 children","Kampala");
  const Pastor4 = new Laptop("Bugembe","Wilson","Light of the World Church","none","Kampala");
  const Pastor5 = new Laptop("Ssenyonga","Jackson","Christian Life Church","3 children","Kampala");


  class Schools {
    constructor(name,location, number_of_students,type,teachers) {
      this.name = name;
      this.location = location;
      this.number_of_students = number_of_students;
      this.type= type;
      this.teachers= teachers;
    }
  }

  // Objects for Schools class
  const School1 = new Schools("Seeta High School","Mukono",3000,"Private","300");
  const School2= new Schools("St. Joseph Naggalama","Mukono",1500 ,"Private","250");
  const School3 = new Schools("Seeta High School","Mbalala",3000,"Private","300");
  const School4 = new Schools ("Seeta High School","Mukono",3000,"Private","300");
  const School5 = new Schools ("Ndejje Senior Secondary School","Luwero",4000,"Government","500");

  class hospitals {
    constructor(name,location, number_of_patients,type,doctors) {
      this.name = name;
      this.location = location;
      this.number_of_patients = number_of_patients;
      this.type= type;
      this.doctors= doctors;
    }
  }

  // Objects for hospitals class
  const hosp1 = new hospitals("Nakasero Hospital","Nakasero",3000,"Private","800");
  const hosp2= new hospitals("Case Hospital","Kampala",1500 ,"Private","250");
  const hosp3 = new hospitals("International Hospital Kampala","Kamapala",3000,"Private","300");
  const hosp4 = new hospitals ("Mulago Referral Hospital","Mulago",5000,"Government",2000);
  const hosp5 = new hospitals ("Mbarara Regional Referral Hospital","Mbarara",2000,"Government",1000);

  class phone {
    constructor(name,ram,storage,wireless_charging,price) {
      this.name = name;
      this.ram = ram;
      this.storage = storage;
      this.wireless_charging= wireless_charging;
      this.price= price;
    }
  }

  // Objects for phone class
  const phone1 = new phone("LG velvet 5g","8gbram","128gb","yes",850000);
  const phone2= new phone("Iphone14pro max ","4gbram","256gb","yes",5000000);
  const phone3 = new phone("Nexus 6p","4gbram","64gb","no",500000);
  const phone4 = new phone("Tecno camonn 15","3gb","64gb","no",450000);
  const phone5 = new phone("s23 ultra","16gbram","356gb","yes",4000000);


  


// Output

console.log(..."Class Organisation")
console.log(Org1);
console.log(Org2);
console.log(Org3);
console.log(Org4);
console.log(Org5);

console.log(..."Class Employer")
console.log(Emp1);
console.log(Emp2);
console.log(Emp3);
console.log(Emp4);
console.log(Emp5);

console.log(..."Class Employee")
console.log(Emp01);
console.log(Emp02);
console.log(Emp03);
console.log(Emp04);
console.log(Emp05);


console.log(..."Class Office")
console.log(Office1);
console.log(Office2);
console.log(Office3);
console.log(Office4);
console.log(Office5);

console.log(..."Class Laptop")
console.log(Lap1);
console.log(Lap2);
console.log(Lap3);
console.log(Lap4);
console.log(Lap5);

console.log(..."Class Church")
console.log(Church1);
console.log(Church2);
console.log(Church3);
console.log(Church4);
console.log(Church5);

console.log(..."Class Pastors")
console.log(Pastor1);
console.log(Pastor2);
console.log(Pastor3);
console.log(Pastor4);
console.log(Pastor5);

console.log(..."Class Schools")
console.log(School1);
console.log(School2);
console.log(School3);
console.log(School4);
console.log(School5);

console.log(..."Class hospitals")
console.log(hosp1);
console.log(hosp2);
console.log(hosp3);
console.log(hosp4);
console.log(hosp5);

console.log(..."Class phones")
console.log(phone1);
console.log(phone2);
console.log(phone3);
console.log(phone4);
console.log(phone5);
