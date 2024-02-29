//feature1
//Operational using mouse || buttons provided in the html
let numberofDrumButtons=document.querySelectorAll(".drum").length;
for(let i=0;i<numberofDrumButtons;i++){

    
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){

        buttonPressed = this.textContent;
        MakeSound(buttonPressed);
        buttonAnimation(buttonPressed);
    });

    document.addEventListener("keypress",function(event){

            MakeSound(event.key);
            buttonAnimation(event.key);
    });

}


function MakeSound(button){

    switch(button){

            case 'w':
                var audio = new Audio("./sounds/tom-1.mp3")
                audio.play();
            break;

            case 'a':
                var audio = new Audio("./sounds/tom-2.mp3")
                audio.play();
            break;

            case 's':
                var audio = new Audio("./sounds/tom-3.mp3")
                audio.play();
            break;

            case 'd':
                var audio = new Audio("./sounds/tom-4.mp3")
                audio.play();
            break;

            case 'j':
                var audio = new Audio("./sounds/crash.mp3")
                audio.play();
            break;

            case 'k':
                var audio = new Audio("./sounds/kick-bass.mp3")
                audio.play();
            break;

            case 'l':
                var audio = new Audio("./sounds/snare.mp3")
                audio.play();
            break;

            default:
                console.log();
    }

}

function buttonAnimation(currentKey){

    var activeButton=document.querySelector("."+currentKey);

    //Adding the class to the <button> that was pressed..
    activeButton.classList.toggle("pressed");//animation gets applied

    setTimeout(function(){
        activeButton.classList.toggle("pressed");//animation gets removed after .1 sec
    },100);

}
