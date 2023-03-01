class Student{
    constructor( name, age, stream, religion, tribe){
        this.name = name
        this.age = age
        this.stream = stream
        this.religion = religion
        this.tribe = tribe
    }  
}
let student1 = new Student('Victor','19','physical','Catholic','Itesot')
let student2 = new Student('Jude','19','physical','Catholic','Lugbara')
let student3 = new Student('Charm','20','Biological','Catholic','Muganda')
let student4 = new Student('Isaac','20','Arts','Catholic','Madi')
let student5 = new Student('Joshua','21','physical','Catholic','Acholi')

class Teacher{ 
    constructor(name, age, subject, religion, tribe){
        this.name = name
        this.age = age
        this.subject = subject
        this.religion = religion
        this.tribe = tribe
    }
}
let teacher1 = new Teacher('Brian','35','Math','Moslem','Muganda')
let teacher2 = new Teacher('Maria','34','English','Anglican','Itesot')
let teacher3 = new Teacher('Josephine','45','Physics','Catholic','Munyarwanda')
let teacher4 = new Teacher('Mark','27','Chemistry','Moslem','Langi')
let teacher5 = new Teacher('Joy','36','Literature','Moslem','Acholi')

class Supportstaff{
    constructor(name, age, department, gender, religion){
        this.name = name
        this.age = age
        this.department = department
        this.gender = gender
        this.religion = religion
    }
}
let support1 = new Supportstaff('Johnah','25','kitchen','M','Catholic')
let support2 = new Supportstaff('Ephraim','25','cleaning','M','moslem')
let support3 = new Supportstaff('Lucy','30','kitchen','F','Anglican')
let support4 = new Supportstaff('Mary','34','kitchen','F','Moslem')
let support5 = new Supportstaff('David','39','cleaning','M','Anglican')


class Doctor {
    constructor(name, age, gender, religion, hospital){
        this.name = name
        this.age = age
        this.gender = gender
        this.religion = religion
        this.hospital = hospital
    }
}
let doc1 = new Doctor('Junior','40','F','Catholic','Mulago')
let doc2 = new Doctor('Adrina','26','F','Moslem','Kitante')
let doc3 = new Doctor('Amanya','45','M','Anglican','Mulago')
let doc4 = new Doctor('William','35','M','Catholic','Nsambya')
let doc5 = new Doctor('Jerome','64','M','Moslem','Nakaseero')


class Nurse {
    constructor(name, age, gender,religion, hospital){
        this.name = name
        this.age = age
        this.gender = gender
        this.religion = religion
        this.hospital = hospital
    }
}
let nurse1 = new Nurse('James','56','M','Catholic','mulago')
let nurse2 = new Nurse('Jemimah','33','F','Moslem','Nsambya')
let nurse3 = new Nurse('Racheal','54','F','Catholic','Nakaseero')
let nurse4 = new Nurse('Asio','45','F','Anglican','Mulago')
let nurse5 = new Nurse('Ashepet','56','F','Moslem','Nsambya')

class Actor {
    constructor(name, age, gender, gigs, company){
        this.name = name
        this.age = age
        this.gender = gender
        this.gigs = gigs
        this.company = company
    }
}
let actor1 = new Actor('Tom','63','M','26','Paramount')
let actor2 = new Actor('Johhny','62','M','56','Lionsgate')
let actor3 = new Actor('Vanessa','42','F','32','Nteflix')
let actor4 = new Actor('Jennifer','65','F','43','Warnerbros')
let actor5 = new Actor('Matthew','67','M','45','Warnerbros')

class Music {
    constructor(artist, album, genre, streams, listeners){
        this.artist = artist
        this.album = album
        this.genre = genre
        this.streams = streams
        this.listeners = listeners
    }
}
let song1 = new Music('Drake','CLB','Rap','6000','4300')
let song2 = new Music('Chris','Indigo','RnB','90000','6000')
let song3 = new Music('NF','alone','Rap','67999','5400')
let song4 = new Music('J Cole','A lot','Rap','87000','5600')
let song5 = new Music('Joyner','ADHD','Indie','74499','46899')

class Movie {
    constructor(director, genre, cast, producer, streamingplatform){
        this.director = director
        this.genre = genre
        this.cast = cast
        this.producer = producer
        this.streamingplatform = streamingplatform

    }
}
let movie1 = new Movie('Martin','Crime','Leonardo','Jonah','HBO')
let movie2 = new Movie('Guy','Action','Jason','James','Netflix')
let movie3 = new Movie('Mel','Drama','Steve','Kunal','HBO')
let movie4 = new Movie('Russo','Action','Ryan','Chris','Paramount')
let movie5 = new Movie('Anthony','Action','Evans','Robert','Disney')

class Sport {
    constructor(location, type, players, number, club){
        this.location = location
        this.type = type
        this.players = players
        this.number = number
        this.club = club
    }
}
let sport1 = new Sport('manchester','football','11','22','United')
let sport2 = new Sport('liverpool','football','11','22','liverpool')
let sport3 = new Sport('london','rugby','12','24','london')
let sport4 = new Sport('barcelona','golf','1','5','Wolves')
let sport5 = new Sport('Madrid','football','11','22','Real')

class Hobbie {
    constructor(type, location, number, club, regularity){
        this.type = type
        this.location = location
        this.number = number
        this.club = club
        this.regularity = regularity

    }
}
let hobbie1 = new Hobbie('football','kampala','22','256berm','weekly')
let hobbie2 = new Hobbie('swimming','kampala','3','CountryResort','weekly')
let hobbie3 = new Hobbie('gaming','Luzira','6','Fifa','monthly')
let hobbie4 = new Hobbie('gaming','kawanda','2','PUBG','daily')
let hobbie = new Hobbie('football','wakiso','88','soccerfest','annualy')