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
		leftmargin = {},
		topmargin = {},
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
	// The font type and colour is set as standard for all labels.
	///////////////////////////////////////////////////////////////////////////

	label.font = 'Arial';
	label.fontcolour = 'black';

	///////////////////////////////////////////////////////////////////////////
	// The left margin is set so that the racks are centered in the canvas.
	///////////////////////////////////////////////////////////////////////////

	leftmargin = (width/67)/2;
	topmargin = (height/64)/2;

    ///////////////////////////////////////////////////////////////////////////
	// The cells.racks loop sets up the 5 racks.
    ///////////////////////////////////////////////////////////////////////////

   	cells.racks = [];

    for (i = 0; i < 5; i++){
		cells.racks[i] = new Kinetic.Rect({
			x: leftmargin+(33+20*i)*grid,
			y: topmargin+2.5*grid,
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

    cells.widthsensors = 16*grid;
	cells.heightsensors = 2*grid;
	cells.fillsensors = 'gray';
	cells.strokesensors = 'black';
	cells.strokeWsensors = 2;

    for (i = 0; i < 5; i++){
		cells.sensorstop[i] = new Kinetic.Rect({
			x: leftmargin+(35+20*i)*grid,
			y: topmargin+0.5*grid,
			width: cells.widthsensors,
			height: cells.heightsensors,
			fill: cells.fillsensors,
			stroke: cells.strokesensors,
			strokeWidth: cells.strokeWsensors
		}),
		cells.sensorsbottom[i] = new Kinetic.Rect({
			x: leftmargin+(35+20*i)*grid,
			y: topmargin+58.5*grid,
			width: cells.widthsensors,
			height: cells.heightsensors,
			fill: cells.fillsensors,
			stroke: cells.strokesensors,
			strokeWidth: cells.strokeWsensors
		});
	}

    ///////////////////////////////////////////////////////////////////////////
    // Cable management sections are added.
    ///////////////////////////////////////////////////////////////////////////

   	cells.widthcableman = 20*grid;
   	cells.heightcableman = 1*grid;
   	cells.fillcableman = 'dimgray';
   	cells.strokecableman = 'black';
   	cells.strokeWcableman = 2;

   	cells.cableman = [];

	for (i = 0; i < 4; i++){
        cells.cableman[i] = new Kinetic.Rect({
            x: leftmargin+(33+20*i)*grid,
            y: topmargin+17.5*grid,
			width: cells.widthcableman,
			height: cells.heightcableman,
			fill: cells.fillcableman,
			stroke: cells.strokeWcableman,
			strokeWidth: cells.strokeWcableman
		});
	}   

	for (i = 4; i < 8; i++){
        cells.cableman[i] = new Kinetic.Rect({
            x: leftmargin+(33+20*(i-4))*grid,
            y: topmargin+26.5*grid,
			width: cells.widthcableman,
			height: cells.heightcableman,
			fill: cells.fillcableman,
			stroke: cells.strokecableman,
			strokeWidth: cells.strokeWcableman
		});
	} 

	for (i = 8; i < 10; i++){
        cells.cableman[i] = new Kinetic.Rect({
            x: leftmargin+(73+20*(i-8))*grid,
            y: topmargin+30.5*grid,
			width: cells.widthcableman,
			height: cells.heightcableman,
			fill: cells.fillcableman,
			stroke: cells.strokecableman,
			strokeWidth: cells.strokeWcableman
		});
	} 

	for (i = 10; i < 12; i++){
        cells.cableman[i] = new Kinetic.Rect({
            x: leftmargin+(73+20*(i-10))*grid,
            y: topmargin+39.5*grid,
			width: cells.widthcableman,
			height: cells.heightcableman,
			fill: cells.fillcableman,
			stroke: cells.strokecableman,
			strokeWidth: cells.strokeWcableman
		});
	} 

	for (i = 12; i < 14; i++){
        cells.cableman[i] = new Kinetic.Rect({
            x: leftmargin+73*grid,
            y: topmargin+(41.5+9*(i-12))*grid,
			width: cells.widthcableman,
			height: cells.heightcableman,
			fill: cells.fillcableman,
			stroke: cells.strokecableman,
			strokeWidth: cells.strokeWcableman
		});
	} 

	cells.cableman14 = new Kinetic.Rect({
		x: leftmargin+73*grid,
		y: topmargin+28.5*grid,
		width: cells.widthcableman,
		height: cells.heightcableman,
		fill: cells.fillcableman,
		stroke: cells.strokecableman,
		strokeWidth: cells.strokeWcableman
	});

	///////////////////////////////////////////////////////////////////////////
	// The 3 HV crates are added next and numbered from left to right then
	// descending.
	///////////////////////////////////////////////////////////////////////////	

	cells.widthhv = 20*grid;
	cells.heighthv = 8*grid;
	cells.areahv = cells.widthhv*cells.heighthv;
	cells.fillhv = 'lightslategray';
	cells.strokehv = 'black';
	cells.strokeWhv = 2;
	label.fontsizehv = 0.0025*cells.areahv;

	cells.hv0 = new Kinetic.Rect({
		x: leftmargin+53*grid,
		y: topmargin+2.5*grid,
		width: cells.widthhv,
		height: cells.heighthv,
		fill: cells.fillhv,
		stroke: cells.strokehv,
		strokeWidth: cells.strokeWhv
	});

    label.hv0 = new Kinetic.Text({
   		x: leftmargin+53*grid,
       	y: topmargin+2.5*grid,
       	width: cells.widthhv,
      	text: 'HV 1',
       	fontSize: label.fontsizehv,
       	fontFamily: label.font,
       	fill: label.fontcolour,
       	padding: cells.heighthv*0.3,
        align: 'center'
   	});

	cells.hv = [];
	label.hv = [];

	for (i = 1; i < 3; i++){
        cells.hv[i] = new Kinetic.Rect({
            x: leftmargin+(93+20*(i-1))*grid,
            y: topmargin+2.5*grid,
			width: cells.widthhv,
			height: cells.heighthv,
			fill: cells.fillhv,
			stroke: cells.strokehv,
			strokeWidth: cells.strokeWhv
		}),
        label.hv[i] = new Kinetic.Text({
            x: leftmargin+(93+20*(i-1))*grid,
            y: topmargin+2.5*grid,
            width: cells.widthhv,
            text: 'HV '+(i+1),
            fontSize: label.fontsizehv,
            fontFamily: label.font,
            fill: label.fontcolour,
            padding: cells.heighthv*0.3,
            align: 'center'
      	});
	}

	///////////////////////////////////////////////////////////////////////////
	// NIM crates are included next and numbered in the same way as the HV
	// crates.
	///////////////////////////////////////////////////////////////////////////	

	cells.widthnim = 20*grid;
	cells.heightnim = 5*grid;
	cells.areanim = cells.widthnim*cells.heightnim;
	cells.fillnim = 'lightsteelblue';
	cells.strokenim = 'black';
	cells.strokeWnim = 2;
	label.fontsizenim = 0.003*cells.areanim;

	cells.nim = [];
	label.nim =[];

	for (i = 0; i < 5; i++){
        cells.nim[i] = new Kinetic.Rect({
            x: leftmargin+(33+20*i)*grid,
            y: topmargin+11.5*grid,
			width: cells.widthnim,
			height: cells.heightnim,
			fill: cells.fillnim,
			stroke: cells.strokenim,
			strokeWidth: cells.strokeWnim
		}),
		label.nim[i] = new Kinetic.Text({
            x: leftmargin+(33+20*i)*grid,
            y: topmargin+11.5*grid,
            width: cells.widthnim,
            text: 'NIM '+(i+1),
            fontSize: label.fontsizenim,
            fontFamily: label.font,
            fill: label.fontcolour,
            padding: cells.heightnim*0.25,
            align: 'center'
        });
	} 

	for (i = 5; i < 7; i++){
		cells.nim[i] = new Kinetic.Rect({
			x: leftmargin+93*grid,
			y: topmargin+(45.5+8*(i-5))*grid,
			width: cells.widthnim,
			height: cells.heightnim,
			fill: cells.fillnim,
			stroke: cells.strokenim,
			strokeWidth: cells.strokeWnim
		}),
        label.nim[i] = new Kinetic.Text({
            x: leftmargin+93*grid,
            y: topmargin+(45.5+8*(i-5))*grid,
            width: cells.widthnim,
            text: 'NIM '+(i+1),
            fontSize: label.fontsizenim,
            fontFamily: label.font,
            fill: label.fontcolour,
            padding: cells.heightnim*0.25,
            align: 'center'
      	});
	}

	///////////////////////////////////////////////////////////////////////////
	// VME crates are added next and numbered as before.
	///////////////////////////////////////////////////////////////////////////	

	cells.widthvme = 20*grid;
	cells.heightvme = 8*grid;
	cells.areavme = cells.widthvme*cells.heightvme;
	cells.fillvme = 'powderblue';
	cells.strokevme = 'black';
	cells.strokeWvme = 2;
	label.fontsizevme = 0.0023*cells.areavme;

	cells.vme = [];
	label.vme = [];

	for (i = 0; i < 4; i++){
		cells.vme[i] = new Kinetic.Rect({
			x: leftmargin+(33+20*i)*grid,
			y: topmargin+18.5*grid,
			width: cells.widthvme,
			height: cells.heightvme,
			fill: cells.fillvme,
			stroke: cells.strokevme,
			strokeWidth: cells.strokeWvme
		}),
	    label.vme[i] = new Kinetic.Text({
            x: leftmargin+(33+20*i)*grid,
            y: topmargin+18.5*grid,
            width: cells.widthvme,
            text: 'VME '+(i+1),
            fontSize: label.fontsizevme,
            fontFamily: label.font,
            fill: label.fontcolour,
            padding: cells.heightvme*0.3,
       		align: 'center'
      	});
	}   

	for (i = 4; i < 6; i++){
		cells.vme[i] = new Kinetic.Rect({
			x: leftmargin+(73+20*(i-4))*grid,
			y: topmargin+31.5*grid,
			width: cells.widthvme,
			height: cells.heightvme,
			fill: cells.fillvme,
			stroke: cells.strokevme,
			strokeWidth: cells.strokeWvme
		}),
	    label.vme[i] = new Kinetic.Text({
            x: leftmargin+(73+20*(i-4))*grid,
            y: topmargin+31.5*grid,
            width: cells.widthvme,
            text: 'VME '+(i+1),
            fontSize: label.fontsizevme,
            fontFamily: label.font,
            fill: label.fontcolour,
            padding: cells.heightvme*0.3,
       		align: 'center'
     	 });
	}   

	cells.vme6 = new Kinetic.Rect({
		x: leftmargin+73*grid,
		y: topmargin+42.5*grid,
		width: cells.widthvme,
		height: cells.heightvme,
		fill: cells.fillvme,
		stroke: cells.strokevme,
		strokeWidth: cells.strokeWvme
	});

   	label.vme6 = new Kinetic.Text({
   		x: leftmargin+73*grid,
       	y: topmargin+42.5*grid,
       	width: cells.widthvme,
      	text: 'VME 7',
       	fontSize: label.fontsizevme,
       	fontFamily: label.font,
       	fill: label.fontcolour,
       	padding: cells.heightvme*0.3,
       	align: 'center'
   	});


	///////////////////////////////////////////////////////////////////////////
	// Data storage arrays are added, all numbered as before.
	///////////////////////////////////////////////////////////////////////////

	cells.widthdsa = 20*grid;
	cells.heightdsa = 6*grid;
	cells.areadsa = cells.widthdsa*cells.heightdsa;
	cells.filldsa = 'silver';
	cells.strokedsa = 'black';
	cells.strokeWdsa = 2;
	label.fontsizedsa = 0.0018*cells.areadsa;

	cells.dsa = [];
   	label.dsa = [];

	cells.dsa0 = new Kinetic.Rect({
		x: leftmargin+33*grid,
		y: topmargin+45.5*grid,
		width: cells.widthdsa,
		height: cells.heightdsa,
		fill: cells.filldsa,
		stroke: cells.strokedsa,
		strokeWidth: cells.strokeWdsa
	});	

   	label.dsa0 = new Kinetic.Text({
   		x: leftmargin+33*grid,
       	y: topmargin+45.5*grid,
       	width: cells.widthdsa,
      	text: 'Data Storage Array 1',
       	fontSize: label.fontsizedsa,
       	fontFamily: label.font,
       	fill: label.fontcolour,
       	padding: cells.heightdsa*0.25,
        align: 'center'
   	}); 

	for (i = 1; i < 4; i++){
		cells.dsa[i] = new Kinetic.Rect({
			x: leftmargin+(33+20*(i-1))*grid,
			y: topmargin+52.5*grid,
			width: cells.widthdsa,
			height: cells.heightdsa,
			fill: cells.filldsa,
			stroke: cells.strokedsa,
			strokeWidth: cells.strokeWdsa
		}),
	    label.dsa[i] = new Kinetic.Text({
            x: leftmargin+(33+20*(i-1))*grid,
            y: topmargin+52.5*grid,
            width: cells.widthdsa,
            text: 'Data Storage Array ' + (i+1),
            fontSize: label.fontsizedsa,
            fontFamily: label.font,
            fill: label.fontcolour,
            padding: cells.heightdsa*0.25,
            align: 'center'
        });
	}     

	///////////////////////////////////////////////////////////////////////////
	// The network switches are added and numbered from left to right.
	///////////////////////////////////////////////////////////////////////////

	cells.widthnet = 20*grid;
	cells.heightnet = 1*grid;
	cells.areanet = cells.widthnet*cells.heightnet;
	cells.fillnet = 'slategray';
	cells.strokenet = 'black';
	cells.strokeWnet = 2;
	label.fontsizenet = 0.0065*cells.areanet;

	cells.net = [];
	label.net = [];

	for (i = 0; i < 4; i++){
		cells.net[i] = new Kinetic.Rect({
			x: leftmargin+(53+20*i)*grid,
			y: topmargin+51.5*grid,
			width: cells.widthnet,
			height: cells.heightnet,
			fill: cells.fillnet,
			stroke: cells.strokenet,
			strokeWidth: cells.strokeWnet
		}),
	    label.net[i] = new Kinetic.Text({
            x: leftmargin+(53+20*i)*grid,
            y: topmargin+51.5*grid,
            width: cells.widthnet,
            text: 'Network Switch '+(i+1),
            fontSize: label.fontsizenet,
            fontFamily: label.font,
            fill: label.fontcolour,
            align: 'center'
        });
	}   

	///////////////////////////////////////////////////////////////////////////////
	// The 2 computers are added into rack 1.
	///////////////////////////////////////////////////////////////////////////////

	cells.widthcomp = 20*grid;
	cells.heightcomp = 2*grid;
	cells.areacomp = cells.widthcomp*cells.heightcomp;
	cells.fillcomp = 'steelblue';
	cells.strokecomp = 'black';
	cells.strokeWcomp = 2;
	label.fontsizecomp = 0.005*cells.areacomp;

	cells.comp = [];
   	label.comp = [];

	for (i = 0; i < 2; i++){
		cells.comp[i] = new Kinetic.Rect({
			x: leftmargin+33*grid,
			y: topmargin+(38.5+3*i)*grid,
			width: cells.widthcomp,
			height: cells.heightcomp,
			fill: cells.fillcomp,
			stroke: cells.strokecomp,
			strokeWidth: cells.strokeWcomp
		}),
	    label.comp[i] = new Kinetic.Text({
            x: leftmargin+33*grid,
            y: topmargin+(38.5+3.1*i)*grid,
            width: cells.widthcomp,
            text: 'Computer '+(i+1),
            fontSize: label.fontsizecomp,
            fontFamily: label.font,
            fill: label.fontcolour,
            padding: cells.heightcomp*0.03,
            align: 'center'
        });
	}   

	///////////////////////////////////////////////////////////////////////////
	// In order to make this interface user-friendly, each rack is given a
	// label so that it is clear what crates, switches and cables are located
	// where. The interface visualises how the shack looks from the front and 
	// the racks are correspondingly labelled from left to right (1 to 5).
	///////////////////////////////////////////////////////////////////////////

	cells.widthlab = 8*grid;
	cells.heightlab = 2*grid;
	cells.arealab = cells.widthlab*cells.heightlab;
	cells.filllab = 'white';
	cells.strokelab = 'white';
	cells.strokeWlab = 2;
	label.fontsizelab = 0.015*cells.arealab;

	cells.labels = [];
	label.racks = [];

	for (i = 0; i < 5; i++){
		cells.labels[i] = new Kinetic.Rect({
			x: leftmargin+(39+20*i)*grid,
			y: topmargin+61*grid,
			width: cells.widthlab,
			height: cells.heightlab,
			fill: cells.filllab,
			stroke: cells.strokelab,
			strokeWidth: cells.strokeWlab
		}),
		label.racks[i] = new Kinetic.Text({
			x: leftmargin+(39+20*i)*grid,
			y: topmargin+61*grid,
			width: cells.widthlab,
			text: 'Rack '+(i+1),
			fontSize: label.fontsizelab,
			fontFamily: label.font,
			fill: label.fontcolour,
			align: 'center'
		});
	}

    ///////////////////////////////////////////////////////////////////////////
    // rackImage.mainLayer.add(...) adds the newly created objects and the 
    // corresponding text to the main layer within the stage (rackImage) set 
    // out in the conditions at the beginning of the code.
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
		rackImage.mainLayer.add(cells.labels[i]),
		rackImage.mainLayer.add(label.racks[i]);

	///////////////////////////////////////////////////////////////////////////
	// The final command draws all of the objects and text onto the main layer.
	///////////////////////////////////////////////////////////////////////////

	rackImage.mainLayer.draw();
}