//STORING ALL THE DIVS AND IMAGES IN A VARIABLE

const red = document.querySelector('#red');
const gold = document.querySelector('#gold');
const white = document.querySelector('#white');
const color = document.querySelector('#color');
const black = document.querySelector('#black');
const yellow = document.querySelector('#yellow');
const dice = document.querySelector('.dice');
const diceImg = document.querySelectorAll('img');
const show = document.querySelector('.show');

//CREATING A DIV FOR THE PASSWORD
const bottom = document.createElement('div');

//SETTING THE ATTRIBUTE FOR THE CREATED DIV
bottom.setAttribute('class', 'bottom');

const ired = diceImg[0];
const igold = diceImg[1];
const iwhite = diceImg[2];
const icolor = diceImg[3];
const iblack = diceImg[4];
const iyellow = diceImg[5];

const generate = document.querySelector('#generate');


//CREATING A FUNCTION THAT'LL CHANGE THE RED DICE
const changeRed = () =>{

    //CREATING NEW IMAGE ELEMENTS THAT WILL REPLACE THE DEFAULT IMAGE
    const red1 = document.createElement('img');
    const red2 = document.createElement('img');
    const red3 = document.createElement('img');
    const red4 = document.createElement('img');
    const red5 = document.createElement('img');
    const red6 = document.createElement('img');

    // LINKING THE ELEMENTS TO THE SRC
    red1.setAttribute('src', 'images/red-1.png')
    red2.setAttribute('src', 'images/red-2.png')
    red3.setAttribute('src', 'images/red-3.png')
    red4.setAttribute('src', 'images/red-4.png')
    red5.setAttribute('src', 'images/red-5.png')
    red6.setAttribute('src', 'images/red-6.png')

    
    
    //GENERATING A RANDOM FIGURE
    const figure = [1,2,3,4,5,6];
    const figureLength = figure.length
    const random = Math.floor(Math.random()*figureLength)

    //ASSIGNING THE RANDOM INDEX TO THE IMAGE
    figure[0] = red1;
    figure[1] = red2;
    figure[2] = red3;
    figure[3] = red4;
    figure[4] = red5;
    figure[5] = red6;

    
   
    //CREATING THE TEXT FOR THE PIN
    const redN = document.createElement('h3');
    redN.textContent = random + 1;
    bottom.appendChild(redN);

   

   // REMOVING AND ADDING THE NEW IMAGE
    const pin = figure[random];
    ired.removeAttribute('src');
    const pic = pin.getAttribute('src');
    ired.setAttribute('src', pic);
}

//SAME LOGIC WITH RED
const changeGold = () =>{
    //CREATING THE IMAGES TO REPLACE THE DEFAULT IMAGES
    const gold1 = document.createElement('img');
    const gold2 = document.createElement('img');
    const gold3 = document.createElement('img');
    const gold4 = document.createElement('img');
    const gold5 = document.createElement('img');
    const gold6 = document.createElement('img');


    // GIVING ATTRIBUTES TO THE IMAGES
    gold1.setAttribute('src', 'images/gold-1.png')
    gold2.setAttribute('src', 'images/gold-2.png')
    gold3.setAttribute('src', 'images/gold-3.png')
    gold4.setAttribute('src', 'images/gold-4.png')
    gold5.setAttribute('src', 'images/gold-5.png')
    gold6.setAttribute('src', 'images/gold-6.png')
    

    //GETTING A RANDOM NUMBER BETWEEN 1-6
    const figure = [1,2,3,4,5,6];
    const figureLength = figure.length
    const random = Math.floor(Math.random()*figureLength)

    //GETTING THE RANDOM IMAGE
    figure[0] = gold1;
    figure[1] = gold2;
    figure[2] = gold3;
    figure[3] = gold4;
    figure[4] = gold5;
    figure[5] = gold6;

    // CREATING THE TEXT FOR THE PIN
    const goldN = document.createElement('h3');
    goldN.textContent = random + 1;
    bottom.appendChild(goldN);
    
     // REMOVING AND ADDING THE NEW IMAGE
     const pin = figure[random];
     igold.removeAttribute('src');
     const pic = pin.getAttribute('src');
     igold.setAttribute('src', pic);
}

