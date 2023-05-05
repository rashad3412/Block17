// Prompt 1:
// Clean the coffee_data file:

// Checklist:
// a. All prices should be numbers.
// b. All items should be strings.
// c. Objects and properties should have commas seperating them.
// d. Connect the coffee_data.js file to the index.js file.

// .forEach()
// .sort()
// .map()
// .reduce()
// .filter()


//** First we will clean the numbers that are not strings in n the coffeeMenu using forEach()*/



const coffeeMenu = [
    {
        name: "cappuccino",
        price: 8,
        seasonal: false,
    },
    {
        name: "espresso",
        price: 5,
        seasonal: false,
    },
    {
        name: "latte",
        price: 5,
        seasonal: false,
    },
    {
        name: "affogato",
        price: 9,
        seasonal: true,
    }, 
    {
        name: "macchiato",
        price: 6,
        seasonal: false,
    },
    {
        name: "americano",
        price: 7,
        seasonal: false,
    },
    {
        name: "iced coffee",
        price: 6,
        seasonal: false,
    },
    {
        name: "frappe",
        price: 8,
        seasonal: false,
    },
    {
        name: "cuban espresso",
        price: 10,
        seasonal: true,
    },
]

module.exports = coffeeMenu


//** First we clean up the array of objects and we convert the all numbers in to int data type.*/

function price(){
   for (let i = 0; i < coffeeMenu.length; i++){
        if (coffeeMenu[i].price)
         console.log(Number(coffeeMenu[i].price)) 
   }

}
//** We will use an empty array to iterate over the coffeeMenu and store the names of items in NEW arr array*/

function items(arr){
    arr = []
   for (let i = 0; i < coffeeMenu.length; i++){
      if(coffeeMenu)
      arr.push(coffeeMenu[i].name)

}return arr

}
console.table(items(coffeeMenu))

//** Next we will create an empty array of price_arr and store the prices that are 5 dollars and below in new price_arr */

function price(price_arr){
    price_arr = []
    for (let i = 0; i < coffeeMenu.length; i++){
       if (coffeeMenu[i].price <= 5)
       price_arr.push(coffeeMenu[i].price)

    }return price_arr
}

console.table(price(coffeeMenu))

//** Next we will create a funtion using an array of the prices that are even numbers using modulo % operand */

function evenNum(num){
    num = []

    for (let i = 0; i < coffeeMenu.length; i++){
        if (coffeeMenu[i].price % 2 === 0)
        num.push(coffeeMenu[i].price)
    }return num
    
    }

    console.table(evenNum(coffeeMenu))

//** Using Map function we create two varibles one called prices and other called total */
//** 1. prices variable stores coffeeMenu array and iterate over the array using map function */
//** - after map function iterates over the coffeeMenu array it looks for each price in the array */
//** using the => is letting javascript know that prices is a function and can be used again */
//** 2. We than store prices in total varible and use prices function to use the reduce property */
//** - after reduce property is used we have two arguments accumulate and current value  */
//** - than we use the => to let javascript know that total is a function and we than add acc + curr */
//** finally we console.log the total prices of each item in coffeeMenu and we get our results. */
 console.table(coffeeMenu)

const prices = coffeeMenu.map((coffeeMenu) => coffeeMenu.price)
const total = prices.reduce((acc , curr) => acc + curr)

console.log("Total prices of each:",total)

//** Using the for each method print out each drink that is seasonal */

coffeeMenu.forEach((coffeeMenu) =>{
    drinks = []
    if (coffeeMenu.seasonal === true){
        drinks.push(coffeeMenu.seasonal,)
        console.table(coffeeMenu)
    }
})

module.exports = coffeeMenu;
