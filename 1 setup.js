//1. Mongodb is a nosql which have flexible schema for example if we create documents(rows) with different key values
//then it won't affact to nosql for reference look for employees:manager example but in SQL it won't allow it 

//2.when we have to make naming analogy:
//database=database
//table:collection
//row:document
//column:field (Here columns really don't have that much importance)
//LHS is SQL:RHS is NOSQL

//3. We can use mongodb with javascript and many programming languages 
//Mongodb installation in windows is pretty normal than macbook just restart system after installation

//4. mongosh plays important role in starting mongod command so that we can write commands in terminal also

//CRUD operations: not only limited for nosql but overall like sql also overall in database
//Where C = Create , R = Read , U = Update , D = Delete
//show dbs = show databases
//REMEMBER : Mongodb's documentation is most imp while learning it
//Also we can run commands by mongosh in mongo app no need to open terminal always



//Show dbs : to show database
//use databases(here employee): to use database and access its collections


//Mongodb atlas useful so that we don't need to deploy our database as mongodb have it's own servers
//when we create our new cluster even it says your cluster is already ready then we should give it some time to settle (at least 10 mins) then start working on it
//use shared wala plan in mongodb since it's free
//we can update password from database access

//All the operators are listed in manual->reference->operator->query