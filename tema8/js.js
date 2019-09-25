var questions = [
    { letter: "a", answer: "abducir", status: 0, question: "CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien" },
    { letter: "b", answer: "bingo", status: 0, question: "CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso" },
    { letter: "c", answer: "churumbel", status: 0, question: "CON LA C. Niño, crío, bebé" },
    { letter: "d", answer: "diarrea", status: 0, question: "CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida" },
    { letter: "e", answer: "ectoplasma", status: 0, question: "CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación" },
    { letter: "f", answer: "facil", status: 0, question: "CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad" },
    { letter: "g", answer: "galaxia", status: 0, question: "CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas" },
    { letter: "h", answer: "harakiri", status: 0, question: "CON LA H. Suicidio ritual japonés por desentrañamiento" },
    { letter: "i", answer: "iglesia", status: 0, question: "CON LA I. Templo cristiano" },
    { letter: "j", answer: "jabali", status: 0, question: "CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba" },
    { letter: "k", answer: "kamikaze", status: 0, question: "CON LA K. Persona que se juega la vida realizando una acción temeraria" },
    { letter: "l", answer: "licantropo", status: 0, question: "CON LA L. Hombre lobo" },
    { letter: "m", answer: "misantropo", status: 0, question: "CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas" },
    { letter: "n", answer: "necedad", status: 0, question: "CON LA N. Demostración de poca inteligencia" },
    { letter: "ñ", answer: "señal", status: 0, question: "CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo." },
    { letter: "o", answer: "orco", status: 0, question: "CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien" },
    { letter: "p", answer: "protoss", status: 0, question: "CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft" },
    { letter: "q", answer: "queso", status: 0, question: "CON LA Q. Producto obtenido por la maduración de la cuajada de la leche" },
    { letter: "r", answer: "raton", status: 0, question: "CON LA R. Roedor" },
    { letter: "s", answer: "stackoverflow", status: 0, question: "CON LA S. Comunidad salvadora de todo desarrollador informático" },
    { letter: "t", answer: "terminator", status: 0, question: "CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984" },
    { letter: "u", answer: "unamuno", status: 0, question: "CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914" },
    { letter: "v", answer: "vikingos", status: 0, question: "CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa" },
    { letter: "w", answer: "sandwich", status: 0, question: "CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso" },
    { letter: "x", answer: "botox", status: 0, question: "CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética" },
    { letter: "y", answer: "peyote", status: 0, question: "CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos" },
    { letter: "z", answer: "zen", status: 0, question: "CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional" },
]


var users = [
    { participante: 'Alguien', puntuacion: 0, fails: 0 },
]


var fin = false;
var palabra = '';
var puntuacion = 0;
var fails = 0;

var totalTime = 400;
var totalOfQuestions = questions.length;

var participante = '';
var numberOfQuestion = 0;
var element;


var getName = function getName() {

    document.getElementById("pasapQuestion").innerHTML = 'Cómo te llamas?';
    participante = document.getElementById("pasapAnswer").value;

    console.log(participante);
    nombre();
    return name;
};

var nombre = function nombre() {

    var antiguoParticipante = false;

    users.forEach(function (element) {
        if (element.participante === participante) {
            antiguoParticipante = true;
        }
    });


    if (antiguoParticipante || participante === '') {
        document.getElementById("pasapQuestion").innerHTML = 'tu ya has participado suficiente por hoy!';
    }
    else {
        document.getElementById("pasapQuestion").innerHTML = 'Bienvenido ' + participante + ',empezemos!';
        users.push({ participante, puntuacion, fails });
        document.getElementById("nextQButton").innerHTML = 'Ir al rosco';

        document.getElementById('nextQButton').style.display = 'block';
        document.getElementById('nameButton').style.display = 'none';
        document.getElementById('pasapButton').style.display = 'none';
        document.getElementById('newButton').style.display = 'none';

    }


    console.log(participante);

};

var asignarPuntos = function asignarPuntos() {
    users.forEach(function (elemento) {
        if (elemento.participante === participante) {
            elemento.puntuacion = puntuacion;
            elemento.fails = fails;
        }
    });

    showUsers();
};

var cristianGalvez = function cristianGalvez() {
    showQuestions();
    element = questions[numberOfQuestion];
    if (element.status === 0) {
        getQuestion(element);
    }
    else {
        numberOfQuestion++;
        cristianGalvez();
    }
};

var getQuestion = function getQuestion(element) {
    if (!fin) {
        document.getElementById("pasapQuestion").innerHTML = element.question;
        document.getElementById("pasapAnswer").value = element.letter;

        document.getElementById("q" + numberOfQuestion).classList.add("current");

        document.getElementById('nextQButton').style.display = 'none';
        document.getElementById('pasapButton').style.display = 'block';

        document.getElementById('pasapalabraContainerPunt').style.display = 'block';

        document.getElementById("pasapAnswer").disabled = false;
        document.getElementById("imagen").classList.remove("triste");
    }

};

var getAnswer = function getAnswer(element) {
    palabra = document.getElementById("pasapAnswer").value;
    if (palabra) {
        palabra.toLowerCase();
    }
    transformInfo(element);
};

