var MongoClient = require('mongodb').MongoClient;

var dropLowestHomework = function(arr) {
    var minIndex,
        minScore = 100;

    for (var i = 0, arrLenght = arr.length; i < arrLenght; i++) {

        if (arr[i]['type'] == 'homework' && arr[i]['score'] < minScore) {
            minScore = arr[i]['score'];
            minIndex = i;
        }

    }

    arr.splice(minIndex, 1);
    return arr;
};

MongoClient.connect('mongodb://localhost:27017/school', function(err, db) {
    if(err) throw err;

    db.collection('students').find({}).each(function(err, doc) {

        if(err) throw err;
        if(!doc) return db.close();

        var query  = { _id : doc._id },
            update = {
                $set : {
                    'scores' : dropLowestHomework(doc.scores)
                }
            };

        db.collection('students').update(query, update, function(err, updated) {
            if (err) throw err;
            console.log('Updated:' + updated);
        });
    });
});