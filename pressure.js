const pascal = document.querySelector('#pascal');
const mmhg = document.querySelector('#mmhg');
const barr = document.querySelector('#barr');
const torr = document.querySelector('#torr');

//CREATING VAIABLES FOR THE EXISTING DIV
const pop = document.querySelector('.pop');
const out = document.querySelector('.out');

//GETTING THE CLEAR IMAGE
const clear = document.querySelector('.clear-img');

//TO CLEAR THE OUTPUT
clear.addEventListener('click', ()=>{
    out.innerHTML = "";
})

//CREATING DIVS FOR THE INPUT
const form = document.createElement('div')
form.setAttribute('class', 'form');

const high = document.createElement('div')
high.setAttribute('class', 'top');

const hold = document.createElement('div')
hold.setAttribute('class', 'hold');

//CREATING THE INPUT FOR THE LENGTH TO BE CONVERTED
const enter = document.createElement('input')
enter.setAttribute('class', 'enter');
enter.setAttribute('placeholder', 'Enter Length');

// CREATING THE h3 TAG FOR THE INPUT
const tegs = document.createElement('h3')
tegs.setAttribute('class', 'tegs');

//CREATING THE BUTTON FOR THE INPUT
const conv = document.createElement('button');
conv.setAttribute('class', 'conv-btn');
conv.textContent = 'Convert';

//CREATING THE DIV FOR THE OUTPUT
const converted = document.createElement('div')
converted.setAttribute('class', 'converted');


//CREATING AN IMAGE
const image = document.createElement('img');
image.setAttribute('src', 'x.png');
image.setAttribute('alt', 'cancel');
image.setAttribute('class', 'image');
image.addEventListener('click', ()=>{
    pop.innerHTML = '';
})

// CONVERTING PASCAL
const pascalToBarr = (pascal) =>{
    const barr= pascal / 100000 ;
    return barr;
}
const pascalToMmhg = (pascal) =>{
    const mmhg = pascal / 101325;
    return mmhg;
}
const pascalToTorr = (pascal) =>{
    const torr= pascal / 133.322368 ;
    return torr;
}

//CONVERTING BARR
const barrToMmhg = (barr) =>{
    const mmhg = barr / 1.01325 ;
    return mmhg;
}
const barrToTorr = (barr) =>{
    const torr= barr * 750.061685 ;
    return torr;
}
const barrToPascal = (barr) =>{
    const pascal = barr * 100000 ;
    return pascal;
}

//CONVERTING STANDARD ATMOSPHERIC PRESSURE
const mmghToBarr = (mmhg) =>{
    const barr = mmhg * 1.01325;
    return barr;
}
const mmghToTorr = (mmhg) =>{
    const torr = mmhg * 760.000002;
    return torr;
}
const mmghToPascal = (mmhg) =>{
    const pascal = mmhg * 101325;
    return pascal;
}

//CONVERTING TORR
const torrToBarr = (torr) =>{
    const barr= torr / 750.061685 ;
    return barr;
}
const torrToMmhg = (torr) =>{
    const mmhg = torr / 760.000002;
    return mmhg;
}
const torrToPascal = (torr) =>{
    const pascal = torr * 133.322368;
    return pascal;
}

pascal.addEventListener('click', ()=>{
    //CLEARING THE FORM
    pop.innerHTML = ' ';
    out.innerHTML = ' ';
    tegs.textContent = 'PASCAL';

    //APPENDING THE DIVS
    pop.appendChild(form);
    form.appendChild(high);
    high.appendChild(tegs);
    high.appendChild(image);
    form.appendChild(hold);
    hold.appendChild(enter);
    hold.appendChild(conv);

    //SHOWING THE INPUT ON THE OUTPUT
    conv.addEventListener('click', () =>{
    //CLEARING THE STAGE
    out.innerHTML = ' ';
    converted.innerHTML = ' ';
    //SETTING THE DIVS
    out.appendChild(converted);
    
    //CREATING THE RESULT CONTAINERS
    const divs = [];
    const labels = [];
    const results = [];
    for(let i =0; i<4; i++){
        divs.push(document.createElement('div'));
        divs[i].setAttribute('class', 'convert');

        labels.push(document.createElement('label'));
        labels[i].setAttribute('class', 'label');

        results.push(document.createElement('input'));
        results[i].setAttribute('class', 'result');
        results[i].setAttribute('readonly', 'readonly');

        converted.appendChild(divs[i]);
        divs[i].appendChild(labels[i]);
        divs[i].appendChild(results[i]);
    }
    //GETTING THE INPUT
    const x = enter.value;

    //SETTING THE LABELS
    labels[0].textContent = 'PASCAL:'
    labels[1].textContent = 'BARR:'
    labels[2].textContent = 'STANDARD ATMOSPHERIC PRESSURE:'
    labels[3].textContent = 'TORR:'

    //SETTING THE RESULTS
    results[0].value = enter.value;
    results[1].value = pascalToBarr(x);
    results[2].value = pascalToMmhg(x);
    results[3].value = pascalToTorr(x);
    })
})

