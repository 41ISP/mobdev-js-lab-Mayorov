const mas = [4, 5, 3, 5, 2, 4, 5, 3]

const products =
[ 
    { name: "Ноутбук", price: 75000 }, 
    { name: "Мышь", price: 1500 }, 
    { name: "Монитор", price: 32000 }, 
    { name: "Клавиатура", price: 3500 }, 
    { name: "Наушники", price: 8000 }
]
// 1
const avg = mas.reduce((acc, curr) => acc + curr, 0) / mas.length
console.log("Ср.Балл", avg.toFixed(2))
// 2
const above3 = mas.filter(g => g > 3)
const labeled = above3.map(g => `Оценка: ${g}`)

console.log("Оценки выше 3:", above3)
console.log(labeled)
//3
const fruit = ["банан", "яблоко", "вишня", "абрикос", "груша"]
const sort = fruit.sort()
console.log(sort.join(", "))
//4
const P = products.filter(p => p.price < 10000)
const name = products.map(p => p.name)
const all = products.reduce((acc, p) => acc + p.price, 0)

console.log("Дешевле 10000:", P)
console.log("Названия:", name)
console.log("Общая стоимость:", all)
//5
const nums = [12, 45, 7, 33, 18]
console.log("Есть больше 40?", nums.some(n => n > 40))
console.log("Все больше 5?", nums.every(n => n > 5))