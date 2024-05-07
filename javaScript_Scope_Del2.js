// För alla dessa, vad är värdet när man kallar på funktionen med alert()
// #1
function q1() {
    var a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(a);
    //Värdet kommer vara 3 på a då man inte kallar på funktionen
}
q1()

//#2
var a = 0;
function q2() {
    a = 5;
    //Värdet kommer vara undefined på a
}
q2()
function q22() {
    alert(a);
    //Värdet kommer vara null på a
}
q22()

//#3
function q3() {
    window.a = "hello";
    //Värdet kommer vara undefined på a
}
q3()

function q32() {
    alert(a);
}
//Värdet kommer vara hello på a
q32()
//#4
var a = 1;
function q4() {
    var a = "test";
    alert(a);
    //Värdet kommer vara test på a
}
q4()
//#5
var a = 2;
if (true) {
    var a = 5;
    alert(a);
}
alert(a);
//Värdet kommer vara 5 på a