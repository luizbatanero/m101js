// hw6-1

> The minimum sensible number of voting nodes to a replica set is three.
> The oplog utilizes a capped collection.


// hw6-2

> w="majority", j=1


// hw6-3

> There must be a index on the collection that starts with the shard key.
> Mongo can not enforce unique indexes on a sharded collection other than the shard key itself.
> Any update that does not contain the shard key will be sent to all shards.


// hw6-4

> s1