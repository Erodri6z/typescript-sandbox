// let food: string = 'Popcorn'
// defining it as a string as seen above is something that is only really needed if you will try to declare it again.
// Its always best to over define the types and not let it infer.
//one of the big places typescript shines is in catching errors.
// let myMeal = true
// myMeal.push('beef')
// ^^ notice the linting
// remember that TypeScript only matters when in development. Once we are done it will be transcribed/compiled into regular JavaScript
// Keep in mind, you cannot write typescript in node
var myTSFood = 'twizzlers';
//static typing 
var thisIsAnything;
thisIsAnything = 1;
thisIsAnything = 'david';
thisIsAnything = false;
// any is a great source of errors, so lets try to avoid this 
var turn, winner, tie, board;
// other way to do board is board: Array<number> but its not the best way for this situation
function init() {
    turn = 1;
    winner = false;
    tie = false;
    board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    console.log(turn);
}
init();
