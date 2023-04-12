//Here we will create out Location seeds for places where people can skate
const mongoose = require("mongoose")
const Location = require("../models/Location.model")

const MONGO_URI = "mongodb://localhost:27017/sakate"

const locations = [
    {
        title: "MACBA",
        country: "Spain",
        city: "Barcelona",
        address: "Plaça dels Àngels, 1, 08001 Barcelona",
        altitude: 41.38328036004456,
        latitude: 2.1671844994462455,
        img: "https://images.unsplash.com/photo-1571424198243-fdd75b10ad6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
        description: "Barcelona Museum of Contemporary Art. Perfect spot for street skating. Loads of people. Friendly vibe."
    },
    {
        title: "Skatepark Mar Bella",
        country: "Spain",
        city: "Barcelona",
        address: "Av. del Litoral, 106, 08005 Barcelona",
        altitude: 41.39940112143851,
        latitude: 2.2133850782644924,
        img: "https://images.unsplash.com/photo-1597019558926-3eef445fdf60?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
        description: "Beutiful skatepark by the beach in Bogatell. Three bowls. Usually crowded."
    },
    {
        title: "Picnic DIY Skatepark",
        country: "Spain",
        city: "Barcelona",
        address: "C/ de Carmen Amaya, 16, 08005 Barcelona",
        altitude: 41.3954468039673,
        latitude: 2.204465039672232,
        img: "https://images.unsplash.com/photo-1613077097723-3d818b96301c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=756&q=80",
        description: "Park build by locals. Big flat area perfect for beginners."
    },
    {
        title: "Skatepark Sants",
        country: "Spain",
        city: "Barcelona",
        address: "Plaça dels Països Catalans, 08014 Barcelona",
        altitude: 41.38162572474626,
        latitude: 2.1500191524872543,
        img: "https://images.unsplash.com/photo-1472893499692-edda378f4af7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHJvbGxlciUyMGJsYWRlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
        description: "Minimalistic skatepark (street) in front of train station."
    },
    {
        title: "Pump Track Raval",
        country: "Spain",
        city: "Barcelona",
        address: "Carrer de l'Abat Safont, 3, 08001 Barcelona",
        altitude: 41.377246326369864,
        latitude: 2.172335130480978,
        img: "https://images.unsplash.com/photo-1582486759052-fb6b5c90fa50?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2thdGVwYXJrfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
        description: "The one and only pupmtrack in the city."
    },
    {
        title: "Fòrum Skate Park",
        country: "Spain",
        city: "Barcelona",
        address: "08019 Barcelona",
        altitude: 41.409834482951986,
        latitude: 2.232208692210482,
        img: "https://images.unsplash.com/photo-1522602398-e378288fe36d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c2thdGVwYXJrfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60",
        description: "Small skatepark with ocean view. Good place to cruise around."
    },
    {
        title: "Ciutadella Skateplaça",
        country: "Spain",
        city: "Barcelona",
        address: "08003 Barcelona",
        altitude: 41.38779313661121,
        latitude: 2.1940891358680523,
        img: "https://media.istockphoto.com/id/1457553359/photo/cheerful-old-man-playing-with-a-skateboard-in-a-park.jpg?b=1&s=170667a&w=0&k=20&c=en1LEe5jYzFxdu8qS1QjT0i7YkXyvD1QPkqWGWE9op4=",
        description: "Legendary placa for street skating."
    },
    {
        title: "Olas",
        country: "Spain",
        city: "Barcelona",
        address: "Rambla de Prim, 135, 08020 Barcelona",
        altitude: 41.423623653168164,
        latitude: 2.2069484602391123,
        img: "https://media.istockphoto.com/id/914847274/photo/aerial-view-of-skatepark.jpg?b=1&s=170667a&w=0&k=20&c=QuZsSOi2OcLcgcR0LhGxVI6J3APfRVAiqkJMU8IsgMI=",
        description: "Small but perfect place to practice surf skating."
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
