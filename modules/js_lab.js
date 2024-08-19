//==LAB1--class
// class Calculator {
//   value = 0
//   constructor(val) {
//     this.value = val
//   }
//   add(num){
//     return this.value += num
//   }
//   substract(num){
//     return this.value -= num
//   }
//   multiply(num){
//     return this.value *= num
//   }
//   divide(num){
//     return this.value /= num
//   }
//   show(){
//     console.log(`Value = ${this.value}`)
//   }
// }
// let calMe = new Calculator(10)
// console.log(typeof calMe)
// calMe.show()
// console.log(calMe.add(5))
// console.log(calMe.substract(4))
// console.log(calMe.multiply(3))
// console.log(calMe.divide(2))
// calMe.show()

//==LAB2--class
// class Sale{
//   constructor(_name = '', _amount = 0, _price = 0){
//     this.name = _name
//     this.amount = _amount
//     this.price = _price
//   }
//   calcPrice(){
//     console.log(this.amount * this.price)
//   }
// }
// class Beverage extends Sale{
//   constructor(_amount, _price){
//     super(_amount,_price)
//     this.amount = _amount
//     this.price = _price
//   }
// }
// let beverage = new Beverage(3,19)
// beverage.name = 'Pepsi'
// console.log(beverage.name)
// console.log(beverage.amount)
// console.log(beverage.price)
// beverage.calcPrice()

//==LAB1--StaticMethod
// let isArray = (input) => Array.isArray(input)
// console.log(isArray([]))
// console.log(isArray({}))

//==LAB1--Object, keys, values, entries
// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// };
// let res = Object.values(salaries).reduce((prev, curr) => prev + curr, 0)
// console.log(res)

//==LAB2--Object, keys, values, entries
// let checkEmptyObj = (obj) => Object.keys(obj).length == 0
// console.log(checkEmptyObj({ name: 'john'}))
// console.log(checkEmptyObj({}))

//==LAB1--Rest Spread Parameter
// let mult = (...num) => num.reduce((prev, curr) => prev * curr, 1)
// console.log(mult(1, 2))
// console.log(mult(1, 2, 3))
// console.log(mult(1, 2, 3, 4, 5))

//==LAB2--Rest Spread Parameter
// let filterOutOdd = (...num) => num.filter(item => item % 2 == 0)
// console.log(filterOutOdd(1, 2))
// console.log(filterOutOdd(1, 2, 3, 4))
// console.log(filterOutOdd(1, 2, 5, 6, 7, 8))

//==LAB3--Rest Spread Parameter
// let mergeObjects = (...obj) => obj.reduce((prev, curr) => {
//   Object.assign(prev, curr)
//   return prev
// }, {})
// let a = { a: 1, b: 2 }
// let b = { c: 3, d: 4 }
// let c = { name: 'john', id: 0 }
// console.log(mergeObjects(a, b))
// console.log(mergeObjects(a, b, c))

//==LAB4--Rest Spread Parameter
// const nums1 = [1, -2, 3, 4];
// const nums2 = [8, 3, -8, 1];
// let res = [5,...nums1,-6,-1,...nums2].reduce((prev,curr)=> prev+=curr,0)
// console.log(res)

//==LAB5--Rest Spread Parameter
// let arr = [1, 2, 3, 4, 5, 6]
// let thirdIndex = (arr) => {
//   let temp = [...arr]
//   temp[3] = temp[3]**2
//   return temp
// }
// console.log(thirdIndex(arr))

//==LAB6--Rest Spread Parameter
// let getMe = (fname, lname, ...hobby) =>{
//   return [fname,lname,...hobby,hobby.length]
// }
// console.log(getMe('john','junior','hobby1','hobby2','hobby3'))

//==LAB7--Rest Spread Parameter
// let doubleAndReturnArgs = (arr, ...nums) => {
//   return[...arr,...nums.map(item=>item*item)]
// }
// console.log(doubleAndReturnArgs([1,2,3],4,5,6))
// console.log(doubleAndReturnArgs([2,3],7,8,9))

