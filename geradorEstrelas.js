function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

const STAR_COUNT = 30

let result = ""
for(let i = 0; i < STAR_COUNT; i++){
    result += `${randomNumber(-150, 100)}px ${randomNumber(-150, 100)}px #fff,`
}
console.log(result.substring(0, result.length - 1))
