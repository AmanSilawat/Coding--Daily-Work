// 184 ==>	Rearrange the Sentence
// 	Given a sentence with numbers representing a word's location embedded within each word, return the sorted sentence.
function rearrange(string) {
    return string
        .split(" ")
        .sort((a, b) => +a.match(/\d/g) - +b.match(/\d/g))
        .map(element => element.replace(/\d/g, ""))
        .join(" ")
        .trim()
}
// console.log(rearrange("is2 Thi1s T4est 3a")); "This is a Test"
// console.log(rearrange("4of Fo1r pe6ople g3ood th5e the2")); "For the good of the people"
// console.log(rearrange(" ")); ""



// 185 ==>	Headline Hash Tags
// 	Write a function that retrieves the top 3 longest words of a newspaper headline and transforms them into hashtags. If multiple words tie for the same length, retrieve the word that occurs first.
// 	If the title is less than 3 words, just order the words in the title by length in descending order (see example #4). Punctuation does not count towards a word's length.
function getHashTags(string) {
    return string
        .split(" ")
        .sort((a, b) => b.length - a.length)
        .slice(0, 3)
        .map(element=> `#${element.toLowerCase()}`)
}
console.log(getHashTags("How the Avocado Became the Fruit of the Global Trade")); // ["#avocado", "#became", "#global"]
console.log(getHashTags("Why You Will Probably Pay More for Your Christmas Tree This Year")); // ["#christmas", "#probably", "#will"]
console.log(getHashTags("Hey Parents, Surprise, Fruit Juice Is Not Fruit")); // ["#surprise", "#parents", "#fruit"]
console.log(getHashTags("Visualizing Science")); // ["#visualizing", "#science"]