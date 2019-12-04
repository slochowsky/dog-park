const tank = {
    name: "Tank",
    weight: 70,
    breed: "doodle",
    vaccinated: false,
    age: 0.5
}

const fluffy = {
    name: "Fluffy",
    weight: 10,
    breed: "poodle",
    vaccinated: true,
    age: 5
}

const sniffy = {
    name: "Sniffy",
    weight: 35,
    breed: "poodle poodle",
    vaccinated: true,
    age: 9
}


const dogsCollection = []

dogsCollection.push(fluffy)
dogsCollection.push(tank)
dogsCollection.push(sniffy)

// if a dog weighs 30lbs or less that dog goes to the small dog park 
// if a dog weighs 31lbs or more that dog goes to the big dog park
// only vaccinated dogs are allowed in the park

const park = {
    largeArea: [],

    smallArea: [],

    mediumArea: [],

    name: "Franky Pierce Park"
}

document.querySelector(".parkName").innerHTML = park.name

const dogHTMLRep = (dog) => {
    return `<li>${dog.name}</li>`
}


for (const dogObject of dogsCollection) {
    
    const html = dogHTMLRep(dogObject)
// Only vaccinated dogs are allowed in the park, unless they
    // are less than a year old
    if (dogObject.vaccinated || dogObject.age < 1) {
        
        // Dogs less than, or equal to, 30 pounds go in the small area
        if (dogObject.weight <= 30) {
            park.smallArea.push(dogObject)
            document
            .querySelector(".smallDogs")
            .innerHTML += html
        } 
        else if (dogObject.weight >= 31 && dogObject.weight <= 50) {
            park.mediumArea.push(dogObject)
            document
            .querySelector(".mediumDogs")
            .innerHTML += html     
        }
        
        else {
            park.largeArea.push(dogObject)
            document
            .querySelector(".largeDogs")
            .innerHTML += html
        }
    }
    dogHTMLRep(dogObject)
        // Dogs greater than 30 pounds go in the large area
}

console.log(park)
