
/*   ++++++++   Iteration 1   +++++++++   */

//this is var-object javascript, the rover
var myRover = {
  position: [8,0],
  direction: 'N'
};

/*-------------------------------*/
//function goForward, move rover and update Mars
function goForward(rover,mars) {
    mars[rover.position[0]][rover.position[1]]=' '; //desocupa la posicion de la que se va
  switch(rover.direction) {
    case 'N':
      rover.position[0]++
      break;
    case 'E':
      rover.position[1]++
      break;
    case 'S':
      rover.position[0]--
      break;
    case 'W':
      rover.position[1]--
      break;
  };
    mars[rover.position[0]][rover.position[1]]='R'; //ocupa la posicion de llegada
    console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]");
    console.log("Terreno lunar: "+myMars[myRover.position[0]][myRover.position[1]]);
}

/*------------------------------*/
//function goBackward, move rover and update Mars
function goBackward(rover,mars) {
    mars[rover.position[0]][rover.position[1]]=' ';
    switch(rover.direction) {
        case 'N':
            rover.position[0]--
            break;
        case 'E':
            rover.position[1]--
            break;
        case 'S':
            rover.position[0]++
            break;
        case 'W':
            rover.position[1]++
            break;
    };
    mars[rover.position[0]][rover.position[1]]='R';
    console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]");
    console.log("Terreno lunar: "+myMars[myRover.position[0]][myRover.position[1]]);
    
}

/*-------------------------------*/
//function turnRigth
function turnRigth(rover){
    switch(rover.direction){
        case 'N':
            rover.direction='E'
            break;
        case 'E':
            rover.direction='S'
            break;
        case 'S':
            rover.direction='W'
            break;
        case 'W':
            rover.direction='N'
            break;
    };
    
    console.log("New Rover direction: "+rover.direction);
}

/*-------------------*/
//function turnLeft
function turnLeft(rover){
    switch(rover.direction){
        case 'N':
            rover.direction='W'
            break;
        case 'E':
            rover.direction='N'
            break;
        case 'S':
            rover.direction='E'
            break;
        case 'W':
            rover.direction='S'
            break;
    };
    
    console.log("New Rover direction: "+rover.direction);
}

/*------------------------*/
//function isGridFreeForward states if rover are NOT in border of Mars (return true), and it can go on.
function isGridFree(rover) {
    var kamiRover; //rover kamikaze explore, not really necessary
    kamiRover=rover;
    switch(kamiRover.direction) {
        case 'N':
            if (kamiRover.position[0] < 9)
                return true;
            break;
        case 'E':
            if (kamiRover.position[1] < 9)
                return true;
            break;
        case 'S':
            if (kamiRover.position[0] >0)
                return true;
            break;
        case 'W':
            if (kamiRover.position[1] >0)
                return true;
            break;
        default:
            return false;
            
    };
}


/*-------------*/
// MARS PLANET
//2D array, Mars surface, function "normalized"
marsGrid = function(numrows, numcols, initial){
    var arr = [];
    for (var i = 0; i < numrows; ++i){
        var columns = [];
        for (var j = 0; j < numcols; ++j){
            columns[j] = initial;
        }
        arr[i] = columns;
    }
    return arr;
}


//create a 10x10 matrix, with all values set initialy to ' ': myMars
var myMars = marsGrid(10,10,' ');


/*------------------------------*/
/*      --- PRINCIPAL ---      */
//initializing, initial position

console.log("Posicion inicial del rover: "+myRover.position);
console.log("Orientacion inicial del rover: "+myRover.direction);
myMars[myRover.position[0]][myRover.position[1]]='R'; //marca con R el terreno actualmente ocupado por el rover
console.log("Terreno lunar: "+myMars[myRover.position[0]][myRover.position[1]]); //y lo muestra

//Movements, as example. If rover go forward or backwards, first explores if there's mars grid free

if (isGridFree(myRover)) {
    goForward(myRover,myMars);}
    else {console.log("Huston, we have a problem");
    }

if (isGridFree(myRover)) {
    goForward(myRover,myMars);}
    else {console.log("Huston, we have a problem");
    }

turnRigth(myRover);

if (isGridFree(myRover)) {
    goForward(myRover,myMars);}
    else {console.log("Huston, we have a problem");
    }

if (isGridFree(myRover)) {
    goForward(myRover,myMars);}
    else {console.log("Huston, we have a problem");
    }

if (isGridFree(myRover)) {
    goBackward(myRover,myMars);}
    else {console.log("Huston, we have a problem");
    }

turnRigth(myRover);
turnRigth(myRover);

if (isGridFree(myRover)) {
    goForward(myRover,myMars);}
else {console.log("Huston, we have a problem");
}

if (isGridFree(myRover)) {
    goForward(myRover,myMars);}
    else {console.log("Huston, we have a problem");
    }

turnLeft(myRover);

if (isGridFree(myRover)) {
    goForward(myRover,myMars);}
    else {console.log("Huston, we have a problem");
    }

// Final position
console.log("Posicion final del rover: "+myRover.position);
console.log("Orientacion final del rover: "+myRover.direction);

//Mars surface at the end "R" is the place of rover
console.log("Terreno marciano al final movimientos");
for (i=0; i<10;i++){
    for (j = 0; j < 10; j++) {
        console.log(myMars[i][j]);
    }
}

