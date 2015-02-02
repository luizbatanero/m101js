> db.posts.ensureIndex({ date : -1 })

> db.posts.ensureIndex({ permalink : 1 })

> db.posts.ensureIndex({ tags : 1 })

> db.posts.getIndexes()

[
    {
        "v": 1,
        "key": {
          "_id": 1
      },
      "name": "_id_",
      "ns": "blog.posts"
    },
    {
        "v": 1,
        "key": {
          "date": -1
      },
      "name": "date_-1",
      "ns": "blog.posts"
    },
    {
        "v": 1,
        "key": {
          "permalink": 1
      },
      "name": "permalink_1",
      "ns": "blog.posts"
    },
    {
        "v": 1,
        "key": {
          "tags": 1
      },
      "name": "tags_1",
      "ns": "blog.posts"
    }
]