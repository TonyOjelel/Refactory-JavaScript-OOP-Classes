class CarAbm{
    constructor(carName,manufacture,numberPlat,deptment,roundsAday){
        this.name=carName;
        this.manufacturer=manufacture;
        this.numberPlat=numberPlat;
        this.deptment=deptment;
        this.roundsAday=roundsAday
    }
}
//obj.const name = new type(arguments);
const car1 = new CarAbm("van","toyota","UBA123V","SURGARY","5");
const car2 = new CarAbm("Van","toyota","UBA124v","RESEACRH","9");
const car3 = new CarAbm("van","toyota","UBA125v","IMMERGANCY","4");
const car4 = new CarAbm("van","toyota","UBA126v","ANTENINTO","2");
const car5 = new CarAbm("van","toyota","UBA127v","SURGARY","23");


class User{
    constructor(name,deptment,role,task,complete){
        this.name=name;
        this.deptment=deptment;
        this.role=role;
        this.task=task;
        this.complete=complete
    }
}
//obj.const name = new type(arguments);
const usr1 = new User("KALUNGI RASULI","SURGARY","CHIEF SURGON","MONITOR AND RESEARCH","THE HUMAN BRAIN","THE NUERO NETWORK");
const usr2 = new User("KAMALU KASULI","SURGARY","TEAM LEADER","MONITOR AND RESEARCH","THE HUMAN BRAIN","THE NUERO NETWORK");
const usr3 = new User("RITAH AMER","SURGARY","SURGON","MONITOR AND RESEARCH","THE HUMAN BRAIN","THE NUERO NETWORK");
const usr4 = new User("MUGUZU GEOGE","SURGARY","INTERN","MONITOR AND RESEARCH","THE HUMAN BRAIN","THE NUERO NETWORK");
const usr5 = new User("ABUDUKL BAKAR","SURGARY","CHIEF SURGON","MONITOR AND RESEARCH","THE HUMAN BRAIN","THE NUERO NETWORK");

class School{
    constructor(institute,course,level,grade,year){
this.institute=institute;
this.course=course;
this.level=level;
this.grade=grade;
this.year=year;
    }
}
//obj.const name = new type(arguments);
const sch1 = new School("uict","information tech for bussiness","diplomah","1fst class","2022");
const sch2 = new School("muk","information tech for bussiness","degree","2snd class","2022");
const sch3 = new School("iuiu","information tech for bussiness","masters","1fst class","2022");
const sch4 = new School("mubs","information tech for bussiness","phd","1fst class","2022");
const sch5 = new School("mist","information tech for bussiness","degree","1fst class","2022");

class Hospital{
    constructor(hospNmae,loction,brachNo,wards,manager){
this.hospNmae=hospNmae;
this.loction=loction;
this.brachNo=brachNo;
this.wards=wards;
this.manager=manager;

    }
}
//obj.const name = new type(arguments);
const hosp1 = new Hospital("mulaho","GULU","A2-234","256","KASIULI MICHEAL");
const hosp2 = new Hospital("mulaho","MBARARA","A2-56","567","NAKABUYE NAIMA");
const hosp3 = new Hospital("mulaho","MASAKA","A2-546","267","KALUNGI RASULI");
const hosp4 = new Hospital("mulaho","MUKONO","A2-57","257","SALUWAH ABUDUL ABAIST");
const hops5 = new Hospital("mulaho","kampala","A2-34","2567","AYO PETER");

class Hub{
    constructor(labs,labIndicator,NoOfAttendents,purpose,RoundsAday){
this.labs=labs;
this.labIndicator=labIndicator;
this.NoOfAttendents=NoOfAttendents;
this.purpose=purpose;
this.RoundsAday=RoundsAday
    }
}
//obj.const name = new type(arguments);
const hub1 = new Hub("245","24ll234ba-index","33","brain","27");
const hub2 = new Hub("245","29ll234ba-index","33","brain","2");
const hub3 = new Hub("245","26ll234ba-index","33","brain","3");
const hub4 = new Hub("245","26ll234ba-index","33","brain","3");
const hub5 = new Hub("245","26ll234ba-index","33","brain","23");

class Cousre{
    constructor(CousreId,name,department,term,attendees){
this.CousreId=CousreId;
this.name=name;
this.department=department;
this.term=term;
this.attendees=attendees;
    }
}
//obj.const name = new type(arguments);
const bagCos1 = new Cousre("377833-Q","brain anatomy","surgary","3year","4");
const bagCos2 = new Cousre("377833-F","brain anatomy","surgary","3year","0");
const bagCos3 = new Cousre("377833-T","brain anatomy","surgary","3year","76");
const bagCos4 = new Cousre("377833-b","brain anatomy","surgary","3year","1");
const bagCos5 = new Cousre("377833-b","brain anatomy","surgary","3year","67");

class Expertise {
    constructor(field,period,refferance,team,task){
this.field=field;
this. period=period;
this.refferance=refferance;
this.team=team;
this.task=task;
    }
}
//obj.const name = new type(arguments);
const expi1 = new Expertise("surgary","4year","mulango","nureo system","10");
const expi2 = new Expertise("surgary","4year","mulango","nureo system","10");
const expi3 = new Expertise("surgary","4year","mulango","nureo system","10");
const expi4 = new Expertise("surgary","4year","mulango","nureo system","10");
const expi5 = new Expertise("surgary","4year","mulango","nureo system","10");


class Letter{
    constructor(emailingAddress,reciever,subject,period,weight){
        this.emailingAddress=emailingAddress;
        this.reciever=reciever;
        this.subject=subject;
        this.period=period;
        this.weight=weight;

    }
}
//obj.const name = new type(arguments);
const doctor1 = new Letter("DR.kalungi rasuli","mulango director","anatomys fund",`${{date}},${{time}}`,"567 pages");
const doctor2 = new Letter("DR.NASSALI JULLIET","mulango director","anatomys fund",`${{date}},${{time}}`,"567 pages");
const doctor3 = new Letter("DR.MUKOMO rasuli","mulango director","anatomys fund",`${{date}},${{time}}`,"567 pages");
const doctor4 = new Letter("DR.KASULE KAMALU rasuli","mulango director","anatomys fund",`${{date}},${{time}}`,"567 pages");
const doctor5 = new Letter("DR.SALUWAH MUKAMA","mulango director","anatomys fund",`${{date}},${{time}}`,"567 pages");

class Room{
    constructor(floor,attendent,purpose,level,roundAmonth){
this.floor=floor;
this.attendent=attendent;
this.purpose=purpose;
this.level=level;
this.roundAmonth=roundAmonth;
    }
}
//obj.const name = new type(arguments);
const room1 = new Room("1","JUMBA Amare","waiting","private","3");
const room2 = new Room("1","RAHAM Amari","waiting","private","3");
const room3 = new Room("1","RITHA Amaro","waiting","private","3");
const room4 = new Room("1","JUMA Amara","waiting","private","3");
const room5 = new Room("1","kasule Amar","waiting","private","3");

class DeviceInRoom{
    constructor(type,manufactureModle,pursopeInRoom,status,number){

    }
}
//obj.const name = new type(arguments);
const room1Device = new DeviceInRoom("electical","hp-354-2022","compution","2years old","12");
const room2Device = new DeviceInRoom("electical","hp-354-2022","compution","2years old","12");
const room3Device = new DeviceInRoom("electical","hp-354-2022","compution","2years old","12");
const room4Device = new DeviceInRoom("electical","hp-354-2022","compution","2years old","12");
const room5Device= new  DeviceInRoom("electical","hp-354-2022","compution","2years old","12");