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
// let turn, winner, tie, board
// other way to do board is board: Array<number> but its not the best way for this situation
// function init() {
//   turn = 1
//   winner = false 
//   tie = false
//   board = [0, 0, 0, 0, 0, 0, 0, 0, 0]
//   console.log(turn)
// }
// init()
// function addTwoNumber(numA: number, numB: number) {
//   return numA + numB
// }
//notice how the number is specified as what the function returns. Handy init?
// console.log(addTwoNumber(3, 4))
// you should always avoid "type any"
// function sayHi(name: string) {
//   console.log(`Hey ${name || 'stranger, whats your name?'}`)
// }
// sayHi()
// function divideByTwo(num: number): string {
//   return `${num} divided by two is ${num / 2}.`
// }
// const answer: string = divideByTwo(14)
// console.log(answer)
var firstMeal;
firstMeal = { dish: 'waffle', dessert: 'alot of syrup' };
// must define when getting the shape of it
var secondMeal;
// notice how its an error if youre missing something? Also tells you what you are missing
secondMeal = { dish: 'Hot Pocket', dessert: 'Cheesecake' };
var thirdMeal = {
    dish: 'Chicken Nuggies',
    dessert: 'tres leches'
};
//readonly prevents it from being changed in runtime. However this must be done in this way
var fourthMeal = {
    dish: 'tacos',
    dessert: 'candy'
};
console.log(fourthMeal.drink);
fourthMeal.drink = 'soda';
console.log(fourthMeal.drink);
