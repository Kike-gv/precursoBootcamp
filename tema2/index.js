var flights = [
    { id: 00, to: 'Bilbao', from: 'Barcelona', cost: 1600, scale: false },
    { id: 01, to: 'New York', from: 'Barcelona', cost: 700, scale: false },
    { id: 02, to: 'Los Angeles', from: 'Madrid', cost: 1100, scale: true },
    { id: 03, to: 'Paris', from: 'Barcelona', cost: 210, scale: false },
    { id: 04, to: 'Roma', from: 'Barcelona', cost: 150, scale: false },
    { id: 05, to: 'London', from: 'Madrid', cost: 200, scale: false },
    { id: 06, to: 'Madrid', from: 'Barcelona', cost: 90, scale: false },
    { id: 07, to: 'Tokyo', from: 'Madrid', cost: 1500, scale: true },
    { id: 08, to: 'Shangai', from: 'Barcelona', cost: 800, scale: true },
    { id: 09, to: 'Sydney', from: 'Barcelona', cost: 150, scale: true },
    { id: 10, to: 'Tel-Aviv', from: 'Madrid', cost: 150, scale: false }
];

var administrator='';

var isAdmin = function isAdmin(){
    var user = prompt("Eres admin o user", "user");
    switch(user){
        case 'admin':
            administrator = user;
            console.log('Estás habilitado como '+user);
            console.log('Puedes usar las funcion addFlight() y deleteFlight()');
            break;
        
        case 'user':
            administrator = user;
            console.log('Estás habilitado como '+user);
            console.log('Puedes usar la funcion priceSearch()');
            break;
        default:
            console.log('Lo siento, no te he entendido, podrías repetirmelo?');
            isAdmin();
            break;
    }
    return user;
};

var priceSearch = function priceSearch(){
     if(administrator === 'user'){
        var filter = prompt("Como prefieres filtrar por precio tus vuelos?", "alto, igual o menor");
        var price = prompt("Sobre que precio quieres aplicar tu filtro?", "300");
        switch(filter){
            case 'alto':
                flights.forEach(function(element) {
                    if(price < element.cost){
                        if(element.scale){
                            console.log('El vuelo con origen: '+element.from+', y destino: '+element.to+' tiene un coste de '+element.cost+'€ y no realiza ninguna escala.');
                        }
                        else{
                            console.log('El vuelo con origen: '+element.from+', y destino: '+element.to+' tiene un coste de '+element.cost+'€ y realiza una escala.');
                        }
                    }
                });
                break;
            case 'igual':
                flights.forEach(function(element) {
                    if(price === element.cost){
                        if(element.scale){
                            console.log('El vuelo con origen: '+element.from+', y destino: '+element.to+' tiene un coste de '+element.cost+'€ y no realiza ninguna escala.');
                        }
                        else{
                            console.log('El vuelo con origen: '+element.from+', y destino: '+element.to+' tiene un coste de '+element.cost+'€ y realiza una escala.');
                        }
                    }
                });
                break;
            case 'menor':
                flights.forEach(function(element) {
                    if(price > element.cost){
                        if(element.scale){
                            console.log('El vuelo con origen: '+element.from+', y destino: '+element.to+' tiene un coste de '+element.cost+'€ y no realiza ninguna escala.');
                        }
                        else{
                            console.log('El vuelo con origen: '+element.from+', y destino: '+element.to+' tiene un coste de '+element.cost+'€ y realiza una escala.');
                        }
                    }
                });
                break;
            default:
                console.log('Lo siento, no te he entendido, podrías repetirmelo?');
                priceSearch();
                break;
        }
        console.log('Gracias por su compra, vuelva pronto.');
        return price;
    }
};

var addFlight = function addFlight(){
    if(administrator === 'admin'){
        if(flights.length < 15){
            var id= prompt("Dame una ID", "00");
            var to = prompt("Dame un destino", "Indonesia");
            var from = prompt("Dame un origen", "Barcelona");
            var cost = prompt("Dame un precio", "1000");
            var scale = prompt("hace escalas?", "true or false");
        
            id = parseInt(id);
            cost = parseInt(cost);
            scale = (scale ==="true");
        
            flights.push({id,to,from,cost,scale});
        }
        else{
            alert('Has sobrepasado la cantidad máxima de vuelos simultáneos');
        }
        return flights;
    }
};

var deleteFlight = function deleteFlight(){
    if(administrator ==='admin'){
        var id = prompt("Dame una ID para eliminar el vuelo", "00");
        id = parseInt(id);
        flights.forEach(function(element,index) {
            if(element.id === id){
                flights.splice(index, 1);
            }
        });
        return flights;
    }
};

var airlines = function airlines(){

    var welcomeUser = function welcomeUser(){
        var user = prompt("Buenos dias, introduce tu nombre porfavor", "ej. John Doe");
        console.log('hola '+user+', cómo estás?');
        return user;
    };

    var disponibleFlights = function disponibleFlights(){
        flights.forEach(function(element) {
            if(element.scale){
                console.log('El vuelo con origen: '+element.from+', y destino: '+element.to+' tiene un coste de '+element.cost+'€ y no realiza ninguna escala.');
            }
            else{
                console.log('El vuelo con origen: '+element.from+', y destino: '+element.to+' tiene un coste de '+element.cost+'€ y realiza una escala.');
            }
        });
    };

    var mediumCost = function mediumCost(){
        var cost = 0;
        flights.forEach(function(element) {
            cost+= element.cost;
        });
        cost =cost/flights.length;
        cost = cost.toFixed(2);
        console.log('el coste medio de los vuelos es de: '+cost);
        return cost;
    };

    var hasScales = function hasScales(){
        var scales = 0;
        flights.forEach(function(element) {
            if(element.scale){
                scales++;
            }
        });
        console.log('Hay '+scales+' vuelos con escalas');
        return scales;
    };

    var lastflights = function lastflights(){
        var lasts = 'las destinaciones de los últimos vuelos para hoy son: ';
        flights.forEach(function(element,index) {
            if(index > (flights.length - 6)){
                if(index ===(flights.length - 5)){
                    lasts = lasts + element.to;
                }
                else if(index ===(flights.length - 1)){
                    lasts = lasts +' y '+ element.to+'.';
                }
                else{
                    lasts = lasts +', '+ element.to;
                }
            }
        });
        console.log(lasts);
        return lasts;
    };



    welcomeUser();
    isAdmin();
    disponibleFlights();
    mediumCost();
    hasScales();
    lastflights();
};