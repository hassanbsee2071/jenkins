var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
    greeting = 'Good evening! ALLAH O AKBAR';
} else if (hourNow > 12) {
    greeting = 'Good afternoon!Love ALLAH';
} else if (hourNow > 0) {
    greeting = 'Good morning!Love Prophet(P.B.U.H)';
} else {
    greeting = 'Welcome!To Islam';
}

document.write('<h3>' + greeting + '</h3>');
