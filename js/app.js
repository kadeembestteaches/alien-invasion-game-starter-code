/*

    WE WANT TO MOVE ALL THE SPACESHIPS DOWNWARDS!!! 



    We need a setInterval() 
    //Increase the margin top every 1 second



*/


//







const moveSpaceShipDownwards = (spaceship,speed)=>{


    let marginPx=0;

  setInterval(()=>{

        marginPx+=10;
        spaceship.style.marginTop = `${marginPx}px`;

    },speed);
}

const moveCannon = (cannon,directionPx)=>{


    let columnNo = 0;

    document.addEventListener("keydown",(event)=>{

    
        if(event.key=="ArrowRight")
        {
            columnNo+=1;
          cannon.style.gridColumn=columnNo;
        ///  cannon.style.marginLeft =`${currentPx}px`;
        }

        else if(event.key=="ArrowLeft")
        {
            columnNo-=1;
            cannon.style.gridColumn=columnNo;;  
        }

        else if(event.key==" ")
        {
           
        }

        else
        {
            alert("Yo, you didn't any any key that we care about")
        }

    });

 

}


const spaceships = document.querySelectorAll(".spaceships");
const cannon  = document.querySelector("#cannon");

moveCannon(cannon,0);


for(let i=0; i<spaceships.length; i++)
{
    moveSpaceShipDownwards(spaceships[i],1000);

}


//console.log(spaceships);
