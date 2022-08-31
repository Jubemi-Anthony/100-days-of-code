//CREATING VARIABES FOR THE BUTTONS
const meter = document.querySelector('#meter');
const inch = document.querySelector('#inch');
const mile = document.querySelector('#mile');
const foot = document.querySelector('#foot');
const centi_meter = document.querySelector('#centi-meter');
const mili_meter = document.querySelector('#mili-meter');
const yard = document.querySelector('#yard');
const kilo_meter = document.querySelector('#kilo-meter');

//CREATING VAIABLES FOR THE EXISTING DIV
const pop = document.querySelector('.pop');
const out = document.querySelector('.out');

//GETTING THE CLEAR IMAGE
const clear = document.querySelector('.clear-img');

//TO CLEAR THE OUTPUT
clear.addEventListener('click', ()=>{
    out.innerHTML = "";
})

//CREATING AN IMAGE
const image = document.createElement('img');
image.setAttribute('src', 'x.png');
image.setAttribute('alt', 'cancel');
image.setAttribute('class', 'image');
image.addEventListener('click', ()=>{
    pop.innerHTML = '';
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


//CONVERT METER
const meterToInch = (meter) =>{
    const inch = meter * 39.3700787402;
    return inch;
}
const meterToMile = (meter) =>{
    const mile = meter / 1609.344;
    return mile;
}
const meterToFoot = (meter) =>{
    const foot = meter * 3.2808399;
    return foot;
}
const meterToCentiMeter = (meter) =>{
    const centi_meter = meter * 100;
    return centi_meter;
}
const meterToMiliMeter = (meter) =>{
    const mili_meter = meter * 1000;
    return mili_meter;
}
const meterToYard = (meter) =>{
    const yard = meter * 1.0936133;
    return yard;
}
const meterToKiloMeter = (meter) =>{
    const kilo_meter = meter / 1000;
    return kilo_meter;
}

//CONVERT INCH
const inchToMeter = (inch) =>{
    const meter = inch / 39.3700787402;
    return meter;
}
const inchToCentiMeter = (inch) =>{
    const centi_meter = inch / (39.3700787402 / 100);
    return centi_meter;
}
const inchToMiliMeter = (inch) =>{
    const mili_meter = inch / (39.3700787402 / 1000);
    return mili_meter;
}
const inchToKiloMeter = (inch) =>{
    const kilo_meter = inch / (39.3700787402 * 1000);
    return kilo_meter;
}
const inchToYard = (inch) =>{
    const yard = inch / 36;
    return yard;
}
const inchToMile = (inch) =>{
    const mile = inch / 63360;
    return mile;
}
const inchToFoot = (inch) =>{
    const foot = inch * 12;
    return foot;
}

//CONVVERT MILE
const mileToMeter = (mile) =>{
    const meter = mile * 1609.344;
    return meter;
}
const mileToCentiMeter = (mile) =>{
    const centi_meter = mile * (1609.344 * 100);
    return centi_meter;
}
const mileToMiliMeter = (mile) =>{
    const mili_meter = mile * (1609.344 * 1000);
    return mili_meter
}
const mileToKiloMeter = (mile) =>{
    const kilo_meter = mile * (1609.344 / 1000);
    return kilo_meter;
    
}
const mileToInch = (mile) =>{
    const inch = mile * 63360;
    return inch;
}
const mileToYard = (mile) =>{
    const yard = mile * 1760;
    return yard;
}
const mileToFoot = (mile) =>{
    const foot = mile * 5280;
    return foot;
}

//CONVERT FOOT
const footToMeter = (foot) =>{
    const meter = foot / 3.2808399;
    return meter;
}
const footToCentiMeter = (foot) =>{
    const centi_meter = foot / (3.2808399 * 100);
    return centi_meter;
}
const footToMiliMeter = (foot) =>{
    const mili_meter = (foot / 3.2808399) * 1000;
    return mili_meter;
}
const footToKiloMeter = (foot) =>{
    const kilo_meter = (foot / 3.2808399) / 1000;
    return kilo_meter;
}
const footToYard = (foot) =>{
    const yard = foot / 3;
    return yard;
}
const footToInch = (foot) =>{
    const inch = foot * 12;
    return inch;
}
const footToMile = (foot) =>{
    const mile = foot / 5280;
    return mile;
}

//CONVERT CENTI-METER
const centiMeterToMeter = (centi_meter) =>{
    const meter = centi_meter / 100;
    return meter;
}
const centiMeterToMiliMeter = (centi_meter) =>{
    const mili_meter = centi_meter * 10;
    return mili_meter;
}
const centiMeterToKiloMeter = (centi_meter) =>{
    const kilo_meter = centi_meter / 100000;
    return kilo_meter;
}
const centiMeterToInch = (centi_meter) =>{
    const inch = centi_meter * (39.3700787402 / 100);
    return inch;
}
const centiMeterToMile = (centi_meter) =>{
    const mile = centi_meter / (1609.344 / 100);
    return mile;
}
const centiMeterToFoot = (centi_meter) =>{
    const foot = centi_meter * (3.2808399 / 100);
    return foot;
}
const centiMeterToYard = (centi_meter) =>{
    const yard = (centi_meter * 1.0936133) / 100;
    return yard;
}

//CONVERT MILIMETER
const miliMeterToMeter = (mili_meter) =>{
    const meter = mili_meter / 1000;
    return meter;
}
const miliMeterToCentiMeter = (mili_meter) =>{
    const centi_meter = mili_meter / 10;
    return centi_meter;
}
const miliMeterToKilometer = (mili_meter) =>{
    const kilo_meter = mili_meter / 1000000;
    return kilo_meter;

}
const miliMeterToInch = (mili_meter) =>{
    const inch = mili_meter * (39.3700787402 / 1000);
    return inch;
}
const miliMeterToMile = (mili_meter) =>{
    const mile = mili_meter / (1609.344 / 1000);
    return mile;
}
const miliMeterToFoot = (mili_meter) =>{
    const foot = (mili_meter * 3.2808399) / 1000;
    return foot;
}
const miliMeterToYard = (mili_meter) =>{
    const yard = (mili_meter * 1.0936133) / 1000;
    return yard;
}

//CONVERT YARD
const yardToMeter = (yard) =>{
    const meter = yard / 1.0936133;
    return meter;
}
const yardToCentiMeter = (yard) =>{
    const centi_meter = (yard / 1.0936133) * 100;
    return centi_meter;
}
const yardToMiliMeter = (yard) =>{
    const mili_meter = (yard / 1.0936133) * 1000;
    return mili_meter;
}
const yardToKiloMeter = (yard) =>{
    const kilo_meter = (yard / 1.0936133) / 1000;
    return kilo_meter;
}
const yardToFoot = (yard) =>{
    const foot = yard * 3;
    return foot;
}
const yardToInch = (yard) =>{
    const inch = yard * 36;
    return inch;
}
const yardToMile = (yard) =>{
    const mile = yard / 1760;
    return mile;
}

//CONVERT KILOMETER
const kiloMeterToMeter = (kilo_meter) =>{
    const meter = kilo_meter * 1000;
    return meter;
}
const kiloMeterToCentiMeter = (kilo_meter) =>{
    const centi_meter = kilo_meter * 100000;
    return centi_meter;
}
const kiloMeterToMiliMeter = (kilo_meter) =>{
    const mili_meter = kilo_meter * 1000000;
    return mili_meter;
}
const kiloMeterToInch = (kilo_meter) =>{
    const inch = kilo_meter * (39.3700787402 * 1000);
    return inch;
}
const kiloMeterToMile = (kilo_meter) =>{
    const mile = kilo_meter / (1609.344 / 1000);
    return mile;
}
const kiloMeterToFoot = (kilo_meter) =>{
    const foot = (kilo_meter * 3.2808399) * 1000;
    return foot;
}
const kiloMeterToYard = (kilo_meter) =>{
    const yard = (kilo_meter * 1.0936133) * 1000;
    return yard;
}

meter.addEventListener('click', () =>{
    //CLEARING THE FORM
    pop.innerHTML = ' ';
    out.innerHTML = ' ';
    tegs.textContent = 'METER';
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
        const meter_convert1 = document.createElement('div')
        meter_convert1.setAttribute('class', 'convert');
        //APPENDING THE RESULT CONTAINER
        converted.appendChild(meter_convert1);
        //CREATING THE RESULT HOLDERS
        const label1 = document.createElement('label')
        label1.setAttribute('class', 'label');
        const result1 = document.createElement('input')
        result1.setAttribute('class', 'result');
        //appending the result holders
        meter_convert1.appendChild(label1);
        meter_convert1.appendChild(result1);

        //CREATING THE RESULT CONTAINERS
        const meter_convert2 = document.createElement('div')
        meter_convert2.setAttribute('class', 'convert');
        //APPENDING THE RESULT CONTAINER
        converted.appendChild(meter_convert2);
        //CREATING THE RESULT HOLDERS
        const label2 = document.createElement('label')
        label2.setAttribute('class', 'label');
        const result2 = document.createElement('input')
        result2.setAttribute('class', 'result');
        //appending the result holders
        meter_convert2.appendChild(label2);
        meter_convert2.appendChild(result2);

        //CREATING THE RESULT CONTAINERS
        const meter_convert3 = document.createElement('div')
        meter_convert3.setAttribute('class', 'convert');
        //APPENDING THE RESULT CONTAINER
        converted.appendChild(meter_convert3);
        //CREATING THE RESULT HOLDERS
        const label3 = document.createElement('label')
        label3.setAttribute('class', 'label');
        const result3 = document.createElement('input')
        result3.setAttribute('class', 'result');
        //appending the result holders
        meter_convert3.appendChild(label3);
        meter_convert3.appendChild(result3);

        //CREATING THE RESULT CONTAINERS
        const meter_convert4 = document.createElement('div')
        meter_convert4.setAttribute('class', 'convert');
        //APPENDING THE RESULT CONTAINER
        converted.appendChild(meter_convert4);
        //CREATING THE RESULT HOLDERS
        const label4 = document.createElement('label')
        label4.setAttribute('class', 'label');
        const result4 = document.createElement('input')
        result4.setAttribute('class', 'result');
        //appending the result holders
        meter_convert4.appendChild(label4);
        meter_convert4.appendChild(result4);

        //CREATING THE RESULT CONTAINERS
        const meter_convert5 = document.createElement('div')
        meter_convert5.setAttribute('class', 'convert');
        //APPENDING THE RESULT CONTAINER
        converted.appendChild(meter_convert5);
        //CREATING THE RESULT HOLDERS
        const label5 = document.createElement('label')
        label5.setAttribute('class', 'label');
        const result5 = document.createElement('input')
        result5.setAttribute('class', 'result');
        //appending the result holders
        meter_convert5.appendChild(label5);
        meter_convert5.appendChild(result5);

        //CREATING THE RESULT CONTAINERS
        const meter_convert6 = document.createElement('div')
        meter_convert6.setAttribute('class', 'convert');
        //APPENDING THE RESULT CONTAINER
        converted.appendChild(meter_convert6);
        //CREATING THE RESULT HOLDERS
        const label6 = document.createElement('label')
        label6.setAttribute('class', 'label');
        const result6 = document.createElement('input')
        result6.setAttribute('class', 'result');
        //appending the result holders
        meter_convert6.appendChild(label6);
        meter_convert6.appendChild(result6);

        //CREATING THE RESULT CONTAINERS
        const meter_convert7 = document.createElement('div')
        meter_convert7.setAttribute('class', 'convert');
        //APPENDING THE RESULT CONTAINER
        converted.appendChild(meter_convert7);
        //CREATING THE RESULT HOLDERS
        const label7 = document.createElement('label')
        label7.setAttribute('class', 'label');
        const result7 = document.createElement('input')
        result7.setAttribute('class', 'result');
        //appending the result holders
        meter_convert7.appendChild(label7);
        meter_convert7.appendChild(result7);

        //CREATING THE RESULT CONTAINERS
        const meter_convert8 = document.createElement('div')
        meter_convert8.setAttribute('class', 'convert');
        //APPENDING THE RESULT CONTAINER
        converted.appendChild(meter_convert8);
        //CREATING THE RESULT HOLDERS
        const label8 = document.createElement('label')
        label8.setAttribute('class', 'label');
        const result8 = document.createElement('input')
        result8.setAttribute('class', 'result');
        //appending the result holders
        meter_convert8.appendChild(label8);
        meter_convert8.appendChild(result8);

        //GETTING THE INPUT
        const x = enter.value;

        //SETTING THE LABELS
        label1.textContent = 'METER:'
        label2.textContent = 'INCH:'
        label3.textContent = 'YARD:'
        label4.textContent = 'CENTI-METER:'
        label5.textContent = 'MILI-METER:'
        label6.textContent = 'KILO-METER:'
        label7.textContent = 'FOOT:'
        label8.textContent = 'MILE:'

        //SETTING THE RESULTS
        result1.value = enter.value;
        result2.value = meterToInch(x);
        result3.value = meterToYard(x);
        result4.value = meterToCentiMeter(x);
        result5.value = meterToMiliMeter(x);
        result6.value = meterToKiloMeter(x);
        result7.value = meterToFoot(x);
        result8.value = meterToMile(x);
    })  
})

