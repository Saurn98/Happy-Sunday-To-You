var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");
width = screen.width;
height = screen.height;
document.getElementById("image").width = width;
document.getElementById("image").height = height;
get_image = "BirthdayImage.jpg";
function new_image()
{
	fabric.Image.fromURL(get_image, function(Img) {
        block_image_object = Img;

        block_image_object.scaleToWidth(700);
        block_image_object.scaleToHeight(510);
        block_image_object.set({
            top:0,
            left:0
        });
        canvas.add(block_image_object);
    });
	
}

function playSound(){
	x.play();
    new_image()
}
function changed()
{
    names = document.getElementById("name").value;
    document.getElementById("main").innerHTML = "Dear " + names;
}
function removes()
{
    document.getElementById("main").disabled = false;
    names = document.getElementById("name").value;
    document.getElementById("main").innerHTML = "Dear " + names;
    document.getElementById("reb").style.display = "none";
    document.getElementById("name").style.display = "none";
    document.getElementById("rela").style.display = "none";
}

