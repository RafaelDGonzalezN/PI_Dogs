const {Dog, Temperament} = require ("../db")
const axios = require ("axios")

const getTemperaments = async () =>{
    const allData = await axios("https://api.thedogapi.com/v1/breeds");

    let everyTemperament = allData.data.map(dog => dog.temperament ? dog.temperament : "No Info").map(dog => dog?.split(", "));
    let eachTemperament = [...new Set(everyTemperament.flat())];
    eachTemperament.forEach(temp => {
        if(temp) {
            Temperament.findOrCreate({where: {name: temp}})
        }
    })
    eachTemperament = await Temperament.findAll();
    return eachTemperament
}

module.exports = {
    getTemperaments
}