const changeWhite = () =>{
    //CREATING THE IMAGES TO REPLACE THE DEFAULT IMAGES
    const white1 = document.createElement('img');
    const white2 = document.createElement('img');
    const white3 = document.createElement('img');
    const white4 = document.createElement('img');
    const white5 = document.createElement('img');
    const white6 = document.createElement('img');

    // GIVING ATTRIBUTES TO THE IMAGES
    white1.setAttribute('src', 'images/white-1.png')
    white2.setAttribute('src', 'images/white-2.png')
    white3.setAttribute('src', 'images/white-3.png')
    white4.setAttribute('src', 'images/white-4.png')
    white5.setAttribute('src', 'images/white-5.png')
    white6.setAttribute('src', 'images/white-6.png')
    
    //GETTING A RANDOM NUMBER BETWEEN 1-6
    const figure = [1,2,3,4,5,6];
    const figureLength = figure.length
    const random = Math.floor(Math.random()*figureLength)

    //ASSIGNING THE RANDOM INDEX TO THE IMAGE
    figure[0] = white1;
    figure[1] = white2;
    figure[2] = white3;
    figure[3] = white4;
    figure[4] = white5;
    figure[5] = white6;

    // CREATING THE TEXT FOR THE PIN
    const whiteN = document.createElement('h3');
    whiteN.textContent = random + 1;
    bottom.appendChild(whiteN);
    
    // REMOVING AND ADDING THE NEW IMAGE
    const pin = figure[random];
    iwhite.removeAttribute('src');
    const pic = pin.getAttribute('src');
    iwhite.setAttribute('src', pic);

}

const changeColor = () =>{
    //CREATING THE IMAGES TO REPLACE THE DEFAULT IMAGES
    const color1 = document.createElement('img');
    const color2 = document.createElement('img');
    const color3 = document.createElement('img');
    const color4 = document.createElement('img');
    const color5 = document.createElement('img');
    const color6 = document.createElement('img');

    // GIVING ATTRIBUTES TO THE IMAGES
    color1.setAttribute('src', 'images/color-1.png')
    color2.setAttribute('src', 'images/color-2.png')
    color3.setAttribute('src', 'images/color-3.png')
    color4.setAttribute('src', 'images/color-4.png')
    color5.setAttribute('src', 'images/color-5.png')
    color6.setAttribute('src', 'images/color-6.png')
    
    //GETTING A RANDOM NUMBER BETWEEN 1-6
    const figure = [1,2,3,4,5,6];
    const figureLength = figure.length
    const random = Math.floor(Math.random()*figureLength)

    //ASSIGNING THE RANDOM INDEX TO THE IMAGE
    figure[0] = color1;
    figure[1] = color2;
    figure[2] = color3;
    figure[3] = color4;
    figure[4] = color5;
    figure[5] = color6;

    // CREATING THE TEXT FOR THE PIN
    const colorN = document.createElement('h3');
    colorN.textContent = random + 1;
    bottom.appendChild(colorN);
    
     // REMOVING AND ADDING THE NEW IMAGE
     const pin = figure[random];
     icolor.removeAttribute('src');
     const pic = pin.getAttribute('src');
     icolor.setAttribute('src', pic);
}

