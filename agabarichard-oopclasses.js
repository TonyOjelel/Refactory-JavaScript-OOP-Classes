// FIRST

class student{
    constructor(name, age, district, profession, hobbies) {
    this.name = name;
    this.age = age;
    this.district = district;
    this.profession = profession;
    this.hobbies = hobbies;
}
}

    var student1 =  new student("Yowas", "27", "kamwenge", "Engineer", "swimming");
    var student2 =  new student("Amina", "28", "wakiso", "businesswomen", "posting memes");
    var student3 =  new student("Otim", "29", "Gulu", "web developer", "listening to music");
    var student4 =  new student("Agaba", "45", "Ibanda", "freelancer", "making more friends");
    var student5 =  new student("Isaac", "30", "Arua", "content creator", "reading journals");
    console.log(student2);

    // SECOND

class Chair {
    constructor(color, seatHeight, backSupport, headSupport, armRests,){
        this.color = color;
        this.seatHeight = seatHeight;
        this.backSupport = backSupport;
        this.headSupport = headSupport;
        this.armRests = armRests;
       }
}
        let Chair1 =  new Chair("Blue","25 inch", "yes", "no", "true");
        let Chair2 =  new Chair("Black","30 inch", "no", "yes", "no");
        let Chair3 =  new Chair("orange","15 inch", "false", "true", "true");
        let Chair4 =  new Chair("white","40 inch", "no", "no", "no");
        let Chair5 =  new Chair("Maroon","35 inch", "true", "true", "no");
        console.log(Chair5);

        // THIRD
        class teacher{
            constructor(name, courseunit, status, languagesspoken, residence){
                this.name = name
                this.courseunit = courseunit
                this.status = status
                this.languagesspoken = languagesspoken
                this.residence = residence
          }
        }
          const teacher1 = new teacher("Irene", "javascript", "married", "luganda", "muyenga");
          const teacher2 = new teacher("Samson", "html", "engaged", "itesot", "mbuya");
          const teacher3 = new teacher("Latim", "python", "single", "langi", "mengo");
          const teacher4 = new teacher("Dorothy", "css", "single", "acholi", "rubaga");
          const teacher5 = new teacher("Henry", "java", "complicated", "gishu", "bugolobi");
                console.log(teacher1);

        //-FOURTH
        class district{
            constructor(name, people, location, language, economicactivity) {
                    this.name = name;
                    this.people = people;
                    this.location = location;
                    this.language = language;
                    this.economicactivity = economicactivity;
             }
            }
                    let district1 = new faciltator("Ibanda", "banyankole", "westren", "gish", "coffee farming");
                    let district2 = new district("Arua", "lugbara", "westnile", "lugbaratii", "business");
                    let district3 = new district("Gulu", "acholi", "northern", "acholii", "business");
                    let district4 = new district("Adjumani", "madi", "westnile", "madii", "fishing");
                    let district5 = new district("Kabarole", "batoro", "eastern", "mutoro", "tourism");
                    console.log(district5);
            
        //FIFITH
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
        console.log(shoe5);
        //SIXTH
        class bank{
            constructor(name, branch, account, currency, year){
                this.name = name;
                this.branch = branch;
                this.currency = currency;
                this.account = account;
                this.year = year;
            }
        }
    let bank1 = new bank("centenary", "arua", "fixed", "ugx", "2019");
    let bank2 = new bank("stanbic", "kampala", "student", "ugx", "2020");
    let bank3 = new bank("equity", "mubende", "savings", "euro", "2021");
    let bank4 = new bank("DTB", "Lira", "auto savings", "ugx", "2015");
    let bank5 = new bank("KCB", "Kenya", "savings", "USD", "2023");
    console.log(bank3);

        //SEVENITH 
        
        class crop{
            constructor(name, month, season, type, consumptionseason){
                this.name = name;
                this.month = month;
                this.season = season;
                this.type = type;
                this.consumptionseason = consumptionseason;
            }
        }
        const crop1 = new crop("maize", "april", "wet season", "food crop", "once a season");
        const crop2 = new crop("cotton", "ocotober", "wet season", "cash crop", "depends");
        const crop3 = new crop("Gnuts", "may", "wet season", "food crop", "twice a season");
        const crop4 = new crop("soyabean", "july", "wet season", "food crop", "once a season");
        const crop5 = new crop("tobbaco", "june", "wet season", "cash crop", "once a season");
        console.log(crop4);

        //-EIGTH
        class computer{
            constructor(generation, year, hardware, programminglanguage, example ){
                this.generation = generation;
                this.year = year;
                this.hardware = hardware;
                this.programminglanguage = programminglanguage;
                this.example = example;
            }
        }

        var computer1 = new computer("first generation", "1940", "vaccum tube", "machine language", "ENIAC");  
        var computer2 = new computer("second generation", "1950", "Transistor", "assembly language", "IBM 7090");
        var computer3 = new computer("third generation", "1960", "Integrated circuit", "high level language", "IBM 360");
        var computer4 = new computer("fourth generation", "1970", "Microprocessor based", "java", "IBM PC");
        var computer5 = new computer("fifth generation", "Present", "Artificial intelligence based", "javascript", "laptops");
        console.log(computer4);
        //NINTH 
                   class family{
                   constructor(name, sex, religion, status, age){
                    this.name = name;
                    this.sex = sex;
                    this.religion = religion;
                    this.status = status;
                    this.age = age;
                   }
                }
                let family1 = new family("Twaha", "m", "muslim", "single", "26");
                let family2 = new family("John", "m", "christin", "married", "38");
                let family3 = new family("Majid", "m", "muslim", "married", "29");
                let family4 = new family("Patricia", "f", "other", "divorced", "41");
                let family5 = new family("Sarah", "f", "christian", "engaged", "28");
                console.log(family4);
        
        //TENTH
        
        class jerrican{
            constructor(size, liter, kg, status, expirydate){
             this.size = size;
             this.liter = liter;
             this.kg = kg;
             this.status = status;
             this.expirydate = expirydate;
            }
         }

         let jerrican1 = new jerrican("big", "20", "17", "in use", "2023");
         let jerrican2 = new jerrican("medium", "10", "9.8", "out of use", "2019");
         let jerrican3 = new jerrican("small", "5", "6", "recycled", "2021");
         let jerrican4 = new jerrican("moderate", "17", "15", "in use", "2023");
         let jerrican5 = new jerrican("small", "3", "1.5", "used", "2022");
         console.log(jerrican3);