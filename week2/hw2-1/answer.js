> db.data.find({ "Wind Direction" : { $gte : 180, $lte : 360 }}).sort({ Temperature : 1}).limit(1)

    {
        "_id": ObjectId("54babb08590d41102d64a1a9"),
        "Day": 24,
        "Time": 153,
        "State": "New Mexico",
        "Airport": "SAF",
        "Temperature": 0,
        "Humidity": 87,
        "Wind Speed": 5,
        "Wind Direction": 260,
        "Station Pressure": 23.88,
        "Sea Level Pressure": 274
    }