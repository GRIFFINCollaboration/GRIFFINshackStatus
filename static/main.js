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

   	cells.cableman = [];
	for (i = 0; i < 4; i++){
        cells.cableman[i] = new Kinetic.Rect({
            x: 33*grid + 20*grid*i,
            y: 18*grid,
			width: 20*grid,
			height: 1*grid,
			fill: 'dimgray',
			stroke: 'black',
			strokeWidth: 2
		});
	}   

	for (i = 4; i < 8; i++){
        cells.cableman[i] = new Kinetic.Rect({
            x: 33*grid + 20*grid*(i-4),
            y: 27*grid,
			width: 20*grid,
			height: 1*grid,
			fill: 'dimgray',
			stroke: 'black',
			strokeWidth: 2
		});
	} 

	cells.cableman14 = new Kinetic.Rect({
		x: 73*grid,
		y: 29*grid,
		width: 20*grid,
		height: 1*grid,
		fill: 'dimgray',
		stroke: 'black',
		strokeWidth: 2
	});

	for (i = 8; i < 10; i++){
        cells.cableman[i] = new Kinetic.Rect({
            x: 73*grid + 20*grid*(i-9),
            y: 31*grid,
			width: 20*grid,
			height: 1*grid,
			fill: 'dimgray',
			stroke: 'black',
			strokeWidth: 2
		});
	} 

	for (i = 10; i < 12; i++){
        cells.cableman[i] = new Kinetic.Rect({
            x: 73*grid + 20*grid*(i-11),
            y: 40*grid,
			width: 20*grid,
			height: 1*grid,
			fill: 'dimgray',
			stroke: 'black',
			strokeWidth: 2
		});
	} 

	for (i = 12; i < 14; i++){
        cells.cableman[i] = new Kinetic.Rect({
            x: 73*grid,
            y: 42*grid + 9*(i-13)*grid,
			width: 20*grid,
			height: 1*grid,
			fill: 'dimgray',
			stroke: 'black',
			strokeWidth: 2
		});
	} 

	///////////////////////////////////////////////////////////////////////////
	// The 3 HV crates are added next and numbered from left to right.
	///////////////////////////////////////////////////////////////////////////	

	cells.hv0 = new Kinetic.Rect({
		x: 53*grid,
		y: 3*grid,
		width: 20*grid,
		height: 8*grid,
		fill: 'lightslategray',
		stroke: 'black',
		strokeWidth: 2
	});

	cells.hv = [];
	for (i = 1; i < 3; i++){
        cells.hv[i] = new Kinetic.Rect({
            x: 93*grid + 20*grid*(i-1),
            y: 3*grid,
			width: 20*grid,
			height: 8*grid,
			fill: 'lightslategray',
			stroke: 'black',
			strokeWidth: 2
		});
	} 

	///////////////////////////////////////////////////////////////////////////
	// NIM crates are included next and numbered left to right, and then from
	// top to bottom.
	///////////////////////////////////////////////////////////////////////////	

	cells.nim = [];
	for (i = 0; i < 5; i++){
        cells.nim[i] = new Kinetic.Rect({
            x: 33*grid + 20*grid*i,
            y: 12*grid,
			width: 20*grid,
			height: 5*grid,
			fill: 'lightsteelblue',
			stroke: 'black',
			strokeWidth: 2
		});
	} 

	for (i = 5; i < 7; i++){
		cells.nim[i] = new Kinetic.Rect({
			x: 93*grid,
			y: 46*grid + 8*grid*(i-5),
			width: 20*grid,
			height: 5*grid,
			fill: 'lightsteelblue',
			stroke: 'black',
			strokeWidth: 2
		});
	}

	///////////////////////////////////////////////////////////////////////////
	// VME crates are added next and numbered from left to right, then from top
	// to bottom.
	///////////////////////////////////////////////////////////////////////////	

	cells.vme = [];
	for (i = 0; i < 4; i++){
		cells.vme[i] = new Kinetic.Rect({
			x: 33*grid + 20*grid*i,
			y: 19*grid,
			width: 20*grid,
			height: 8*grid,
			fill: 'powderblue',
			stroke: 'black',
			strokeWidth: 2
		});
	}

	for (i = 4; i < 6; i++){
		cells.vme[i] = new Kinetic.Rect({
			x: 73*grid + 20*grid*(i-4),
			y: 32*grid,
			width: 20*grid,
			height: 8*grid,
			fill: 'powderblue',
			stroke: 'black',
			strokeWidth: 2
		});
	}

	cells.vme6 = new Kinetic.Rect({
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

	cells.dsa0 = new Kinetic.Rect({
		x: 33*grid,
		y: 46*grid,
		width: 20*grid,
		height: 6*grid,
		fill: 'silver',
		stroke: 'black',
		strokeWidth: 2
	});	

	cells.dsa = [];
	for (i = 1; i < 4; i++){
		cells.dsa[i] = new Kinetic.Rect({
			x: 33*grid + 20*grid*(i-1),
			y: 53*grid,
			width: 20*grid,
			height: 6*grid,
			fill: 'silver',
			stroke: 'black',
			strokeWidth: 2
		});
	}

	///////////////////////////////////////////////////////////////////////////
	// The network switches are added and numbered from left to right.
	///////////////////////////////////////////////////////////////////////////

	cells.net = [];
	for (i = 0; i < 4; i++){
		cells.net[i] = new Kinetic.Rect({
			x: 53*grid + 20*grid*i,
			y: 52*grid,
			width: 20*grid,
			height: 1*grid,
			fill: 'slategray',
			stroke: 'black',
			strokeWidth: 2
		});
	}

	///////////////////////////////////////////////////////////////////////////////
	// The 2 computers are added into rack 1.
	///////////////////////////////////////////////////////////////////////////////

	cells.comp = [];
	for (i = 0; i < 2; i++){
		cells.comp[i] = new Kinetic.Rect({
			x: 33*grid,
			y: 39*grid + 3*grid*i,
			width: 20*grid,
			height: 2*grid,
			fill: 'steelblue',
			stroke: 'black',
			strokeWidth: 2
		});
	}

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

	for (i = 0; i < 14; i++)
		rackImage.mainLayer.add(cells.cableman[i]);

	rackImage.mainLayer.add(cells.cableman14);

	rackImage.mainLayer.add(cells.hv0);

	for (i = 1; i < 3; i++)
		rackImage.mainLayer.add(cells.hv[i]);

	for (i = 0; i < 5; i++)
		rackImage.mainLayer.add(cells.nim[i]);


	for (i = 5; i < 7; i++)
		rackImage.mainLayer.add(cells.nim[i]);

	for (i = 0; i < 4; i++)
		rackImage.mainLayer.add(cells.vme[i]);

	for (i = 4; i < 6; i ++)
		rackImage.mainLayer.add(cells.vme[i]);

	rackImage.mainLayer.add(cells.vme6);

	rackImage.mainLayer.add(cells.dsa0);

	for (i = 1; i < 4; i++)
		rackImage.mainLayer.add(cells.dsa[i]);

	for (i = 0; i < 4; i++)
		rackImage.mainLayer.add(cells.net[i]);

	for (i = 0; i < 2; i++)
		rackImage.mainLayer.add(cells.comp[i]);

	for (i = 0; i < 5; i++)
		rackImage.mainLayer.add(cells.labels[i]);

///////////////////////////////////////////////////////////////////////////////
// The racks have been given labels and label.rack(1 to 5) assigns text to
// these blank labels so that it is clear to the user which racks are being
// referred to. The variable 'label' instead of 'cell' is being used here to
// distinguish between text and an object within this interface.
///////////////////////////////////////////////////////////////////////////////

	label.rack = [];
	for(i=0; i<5; i++){
        label.rack[i] = new Kinetic.Text({
            x: (40.15 + 20*i)*grid,
            y: 61.48*grid,
            text: 'Rack ' + (i+1),
            fontSize: 2.2*grid,
            fontFamily: 'Arial',
            fill: 'black'
      });
	}

   	///////////////////////////////////////////////////////////////////////////
    // The rest of the labels for the crates are added in the following lines.
    ///////////////////////////////////////////////////////////////////////////

    label.hv1 = new Kinetic.Text({
   		x: 59*grid,
       	y: 5*grid,
      	text: 'HV 1',
       	fontSize: 2.2*grid,
       	fontFamily: 'Arial',
       	fill: 'black'
   	});

    label.hv = [];
	for(i = 3; i < 5; i++){
        label.hv[i] = new Kinetic.Text({
            x: (39 + 20*i)*grid,
            y: 5*grid,
            text: 'HV ' + (i-1),
            fontSize: 2.2*grid,
            fontFamily: 'Arial',
            fill: 'black'
      });
	}

   	///////////////////////////////////////////////////////////////////////////

    label.nim = [];
	for(i = 0; i < 5; i++){
        label.nim[i] = new Kinetic.Text({
            x: (39 + 20*i)*grid,
            y: 13*grid,
            text: 'NIM ' + (i+1),
            fontSize: 2.2*grid,
            fontFamily: 'Arial',
            fill: 'black'
      });
	}

	for(i = 5; i < 7; i++){
        label.nim[i] = new Kinetic.Text({
            x: 99*grid,
            y: 47*grid +(i-5)*grid*8,
            text: 'NIM ' + (i+1),
            fontSize: 2.2*grid,
            fontFamily: 'Arial',
            fill: 'black'
      });
	}

   	///////////////////////////////////////////////////////////////////////////

   	label.vme =[];
	for (i = 0; i < 4; i++){
        label.vme[i] = new Kinetic.Text({
            x: 39*grid + 20*i*grid,
            y: 21.5*grid,
            text: 'VME ' + (i+1),
            fontSize: 2.2*grid,
            fontFamily: 'Arial',
            fill: 'black'
      });
	}   	

	for (i = 4; i < 6; i++){
        label.vme[i] = new Kinetic.Text({
            x: 79*grid + 20*(i-4)*grid,
            y: 34*grid,
            text: 'VME ' + (i+1),
            fontSize: 2.2*grid,
            fontFamily: 'Arial',
            fill: 'black'
      });
	}   

   	label.vme7 = new Kinetic.Text({
   		x: 79*grid,
       	y: 45*grid,
      	text: 'VME 7',
       	fontSize: 2.2*grid,
       	fontFamily: 'Arial',
       	fill: 'black'
   	});

   	///////////////////////////////////////////////////////////////////////////

   	label.comp = [];
	for (i = 0; i < 2; i++){
        label.comp[i] = new Kinetic.Text({
            x: 38.5*grid,
            y: 39*grid + 3.1*i*grid,
            text: 'Computer ' + (i+1),
            fontSize: 2.2*grid,
            fontFamily: 'Arial',
            fill: 'black'
      });
	}   

   	///////////////////////////////////////////////////////////////////////////

   	label.dsa1 = new Kinetic.Text({
   		x: 34.7*grid,
       	y: 48*grid,
      	text: 'Data Storage Array 1',
       	fontSize: 2*grid,
       	fontFamily: 'Arial',
       	fill: 'black'
   	});   

   	label.dsa = [];
	for (i = 1; i < 4; i++){
        label.dsa[i] = new Kinetic.Text({
            x: 34.7*grid + 20*grid*(i-1),
            y: 54.8*grid,
            text: 'Data Storage Array ' + (i+1),
            fontSize: 2.2*grid,
            fontFamily: 'Arial',
            fill: 'black'
      });
	}   

   	///////////////////////////////////////////////////////////////////////////

   	label.net = [];
	for (i = 0; i < 4; i++){
        label.net[i] = new Kinetic.Text({
            x: 59*grid + 20*i*grid,
            y: 52*grid,
            text: 'Network Switch ' + (i+1),
            fontSize: 2.2*grid,
            fontFamily: 'Arial',
            fill: 'black'
      });
	}   

   	///////////////////////////////////////////////////////////////////////////
    // The rack text is added to the main layer using the
    // rackImage.mainLayer.add(...) command.
    ///////////////////////////////////////////////////////////////////////////

	for (i = 0; i < 5; i++)
    	rackImage.mainLayer.add(label.rack[i]);

    rackImage.mainLayer.add(label.hv1);

    for (i = 3; i < 5; i++)
	    rackImage.mainLayer.add(label.hv[i]);

	for (i = 0; i < 5; i++)
	    rackImage.mainLayer.add(label.nim[i]);

	for (i = 5; i < 7; i++)
    	rackImage.mainLayer.add(label.nim[i]);
 
    for (i = 0; i < 6; i++)
    	rackImage.mainLayer.add(label.vme[i]);

    rackImage.mainLayer.add(label.vme7);

    for (i = 0; i < 2; i++)
	    rackImage.mainLayer.add(label.comp[i]);

    rackImage.mainLayer.add(label.dsa1);

	for (i = 1; i < 4; i++)
	    rackImage.mainLayer.add(label.dsa[i]);

	for (i = 0; i < 4; i++)
	    rackImage.mainLayer.add(label.net[i]);

    ///////////////////////////////////////////////////////////////////////////
    // This final line draws the objects created in the main layer.
    ///////////////////////////////////////////////////////////////////////////

	rackImage.mainLayer.draw();
}