var r = require('./gen-password.js')

console.log(r.random_words(4, r.wordlist()).join(" "))
