const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");

const url = "mongodb://localhost:27017";

const dbName = "fruitsDB";

const client = new MongoClient(url, { useUnifiedTopology: true });

client.connect(function (err) {
  assert.equal(null, err);
  console.log("Connected Successfully to the Server");

  const db = client.db(dbName);

  client.close();
});

findDocuments(db, function(){
  client.close();
}

  collection.insertMany(
    [
      {
        name: apple,
        score: 7,
        review: "good fruit!",
      },
      {
        name: mango,
        score: 9,
        review: "great fruit!",
      },
      {
        name: durian,
        score: 10,
        review: "best fruit!",
      },
    ],
    function (err, result) {
      assert.equal(err, null);
      assert.equal(3, result.result.n);
      assert.equal(3, result.ops.length);
      console.log("Inserted 3 documents into the collection");
      callbacks(result);
    }
  );
};

const findDocuments = function(db, callback){
  const collection = db.collection('fruits');
  collection.find({}).toArray(function(err, fruits) {
    assert.equal(err, null);
    console.log('Found the following records')
    console.log(fruits);
    callback(fruits);
  })
}