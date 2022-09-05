//GETTING THE BUTTONS FOR THE UNITS
const gram = document.querySelector('#gram');
const kilogram = document.querySelector('#kilogram');
const ounce = document.querySelector('#ounce');
const pound = document.querySelector('#pound');
const metricTon = document.querySelector('#tonne');
const carat = document.querySelector('#carat');

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

//CONVERTING GRAM
const gramToKilogram = (gram) => {
    const kilogram = gram / 1000;
    return kilogram; 
}
const gramToOunce = (gram) => {
    const ounce = gram / 28.3495231;
    return ounce;    
}
const gramToPound = (gram) => {
    const pound = gram / 453.59237;
    return pound;
}
const gramToTonne= (gram) => {
    const metricTon = gram / 1000000;
    return metricTon;
}
const gramToCarat = (gram) => {
    const carat = gram * 5;
    return carat;
}

//CONVERTING KILOGRAM
const kilogramToGram = (kilogram) => {
    const gram = kilogram * 1000;
    return gram;
}
const kilogramToOunce = (kilogram) => {
    const ounce = (kilogram * 1000) / 28.3495231;
    return ounce;
}
const kilogramToPound = (kilogram) => {
    const pound = (kilogram * 1000)/ 453.59237;
    return pound;
}
const kilogramToTonne= (kilogram) => {
    const metricTon = (kilogram * 1000)/ 1000000;
    return metricTon;
}
const kilogramToCarat = (kilogram) => {
    const carat =(kilogram * 1000)* 5 ;
    return carat;
}

//CONVERTING OUNCE
const ounceToGram = (ounce) => {
    const gram = ounce * 28.3495231 ;
    return gram;
}
const ounceToKilogram = (ounce) => {
    const kilogram = (ounce * 28.3495231)/1000;
    return kilogram; 
}
const ounceToPound = (ounce) => {
    const pound = ounce / 16;
    return pound;
}
const ounceToTonne = (ounce) => {
    const metricTon = ounce *  35273.962 ;
    return metricTon;
}
const ounceToCarat = (ounce) => {
    const carat = ounce * 141.747615;
    return carat;
}

//CONVERTING POUND
const poundToGram = (pound) => {
    const gram =  pound * 453.59237;
    return gram;
}
const poundToKilogram = (pound) => {
    const kilogram = (pound * 453.59237) / 1000;
    return kilogram; 
}
const poundToOunce = (pound) => {
    const ounce = pound * 16;
    return ounce;
}
const poundToTonne = (pound) => {
    const metricTon = pound / 2204.62262;
    return metricTon;
}
const poundToCarat = (pound) => {
    const carat = pound * 2267.96185;
    return carat;
}

//CONVERTING METRIC-TON
const tonneToGram = (metricTon) => {
    const gram =  metricTon * 1000000;
    return gram;
}
const tonneToKilogram = (metricTon) => {
    const kilogram = metricTon * 1000;
    return kilogram; 
}
const tonneToOunce = (metricTon) => {
    const ounce = metricTon * 35273.962;
    return ounce;
}
const tonneToPound = (metricTon) => {
    const pound = metricTon * 2204.62262 ;
    return pound;
}
const tonneToCarat = (metricTon) => {
    const carat = metricTon * 5000000;
    return carat;
}


//CONVERTING CARAT
const caratToGram = (carat) => {
    const gram = carat / 5;
    return gram;
}
const caratToKilogram = (carat) => {
    const kilogram = (carat / 5) / 1000;
    return kilogram;  
}
const caratToOunce = (carat) => {
    const ounce = carat / 141.747615;
    return ounce;
}
const caratToPound = (carat) => {
    const pound = carat / 2267.96185;
    return pound;
}
const caratToTonne = (carat) => {
    const metricTon = carat / 5000000;
    return metricTon;
}

gram.addEventListener('click', () =>{
    //CLEARING THE FORM
    pop.innerHTML = ' ';
    out.innerHTML = ' ';
    tegs.textContent = 'GRAM';

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
    for(let i =0; i<6; i++){
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
    labels[0].textContent = 'GRAM:'
    labels[1].textContent = 'KILOGRAM:'
    labels[2].textContent = 'OUNCE:'
    labels[3].textContent = 'POUND:'
    labels[4].textContent = 'METRIC-TON:'
    labels[5].textContent = 'CARAT:'

    //SETTING THE RESULTS
    results[0].value = enter.value;
    results[1].value = gramToKilogram(x);
    results[2].value = gramToOunce(x);
    results[3].value = gramToPound(x);
    results[4].value = gramToTonne(x);
    results[5].value = gramToCarat(x);    })
})

