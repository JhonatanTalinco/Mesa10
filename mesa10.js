//1
let numbers =[22, 33, 54, 66, 72]
console.log(numbers[numbers.length]); //undefined

//2
let grupoDeAmigos = [ ["Harry", "Ron", "Hermione"], ["Spiderman", "Hulk", "Ironman"], ["Penélope Glamour", "Pierre Nodoyuna","Patán"] ]
console.log(grupoDeAmigos[1][0]) //Spiderman

//3
let str = "uma string qualquer"
let grupoDeAmigos2 = [ [45, 89, 0], ["Digital", "House", true], ["string", "123","false", 54, true, str] ]
console.log(grupoDeAmigos2[2][grupoDeAmigos2[2].length - 1])//uma string qualquer

//Array invertido
//1
const letters = ["A", "B", "C", "D"]

const imprimirInverso = (array) => {
  for (let i = array.length - 1; i >= 0; i --) {
    console.log(array[i])
  }
}

imprimirInverso(letters)

//2
const inverter = (array) => {
  let newArray = []
  for (let i = array.length - 1; i >= 0; i --) {
    newArray.push(array[i])
  }
  return newArray
}

console.log(inverter(letters))

//somarArray()
const somarArray = (array) => {
  let sum = 0
  for (let i = 0; i < array.length; i ++) {
    sum += array[i]
  }
  return sum
}

console.log(somarArray(numbers))

//join()
const join = (array) => {
  let str = ""
  for (let i = 0; i < array.length; i ++) {
    str += array[i]
  }
  return str
}

console.log(join(letters))

//coleção de filmes
const lista1 = ["star wars", "matrix",  "mr. robot", "o preço do amanhã",  "a vida é bela"]
const upperCase = (array) => {
  let newArray = []
  array.map((item) => {
    newArray.push(item.toUpperCase())
  })
  return newArray
}

console.log(upperCase(lista1))

const lista2 = ["Toy Story", "Procurando Nemo", "Kung-fu Panda", "Wally", "Fortnite"]

const concat = (array1, array2) => {
  let newArray = array1
  let removeItem = array2.pop()

  array2.forEach((item) => {
    newArray.push(item)
  })

  console.log('removed item: ', removeItem)

  return newArray
}

console.log(concat(lista1, lista2))

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

const sameScore = (array1, array2) => {
  if (array1.length != array2.length){
    return false;
} else {
    for (let i = 0; i < array1.length;i++)
    if (array1[i] != array2[i]) {
      return "São diferentes";
    }
     return "São iguais";
} 
}

console.log(sameScore(asiaScores, euroScores))