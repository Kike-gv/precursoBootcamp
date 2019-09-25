var calculatorStory=[];

var calculator = function calculator(){
    var comprobation = true;

    for (var i=0; i < arguments.length; i++) {
        
        if(typeof arguments[i] !== 'number'){
            comprobation = false;
        }
    }
    if(comprobation){
        function squareRoot(number){
            return 'la raiz de '+number+' es: '+ Math.round(Math.sqrt(number) * 1000) / 1000; 
        };
        var addNumbers = function addNumbers(){
            var string = 'la suma de '+arguments[0][0];
            var operation = arguments[0][0];
            for (var i = 1; i < arguments[0].length; i++) {
                string += ' y '+arguments[0][i];
                operation += arguments[0][i];
            }
            return string+' es: '+ Math.round((operation) * 1000) / 1000;
        };
        var subsNumbers = function subsNumbers(){
            var string = 'la resta de '+arguments[0][0];
            var operation = arguments[0][0];
            for (var i = 1; i < arguments[0].length; i++) {
                string += ' y '+arguments[0][i];
                operation -= arguments[0][i];
            }
            return string+' es: '+ Math.round((operation) * 1000) / 1000;
        };
        var multNumbers = function multNumbers(){
            var string = 'la multiplicación de '+arguments[0][0];
            var operation = arguments[0][0];
            for (var i = 1; i < arguments[0].length; i++) {
                string += ' y '+arguments[0][i];
                operation *= arguments[0][i];
            }
            return string+' es: '+ Math.round(operation * 1000) / 1000;
        };
        var divNumbers = function divNumbers(){
            var string ='la división de '+arguments[0][0];
            var operation = arguments[0][0];
            for (var i = 1; i < arguments[0].length; i++) {
                string += ' y '+arguments[0][i];
                operation /= arguments[0][i];
            }
            return string+' es: '+ Math.round(operation * 1000) / 1000;
        };
    
        if(arguments[1]){
            var add = addNumbers(arguments);
            var subs = subsNumbers(arguments);
            var mult = multNumbers(arguments);
            var div = divNumbers(arguments);
    
            calculatorStory.push(add);
            calculatorStory.push(subs);
            calculatorStory.push(mult);
            calculatorStory.push(div);
    
    
            return calculatorStory;
        }
        else{
            calculatorStory.push(squareRoot(arguments[0]));
            return calculatorStory;
        }
    }
    else{
        console.log('Porfavor, introduce únicamente carácteres numéricos');
    }
};