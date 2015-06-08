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
		if(arr1[i] < arr2[j]){
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

// function sort(items){

//     // Terminal case: 0 or 1 item arrays don't need sorting
//     if (items.length < 2) {
//         return items;
//     }

//     var middle = Math.floor(items.length / 2),
//         left    = items.slice(0, middle),
//         right   = items.slice(middle);

//     return merge(sort(left), sort(right));
// }

// function merge(left, right){
//     var result  = [],
//         il      = 0,
//         ir      = 0;

//     while (il < left.length && ir < right.length){
//         if (left[il] < right[ir]){
//             result.push(left[il++]);
//         } else {
//             result.push(right[ir++]);
//         }
//     }

//     return result.concat(left.slice(il)).concat(right.slice(ir));
// }

// function asort(a)
// {
//     var swapped;
//     do {
//         swapped = false;
//         for (var i=0; i < a.length-1; i++) {
//             if (a[i] > a[i+1]) {
//                 var temp = a[i];
//                 a[i] = a[i+1];
//                 a[i+1] = temp;
//                 swapped = true;
//             }
//         }
//     } while (swapped);
//     return a;
// }