//CREATING THE CLICK EVENT
inch.addEventListener('click', () =>{
    //CLEARING THE FORM
    pop.innerHTML = ' ';
    out.innerHTML = ' ';
    tegs.textContent = 'INCH';
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
        const inch_convert1 = document.createElement('div')
        inch_convert1.setAttribute('class', 'convert');
        //APPENDING THE RESULT CONTAINER
        converted.appendChild(inch_convert1);
        //CREATING THE RESULT HOLDERS
        const label1 = document.createElement('label')
        label1.setAttribute('class', 'label');
        const result1 = document.createElement('input')
        result1.setAttribute('class', 'result');
        //appending the result holders
        inch_convert1.appendChild(label1);
        inch_convert1.appendChild(result1);

        //CREATING THE RESULT CONTAINERS
        const inch_convert2 = document.createElement('div')
        inch_convert2.setAttribute('class', 'convert');
        //APPENDING THE RESULT CONTAINER
        converted.appendChild(inch_convert2);
        //CREATING THE RESULT HOLDERS
        const label2 = document.createElement('label')
        label2.setAttribute('class', 'label');
        const result2 = document.createElement('input')
        result2.setAttribute('class', 'result');
        //appending the result holders
        inch_convert2.appendChild(label2);
        inch_convert2.appendChild(result2);

        //CREATING THE RESULT CONTAINERS
        const inch_convert3 = document.createElement('div')
        inch_convert3.setAttribute('class', 'convert');
        //APPENDING THE RESULT CONTAINER
        converted.appendChild(inch_convert3);
        //CREATING THE RESULT HOLDERS
        const label3 = document.createElement('label')
        label3.setAttribute('class', 'label');
        const result3 = document.createElement('input')
        result3.setAttribute('class', 'result');
        //appending the result holders
        inch_convert3.appendChild(label3);
        inch_convert3.appendChild(result3);

        //CREATING THE RESULT CONTAINERS
        const inch_convert4 = document.createElement('div')
        inch_convert4.setAttribute('class', 'convert');
        //APPENDING THE RESULT CONTAINER
        converted.appendChild(inch_convert4);
        //CREATING THE RESULT HOLDERS
        const label4 = document.createElement('label')
        label4.setAttribute('class', 'label');
        const result4 = document.createElement('input')
        result4.setAttribute('class', 'result');
        //appending the result holders
        inch_convert4.appendChild(label4);
        inch_convert4.appendChild(result4);

        //CREATING THE RESULT CONTAINERS
        const inch_convert5 = document.createElement('div')
        inch_convert5.setAttribute('class', 'convert');
        //APPENDING THE RESULT CONTAINER
        converted.appendChild(inch_convert5);
        //CREATING THE RESULT HOLDERS
        const label5 = document.createElement('label')
        label5.setAttribute('class', 'label');
        const result5 = document.createElement('input')
        result5.setAttribute('class', 'result');
        //appending the result holders
        inch_convert5.appendChild(label5);
        inch_convert5.appendChild(result5);

        //CREATING THE RESULT CONTAINERS
        const inch_convert6 = document.createElement('div')
        inch_convert6.setAttribute('class', 'convert');
        //APPENDING THE RESULT CONTAINER
        converted.appendChild(inch_convert6);
        //CREATING THE RESULT HOLDERS
        const label6 = document.createElement('label')
        label6.setAttribute('class', 'label');
        const result6 = document.createElement('input')
        result6.setAttribute('class', 'result');
        //appending the result holders
        inch_convert6.appendChild(label6);
        inch_convert6.appendChild(result6);

        //CREATING THE RESULT CONTAINERS
        const inch_convert7 = document.createElement('div')
        inch_convert7.setAttribute('class', 'convert');
        //APPENDING THE RESULT CONTAINER
        converted.appendChild(inch_convert7);
        //CREATING THE RESULT HOLDERS
        const label7 = document.createElement('label')
        label7.setAttribute('class', 'label');
        const result7 = document.createElement('input')
        result7.setAttribute('class', 'result');
        //appending the result holders
        inch_convert7.appendChild(label7);
        inch_convert7.appendChild(result7);

        //CREATING THE RESULT CONTAINERS
        const inch_convert8 = document.createElement('div')
        inch_convert8.setAttribute('class', 'convert');
        //APPENDING THE RESULT CONTAINER
        converted.appendChild(inch_convert8);
        //CREATING THE RESULT HOLDERS
        const label8 = document.createElement('label')
        label8.setAttribute('class', 'label');
        const result8 = document.createElement('input')
        result8.setAttribute('class', 'result');
        //appending the result holders
        inch_convert8.appendChild(label8);
        inch_convert8.appendChild(result8);
  
        //GETTING THE INPUT
        const x = enter.value;

        //SETTING THE LABELS
        label1.textContent = 'INCH:'
        label2.textContent = 'METER:'
        label3.textContent = 'YARD:'
        label4.textContent = 'CENTI-METER:'
        label5.textContent = 'MILI-METER:'
        label6.textContent = 'KILO-METER:'
        label7.textContent = 'FOOT:'
        label8.textContent = 'MILE:'

        //SETTING THE RESULTS
        result1.value = enter.value;
        result2.value = inchToMeter(x);
        result3.value = inchToYard(x);
        result4.value = inchToCentiMeter(x);
        result5.value = inchToMiliMeter(x);
        result6.value = inchToKiloMeter(x);
        result7.value = inchToFoot(x);
        result8.value = inchToMile(x);
    })  
})

