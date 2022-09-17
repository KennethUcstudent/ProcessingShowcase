/*
    Paste the code for your week 4 exercise below.
*/
function setup(){
createCanvas(400, 400)
}

function draw (){
    background (220)
    circle( 250, 250, 100, 100 );
let midx = 250;

let midy = 250;

circle( 250, 250, 100 );


circle( midx, midy, 100 );

fill( 64, 128 );                // change the fill colour to grey at 50% opacity

circle( midx+5, midy+5, 100 );  // draw the bottom "shadow" circle offset by 5 pixels

fill( 255 );                    // reset to white at 100% opacity

circle( midx, midy, 100 );      // draw the top ellipse 

    fill( 255, 0, 0  );
    rect( 10, 10, 100, 100);

    dropCircle( 100, 100, 200)


face( 
    circle( hw, hh, 100,100)
)
face




}



function dropCircle( cx, cy, radius )
{
     strokeWeight( 0 );   
     fill( 64, 128 );
     circle( cx+5, cy-5, radius );
     fill( 255 );
     circle( cx, cy, radius );
}