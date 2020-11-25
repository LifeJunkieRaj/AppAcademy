function stringChanger(word, operation) {
    let newArr = []
    if(operation === 'capitalize'){
      return word[0].toUpperCase() + word.slice(1, word.length)
    } else if(operation === 'uppercase'){
        return word.toUpperCase()
    } else if(operation === 'double'){
      return word + word
    } else if(operation === 'reverse'){
        for(let i = word.length - 1; i >= 0; i--){
          newArr.push(word[i])
      }
    } else {
        return word
    }
    return newArr.join('')
  }