barr.addEventListener('click', ()=>{
    //CLEARING THE FORM
    pop.innerHTML = ' ';
    out.innerHTML = ' ';
    tegs.textContent = 'BARR';

    //APPENDING THE DIVS
    pop.appendChild(form);
    form.appendChild(high);
    high.appendChild(tegs);
    high.appendChild(image);
    form.appendChild(hold);
    hold.appendChild(enter);
    hold.appendChild(conv);

    //SHOWING THE INPUT ON THE OUTPUT
    conv.addEventListener('click', () =>{
    //CLEARING THE STAGE
    out.innerHTML = ' ';
    converted.innerHTML = ' ';
    //SETTING THE DIVS
    out.appendChild(converted);
    
    //CREATING THE RESULT CONTAINERS
    const divs = [];
    const labels = [];
    const results = [];
    for(let i =0; i<4; i++){
        divs.push(document.createElement('div'));
        divs[i].setAttribute('class', 'convert');

        labels.push(document.createElement('label'));
        labels[i].setAttribute('class', 'label');

        results.push(document.createElement('input'));
        results[i].setAttribute('class', 'result');
        results[i].setAttribute('readonly', 'readonly');

        converted.appendChild(divs[i]);
        divs[i].appendChild(labels[i]);
        divs[i].appendChild(results[i]);
    }
    //GETTING THE INPUT
    const x = enter.value;

    //SETTING THE LABELS
    labels[0].textContent = 'BARR:'
    labels[1].textContent = 'PASCAL:'
    labels[2].textContent = 'STANDARD ATMOSPHERIC PRESSURE:'
    labels[3].textContent = 'TORR:'

    //SETTING THE RESULTS
    results[0].value = enter.value;
    results[1].value = barrToPascal(x);
    results[2].value = barrToMmhg(x);
    results[3].value = barrToTorr(x);
    })
})

mmhg.addEventListener('click', ()=>{
    //CLEARING THE FORM
    pop.innerHTML = ' ';
    out.innerHTML = ' ';
    tegs.textContent = 'STANDARD ATMOSPHERIC PRESSURE';

    //APPENDING THE DIVS
    pop.appendChild(form);
    form.appendChild(high);
    high.appendChild(tegs);
    high.appendChild(image);
    form.appendChild(hold);
    hold.appendChild(enter);
    hold.appendChild(conv);

    //SHOWING THE INPUT ON THE OUTPUT
    conv.addEventListener('click', () =>{
    //CLEARING THE STAGE
    out.innerHTML = ' ';
    converted.innerHTML = ' ';
    //SETTING THE DIVS
    out.appendChild(converted);
    
    //CREATING THE RESULT CONTAINERS
    const divs = [];
    const labels = [];
    const results = [];
    for(let i =0; i<4; i++){
        divs.push(document.createElement('div'));
        divs[i].setAttribute('class', 'convert');

        labels.push(document.createElement('label'));
        labels[i].setAttribute('class', 'label');

        results.push(document.createElement('input'));
        results[i].setAttribute('class', 'result');
        results[i].setAttribute('readonly', 'readonly');

        converted.appendChild(divs[i]);
        divs[i].appendChild(labels[i]);
        divs[i].appendChild(results[i]);
    }
    //GETTING THE INPUT
    const x = enter.value;

    //SETTING THE LABELS
    labels[0].textContent = 'STANDARD ATMOSPHERIC PRESSURE:'
    labels[1].textContent = 'BARR:'
    labels[2].textContent = 'PASCAL:'
    labels[3].textContent = 'TORR:'

    //SETTING THE RESULTS
    results[0].value = enter.value;
    results[1].value = mmghToBarr(x);
    results[2].value = mmghToPascal(x);
    results[3].value = mmghToTorr(x);
    })
})

torr.addEventListener('click', ()=>{
    //CLEARING THE FORM
    pop.innerHTML = ' ';
    out.innerHTML = ' ';
    tegs.textContent = 'TORR';

    //APPENDING THE DIVS
    pop.appendChild(form);
    form.appendChild(high);
    high.appendChild(tegs);
    high.appendChild(image);
    form.appendChild(hold);
    hold.appendChild(enter);
    hold.appendChild(conv);

    //SHOWING THE INPUT ON THE OUTPUT
    conv.addEventListener('click', () =>{
    //CLEARING THE STAGE
    out.innerHTML = ' ';
    converted.innerHTML = ' ';
    //SETTING THE DIVS
    out.appendChild(converted);
    
    //CREATING THE RESULT CONTAINERS
    const divs = [];
    const labels = [];
    const results = [];
    for(let i =0; i<4; i++){
        divs.push(document.createElement('div'));
        divs[i].setAttribute('class', 'convert');

        labels.push(document.createElement('label'));
        labels[i].setAttribute('class', 'label');

        results.push(document.createElement('input'));
        results[i].setAttribute('class', 'result');
        results[i].setAttribute('readonly', 'readonly');

        converted.appendChild(divs[i]);
        divs[i].appendChild(labels[i]);
        divs[i].appendChild(results[i]);
    }
    //GETTING THE INPUT
    const x = enter.value;

    //SETTING THE LABELS
    labels[0].textContent = 'TORR:'
    labels[1].textContent = 'BARR:'
    labels[2].textContent = 'STANDARD ATMOSPHERIC PRESSURE:'
    labels[3].textContent = 'PASCAL:'

    //SETTING THE RESULTS
    results[0].value = enter.value;
    results[1].value = torrToBarr(x);
    results[2].value = torrToMmhg(x);
    results[3].value = torrToPascal(x);
    })
})