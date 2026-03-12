// 1
sentence = "  javascript — это просто!  "
console.log(sentence.trim()[0].toUpperCase() + sentence.trim().slice(1))
// 2
const name = "Майоров Максим"
const group = "ИСП-31"
const bal = "4.75"
console.log(`Студент ${name}, группа ${group}, Средний балл: ${bal}`)
// 3
data = "2025-03-15"
console.log(`${data.split("-")[2]}.${data.split("-")[1]}.${data.split("-")[0]}`)
// 4
strochka = "Node.js разработчик"
console.log(`Начинается: ${strochka.startsWith("Node")} Заканчивается: ${strochka.endsWith("разработчик")}`)
// 5  42 BRATUHA!
console.log("42".padStart(8,'0'))