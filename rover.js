/*  ITERATION 1 WITH CORRECTIONS (ADDING isGridFreeBackward and isGridFreeForward functions)
 
 And ITERATION 2
 
 And BONUS: placing obstacles in Mars, and functions isNoObstacleForward and isNoObstacleBackwards to detect it.
 
 And superbonus, with two rovers... named usRover and rusRover. old myRover is now usRover. Added nationality to rovers.
 A rover can be obstaculized by an obstacle and by other rover.
 
 */




/* FUNCTIONS */

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
    mars[rover.position[0]][rover.position[1]]='X'; //ocupa la posicion de llegada
    console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]");
    console.log("Mars surface: "+mars[rover.position[0]][rover.position[1]]);
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
    mars[rover.position[0]][rover.position[1]]='X';
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
//function isGridFreeForward; states if rover are NOT in "border of Mars" (return true), and it can go on backward.
function isGridFreeForward(rover) {
    var kamiRover; //rover kamikaze explore, not really necessary
    kamiRover=rover;
    switch(kamiRover.direction) {
        case 'N':
            if (kamiRover.position[0] < 9)
                return true;
            else {console.log("ROVER WILL GO OUT OF MARS!!!!");
                return false;
            }
            break;
        case 'E':
            if (kamiRover.position[1] < 9)
                return true;
            else {console.log("ROVER WILL GO OUT OF MARS!!!!");
                return false;
            }
            break;
        case 'S':
            if (kamiRover.position[0] >0)
                return true;
            else {console.log("ROVER WILL GO OUT OF MARS!!!!");
            return false;
            }
            break;
        case 'W':
            if (kamiRover.position[1] >0)
                return true;
            else {console.log("ROVER WILL GO OUT OF MARS!!!!");
                return false;
            }
            break;
        default:
            return false;
            
    };
}

