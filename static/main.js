function helloWorld(){
	console.log([window.innerWidth, window.innerHeight]);
}

function renderRacks(){

	var width = 0.8*window.innerWidth,
		height = 0.8*window.innerHeight,
		grid = Math.min(width/67, height/64);

	rackImage = {};
	cells = {};
	sensors = {}

    ///////////////////////////////////////////////////////////////////////////
    //Kinetic.js setup
    ///////////////////////////////////////////////////////////////////////////
	rackImage.stage = new Kinetic.Stage({
            container: 'shackStatus',
            width: width,
            height: height
     });

	///////////////////////////////////////////////////////////////////////////
	//make main layer
    ///////////////////////////////////////////////////////////////////////////
	rackImage.mainLayer = new Kinetic.Layer();
	rackImage.stage.add(rackImage.mainLayer);

    ///////////////////////////////////////////////////////////////////////////
	//This sets up the racks
    ///////////////////////////////////////////////////////////////////////////
	cells.rack1 = new Kinetic.Rect({
		x: 33*grid,
		y: 4*grid,
		width: 20*grid,
		height: 56*grid,
		fill: 'white',
		stroke: 'black',
		strokeWidth: 2
	});

	cells.rack2 = new Kinetic.Rect({
		x: 53*grid,
		y: 4*grid,
		width: 20*grid,
		height: 56*grid,
		fill: 'white',
		stroke: 'black',
		strokeWidth: 2
	});


	cells.rack3 = new Kinetic.Rect({
		x: 73*grid,
		y: 4*grid,
		width: 20*grid,
		height: 56*grid,
		fill: 'white',
		stroke: 'black',
		strokeWidth: 2
	});


	cells.rack4 = new Kinetic.Rect({
		x: 93*grid,
		y: 4*grid,
		width: 20*grid,
		height: 56*grid,
		fill: 'white',
		stroke: 'black',
		strokeWidth: 2
	});


	cells.rack5 = new Kinetic.Rect({
		x: 113*grid,
		y: 4*grid,
		width: 20*grid,
		height: 56*grid,
		fill: 'white',
		stroke: 'black',
		strokeWidth: 2
	});

    ///////////////////////////////////////////////////////////////////////////
	//Adding temperature sensors
    ///////////////////////////////////////////////////////////////////////////

	cells.sensor1 = new Kinetic.Rect({
		x: 35*grid,
		y: 2*grid,
		width: 16*grid,
		height: 2*grid,
		fill: 'gray',
		stroke: 'black',
		strokeWidth: 2
	})

		cells.sensor2 = new Kinetic.Rect({
		x: 55*grid,
		y: 2*grid,
		width: 16*grid,
		height: 2*grid,
		fill: 'gray',
		stroke: 'black',
		strokeWidth: 2
	})

	cells.sensor3 = new Kinetic.Rect({
		x: 75*grid,
		y: 2*grid,
		width: 16*grid,
		height: 2*grid,
		fill: 'gray',
		stroke: 'black',
		strokeWidth: 2
	})

	cells.sensor4 = new Kinetic.Rect({
		x: 95*grid,
		y: 2*grid,
		width: 16*grid,
		height: 2*grid,
		fill: 'gray',
		stroke: 'black',
		strokeWidth: 2
	})

		cells.sensor5 = new Kinetic.Rect({
		x: 115*grid,
		y: 2*grid,
		width: 16*grid,
		height: 2*grid,
		fill: 'gray',
		stroke: 'black',
		strokeWidth: 2
	})

		cells.sensor6 = new Kinetic.Rect({
		x: 35*grid,
		y: 60*grid,
		width: 16*grid,
		height: 2*grid,
		fill: 'gray',
		stroke: 'black',
		strokeWidth: 2
	})

		cells.sensor7 = new Kinetic.Rect({
		x: 55*grid,
		y: 60*grid,
		width: 16*grid,
		height: 2*grid,
		fill: 'gray',
		stroke: 'black',
		strokeWidth: 2
	})
		cells.sensor8 = new Kinetic.Rect({
		x: 75*grid,
		y: 60*grid,
		width: 16*grid,
		height: 2*grid,
		fill: 'gray',
		stroke: 'black',
		strokeWidth: 2
	})
		cells.sensor9 = new Kinetic.Rect({
		x: 95*grid,
		y: 60*grid,
		width: 16*grid,
		height: 2*grid,
		fill: 'gray',
		stroke: 'black',
		strokeWidth: 2
	})

		cells.sensor10 = new Kinetic.Rect({
		x: 115*grid,
		y: 60*grid,
		width: 16*grid,
		height: 2*grid,
		fill: 'gray',
		stroke: 'black',
		strokeWidth: 2
	})

	rackImage.mainLayer.add(cells.rack1);
	rackImage.mainLayer.add(cells.rack2);
	rackImage.mainLayer.add(cells.rack3);
	rackImage.mainLayer.add(cells.rack4);
	rackImage.mainLayer.add(cells.rack5);

	rackImage.mainLayer.add(cells.sensor1);
	rackImage.mainLayer.add(cells.sensor2);
	rackImage.mainLayer.add(cells.sensor3);
	rackImage.mainLayer.add(cells.sensor4);
	rackImage.mainLayer.add(cells.sensor5);
	rackImage.mainLayer.add(cells.sensor6);
	rackImage.mainLayer.add(cells.sensor7);
	rackImage.mainLayer.add(cells.sensor8);
	rackImage.mainLayer.add(cells.sensor9);
	rackImage.mainLayer.add(cells.sensor10);

	rackImage.mainLayer.draw();
}