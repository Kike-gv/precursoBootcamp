//STRING
var name = 'kike';
var count = name.length(); 
console.log('My name has ' + count + ' letters');   


var completeName = 'Kike Garcia';
var count = completeName.indexOf(' ');
count++;
console.log('Your last name starts on position ' + count);  


var show = completeName.split(' ');
console.log('My Name is ' + show[0]); 

console.log('My LastName is ' + show[1]); 

var name = show[0];
var lastName = show[1];
console.log(completeName +", " + lastName);

lastName = 'Hello, Mr. '+lastName;
console.log(lastName);

lastName = show[1].toUpperCase();
console.log('my last name is '+lastName);

var something = name + " is awesome";
console.log(something);

var myFirstLastnameLetters = name.slice(0,1)+'.'+lastName.slice(0,1);
console.log(myFirstLastnameLetters);


//ARRAY
var arrayName = ['K','i','k','e','G','a','r','c','i','a'];
console.log(arrayName);
arrayName.forEach(function(element, index) {
    arrayName.splice(index, 1, '/'+element);
});
console.log(arrayName);

var arrayName = ['K','i','k','e','G','a','r','c','i','a'];
var slicearrayName = arrayName.slice(4,10);
console.log(slicearrayName);