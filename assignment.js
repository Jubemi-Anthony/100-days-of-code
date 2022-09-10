const btn = document.querySelector("#btn");
const inp = document.querySelector("#inp");
const body = document.querySelector('body');
const h1 = document.querySelector('.h1');

//HEIGHT AND WIDTH OF THE BUTTON AFTER CLICKING
let widthHeight = 40; 

btn.addEventListener('click', () =>{
    //RANDOM POSITION FROM THE TOP
    function top(){
        const position = Math.floor(Math.random() * 100) + 1; 
        return position;
    }
    //RANDOM POSITION FROM THE LEFT
    function left(){
        const position = Math.floor(Math.random() * 100) + 1; 
        return position;
    }

    //CHANGING THE POSITION OF THE INPUT
    inp.style.position = 'absolute';
    inp.style.top = `${top()}%`;
    inp.style.left = `${left()}%`;
    
    //CREATING THE H1 TAG FOR THE INPUT VALUE
    const num = document.createElement('h1');

    //GENERATING A RANDOM NUMBER FOR THE INPUT
    inp.value = Math.floor(Math.random() * 80) + 1;
    let x = inp.value;

    num.textContent = x;

    //APPENDING THE NUMBER TO THE DIV IN THE BODY
    h1.appendChild(num);

    //CHANGING THE WIDTH AND HEIGHT OF THE BUTTON
    widthHeight = widthHeight + 10;
    if(widthHeight == 150){
        widthHeight = widthHeight - 100;
    }
    btn.style.width = `${widthHeight}px`;
    btn.style.height = `${widthHeight}px`;

    
        if(x>0 && x<10){
            body.style.backgroundColor = 'gold';
        }else if(x>10 && x<20){
            body.style.backgroundColor = 'red';
        }else if(x>20 && x<30){
            body.style.backgroundColor = 'blue';
        }else if(x>30 && x<40){
            body.style.backgroundColor = 'yellow';
        }else if(x>40 && x<50){
            btn.textContent = 'I LOVE YOU ANTHONY';
        }else if(x>50 && x<60){
            inp.style.rotate = '30deg';
        }else if(x>60 && x<70){
            //CREATING A UL TAG FOR THE LEAP YEARS
            const list = document.createElement('ul');
            document.body.appendChild(list);

            let leap = [];
            let dif = 2022 - 2000;
            let leapY = 2000;
            dif = Math.floor(dif/4);

            //GETTING THE LEAP YEARS
            for(let i =0; i<dif; i++){
                leapY += 4;
                leap.push(leapY);
                let li = document.createElement('li');
                li.textContent = leap[i];
                list.appendChild(li);
            }
        }else if(x>70 && x<80){
            const colors = ['yellow', 'red', 'purple', 'green'];
            
            //GETTING A RANDOM COLOUR FOR THE BUTTON AND INPUT
            const colorLength = colors.length;
            const rand = Math.floor(Math.random() * colorLength);
            let randomColour = colors[rand];

            btn.style.borderRadius = '20px';
            inp.style.borderRadius = '20px';

            btn.style.backgroundColor = `${randomColour}`;
            inp.style.backgroundColor = `${randomColour}`;
        }

        //IF NONE OF THE REQUIREMENTS WERE MET
        else{
            alert('The input is a multiple of 10');
        }
});
