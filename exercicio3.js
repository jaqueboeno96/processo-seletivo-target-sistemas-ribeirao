/*
Autor: Jaqueline A. O. Boeno
Data: 01/03/2023
Descrição: Descubra a lógica e complete
*/

//a) 1, 3, 5, 7, adiciona 2 

var a = [1, 3, 5, 7];
var proximo = a[a.length-1] + 2;
console.log(proximo); 

//b) 2, 4, 8, 16, 32, 64, multiplica por 2

var b = [2, 4, 8, 16, 32, 64];
var proximo = b[b.length-1] * 2;
console.log(proximo);

//c) 0, 1, 4, 9, 16, 25, 36, elevar ao ²
var c = [0, 1, 4, 9, 16, 25, 36];
var proximo = Math.pow(c[c.length-1], 2) + 1;
console.log(proximo);

//d) 4, 16, 36, 64, adicionar 12
var d = [4, 16, 36, 64];
var proximo = d[d.length-1] + 12;
console.log(proximo);

//e) 1, 1, 2, 3, 5, 8, somar dois anteriores
var e = [1, 1, 2, 3, 5, 8];
var proximo = e[e.length-1] + e[e.length-2];
console.log(proximo);


