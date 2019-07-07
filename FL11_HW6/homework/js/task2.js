let a=prompt(`Введите a`, ``);
let b=prompt(`Введите b`, ``);
let c=prompt(`Введите c`, ``);



if (+a<+b + +c & +b<+a + +c & +c<+b + +a) {
	if ((+a===+b || +b===+c || +c===+a) & (+a!==+b || +b!==+c || +c!==+a)) {
			alert(`Isosceles triangle`);
		} else if (+a===+b & +b===+c & +c===+a) {
			alert(`Eequivalent triangle`);
		} else {
			alert(`Normal triangle`);
		}
	} else {
	alert(`Triangle doesn’t exist`);
	}
