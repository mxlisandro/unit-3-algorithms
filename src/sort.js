
function sort(array){
	if(array.length < 2){
		return array;
	}
	var arr1 = array.slice(0, Math.floor(array.length/2));
	var arr2 = array.slice(Math.floor(array.length/2));
	return merge(sort(arr1), sort(arr2));
}

function merge(arr1, arr2){
	var results = [];
	for(var i = 0, j = 0; i < arr1.length && j < arr2.length;){
		if(arr1[i].toString() < arr2[j].toString()){
			results.push(arr1[i]);
			i++;
		} else {
			results.push(arr2[j]);
			j++;
		}
	}
	if(i === arr1.length) {
		return results.concat(arr2.slice(j));
	} else {
		return results.concat(arr1.slice(i));
	}
}