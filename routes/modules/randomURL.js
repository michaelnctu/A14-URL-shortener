
//產生密碼

function randomURL() {
  // define things user might want
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const upperCaseLetters = lowerCaseLetters.toUpperCase()
  const numbers = '1234567890'

  let collection = []

  collection = collection.concat(lowerCaseLetters.split(''))  //小寫
  collection = collection.concat(upperCaseLetters.split('')) //大寫
  collection = collection.concat(numbers.split('')) // number放入 陣列如此 [a, n, c] 皆為string

  let password = ''
  for (let i = 0; i < 5; i++) {
    password += sample(collection)

  }

  // return the generated password
  return password

}

// define sample function to randomly return a item in an array
function sample(array) {
  const index = Math.floor(Math.random() * array.length)
  return array[index]
}

// export generatePassword function for other files to use
module.exports = randomURL