mile.addEventListener('click', () =>{
    //CLEARING THE FORM
    pop.innerHTML = ' ';
    out.innerHTML = ' ';
    tegs.textContent = 'MILE';
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
        const mile_convert1 = document.createElement('div')
        mile_convert1.setAttribute('class', 'convert');
        //APPENDING THE RESULT CONTAINER
        converted.appendChild(mile_convert1);
        //CREATING THE RESULT HOLDERS
        const label1 = document.createElement('label')
        label1.setAttribute('class', 'label');
        const result1 = document.createElement('input')
        result1.setAttribute('class', 'result');
        //appending the result holders
        mile_convert1.appendChild(label1);
        mile_convert1.appendChild(result1);

        //CREATING THE RESULT CONTAINERS
        const mile_convert2 = document.createElement('div')
        mile_convert2.setAttribute('class', 'convert');
        //APPENDING THE RESULT CONTAINER
        converted.appendChild(mile_convert2);
        //CREATING THE RESULT HOLDERS
        const label2 = document.createElement('label')
        label2.setAttribute('class', 'label');
        const result2 = document.createElement('input')
        result2.setAttribute('class', 'result');
        //appending the result holders
        mile_convert2.appendChild(label2);
        mile_convert2.appendChild(result2);

        //CREATING THE RESULT CONTAINERS
        const mile_convert3 = document.createElement('div')
        mile_convert3.setAttribute('class', 'convert');
        //APPENDING THE RESULT CONTAINER
        converted.appendChild(mile_convert3);
        //CREATING THE RESULT HOLDERS
        const label3 = document.createElement('label')
        label3.setAttribute('class', 'label');
        const result3 = document.createElement('input')
        result3.setAttribute('class', 'result');
        //appending the result holders
        mile_convert3.appendChild(label3);
        mile_convert3.appendChild(result3);

        //CREATING THE RESULT CONTAINERS
        const mile_convert4 = document.createElement('div')
        mile_convert4.setAttribute('class', 'convert');
        //APPENDING THE RESULT CONTAINER
        converted.appendChild(mile_convert4);
        //CREATING THE RESULT HOLDERS
        const label4 = document.createElement('label')
        label4.setAttribute('class', 'label');
        const result4 = document.createElement('input')
        result4.setAttribute('class', 'result');
        //appending the result holders
        mile_convert4.appendChild(label4);
        mile_convert4.appendChild(result4);

        //CREATING THE RESULT CONTAINERS
        const mile_convert5 = document.createElement('div')
        mile_convert5.setAttribute('class', 'convert');
        //APPENDING THE RESULT CONTAINER
        converted.appendChild(mile_convert5);
        //CREATING THE RESULT HOLDERS
        const label5 = document.createElement('label')
        label5.setAttribute('class', 'label');
        const result5 = document.createElement('input')
        result5.setAttribute('class', 'result');
        //appending the result holders
        mile_convert5.appendChild(label5);
        mile_convert5.appendChild(result5);

        //CREATING THE RESULT CONTAINERS
        const mile_convert6 = document.createElement('div')
        mile_convert6.setAttribute('class', 'convert');
        //APPENDING THE RESULT CONTAINER
        converted.appendChild(mile_convert6);
        //CREATING THE RESULT HOLDERS
        const label6 = document.createElement('label')
        label6.setAttribute('class', 'label');
        const result6 = document.createElement('input')
        result6.setAttribute('class', 'result');
        //appending the result holders
        mile_convert6.appendChild(label6);
        mile_convert6.appendChild(result6);

        //CREATING THE RESULT CONTAINERS
        const mile_convert7 = document.createElement('div')
        mile_convert7.setAttribute('class', 'convert');
        //APPENDING THE RESULT CONTAINER
        converted.appendChild(mile_convert7);
        //CREATING THE RESULT HOLDERS
        const label7 = document.createElement('label')
        label7.setAttribute('class', 'label');
        const result7 = document.createElement('input')
        result7.setAttribute('class', 'result');
        //appending the result holders
        mile_convert7.appendChild(label7);
        mile_convert7.appendChild(result7);

        //CREATING THE RESULT CONTAINERS
        const mile_convert8 = document.createElement('div')
        mile_convert8.setAttribute('class', 'convert');
        //APPENDING THE RESULT CONTAINER
        converted.appendChild(mile_convert8);
        //CREATING THE RESULT HOLDERS
        const label8 = document.createElement('label')
        label8.setAttribute('class', 'label');
        const result8 = document.createElement('input')
        result8.setAttribute('class', 'result');
        //appending the result holders
        mile_convert8.appendChild(label8);
        mile_convert8.appendChild(result8);

        //GETTING THE INPUT
        const x = enter.value;

        //SETTING THE LABELS
        label1.textContent = 'MILE:'
        label2.textContent = 'INCH:'
        label3.textContent = 'YARD:'
        label4.textContent = 'CENTI-METER:'
        label5.textContent = 'MILI-METER:'
        label6.textContent = 'KILO-METER:'
        label7.textContent = 'FOOT:'
        label8.textContent = 'METER:'

        //SETTING THE RESULTS
        result1.value = enter.value;
        result2.value = mileToInch(x);
        result3.value = mileToYard(x);
        result4.value = mileToCentiMeter(x);
        result5.value = mileToMiliMeter(x);
        result6.value = mileToKiloMeter(x);
        result7.value = mileToFoot(x);
        result8.value = mileToMeter(x);
    })  
})

