db.inventory.insertOne({ //inventory is a collection
  item: 'canvas',
  qty: 100,
  tags: ['cotton'],
  size: { h: 28, w: 35.5, uom: 'cm' }
});

// {
//   acknowledged: true,
//   insertedId: ObjectId("64d6fe17bb5b8c0fe45e269e")
// }
//when run in mongodb shell it returns id and validation of it's insertion
//as many times even same query but each query request will have diffrent id

db.inventory.insertMany(
[{ //inventory is a collection
  item: 'canvas',
  qty: 100,
  tags: ['cotton'],
  size: { h: 28, w: 35.5, uom: 'cm' }
},
{ //inventory is a collection
  item: 'canvas',
  qty: 90,
  tags: ['copper'],
  size: { h: 28, w: 35, uom: 'cm' }
},{ //inventory is a collection
  item: 'canvas',
  qty: 50,
  tags: ['zinc'],
  size: { h: 28, w: 5.5, uom: 'cm' }
},{ //inventory is a collection
  item: 'canvas',
  qty: 70,
  tags: ['wool'],
  size: { h: 28, w: 35.5, uom: 'cm' }
}]
)
//we can use this while using connectors to connect with javascript (using by mongo)
db.collection.find({qty:70})