//Here we will create out Location seeds for places where people can skate
const mongoose = require("mongoose")
const Location = require("../models/Location.model")

const MONGO_URI = "mongodb://localhost:27017/sakate"

const locations = [
    {
        title: "MACBA",
        altitude: 41.38328036004456,
        latitude: 2.1671844994462455,
        img: "https://images.unsplash.com/photo-1571424198243-fdd75b10ad6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
        description: "Barcelona Museum of Contemporary Art. Perfect spot for street skating. Loads of people. Friendly vibe"
    },
    {
        title: "Skatepark Mar Bella",
        altitude: 41.39940112143851,
        latitude: 2.2133850782644924,
        img: "https://images.unsplash.com/photo-1597019558926-3eef445fdf60?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
        description: "Beutiful skatepark by the beach in Bogatell. Three bowls. Usually crowded"
    }
]

const createSeeds = async () => {

    try {
        const connect = await mongoose.connect(MONGO_URI)
        console.log(`Connected to database: ${connect.connections[0].name}`)
        const deleteAll = await Location.deleteMany()
        console.log("Db clean")
        const dbLocations = await Location.create(locations)
        console.log(`${dbLocations.length} - locations created `)
        const dbClose = await mongoose.connection.close()
        console.log("Connection closed")

    } catch (err) {
        console.log(`Error creating the seeds: ${err}`)
    }

}

createSeeds()
