db.inventory.insertMany( [
   { item: "journal", qty: 25, size: { h: 14, w: 21, uom: "cm" }, status: "A" },
   { item: "notebook", qty: 50, size: { h: 8.5, w: 11, uom: "in" }, status: "P" },
   { item: "paper", qty: 100, size: { h: 8.5, w: 11, uom: "in" }, status: "D" },
   { item: "planner", qty: 75, size: { h: 22.85, w: 30, uom: "cm" }, status: "D" },
   { item: "postcard", qty: 45, size: { h: 10, w: 15.25, uom: "cm" }, status: "A" },
] );
//inserts 5 documents

db.inventory.find()
//Finds all the documents in given collections

db.inventory.find().limit(1)
//finds/returns only one ( by default first or based on filter) document in collection 
db.inventory.find().limit(1)
//returns only 2 documents

db.inventory.find().skip(1)
//it would skip first document and returns all documents which are remaining
db.inventory.find().skip(2) //first 2 documents 

db.inventory.find().sort({qty:1})
//here, qty is a field and all qtys will sorted in ascending order because it's '1'
//but for,
db.inventory.find().sort({qty:-1})
//It would be descending order
//Sort is used for pagination

//check out what is toggle word wrap

//Achieving pagination : the method of separating digital content into different pages on a website
// no=8 //page no.s
// db.blogs.find().skip(0).limit(8)
// pageno = 1 db.blogs.find().skip(0).limit(8)
// pageno = 2 db.blogs.find().skip(8).limit(8)