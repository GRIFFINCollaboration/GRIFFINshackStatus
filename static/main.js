///////////////////////////////////////////////////////////////////////////
// This function constructs the GRIFFIN electronics shack web interface.
///////////////////////////////////////////////////////////////////////////

function renderRacks(){

	var width = 0.8*window.innerWidth,
		height = 0.8*window.innerHeight,
		grid = Math.min(width/67, height/64),
		rackImage = {},
		cells = {},
		label = {},
		i;

    ///////////////////////////////////////////////////////////////////////////
    // Kinetic.js is setup to create the initial environment.
    ///////////////////////////////////////////////////////////////////////////

	rackImage.stage = new Kinetic.Stage({
            container: 'shackStatus',
            width: width,
            height: height
     });

	///////////////////////////////////////////////////////////////////////////
	// The main layer is made which will contain all of the fixed racks and
	// crates for the shack.
    ///////////////////////////////////////////////////////////////////////////

	rackImage.mainLayer = new Kinetic.Layer();
	rackImage.stage.add(rackImage.mainLayer);

    ///////////////////////////////////////////////////////////////////////////
	// The cells.racks loop sets up the 5 racks.
    ///////////////////////////////////////////////////////////////////////////

   	cells.racks = [];

    for (i = 0; i < 5; i++){
		cells.racks[i] = new Kinetic.Rect({
			x: 33*grid + 20*grid*i,
			y: 3*grid,
			width: 20*grid,
			height: 56*grid,
			fill: 'white',
			stroke: 'black',
			strokeWidth: 2
		});
	}    

    ///////////////////////////////////////////////////////////////////////////
	// The temperature sensors are located at the top and bottom of the racks
	// with cells.sensorstop at the top and cells.sensorsbottom at the bottom.
    ///////////////////////////////////////////////////////////////////////////

    cells.sensorstop = [];
    cells.sensorsbottom = [];

    for (i = 0; i < 5; i++){
		cells.sensorstop[i] = new Kinetic.Rect({
			x: 35*grid + 20*grid*i,
			y: 1*grid,
			width: 16*grid,
			height: 2*grid,
			fill: 'gray',
			stroke: 'black',
			strokeWidth: 2
		});
	}

	for (i = 0; i < 5; i++){
		cells.sensorsbottom[i] = new Kinetic.Rect({
			x: 35*grid + 20*grid*i,
			y: 59*grid,
			width: 16*grid,
			height: 2*grid,
			fill: 'gray',
			stroke: 'black',
			strokeWidth: 2
		});
	}

	///////////////////////////////////////////////////////////////////////////
	// Blank cable management sections are added in the form of cell.cableman
	// followed by the number of the rack and the number of the crate within
	// that rack from top to bottom.
	///////////////////////////////////////////////////////////////////////////	

	cells.cableman11 = new Kinetic.Rect({
		x: 33*grid,
		y: 18*grid,
		width: 20*grid,
		height: 1*grid,
		fill: 'dimgray',
		stroke: 'black',
		strokeWidth: 2
	});

	cells.cableman12 = new Kinetic.Rect({
		x: 33*grid,
		y: 27*grid,
		width: 20*grid,
		height: 1*grid,
		fill: 'dimgray',
		stroke: 'black',
		strokeWidth: 2
	});

	cells.cableman21 = new Kinetic.Rect({
		x: 53*grid,
		y: 18*grid,
		width: 20*grid,
		height: 1*grid,
		fill: 'dimgray',
		stroke: 'black',
		strokeWidth: 2
	});

	cells.cableman22 = new Kinetic.Rect({
		x: 53*grid,
		y: 27*grid,
		width: 20*grid,
		height: 1*grid,
		fill: 'dimgray',
		stroke: 'black',
		strokeWidth: 2
	});

	cells.cableman31 = new Kinetic.Rect({
		x: 73*grid,
		y: 18*grid,
		width: 20*grid,
		height: 1*grid,
		fill: 'dimgray',
		stroke: 'black',
		strokeWidth: 2
	});

	cells.cableman32 = new Kinetic.Rect({
		x: 73*grid,
		y: 27*grid,
		width: 20*grid,
		height: 1*grid,
		fill: 'dimgray',
		stroke: 'black',
		strokeWidth: 2
	});

	cells.cableman33 = new Kinetic.Rect({
		x: 73*grid,
		y: 29*grid,
		width: 20*grid,
		height: 1*grid,
		fill: 'dimgray',
		stroke: 'black',
		strokeWidth: 2
	});

	cells.cableman34 = new Kinetic.Rect({
		x: 73*grid,
		y: 31*grid,
		width: 20*grid,
		height: 1*grid,
		fill: 'dimgray',
		stroke: 'black',
		strokeWidth: 2
	});

	cells.cableman35 = new Kinetic.Rect({
		x: 73*grid,
		y: 40*grid,
		width: 20*grid,
		height: 1*grid,
		fill: 'dimgray',
		stroke: 'black',
		strokeWidth: 2
	});

	cells.cableman36 = new Kinetic.Rect({
		x: 73*grid,
		y: 42*grid,
		width: 20*grid,
		height: 1*grid,
		fill: 'dimgray',
		stroke: 'black',
		strokeWidth: 2
	});

	cells.cableman37 = new Kinetic.Rect({
		x: 73*grid,
		y: 51*grid,
		width: 20*grid,
		height: 1*grid,
		fill: 'dimgray',
		stroke: 'black',
		strokeWidth: 2
	});

	cells.cableman41 = new Kinetic.Rect({
		x: 93*grid,
		y: 18*grid,
		width: 20*grid,
		height: 1*grid,
		fill: 'dimgray',
		stroke: 'black',
		strokeWidth: 2
	});

	cells.cableman42 = new Kinetic.Rect({
		x: 93*grid,
		y: 27*grid,
		width: 20*grid,
		height: 1*grid,
		fill: 'dimgray',
		stroke: 'black',
		strokeWidth: 2
	});

	cells.cableman43 = new Kinetic.Rect({
		x: 93*grid,
		y: 31*grid,
		width: 20*grid,
		height: 1*grid,
		fill: 'dimgray',
		stroke: 'black',
		strokeWidth: 2
	});

	cells.cableman44 = new Kinetic.Rect({
		x: 93*grid,
		y: 40*grid,
		width: 20*grid,
		height: 1*grid,
		fill: 'dimgray',
		stroke: 'black',
		strokeWidth: 2
	});

	///////////////////////////////////////////////////////////////////////////
	// The 3 HV crates are added next and numbered from left to right.
	///////////////////////////////////////////////////////////////////////////	

	cells.hv1 = new Kinetic.Rect({
		x: 53*grid,
		y: 3*grid,
		width: 20*grid,
		height: 8*grid,
		fill: 'lightslategray',
		stroke: 'black',
		strokeWidth: 2
	});

	cells.hv2 = new Kinetic.Rect({
		x: 93*grid,
		y: 3*grid,
		width: 20*grid,
		height: 8*grid,
		fill: 'lightslategray',
		stroke: 'black',
		strokeWidth: 2
	});

	cells.hv3 = new Kinetic.Rect({
		x: 113*grid,
		y: 3*grid,
		width: 20*grid,
		height: 8*grid,
		fill: 'lightslategray',
		stroke: 'black',
		strokeWidth: 2
	});

	///////////////////////////////////////////////////////////////////////////
	// NIM crates are included next and numbered left to right, and then from
	// top to bottom.
	///////////////////////////////////////////////////////////////////////////	

	cells.nim1 = new Kinetic.Rect({
		x: 33*grid,
		y: 12*grid,
		width: 20*grid,
		height: 5*grid,
		fill: 'lightsteelblue',
		stroke: 'black',
		strokeWidth: 2
	});

	cells.nim2 = new Kinetic.Rect({
		x: 53*grid,
		y: 12*grid,
		width: 20*grid,
		height: 5*grid,
		fill: 'lightsteelblue',
		stroke: 'black',
		strokeWidth: 2
	});

	cells.nim3 = new Kinetic.Rect({
		x: 73*grid,
		y: 12*grid,
		width: 20*grid,
		height: 5*grid,
		fill: 'lightsteelblue',
		stroke: 'black',
		strokeWidth: 2
	});

	cells.nim4 = new Kinetic.Rect({
		x: 93*grid,
		y: 12*grid,
		width: 20*grid,
		height: 5*grid,
		fill: 'lightsteelblue',
		stroke: 'black',
		strokeWidth: 2
	});

	cells.nim5 = new Kinetic.Rect({
		x: 113*grid,
		y: 12*grid,
		width: 20*grid,
		height: 5*grid,
		fill: 'lightsteelblue',
		stroke: 'black',
		strokeWidth: 2
	});

	cells.nim6 = new Kinetic.Rect({
		x: 93*grid,
		y: 46*grid,
		width: 20*grid,
		height: 5*grid,
		fill: 'lightsteelblue',
		stroke: 'black',
		strokeWidth: 2
	});

	cells.nim7 = new Kinetic.Rect({
		x: 93*grid,
		y: 54*grid,
		width: 20*grid,
		height: 5*grid,
		fill: 'lightsteelblue',
		stroke: 'black',
		strokeWidth: 2
	});

	///////////////////////////////////////////////////////////////////////////
	// VME crates are added next and numbered from left to right, then from top
	// to bottom.
	///////////////////////////////////////////////////////////////////////////	

	cells.vme1 = new Kinetic.Rect({
		x: 33*grid,
		y: 19*grid,
		width: 20*grid,
		height: 8*grid,
		fill: 'powderblue',
		stroke: 'black',
		strokeWidth: 2
	});

	cells.vme2 = new Kinetic.Rect({
		x: 53*grid,
		y: 19*grid,
		width: 20*grid,
		height: 8*grid,
		fill: 'powderblue',
		stroke: 'black',
		strokeWidth: 2
	});

	cells.vme3 = new Kinetic.Rect({
		x: 73*grid,
		y: 19*grid,
		width: 20*grid,
		height: 8*grid,
		fill: 'powderblue',
		stroke: 'black',
		strokeWidth: 2
	});

	cells.vme4 = new Kinetic.Rect({
		x: 93*grid,
		y: 19*grid,
		width: 20*grid,
		height: 8*grid,
		fill: 'powderblue',
		stroke: 'black',
		strokeWidth: 2
	});

	cells.vme5 = new Kinetic.Rect({
		x: 73*grid,
		y: 32*grid,
		width: 20*grid,
		height: 8*grid,
		fill: 'powderblue',
		stroke: 'black',
		strokeWidth: 2
	});

	cells.vme6 = new Kinetic.Rect({
		x: 93*grid,
		y: 32*grid,
		width: 20*grid,
		height: 8*grid,
		fill: 'powderblue',
		stroke: 'black',
		strokeWidth: 2
	});

	cells.vme7 = new Kinetic.Rect({
		x: 73*grid,
		y: 43*grid,
		width: 20*grid,
		height: 8*grid,
		fill: 'powderblue',
		stroke: 'black',
		strokeWidth: 2
	});

	///////////////////////////////////////////////////////////////////////////
	// Data storage arrays are added, all numbered from left to right and then
	// top to bottom.
	///////////////////////////////////////////////////////////////////////////

	cells.dsa1 = new Kinetic.Rect({
		x: 33*grid,
		y: 46*grid,
		width: 20*grid,
		height: 6*grid,
		fill: 'silver',
		stroke: 'black',
		strokeWidth: 2
	});	

	cells.dsa2 = new Kinetic.Rect({
		x: 33*grid,
		y: 53*grid,
		width: 20*grid,
		height: 6*grid,
		fill: 'silver',
		stroke: 'black',
		strokeWidth: 2
	});	

	cells.dsa3 = new Kinetic.Rect({
		x: 53*grid,
		y: 53*grid,
		width: 20*grid,
		height: 6*grid,
		fill: 'silver',
		stroke: 'black',
		strokeWidth: 2
	});	

	cells.dsa4 = new Kinetic.Rect({
		x: 73*grid,
		y: 53*grid,
		width: 20*grid,
		height: 6*grid,
		fill: 'silver',
		stroke: 'black',
		strokeWidth: 2
	});	

	///////////////////////////////////////////////////////////////////////////
	// The network switches are added and numbered from left to right.
	///////////////////////////////////////////////////////////////////////////

	cells.net1 = new Kinetic.Rect({
		x: 53*grid,
		y: 52*grid,
		width: 20*grid,
		height: 1*grid,
		fill: 'slategray',
		stroke: 'black',
		strokeWidth: 2
	});	

	cells.net2 = new Kinetic.Rect({
		x: 73*grid,
		y: 52*grid,
		width: 20*grid,
		height: 1*grid,
		fill: 'slategray',
		stroke: 'black',
		strokeWidth: 2
	});	

	cells.net3 = new Kinetic.Rect({
		x: 93*grid,
		y: 52*grid,
		width: 20*grid,
		height: 1*grid,
		fill: 'slategray',
		stroke: 'black',
		strokeWidth: 2
	});	

	cells.net4 = new Kinetic.Rect({
		x: 113*grid,
		y: 52*grid,
		width: 20*grid,
		height: 1*grid,
		fill: 'slategray',
		stroke: 'black',
		strokeWidth: 2
	});	

	///////////////////////////////////////////////////////////////////////////////
	// The 2 computers are added into rack 1.
	///////////////////////////////////////////////////////////////////////////////

	cells.comp1 = new Kinetic.Rect({
		x: 33*grid,
		y: 39*grid,
		width: 20*grid,
		height: 2*grid,
		fill: 'steelblue',
		stroke: 'black',
		strokeWidth: 2
	});	

	cells.comp2 = new Kinetic.Rect({
		x: 33*grid,
		y: 42*grid,
		width: 20*grid,
		height: 2*grid,
		fill: 'steelblue',
		stroke: 'black',
		strokeWidth: 2
	});	

	///////////////////////////////////////////////////////////////////////////
	// In order to make this interface user-friendly, each rack is given a
	// label so that it is clear what crates, switches and cables are located
	// where. The interface visualises how the shack looks from the front and 
	// the racks are correspondingly labelled from left to right (1 to 5).
	///////////////////////////////////////////////////////////////////////////

	cells.labels = [];

	for (i = 0; i < 5; i++)
		cells.labels[i] = new Kinetic.Rect({
			x: 39*grid + 20*grid*i,
			y: 61.5*grid,
			width: 8*grid,
			height: 2*grid,
			fill: 'white',
			stroke: 'white',
			strokeWidth: 2
		});

    ///////////////////////////////////////////////////////////////////////////
    // rackImage.mainLayer.add(...) adds the newly created objects to the main
    // layer within the stage (rackImage) set out in the conditions at the 
    // beginning of the code.
    ///////////////////////////////////////////////////////////////////////////

	for (i = 0; i < 5; i++)
		rackImage.mainLayer.add(cells.racks[i]);

	for (i = 0; i < 5; i++)
		rackImage.mainLayer.add(cells.sensorstop[i]), 
		rackImage.mainLayer.add(cells.sensorsbottom[i]);

	rackImage.mainLayer.add(cells.cableman11);
	rackImage.mainLayer.add(cells.cableman12);
	rackImage.mainLayer.add(cells.cableman21);
	rackImage.mainLayer.add(cells.cableman22);
	rackImage.mainLayer.add(cells.cableman31);
	rackImage.mainLayer.add(cells.cableman32);
	rackImage.mainLayer.add(cells.cableman33);
	rackImage.mainLayer.add(cells.cableman34);
	rackImage.mainLayer.add(cells.cableman35);
	rackImage.mainLayer.add(cells.cableman36);
	rackImage.mainLayer.add(cells.cableman37);
	rackImage.mainLayer.add(cells.cableman41);
	rackImage.mainLayer.add(cells.cableman42);
	rackImage.mainLayer.add(cells.cableman43);
	rackImage.mainLayer.add(cells.cableman44);

	rackImage.mainLayer.add(cells.hv1);
	rackImage.mainLayer.add(cells.hv2);
	rackImage.mainLayer.add(cells.hv3);

	rackImage.mainLayer.add(cells.nim1);
	rackImage.mainLayer.add(cells.nim2);
	rackImage.mainLayer.add(cells.nim3);
	rackImage.mainLayer.add(cells.nim4);
	rackImage.mainLayer.add(cells.nim5);
	rackImage.mainLayer.add(cells.nim6);
	rackImage.mainLayer.add(cells.nim7);

	rackImage.mainLayer.add(cells.vme1);
	rackImage.mainLayer.add(cells.vme2);
	rackImage.mainLayer.add(cells.vme3);
	rackImage.mainLayer.add(cells.vme4);
	rackImage.mainLayer.add(cells.vme5);
	rackImage.mainLayer.add(cells.vme6);
	rackImage.mainLayer.add(cells.vme7);

	rackImage.mainLayer.add(cells.dsa1);
	rackImage.mainLayer.add(cells.dsa2);
	rackImage.mainLayer.add(cells.dsa3);
	rackImage.mainLayer.add(cells.dsa4);

	rackImage.mainLayer.add(cells.net1);
	rackImage.mainLayer.add(cells.net2);
	rackImage.mainLayer.add(cells.net3);
	rackImage.mainLayer.add(cells.net4);

	rackImage.mainLayer.add(cells.comp1);
	rackImage.mainLayer.add(cells.comp2);

	for (i = 0; i < 5; i++)
		rackImage.mainLayer.add(cells.labels[i]);

///////////////////////////////////////////////////////////////////////////////
// The racks have been given labels and label.rack(1 to 5) assigns text to
// these blank labels so that it is clear to the user which racks are being
// referred to. The variable 'label' instead of 'cell' is being used here to
// distinguish between text and an object within this interface.
///////////////////////////////////////////////////////////////////////////////

	label.rack1 = new Kinetic.Text({
   		x: 40.15*grid,
       	y: 61.48*grid,
      	text: 'Rack 1',
       	fontSize: 2.2*grid,
       	fontFamily: 'Calibri',
       	fill: 'black'
   	});

	label.rack2 = new Kinetic.Text({
   		x: 60.15*grid,
       	y: 61.48*grid,
      	text: 'Rack 2',
       	fontSize: 2.2*grid,
       	fontFamily: 'Calibri',
       	fill: 'black'
   	});

	label.rack3 = new Kinetic.Text({
   		x: 80.15*grid,
       	y: 61.48*grid,
      	text: 'Rack 3',
       	fontSize: 2.2*grid,
       	fontFamily: 'Calibri',
       	fill: 'black'
   	});

	label.rack4 = new Kinetic.Text({
   		x: 100.15*grid,
       	y: 61.48*grid,
      	text: 'Rack 4',
       	fontSize: 2.2*grid,
       	fontFamily: 'Calibri',
       	fill: 'black'
   	});

	label.rack5 = new Kinetic.Text({
   		x: 120.15*grid,
       	y: 61.48*grid,
      	text: 'Rack 5',
       	fontSize: 2.2*grid,
       	fontFamily: 'Calibri',
       	fill: 'black'
   	});

   	///////////////////////////////////////////////////////////////////////////
    // The rest of the labels for the crates are added in the following lines.
    ///////////////////////////////////////////////////////////////////////////

    label.hv1 = new Kinetic.Text({
   		x: 59*grid,
       	y: 5*grid,
      	text: 'HV 1',
       	fontSize: 4*grid,
       	fontFamily: 'Calibri',
       	fill: 'black'
   	});

    label.hv2 = new Kinetic.Text({
   		x: 99*grid,
       	y: 5*grid,
      	text: 'HV 2',
       	fontSize: 4*grid,
       	fontFamily: 'Calibri',
       	fill: 'black'
   	});

   	label.hv3 = new Kinetic.Text({
   		x: 119*grid,
       	y: 5*grid,
      	text: 'HV 3',
       	fontSize: 4*grid,
       	fontFamily: 'Calibri',
       	fill: 'black'
   	});

   	///////////////////////////////////////////////////////////////////////////

   	label.nim1 = new Kinetic.Text({
   		x: 39*grid,
       	y: 13*grid,
      	text: 'NIM 1',
       	fontSize: 3*grid,
       	fontFamily: 'Calibri',
       	fill: 'black'
   	});

   	label.nim2 = new Kinetic.Text({
   		x: 59*grid,
       	y: 13*grid,
      	text: 'NIM 2',
       	fontSize: 3*grid,
       	fontFamily: 'Calibri',
       	fill: 'black'
   	});

   	label.nim3 = new Kinetic.Text({
   		x: 79*grid,
       	y: 13*grid,
      	text: 'NIM 3',
       	fontSize: 3*grid,
       	fontFamily: 'Calibri',
       	fill: 'black'
   	});

   	label.nim4 = new Kinetic.Text({
   		x: 99*grid,
       	y: 13*grid,
      	text: 'NIM 4',
       	fontSize: 3*grid,
       	fontFamily: 'Calibri',
       	fill: 'black'
   	});

   	label.nim5 = new Kinetic.Text({
   		x: 119*grid,
       	y: 13*grid,
      	text: 'NIM 5',
       	fontSize: 3*grid,
       	fontFamily: 'Calibri',
       	fill: 'black'
   	});

   	label.nim6 = new Kinetic.Text({
   		x: 99*grid,
       	y: 47*grid,
      	text: 'NIM 6',
       	fontSize: 3*grid,
       	fontFamily: 'Calibri',
       	fill: 'black'
   	});

   	label.nim7 = new Kinetic.Text({
   		x: 99*grid,
       	y: 55*grid,
      	text: 'NIM 7',
       	fontSize: 3*grid,
       	fontFamily: 'Calibri',
       	fill: 'black'
   	});

   	///////////////////////////////////////////////////////////////////////////

   	label.vme1 = new Kinetic.Text({
   		x: 39*grid,
       	y: 21.5*grid,
      	text: 'VME 1',
       	fontSize: 3*grid,
       	fontFamily: 'Calibri',
       	fill: 'black'
   	});

   	label.vme2 = new Kinetic.Text({
   		x: 59*grid,
       	y: 21.5*grid,
      	text: 'VME 2',
       	fontSize: 3*grid,
       	fontFamily: 'Calibri',
       	fill: 'black'
   	});

   	label.vme3 = new Kinetic.Text({
   		x: 79*grid,
       	y: 21.5*grid,
      	text: 'VME 3',
       	fontSize: 3*grid,
       	fontFamily: 'Calibri',
       	fill: 'black'
   	});

   	label.vme4 = new Kinetic.Text({
   		x: 99*grid,
       	y: 21.5*grid,
      	text: 'VME 4',
       	fontSize: 3*grid,
       	fontFamily: 'Calibri',
       	fill: 'black'
   	});

   	label.vme5 = new Kinetic.Text({
   		x: 79*grid,
       	y: 34*grid,
      	text: 'VME 5',
       	fontSize: 3*grid,
       	fontFamily: 'Calibri',
       	fill: 'black'
   	});

   	label.vme6 = new Kinetic.Text({
   		x: 99*grid,
       	y: 34*grid,
      	text: 'VME 6',
       	fontSize: 3*grid,
       	fontFamily: 'Calibri',
       	fill: 'black'
   	});

   	label.vme7 = new Kinetic.Text({
   		x: 79*grid,
       	y: 45*grid,
      	text: 'VME 7',
       	fontSize: 3*grid,
       	fontFamily: 'Calibri',
       	fill: 'black'
   	});

   	///////////////////////////////////////////////////////////////////////////

   	label.comp1 = new Kinetic.Text({
   		x: 38.5*grid,
       	y: 39*grid,
      	text: 'Computer 1',
       	fontSize: 1.8*grid,
       	fontFamily: 'Calibri',
       	fill: 'black'
   	});

   	label.comp2 = new Kinetic.Text({
   		x: 38.5*grid,
       	y: 42.1*grid,
      	text: 'Computer 2',
       	fontSize: 1.8*grid,
       	fontFamily: 'Calibri',
       	fill: 'black'
   	});

   	///////////////////////////////////////////////////////////////////////////

   	label.dsa1 = new Kinetic.Text({
   		x: 34.7*grid,
       	y: 48*grid,
      	text: 'Data Storage Array 1',
       	fontSize: 2*grid,
       	fontFamily: 'Calibri',
       	fill: 'black'
   	});   

   	label.dsa2 = new Kinetic.Text({
   		x: 34.7*grid,
       	y: 54.8*grid,
      	text: 'Data Storage Array 2',
       	fontSize: 2*grid,
       	fontFamily: 'Calibri',
       	fill: 'black'
   	});   	

   	label.dsa3 = new Kinetic.Text({
   		x: 54.7*grid,
       	y: 54.8*grid,
      	text: 'Data Storage Array 3',
       	fontSize: 2*grid,
       	fontFamily: 'Calibri',
       	fill: 'black'
   	});   	

   	label.dsa4 = new Kinetic.Text({
   		x: 74.7*grid,
       	y: 54.8*grid,
      	text: 'Data Storage Array 4',
       	fontSize: 2*grid,
       	fontFamily: 'Calibri',
       	fill: 'black'
   	});   	

   	///////////////////////////////////////////////////////////////////////////

   	label.net1 = new Kinetic.Text({
   		x: 59*grid,
       	y: 52*grid,
      	text: 'Network Switch 1',
       	fontSize: 1*grid,
       	fontFamily: 'Calibri',
       	fill: 'black'
   	});   	

   	label.net2 = new Kinetic.Text({
   		x: 79*grid,
       	y: 52*grid,
      	text: 'Network Switch 2',
       	fontSize: 1*grid,
       	fontFamily: 'Calibri',
       	fill: 'black'
   	});   	

   	label.net3 = new Kinetic.Text({
   		x: 99*grid,
       	y: 52*grid,
      	text: 'Network Switch 3',
       	fontSize: 1*grid,
       	fontFamily: 'Calibri',
       	fill: 'black'
   	});   	

   	label.net4 = new Kinetic.Text({
   		x: 119*grid,
       	y: 52*grid,
      	text: 'Network Switch 4',
       	fontSize: 1*grid,
       	fontFamily: 'Calibri',
       	fill: 'black'
   	});   	

   	///////////////////////////////////////////////////////////////////////////
    // The rack text is added to the main layer using the
    // rackImage.mainLayer.add(...) command.
    ///////////////////////////////////////////////////////////////////////////

    rackImage.mainLayer.add(label.rack1);
    rackImage.mainLayer.add(label.rack2);
    rackImage.mainLayer.add(label.rack3);
    rackImage.mainLayer.add(label.rack4);
    rackImage.mainLayer.add(label.rack5);

    rackImage.mainLayer.add(label.hv1);
    rackImage.mainLayer.add(label.hv2);
    rackImage.mainLayer.add(label.hv3);

    rackImage.mainLayer.add(label.nim1);
    rackImage.mainLayer.add(label.nim2);
    rackImage.mainLayer.add(label.nim3);
    rackImage.mainLayer.add(label.nim4);
    rackImage.mainLayer.add(label.nim5);
    rackImage.mainLayer.add(label.nim6);
    rackImage.mainLayer.add(label.nim7);

    rackImage.mainLayer.add(label.vme1);
    rackImage.mainLayer.add(label.vme2);
    rackImage.mainLayer.add(label.vme3);
    rackImage.mainLayer.add(label.vme4);
    rackImage.mainLayer.add(label.vme5);
    rackImage.mainLayer.add(label.vme6);
    rackImage.mainLayer.add(label.vme7);

    rackImage.mainLayer.add(label.comp1);
    rackImage.mainLayer.add(label.comp2);

    rackImage.mainLayer.add(label.dsa1);
    rackImage.mainLayer.add(label.dsa2);
    rackImage.mainLayer.add(label.dsa3);
    rackImage.mainLayer.add(label.dsa4);

    rackImage.mainLayer.add(label.net1);
    rackImage.mainLayer.add(label.net2);
    rackImage.mainLayer.add(label.net3);
    rackImage.mainLayer.add(label.net4);

    ///////////////////////////////////////////////////////////////////////////
    // This final line draws the objects created in the main layer.
    ///////////////////////////////////////////////////////////////////////////

	rackImage.mainLayer.draw();
}