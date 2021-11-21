canvas=document.getElementById("myCanvas");
mrPen=canvas.getContext("2d");

mrPen.beginPath();
mrPen.strokeStyle="gray";
mrPen.lineWidth=2;
mrPen.rect(100,100,600,400);
mrPen.stroke();

mrPen.beginPath();
mrPen.strokeStyle="blue";
mrPen.lineWidth=5;
mrPen.arc(200,200,40,0,2*Math.PI);
mrPen.stroke();

mrPen.beginPath();
mrPen.strokeStyle="black";
mrPen.lineWidth=5;
mrPen.arc(300,200,40,0,2*Math.PI);
mrPen.stroke();

mrPen.beginPath();
mrPen.strokeStyle="red";
mrPen.lineWidth=5;
mrPen.arc(400,200,40,0,2*Math.PI);
mrPen.stroke();

mrPen.beginPath();
mrPen.strokeStyle="yellow";
mrPen.lineWidth=5;
mrPen.arc(250,250,40,0,2*Math.PI);
mrPen.stroke();

mrPen.beginPath();
mrPen.strokeStyle="green";
mrPen.lineWidth=5;
mrPen.arc(350,250,40,0,2*Math.PI);
mrPen.stroke();


