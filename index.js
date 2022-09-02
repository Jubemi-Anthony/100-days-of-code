const body = document.querySelector('body');
const btn = document.createElement('button');
body.appendChild(btn);

//CREATING THE BUTTON FOR THE FORM
btn.textContent = 'MeetIN'
btn.style.position = 'absolute'
btn.style.top = '45%'
btn.style.left = '45%'
btn.style.cursor = 'pointer'
btn.style.padding = '10px 40px 10px 40px'
btn.style.borderRadius = '20px'
btn.style.border = 'none'
btn.style.fontWeight = 'bold'
btn.style.fontSize = '20px'
btn.style.color = 'darkblue'
btn.style.background = 'linear-gradient(to right, rgb(123, 255, 0),rgb(0, 255, 242),rgb(0, 255, 242))'


const create = ()=>{

    document.body.removeChild(btn);
    //CREATING A DIV TO HOUSE EVERYTHING
    const container = document.createElement("div");
    document.body.appendChild(container);


    //CREATING AND STYLING THE MEETIN
    const meet = document.createElement("h1");
    const iN = document.createElement("span");
    meet.textContent = "Meet";
    iN.textContent = 'IN'

    container.appendChild(meet);
    meet.appendChild(iN);

    //CREATING THE FORM
    const form = document.createElement("form");
    container.appendChild(form);

    //CREATING DIVS
    const diva = document.createElement("div");
    const divb = document.createElement("div");
    const div1 = document.createElement("div");
    const div2 = document.createElement("div");
    const div3 = document.createElement("div");
    const div4 = document.createElement("div");
    const div5 = document.createElement("div");
    const div6 = document.createElement("div");

    div1.appendChild(diva);
    div1.appendChild(divb);

    //APPENDING THE DIVS
    form.appendChild(div1);
    form.appendChild(div2);
    form.appendChild(div3);
    form.appendChild(div4);
    form.appendChild(div5);
    form.appendChild(div6);

    //LABELS
    const labelA = document.createElement("label");
    const labelB = document.createElement("label");
    const label2 = document.createElement("label");
    const label3 = document.createElement("label");
    const label4 = document.createElement("label");
    const label5 = document.createElement("label");

    //inputs
    const inputA = document.createElement("input");
    const inputB = document.createElement("input");
    const input2 = document.createElement("input");
    const input3 = document.createElement("input");
    const input4 = document.createElement("input");
    const input5 = document.createElement("input");


    //APPENDING LABELS
    diva.appendChild(labelA);
    divb.appendChild(labelB);
    div2.appendChild(label2);
    div3.appendChild(label3);
    div4.appendChild(label4);
    div5.appendChild(label5);

    //APPENDING INPUUTS
    diva.appendChild(inputA);
    divb.appendChild(inputB);
    div2.appendChild(input2);
    div3.appendChild(input3);
    div4.appendChild(input4);
    div5.appendChild(input5);

    //ADDING CONTENT TO THE LABELS
    labelA.textContent = 'FULL NAME';
    labelB.textContent = 'Phone number';
    label2.textContent = 'Sex';
    label3.textContent = 'Email';
    label4.textContent = 'Country';
    label5.textContent = 'Password';

    //GIVING PLACEHOLDERS TO THE INPUTS
    inputA.setAttribute('placeholder', 'FULL NAME')
    inputB.setAttribute('placeholder', '+234')
    input2.setAttribute('placeholder', 'Sex')
    input3.setAttribute('placeholder', 'example@gmail.com')
    input4.setAttribute('placeholder', 'Nigeria')
    input5.setAttribute('placeholder', 'password')

    //CREATING THE BUTTONS
    const create = document.createElement('button')
    const google = document.createElement('button')
    const or = document.createElement('p')

    //ADDING TEXT CONTENTS TO THE BUTTONS
    create.textContent = 'Create Account';
    google.textContent = 'Sign up with google';
    or.textContent = 'OR'

    //APPENDING THE BUTTONS
    div6.appendChild(create);
    div6.appendChild(or);
    div6.appendChild(google);

    //ASSESSING ALL THE LABELS, INPUTS AND BUTTONS
    const labels = document.querySelectorAll('label');
    const inputs = document.querySelectorAll('input');
    const buttons = document.querySelectorAll('button');

    //STYLING
    body.style.backgroundColor = '#f5f5f5';
    body.style.fontFamily = 'Sans-serif';
    container.style.width = '30%';
    container.style.margin = 'auto';
    container.style.marginTop = '40px';
    form.style.marginTop= '20px'
    iN.style.color = 'blue';

    //STYLING
    div1.style.display = 'flex';
    div1.style.gap = '20px';
    div1.style.width= '100%';

    diva.style.width= '50%';
    divb.style.width= '50%';

    //STYLING ALL THE LABELS AND INUTS
    for(let i = 0; i<6; i++){
    labels[i].style.fontSize = '13px';
    labels[i].style.fontWeight = 'bold';
    labels[i].style.display = 'block';
    labels[i].style.marginTop = '10px';
    labels[i].style.marginBottom = '5px';

    inputs[i].style.fontSize = '10px';
    inputs[i].style.padding = '10px 0px 10px 15px';
    inputs[i].style.border = 'none';
    inputs[i].style.borderRadius = '10px';
    inputs[i].style.width = '100%';
    }


    div6.style.marginTop = '30px';
    div6.style.textAlign = 'center';

    create.style.backgroundColor = 'blue';
    create.style.color = 'white';
    create.style.marginBottom = '5px'

    google.style.backgroundColor = 'white';
    google.style.color = 'blue';

    or.style.fontWeight = 'bold';

    //STYLING ALL THE BUTTONS
    for(let i=0; i<buttons.length; i++){
    buttons[i].style.width = '100%';
    buttons[i].style.padding = '10px';
    buttons[i].style.border = 'none';
    buttons[i].style.borderRadius = '20px';
    buttons[i].style.fontWeight = 'bold';
    }

}
btn.addEventListener('click', create)