/* ---------------------------------*/
//function isGridFreeBackward states if rover are NOT in border of Mars (return true), and it can go on backward.
function isGridFreeBackward(rover) {
    var kamiRover; //rover kamikaze explore, not really necessary
    kamiRover=rover;
    switch(kamiRover.direction) {
        case 'N':
            if (kamiRover.position[0] > 0)
                return true;
            else {console.log("ROVER WILL GO OUT OF MARS!!!!");
                return false;
            }
            break;
        case 'E':
            if (kamiRover.position[1] > 0)
                return true;
            else {console.log("ROVER WILL GO OUT OF MARS!!!!");
                return false;
            }
            break;
        case 'S':
            if (kamiRover.position[0] < 9)
                return true;
            else {console.log("ROVER WILL GO OUT OF MARS!!!!");
                return false;
            }
            break;
        case 'W':
            if (kamiRover.position[1] < 9)
                return true;
            else {console.log("ROVER WILL GO OUT OF MARS!!!!");
                return false;
            }
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
    if (rover.nationality=="USA"){
    switch(command) {
        case 'f':
            if (isGridFreeForward(rover) && isNoObstacleForward(rover,mars)) {
                console.log("US ROVER forward movement");
                goForward(rover,mars);}
            else {console.log("Huston, we have a problem!!!");
            }
            break;
        case 'b':
            if (isGridFreeBackward(rover) && isNoObstacleBackward(rover,mars)) {
                console.log("US ROVER Backward movement");
                goBackward(rover,mars);}
            else {console.log("Huston, we have a problem!!!");
            }
            break;
        case 'r':
            console.log("US ROVER turn rigth");
            turnRigth(rover);
            break;
        case 'l':
            console.log("US ROVER turn left");
            turnLeft(rover);
            break;
        default:
            console.log("INVALID COMMAND");
            
    };
    }
    
    else
        
    if (rover.nationality=="Russian"){
        switch(command) {
            case 'f':
                if (isGridFreeForward(rover) && isNoObstacleForward(rover,mars)) {
                    console.log("RUS ROVER forward movement:");
                    goForward(rover,mars);}
                else {console.log("Baikonur, tenemos un problema!!!! ");
                }
                break;
            case 'b':
                if (isGridFreeBackward(rover) && isNoObstacleBackward(rover,mars)) {
                    console.log("RUS ROVER backward movement");
                    goBackward(rover,mars);}
                else {console.log("Baikonur, tenemos un problema!!!! ");
                }
                break;
            case 'r':
                console.log("RUS ROVER turn rigth");
                turnRigth(rover);
                break;
            case 'l':
                console.log("RUS ROVER turn left");
                turnLeft(rover);
                break;
            default:
                console.log("INVALID COMMAND");

        };

    }
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
            if ((mars[rover.position[0]+1][rover.position[1]] != 'O') && (mars[rover.position[0]+1][rover.position[1]] != 'X'))
                return true;
            else if (mars[rover.position[0]+1][rover.position[1]] === 'O'){
                    console.log("OBSTACLE FORWARD!!!!");
                    return false;
                    }
                    else {console.log("ENEMY ROVER FORWARD!!!");
                    return false;
                    }
            break;
        case 'E':
            if ((mars[rover.position[0]][rover.position[1]+1] != 'O') && (mars[rover.position[0]][rover.position[1]+1] != 'X'))
                return true;
            else if (mars[rover.position[0]][rover.position[1]+1] === 'O'){
                    console.log("OBSTACLE FORWARD!!!!");
                    return false;
                    }
                    else {console.log("ENEMY ROVER FORWARD!!!");
                    return false;
                    }
            break;
        case 'S':
            if ((mars[rover.position[0]-1][rover.position[1]] != 'O') && (mars[rover.position[0]-1][rover.position[1]] != 'X'))
                return true;
            else if (mars[rover.position[0]-1][rover.position[1]] === 'O'){
                    console.log("OBSTACLE FORWARD!!!");
                    return false;
                    }
                    else {console.log("ENEMY ROVER FORWARD!!!");
                    return false;
                    }
            break;
        case 'W':
            if ((mars[rover.position[0]][rover.position[1]-1] != 'O') && (mars[rover.position[0]][rover.position[1]-1] != 'X'))
                return true;
            else if (mars[rover.position[0]][rover.position[1]-1] === 'O'){
                    console.log("OBSTACLE FORWARD!!!");
                    return false;
                    }
                    else {console.log("ENEMY ROVER FORWARD!!!");
                    return false;
                    }
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
            if ((mars[rover.position[0]-1][rover.position[1]] != 'O') && (mars[rover.position[0]-1][rover.position[1]] != 'X'))
                return true;
            else if (mars[rover.position[0]-1][rover.position[1]] === 'O'){
                console.log("OBSTACLE BACKWARD !!!!");
                return false;
            } else {console.log("ENEMY ROVER BACKWARD!!!");
                return false;
            }
            break;
        case 'E':
            if ((mars[rover.position[0]][rover.position[1]-1] != 'O') && (mars[rover.position[0]][rover.position[1]-1] != 'X'))
                return true;
            else if (mars[rover.position[0]][rover.position[1]-1] === 'O'){
                console.log("OBSTACLE BACKWARD !!!!");
                return false;
            } else {console.log("ENEMY ROVER BACKWARD!!!");
                return false;
            }
            break;
        case 'S':
            if ((mars[rover.position[0]+1][rover.position[1]] != 'O') && (mars[rover.position[0]+1][rover.position[1]] != 'X'))
                return true;
            else if (mars[rover.position[0]+1][rover.position[1]] === 'O'){
                console.log("OBSTACLE BACKWARD !!!!");
                return false;
            } else {console.log("ENEMY ROVER BACKWARD!!!");
                return false;
            }
            break;
        case 'W':
            if ((mars[rover.position[0]][rover.position[1]+1] != 'O') && (mars[rover.position[0]][rover.position[1]+1] != 'X'))
                return true;
            else if (mars[rover.position[0]][rover.position[1]+1] === 'O'){
                console.log("OBSTACLE BACKWARD !!!!");
                return false;
            } else {console.log("ENEMY ROVER BACKWARD!!!");
                return false;
            }
            break;
        default:
            return false;
            
    };
}


