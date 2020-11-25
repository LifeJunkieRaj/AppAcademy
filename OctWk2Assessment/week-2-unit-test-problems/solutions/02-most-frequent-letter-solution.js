function mostFrequentLetter(string) {
	let letters_counts= {};
	for (let i=0 ; i< string.length; i++){
		let letter= string[i];
		let keys= Object.keys(letters_counts);
		if(keys.includes(letter)){
			// letter already in the object
			letters_counts[letter]= letters_counts[letter]+1;
		}
		else{
			// letter is not in the list yet
			letters_counts[letter]= 1;
		}
	}
	let max= 0;
	let max_letter='';
	for (let letter in letters_counts){
		if(max< letters_counts[letter]){
			max= letters_counts[letter];
			max_letter= letter;
		}
	}
	return max_letter;
}
console.log(mostFrequentLetter("banana") );
