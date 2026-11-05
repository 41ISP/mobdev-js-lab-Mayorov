// 1
const book = {
  title: "Мастер и Маргарита",
  author: "Булгаков М.А.",
  year: 1967,
  pages: 480,
  available: true,
  info()
  {
    return `«${this.title}», ${this.author}, ${this.year} г., ${this.pages} стр.`
  }
}
console.log(book.info())

// 2
const { title, author, rating = 0 } = book
console.log("Название:", title)
console.log("Автор:", author)
console.log("Рейтинг:", rating)

// 3
 const students =
 [
  { name: "Анна", grade: 4.8, passed: true },
  { name: "Борис", grade: 2.9, passed: false },
  { name: "Вера", grade: 3.5, passed: true },
  { name: "Григорий", grade: 4.1, passed: true },
  { name: "Дарья", grade: 2.5, passed: false },
]
const passedNames = students.filter(s => s.passed).map(s => s.name)
console.log("Сдали:", passedNames)

const topStudent = students.find(s => s.grade > 4.5)
console.log("Отличник:", topStudent)

const avgGrade = students.reduce((acc, s) => acc + s.grade, 0) / students.length
console.log("Средний балл группы:", avgGrade.toFixed(2))

// 4
function mergeUsers(user1, user2)
{
  return { ...user1, ...user2 }
}

const u1 = { name: "Иван", age: 20, city: "Казань" }
const u2 = { name: "Иван Петров", email: "ivan@mail.ru", city: "Москва" }
console.log(mergeUsers(u1, u2))

// 5
function countByField(arr, field)
{
  return arr.reduce((acc, item) => {
    const key = item[field];
    acc[key] = (acc[key] || 0) + 1
    return acc;
  }, {});
}
console.log(countByField(students, "passed"))