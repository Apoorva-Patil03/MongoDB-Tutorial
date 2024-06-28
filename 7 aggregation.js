//we use aggregation so that we can pull documents from database
//we can perform operations on many documents on same time
//let's say each stage have one operation and we calculate some values from here as output and provide to next stage as input in this way we build the pipeline from consecutive stages


db.orders.aggregate( [

   // Stage 1: Filter pizza order documents by pizza size
   {
      $match: { size: "medium" } //only medium pizzas will go to next stage
   },

   // Stage 2: Group remaining documents by pizza name and calculate total quantity
   {
      $group: { _id: "$name", totalQuantity: { $sum: "$quantity" } } //output of filteration by first query given as output to 2nd query so that only 'quantities' of medium pizzas are given by 'name'
   }

] )

// The $match stage:
// Filters the pizza order documents to pizzas with a size of medium.
// Passes the remaining documents to the $group stage.

// The $group stage:
// Groups the remaining documents by pizza name.
// Uses $sum to calculate the total order quantity for each pizza name. The total is stored in the totalQuantity field returned by the aggregation pipeline.