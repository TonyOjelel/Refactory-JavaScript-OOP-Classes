class Shoe{
    
     constructor(brand,size,colour,material,year) {
        this.brand=brand
        this.size=size
        this.colour=colour
        this.material=material
        this.year=year
    }
}
let shoe2 = new Shoe('timberland', 36,'black','Leather',2023)
let shoe3 = new Shoe('Loffers' ,24 ,"blue","leather",2020)
let shoe4 = new Shoe("Kneels", 27,'black','rubber',2022)
let shoe5 = new Shoe('marculero',20,'pink','neon',2022)
let shoe6 = new Shoe('sketchers',38,'white','leather',2020)

console.log(shoe2,shoe3,shoe4,shoe5,shoe6)


class User{
    constructor(name,email,residence,age,sex){
         this.name=name
         this.email=email
         this.residence=residence
         this.age=age
         this.sex=sex
    }
}
let user1=new User('edwin','rugoogamuedwin5@gmail.com','kampala',23,'male')
let user2=new User('Edward','edward@gmail.com ','seta',13,'male')
let user3=new User('Bella','bella@gmail.com','gayaza',24,'female')
let user4=new User('Gilbert','gilbert@gmail.com','kyetume',29,'male')
let user5 = new User('Docus','docus@gmail.com','kyankima',48,'female')

console.log(user1,user2,user3,user4,user5)



class Car{
    constructor(name,colour,space,engine,year){
       this.name=name
       this.colour=colour
       this.space=space
       this.engine=engine
       this.year=year
    }
}

 let car1=new Car('Benz','Black',5,'V8',2012)
 let car2 = new Car("wish",'white',5,"c5",2020)
 let car3 = new Car ('chevlorate','white',6,'c5',2019)
 let car4 = new Car ('krugger','black',5,'c5',2019)
 let car5=  new Car ('landcruser','black',6,'v8',2019)


 class Phone{
    constructor(name,brand,Ram,colour,Rom){
         this.name=name
         this.brand=brand
         this.Ram=Ram
         this.colour=colour
         this.Rom
    }
 }
 let phone1=new Phone('iphone12','Apple','12gb','black','125gb')
 let phone2= new Phone('Readme','android','4gb','blue','100GB')
 let phone3= new Phone('sumsange','android','8gb','white','80gb')
 let phone4=new Phone('iphonex','Apple','8bg','black','250gb')
 let phone5= new Phone('infinix hot 6','Android','4bg','white','60gb')


 class Food{
    constructor(name,type,amount,size,customer){
      this.name=name
      this.type=type
      this.amount=amount
      this.size=size
      this.customer=cutomer
    }
 }
 let food1=new Food('cornflakes','cereal',50,000,'2 packs','customer 2')
 let food2=new  Food('posho','carbohydrates',40,000,'1 sack','customer1')
 let food3=new Food('meat','protein',60,000,'2 kilograms','customer3')
 let food4=new Food('eggs','protein',12,000,'1 tray','customer5')
 let food5=new Food('irish','carbohydrates',120,000,'1 sack','customer4')