//GETTING THE BUTTONS FOR THE UNITS
const celcius = document.querySelector('#celcius');
const kelvin = document.querySelector('#kelvin');
const fahrenheit = document.querySelector('#fahrenheit');
const rankine = document.querySelector('#rankine');

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


//CONVERTING CELCIUS
const celcuisToKelvin = (celcius) =>{
    const kelvin = (celcius * 1) + 273.15
    return kelvin;
}
const celcuisToFahrenheit = (celcius) =>{
    const fahrenheit = (celcius * (9/5) + 32)
    return fahrenheit
}
const celcuisToRankine = (celcius) =>{
 const rankine = (celcius * (9/5) + 32) + 491.67
 return rankine
}

//CONVERTING FAHRENHEIT
const fahrenheitToCelcius = (fahrenheit) =>{
    const celcius = fahrenheit - 32* (5/9)
    return celcius
}
const fahrenheitToKelvin = (fahrenheit) =>{
    const kelvin = (fahrenheit - 32 *(5/9)) + 273.15
    return kelvin;
}
const fahrenheitToRankine = (fahrenheit) =>{
    const rankine = fahrenheit + 459.67
    return rankine
}

//CONVERTING KELVIN
const kelvinToCelcius = (kelvin) =>{
 const celcius = kelvin - 273.15
 return celcius
}
const kelvinToFahrenheit = (kelvin) =>{
    const fahrenheit = 1.8 * (kelvin-273.15) + 32
    return fahrenheit
}
const kelvinToRankine = (kelvin) =>{
    const rankine = (1.8 * (kelvin-273.15) + 32) + 459.67
    return rankine
}

//CONVERTING RANKINE
const rankineToCelcius = (rankine) =>{
    const celcius = ((rankine - 459.67) - 32 * (5/9))
    return celcius
}
const rankineToKelvin = (rankine) =>{
    const kelvin = (((rankine - 459.67)- 32* (5/9)) + 273.15)
    return kelvin;
}
const rankineToFahrenheit = (rankine) =>{
    const fahrenheit = (rankine - 459.67)
    return fahrenheit
}

celcius.addEventListener('click', () =>{
    //CLEARING THE FORM
    pop.innerHTML = ' ';
    out.innerHTML = ' ';
    tegs.textContent = 'CELCIUS';

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
    labels[0].textContent = 'CELCIUS:'
    labels[1].textContent = 'KELVIN:'
    labels[2].textContent = 'FAHRENHEIT:'
    labels[3].textContent = 'RANKINE:'

    //SETTING THE RESULTS
    results[0].value = enter.value;
    results[1].value = celcuisToKelvin(x);
    results[2].value = celcuisToFahrenheit(x);
    results[3].value = celcuisToRankine(x);
    })
})

kelvin.addEventListener('click', () =>{
    //CLEARING THE FORM
    pop.innerHTML = ' ';
    out.innerHTML = ' ';
    tegs.textContent = 'KELVIN';

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
    labels[0].textContent = 'KELVIN:'
    labels[1].textContent = 'CELCIUS:'
    labels[2].textContent = 'FAHRENHEIT:'
    labels[3].textContent = 'RANKINE:'

    //SETTING THE RESULTS
    results[0].value = enter.value;
    results[1].value = kelvinToCelcius(x);
    results[2].value = kelvinToFahrenheit(x);
    results[3].value = kelvinToRankine(x);
    })
})

fahrenheit.addEventListener('click', () =>{
    //CLEARING THE FORM
    pop.innerHTML = ' ';
    out.innerHTML = ' ';
    tegs.textContent = 'FAHRENHEIT';

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
    labels[0].textContent = 'FAHRENHEIT:'
    labels[1].textContent = 'CELCIUS:'
    labels[2].textContent = 'KELVIN:'
    labels[3].textContent = 'RANKINE:'

    //SETTING THE RESULTS
    results[0].value = enter.value;
    results[1].value = fahrenheitToCelcius(x);
    results[2].value = fahrenheitToKelvin(x);
    results[3].value = fahrenheitToRankine(x);
    })
})

rankine.addEventListener('click', () =>{
    //CLEARING THE FORM
    pop.innerHTML = ' ';
    out.innerHTML = ' ';
    tegs.textContent = 'RANKINE';

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
    labels[0].textContent = 'RANKINE:'
    labels[1].textContent = 'CELCIUS:'
    labels[2].textContent = 'KELVIN:'
    labels[3].textContent = 'FAHRENHEIT:'

    //SETTING THE RESULTS
    results[0].value = enter.value;
    results[1].value = rankineToCelcius(x);
    results[2].value = rankineToKelvin(x);
    results[3].value = rankineToFahrenheit(x);
    })
})