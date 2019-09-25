var questions = [
    { letter: "a", answer: "abducir", status: 0, question: "CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien" },
    { letter: "b", answer: "bingo", status: 0, question: "CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso" },
    { letter: "c", answer: "churumbel", status: 0, question: "CON LA C. Niño, crío, bebé" },
    { letter: "d", answer: "diarrea", status: 0, question: "CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida" },
    { letter: "e", answer: "ectoplasma", status: 0, question: "CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación" },
    { letter: "z", answer: "zen", status: 0, question: "CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional" },
]

var users = [
    { user: 'Alguien', puntuacion: 0, fails: 0 },
]

var pasapalabra = function pasapalabra() {
    var fin = false;
    var palabra = '';
    var puntuacion = 0;
    var fails = 0;
    var totalOfQuestions = questions.length;

    var participante = '';

    var nombre = function nombre() {
        participante = prompt('Quien eres?', 'John Wick');

        users.forEach(function (element) {
            if (element.user === participante) {
                alert('tu ya has participado suficiente por hoy!');
                nombre();
            }
            else {
                alert('Bienvenido ' + participante + ',empezemos!');
                users.push({participante,puntuacion,fails});
            }
        });

    }
    var asignarPuntos = function asignarPuntos() {
        questions.forEach(function (element) {
            element.status = 0;
        });
        users.forEach(function (element) {
            if (element.user === participante) {
                users.puntuacion = puntuacion;
                users.fails === fails;
            }
        });
    }

    var cristianGalvez = function cristianGalvez() {

        questions.forEach(function (element) {
            if (!fin) {

                if (element.status === 0) {
                    palabra = prompt(element.question, element.letter);
                    if (palabra) {
                        palabra.toLowerCase();
                    }

                    switch (palabra) {
                        case element.answer:
                            puntuacion++;
                            element.status = 1;
                            break;
                        case 'pasapalabra':
                            alert('COORRECTOO! Siguiente pregunta!');
                            break;
                        case 'end':
                            fin = true;
                            asignarPuntos();
                            alert('Nos vemos otro dia');
                            break;
                        default:
                            alert('Oh no, has fallado! Siguiente pregunta!');
                            fails++;
                            element.status = 1;
                            break;

                    }
                    console.log(puntuacion);
                }

            }
        });

    };

    nombre();
    while (!fin) {
        debugger
        if ((puntuacion + fails) !== totalOfQuestions) {
            cristianGalvez();
        }
        else {
            if (puntuacion === totalOfQuestions) {
                alert('ERES EL NUEVO GANADOR! ENHORABUENA!!');
                asignarPuntos();
                fin = true;
            }
            else {
                alert('Vuelve a intentarlo otro dia, hoy has acertado ' + puntuacion + ' preguntas y has fallado ' + fails);
                asignarPuntos();
                fin = true;
            }
        }
    }
    return users;
}