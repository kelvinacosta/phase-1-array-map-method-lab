const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return tutorials.map(tutorials => {
    const splitWords = tutorials.split(' ')
    const wordCapitalized = splitWords.map(firstChart =>{
      return firstChart[0].toLocaleUpperCase() + firstChart.substring(1)
    })
    return wordCapitalized.join(' ')
  })
}
