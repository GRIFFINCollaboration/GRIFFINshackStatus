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
   	label.racks = [];

    for (i = 0; i < 5; i++){
		cells.racks[i] = new Kinetic.Rect({
			x: (33+20*i)*grid,
			y: 3*grid,
			width: 20*grid,
			height: 56*grid,
			fill: 'white',
			stroke: 'black',
			strokeWidth: 2
		}),
		label.racks[i] = new Kinetic.Text({
            x: (40.15 + 20*i)*grid,
            y: 61.48*grid,
            text: 'Rack ' + (i+1),
            fontSize: 2.2*grid,
            fontFamily: 'Arial',
            fill: 'black'
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
			x: (35+20*i)*grid,
			y: 1*grid,
			width: 16*grid,
			height: 2*grid,
			fill: 'gray',
			stroke: 'black',
			strokeWidth: 2
		}),
		cells.sensorsbottom[i] = new Kinetic.Rect({
			x: (35+20*i)*grid,
			y: 59*grid,
			width: 16*grid,
			height: 2*grid,
			fill: 'gray',
			stroke: 'black',
			strokeWidth: 2
		});
	}

    ///////////////////////////////////////////////////////////////////////////
    // Cable management sections are added.
    ///////////////////////////////////////////////////////////////////////////

   	cells.cableman = [];

	for (i = 0; i < 4; i++){
        cells.cableman[i] = new Kinetic.Rect({
            x: (33+ 20*i)*grid,
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
            x: (33+20*(i-4))*grid,
            y: 27*grid,
			width: 20*grid,
			height: 1*grid,
			fill: 'dimgray',
			stroke: 'black',
			strokeWidth: 2
		});
	} 

	for (i = 8; i < 10; i++){
        cells.cableman[i] = new Kinetic.Rect({
            x: (73+20*(i-8))*grid,
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
            x: (73+20*(i-10))*grid,
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
            y: (42+9*(i-12))*grid,
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

	///////////////////////////////////////////////////////////////////////////
	// The 3 HV crates are added next and numbered from left to right then
	// descending.
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

    label.hv0 = new Kinetic.Text({
   		x: 59*grid,
       	y: 5*grid,
      	text: 'HV 1',
       	fontSize: 2.2*grid,
       	fontFamily: 'Arial',
       	fill: 'black'
   	});

	cells.hv = [];
	label.hv = [];

	for (i = 1; i < 3; i++){
        cells.hv[i] = new Kinetic.Rect({
            x: (93+20*(i-1))*grid,
            y: 3*grid,
			width: 20*grid,
			height: 8*grid,
			fill: 'lightslategray',
			stroke: 'black',
			strokeWidth: 2
		}),
        label.hv[i] = new Kinetic.Text({
            x: (39 + 20*(i+2))*grid,
            y: 5*grid,
            text: 'HV ' + (i+1),
            fontSize: 2.2*grid,
            fontFamily: 'Arial',
            fill: 'black'
      	});
	}


	///////////////////////////////////////////////////////////////////////////
	// NIM crates are included next and numbered in the same way as the HV
	// crates
	///////////////////////////////////////////////////////////////////////////	

	cells.nim = [];
	label.nim =[];

	for (i = 0; i < 5; i++){
        cells.nim[i] = new Kinetic.Rect({
            x: (33+20*i)*grid,
            y: 12*grid,
			width: 20*grid,
			height: 5*grid,
			fill: 'lightsteelblue',
			stroke: 'black',
			strokeWidth: 2
		}),
		label.nim[i] = new Kinetic.Text({
            x: (39 + 20*i)*grid,
            y: 13*grid,
            text: 'NIM ' + (i+1),
            fontSize: 2.2*grid,
            fontFamily: 'Arial',
            fill: 'black'
        });
	} 

	for (i = 5; i < 7; i++){
		cells.nim[i] = new Kinetic.Rect({
			x: 93*grid,
			y: (46+8*(i-5))*grid,
			width: 20*grid,
			height: 5*grid,
			fill: 'lightsteelblue',
			stroke: 'black',
			strokeWidth: 2
		}),
        label.nim[i] = new Kinetic.Text({
            x: 99*grid,
            y: (47+(i-5)*8)*grid,
            text: 'NIM ' + (i+1),
            fontSize: 2.2*grid,
            fontFamily: 'Arial',
            fill: 'black'
      	});
	}

	///////////////////////////////////////////////////////////////////////////
	// VME crates are added next and numbered as before.
	///////////////////////////////////////////////////////////////////////////	

	cells.vme = [];
	label.vme = [];

	for (i = 0; i < 4; i++){
		cells.vme[i] = new Kinetic.Rect({
			x: (33+20*i)*grid,
			y: 19*grid,
			width: 20*grid,
			height: 8*grid,
			fill: 'powderblue',
			stroke: 'black',
			strokeWidth: 2
		}),
	    label.vme[i] = new Kinetic.Text({
            x: (39+20*i)*grid,
            y: 21.5*grid,
            text: 'VME ' + (i+1),
            fontSize: 2.2*grid,
            fontFamily: 'Arial',
            fill: 'black'
      	});
	}   

	for (i = 4; i < 6; i++){
		cells.vme[i] = new Kinetic.Rect({
			x: (73+20*(i-4))*grid,
			y: 32*grid,
			width: 20*grid,
			height: 8*grid,
			fill: 'powderblue',
			stroke: 'black',
			strokeWidth: 2
		}),
	    label.vme[i] = new Kinetic.Text({
            x: (79+20*(i-4))*grid,
            y: 34*grid,
            text: 'VME ' + (i+1),
            fontSize: 2.2*grid,
            fontFamily: 'Arial',
            fill: 'black'
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

   	label.vme6 = new Kinetic.Text({
   		x: 79*grid,
       	y: 45*grid,
      	text: 'VME 7',
       	fontSize: 2.2*grid,
       	fontFamily: 'Arial',
       	fill: 'black'
   	});


	///////////////////////////////////////////////////////////////////////////
	// Data storage arrays are added, all numbered as before.
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

   	label.dsa0 = new Kinetic.Text({
   		x: 34.7*grid,
       	y: 48*grid,
      	text: 'Data Storage Array 1',
       	fontSize: 2*grid,
       	fontFamily: 'Arial',
       	fill: 'black'
   	}); 

	cells.dsa = [];
   	label.dsa = [];

	for (i = 1; i < 4; i++){
		cells.dsa[i] = new Kinetic.Rect({
			x: (33+20*(i-1))*grid,
			y: 53*grid,
			width: 20*grid,
			height: 6*grid,
			fill: 'silver',
			stroke: 'black',
			strokeWidth: 2
		}),
	    label.dsa[i] = new Kinetic.Text({
            x: (34.7+20*(i-1))*grid,
            y: 54.8*grid,
            text: 'Data Storage Array ' + (i+1),
            fontSize: 2.2*grid,
            fontFamily: 'Arial',
            fill: 'black'
        });
	}     

	///////////////////////////////////////////////////////////////////////////
	// The network switches are added and numbered from left to right.
	///////////////////////////////////////////////////////////////////////////

	cells.net = [];
	label.net = [];

	for (i = 0; i < 4; i++){
		cells.net[i] = new Kinetic.Rect({
			x: (53+20*i)*grid,
			y: 52*grid,
			width: 20*grid,
			height: 1*grid,
			fill: 'slategray',
			stroke: 'black',
			strokeWidth: 2
		}),
	    label.net[i] = new Kinetic.Text({
            x: (59+20*i)*grid,
            y: 52*grid,
            text: 'Network Switch ' + (i+1),
            fontSize: 1*grid,
            fontFamily: 'Arial',
            fill: 'black'
        });
	}   

	///////////////////////////////////////////////////////////////////////////////
	// The 2 computers are added into rack 1.
	///////////////////////////////////////////////////////////////////////////////

	cells.comp = [];
   	label.comp = [];

	for (i = 0; i < 2; i++){
		cells.comp[i] = new Kinetic.Rect({
			x: 33*grid,
			y: (39+3*i)*grid,
			width: 20*grid,
			height: 2*grid,
			fill: 'steelblue',
			stroke: 'black',
			strokeWidth: 2
		}),
	    label.comp[i] = new Kinetic.Text({
            x: 38.5*grid,
            y: (39+3.1*i)*grid,
            text: 'Computer ' + (i+1),
            fontSize: 2.2*grid,
            fontFamily: 'Arial',
            fill: 'black'
        });
	}   

	///////////////////////////////////////////////////////////////////////////
	// In order to make this interface user-friendly, each rack is given a
	// label so that it is clear what crates, switches and cables are located
	// where. The interface visualises how the shack looks from the front and 
	// the racks are correspondingly labelled from left to right (1 to 5).
	///////////////////////////////////////////////////////////////////////////

	cells.labels = [];

	for (i = 0; i < 5; i++){
		cells.labels[i] = new Kinetic.Rect({
			x: (39+20*i)*grid,
			y: 61.5*grid,
			width: 8*grid,
			height: 2*grid,
			fill: 'white',
			stroke: 'white',
			strokeWidth: 2
		});
	}

    ///////////////////////////////////////////////////////////////////////////
    // rackImage.mainLayer.add(...) adds the newly created objects and the 
    // corresponding text to the main layer within the stage (rackImage) set 
    // out in the conditions at the beginning of the code.
    ///////////////////////////////////////////////////////////////////////////

	for (i = 0; i < 5; i++)
		rackImage.mainLayer.add(cells.racks[i]),
	    rackImage.mainLayer.add(label.racks[i]);

	for (i = 0; i < 5; i++)
		rackImage.mainLayer.add(cells.sensorstop[i]), 
		rackImage.mainLayer.add(cells.sensorsbottom[i]);

	for (i = 0; i < 14; i++)
		rackImage.mainLayer.add(cells.cableman[i]);

	rackImage.mainLayer.add(cells.cableman14);

	rackImage.mainLayer.add(cells.hv0);
    rackImage.mainLayer.add(label.hv0);

	for (i = 1; i < 3; i++)
		rackImage.mainLayer.add(cells.hv[i]),
		rackImage.mainLayer.add(label.hv[i]);

	for (i = 0; i < 7; i++)
		rackImage.mainLayer.add(cells.nim[i]),
		rackImage.mainLayer.add(label.nim[i]);

	for (i = 0; i < 6; i++)
		rackImage.mainLayer.add(cells.vme[i]),
	    rackImage.mainLayer.add(label.vme[i]);

	rackImage.mainLayer.add(cells.vme6);
    rackImage.mainLayer.add(label.vme6);

	rackImage.mainLayer.add(cells.dsa0);
    rackImage.mainLayer.add(label.dsa0);

	for (i = 1; i < 4; i++)
		rackImage.mainLayer.add(cells.dsa[i]),
		rackImage.mainLayer.add(label.dsa[i]);

	for (i = 0; i < 4; i++)
		rackImage.mainLayer.add(cells.net[i]),
	    rackImage.mainLayer.add(label.net[i]);

	for (i = 0; i < 2; i++)
		rackImage.mainLayer.add(cells.comp[i]),
		rackImage.mainLayer.add(label.comp[i]);

	for (i = 0; i < 5; i++)
		rackImage.mainLayer.add(cells.labels[i]);

	///////////////////////////////////////////////////////////////////////////
	// The final command draws all of the objects and text onto the main layer.
	///////////////////////////////////////////////////////////////////////////

	rackImage.mainLayer.draw();
}