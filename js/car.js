var context; //context of canvas
var interval;//interval of animation
var smokeList;//2D array of smoke and its variable
smokeList = new Array(60);//initiate all smoke object (change capacity to change the number of smoke)
for(var j = 0; j<smokeList.length;j++){
	smokeList[j] = new Array(7); //stocking variable of smoke
	smokeList[j][0] = Math.random() * -5 - 15; //x-coordinate with random value
	smokeList[j][1] = Math.random() * 10 + 148;//y-coordinate with random value
	smokeList[j][2] = Math.random() * 2;//x accelerate speed with random value
	smokeList[j][3] = Math.random() * 5;//y accelerate speed with random value
	smokeList[j][4] = Math.random() / 6;//expand speed with random value
	smokeList[j][5] = 0.6;//density of smoke(global alpha)
	smokeList[j][6] = 10;//radius
}
var interval_int = 50;//interval timer

/*
Change interval timer by getting value from html input.
*/
function changeInterval(){
	clearInterval(interval);
	interval_int = 100 - document.getElementById("wow").value;
	interval = setInterval(animateSmoke, interval_int);
}

/*
Draw a car and initiate animation interval.
*/
function drawShapes() {
	var a_canvas = document.getElementById("a");
	context = a_canvas.getContext("2d");
	
	//car inner filler
	context.translate(200, 0);
	context.beginPath();
	context.rect(164,177,60,60); 
	context.closePath();
	context.fillStyle = "#8B7500";
	context.fill();
	context.beginPath();
	context.rect(13,141,30,40); 
	context.closePath();
	context.fillStyle = "#8B7500";
	context.fill();
				
	//front outter tire
	context.beginPath();
	context.lineWidth = 2;
	context.lineTo(227,196);
	context.lineTo(208,194);
	context.lineTo(192,202);
	context.lineTo(185,209);
	context.lineTo(174,234);
	context.lineTo(176,282);
	context.lineTo(179,301);
	context.lineTo(187,323);
	context.lineTo(196,338);
	context.lineTo(206,347);
	context.lineTo(221,352);
	context.lineTo(252,353);
	context.lineTo(265,349);
	context.lineTo(278,339);
	context.lineTo(287,328);
	context.lineTo(282,235);
	context.lineTo(227,196);
	context.stroke();
	context.closePath();
	context.fillStyle = "black";
	context.fill();
	
	//back outter tire
	context.beginPath();
	context.lineWidth = 2;
	context.lineTo(24,148);
	context.lineTo(20,155);
	context.lineTo(25,235);
	context.lineTo(30,239);
	context.lineTo(59,241);
	context.lineTo(69,228);
	context.lineTo(37,147);
	context.lineTo(24,148);
	context.stroke();
	context.closePath();
	context.fill();

	//outline, filled yellow
	context.beginPath();
	context.lineWidth = 2;
	context.lineTo(26,108);
	context.lineTo(54,104);
	context.lineTo(86,74);
	context.lineTo(96,69);
	context.lineTo(112,65);
	context.lineTo(140,61);
	context.lineTo(292,65);
	context.lineTo(314,73);
	context.lineTo(380,115);
	context.lineTo(428,119);
	context.lineTo(482,125);
	context.lineTo(520,135);
	context.lineTo(540,139);
	context.lineTo(556,145);
	context.lineTo(572,153);
	context.lineTo(588,189);
	context.lineTo(582,255);
	context.lineTo(570,273);
	context.lineTo(528,303);
	context.lineTo(325,335);
	context.lineTo(283,327);
	context.lineTo(277,299);
	context.lineTo(269,277);
	context.lineTo(265,259);
	context.lineTo(251,231);
	context.lineTo(233,201);
	context.lineTo(225,195);
	context.lineTo(213,185);
	context.lineTo(197,185);
	context.lineTo(181,195);
	context.lineTo(173,215);
	context.lineTo(173,263);
	context.lineTo(176,281);
	context.lineTo(74,229);
	context.lineTo(56,224);
	context.lineTo(46,206);
	context.lineTo(34,158);
	context.lineTo(32,152);
	context.lineTo(20,146);
	context.lineTo(17,148);
	context.lineTo(14,157);
	context.lineTo(13,163);
	context.lineTo(10,140);
	context.lineTo(26,108);
	context.stroke();
	context.closePath();
	context.fillStyle = "yellow";
	context.fill();
	
	//middle line
	context.beginPath();
	context.lineWidth = 1;
	context.lineTo(26,108);
	context.lineTo(43,111);
	context.lineTo(56,121);
	context.lineTo(66,125);
	context.lineTo(130,131);
	context.lineTo(206,139);
	context.lineTo(276,161);
	context.lineTo(318,181);
	context.lineTo(350,185);
	context.lineTo(522,179);
	context.lineTo(575,157);
	context.lineTo(575,157);
	context.stroke();
	context.closePath();
	
	//front glass
	context.beginPath();
	context.lineWidth = 2;
	context.lineTo(314,74);
	context.lineTo(228,72);
	context.lineTo(145,75);
	context.lineTo(164,127);
	context.lineTo(204,123);
	context.lineTo(247,121);
	context.lineTo(254,116);
	context.lineTo(261,114);
	context.lineTo(350,113);
	context.lineTo(358,115);
	context.lineTo(378,115);
	context.stroke();
	context.closePath();
	context.fillStyle = "grey";
	context.fill();
	
	//front light pad
	context.beginPath();
	context.lineWidth = 2;
	context.lineTo(323,192);
	context.lineTo(522,187);
	context.lineTo(570,168);
	context.lineTo(574,166);
	context.lineTo(580,181);
	context.lineTo(579,190);
	context.lineTo(561,208);
	context.lineTo(528,226);
	context.lineTo(349,227);
	context.lineTo(338,221);
	context.lineTo(328,196);
	context.lineTo(330,192);
	context.lineTo(323,192);
	context.stroke();
	context.closePath();
	context.fill();
	
	//pad bottom
	context.beginPath();
	context.lineWidth = 1;
	context.lineTo(323,192);
	context.lineTo(334,226);
	context.lineTo(347,235);
	context.lineTo(382,238);
	context.lineTo(534,235);
	context.lineTo(563,220);
	context.lineTo(587,194);
	context.stroke();
	context.closePath();
	
	//front bottom
	context.beginPath();
	context.lineWidth = 2;
	context.lineTo(416,297);
	context.lineTo(526,287);
	context.lineTo(556,269);
	context.lineTo(570,256);
	context.lineTo(570,240);
	context.lineTo(530,261);
	context.lineTo(423,273);
	context.lineTo(416,297);
	context.stroke();
	context.closePath();
	context.fill();
	
	//small bulb left
	context.beginPath();
	context.lineWidth = 1;
	context.arc(384,286,15,0,Math.PI*2,true);
	context.stroke();
	context.closePath();
	context.fillStyle = "#D3D3D3";
	context.fill();
	
	//small bulb right
	context.beginPath();
	context.lineWidth = 1;
	context.lineTo(585,227);
	context.lineTo(580,228);
	context.lineTo(576,242);
	context.lineTo(577,254);
	context.lineTo(583,251);
	context.stroke();
	context.closePath()
	context.fillStyle = "#D3D3D3";;
	context.fill();
	
	//light pad inner
	context.beginPath();
	context.lineWidth = 2;
	context.lineTo(332,192);
	context.lineTo(328,196);
	context.lineTo(339,218);
	context.lineTo(524,221);
	context.lineTo(564,184);
	context.lineTo(564,172);
	context.lineTo(523,187);
	context.lineTo(332,192);
	context.stroke();
	context.closePath();
	context.fillStyle = "black";
	context.fill();
	
	//front light left line
	context.beginPath();
	context.lineWidth = 2;
	context.lineTo(332,192);
	context.lineTo(328,196);
	context.lineTo(339,218);
	context.lineTo(398,219);
	context.lineTo(398,205);
	context.lineTo(392,191);
	context.lineTo(332,192);
	context.stroke();
	context.closePath();
	context.fillStyle = "#D3D3D3";
	context.fill();
	
	//front light left
	context.beginPath();
	context.lineWidth = 2;
	context.lineTo(332,192);
	context.lineTo(328,196);
	context.lineTo(339,218);
	context.lineTo(376,219);
	context.lineTo(381,208);
	context.lineTo(382,202);
	context.lineTo(381,197);
	context.lineTo(378,192);
	context.lineTo(332,192);
	context.stroke();
	context.closePath();
	context.fillStyle = "white";
	context.fill();
	
	//front light right
	context.beginPath();
	context.lineWidth = 2;
	context.lineTo(553,175);
	context.lineTo(553,194);
	context.lineTo(564,184);
	context.lineTo(564,171);
	context.lineTo(553,175);
	context.stroke();
	context.closePath();
	context.fill();
		
	//symbol
	context.beginPath();
	context.lineWidth = 2;
	context.lineTo(502,200);
	context.lineTo(504,209);
	context.lineTo(516,208);
	context.lineTo(517,211);
	context.lineTo(527,210);
	context.lineTo(527,206);
	context.lineTo(530,205);
	context.lineTo(529.5,196);
	context.lineTo(525,197);
	context.lineTo(525,194.5);
	context.lineTo(515,196);
	context.lineTo(515,199);
	context.lineTo(502,200);
	context.stroke();
	context.closePath();
	context.fillStyle = "#CDC673";
	context.fill();

	
	//back inner tire
	context.beginPath();
	context.lineWidth = 2;
	context.lineTo(20,155);
	context.lineTo(16,160);
	context.lineTo(14,165);
	context.lineTo(15,207);
	context.lineTo(18,221);
	context.lineTo(22,230);
	context.lineTo(24,234);
	context.lineTo(30,232);
	context.lineTo(32,226);
	context.lineTo(35,217);
	context.lineTo(36,200);
	context.lineTo(36,183);
	context.lineTo(33,167);
	context.lineTo(30,160);
	context.lineTo(26,155);
	context.lineTo(21,155);
	context.stroke();
	context.closePath();
	context.fillStyle = "grey";
	context.fill();
	
	//front inner tire
	context.beginPath();
	context.lineWidth = 2;
	context.lineTo(202,210);
	context.lineTo(195,211);
	context.lineTo(186,217);
	context.lineTo(182,224);
	context.lineTo(178,237);
	context.lineTo(176,250);
	context.lineTo(177,282);
	context.lineTo(178,297);
	context.lineTo(184,315);
	context.lineTo(198,331);
	context.lineTo(208,339);
	context.lineTo(214,340);
	context.lineTo(225,338);
	context.lineTo(232,333);
	context.lineTo(237,322);
	context.lineTo(241,306);
	context.lineTo(242,276);
	context.lineTo(238,250);
	context.lineTo(228,228);
	context.lineTo(221,220);
	context.lineTo(214,213);
	context.lineTo(202,210);
	context.stroke();
	context.closePath();
	context.fillStyle = "grey";
	context.fill();

	
	//back tire centre
	context.beginPath();
	context.lineWidth = 1;
	context.arc(25,192,4,0,Math.PI*2,true);
	context.stroke();
	context.closePath();
	context.fillStyle = "#696969";
	context.fill();
	
	//front tire centre
	context.beginPath();
	context.lineWidth = 1;
	context.arc(207,275,10,0,Math.PI*2,true);
	context.stroke();
	context.closePath();
	context.fill();
	
	interval = setInterval(animateSmoke, interval_int);
};


