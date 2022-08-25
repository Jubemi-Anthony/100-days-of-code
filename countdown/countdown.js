const weddingDay = () =>{

    //getting the current date and future date then storing the difference in a variable
    const countDate = new Date('December 9, 2028 00:00:00').getTime();
    const today = new Date().getTime();
    const waiting = countDate - today;


// Setting the variables for the time
    const mili = 1;
    const second = mili * 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const week = day * 7;
    const month = week * 4;
    const year = month * 12;

// calculating the remaining time and converting it into smaller units of time
    const textYear = Math.floor(waiting / year);
    const textMonth = Math.floor((waiting % year) / month);
    const textWeek = Math.floor((waiting % month) / week);
    const textDay = Math.floor((waiting % week) / day);
    const textHour = Math.floor((waiting % day) / hour);
    const textMinute = Math.floor((waiting % hour) / minute);
    const textSecond = Math.floor((waiting % minute) / second);
    const textMiliSecond = Math.floor((waiting % second) / mili);


// Changing the text in the HTML
    document.querySelector('#year').innerHTML = textYear;
    document.querySelector('#month').innerHTML = textMonth;
    document.querySelector('#week').innerHTML = textWeek;
    document.querySelector('#day').innerHTML = textDay;
    document.querySelector('#hour').innerHTML = textHour;    
    document.querySelector('#minute').innerHTML = textMinute;    
    document.querySelector('#second').innerHTML = textSecond;    
    document.querySelector('#milisecond').innerHTML = textMiliSecond;    
}

//Calling the function every 1 milisecond
setInterval(weddingDay, 1);