var name = 'Tony Stark';
var age = 34;

function salute(myName){
    console.log('hello '+myName);
}
salute(name);

function salute2(myName){
    return 'hello '+myName;
}

var myFunction = function salute3(myName,myAge){
    return 'hello '+myName+",yout're "+myAge;
};
myFunction(name,age);


var personData = function personData(param1,param2){

    var myName = function myName(param1){
        if(name == 'Tony Stark'){
            return param1+'... aka IRONMAN';
        }
        else{
            return param1+"... You're not IRONMAN!";
        }
    }
    var myAge = function myAge(param2){
        return param2+"...Sure you're Tony Stark?";
    };
    var myRandomAge = function myRandomAge(){
        return Math.random();
    };

    var name = myName(param1);
    var age = myAge(param2);
    var ageRnd = myAge(myRandomAge());
    if(param1 == 'Tony Stark'){ 
        return name + age;
    }
    else{   
        return name;
    }
};
personData(name,age);