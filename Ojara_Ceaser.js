//Class 1
class Districts {
    constructor(name, population, area, districtCode, regionalLocation) {
      this.name = name;
      this.population = population;
      this.area = area;
      this.districtCode = districtCode;
      this.regionalLocation = regionalLocation;
    }
  }
  
  let kampalaDistrict = new Districts("Kampala", 1627000, 189.7, "KLA", "Central");
  let guluDistrict = new Districts("Gulu", 447900, 4361, "GUL", "Northern");
  let jinjaDistrict = new Districts("Jinja", 470200, 3480, "JIN", "Eastern");
  let kabaleDistrict = new Districts("Kabale", 526900, 1827, "KAB", "Western");
  let mbaleDistrict = new Districts("Mbale", 480200, 2275, "MBL", "Eastern");
  
   // Output
   console.log("......................Districts.................................")
   console.log("District Name: ", kampalaDistrict.name);
   console.log("Population: ", kampalaDistrict.population);
   console.log("Area: ", kampalaDistrict.area);
   console.log("District Code:",kampalaDistrict.districtCode);
   console.log("Location: " ,kampalaDistrict.regionalLocation);
   console.log(".......................................................")
  

  //class 2
class Universities {
    constructor(name, location, yearFounded, studentEnrollment, academicPrograms) {
      this.Name = name;
      this.Location = location;
      this.YearFounded = yearFounded;
      this.StudentEnrollment = studentEnrollment;
      this.AcademicPrograms = academicPrograms;
    }
  }
  
  // Objects
  let MakerereUniversity = new Universities("Makerere University", "Kampala", 1922, 35000, ["Medicine", "Engineering", "Law", "Business", "Education"]);
  let UgandaChristianUniversity = new Universities("Uganda Christian University", "Mukono", 1997, 11000, ["Theology", "Business", "Education", "Health Sciences"]);
  let KyambogoUniversity = new Universities("Kyambogo University", "Kampala", 2003, 30000, ["Education", "Engineering", "Science", "Arts"]);
  let MbararaUniversityOfScienceAndTechnology = new Universities("Mbarara University of Science and Technology", "Mbarara", 1989, 7500, ["Medicine", "Nursing", "Science", "Public Health"]);
  let BusitemaUniversity = new Universities("Busitema University", "Tororo", 2007, 9000, ["Agriculture", "Engineering", "Health Sciences", "Natural Resources"]);
  
  // Output
  console.log(".......................Universities................................")
  console.log("University: ", MakerereUniversity.Name); 
  console.log("Year Founded ", MakerereUniversity.YearFounded);
  console.log("Academic Programs ", MakerereUniversity.AcademicPrograms); 
  console.log("Number of Students ",MakerereUniversity.StudentEnrollment);
  console.log("Location " ,MakerereUniversity.Location);
  console.log(".......................................................")

  //Class 3
  // Define the Tribes class
class Tribes {
    constructor(name, population, culturalPractices, traditionalFoods, languages) {
    this.name = name;
    this.population = population;
    this.culturalPractices = culturalPractices;
    this.traditionalFoods = traditionalFoods;
    this.languages = languages;
    }
    }

let baganda = new Tribes("Baganda", 10000000, ["Kwanjula (Introduction ceremony)", "Emikolo (Marriage ceremony)"], ["Matooke", "Luwombo", "Kalo"], ["Luganda", "English"]);
let banyankore = new Tribes("Banyankore", 2000000, ["Empango (Coronation ceremony)", "Okurasa Omugyenyi (Traditional doctor initiation)"], ["Eshabwe", "Akarere ka birungi (Millet bread)"], ["Runyankore", "English"]);
let acholi = new Tribes("Acholi", 1700000, ["Bwola dance", "Cattle keeping","farming"], [" Kal (Millet bread)", "Amaranth greens", "Beans"], ["Acholi", "English"]);
let batooro = new Tribes("Batooro", 2000000, ["Empaako naming system", "Kuhingira (Introduction ceremony)"], ["Obutooko (Banana bread)", "Empuuta (Groundnut soup)", "Enjogora (Beef stew)"], ["Lutoro", "English"]);
let bagisu = new Tribes("Bagisu", 1500000, ["Imbalu (Circumcision ceremony)", "Bamasaaba (Naming ceremony)"], ["Malewa (Bamboo shoot soup)", "Ekitobero (Sorghum bread)", "Esunyama (Sun-dried meat)"], ["Lugisu", "English"]);

// Output the properties and object for the Baganda tribe
console.log("...................Tribes..........................");
console.log("Name: " + baganda.name);
console.log("Population: " + baganda.population);
console.log("Cultural practices: " + baganda.culturalPractices);
console.log("Traditional foods: " + baganda.traditionalFoods);
console.log("Languages: " + baganda.languages);
console.log(".................................................");

