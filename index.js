//GETTING ALL I NEED;
const help = document.querySelector('#help');
const helpform = document.querySelector('.help');
const player1 = document.querySelector('#player1');
const player2 = document.querySelector('#player2');
const input1 = document.querySelector('#input1');
const input2 = document.querySelector('#input2');
const check = document.querySelector('#check');
const check2 = document.querySelector('#check2');
const cancel = document.querySelector('#cancel');
const play = document.querySelector('#play');
const imgA = document.querySelector('#img1');
const imgB = document.querySelector('#img2');
const para = document.querySelector('#para');
const label = document.querySelector('#label2');

//CREATING THE GAME IMAGES
let img1 = document.createElement('img');
img1.setAttribute('src', './images/rock1.png');

let img2 = document.createElement('img');
img2.setAttribute('src', './images/rock2.png');

//APPENDING THE IMAGES
imgA.appendChild(img1);
imgB.appendChild(img2);

//DISPLAYING THE HELP FORM
help.addEventListener('click', ()=>{
    helpform.classList.toggle('hidden')
})
//REMOVING THE HELP FORM
cancel.addEventListener('click', ()=>{
    helpform.classList.toggle('hidden')
})

//SETTING THE SCORES
let score1 = 0;
let score2 = 0;

player1.textContent = score1;
player2.textContent = score2;

//SETTING A BOOLEAN FOR THE PLAYER 2 INPUT
let q = false;

//SETTING CLICK EVENTS TO CHANGE THE VALUE OF THE BOOLEAN AND CHANGE THE TEXT CONTENT
check.addEventListener('click', ()=>{
    q = true;
    if(q === true){
        input2.removeAttribute('class');
        label.textContent = 'Player2:'
    }
})
check2.addEventListener('click', ()=>{
    q = false;
    if(q === false){
        input2.setAttribute('class', 'hidden');
        label.textContent = 'Computer:'
    }
})



//THE GAME
play.addEventListener('click', ()=>{

    //ROTATING THE IMAGES
    imgA.classList.toggle('rotate');
    imgB.classList.toggle('rotate');

    

    //EMPTY ARRAY FOR THE GAME IMAGES
    let pic1 =[];
    let pic2 =[];

    //CREATING THE IMAGES FOR PLAYER 1 & 2
    for(let i=0; i<3; i++){
        pic1.push(document.createElement('img'));
        pic2.push(document.createElement('img'));
    }

    //SETTING THE IMAGE ATTRIBUTES
    pic1[0].setAttribute('src', './images/rock1.png');
    pic1[1].setAttribute('src', './images/paper1.png');
    pic1[2].setAttribute('src', './images/scissor1.png');

    pic2[0].setAttribute('src', './images/rock2.png');
    pic2[1].setAttribute('src', './images/paper2.png');
    pic2[2].setAttribute('src', './images/scissor2.png');

    //TRANSFORMING THE VALUES TO LOWERCASE
    input1.value = input1.value.toLowerCase();
    input2.value = input2.value.toLowerCase();

    // CALLING THIS FUNCTION AFTER 3 SECONDS. 
    // I DID THIS BECAUSE I WANT THE VALUE TO CHANGE AFTER THE IMAGE HAS FINISHED ROTATING
    setTimeout(() => {
           //VALIDATE THE INPUT FROM PLAYER 1
    if (input1.value === 'r' || input1.value === 'p' || input1.value === 's'){
        //variable for the score
        let s1;
        let s2;
        
        //GETTING THE INPUT FROM PLAYER 1
        if(input1.value === 'r'){
            imgA.removeChild(img1);
            img1 = pic1[0];
            imgA.appendChild(img1);
            s1 = 'r';
        }else if(input1.value === 'p'){
            imgA.removeChild(img1);
            img1 = pic1[1];
            imgA.appendChild(img1);
            s1 = 'p';
        }else if(input1.value === 's'){
            imgA.removeChild(img1);
            img1 = pic1[2];
            imgA.appendChild(img1);
            s1 = 's'
        }

        //SELECTING COMPUTER OR PLAYER INPUT
        if(q === true){
            if(input2.value === 'r' || input2.value === 'p' || input2.value === 's'){
                //GETTING THE INPUT FROM PLAYER 1
                if(input2.value === 'r'){
                    imgB.removeChild(img2);
                    img2 = pic2[0];
                    imgB.appendChild(img2);
                    s2 = 'r';
                }else if(input2.value === 'p'){
                    imgB.removeChild(img2);
                    img2 = pic2[1];
                    imgB.appendChild(img2);
                    s2 = 'p';
                }else if(input2.value === 's'){
                    imgB.removeChild(img2);
                    img2 = pic2[2];
                    imgB.appendChild(img2);
                    s2 = 's'
                }
            }else{    
            alert('Enter either "R", "S" or "P" for Player 2. Click help for more')
            }
        }else{

            //GETTING A RANDOM NUMBER BETWEEN 1 AND 3
            const r = Math.floor(Math.random() * 3);

            //getting the player 2 image
            imgB.removeChild(img2);
            img2 = pic2[r];
            imgB.appendChild(img2);

            if(img2 === pic2[0]){
                s2 = 'r';
            }else if(img2 === pic2[1]){
                s2 = 'p';
            }else if(img2 === pic2[2]){
                s2 = 's';
            }
        }
            //GAME WINNER AND LOSER LOGIC
            if(s1 == s2){
                para.textContent = 'DRAW'
            }
            else if(s1 === 'r' && s2 === 'p'){
                para.textContent = 'PLAYER 2 WINS'
                score2 += 1
                player2.textContent = score2
                }
            else if(s1 === 'r' && s2 === 's'){
                para.textContent = 'PLAYER 1 WINS'
                score1 += 1
                player1.textContent = score1
            }
            else if(s1 === 's' && s2 === 'p'){
                para.textContent = 'PLAYER 1 WINS'
                score1 += 1
                player1.textContent = score1
            }
            else if(s1 === 's' && s2 === 'r'){
                para.textContent = 'PLAYER 2 WINS'
                score2 += 1
                player2.textContent = score2
            }
            else if(s1 === 'p' && s2 === 'r'){
                para.textContent = 'PLAYER 1 WINS'
                score1 += 1
                player1.textContent = score1
            }
            else if(s1 === 'p' && s2 === 's'){
                para.textContent = 'PLAYER 2 WINS'
                score2 += 1
                player2.textContent = score2
            }
        }else{
            alert('Enter either "R", "S" or "P". Click help for more')}
    }, 2000);  
    
    //REMOVING THE CLASS OF ROTATE AFTER 3 SECONDS BECAUSE I WANT TO ADD IT AGAIN AFTER EVERY CLICK
    setTimeout(() => {
       imgA.removeAttribute('class'); 
       imgB.removeAttribute('class'); 
    }, 3000);
})