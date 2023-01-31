/*
img follows mouse 

document.addEventListener("mousemove", parallax);
    var img1 = document.getElementById('servidor')
    var img2 = document.getElementById('nuvem-1')
    function parallax(event) {
        
        if(event){

            var posx = event.screenX / 50
            var posy = event.screenY / 50



            console.log(posx,posy)

            img1.style.transform = 'rotateX('+(posy)+'deg) rotateY('+(-posx)+'deg)';
            img2.style.transform = 'rotateX('+(posx)+'deg) rotateY('+(-posy)+'deg)';

        }
        
            
    } 
    
    image walk on your x-axis relative to the mouse

    document.addEventListener("mousemove", parallax);
    var img1 = document.getElementById('servidor')
    var img2 = document.getElementById('nuvem-1')

    var rect = img1.getBoundingClientRect();
    var rect2 = img2.getBoundingClientRect();
    function parallax(event) {
        
        if(event){

            var posx = event.screenX;

            posx = posx / 90;


            var current_x1 = rect.left;
            var current_x2 = rect2.left;


            current_x1 += (-posx);
            current_x2 += (posx);

            img1.style.left = (current_x1)+'px';
            img2.style.left = (current_x2)+'px';

        }
        
            
    }
    */