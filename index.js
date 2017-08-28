function theBeatlesPlay(artists, instruments){
  let new_array = []
  for (let i = 0; i < artists.length; i++){
    new_array[i] = `${artists[i]} plays ${instruments[i]}`
  }
  return new_array
}

function johnLennonFacts(factsArray){
  let i = 0
  let newFactsArray = []
  while (factsArray.length > i){
    newFactsArray.push(`${factsArray[i]}!!!`)
    i++
  }
  return newFactsArray
}

function iLoveTheBeatles(number){
  let beatlesArray = []
  do {
    beatlesArray.push("I love the Beatles!")
    ++number
  } while (number < 15);
  return beatlesArray
}
