var users = [
    {user: 'admin',cardBoard: [0],cardBoardLines:[{line1:[],line2:[], line3:[]}],cardBoardCompleted : ['O'],cardBoardCompletedLines:[{line1:[],line2:[], line3:[]}],puntuacion : 999}
]

var bingo = function bingo(){

    var compareUsersByPoints = function compareUsersByPoints(){
        function compare( a, b ) {
            if ( a.puntuacion < b.puntuacion ){
              return 1;
            }
            if ( a.puntuacion > b.puntuacion ){
              return -1;
            }
            return 0;
          }
        console.log(users);
        users.sort(compare);
    };

    var generateUser = function generateUser(){
        var user = prompt("Hola amigo, como te llamas?", "Geralt de Rivia");
        
        users.forEach(function(element) {
            if(element.user === user){
                alert('Cuanto tiempo '+user+', encantado de volver a verte, tu record es de : '+element.puntuacion);
                oldUser = true;
            }
        });

        if(!oldUser){
            var puntuacion = 0;
            var cardBoard = [0];
            var cardBoardLines=[{line1:[],line2:[], line3:[]}];
            var cardBoardCompleted= ['O'];
            var cardBoardCompletedLines =[{line1:[],line2:[], line3:[]}];
            users.push({user,cardBoard,cardBoardLines,cardBoardCompleted,cardBoardCompletedLines,puntuacion});
        }
        currentUser = user;
        return currentUser;
    };

    var generateBingoN = function generateBingoN(){
        var randomN = Math.floor(Math.random() * bingoMaxNumbers);
        randomN++;
        return  randomN;
    };

    var uniqueBingoN = function uniqueBingoN(){
        currentBingoN = generateBingoN();

        historyBingoN.push(currentBingoN);
        historyBingoN.sort(function(a, b) {
            return a - b;
        });

        for(i = 0; i < historyBingoN.length; i++){
            if (historyBingoN[i] === historyBingoN[i+1]){

                var index = historyBingoN.indexOf(historyBingoN[i]);
                if (index > -1) {
                    historyBingoN.splice(index, 1);
                }

                uniqueBingoN();
            }
        }
        return currentBingoN;
    };

    var generateCardboard = function generateCardboard(){
        if(!oldUser){
            var cardBoard = [];
            var cardBoardCompleted = [];
            var completedN = 'O';
            var randomN = 0;

            for(j=0;j<cardboardAncho;j++){
                randomN = generateBingoN();
                cardBoardCompleted.push(completedN);
                cardBoard.push(randomN);
                cardBoard = sortAndUniqueCardboardN(cardBoard);
            }
            users.forEach(function(element) {
                if(element.user === currentUser){
                    element.cardBoard = cardBoard;
                    element.cardBoardCompleted = cardBoardCompleted;
                }
            });
        }
        else{
            oldUser = false;
            users.forEach(function(element) {
            if(element.user === currentUser){
                cardBoard = element.cardBoard;
            }
        });

        }
        var changeCardboard = confirm("tus numeros de bingo son : "+cardBoard+', te gustan o los cambiamos?');
        if (!changeCardboard){
            generateCardboard();
        }

    };

    var sortAndUniqueCardboardN = function sortAndUniqueCardboardN(cardBoard){
        cardBoard.sort(function(a, b) {
            return a - b;
        });
        aux = 0;
        for(i = 0; i < cardBoard.length; i++){
            if (cardBoard[i] === cardBoard[i+1]){
                cardBoard[i] = generateBingoN();
                sortAndUniqueCardboardN(cardBoard);
            }
        }
        return cardBoard;
    };

    var generateCardboardLines = function generateCardboardLines(){
        var numberOfLines = Math.trunc(cardboardAncho / cardboardAnchoFila);
        var completedN = 'O';
        users.forEach(function(element) {
            if(element.user === currentUser){
                var aux = 0;
                for( i = 0; i < cardboardAnchoFila; i++){
                    element.cardBoardLines[0].line1[i] = element.cardBoard[aux];
                    element.cardBoardLines[0].line2[i] = element.cardBoard[5+aux];
                    element.cardBoardLines[0].line3[i] = element.cardBoard[10+aux];
                    element.cardBoardCompletedLines[0].line1[i] = completedN;
                    element.cardBoardCompletedLines[0].line2[i] = completedN;
                    element.cardBoardCompletedLines[0].line3[i] = completedN;
                    aux++;
                }
                console.log(element.cardBoardLines[0].line1);
                console.log(element.cardBoardLines[0].line2);
                console.log(element.cardBoardLines[0].line3);
            }
        });
    };

    var checkCardBoard = function checkCardBoard(){
        currentBingoN = uniqueBingoN();
        console.log('el numero es el : ' + currentBingoN);
        
        users.forEach(function(element) {
            if(element.user === currentUser){
                var i = 0;
                var foundN = false;
                while( i < element.cardBoard.length){
                    if(element.cardBoard[i] === currentBingoN){
                        element.cardBoardCompleted[i] = 'X';
                        foundN = true;
                        alert('Numero!');

                        if(i < 10){
                            if(i < 5){
                                element.cardBoardCompletedLines[0].line1[i] = 'X';
                            }
                            else{
                                element.cardBoardCompletedLines[0].line2[i-5] = 'X';
                            }
                        }else{
                            element.cardBoardCompletedLines[0].line3[i-10] = 'X';
                        }
                    }
                    i++;
                }
                if(foundN === false){
                    var repetirTirada = confirm("Mala suerte, quieres voler a intentar?");
                    bingoMaxPuntuation--;
                    console.log('tu puntuacion baja a '+bingoMaxPuntuation);
                    if (repetirTirada){
                        checkCardBoard();
                    }
                }
                else{
                    bingo = checkBingo();
                    if(!bingo){

                        var totalLines = checkLine();
                        if(!totalLines){
                            console.log(element.cardBoardLines[0].line1);
                            console.log(element.cardBoardCompletedLines[0].line1);
                            console.log(element.cardBoardLines[0].line2);
                            console.log(element.cardBoardCompletedLines[0].line2);
                            console.log(element.cardBoardLines[0].line3);
                            console.log(element.cardBoardCompletedLines[0].line3);
    
                            var repetirTirada = confirm("Acierto! Vamos a por el resto?");
                            if (repetirTirada){
                                checkCardBoard();
                            }
                        }
                        
                    }
                }
            }
        });
    };

    var checkLine = function checkLine(){
        var isLine = false;
        var countIsLine = 0;
        var correctN1 = 0;
        var correctN2 = 0;
        var correctN3 = 0;

        users.forEach(function(element) {
            if(element.user === currentUser){
                for( i = 0; i < element.cardBoardCompleted.length; i++){


                    if(i < 10){
                        if(i < 5){
                            if(element.cardBoardCompletedLines[0].line1[i] === 'X'){
                                correctN1++;
                            }
                        }
                        else{
                            if(element.cardBoardCompletedLines[0].line2[i-5] === 'X'){
                                correctN2++;
                            }
                        }
                    }else{
                        if(element.cardBoardCompletedLines[0].line3[i-10] === 'X'){
                            correctN3++;
                        }
                    }       
                }

                if(element.cardBoardCompletedLines[0].line1.length === correctN1){
                    alert('LINEA 1!!');
                    countIsLine++;
                }
                if(element.cardBoardCompletedLines[0].line2.length === correctN2){
                    alert('LINEA 2!!');
                    countIsLine++;
                }
                if(element.cardBoardCompletedLines[0].line3.length === correctN3){
                    alert('LINEA 3!!');
                    countIsLine++;
                }
                if(countIsLine === 3){
                    isLine = true;
                }
            }
        });
        return isLine;
    };
    
    var checkBingo = function checkBingo(){
        var isBingo = false;
        var correctN = 0;

        users.forEach(function(element) {
            if(element.user === currentUser){
                for( i = 0; i < element.cardBoardCompleted.length; i++){
                    if(element.cardBoardCompleted[i] === 'X'){
                        correctN++;
                    }
                }
                if(element.cardBoardCompleted.length === correctN){
                    if(element.puntuacion < bingoMaxPuntuation){
                        element.puntuacion = bingoMaxPuntuation;
                    }
                    var bingo = confirm("¡¡¡BINGO!!! Has ganado, quieres intentar mejorar tu puntuacion?");
                    if (bingo){
                        isBingo = true;
                    }
                }
            }
        });
        return isBingo;
    };


        do{
            var currentUser = 'Default';
            var oldUser = false;

            //bingoMaxNumbers siempre ha de ser superior a cardboardAncho
            //bingoMaxNumbers es nuestro bombo de numeros
            var bingoMaxNumbers = 20;
            var bingoMaxPuntuation = 999;

            var currentBingoN = 0;
            var historyBingoN = [];

            var cardboardAncho = 15;
            var cardboardAnchoFila = 5;

            var bingo = false; 

            compareUsersByPoints();
            generateUser();
            generateCardboard();
            generateCardboardLines();
            checkCardBoard();
        }while(bingo);
    

    return users; 
};
