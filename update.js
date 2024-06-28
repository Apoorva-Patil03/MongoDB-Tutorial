db.inventory.updateOne( //one field updates
   { item: "paper" },
   {
     $set: { "size.uom": "cm", status: "P" },
     $currentDate: { lastModified: true }
   }
)
//output
// {
//   acknowledged: true,
//   insertedId: null,
//   matchedCount: 1,
//   modifiedCount: 1,
//   upsertedCount: 0
// }
//current date also gets modified in it

db.inventory.find(
   { item: "paper" },
) //filter or parameter

db.inventory.findOne(
   { item: "paper" },
) 

db.inventory.updateMany( //many fields updation in single query as this following condition being true for many fields
   { "qty": { $lt: 50 } },
   {
     $set: { "size.uom": "in", status: "P" },
     $currentDate: { lastModified: true }
   }
)

db.collection.findOneAndReplace() 
//finds first one document and replace with it replace query

db.collection.replaceOne()
//we can totally replace one document by another based on the filter
//while update means just update some information
db.collection.updateOne()