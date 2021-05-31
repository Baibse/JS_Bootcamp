class Animal {
    constructor(age, color, weight) {
        this.age = age
        this.color = color
        this.weight = weight
    
    }
    talk() {
        return "The animal makes some sounds..."
    }
}
class AnimalWithBreed extends Animal {
    constructor(age, color, weight, breed) {
        super(age, color, weight)
        this.breed = breed
    }
}


class Cat extends AnimalWithBreed {
    constructor(age, color, weight, breed, hasClaws) {
        super(age, color, weight, breed)
        this.hasClaws = hasClaws
       
    }

    talk(){
        return "Meow!"
    }
}
class Dog extends AnimalWithBreed {

    constructor(age, color, weight, breed) {
        super(age, color, weight)
    }

    talk() {
        return "Woof!"
    }

    rideOnHippo(hippo) {
        let hippoSound = hippo.talk()
        if (!hippo.isPeaceful) {
            hippo.isPeaceful = true
        }
        console.log("Hippo makes sound " + hippoSound)
        console.log("The dog makes sound " + this.talk())
        console.log("Everyone is happy everafter!")
    }
}


let catGarden = []
const MIN_AGE = 1
const MAX_AGE = 20

for (let i = 0; i <10; i++) {
    let randomAge = Math.floor(Math.random() * MAX_AGE) + 1
    let cat = new Cat(randomAge)
    catGarden.push(cat)
}
console.log(catGarden)

class Hippo extends Animal {
     constructor(age, color, weight, isPeaceful) {
        super(age, color, weight)
        this.isPeaceful = isPeaceful
    }

    talk() {
        return "Growwwwwllwlw!!"
    }
}

let hippoOne = new Hippo(false)
let dogOne = new Dog(15, "Chiwawa")
dogOne.rideOnHippo(hippoOne)

class Direction {
    constructor(dir) {
        this.dir = dir
    }
}


class CareGiver {
    constructor(name, age, yearsOfExperience) {
        this.name = name
        this.age = age
        this.yearsOfExperience = yearsOfExperience
    }

        introduce() {
        return `Hello! My name is ${this.name}, and I am ${this.age} years old.\n
                I have ${this.yearsOfExperience} years of experience.`
    }
}

class CareGiverInfo {

    constructor(personName, personAge, personYearOfExperience) {
        this.personName = personName
        this.personAge = personAge
        this.personYearOfExperience = personYearOfExperience
    }

}

class NationalPark {
    constructor(name) {
        this.southHabitat = []
        this.westHabitat = []
        this.northHabitat = []
        this.eastHabitat = []
        this.unassigneddAnimals = []

        this.availableCaregivers = []
        this.busyCaregivers = []
    }

    assignCaregiverToPark(careGiverInfo) {
        let caregiver = new CareGiver(careGiverInfo.personName, careGiverInfo.personAge, careGiverInfo.yearsOfExperience)
        this.availableCaregivers.push(caregiver)
    } 

    putAnimalToHabitat(dirObject, animal) {
        let dir = dirObject.dir.toUpperCase()

       let caregiver = this.availableCaregivers.pop()

       if(!caregiver) {
           console.log("No awailable caregivers found")
           return
       }
       this.busyCaregivers.push(caregiver)

       switch(dir) {
           case "NORTH":
               this.northHabitat.push(animal)
               break
            case "SOUTH":
                this.southHabitat.push(animal)
                break
            case "EAST":
                this.eastHabitat.push(animal)
                break
            case "WEST":
                this.westHabitat.push(animal)
                break
            default:
                this.unassigneddAnimals.push(animal)
       }
       console.log(`Animal of color ${animal.color} is put into ${dir} habitat!`)

    } 
       
}
let np = new NationalPark("Yellow Stone")
let caregiverInfoOne = new CareGiverInfo("Albert", 70, 33)
let caregiverInfoTwo = new CareGiverInfo("Hoffman", 66, 25)
np.assignCaregiverToPark(caregiverInfoOne)
np.assignCaregiverToPark(caregiverInfoTwo)

let dog = new Dog( 10, "brown", 20, "Bloodhound")
let cat = new Cat(5, "white", 10, "Siam", true)
let hippo = new Hippo(40, "gray", 15, true)

np.putAnimalToHabitat(new Direction("north"), dog)
np.putAnimalToHabitat(new Direction("north"), cat)
np.putAnimalToHabitat(new Direction("south"), hippo)

let canvas = document.getElementById("myCanvas")
let ctx = canvas.getContext("2d")

// const CENTER_POINT = {
//     X: canvas.width / 2,
//     Y: canvas.height / 2
// }

// let currentPos = CENTER_POINT
// ctx.beginPath()