foot.addEventListener('click', () =>{
    //CLEARING THE FORM
    pop.innerHTML = ' ';
    out.innerHTML = ' ';
    tegs.textContent = 'FOOT';
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
        const foot_convert1 = document.createElement('div')
        foot_convert1.setAttribute('class', 'convert');
        //APPENDING THE RESULT CONTAINER
        converted.appendChild(foot_convert1);
        //CREATING THE RESULT HOLDERS
        const label1 = document.createElement('label')
        label1.setAttribute('class', 'label');
        const result1 = document.createElement('input')
        result1.setAttribute('class', 'result');
        //appending the result holders
        foot_convert1.appendChild(label1);
        foot_convert1.appendChild(result1);

        //CREATING THE RESULT CONTAINERS
        const foot_convert2 = document.createElement('div')
        foot_convert2.setAttribute('class', 'convert');
        //APPENDING THE RESULT CONTAINER
        converted.appendChild(foot_convert2);
        //CREATING THE RESULT HOLDERS
        const label2 = document.createElement('label')
        label2.setAttribute('class', 'label');
        const result2 = document.createElement('input')
        result2.setAttribute('class', 'result');
        //appending the result holders
        foot_convert2.appendChild(label2);
        foot_convert2.appendChild(result2);

        //CREATING THE RESULT CONTAINERS
        const foot_convert3 = document.createElement('div')
        foot_convert3.setAttribute('class', 'convert');
        //APPENDING THE RESULT CONTAINER
        converted.appendChild(foot_convert3);
        //CREATING THE RESULT HOLDERS
        const label3 = document.createElement('label')
        label3.setAttribute('class', 'label');
        const result3 = document.createElement('input')
        result3.setAttribute('class', 'result');
        //appending the result holders
        foot_convert3.appendChild(label3);
        foot_convert3.appendChild(result3);

        //CREATING THE RESULT CONTAINERS
        const foot_convert4 = document.createElement('div')
        foot_convert4.setAttribute('class', 'convert');
        //APPENDING THE RESULT CONTAINER
        converted.appendChild(foot_convert4);
        //CREATING THE RESULT HOLDERS
        const label4 = document.createElement('label')
        label4.setAttribute('class', 'label');
        const result4 = document.createElement('input')
        result4.setAttribute('class', 'result');
        //appending the result holders
        foot_convert4.appendChild(label4);
        foot_convert4.appendChild(result4);

        //CREATING THE RESULT CONTAINERS
        const foot_convert5 = document.createElement('div')
        foot_convert5.setAttribute('class', 'convert');
        //APPENDING THE RESULT CONTAINER
        converted.appendChild(foot_convert5);
        //CREATING THE RESULT HOLDERS
        const label5 = document.createElement('label')
        label5.setAttribute('class', 'label');
        const result5 = document.createElement('input')
        result5.setAttribute('class', 'result');
        //appending the result holders
        foot_convert5.appendChild(label5);
        foot_convert5.appendChild(result5);

        //CREATING THE RESULT CONTAINERS
        const foot_convert6 = document.createElement('div')
        foot_convert6.setAttribute('class', 'convert');
        //APPENDING THE RESULT CONTAINER
        converted.appendChild(foot_convert6);
        //CREATING THE RESULT HOLDERS
        const label6 = document.createElement('label')
        label6.setAttribute('class', 'label');
        const result6 = document.createElement('input')
        result6.setAttribute('class', 'result');
        //appending the result holders
        foot_convert6.appendChild(label6);
        foot_convert6.appendChild(result6);

        //CREATING THE RESULT CONTAINERS
        const foot_convert7 = document.createElement('div')
        foot_convert7.setAttribute('class', 'convert');
        //APPENDING THE RESULT CONTAINER
        converted.appendChild(foot_convert7);
        //CREATING THE RESULT HOLDERS
        const label7 = document.createElement('label')
        label7.setAttribute('class', 'label');
        const result7 = document.createElement('input')
        result7.setAttribute('class', 'result');
        //appending the result holders
        foot_convert7.appendChild(label7);
        foot_convert7.appendChild(result7);

        //CREATING THE RESULT CONTAINERS
        const foot_convert8 = document.createElement('div')
        foot_convert8.setAttribute('class', 'convert');
        //APPENDING THE RESULT CONTAINER
        converted.appendChild(foot_convert8);
        //CREATING THE RESULT HOLDERS
        const label8 = document.createElement('label')
        label8.setAttribute('class', 'label');
        const result8 = document.createElement('input')
        result8.setAttribute('class', 'result');
        //appending the result holders
        foot_convert8.appendChild(label8);
        foot_convert8.appendChild(result8);
        
        //GETTING THE INPUT
        const x = enter.value;

        //SETTING THE LABELS
        label1.textContent = 'FOOT:'
        label2.textContent = 'INCH:'
        label3.textContent = 'YARD:'
        label4.textContent = 'CENTI-METER:'
        label5.textContent = 'MILI-METER:'
        label6.textContent = 'KILO-METER:'
        label7.textContent = 'MILE:'
        label8.textContent = 'METER:'

        //SETTING THE RESULTS
        result1.value = enter.value;
        result2.value = footToInch(x);
        result3.value = footToYard(x);
        result4.value = footToCentiMeter(x);
        result5.value = footToMiliMeter(x);
        result6.value = footToKiloMeter(x);
        result7.value = footToMile(x);
        result8.value = footToMeter(x);
    })  
})

