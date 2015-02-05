db.grades.aggregate([
    { $unwind : "$scores" },
    { $match:
        { "scores.type" : { $ne : "quiz" } }
    },
    { $group :
        {
            _id: { student_id : "$student_id", class_id: "$class_id" },
            average: { $avg : "$scores.score" }
        }
    },
    { $group :
        {
        _id: { class_id : "$_id.class_id" },
        class_avg : { $avg : "$average" }
        }
    },
    { $sort : { "class_avg" : -1 } },
    { $limit: 1 }
])