/*------------------------------*/
/*      --- PRINCIPAL ---      */

// initializing, placing obstacules in Mars
placeObstacles(myMars,2,2);
placeObstacles(myMars,4,2);
placeObstacles(myMars,4,7);


//Initializing, rover land in Mars. this is variable object javascript.
var usRover = {
position: [5,4],
direction: 'N',
nationality: "USA"
};

var rusRover = {
position: [6,5],
direction: 'S',
nationality: "Russian"
};




//initializing, initial position rover

console.log("USA ROVER LANDED IN MARS");
console.log("Initial position of usRover: "+usRover.position);
console.log("Initial direction of usRover: "+usRover.direction);
myMars[usRover.position[0]][usRover.position[1]]='X'; //marca con X inicialmente el terreno actualmente ocupado por el rover
console.log("Mars surface under usRover: "+myMars[usRover.position[0]][usRover.position[1]]); //y lo muestra
console.log("All OK, usRover begin to explore Mars");
console.log("----------------------------------");


console.log("RUSSIAN ROVER LANDED IN MARS");
console.log("Initial position of rusRover: "+rusRover.position);
console.log("Initial direction of rusRover: "+rusRover.direction);
myMars[rusRover.position[0]][rusRover.position[1]]='X'; //marca con X el terreno actualmente ocupado por el rover
console.log("Mars surface under rusRover: "+myMars[rusRover.position[0]][rusRover.position[1]]); //y lo muestra
console.log("All OK, rusRover begin to explore Mars");
console.log("----------------------------------");



// Command strings introduced by promt

var usCommandsArray;  //define an string of commands for us rover.
var rusCommandsArray; //define an string of commands for rus rover.

usCommandsArray = window.prompt("Introduccing comands for USA ROVER", "ffrfflffbfrf");
rusCommandsArray = window.prompt("Introduccing comands for RUSSIAN ROVER", "ffrfflffbfrf");

console.log("US and RUS string Commands EXECUTING, precondition: US and RUS number of commands (string.length) are the same !!");

for (i=0; i<usCommandsArray.length; i++){
    console.log("-------------------------------");
    console.log("Rovers executing command number: "+(i+1));
    console.log("US command executing now: "+usCommandsArray[i]);
    makeCommands(usRover,myMars,usCommandsArray[i]);
    console.log("RUS command executing now: "+rusCommandsArray[i]);
    makeCommands(rusRover,myMars,rusCommandsArray[i]);
}

// ROVERS final position
console.log("______________________");
console.log("ROVERS FINAL POSITION");
// usRover final position
console.log("------------------------------");
console.log("Final state of Mars usRover:");
console.log("Final position of Mars usRover: "+usRover.position);
console.log("Final direction of Mars usRover: "+usRover.direction);
myMars[usRover.position[0]][usRover.position[1]] ='U';
console.log("Marking Martian Terrain under usRover: "+myMars[usRover.position[0]][usRover.position[1]]);

// rusRover final position
console.log("------------------------------");
console.log("Final state of Mars rusRover:");
console.log("Final position of Mars rusRover: "+rusRover.position);
console.log("Final direction of Mars rusRover: "+rusRover.direction);
myMars[rusRover.position[0]][rusRover.position[1]] ='R';
console.log("Marking Martian Terrain under rusRover: "+myMars[rusRover.position[0]][rusRover.position[1]]);


//Mars surface at the end "R" is the place of rover
console.log("__________________________________________");
console.log("------------------------------------------");
console.log("Mars surface at the end of movements");
for (j=0; j<10; j++){
    for (i=0; i<10; i++) {
        console.log(myMars[i][j]);
    }
}

console.log("warning, rows in vertical, columns horizontal");
function maper(myMars){
    console.log(myMars.join('\n') + '\n');
    console.log("_______________________________________________");
}
maper(myMars);
