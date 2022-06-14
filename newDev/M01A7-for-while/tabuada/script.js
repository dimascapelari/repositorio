document.getElementById('tabuada').innerHTML = ''

//var n = 8;
var n = prompt('Digite um número');
var i;

document.getElementById('tabuada').innerHTML = 'Tabuada do ' + n + '<br><br>'

for (i = 1; i <= 10; i++) {
    document.getElementById('tabuada').innerHTML
        += n + 'x' + i + ' ' + '=' + ' ' + (n * i) + '<br>'
}