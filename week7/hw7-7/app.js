var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/final', function(err, db) {
    if(err) throw err;

    db.collection('images').ensureIndex({ _id : 1 }, function(err) {
        if(err) throw err;
    });

    db.collection('albums').aggregate([
        { $project : { images : 1 } },
        { $unwind : '$images' },
        { $group: {
            _id: 'images',
            images: { $addToSet : '$images' }
        } },
        { $project : { _id : 0, images : 1 } }
    ], function(err, result) {
        var imagesOnAlbums = result[0].images;

        db.collection('images', {}, function(err, images) {
            if(err) throw err;

            images.remove({ _id : { $nin : imagesOnAlbums }}, function(err, result) {
                if(err) throw err;

                console.log(result);
                db.close();
            });
        });
    });
});