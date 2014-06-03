function helloWorld(){
	console.log([window.innerWidth, window.innerHeight]);
}

function renderRacks(){

	var width = 0.8*window.innerWidth,
		height = 0.8*window.innerHeight,
		grid = Math.min(width/67, height/64);

		rackImage = {};
		cells = {};
		sensors = {};
		numbers = {};
		fixedlabels = {};
		cableman = {};
		hv = {};
		nim = {};
		vme = {};
		dsa = {};
		net = {};
		comp = {};

    ///////////////////////////////////////////////////////////////////////////
    // Kinetic.js setup
    ///////////////////////////////////////////////////////////////////////////

	rackImage.stage = new Kinetic.Stage({
            container: 'shackStatus',
            width: width,
            height: height
     });

	///////////////////////////////////////////////////////////////////////////
	// Make main layer
    ///////////////////////////////////////////////////////////////////////////

	rackImage.mainLayer = new Kinetic.Layer();
	rackImage.stage.add(rackImage.mainLayer);

    ///////////////////////////////////////////////////////////////////////////
	// This sets up the racks
    ///////////////////////////////////////////////////////////////////////////

	cells.rack1 = new Kinetic.Rect({
		x: 33*grid,
		y: 3*grid,
		width: 20*grid,
		height: 56*grid,
		fill: 'white',
		stroke: 'black',
		strokeWidth: 2
	});

	cells.rack2 = new Kinetic.Rect({
		x: 53*grid,
		y: 3*grid,
		width: 20*grid,
		height: 56*grid,
		fill: 'white',
		stroke: 'black',
		strokeWidth: 2
	});


	cells.rack3 = new Kinetic.Rect({
		x: 73*grid,
		y: 3*grid,
		width: 20*grid,
		height: 56*grid,
		fill: 'white',
		stroke: 'black',
		strokeWidth: 2
	});


	cells.rack4 = new Kinetic.Rect({
		x: 93*grid,
		y: 3*grid,
		width: 20*grid,
		height: 56*grid,
		fill: 'white',
		stroke: 'black',
		strokeWidth: 2
	});


	cells.rack5 = new Kinetic.Rect({
		x: 113*grid,
		y: 3*grid,
		width: 20*grid,
		height: 56*grid,
		fill: 'white',
		stroke: 'black',
		strokeWidth: 2
	});

    ///////////////////////////////////////////////////////////////////////////
	// Adding temperature sensors
    ///////////////////////////////////////////////////////////////////////////

	sensors.sensor1 = new Kinetic.Rect({
		x: 35*grid,
		y: 1*grid,
		width: 16*grid,
		height: 2*grid,
		fill: 'gray',
		stroke: 'black',
		strokeWidth: 2
	})

	sensors.sensor2 = new Kinetic.Rect({
		x: 55*grid,
		y: 1*grid,
		width: 16*grid,
		height: 2*grid,
		fill: 'gray',
		stroke: 'black',
		strokeWidth: 2
	})

	sensors.sensor3 = new Kinetic.Rect({
		x: 75*grid,
		y: 1*grid,
		width: 16*grid,
		height: 2*grid,
		fill: 'gray',
		stroke: 'black',
		strokeWidth: 2
	})

	sensors.sensor4 = new Kinetic.Rect({
		x: 95*grid,
		y: 1*grid,
		width: 16*grid,
		height: 2*grid,
		fill: 'gray',
		stroke: 'black',
		strokeWidth: 2
	})

	sensors.sensor5 = new Kinetic.Rect({
		x: 115*grid,
		y: 1*grid,
		width: 16*grid,
		height: 2*grid,
		fill: 'gray',
		stroke: 'black',
		strokeWidth: 2
	})

	sensors.sensor6 = new Kinetic.Rect({
		x: 35*grid,
		y: 59*grid,
		width: 16*grid,
		height: 2*grid,
		fill: 'gray',
		stroke: 'black',
		strokeWidth: 2
	})

	sensors.sensor7 = new Kinetic.Rect({
		x: 55*grid,
		y: 59*grid,
		width: 16*grid,
		height: 2*grid,
		fill: 'gray',
		stroke: 'black',
		strokeWidth: 2
	})
	sensors.sensor8 = new Kinetic.Rect({
		x: 75*grid,
		y: 59*grid,
		width: 16*grid,
		height: 2*grid,
		fill: 'gray',
		stroke: 'black',
		strokeWidth: 2
	})
	sensors.sensor9 = new Kinetic.Rect({
		x: 95*grid,
		y: 59*grid,
		width: 16*grid,
		height: 2*grid,
		fill: 'gray',
		stroke: 'black',
		strokeWidth: 2
	})

	sensors.sensor10 = new Kinetic.Rect({
		x: 115*grid,
		y: 59*grid,
		width: 16*grid,
		height: 2*grid,
		fill: 'gray',
		stroke: 'black',
		strokeWidth: 2
	})

	///////////////////////////////////////////////////////////////////////////
	// Blank cable management sections are added
	///////////////////////////////////////////////////////////////////////////	

	cableman.rack11 = new Kinetic.Rect({
		x: 33*grid,
		y: 18*grid,
		width: 20*grid,
		height: 1*grid,
		fill: 'rosybrown',
		stroke: 'black',
		strokeWidth: 2
	})

	cableman.rack12 = new Kinetic.Rect({
		x: 33*grid,
		y: 27*grid,
		width: 20*grid,
		height: 1*grid,
		fill: 'rosybrown',
		stroke: 'black',
		strokeWidth: 2
	})

	cableman.rack21 = new Kinetic.Rect({
		x: 53*grid,
		y: 18*grid,
		width: 20*grid,
		height: 1*grid,
		fill: 'rosybrown',
		stroke: 'black',
		strokeWidth: 2
	})

	cableman.rack22 = new Kinetic.Rect({
		x: 53*grid,
		y: 27*grid,
		width: 20*grid,
		height: 1*grid,
		fill: 'rosybrown',
		stroke: 'black',
		strokeWidth: 2
	})

	cableman.rack31 = new Kinetic.Rect({
		x: 73*grid,
		y: 18*grid,
		width: 20*grid,
		height: 1*grid,
		fill: 'rosybrown',
		stroke: 'black',
		strokeWidth: 2
	})	

	cableman.rack32 = new Kinetic.Rect({
		x: 73*grid,
		y: 27*grid,
		width: 20*grid,
		height: 1*grid,
		fill: 'rosybrown',
		stroke: 'black',
		strokeWidth: 2
	})

	cableman.rack33 = new Kinetic.Rect({
		x: 73*grid,
		y: 29*grid,
		width: 20*grid,
		height: 1*grid,
		fill: 'rosybrown',
		stroke: 'black',
		strokeWidth: 2
	})

	cableman.rack34 = new Kinetic.Rect({
		x: 73*grid,
		y: 31*grid,
		width: 20*grid,
		height: 1*grid,
		fill: 'rosybrown',
		stroke: 'black',
		strokeWidth: 2
	})

	cableman.rack35 = new Kinetic.Rect({
		x: 73*grid,
		y: 40*grid,
		width: 20*grid,
		height: 1*grid,
		fill: 'rosybrown',
		stroke: 'black',
		strokeWidth: 2
	})

	cableman.rack36 = new Kinetic.Rect({
		x: 73*grid,
		y: 42*grid,
		width: 20*grid,
		height: 1*grid,
		fill: 'rosybrown',
		stroke: 'black',
		strokeWidth: 2
	})

	cableman.rack37 = new Kinetic.Rect({
		x: 73*grid,
		y: 51*grid,
		width: 20*grid,
		height: 1*grid,
		fill: 'rosybrown',
		stroke: 'black',
		strokeWidth: 2
	})

	cableman.rack41 = new Kinetic.Rect({
		x: 93*grid,
		y: 18*grid,
		width: 20*grid,
		height: 1*grid,
		fill: 'rosybrown',
		stroke: 'black',
		strokeWidth: 2
	})

	cableman.rack42 = new Kinetic.Rect({
		x: 93*grid,
		y: 27*grid,
		width: 20*grid,
		height: 1*grid,
		fill: 'rosybrown',
		stroke: 'black',
		strokeWidth: 2
	})

	cableman.rack43 = new Kinetic.Rect({
		x: 93*grid,
		y: 31*grid,
		width: 20*grid,
		height: 1*grid,
		fill: 'rosybrown',
		stroke: 'black',
		strokeWidth: 2
	})

	cableman.rack44 = new Kinetic.Rect({
		x: 93*grid,
		y: 40*grid,
		width: 20*grid,
		height: 1*grid,
		fill: 'rosybrown',
		stroke: 'black',
		strokeWidth: 2
	})

	///////////////////////////////////////////////////////////////////////////
	// HV crates are included next
	///////////////////////////////////////////////////////////////////////////	

	hv.hv1 = new Kinetic.Rect({
		x: 53*grid,
		y: 3*grid,
		width: 20*grid,
		height: 8*grid,
		fill: 'lightblue',
		stroke: 'black',
		strokeWidth: 2
	})

	hv.hv2 = new Kinetic.Rect({
		x: 93*grid,
		y: 3*grid,
		width: 20*grid,
		height: 8*grid,
		fill: 'lightblue',
		stroke: 'black',
		strokeWidth: 2
	})

	hv.hv3 = new Kinetic.Rect({
		x: 113*grid,
		y: 3*grid,
		width: 20*grid,
		height: 8*grid,
		fill: 'lightblue',
		stroke: 'black',
		strokeWidth: 2
	})

	///////////////////////////////////////////////////////////////////////////
	// NIM crates are included next
	///////////////////////////////////////////////////////////////////////////	

	nim.nim1 = new Kinetic.Rect({
		x: 33*grid,
		y: 12*grid,
		width: 20*grid,
		height: 5*grid,
		fill: 'lightgreen',
		stroke: 'black',
		strokeWidth: 2
	})

	nim.nim2 = new Kinetic.Rect({
		x: 53*grid,
		y: 12*grid,
		width: 20*grid,
		height: 5*grid,
		fill: 'lightgreen',
		stroke: 'black',
		strokeWidth: 2
	})

	nim.nim3 = new Kinetic.Rect({
		x: 73*grid,
		y: 12*grid,
		width: 20*grid,
		height: 5*grid,
		fill: 'lightgreen',
		stroke: 'black',
		strokeWidth: 2
	})

	nim.nim4 = new Kinetic.Rect({
		x: 93*grid,
		y: 12*grid,
		width: 20*grid,
		height: 5*grid,
		fill: 'lightgreen',
		stroke: 'black',
		strokeWidth: 2
	})

	nim.nim5 = new Kinetic.Rect({
		x: 113*grid,
		y: 12*grid,
		width: 20*grid,
		height: 5*grid,
		fill: 'lightgreen',
		stroke: 'black',
		strokeWidth: 2
	})

	nim.nim6 = new Kinetic.Rect({
		x: 93*grid,
		y: 46*grid,
		width: 20*grid,
		height: 5*grid,
		fill: 'lightgreen',
		stroke: 'black',
		strokeWidth: 2
	})

	nim.nim7 = new Kinetic.Rect({
		x: 93*grid,
		y: 54*grid,
		width: 20*grid,
		height: 5*grid,
		fill: 'lightgreen',
		stroke: 'black',
		strokeWidth: 2
	})

	///////////////////////////////////////////////////////////////////////////
	// VME crates are included next
	///////////////////////////////////////////////////////////////////////////	

	vme.vme1 = new Kinetic.Rect({
		x: 33*grid,
		y: 19*grid,
		width: 20*grid,
		height: 8*grid,
		fill: 'orchid',
		stroke: 'black',
		strokeWidth: 2
	})

	vme.vme2 = new Kinetic.Rect({
		x: 53*grid,
		y: 19*grid,
		width: 20*grid,
		height: 8*grid,
		fill: 'orchid',
		stroke: 'black',
		strokeWidth: 2
	})

	vme.vme3 = new Kinetic.Rect({
		x: 73*grid,
		y: 19*grid,
		width: 20*grid,
		height: 8*grid,
		fill: 'orchid',
		stroke: 'black',
		strokeWidth: 2
	})

	vme.vme4 = new Kinetic.Rect({
		x: 93*grid,
		y: 19*grid,
		width: 20*grid,
		height: 8*grid,
		fill: 'orchid',
		stroke: 'black',
		strokeWidth: 2
	})

	vme.vme5 = new Kinetic.Rect({
		x: 73*grid,
		y: 32*grid,
		width: 20*grid,
		height: 8*grid,
		fill: 'orchid',
		stroke: 'black',
		strokeWidth: 2
	})

	vme.vme6 = new Kinetic.Rect({
		x: 93*grid,
		y: 32*grid,
		width: 20*grid,
		height: 8*grid,
		fill: 'orchid',
		stroke: 'black',
		strokeWidth: 2
	})

	vme.vme7 = new Kinetic.Rect({
		x: 73*grid,
		y: 43*grid,
		width: 20*grid,
		height: 8*grid,
		fill: 'orchid',
		stroke: 'black',
		strokeWidth: 2
	})

	///////////////////////////////////////////////////////////////////////////
	// Data storage arrays are added
	///////////////////////////////////////////////////////////////////////////

	dsa.dsa1 = new Kinetic.Rect({
		x: 33*grid,
		y: 46*grid,
		width: 20*grid,
		height: 6*grid,
		fill: 'salmon',
		stroke: 'black',
		strokeWidth: 2
	})	

	dsa.dsa2 = new Kinetic.Rect({
		x: 33*grid,
		y: 53*grid,
		width: 20*grid,
		height: 6*grid,
		fill: 'salmon',
		stroke: 'black',
		strokeWidth: 2
	})	

	dsa.dsa3 = new Kinetic.Rect({
		x: 53*grid,
		y: 53*grid,
		width: 20*grid,
		height: 6*grid,
		fill: 'salmon',
		stroke: 'black',
		strokeWidth: 2
	})	

	dsa.dsa4 = new Kinetic.Rect({
		x: 73*grid,
		y: 53*grid,
		width: 20*grid,
		height: 6*grid,
		fill: 'salmon',
		stroke: 'black',
		strokeWidth: 2
	})	

	///////////////////////////////////////////////////////////////////////////
	// The network switches are added
	///////////////////////////////////////////////////////////////////////////

	net.net1 = new Kinetic.Rect({
		x: 53*grid,
		y: 52*grid,
		width: 20*grid,
		height: 1*grid,
		fill: 'peru',
		stroke: 'black',
		strokeWidth: 2
	})	

	net.net2 = new Kinetic.Rect({
		x: 73*grid,
		y: 52*grid,
		width: 20*grid,
		height: 1*grid,
		fill: 'peru',
		stroke: 'black',
		strokeWidth: 2
	})	

	net.net3 = new Kinetic.Rect({
		x: 93*grid,
		y: 52*grid,
		width: 20*grid,
		height: 1*grid,
		fill: 'peru',
		stroke: 'black',
		strokeWidth: 2
	})	

	net.net4 = new Kinetic.Rect({
		x: 113*grid,
		y: 52*grid,
		width: 20*grid,
		height: 1*grid,
		fill: 'peru',
		stroke: 'black',
		strokeWidth: 2
	})	

	///////////////////////////////////////////////////////////////////////////////
	// The computers are added
	///////////////////////////////////////////////////////////////////////////////

	comp.comp1 = new Kinetic.Rect({
		x: 33*grid,
		y: 39*grid,
		width: 20*grid,
		height: 2*grid,
		fill: 'green',
		stroke: 'black',
		strokeWidth: 2
	})	

	comp.comp2 = new Kinetic.Rect({
		x: 33*grid,
		y: 42*grid,
		width: 20*grid,
		height: 2*grid,
		fill: 'green',
		stroke: 'black',
		strokeWidth: 2
	})	

	///////////////////////////////////////////////////////////////////////////
	// The racks are numbered as reference points
	///////////////////////////////////////////////////////////////////////////

		numbers.number1 = new Kinetic.Rect({
		x: 39*grid,
		y: 61.5*grid,
		width: 8*grid,
		height: 2*grid,
		fill: 'silver',
		stroke: 'white',
		strokeWidth: 2
	})

		numbers.number2 = new Kinetic.Rect({
		x: 59*grid,
		y: 61.5*grid,
		width: 8*grid,
		height: 2*grid,
		fill: 'silver',
		stroke: 'white',
		strokeWidth: 2
	})

		numbers.number3 = new Kinetic.Rect({
		x: 79*grid,
		y: 61.5*grid,
		width: 8*grid,
		height: 2*grid,
		fill: 'silver',
		stroke: 'white',
		strokeWidth: 2
	})

		numbers.number4 = new Kinetic.Rect({
		x: 99*grid,
		y: 61.5*grid,
		width: 8*grid,
		height: 2*grid,
		fill: 'silver',
		stroke: 'white',
		strokeWidth: 2
	})

		numbers.number5 = new Kinetic.Rect({
		x: 119*grid,
		y: 61.5*grid,
		width: 8*grid,
		height: 2*grid,
		fill: 'silver',
		stroke: 'white',
		strokeWidth: 2
	})

	rackImage.mainLayer.add(cells.rack1);
	rackImage.mainLayer.add(cells.rack2);
	rackImage.mainLayer.add(cells.rack3);
	rackImage.mainLayer.add(cells.rack4);
	rackImage.mainLayer.add(cells.rack5);

	rackImage.mainLayer.add(sensors.sensor1);
	rackImage.mainLayer.add(sensors.sensor2);
	rackImage.mainLayer.add(sensors.sensor3);
	rackImage.mainLayer.add(sensors.sensor4);
	rackImage.mainLayer.add(sensors.sensor5);
	rackImage.mainLayer.add(sensors.sensor6);
	rackImage.mainLayer.add(sensors.sensor7);
	rackImage.mainLayer.add(sensors.sensor8);
	rackImage.mainLayer.add(sensors.sensor9);
	rackImage.mainLayer.add(sensors.sensor10);

	rackImage.mainLayer.add(cableman.rack11);
	rackImage.mainLayer.add(cableman.rack12);
	rackImage.mainLayer.add(cableman.rack21);
	rackImage.mainLayer.add(cableman.rack22);
	rackImage.mainLayer.add(cableman.rack31);
	rackImage.mainLayer.add(cableman.rack32);
	rackImage.mainLayer.add(cableman.rack33);
	rackImage.mainLayer.add(cableman.rack34);
	rackImage.mainLayer.add(cableman.rack35);
	rackImage.mainLayer.add(cableman.rack36);
	rackImage.mainLayer.add(cableman.rack37);
	rackImage.mainLayer.add(cableman.rack41);
	rackImage.mainLayer.add(cableman.rack42);
	rackImage.mainLayer.add(cableman.rack43);
	rackImage.mainLayer.add(cableman.rack44);

	rackImage.mainLayer.add(hv.hv1);
	rackImage.mainLayer.add(hv.hv2);
	rackImage.mainLayer.add(hv.hv3);

	rackImage.mainLayer.add(nim.nim1);
	rackImage.mainLayer.add(nim.nim2);
	rackImage.mainLayer.add(nim.nim3);
	rackImage.mainLayer.add(nim.nim4);
	rackImage.mainLayer.add(nim.nim5);
	rackImage.mainLayer.add(nim.nim6);
	rackImage.mainLayer.add(nim.nim7);

	rackImage.mainLayer.add(vme.vme1);
	rackImage.mainLayer.add(vme.vme2);
	rackImage.mainLayer.add(vme.vme3);
	rackImage.mainLayer.add(vme.vme4);
	rackImage.mainLayer.add(vme.vme5);
	rackImage.mainLayer.add(vme.vme6);
	rackImage.mainLayer.add(vme.vme7);

	rackImage.mainLayer.add(dsa.dsa1);
	rackImage.mainLayer.add(dsa.dsa2);
	rackImage.mainLayer.add(dsa.dsa3);
	rackImage.mainLayer.add(dsa.dsa4);

	rackImage.mainLayer.add(net.net1);
	rackImage.mainLayer.add(net.net2);
	rackImage.mainLayer.add(net.net3);
	rackImage.mainLayer.add(net.net4);

	rackImage.mainLayer.add(comp.comp1);
	rackImage.mainLayer.add(comp.comp2);

	rackImage.mainLayer.add(numbers.number1);
	rackImage.mainLayer.add(numbers.number2);
	rackImage.mainLayer.add(numbers.number3);
	rackImage.mainLayer.add(numbers.number4);
	rackImage.mainLayer.add(numbers.number5);

///////////////////////////////////////////////////////////////////////////////
// The fixed labels are added
///////////////////////////////////////////////////////////////////////////////

    fixedlabels.label1 = new Kinetic.Text({
    	x: 40.15*grid,
        y: 61.48*grid,
        text: 'Rack 1',
        fontSize: 2.2*grid,
        fontFamily: 'Calibri',
        fill: 'black'
    });

    fixedlabels.label2 = new Kinetic.Text({
    	x: 60.15*grid,
        y: 61.48*grid,
        text: 'Rack 2',
        fontSize: 2.2*grid,
        fontFamily: 'Calibri',
        fill: 'black'
    });

    fixedlabels.label3 = new Kinetic.Text({
    	x: 80.15*grid,
        y: 61.48*grid,
        text: 'Rack 3',
        fontSize: 2.2*grid,
        fontFamily: 'Calibri',
        fill: 'black'
    });

    fixedlabels.label4 = new Kinetic.Text({
    	x: 100.15*grid,
        y: 61.48*grid,
        text: 'Rack 4',
        fontSize: 2.2*grid,
        fontFamily: 'Calibri',
        fill: 'black'
    });

    fixedlabels.label5 = new Kinetic.Text({
    	x: 120.15*grid,
        y: 61.48*grid,
        text: 'Rack 5',
        fontSize: 2.2*grid,
        fontFamily: 'Calibri',
        fill: 'black'
    });

    rackImage.mainLayer.add(fixedlabels.label1);
    rackImage.mainLayer.add(fixedlabels.label2);
    rackImage.mainLayer.add(fixedlabels.label3);
    rackImage.mainLayer.add(fixedlabels.label4);
    rackImage.mainLayer.add(fixedlabels.label5);


	rackImage.mainLayer.draw();
}