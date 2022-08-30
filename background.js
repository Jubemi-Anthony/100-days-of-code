//CREATING VARIABLES FOR THE HTML ELEMENTS
const change = document.querySelector('.button1');
let input1 = document.querySelector('.input1');
let input2 = document.querySelector('.input2');
const body = document.querySelector('body');

const random = () =>{
    //THIS IS 1 WAY TO DO IT USING STRING CONCATENATION
    // const all = '0123456789ABCDEF';
    // const allLength = all.length;

    // let color = '#';

    // for(let i = 0; i<6; i++){
    //     color += all[Math.floor(Math.random()* allLength)];
    // }
    // return(color);

    //THIS IS ANOTHER WAY TO DO IT USING ARRAY
    //STORING ALL THE POSSIBLE HEXADECIMAL CHARACTERS FOR THE RANDOM COLOUR INTO AN ARRAY
    const all = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
    const allLength = all.length;
    let color = '#'

    //THIS LOOP WILL GET 6 RANDOM HEX VALUES AND ADD IT TO THE color ABOVE
    for(let i = 0; i<6; i++){
        let rand = Math.floor(Math.random()*allLength);
        let select = all[rand];
        color += select;
    }
    color.toString();
    return(color);
    //console.log(color);
}

//ADDING THE CLICK EVENT TO THE BUTTON
change.addEventListener('click', () =>{
    body.style.setProperty('background-color', random());
    // STORING THE COLOR IN THE INPUT
    input1.value = random();
    input2.value = body.style.backgroundColor;
})

