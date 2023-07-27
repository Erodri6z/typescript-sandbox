let food: string = 'Popcorn'

// defining it as a string as seen above is something that is only really needed if you will try to declare it again.
// Its always best to over define the types and not let it infer.

//one of the big places typescript shines is in catching errors.

let myMeal = true

myMeal.push('beef')

// notice the linting