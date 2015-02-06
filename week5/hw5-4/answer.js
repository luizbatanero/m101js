db.zips.aggregate([
    { $match :
        {
            'city' : { $regex : /^\d/ }
        }
    },
    { $group:
        {
            _id : null,
            population: { $sum: "$pop" }
        }
    }
])