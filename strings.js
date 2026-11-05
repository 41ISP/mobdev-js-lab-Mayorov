// 1
const sentence = "  javascript — это просто!  "
console.log(sentence.trim()[0].toUpperCase() + sentence.trim().slice(1))
// 2
const name = "Майоров Максим"
const group = "ИСП-31"
const bal = "4.75"
console.log(`Студент ${name}, группа ${group}, Средний балл: ${bal}`)
// 3
const data = "2025-03-15"
console.log(`${data.split("-")[2]}.${data.split("-")[1]}.${data.split("-")[0]}`)
// 4
const strochka = "Node.js разработчик"
console.log(`Начинается: ${strochka.startsWith("Node")} Заканчивается: ${strochka.endsWith("разработчик")}`)
// 5
const account = 42
console.log(String(account).padStart(8, "0"))