const changeBlack = () =>{
    //CREATING THE IMAGES TO REPLACE THE DEFAULT IMAGES
    const black1 = document.createElement('img');
    const black2 = document.createElement('img');
    const black3 = document.createElement('img');
    const black4 = document.createElement('img');
    const black5 = document.createElement('img');
    const black6 = document.createElement('img');

    // GIVING ATTRIBUTES TO THE IMAGES
    black1.setAttribute('src', 'images/black-1.png')
    black2.setAttribute('src', 'images/black-2.png')
    black3.setAttribute('src', 'images/black-3.png')
    black4.setAttribute('src', 'images/black-4.png')
    black5.setAttribute('src', 'images/black-5.png')
    black6.setAttribute('src', 'images/black-6.png')
    
    //GETTING A RANDOM NUMBER BETWEEN 1-6
    const figure = [1,2,3,4,5,6];
    const figureLength = figure.length
    const random = Math.floor(Math.random()*figureLength)

    //ASSIGNING THE RANDOM INDEX TO THE IMAGE
    figure[0] = black1;
    figure[1] = black2;
    figure[2] = black3;
    figure[3] = black4;
    figure[4] = black5;
    figure[5] = black6;

    // CREATING THE TEXT FOR THE PIN
    const blackN = document.createElement('h3');
    blackN.textContent = random + 1;
    bottom.appendChild(blackN);
    
     // REMOVING AND ADDING THE NEW IMAGE
     const pin = figure[random];
     iblack.removeAttribute('src');
     const pic = pin.getAttribute('src');
     iblack.setAttribute('src', pic);
}

const changeYellow = () =>{
    //CREATING THE IMAGES TO REPLACE THE DEFAULT IMAGES
    const yellow1 = document.createElement('img');
    const yellow2 = document.createElement('img');
    const yellow3 = document.createElement('img');
    const yellow4 = document.createElement('img');
    const yellow5 = document.createElement('img');
    const yellow6 = document.createElement('img');

    // GIVING ATTRIBUTES TO THE IMAGES
    yellow1.setAttribute('src', 'images/yellow-1.png')
    yellow2.setAttribute('src', 'images/yellow-2.png')
    yellow3.setAttribute('src', 'images/yellow-3.png')
    yellow4.setAttribute('src', 'images/yellow-4.png')
    yellow5.setAttribute('src', 'images/yellow-5.png')
    yellow6.setAttribute('src', 'images/yellow-6.png')
    
    //GETTING A RANDOM NUMBER BETWEEN 1-6
    const figure = [1,2,3,4,5,6];
    const figureLength = figure.length
    const random = Math.floor(Math.random()*figureLength)

    //ASSIGNING THE RANDOM INDEX TO THE IMAGE
    figure[0] = yellow1;
    figure[1] = yellow2;
    figure[2] = yellow3;
    figure[3] = yellow4;
    figure[4] = yellow5;
    figure[5] = yellow6;
    
    // CREATING THE TEXT FOR THE PIN
    const yellowN = document.createElement('h3');
    yellowN.textContent = random + 1;
    bottom.appendChild(yellowN);
    
     // REMOVING AND ADDING THE NEW IMAGE
     const pin = figure[random];
     iyellow.removeAttribute('src');
     const pic = pin.getAttribute('src');
     iyellow.setAttribute('src', pic);
}

//EVENT LISTERNER FOR THE BUTTON
generate.addEventListener('click', () =>{

    //RESETING THE INPUT VALUE TO EMPTY
        bottom.innerHTML = '';

    //TOGGLING THE CLASS OF ROTATE
    red.classList.toggle('rotate');
    gold.classList.toggle('rotate');
    white.classList.toggle('rotate');
    color.classList.toggle('rotate');
    black.classList.toggle('rotate');
    yellow.classList.toggle('rotate');

    //APPENDING THE PIN
    show.appendChild(bottom);

    const pass = document.createElement('h3');
    pass.setAttribute('id', 'pin');
    pass.textContent = 'Your PIN is...    '
    bottom.appendChild(pass);


    //CALLING THE CHANGE DICE FUNCTIONS EVERY 2 SECONDS
    setTimeout(() => {
        changeRed();
        changeGold();
        changeWhite();
        changeColor();
        changeBlack();
        changeYellow(); 
    }, 2000);


    //REMOVING THE ROTATE CLASS AFTER 3 SECONDS
    setTimeout(() => {
        red.removeAttribute('class');
        gold.removeAttribute('class');
        white.removeAttribute('class');
        color.removeAttribute('class');
        black.removeAttribute('class');
        yellow.removeAttribute('class');
    }, 3000);

});
