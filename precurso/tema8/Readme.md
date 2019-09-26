# PASAPALABRA HTML + CSS + JS

En este repo encontraremos la docu necesaria para entender el código del clásico juego de televisión.

## INDICE
[CODIGO](#CÓDIGO)

[JS](#JS)

[SCSS+HTML](#SCSS+HTML)

[AGRADECIMIENTOS](#AGRADECIMIENTOS)

## CÓDIGO


### JS

```js
function getName(){}

function nombre(){}
```

**getName** y **nombre** son las funciones encargadas de pedir un nombre al usuario, recibirlo y guardarlo en la sesión actual.

```js
function showQuestions(){}
```

**showQuestions** muestra el rosco de preguntas.

```js
function cristianGalvez(){}

function getQuestion(){}

function getAnswer(){}

function transformInfo(){}
```

**cristianGalvez** , **getQuestion**, **getAnswer** y **transformInfo** son las encargadas de realizar toda la lógica de preguntar, recibir la respuesta y interpretarla.

Puede ser correcta, incorrecta , ***PASAPALABRA*** o ***END*** para finalizar la partida

```js
function asignarPuntos(){}
```

**asignarPuntos** se encarga de linkar la puntuación con los usuarios guardados en la sesión local.

```js
function showUsers(){}
```

**showUsers** Muestra el array con todos los usuarios en sesión y sus últimas puntuaciones.

```js
window.setInterval(...)
```

Esta función instancia la cuenta atrás. Cuando esta termine, se acaba la partida.


```js
function newTry() {}
```

**newTry** instancia una nueva partida por si otro jugador quiere jugar.


```js
function game() {}
```

**game** es la función donce se inicia el bucle del rosco y se decide si el jugador gana o pierde.



### SCSS+HTML

En esta parte nada remarcable, solo el uso de flexbox para crear la grid del juego 




## AGRADECIMIENTOS 

![](https://album.mediaset.es/eimg/2019/05/13/y5xttUz24XznzA8dYgmxG6.jpg)