// Class 4
let Sports = class {
constructor(name, equipment, playingArea, numOfPlayers, scoringSystem) {
this.Name = name;
this.Equipment_required = equipment;
this.Playing_area = playingArea;
this.Number_of_players = numOfPlayers;
this.Scoring_system = scoringSystem;
}
}

let football = new Sports("Football", ["Football", "Shin guards", "Football boots"], "Grass field", 11, "3 point for a win");
let basketball = new Sports("Basketball", ["Basketball", "Basketball shoes"], "Indoor court", 5, "2 or 3 points for a basket");
let cricket = new Sports("Cricket", ["Cricket ball", "Cricket bat", "Wicket"], "Grass field", 11, "Runs scored by batting team");
let rugby = new Sports("Rugby", ["Rugby ball", "Rugby boots"], "Grass field", 15, "Try (5 points) or penalty (3 points) scored by the team");
let athletics = new Sports("Athletics", ["Running shoes", "Starting blocks"], "Track and field", "Individual or team", "Fastest time, longest distance, or highest jump wins");

console.log("...................Sporting Activities..........................");
console.log("Name: " + football.name);
console.log("Equipment: " + football.Equipment_required);
console.log("Playing Area: " + football.Playing_area);
console.log("Number of players: " + football.Number_of_players);
console.log("Scoring System: " + football.Scoring_system);
console.log(".................................................");


//Class 5
//Teams class properties and objects
let Teams = class {
constructor(name, homeStadium, manager, captain, currentLeaguePosition) {
this.Name = name;
this.Home_stadium = homeStadium;
this.Manager = manager;
this.Captain = captain;
this.Current_league_position = currentLeaguePosition;
}
}

let manchesterCity = new Teams("Manchester City", "Etihad Stadium", "Pep Guardiola", "Guendogan", 2);
let manchesterUnited = new Teams("Manchester United", "Old Trafford", "Erik Ten hag", "Harry Maguire", 3);
let liverpool = new Teams("Liverpool", "Anfield", "Jürgen Klopp", "Jordan Henderson", 7);
let chelsea = new Teams("Chelsea", "Stamford Bridge", "Graham Potter", "Cesar Azpilicueta", 10);
let arsenal = new Teams("Arsenal", "Emirates Stadium", "Mikel Arteta", "Odegard", 1);

console.log("...................Football Teams..........................");
console.log("Club Name: " + manchesterCity.Name);
console.log("Studium: " + manchesterCity.Home_stadium);
console.log("Manager: " + manchesterCity.Manager);
console.log("Team Captain: " + manchesterCity.Captain);
console.log("Current League position: " + manchesterCity.Current_league_position);
console.log(".................................................");

//class 6

class Countries {
constructor(Name, CapitalCity, Population, OfficialLanguage, Currency) {
this.Name = Name;
this.CapitalCity = CapitalCity;
this.Population = Population;
this.OfficialLanguage = OfficialLanguage;
this.Currency = Currency;
}
}

let Uganda = new Countries("Uganda", "Kampala", 46520000, ["English", "Swahili"], "Ugandan shilling");

console.log(".......................Countries..........................");
console.log("Country: "+Uganda.Name); 
console.log("Capital City: "+Uganda.CapitalCity);
console.log("Population: "+Uganda.Population); 
console.log("Official Language: "+Uganda.OfficialLanguage);
console.log("Currency: "+Uganda.Currency); 
console.log(".................................................");

//class 7
class Mountains {
constructor(Name, Height, Location, ClimbingDifficulty, UniqueFeatures) {
this.Name = Name;
this.Height = Height;
this.Location = Location;
this.ClimbingDifficulty = ClimbingDifficulty;
this.UniqueFeatures = UniqueFeatures;
}
}

let RwenzoriMountains = new Mountains("Rwenzori Mountains", 5109, "Western Uganda", "Difficult", ["Snow-capped peaks", "Glaciers"]);

console.log(".....................Mountains............................");
console.log("Mountain: "+RwenzoriMountains.Name); 
console.log("Height: "+RwenzoriMountains.Height); 
console.log("Location: "+RwenzoriMountains.Location);
console.log("Climbing Difficulty: "+RwenzoriMountains.ClimbingDifficulty);
console.log("Unique Features: "+RwenzoriMountains.UniqueFeatures);
console.log(".................................................");