centi_meter.addEventListener('click', () =>{
    //CLEARING THE FORM
    pop.innerHTML = ' ';
    out.innerHTML = ' ';
    tegs.textContent = 'CENTI-METER';
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
        const centi_meter_convert1 = document.createElement('div')
        centi_meter_convert1.setAttribute('class', 'convert');
        //APPENDING THE RESULT CONTAINER
        converted.appendChild(centi_meter_convert1);
        //CREATING THE RESULT HOLDERS
        const label1 = document.createElement('label')
        label1.setAttribute('class', 'label');
        const result1 = document.createElement('input')
        result1.setAttribute('class', 'result');
        //appending the result holders
        centi_meter_convert1.appendChild(label1);
        centi_meter_convert1.appendChild(result1);

        //CREATING THE RESULT CONTAINERS
        const centi__convert2 = document.createElement('div')
        centi__convert2.setAttribute('class', 'convert');
        //APPENDING THE RESULT CONTAINER
        converted.appendChild(centi__convert2);
        //CREATING THE RESULT HOLDERS
        const label2 = document.createElement('label')
        label2.setAttribute('class', 'label');
        const result2 = document.createElement('input')
        result2.setAttribute('class', 'result');
        //appending the result holders
        centi__convert2.appendChild(label2);
        centi__convert2.appendChild(result2);

        //CREATING THE RESULT CONTAINERS
        const centi_meter_convert3 = document.createElement('div')
        centi_meter_convert3.setAttribute('class', 'convert');
        //APPENDING THE RESULT CONTAINER
        converted.appendChild(centi_meter_convert3);
        //CREATING THE RESULT HOLDERS
        const label3 = document.createElement('label')
        label3.setAttribute('class', 'label');
        const result3 = document.createElement('input')
        result3.setAttribute('class', 'result');
        //appending the result holders
        centi_meter_convert3.appendChild(label3);
        centi_meter_convert3.appendChild(result3);

        //CREATING THE RESULT CONTAINERS
        const centi_meter_convert4 = document.createElement('div')
        centi_meter_convert4.setAttribute('class', 'convert');
        //APPENDING THE RESULT CONTAINER
        converted.appendChild(centi_meter_convert4);
        //CREATING THE RESULT HOLDERS
        const label4 = document.createElement('label')
        label4.setAttribute('class', 'label');
        const result4 = document.createElement('input')
        result4.setAttribute('class', 'result');
        //appending the result holders
        centi_meter_convert4.appendChild(label4);
        centi_meter_convert4.appendChild(result4);

        //CREATING THE RESULT CONTAINERS
        const centi_meter_convert5 = document.createElement('div')
        centi_meter_convert5.setAttribute('class', 'convert');
        //APPENDING THE RESULT CONTAINER
        converted.appendChild(centi_meter_convert5);
        //CREATING THE RESULT HOLDERS
        const label5 = document.createElement('label')
        label5.setAttribute('class', 'label');
        const result5 = document.createElement('input')
        result5.setAttribute('class', 'result');
        //appending the result holders
        centi_meter_convert5.appendChild(label5);
        centi_meter_convert5.appendChild(result5);

        //CREATING THE RESULT CONTAINERS
        const centi_meter_convert6 = document.createElement('div')
        centi_meter_convert6.setAttribute('class', 'convert');
        //APPENDING THE RESULT CONTAINER
        converted.appendChild(centi_meter_convert6);
        //CREATING THE RESULT HOLDERS
        const label6 = document.createElement('label')
        label6.setAttribute('class', 'label');
        const result6 = document.createElement('input')
        result6.setAttribute('class', 'result');
        //appending the result holders
        centi_meter_convert6.appendChild(label6);
        centi_meter_convert6.appendChild(result6);

        //CREATING THE RESULT CONTAINERS
        const centi_meter_convert7 = document.createElement('div')
        centi_meter_convert7.setAttribute('class', 'convert');
        //APPENDING THE RESULT CONTAINER
        converted.appendChild(centi_meter_convert7);
        //CREATING THE RESULT HOLDERS
        const label7 = document.createElement('label')
        label7.setAttribute('class', 'label');
        const result7 = document.createElement('input')
        result7.setAttribute('class', 'result');
        //appending the result holders
        centi_meter_convert7.appendChild(label7);
        centi_meter_convert7.appendChild(result7);

        //CREATING THE RESULT CONTAINERS
        const centi_meter_convert8 = document.createElement('div')
        centi_meter_convert8.setAttribute('class', 'convert');
        //APPENDING THE RESULT CONTAINER
        converted.appendChild(centi_meter_convert8);
        //CREATING THE RESULT HOLDERS
        const label8 = document.createElement('label')
        label8.setAttribute('class', 'label');
        const result8 = document.createElement('input')
        result8.setAttribute('class', 'result');
        //appending the result holders
        centi_meter_convert8.appendChild(label8);
        centi_meter_convert8.appendChild(result8);

        //GETTING THE INPUT
        const x = enter.value;

        //SETTING THE LABELS
        label1.textContent = 'CENTI-METER:'
        label2.textContent = 'INCH:'
        label3.textContent = 'YARD:'
        label4.textContent = 'METER:'
        label5.textContent = 'MILI-METER:'
        label6.textContent = 'KILO-METER:'
        label7.textContent = 'FOOT:'
        label8.textContent = 'MILE:'

        //SETTING THE RESULTS
        result1.value = enter.value;
        result2.value = centiMeterToInch(x);
        result3.value = centiMeterToYard(x);
        result4.value = centiMeterToMeter(x);
        result5.value = centiMeterToMiliMeter(x);
        result6.value = centiMeterToKiloMeter(x);
        result7.value = centiMeterToFoot(x);
        result8.value = centiMeterToMile(x);
    })  
})

