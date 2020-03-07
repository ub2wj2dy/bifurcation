const g = (r) => {
	let x = 0.3;
	const results = [];
	for(let i = 0 ; i < 1000; i++){
		x = r * x * (1-x);
		if(i > 980){
			results.push(x);
		}
	}
	return results;
}
const f = (x) => {
	const t = x / 200;
	const result = g(t);
	return result.map(v => 200 * v);
}

(() => {
	const canvas = document.getElementById('canvas');
	const container = document.getElementsByClassName('view')[0];
	let containerRect = container.getBoundingClientRect();
	canvas.width = containerRect.width;
	canvas.height = containerRect.height;

	const ctx = canvas.getContext('2d');

	ctx.lineWidth = 2;
	ctx.strokeStyle = `rgba(${84},${112},${255},${0.7})`;

	ctx.beginPath();
	ctx.moveTo(0, canvas.height/2);
	ctx.lineTo(canvas.width, canvas.height / 2);
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(canvas.width/2, 0);
	ctx.lineTo(canvas.width/2, canvas.height);
	ctx.stroke();

	ctx.lineWidth = 1;
	ctx.strokeStyle = `rgba(${84},${112},${255},${0.3})`;
	for(let i =-4; i < 5; i++){
		ctx.beginPath();
		ctx.moveTo(canvas.width/2 + i*200, 0);
		ctx.lineTo(canvas.width/2 + i*200, canvas.height);
		ctx.stroke();
	}

	for(let i =-4; i < 5; i++){
		ctx.beginPath();
		ctx.moveTo(canvas.width/2 + i*200, 0);
		ctx.lineTo(canvas.width/2 + i*200, canvas.height);
		ctx.stroke();
	}

	ctx.lineWidth = 1;
	ctx.strokeStyle = 'black';

	ctx.beginPath();
	ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';

	for(let x = 0; x < canvas.width; x = x + 0.01){
		const values = f(x - canvas.width/2)
			.map(v => canvas.height / 2 - v)
			.forEach(v => ctx.fillRect(x, v, 1, 1));
	}
	ctx.stroke();
})();