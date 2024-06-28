db.inventory.find() //fetch all documents
db.inventory.find({}) //fetch all documents
db.inventory.find({qty:70})//fetch all documents

db.inventory.insertMany([
   { item: "journal", qty: 25, size: { h: 14, w: 21, uom: "cm" }, status: "A" },
   { item: "notebook", qty: 50, size: { h: 8.5, w: 11, uom: "in" }, status: "A" },
   { item: "paper", qty: 100, size: { h: 8.5, w: 11, uom: "in" }, status: "D" },
   { item: "planner", qty: 75, size: { h: 22.85, w: 30, uom: "cm" }, status: "D" },
   { item: "postcard", qty: 45, size: { h: 10, w: 15.25, uom: "cm" }, status: "A" }
]);

db.inventory.find( { status: "D" } )
db.inventory.find({status:{$in : ["A", "D"]}})

//AND Operations: Doesn't need to mention AND word explicitly as they are by default parameters to carry out commands
db.inventory.find( { status: "A", qty: { $lt: 30 } } )

//OR operations do require mentioning them
db.inventory.find( { $or: [ { status: "A" }, { qty: { $lt: 30 } } ] } ) //lt:less than 30

//find only one query don't return whole array of all satisfying IDs
db.inventory.findOne({status:{$in : ["A", "D"]}})