mili_meter.addEventListener('click', () =>{
    //CLEARING THE FORM
    pop.innerHTML = ' ';
    out.innerHTML = ' ';
    tegs.textContent = 'MILI-METER';
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
        const mili_meter_convert1 = document.createElement('div')
        mili_meter_convert1.setAttribute('class', 'convert');
        //APPENDING THE RESULT CONTAINER
        converted.appendChild(mili_meter_convert1);
        //CREATING THE RESULT HOLDERS
        const label1 = document.createElement('label')
        label1.setAttribute('class', 'label');
        const result1 = document.createElement('input')
        result1.setAttribute('class', 'result');
        //appending the result holders
        mili_meter_convert1.appendChild(label1);
        mili_meter_convert1.appendChild(result1);

        //CREATING THE RESULT CONTAINERS
        const mili__convert2 = document.createElement('div')
        mili__convert2.setAttribute('class', 'convert');
        //APPENDING THE RESULT CONTAINER
        converted.appendChild(mili__convert2);
        //CREATING THE RESULT HOLDERS
        const label2 = document.createElement('label')
        label2.setAttribute('class', 'label');
        const result2 = document.createElement('input')
        result2.setAttribute('class', 'result');
        //appending the result holders
        mili__convert2.appendChild(label2);
        mili__convert2.appendChild(result2);

        //CREATING THE RESULT CONTAINERS
        const mili_meter_convert3 = document.createElement('div')
        mili_meter_convert3.setAttribute('class', 'convert');
        //APPENDING THE RESULT CONTAINER
        converted.appendChild(mili_meter_convert3);
        //CREATING THE RESULT HOLDERS
        const label3 = document.createElement('label')
        label3.setAttribute('class', 'label');
        const result3 = document.createElement('input')
        result3.setAttribute('class', 'result');
        //appending the result holders
        mili_meter_convert3.appendChild(label3);
        mili_meter_convert3.appendChild(result3);

        //CREATING THE RESULT CONTAINERS
        const mili_meter_convert4 = document.createElement('div')
        mili_meter_convert4.setAttribute('class', 'convert');
        //APPENDING THE RESULT CONTAINER
        converted.appendChild(mili_meter_convert4);
        //CREATING THE RESULT HOLDERS
        const label4 = document.createElement('label')
        label4.setAttribute('class', 'label');
        const result4 = document.createElement('input')
        result4.setAttribute('class', 'result');
        //appending the result holders
        mili_meter_convert4.appendChild(label4);
        mili_meter_convert4.appendChild(result4);

        //CREATING THE RESULT CONTAINERS
        const mili_meter_convert5 = document.createElement('div')
        mili_meter_convert5.setAttribute('class', 'convert');
        //APPENDING THE RESULT CONTAINER
        converted.appendChild(mili_meter_convert5);
        //CREATING THE RESULT HOLDERS
        const label5 = document.createElement('label')
        label5.setAttribute('class', 'label');
        const result5 = document.createElement('input')
        result5.setAttribute('class', 'result');
        //appending the result holders
        mili_meter_convert5.appendChild(label5);
        mili_meter_convert5.appendChild(result5);

        //CREATING THE RESULT CONTAINERS
        const mili_meter_convert6 = document.createElement('div')
        mili_meter_convert6.setAttribute('class', 'convert');
        //APPENDING THE RESULT CONTAINER
        converted.appendChild(mili_meter_convert6);
        //CREATING THE RESULT HOLDERS
        const label6 = document.createElement('label')
        label6.setAttribute('class', 'label');
        const result6 = document.createElement('input')
        result6.setAttribute('class', 'result');
        //appending the result holders
        mili_meter_convert6.appendChild(label6);
        mili_meter_convert6.appendChild(result6);

        //CREATING THE RESULT CONTAINERS
        const mili_meter_convert7 = document.createElement('div')
        mili_meter_convert7.setAttribute('class', 'convert');
        //APPENDING THE RESULT CONTAINER
        converted.appendChild(mili_meter_convert7);
        //CREATING THE RESULT HOLDERS
        const label7 = document.createElement('label')
        label7.setAttribute('class', 'label');
        const result7 = document.createElement('input')
        result7.setAttribute('class', 'result');
        //appending the result holders
        mili_meter_convert7.appendChild(label7);
        mili_meter_convert7.appendChild(result7);

        //CREATING THE RESULT CONTAINERS
        const mili_meter_convert8 = document.createElement('div')
        mili_meter_convert8.setAttribute('class', 'convert');
        //APPENDING THE RESULT CONTAINER
        converted.appendChild(mili_meter_convert8);
        //CREATING THE RESULT HOLDERS
        const label8 = document.createElement('label')
        label8.setAttribute('class', 'label');
        const result8 = document.createElement('input')
        result8.setAttribute('class', 'result');
        //appending the result holders
        mili_meter_convert8.appendChild(label8);
        mili_meter_convert8.appendChild(result8);

        //GETTING THE INPUT
        const x = enter.value;

        //SETTING THE LABELS
        label1.textContent = 'MILI-METER:'
        label2.textContent = 'INCH:'
        label3.textContent = 'YARD:'
        label4.textContent = 'CENTI-METER:'
        label5.textContent = 'METER:'
        label6.textContent = 'KILO-METER:'
        label7.textContent = 'FOOT:'
        label8.textContent = 'MILE:'

        //SETTING THE RESULTS
        result1.value = enter.value;
        result2.value = miliMeterToInch(x);
        result3.value = miliMeterToYard(x);
        result4.value = miliMeterToCentiMeter(x);
        result5.value = miliMeterToMeter(x);
        result6.value = miliMeterToKilometer(x);
        result7.value = miliMeterToFoot(x);
        result8.value = miliMeterToMile(x);
    })  
})

