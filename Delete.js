db.collection.deleteMany()=db.collection.deleteMany({ })
//These two means same thing without parameters they can whole dataset in mongodb

//but if give parameters then statements only delete according to filter
db.inventory.insertMany( [
   { item: "journal", qty: 25, size: { h: 14, w: 21, uom: "cm" }, status: "A" },
   { item: "notebook", qty: 50, size: { h: 8.5, w: 11, uom: "in" }, status: "P" },
   { item: "paper", qty: 100, size: { h: 8.5, w: 11, uom: "in" }, status: "D" },
   { item: "planner", qty: 75, size: { h: 22.85, w: 30, uom: "cm" }, status: "D" },
   { item: "postcard", qty: 45, size: { h: 10, w: 15.25, uom: "cm" }, status: "A" },
] );

db.inventory.deleteMany({ status : "A" }) //deletes only which item have status 'A'

//There are two types in it delete and remove 
//delete returns boolean value(0 or 1)
//remove returns entire document
//But still please do verify
