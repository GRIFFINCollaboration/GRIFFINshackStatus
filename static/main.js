function helloWorld(){
	console.log([window.innerWidth, window.innerHeight]);
}

function renderRacks(){

	var width = 0.8*window.innerWidth,
		height = 0.8*window.innerHeight,
		grid = Math.min(width/65, height/65);

	rackImage = {};
	cells = {};

    ////////////////////////////
    //Kinetic.js setup
    ////////////////////////////
	rackImage.stage = new Kinetic.Stage({
            container: 'shackStatus',
            width: width,
            height: height
     });

	//make main layer
	rackImage.mainLayer = new Kinetic.Layer();
	rackImage.stage.add(rackImage.mainLayer);

	cells.rect = new Kinetic.Rect({
		x: 10*grid,
		y: 34*grid,
		width: 12*grid,
		height: 6*grid,
		fill: 'green',
		stroke: 'black',
		strokeWidth: 4
	});

	rackImage.mainLayer.add(cells.rect);

	rackImage.mainLayer.draw();
}