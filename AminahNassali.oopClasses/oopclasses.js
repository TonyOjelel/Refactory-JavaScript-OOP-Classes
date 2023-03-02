//OOP CLASS

// Class 1: cup
class cup {
    constructor(name, shape, color, weight, manufacturer) {
      this.name = name;
      this.shape = shape;
      this.color = color;
      this.weight = weight;
      this.manufacturer = manufacturer;
    }
  }
  
  // Objects for cup class
  let cup1 = new cup("mug", "round", "green", 180, "NICE");
  let cup2 = new cup("chalice", "large", "red", 25, "tikPlastics");
  let cup3 = new cup("Demitasse", "oval", "blue", 10, "Britania" );
  let cup4 = new cup("travelMug", "squareOval", "white", 65, " Mukwano");
  let cup5 = new cup("coktailGlass", "circle", "brown", 95, "MUG");
console.log(cup1, cup2, cup3, cup4, cup5)

// Class 2: country
class country {
  cconstructor(name, location, population, language, funFact) {
    this.name = name;
    this.location = location;
    this.population = population;
    this.language = language;
    this.funFact = funFact;
  }
}

// Objects for country class
let country1 = new country('Uganda', 'Africa', 40000000 , 'luganda', 'If you are a foreigner, you are a “mzungu”');
let country2 = new country('Lativia', 'Europe', 1830966, "Latvian", 'The first Christmas tree was decorated in Latvia, in 1510');
let country3 = new country('Japan', "Asia", 124830000, 'katakana', 'The oldest company in the world is in Japan');
let country4 = new country('Brazil', 'SouthAmerica', 216568882, 'brazilianPortuguese', 'Brazil has 4 time zones' );
let country5 = new country("Canada", "NorthAmerica", 38621285, 'English', 'Canada did not get its own flag until February 15, 1965');
console.log(country1, country2, country3, country4, country5)

// class 3 movie
class movie{
    constructor(title, actor, genre, releaseYear,grossing) {
        this.title = title;
        this.actor = actor;
        this.genre = genre;
        this.releaseYear = releaseYear;
        this.grossing = grossing;
    }
}
//objects for class movie
let movie1 = new movie('gameOfthrones', 'Kit Harrington', 'adventure', 2010, 125000000);
let movie2 = new movie('blacklist', 'James Spader', 'Crime', 2011, 180000000);
let movie3 = new movie('shanghaiExpress', 'Jackie Chan', 'comedy', 1986, 20000000);
let movie4 = new movie('trasporter', 'Jason Stantham', 'actionThriller', 2002, 20000000);
let movie5 = new movie('see',  'Jason Mamoa', 'adventure', 2019, 20000000);
console.log(movie1, movie2, movie3, movie4, movie5)

//class 4 president
class president{
  constructor(name, gender, country, age, spouse) {
      this.name = name;
      this.gender = gender;
      this.country= country;
      this.age = age;
      this.spouse = spouse;
  }
}
//objects for class president
let president1 = new president('Kaguata Museveni', 'male', 'Uganda', 80, "janet museveni")
let president2 = new president('Pual Kagame', 'male', 'Rwanda', 65, 'jeanette Nyiramongi' );
let president3 = new president('William Ruto', 'male', 'kenya', 56, 'Rachel Chebet');
let president4 = new president('Samia Suluhu', 'female', 'Tanzania', 63, 'Hafidh Ameir');
let president5 = new president('Salva Kir',  'male', 'southSudan', 71, 'Aluel william nyuon banny');
console.log(president1, president2, president3, president4, president5)


//class 5 person
class person{
  constructor(title, name, age, gender, eyeColor) {
      this.title = title;
      this.name = name;
      this.age = age;
      this.gender = gender;
      this.eyeColor = eyeColor;
  }
}
//objects for class person
let person1 = new person('mr', 'Damba Harunah', 35, 'male', 'brown');
let person2 = new person('mrs', 'Nassali Aminah', 25, 'female', 'black');
let person3 = new person('dr', 'Latim Mark', 28, 'female', 'green');
let person4 = new person('prof', 'Irene Nyakate', 37, 'female', 'blue');
let person5 = new person('consul',  'Samson Kapeyi', 40, 'male', 'darkGrey');
console.log(person1, person2, person3, person4, person5)


