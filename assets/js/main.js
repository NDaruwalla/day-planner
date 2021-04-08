// This is the date in the jumbotron/header using moment
let today = moment().format('LLLL');
$('#currentDay').text(today)
//console.log(today)

// Local time needed for determining past, present, future color coding
// parseInt converts to integer
//let localTime = parseInt(moment().format('H'));
let localTime = (11);
//console.log(localTime);


// Button behavior for saving to local storage and preserving data upon browser refresh
// code for 8:00 row
let ta08html = document.getElementById('ta08');
let savenote08html = document.getElementById('saveNote08');

savenote08html.addEventListener('click', runUpdate08);

function runUpdate08() {
    localStorage.setItem('ta08text', ta08html.value);
}

// code for 9:00 row
let ta09html = document.getElementById('ta09');
let savenote09html = document.getElementById('saveNote09');

savenote09html.addEventListener('click', runUpdate09);

function runUpdate09() {
    localStorage.setItem('ta09text', ta09html.value);
}

// code for 10:00 row
let ta10html = document.getElementById('ta10');
let savenote10html = document.getElementById('saveNote10');

savenote10html.addEventListener('click', runUpdate10);

function runUpdate10() {
    localStorage.setItem('ta10text', ta10html.value);
}

// code for 11:00 row
let ta11html = document.getElementById('ta11');
let savenote11html = document.getElementById('saveNote11');

savenote11html.addEventListener('click', runUpdate11);

function runUpdate11() {
    localStorage.setItem('ta11text', ta11html.value);
}

// code for 12:00 row
let ta12html = document.getElementById('ta12');
let savenote12html = document.getElementById('saveNote12');

savenote12html.addEventListener('click', runUpdate12);

function runUpdate12() {
    localStorage.setItem('ta12text', ta12html.value);
}

// code for 01:00 row
let ta01html = document.getElementById('ta01');
let savenote01html = document.getElementById('saveNote01');

savenote01html.addEventListener('click', runUpdate01);

function runUpdate01() {
    localStorage.setItem('ta01text', ta01html.value);
}

// code for 02:00 row
let ta02html = document.getElementById('ta02');
let savenote02html = document.getElementById('saveNote02');

savenote02html.addEventListener('click', runUpdate02);

function runUpdate02() {
    localStorage.setItem('ta02text', ta02html.value);
}

// code for 03:00 row
let ta03html = document.getElementById('ta03');
let savenote03html = document.getElementById('saveNote03');

savenote03html.addEventListener('click', runUpdate03);

function runUpdate03() {
    localStorage.setItem('ta03text', ta03html.value);
}

// code for 04:00 row
let ta04html = document.getElementById('ta04');
let savenote04html = document.getElementById('saveNote04');

savenote04html.addEventListener('click', runUpdate04);

function runUpdate04() {
    localStorage.setItem('ta04text', ta04html.value);
}

// code for 05:00 row
let ta05html = document.getElementById('ta05');
let savenote05html = document.getElementById('saveNote05');

savenote05html.addEventListener('click', runUpdate05);

function runUpdate05() {
    localStorage.setItem('ta05text', ta05html.value);
}

// This section of code is used to retrieve the last saved values in the text boxes from localstorage
$(window).on("load", function () {
    ta08html.value = localStorage.getItem('ta08text');
    ta09html.value = localStorage.getItem('ta09text');
    ta10html.value = localStorage.getItem('ta10text');
    ta11html.value = localStorage.getItem('ta11text');
    ta12html.value = localStorage.getItem('ta12text');
    ta01html.value = localStorage.getItem('ta01text');
    ta02html.value = localStorage.getItem('ta02text');
    ta03html.value = localStorage.getItem('ta03text');
    ta04html.value = localStorage.getItem('ta04text');
    ta05html.value = localStorage.getItem('ta05text');
});


// Change time block colors based on local time variable
// if the time right now is (greater than) > 8, then text area 8 should have the class of past
// if the time right now is (the same as) == 8, then text area 8 should have the class of present
// if the time right now is the (less than) < 8, then text area 8 should have the class of future

//https://stackoverflow.com/questions/1988514/javascript-css-how-to-add-and-remove-multiple-css-classes-to-an-element
// 8:00 row
if (localTime > 8 ) {
    document.getElementById('ta08').className += ' past';
};

if (localTime === 8 ) {
    document.getElementById('ta08').className += ' present';
};

if (localTime < 8 ) {
    document.getElementById('ta08').className += ' future';
};


// 9:00 row
if (localTime > 9 ) {
    document.getElementById('ta09').className += ' past';
};

if (localTime === 9 ) {
    document.getElementById('ta09').className += ' present';
};

if (localTime < 9 ) {
    document.getElementById('ta09').className += ' future';
};

// 10:00 row
if (localTime > 10 ) {
    document.getElementById('ta10').className += ' past';
};

if (localTime === 10 ) {
    document.getElementById('ta10').className += ' present';
};

if (localTime < 10 ) {
    document.getElementById('ta10').className += ' future';
};

// 11:00 row
if (localTime > 11 ) {
    document.getElementById('ta11').className += ' past';
};

if (localTime === 11 ) {
    document.getElementById('ta11').className += ' present';
};

if (localTime < 11 ) {
    document.getElementById('ta11').className += ' future';
};

// 12:00 row
if (localTime > 12 ) {
    document.getElementById('ta12').className += ' past';
};

if (localTime === 12 ) {
    document.getElementById('ta12').className += ' present';
};

if (localTime < 12 ) {
    document.getElementById('ta12').className += ' future';
};

// 1:00 row
if (localTime > 13 ) {
    document.getElementById('ta01').className += ' past';
};

if (localTime === 13 ) {
    document.getElementById('ta01').className += ' present';
};

if (localTime < 13 ) {
    document.getElementById('ta01').className += ' future';
};

// 2:00 row
if (localTime > 14 ) {
    document.getElementById('ta02').className += ' past';
};

if (localTime === 14 ) {
    document.getElementById('ta02').className += ' present';
};

if (localTime < 14 ) {
    document.getElementById('ta02').className += ' future';
};

// 3:00 row
if (localTime > 15 ) {
    document.getElementById('ta03').className += ' past';
};

if (localTime === 15 ) {
    document.getElementById('ta03').className += ' present';
};

if (localTime < 15 ) {
    document.getElementById('ta03').className += ' future';
};

// 4:00 row
if (localTime > 16 ) {
    document.getElementById('ta04').className += ' past';
};

if (localTime === 16 ) {
    document.getElementById('ta04').className += ' present';
};

if (localTime < 16 ) {
    document.getElementById('ta04').className += ' future';
};

// 5:00 row
if (localTime > 17 ) {
    document.getElementById('ta05').className += ' past';
};

if (localTime === 17 ) {
    document.getElementById('ta05').className += ' present';
};

if (localTime < 17 ) {
    document.getElementById('ta05').className += ' future'; 
    
};