// 1

> db.messages.find({ 'headers.From': 'andrew.fastow@enron.com', 'headers.To': 'jeff.skilling@enron.com' }).count()


// 2

> db.messages.aggregate([{ $unwind: '$headers.To' }, { $group: { _id: { 'from' : '$headers.From', 'to' :'$headers.To' }, 'count': { $sum : 1 } } }, { $sort : { 'count' : 1 } } ])


// 3

> db.messages.update({ 'headers.Message-ID': '<8147308.1075851042335.JavaMail.evans@thyme>' }, { $addToSet: { 'headers.To': 'mrpotatohead@mongodb.com' } })


// 5

> a_1_b_1
> a_1_c_1
> c_1
> a_1_b_1_c_-1


// 6

> Remove all indexes from the collection, leaving only the index on _id in place
> Set w=0, j=0 on writes


// 8

> Maybe, it depends on whether Node 2 has processed the write


// 9

> patient_id


// 10

> The query did not utilize an index to figure out which documents match the find criteria.
> The query used an index for the sorting phase.
> The query performed a full collection scan