//class  6 farm
class farm{
  constructor(farmName, village, produce, employees, owner) {
      this.farmName = farmName;
      this.village = village;
      this.produce = produce;
      this.employees = employees;
      this.owner = owner;
  }
}
//objects for class farm
let farm1 = new farm('mpigiFarm', 'mabanda', 'maize', 20, 'Mukalazi')
let farm2 = new farm('Bukoola', 'kyebando', 'beans', 6, 'Nakijoba');
let farm3 = new farm('Masuliita', 'kambugu', 'cassava', 5, 'Mpataanyi');
let farm4 = new farm('Nakigalala', 'sissa', 'matooke', 10, 'Kiwanuka');
let farm5 = new farm('buloba',  'buloba', 'rice', 30, 'mputtu');
console.log(farm1, farm2, farm3, farm4, farm5)


//class 7 family
class family{
  constructor(grandFather, father, mother, child, aunt) {
      this.grandfather = grandFather;
      this.father = father;
      this.mother = mother;
      this.child = child;
      this.aunt = aunt;
  }
}
//objects for class family
let family1 = new family('Ali Kiggungu', 'Nuhu Ssentongo', 'Nuru Nansikombi', 'Aminah Nassali', 'Nagawa Rehema')
let family2 = new family('Asuman Mukasa', 'Dirisa Mosoke', 'Sharifa Abubaker', 'Nalukwago Rabibah', 'Nanyunja Swaffer');
let family3 = new family('Abas Lutaya', 'Nasir Lutaaya', 'Swabura Lutaaya', 'Adil Lutaaya', 'Namuli Edat');
let family4 = new family('Solomon Odong', 'Geofrey Odong', 'Linda Odong','Javier Odong', 'Samira Odong');
let family5 = new family('Ochaka Moses',  'Bruno Ishaka', 'Maria Ochaka', 'Ochaka Ishaka', 'Annet Bahati');
console.log(family1, family2, family3, family4, family5)


//class 8 chicken
class chicken{
  constructor(type, color, weight, eggs ,packaging) {
      this.type = type;
      this.color = color;
      this.weight = weight;
      this.eggs = eggs;
      this.packaging = packaging;
  }
}
//objects for chicken
let chicken1 = new chicken('silkie', 'white', 5, 56, 'polythene')
let chicken2= new chicken('brahma', 'brown', 4, 42, 'plasic');
let chicken3 = new chicken('polymouth', 'grey', 3, 32, 'paper');
let chicken4 = new chicken('rhodeIsland', 'red', 6, 82 , 'wood');
let chicken5= new chicken('australorp',  'black', 8, 100, 'bamboo');
console.log(chicken1, chicken2, chicken3, chicken4, chicken5)


//class 9 native
class native{
  constructor(name, continent, placeOforigin, activity, character) {
      this.name = name;
      this.continent = continent;
      this.placeOforigin = placeOforigin;
      this.activity = activity;
      this.character = character;
  }
}
//objects for class native
let native1 = new native('pygmies', 'Africa', 'Sahel','pastoralism', 'fierce');
let native2 = new native('americanIndians', 'America', 'Alaska', 'fruitGatherers', 'hunters');
let native3 = new native('zogam', 'Asia', 'kuki hills', 'hunting', 'fierce');
let native4 = new native('aboriginal', 'Australia', 'Tasmania', 'hunting', 'welcoming' );
let native5 = new native('ashkenaziJews',  'Europe', 'Russia', 'exploring', 'readers');
console.log(native1, native2, native3, native4, native5)


// class 10 distrcts 
class district {
  constructor(name, division, subCounty, zone, village){
      this.name= name;
      this.division= division;
      this.subCounty=subCounty;
      this.zone=zone;
      this.village=village;
  }
}


// objects for class district 

let district1 = new district('Kampala','Makindye', 'kizungu', 3, 'kasenya');
let district2 = new district('Wakiso','Nansana', 'Kyebando', 5, 'kabulengwa');
let district3 = new district('Butambala', 'mabanda', 'lugoye', 2,'kiziiko');
let district4 = new district('Arua', 'Ayivu', 'telego', 4, 'telego');
let district5 = new district('Soroti', 'television', 'serere', 1, 'muairock');
console.log(district1, district2, district3, district4, district5)