/*
Clear and draw new smoke.
*/
var animateSmoke = function() {
	context.clearRect(-210, 0, 220, 200);
	context.clearRect(-110, 0, 125, 130);
	context.clearRect(-110, 0, 130, 120);
	context.clearRect(-110, 0, 122, 133);
	
	for (var i=0; i<smokeList.length; i++){
		smokeList[i][0] -= smokeList[i][2];//x accelerate
		smokeList[i][1] -= smokeList[i][3];//y accelerate
		smokeList[i][5] -= 0.02;//simulating smoke fading
		smokeList[i][6] += smokeList[i][4];//expand smoke
		if (smokeList[i][5] <= 0) {//use density to reset smoke position
		//	for(var k = 0; k < smokeList.length; k++){//comment this out when condition not working
			smokeList[i][0] = Math.random() * -5 - 15;
			smokeList[i][1] = Math.random() * 10 + 148;
			smokeList[i][2] = Math.random() * 2;
			smokeList[i][3] = Math.random() * 5;
			smokeList[i][4] = Math.random() / 6;
			smokeList[i][5] = 0.6;
			smokeList[i][6] = 10;
		//	}
		}
		drawSmoke(smokeList[i][0], smokeList[i][1], smokeList[i][6], smokeList[i][5]);
	}
	
};

/*
Draw new smoke.
*/
function drawSmoke(x, y, r, density){
	context.beginPath();
	context.arc(x, y, r, 0, Math.PI*2, true); 
	context.arc(x - 4, y - 7, r, 0, Math.PI*2, true);
	context.arc(x - 2, y - 10, r, 0, Math.PI*2, true);
	context.closePath();
	context.fillStyle = "grey";
	context.globalAlpha=density;
	context.fill();
};
    