//Class 8
class Celebrities {
    constructor(name, occupation, nationality, awards, netWorth) {
    this.name = name;
    this.occupation = occupation;
    this.nationality = nationality;
    this.awards = awards;
    this.netWorth = netWorth;
    }
    }
    
    // Celebrities objects
    let oprahWinfrey = new Celebrities("Oprah Winfrey", "Talk show host", "American", ["Academy Honorary Award", "Primetime Emmy Award"], 2.7);
    let lupitaNyongo = new Celebrities("Lupita Nyong'o", "Actress", "Kenyan", ["Academy Award", "Tony Award"], 10);
    let davidBeckham = new Celebrities("David Beckham", "Former professional footballer", "English", ["UEFA Champions League", "La Liga"], 450);
    let beyonce = new Celebrities("Beyoncé", "Singer", "American", ["Grammy Awards", "MTV Video Music Award"], 500);
    let rogerFederer = new Celebrities("Roger Federer", "Tennis player", "Swiss", ["20 Grand Slam singles titles", "Olympic gold medal"], 450);
    
    console.log("...................Celebrities..............................");
    console.log("Name: "+beyonce.name); 
    console.log("Occupation: "+beyonce.occupation); 
    console.log("Nationality: "+beyonce.nationality);
    console.log("Awards : "+beyonce.awards); 
    console.log("Net Worth : "+beyonce.netWorth);

    console.log(".................................................");

    // Luxury class
    class Luxury {
    constructor(item, brand, price, material, uniqueFeatures) {
    this.item = item;
    this.brand = brand;
    this.price = price;
    this.material = material;
    this.uniqueFeatures = uniqueFeatures;
    }
    }
    
    // Luxury objects
    let rolexDaytona = new Luxury("Rolex Daytona", "Rolex", 14000, "Stainless steel", ["Chronograph function", "Tachymeter bezel"]);
    let louisVuittonKeepall = new Luxury("Louis Vuitton Keepall", "Louis Vuitton", 1600, "Canvas and leather", ["Removable strap", "Water-resistant lining"]);
    let hermesBirkin = new Luxury("Hermès Birkin", "Hermès", 12000, "Leather", ["Lock and key", "Gold-plated hardware"]);
    let lamborghiniAventador = new Luxury("Lamborghini Aventador", "Lamborghini", 417826, "Carbon fiber and aluminum", ["700 horsepower engine", "Scissor doors"]);
    let privateJetGulfstreamG650 = new Luxury("Private jet Gulfstream G650", "Gulfstream Aerospace", 70000000, "Aluminum alloy", ["Range of 7,000 nautical miles", "Advanced avionics"]);
    
    console.log("...................Luxury..............................");
    console.log("Item Name: "+privateJetGulfstreamG650.item); 
    console.log("Brand: "+privateJetGulfstreamG650.brand); 
    console.log("Price: "+privateJetGulfstreamG650.price);
    console.log("Material : "+privateJetGulfstreamG650.material); 
    console.log("Unique Features: "+privateJetGulfstreamG650.UniqueFeatures);
    console.log(".................................................");

    //class 10
    let Hobbies = class {
        constructor(name, description, requiredEquipment, skillLevel, famousPractitioners) {
        this.Name = name;
        this.Description = description;
        this.RequiredEquipment = requiredEquipment;
        this.SkillLevel = skillLevel;
        this.FamousPractitioners = famousPractitioners;
        }
        };
        
        let Photography = new Hobbies("Photography", "Capturing moments through images", ["Camera", "Lens"], "Beginner to Expert", ["Ansel Adams", "Diane Arbus"]);
        let Cooking = new Hobbies("Cooking", "Preparing and cooking food", ["Pots and pans", "Utensils"], "Beginner to Expert", ["Gordon Ramsay", "Julia Child"]);
        let Painting = new Hobbies("Painting", "Creating visual art through paints", ["Paints", "Canvas"], "Beginner to Expert", ["Vincent van Gogh", "Pablo Picasso"]);
        let Yoga = new Hobbies("Yoga", "Physical, mental, and spiritual practice", ["Yoga mat", "Blocks"], "Beginner to Expert", ["B.K.S. Iyengar", "Kino MacGregor"]);
        let Gaming = new Hobbies("Gaming", "Playing video games for fun or competition", ["Console", "Controller"], "Beginner to Expert", ["Ninja", "Faker"]);
        
        console.log(".................Hobbies................................");
        console.log("Hobby Name: "+Photography.Name); 
        console.log("Description: "+Photography.Description); 
        console.log("Required Equipment: "+Photography.RequiredEquipment);
        console.log("Skill Level : "+Photography.SkillLevel); 
        console.log("Famous Practitioner : "+Photography.FamousPractitioners);
        console.log(".................................................");
    
        
        
        
        






