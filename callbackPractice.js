/* In this repo your job is to write functions to make each function call work properly.
Below is a sample problem 

  //code here for sayHi

   sayHi('Hi Katie', function(thingToSay){
      alert(thingToSay);
   });
   

and what you should write is the favNum function that makes the code above work, 
    
    
   var sayHi = function(str, cb){
    cb(str);
   }

   sayHi('Hi Katie', function(thingToSay){
      alert(thingToSay); //should alert ('Hi Katie')'
   });
    
    
*/

var first = function(myArray, cb) {
    cb(myArray[0]);
}


  //Code Here for first
  
var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
first(names, function(firstName){
  console.log('The first name in names is ', firstName)
});



/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */


var last = function(myArray, cb) {
    cb(myArray[myArray.length - 1]);
}


  //Code Here for last

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
last(names, function(lastName){
  console.log('The last name in names is ', lastName);
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */


var multiply = function(firstNum, secondNum, cb) {
  cb(firstNum * secondNum);
}



  //Code Here for multiply

multiply(4, 3, function(answer){
  console.log('The answer is ', answer); //should console.log 12
})





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */


var contains = function(myArray, str, cb) {
  for (var i = 0; i < myArray.length; i++) {
    if (myArray[i] === str) {
      return cb(true);
    }
  };
  cb(false)
};


  //Code Here for contains

var names = ['Tyler', 'Cahlan', 'Ryan', 'Tyler', 'Blaine', 'Cahlan'];
contains(names, 'Colt', function(yes){
  if(yes === true){
    console.log('Colt is in the array');
  } else {
    console.log('Colt is not in the array');
  }
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */


var uniq = function(myArray, cb) {
  var duplicateArray = [];
  for (var i = 0; i < myArray.length; i++) {
    for (var j = (i + 1); j < myArray.length; j++) {
      if (myArray[i] === myArray[j]) {
        var match = myArray.splice(j,1);
        duplicateArray.push(match);
      }
    }
  }
  return cb(myArray);
};


// var uniq = function(arr, callback) {
//   var newArr =[];
//   var flag;
//   for(var i = 0; i < arr.length; i++) {
//       for(var j = 0; j < newArr.length; j++) {
//          if (arr[i] == newArr[j]) {
//               flag = true;
//               break;
//          }
//       }
//       if (flag == false) {
//         newArr.push(arr[i]);
//       }
//   else {
//     flag = false;
//   }
// } 
// callback(newArr);
// };
    //Code Here for uniq

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
uniq(names, function(uniqArr){
  console.log('The new names array with all the duplicate items removed is ', uniqArr);
});



/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */

var each = function(myArray, cb) {
  for (var i = 0; i < myArray.length; i++) {
    cb(myArray[i], i);
  }
}


    //Code Here for each

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
each(names, function(item, indice){
  console.log('The item in the ' + indice + ' position is ' + item)
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */


var getUserById = function(str, cb) {
  for (var i = 0; i < users.length; i++) {
    if (str === users[i].id) {
      cb(users[i]);
    }
  }
}


 //code here for getUserById

var users = [
  {
    id: '12d',
    email: 'tyler@gmail.com',
    name: 'Tyler',
    address: '167 East 500 North'
  },
  {
    id: '15a',
    email: 'cahlan@gmail.com',
    name: 'Cahlan',
    address: '135 East 320 North'
  },
  {
    id: '16t',
    email: 'ryan@gmail.com',
    name: 'Ryan',
    address: '192 East 32 North'
  },
];

getUserById('16t', function(user){
  console.log('The user with the id 16t has the email of ' + user.email + 'the name of ' + user.name + ' and the address of ' + user.address); 
});
