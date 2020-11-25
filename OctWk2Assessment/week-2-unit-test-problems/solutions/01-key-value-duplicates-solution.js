function keyValueDuplicates(obj) {
	let keys=Object.keys(obj);
	let newArr = []
	let values= Object.values(obj);
	for (let i= 0; i< values.length; i++){
		if (keys.includes(values[i])){
			newArr.push(values[i]);
		}
	}
	return newArr
}
