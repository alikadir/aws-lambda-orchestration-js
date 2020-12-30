const aws = require("aws-sdk");

const lambda = new aws.Lambda({ region: "eu-central-1" });

/*
const event = {
  key1: "value1",
  key2: "value2",
  key3: "value3"
};
*/

const event = "hi i am string input";

lambda
  .invoke({ FunctionName: "first-csharp-function", Payload: JSON.stringify(event, null, 2) })
  .promise()
  .then(result => {
    console.log(result);
    /*
      {
        StatusCode: 200,
        ExecutedVersion: '$LATEST',
        Payload: '"HI I AM STRING INPUT"'
      }
    */
  })
  .catch(err => {
    console.log(err);
    /*
     {
       message: "Function not found: arn:aws:lambda:eu-central-1:445042884575:function:first-csharp-functionx",
       code: "ResourceNotFoundException",
       time: "2020-01-10T17:46:54.096Z",
       requestId: "5502ba73-f440-4715-90db-59932ec33f50",
       statusCode: 404,
       retryable: false,
       retryDelay: 7.029614408660723
     }
   */
  });

// other parameters of json stringify are very important
//JSON.stringify(event, null, 2);