//==LAB9--Rest Spread Parameter
// let cloneArray = (arr) => [...arr]
// a = [1,2,3]
// b = cloneArray(a)
// console.log(a)
// console.log(b)

//==LAB10--Rest Spread Parameter
// let cloneObj = (obj) => ({...obj})
// let a = {a:1,b:2,c:3}
// let b = cloneObj(a)
// console.log(b)

//==LAB11--Destructuring
//first = Maya
//seconcd = Marisa
//third = Chi

//==LAB12--Destructuring
//raindrops = 'Raindrops on roses'
//whiskers = 'whiskers on kittens
//...aFewOfMyFavoriteThings = ['Bright copper kettles', 'warm woolen mittens']

//==LAB13--Destructuring
//ans: [10, 30, 20]
//เนื่องจากให้ number[1] = numbers[2] และ numbers[2] = numbers[1]

//==LAB14--Destructuring
//numPlanets = 8
//yearNeptuneDiscovered = 1846

//==LAB15--Destructuring
//discoveryYears = [1846, 1659] เนื่องจากใช้ rest มารับค่า

//==LAB16--Destructuring
//* ได้ค่า return จาก function เป็น Your name is Alejandro and you like purple
//** ได้ค่า return จาก function เป็น Your name is Melissa and you like green || เพราะตั้งต่า default value ของ favoriteColor = 'green'
//*** ได้ค่า return จาก function เป็น Your name is undefined and you like green || เพราะไม่ได้ตั้งค่า default value ของ firstName ไว้

//==LAB17--Destructuring
// let guest = 'Jane';
// let admin = 'Pete';
// [guest, admin] = [admin, guest]
// console.log(guest, admin)

//==LAB18--Destructuring
// let userCheck = ({firstName: fName='', lastName: lName='', age}) =>{
//   if(age >18) console.log(`Hello, ${fName} ${lName}`)
//   else console.log("You do not allowed to use Destructuring")
// }
// let a = {firstName: 'a',age: 20,lastName: 'bbb'}
// let b = {fname: 'ggg', lname: 'ttt', age:40}
// userCheck(a)
// userCheck(b)

//==LAB19--Destructuring
// let user = {
//   name: 'John',
//   years: 27
// };
// let { name, years: age, isAdmin = false } = user
// console.log(name, age, isAdmin)

//==LAB21--Destructuring
// let arr = [1, [2, [[[3, 4], 5], 6]]];
// let [a, [b, [[[c, d], e], f]]] = arr
// console.log(a, b, c, d, e, f)

//==LAB22--Destructuring
// const obj = { prop: 5, prop2: 10 };
// let { prop: a, prop2: b } = obj
// console.log(a, b)

//==LAB23--Destructuring
//a,b = undefined เนื่องจาก syntax error ไม่สามารถประกาศ a,b ก่อน destructuring ได้

//==LAB24--Destructuring
//a,b = undefined

//==LAB25--Destructuring
// const q = { prop: 5, prop2: [10, 100] };
// let { prop: x, prop2: [, y] } = q
// console.log(x, y)

//==LAB26--Destructuring
//a,b = undefined
// const q = {
//   prop: 'Hello',
//   prop2: {
//     prop2: {
//       nested: ['a', 'b', 'c']
//     }
//   }
// };
// let {prop:x,prop2:{prop2:{nested:[,y]}}} = q
// console.log(x,y)

//==LAB27--Destructuring
// const names = [
//   { firstName: 'John', lastName: 'Doe' },
//   { firstName: 'Jack', lastName: 'Dann' },
//   { firstName: 'Joe', lastName: 'Dunne' }
// ];
// for(item of names){
//   let {firstName:f, lastName:l} = item
//   console.log(`${f} ${l}`)
// }

//==LAB28--Destructuring
// const users = [
//   { user: "Name1" },
//   { user: "Name2", age: 2 },
//   { user: "Name2" },
//   { user: "Name3", age: 4 }
// ];
// for (item of users) {
//   let { user, age = 'unknown' } = item
//   console.log(user, age)
// }
