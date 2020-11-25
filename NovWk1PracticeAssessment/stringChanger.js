function stringChanger(word, operation) {

    if(operation === 'capitalize'){
      return word[0].toUpperCase() + word.slice(1, word.length)
    } else if(operation === 'uppercase'){
        return word.toUpperCase()
    } else if(operation === 'double'){
      return word + word
    } else if(operation === 'reverse'){
        let reversedWord= ""
        for(let i = word.length - 1; i >= 0; i--){
          reversedWord+=word[i];
      }
      return reversedWord;
    } else if(operation === 'unknown'){
        return word
    }

  }