kilo_meter.addEventListener('click', () =>{
    //CLEARING THE FORM
    pop.innerHTML = ' ';
    out.innerHTML = ' ';
    tegs.textContent = 'KILO-METER';
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
        const kilo_meter_convert1 = document.createElement('div')
        kilo_meter_convert1.setAttribute('class', 'convert');
        //APPENDING THE RESULT CONTAINER
        converted.appendChild(kilo_meter_convert1);
        //CREATING THE RESULT HOLDERS
        const label1 = document.createElement('label')
        label1.setAttribute('class', 'label');
        const result1 = document.createElement('input')
        result1.setAttribute('class', 'result');
        //appending the result holders
        kilo_meter_convert1.appendChild(label1);
        kilo_meter_convert1.appendChild(result1);

        //CREATING THE RESULT CONTAINERS
        const kilo__convert2 = document.createElement('div')
        kilo__convert2.setAttribute('class', 'convert');
        //APPENDING THE RESULT CONTAINER
        converted.appendChild(kilo__convert2);
        //CREATING THE RESULT HOLDERS
        const label2 = document.createElement('label')
        label2.setAttribute('class', 'label');
        const result2 = document.createElement('input')
        result2.setAttribute('class', 'result');
        //appending the result holders
        kilo__convert2.appendChild(label2);
        kilo__convert2.appendChild(result2);

        //CREATING THE RESULT CONTAINERS
        const kilo_meter_convert3 = document.createElement('div')
        kilo_meter_convert3.setAttribute('class', 'convert');
        //APPENDING THE RESULT CONTAINER
        converted.appendChild(kilo_meter_convert3);
        //CREATING THE RESULT HOLDERS
        const label3 = document.createElement('label')
        label3.setAttribute('class', 'label');
        const result3 = document.createElement('input')
        result3.setAttribute('class', 'result');
        //appending the result holders
        kilo_meter_convert3.appendChild(label3);
        kilo_meter_convert3.appendChild(result3);

        //CREATING THE RESULT CONTAINERS
        const kilo_meter_convert4 = document.createElement('div')
        kilo_meter_convert4.setAttribute('class', 'convert');
        //APPENDING THE RESULT CONTAINER
        converted.appendChild(kilo_meter_convert4);
        //CREATING THE RESULT HOLDERS
        const label4 = document.createElement('label')
        label4.setAttribute('class', 'label');
        const result4 = document.createElement('input')
        result4.setAttribute('class', 'result');
        //appending the result holders
        kilo_meter_convert4.appendChild(label4);
        kilo_meter_convert4.appendChild(result4);

        //CREATING THE RESULT CONTAINERS
        const kilo_meter_convert5 = document.createElement('div')
        kilo_meter_convert5.setAttribute('class', 'convert');
        //APPENDING THE RESULT CONTAINER
        converted.appendChild(kilo_meter_convert5);
        //CREATING THE RESULT HOLDERS
        const label5 = document.createElement('label')
        label5.setAttribute('class', 'label');
        const result5 = document.createElement('input')
        result5.setAttribute('class', 'result');
        //appending the result holders
        kilo_meter_convert5.appendChild(label5);
        kilo_meter_convert5.appendChild(result5);

        //CREATING THE RESULT CONTAINERS
        const kilo_meter_convert6 = document.createElement('div')
        kilo_meter_convert6.setAttribute('class', 'convert');
        //APPENDING THE RESULT CONTAINER
        converted.appendChild(kilo_meter_convert6);
        //CREATING THE RESULT HOLDERS
        const label6 = document.createElement('label')
        label6.setAttribute('class', 'label');
        const result6 = document.createElement('input')
        result6.setAttribute('class', 'result');
        //appending the result holders
        kilo_meter_convert6.appendChild(label6);
        kilo_meter_convert6.appendChild(result6);

        //CREATING THE RESULT CONTAINERS
        const kilo_meter_convert7 = document.createElement('div')
        kilo_meter_convert7.setAttribute('class', 'convert');
        //APPENDING THE RESULT CONTAINER
        converted.appendChild(kilo_meter_convert7);
        //CREATING THE RESULT HOLDERS
        const label7 = document.createElement('label')
        label7.setAttribute('class', 'label');
        const result7 = document.createElement('input')
        result7.setAttribute('class', 'result');
        //appending the result holders
        kilo_meter_convert7.appendChild(label7);
        kilo_meter_convert7.appendChild(result7);

        //CREATING THE RESULT CONTAINERS
        const kilo_meter_convert8 = document.createElement('div')
        kilo_meter_convert8.setAttribute('class', 'convert');
        //APPENDING THE RESULT CONTAINER
        converted.appendChild(kilo_meter_convert8);
        //CREATING THE RESULT HOLDERS
        const label8 = document.createElement('label')
        label8.setAttribute('class', 'label');
        const result8 = document.createElement('input')
        result8.setAttribute('class', 'result');
        //appending the result holders
        kilo_meter_convert8.appendChild(label8);
        kilo_meter_convert8.appendChild(result8);      

        //GETTING THE INPUT
        const x = enter.value;

        //SETTING THE LABELS
        label1.textContent = 'KILO-METER:'
        label2.textContent = 'INCH:'
        label3.textContent = 'YARD:'
        label4.textContent = 'MILI-METER:'
        label5.textContent = 'METER:'
        label6.textContent = 'CENTI-METER:'
        label7.textContent = 'FOOT:'
        label8.textContent = 'MILE:'

        //SETTING THE RESULTS
        result1.value = enter.value;
        result2.value = kiloMeterToInch(x);
        result3.value = kiloMeterToYard(x);
        result4.value = kiloMeterToMiliMeter(x);
        result5.value = kiloMeterToMeter(x);
        result6.value = kiloMeterToCentiMeter(x);
        result7.value = kiloMeterToFoot(x);
        result8.value = kiloMeterToMile(x);
    })  
})