kilogram.addEventListener('click', () =>{
    //CLEARING THE FORM
    pop.innerHTML = ' ';
    out.innerHTML = ' ';
    tegs.textContent = 'KILOGRAM';

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
    for(let i =0; i<6; i++){
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
    labels[0].textContent = 'KILOGRAM:'
    labels[1].textContent = 'GRAM:'
    labels[2].textContent = 'OUNCE:'
    labels[3].textContent = 'POUND:'
    labels[4].textContent = 'METRIC-TON:'
    labels[5].textContent = 'CARAT:'

    //SETTING THE RESULTS
    results[0].value = enter.value;
    results[1].value = kilogramToGram(x);
    results[2].value = kilogramToOunce(x);
    results[3].value = kilogramToPound(x);
    results[4].value = kilogramToTonne(x);
    results[5].value = kilogramToCarat(x);
    })
})

ounce.addEventListener('click', () =>{
    //CLEARING THE FORM
    pop.innerHTML = ' ';
    out.innerHTML = ' ';
    tegs.textContent = 'OUNCE';

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
    for(let i =0; i<6; i++){
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
    labels[0].textContent = 'OUNCE:'
    labels[1].textContent = 'KILOGRAM:'
    labels[2].textContent = 'GRAM:'
    labels[3].textContent = 'POUND:'
    labels[4].textContent = 'METRIC-TON:'
    labels[5].textContent = 'CARAT:'

    //SETTING THE RESULTS
    results[0].value = enter.value;
    results[1].value = ounceToKilogram(x);
    results[2].value = ounceToGram(x);
    results[3].value = ounceToPound(x);
    results[4].value = ounceToTonne(x);
    results[5].value = ounceToCarat(x);
    })
})

pound.addEventListener('click', () =>{
    //CLEARING THE FORM
    pop.innerHTML = ' ';
    out.innerHTML = ' ';
    tegs.textContent = 'POUND';

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
    for(let i =0; i<6; i++){
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
    labels[0].textContent = 'POUND:'
    labels[1].textContent = 'KILOGRAM:'
    labels[2].textContent = 'OUNCE:'
    labels[3].textContent = 'GRAM:'
    labels[4].textContent = 'METRIC-TON:'
    labels[5].textContent = 'CARAT:'

    //SETTING THE RESULTS
    results[0].value = enter.value;
    results[1].value = poundToKilogram(x);
    results[2].value = poundToOunce(x);
    results[3].value = poundToGram(x);
    results[4].value = poundToTonne(x);
    results[5].value = poundToCarat(x);
    })
})

metricTon.addEventListener('click', () =>{
    //CLEARING THE FORM
    pop.innerHTML = ' ';
    out.innerHTML = ' ';
    tegs.textContent = 'METRIC-TON';

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
    for(let i =0; i<6; i++){
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
    labels[0].textContent = 'METRIC-TON:'
    labels[1].textContent = 'KILOGRAM:'
    labels[2].textContent = 'OUNCE:'
    labels[3].textContent = 'POUND:'
    labels[4].textContent = 'GRAM:'
    labels[5].textContent = 'CARAT:'

    //SETTING THE RESULTS
    results[0].value = enter.value;
    results[1].value = tonneToKilogram(x);
    results[2].value = tonneToOunce(x);
    results[3].value = tonneToPound(x);
    results[4].value = tonneToGram(x);
    results[5].value = tonneToCarat(x);
    })
})

carat.addEventListener('click', () =>{
    //CLEARING THE FORM
    pop.innerHTML = ' ';
    out.innerHTML = ' ';
    tegs.textContent = 'CARAT';

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
    for(let i =0; i<6; i++){
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
    labels[0].textContent = 'CARAT:'
    labels[1].textContent = 'KILOGRAM:'
    labels[2].textContent = 'OUNCE:'
    labels[3].textContent = 'POUND:'
    labels[4].textContent = 'METRIC-TON:'
    labels[5].textContent = 'GRAM:'

    //SETTING THE RESULTS
    results[0].value = enter.value;
    results[1].value = caratToKilogram(x);
    results[2].value = caratToOunce(x);
    results[3].value = caratToPound(x);
    results[4].value = caratToTonne(x);
    results[5].value = caratToGram(x);
    })
})

