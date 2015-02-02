var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/weather', function(err, db) {
    if(err) throw err;

    var sort  = { 'State': 1, 'Temperature': -1 };

    db.collection('data').find({}).sort(sort).toArray(function(err, docs) {
        if(err) throw err;

        var newState = '',
            query    = {};

        docs.map(function(doc) {
            if(!doc) db.close();

            if (newState != doc['State']) {
                var operator = { '$set': { 'month_high' : true } };

                newState = doc['State'];
                query    = { '_id' : doc['_id'] };

                db.collection('data').update(query, operator, function(err, updated) {
                    if (err) throw err;
                    return;
                });
            }
        });
    });
});