var transformInfo = function transformInfo(element) {
    if (!fin) {
        document.getElementById("q" + numberOfQuestion).classList.remove("current");
        switch (palabra) {
            case element.answer:

                puntuacion++;
                element.status = 1;
                document.getElementById("pasapQuestion").innerHTML = 'COORRECTOO! Siguiente pregunta!';

                document.getElementById("q" + numberOfQuestion).classList.add("good");
                break;
            case 'pasapalabra':
                document.getElementById("pasapQuestion").innerHTML = 'PASAPALABRA!';
                break;
            case 'end':
                fin = true;
                asignarPuntos();
                document.getElementById("pasapQuestion").innerHTML = 'Nos vemos otro dia';
                break;
            default:
                document.getElementById("q" + numberOfQuestion).classList.add("bad");
                document.getElementById("pasapQuestion").innerHTML = 'Oh no, has fallado! Siguiente pregunta!';
                document.getElementById("imagen").classList.add("triste");
                fails++;
                element.status = 1;
                break;
        }
        asignarPuntos();
        numberOfQuestion++;
        document.getElementById("pasapAnswer").disabled = true;
        document.getElementById('nextQButton').style.display = 'block';
        document.getElementById('pasapButton').style.display = 'none';


        console.log(puntuacion);

    }

};

var showQuestions = function showQuestions() {
    document.getElementById("roscoContainer").classList.remove("hidden");
};

var newTry = function newTry() {
    fin = false;
    palabra = '';
    puntuacion = 0;
    fails = 0;
    totalTime = 400;
    totalOfQuestions = questions.length;

    participante = '';
    numberOfQuestion = 0;
    element;
    questions.forEach(function (element) {
        element.status = 0;
    });


    document.getElementById("pasapQuestion").innerHTML = 'Cómo te llamas?';
    document.getElementById('pasapAnswer').style.display = 'block';
    document.getElementById('nextQButton').style.display = 'none';
    document.getElementById('nameButton').style.display = 'block';
    document.getElementById('pasapButton').style.display = 'none';
    document.getElementById('newButton').style.display = 'none';

    document.getElementById('pasapalabraContainerPunt').style.display = 'none';

    document.getElementById("pasapAnswer").disabled = false;
    document.getElementById("pasapAnswer").value = '';

    document.getElementById("puntuacionContainer").innerHTML = "";


    document.getElementById("roscoContainer").classList.add("hidden");
    document.getElementById("imagen").classList.remove("triste");

    for (i = 1; i < totalOfQuestions; i++) {
        document.getElementById("q" + i).classList.remove("bad");
        document.getElementById("q" + i).classList.remove("good");
        document.getElementById("q" + i).classList.remove("current");
    }

};

var showUsers = function showUsers() {
    document.getElementById("puntuacionContainer").innerHTML = "";
    users.forEach(function (element) {
        var user = document.createElement('div');
        user.classList.add('user');

        var participant = document.createElement('div');
        participant.classList.add('participante');

        var puntuacio = document.createElement('div');
        puntuacio.classList.add('puntuacion');

        var fail = document.createElement('div');
        fail.classList.add('fails');

        var participantText = document.createTextNode(element.participante);
        participant.appendChild(participantText);

        var puntuacioText = document.createTextNode(element.puntuacion);
        puntuacio.appendChild(puntuacioText);

        var failText = document.createTextNode(element.fails);
        fail.appendChild(failText);


        user.appendChild(participant);

        user.appendChild(puntuacio);

        user.appendChild(fail);

        document.getElementById("puntuacionContainer").appendChild(user);


    });
};

window.setInterval(function () {
    /// call your function here
    document.getElementById("timeContainer").innerHTML = totalTime;

    if (totalTime > 0) {
        totalTime--;
    } else if (totalTime === 0) {
        fin = true;
        asignarPuntos();
        document.getElementById("pasapQuestion").innerHTML = 'Nos vemos otro dia';
    }

}, 1000);

var game = function game() {
    //debugger
    if ((this.puntuacion + this.fails) !== this.totalOfQuestions) {

        if (this.numberOfQuestion === questions.length) {
            this.numberOfQuestion = 0;
            document.getElementById("nextQButton").innerHTML = 'vuelta';
        }
        cristianGalvez();
        showUsers();
    }
    else {
        if (this.puntuacion === this.totalOfQuestions) {
            document.getElementById("pasapQuestion").innerHTML = 'ERES EL NUEVO GANADOR! ENHORABUENA!!';
            asignarPuntos();
            this.fin = true;
        }
        else {
            document.getElementById("pasapQuestion").innerHTML = 'Vuelve a intentarlo otro dia, hoy has acertado ' + this.puntuacion + ' preguntas y has fallado ' + this.fails;

            document.getElementById("imagen").classList.add("triste");
            asignarPuntos();
            this.fin = true;
        }
    }

    if (this.fin) {
        document.getElementById('nextQButton').style.display = 'none';
        document.getElementById('nameButton').style.display = 'none';
        document.getElementById('pasapButton').style.display = 'none';
        document.getElementById('newButton').style.display = 'block';


        document.getElementById('pasapAnswer').style.display = 'none';


    }
    return users;
};