// ctx.arc(CENTER_POINT.X, CENTER_POINT.Y, 100, 0, 2 * Math.PI, false)
// ctx.stroke()

class Circle {
    constructor(middleX, middleY, radius) {
        this.middleX = middleX
        this.middleY = middleY
        this.radius = radius
    }

    setColor(color) {
        this.color = color
    }

    draw() {
        ctx.beginPath()
        if (this.color) {
            ctx.fillStyle = "#"
        }
        ctx.arc(this.middleX, this.middleY, this.radius, 0, 2 * Math.PI, false)
        // ctx.fill()
        ctx.stroke()
    }
}
let circleOne = new Circle(100, 300, 50)
circleOne.draw()

for (let i = 0; i < 100; i++) {
    let randomX = Math.floor(Math.random()  * canvas.width)
    let randomY = Math.floor(Math.random()  * canvas.height)
    let randomRadius = Math.floor(Math.random()  * 100)
    let circle = new Circle(randomX, randomY, randomRadius)
    circle.draw()
}

// let step = 20
// for (let i = 0; i < 500; i++) {
//     let firstStep = step
//     ctx.moveTo(currentPos.X, currentPos.Y)
//     ctx.lineTo(currentPos.X, currentPos.Y - step)
//     ctx.lineTo(currentPos.X + step, currentPos.Y - step)
//     step += 10
//     ctx.lineTo(currentPos.X + firstStep, currentPos.Y - step + step)
//     ctx.lineTo(currentPos.X + firstStep - step, currentPos.Y)
//     step += 10
//     currentPos = { X: currentPos.X + firstStep - step, Y: currentPos.Y +step }
//     ctx.stroke()

// }
class MusicInstruments {
    constructor(size, color) {
        this.size = size
        this.color = color
    }
    play(){
        console.log("music plays")
    }
}
class Violin extends MusicInstruments {
    constructor(size, color, type) {
        super(size, color)
        this.type = type
    }
}


class Piano {
    constructor(size, color, type) {
        this.size = size
        this.color = color
        this.type = type   
    }
}
class Orchestra {
    constructor(name, musicians) {
    this.musicians = musicians
    this.name = name

    }
    addMusician(musician) {
        this.musicians.push(musician)
    }
    playTogether() {
        for(let musician of this.musicians) {
            this.musician.perform()
        }
    }
}
class Musician {
    constructor(instrument, name) {
        this.instrument = instrument
        this.name = name
    }
    perform() {
        this.instrument.play()
        console.log(`${this.name} has wonderfully performed to a big audience.`)
    }
}


class MusicalEnterprise {


    constructor(orcherstras) {
        this.orchestras = orcherstras
        this.salaries = new Map()

        this.wage = 1000
    }

    makePerform(nameOfOrchestra) {
        let orchestra = this.orchestras.get(nameOfOrchestra)
        orchestra.playTogether()

        let salary = this.salaries.get(orchestra.name)
        if (salary) {
            this.salaries.set(orchestra.name, salary + this.wage)
        } else {
            this.salaries.set(orchestra.name, this.wage)
        }
        console.log(`Wage of ${this.wage} was paid to orchestra ${orchestra.name}`)
        console.log(`Total salary for orchestra ${orchestra.name} is ${this.salaries.get(orchestra.name)}`)
    }
}




let firstPiano = new Piano("small", "white", "electronic")
let firstViolin = new Violin(3, "brown", "wood")

let musicianOne = new Musician(firstPiano, "Jack")
let musicianTwo = new Musician(firstViolin, "Greta")
 
let musicians = [musicianOne, musicianTwo]
let orchestra = new Orchestra("White Eagle Sounds", musicians)

orchestra.addMusician(new Musician(new Violin("medium", "green", "electronic"), "Paul"))

let orchestras = new Map()
orchestras.set(orchestra.name, orchestra)
let musicalEnterprise = new MusicalEnterprise(orchestras)
musicalEnterprise.makePerform("White Eagle Sounds")
musicalEnterprise.makePerform("White Eagle Sounds")
musicalEnterprise.makePerform("White Eagle Sounds")
musicalEnterprise.makePerform("White Eagle Sounds")



let myMap = new Map()
myMap.set("john.wick@gmail.com", "John Wick")
myMap.set("ulfrica.zerender@yandex.ru", "Ulfrica Zerender")

let johnWick = myMap.get(["john.wick@gmail.com"])
console.log(johnWick)

class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName
        this.lastName  = lastName
        this.age = age
    }
}

let newMap = new Map()
newMap.set(123, new Person("Geralt", "Rivyan", 40))
let person = newMap.get(123)
console.log(person)