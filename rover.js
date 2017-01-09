/*  ITERATION 1 WITH CORRECTIONS (ADDING isGridFreeBackward and isGridFreeForward functions)
 
 And ITERATION 2
 
 And BONUS: placing obstacles in Mars, and functions isNoObstacleForward and isNoObstacleBackwards to detect it.
 
 */


//this is variable object javascript, the rover initially at [0,0]
var myRover = {
  position: [0,0],
  direction: 'N'
};

/*-------------------------------*/
//function goForward, move rover forward and update Mars
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
    console.log("Terreno lunar: "+mars[rover.position[0]][rover.position[1]]);
}

/*------------------------------*/
//function goBackward, move rover backwards and update Mars
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
    console.log("Mars surface: "+mars[rover.position[0]][rover.position[1]]);
    
}

/*-------------------------------*/
//function turnRigth; turn the rover to the rigth
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
//function turnLeft; turn the rover to the left
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
//function isGridFreeForward; states if rover are NOT in "border of Mars" (return true), and it can go on.
function isGridFreeForward(rover) {
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

/* ---------------------------------*/
//function isGridFreeBackward states if rover are NOT in border of Mars (return true), and it can go on.
function isGridFreeBackward(rover) {
    var kamiRover; //rover kamikaze explore, not really necessary
    kamiRover=rover;
    switch(kamiRover.direction) {
        case 'N':
            if (kamiRover.position[0] > 0)
                return true;
            break;
        case 'E':
            if (kamiRover.position[1] > 0)
                return true;
            break;
        case 'S':
            if (kamiRover.position[0] < 9)
                return true;
            break;
        case 'W':
            if (kamiRover.position[1] < 9)
                return true;
            break;
        default:
            return false;
            
    };
}


/*-------------*/
// MARS PLANET
//2D array, Mars surface, function "normalized"
//marsGrid = function(numrows, numcols, initial){ (alternative declaration of function marsGrid)
function marsGrid(numrows, numcols, initial){
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



/*   ITERATION 2   */

//function makeComands takes rover, mars and string of commands and execute it.
function makeCommands(rover,mars,command) {
    
    switch(command) {
        case 'f':
            if (isGridFreeForward(rover) && isNoObstacleForward(rover,mars)) {
                goForward(rover,mars);}
            else {console.log("Huston, we have a problem!!!");
            }
            break;
        case 'b':
            if (isGridFreeBackward(rover) && isNoObstacleBackward(rover,mars)) {
                goBackward(rover,mars);}
            else {console.log("Huston, we have a problem!!!");
            }
            break;
        case 'r':
            turnRigth(rover);
            break;
        case 'l':
            turnLeft(rover);
            break;
        default:
            
            
    };
}


/* ---------------------------- */
/* BONUS place obstacules, functions placeObstacles, isNoObstacleForward, isNoObstacleBackward */

// function placeObstacles, place obstacles in Mars, at x,y coordinates.
function placeObstacles (mars,x,y){
    mars[x][y]='O'; //O de obstacle
}

//Function isNoObstacleForware return true if NO exist an obstacle in path of rover
function isNoObstacleForward (rover,mars){
    //var krover = rover;
    switch(rover.direction) {
        case 'N':
            if (mars[rover.position[0]+1][rover.position[1]] != 'O')
                return true;
            else
                return false;
            break;
        case 'E':
            if (mars[rover.position[0]][rover.position[1]+1] != 'O')
                return true;
            else
                return false
            break;
        case 'S':
            if (mars[rover.position[0]-1][rover.position[1]] != 'O')
                return true;
            else
                return false;
            break;
        case 'W':
            if (mars[rover.position[0]][rover.position[1]-1] != 'O')
                return true;
            else
                return false;
            break;
        default:
            return false;
            
    };
    
}

//Function isNoObstacleBackwards return true if NO exist an obstacle in path (backward) of rover
function isNoObstacleBackward(rover,mars) {
    //var krover = rover;
    switch(rover.direction) {
        case 'N':
            if (mars[rover.position[0]-1][rover.position[1]] != 'O')
                return true;
            else
                return false;
            break;
        case 'E':
            if (mars[rover.position[0]][rover.position[1]-1] != 'O')
                return true;
            else
                return false;
            break;
        case 'S':
            if (mars[rover.position[0]+1][rover.position[1]] != 'O')
                return true;
            else
                return false;
            break;
        case 'W':
            if (mars[rover.position[0]][rover.position[1]+1] != 'O')
                return true;
            else
                return false;
            break;
        default:
            return false;
            
    };
}


/*------------------------------*/
/*      --- PRINCIPAL ---      */

// initializing, placing obstacules in Mars
placeObstacles(myMars,0,2);
placeObstacles(myMars,3,1); //ejemplo inicial, es OK!!!
placeObstacles(myMars,4,7);

//initializing, initial position rover

console.log("Initial position of Rover: "+myRover.position);
console.log("Initial direction of Rover: "+myRover.direction);
myMars[myRover.position[0]][myRover.position[1]]='R'; //marca con R el terreno actualmente ocupado por el rover
console.log("Mars surface under Rover: "+myMars[myRover.position[0]][myRover.position[1]]); //y lo muestra
console.log("All OK, Rover begin to explore Mars");
console.log("----------------------------------");

//Movements, as example. If rover go forward or backwards, first explores if there's mars grid free and explores if there's no obstacles

if (isGridFreeForward(myRover) && isNoObstacleForward(myRover,myMars )) {
    goForward(myRover,myMars);}
    else {console.log("Huston, we have a problem!!!!");
    }

if (isGridFreeForward(myRover) && isNoObstacleForward(myRover,myMars )) {
    goForward(myRover,myMars);}
    else {console.log("Huston, we have a problem!!!");
    }

turnRigth(myRover);

if (isGridFreeForward(myRover) && isNoObstacleForward(myRover,myMars )) {
    goForward(myRover,myMars);}
else {console.log("Huston, we have a problem!!!");
}

turnLeft(myRover);

if (isGridFreeForward(myRover) && isNoObstacleForward(myRover,myMars )) {
    goForward(myRover,myMars);}
else {console.log("Huston, we have a problem!!!");
}

turnRigth(myRover);

if (isGridFreeForward(myRover) && isNoObstacleForward(myRover,myMars )) {
    goForward(myRover,myMars);}
else {console.log("Huston, we have a problem!!!");
}

turnLeft(myRover);

if (isGridFreeBackward(myRover) && isNoObstacleBackward(myRover,myMars)) {
    goBackward(myRover,myMars);}
    else {console.log("Huston, we have a problem!!!");
    }

if (isGridFreeBackward(myRover) && isNoObstacleBackward(myRover,myMars)) {
    goBackward(myRover,myMars);}
    else {console.log("Huston, we have a problem!!!");
    }

turnRigth(myRover);

if (isGridFreeForward(myRover) && isNoObstacleForward(myRover,myMars )) {
    goForward(myRover,myMars);}
    else {console.log("Huston, we have a problem!!!");
    }

if (isGridFreeForward(myRover) && isNoObstacleForward(myRover,myMars )) {
    goForward(myRover,myMars);}
    else {console.log("Huston, we have a problem!!!");
    }

if (isGridFreeBackward(myRover) && isNoObstacleBackward(myRover,myMars)) {
    goBackward(myRover,myMars);}
    else {console.log("Huston, we have a problem!!!");
    }

turnRigth(myRover);
turnRigth(myRover);
turnRigth(myRover);
turnRigth(myRover);

if (isGridFreeForward(myRover) && isNoObstacleForward(myRover,myMars )) {
    goForward(myRover,myMars);}
    else {console.log("Huston, we have a problem!!!");
    }

if (isGridFreeForward(myRover) && isNoObstacleForward(myRover,myMars ) ) {
    goForward(myRover,myMars);}
    else {console.log("Huston, we have a problem!!!");
    }

turnLeft(myRover);

if (isGridFreeForward(myRover) && isNoObstacleForward(myRover,myMars )) {
    goForward(myRover,myMars);}
    else {console.log("Huston, we have a problem!!!");
    }

turnLeft(myRover);

if (isGridFreeForward(myRover) && isNoObstacleForward(myRover,myMars )) {
    goForward(myRover,myMars);}
else {console.log("Huston, we have a problem!!!");
}


// ITERATION 2 execution command string

var commandsArray = "fbfbllffflbffffr";  //define an string of commands

console.log("STRING COMMANDS EXECUTING !!");
for (l=0; l<commandsArray.length; l++){
    console.log("command executing now: "+commandsArray[l]);
    makeCommands(myRover,myMars,commandsArray[l]);
}


// Rover final position
console.log("------------------------------");
console.log("Final state of Mars rover:");
console.log("Final position of Mars Rover: "+myRover.position);
console.log("Final direction of Mars Rover: "+myRover.direction);
console.log("Marking Martian Terrain under Rover: "+myMars[myRover.position[0]][myRover.position[1]]);

//Mars surface at the end "R" is the place of rover
console.log("Mars surface at the end of movements");
for (j=0; j<10;j++){
    for (i = 0; i < 10; i++) {
        console.log(myMars[i][j]);
    }
}