yard.addEventListener('click', () =>{
    //CLEARING THE FORM
    pop.innerHTML = ' ';
    out.innerHTML = ' ';
    tegs.textContent = 'YARD';
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
        const yard_convert1 = document.createElement('div')
        yard_convert1.setAttribute('class', 'convert');
        //APPENDING THE RESULT CONTAINER
        converted.appendChild(yard_convert1);
        //CREATING THE RESULT HOLDERS
        const label1 = document.createElement('label')
        label1.setAttribute('class', 'label');
        const result1 = document.createElement('input')
        result1.setAttribute('class', 'result');
        //appending the result holders
        yard_convert1.appendChild(label1);
        yard_convert1.appendChild(result1);

        //CREATING THE RESULT CONTAINERS
        const yard_convert2 = document.createElement('div')
        yard_convert2.setAttribute('class', 'convert');
        //APPENDING THE RESULT CONTAINER
        converted.appendChild(yard_convert2);
        //CREATING THE RESULT HOLDERS
        const label2 = document.createElement('label')
        label2.setAttribute('class', 'label');
        const result2 = document.createElement('input')
        result2.setAttribute('class', 'result');
        //appending the result holders
        yard_convert2.appendChild(label2);
        yard_convert2.appendChild(result2);

        //CREATING THE RESULT CONTAINERS
        const yard_convert3 = document.createElement('div')
        yard_convert3.setAttribute('class', 'convert');
        //APPENDING THE RESULT CONTAINER
        converted.appendChild(yard_convert3);
        //CREATING THE RESULT HOLDERS
        const label3 = document.createElement('label')
        label3.setAttribute('class', 'label');
        const result3 = document.createElement('input')
        result3.setAttribute('class', 'result');
        //appending the result holders
        yard_convert3.appendChild(label3);
        yard_convert3.appendChild(result3);

        //CREATING THE RESULT CONTAINERS
        const yard_convert4 = document.createElement('div')
        yard_convert4.setAttribute('class', 'convert');
        //APPENDING THE RESULT CONTAINER
        converted.appendChild(yard_convert4);
        //CREATING THE RESULT HOLDERS
        const label4 = document.createElement('label')
        label4.setAttribute('class', 'label');
        const result4 = document.createElement('input')
        result4.setAttribute('class', 'result');
        //appending the result holders
        yard_convert4.appendChild(label4);
        yard_convert4.appendChild(result4);

        //CREATING THE RESULT CONTAINERS
        const yard_convert5 = document.createElement('div')
        yard_convert5.setAttribute('class', 'convert');
        //APPENDING THE RESULT CONTAINER
        converted.appendChild(yard_convert5);
        //CREATING THE RESULT HOLDERS
        const label5 = document.createElement('label')
        label5.setAttribute('class', 'label');
        const result5 = document.createElement('input')
        result5.setAttribute('class', 'result');
        //appending the result holders
        yard_convert5.appendChild(label5);
        yard_convert5.appendChild(result5);

        //CREATING THE RESULT CONTAINERS
        const yard_convert6 = document.createElement('div')
        yard_convert6.setAttribute('class', 'convert');
        //APPENDING THE RESULT CONTAINER
        converted.appendChild(yard_convert6);
        //CREATING THE RESULT HOLDERS
        const label6 = document.createElement('label')
        label6.setAttribute('class', 'label');
        const result6 = document.createElement('input')
        result6.setAttribute('class', 'result');
        //appending the result holders
        yard_convert6.appendChild(label6);
        yard_convert6.appendChild(result6);

        //CREATING THE RESULT CONTAINERS
        const yard_convert7 = document.createElement('div')
        yard_convert7.setAttribute('class', 'convert');
        //APPENDING THE RESULT CONTAINER
        converted.appendChild(yard_convert7);
        //CREATING THE RESULT HOLDERS
        const label7 = document.createElement('label')
        label7.setAttribute('class', 'label');
        const result7 = document.createElement('input')
        result7.setAttribute('class', 'result');
        //appending the result holders
        yard_convert7.appendChild(label7);
        yard_convert7.appendChild(result7);

        //CREATING THE RESULT CONTAINERS
        const yard_convert8 = document.createElement('div')
        yard_convert8.setAttribute('class', 'convert');
        //APPENDING THE RESULT CONTAINER
        converted.appendChild(yard_convert8);
        //CREATING THE RESULT HOLDERS
        const label8 = document.createElement('label')
        label8.setAttribute('class', 'label');
        const result8 = document.createElement('input')
        result8.setAttribute('class', 'result');
        //appending the result holders
        yard_convert8.appendChild(label8);
        yard_convert8.appendChild(result8);

        //GETTING THE INPUT
        const x = enter.value;

        //SETTING THE LABELS
        label1.textContent = 'YARD:'
        label2.textContent = 'INCH:'
        label3.textContent = 'METER:'
        label4.textContent = 'CENTI-METER:'
        label5.textContent = 'MILI-METER:'
        label6.textContent = 'KILO-METER:'
        label7.textContent = 'FOOT:'
        label8.textContent = 'MILE:'

        //SETTING THE RESULTS
        result1.value = enter.value;
        result2.value = yardToInch(x);
        result3.value = yardToMeter(x);
        result4.value = yardToCentiMeter(x);
        result5.value = yardToMiliMeter(x);
        result6.value = yardToKiloMeter(x);
        result7.value = yardToFoot(x);
        result8.value = yardToMile(x);
    })  
})