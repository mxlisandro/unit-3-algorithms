/*

In England the currency is made up of pound, £, and pence, p, and there are eight coins in general circulation:

1p piece
2p piece
5p piece
10p piece
20p piece
50p piece
1 euro (100p)
2 euro (200p)

It is possible to make £2 in the following way:

1 * £1 + 1 * 50p + 2 * 20p + 1 * 5p + 1 * 2p + 3 * 1p
How many different ways can £2 be made using any number of coins?

example usage of `makeChange`:

// aka, there's only one way to make 1p. that's with a single 1p piece
makeChange(1) === 1
// aka, there's only two ways to make 2p. that's with two, 1p pieces or with a single 2p piece
makeChange(2) === 2
*/


function coinSum(amt){
	var results = {};

	function partition(amt, coin){
		var args = Array.prototype.slice.call(arguments, 0, 2);

		if (coin === 0 || amt < 0){
			results[args] = 0;
			// return 0;
		} else if (amt <= 1){
			results[args] = 1;
			// return 1;
		} else if (results[args] === undefined){
			results[args] = partition(amt-coin, coin) + partition(amt, nextMaxCoin(amt, coin));
		}
		return results[args];

		// return partition(amt-coin, coin) + partition(amt, nextMaxCoin(amt, coin));
	}

	function nextMaxCoin(amt, max){
		if(amt >= 200 && max > 200){
			return 200;
		}
		if(amt >= 100 && max > 100){
			return 100;
		}
		if(amt >= 50 && max > 50){
			return 50;
		}
		if(amt >= 20 && max > 20){
			return 20;
		}
		if(amt >= 10 && max > 10){
			return 10;
		}
		if(amt >= 5 && max > 5){
			return 5;
		}
		if(amt >= 2 && max > 2){
			return 2;
		}
		if(amt >= 1 && max > 1){
			return 1;
		}
		return 0;
	}

	return partition(amt, nextMaxCoin(amt, 201));
}

