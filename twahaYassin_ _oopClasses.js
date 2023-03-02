
// MOJA

class student{
    constructor(name, age, district, profession, hobbies) {
    this.name = name;
    this.age = age;
    this.district = district;
    this.profession = profession;
    this.hobbies = hobbies;
}
}

    var student1 =  new student("Yassin", "27", "Arua", "blogger", "swimming");
    var student2 =  new student("Amina", "28", "wakiso", "businesswomen", "posting memes");
    var student3 =  new student("Otim", "29", "Gulu", "web developer", "listening to music");
    var student4 =  new student("Agaba", "26", "Kabale", "freelancer", "blogging");
    var student5 =  new student("Isaac", "30", "Arua", "content creator", "reading journals");
    console.log(student2);

    // MBILI

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

        // TATU 
        class faciltator{
                constructor(name, courseunit, status, languagesspoken, residence){
                this.name = name
                this.courseunit = courseunit
                this.status = status
                this.languagesspoken = languagesspoken
                this.residence = residence
          }
        }
          const faciltator1 = new faciltator("Irene", "javascript", "married", "luganda", "muyenga");
          const faciltator2 = new faciltator("Samson", "html", "engaged", "itesot", "mbuya");
          const faciltator3 = new faciltator("Latim", "python", "single", "langi", "mengo");
          const faciltator4 = new faciltator("Dorothy", "css", "single", "acholi", "rubaga");
          const faciltator5 = new faciltator("Henry", "java", "complicated", "gishu", "bugolobi");
                console.log(faciltator1);

        //-NNE 
        class district{
             constructor(name, people, location, language, economicactivity) {
                    this.name = name;
                    this.people = people;
                    this.location = location;
                    this.language = language;
                    this.economicactivity = economicactivity;
             }
            }
                    let district1 = new faciltator("Mbale", "bugishu", "eastern", "gish", "crop farming");
                    let district2 = new district("Arua", "lugbara", "westnile", "lugbaratii", "business");
                    let district3 = new district("Gulu", "acholi", "northern", "acholii", "business");
                    let district4 = new district("Adjumani", "madi", "westnile", "madii", "fishing");
                    let district5 = new district("Kabarole", "batoro", "eastern", "mutoro", "tourism");
                    console.log(district5);
            
        //TANO 
                class series{
                    constructor(Title, filmstar, genre, seasons, year){
                        this.Title = Title;
                        this.filmstar = filmstar;
                        this.genre = genre;
                        this.seasons = seasons;
                        this.year = year;
                    }
                }
            var series1 = new series ("Into the badlands", "sunny", "adventure", 3, 2015,);
            var series2 = new series ("enemy within", "Will", "crime", 1, 2019,);
            var series3 = new series ("Fauda", "suliman", "crime", 4, 2015,);
            var series4 = new series ("See", "babavus", "adventure", "3", "2019");
            var series5 = new series ("The lastship", "chandler", "war", 5, 2014,);
            console.log(series5);
         

        //SITA 
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

        //SABA 
        
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

        //-NANE 
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
        //TISA 
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
        
        //KUMI
        
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