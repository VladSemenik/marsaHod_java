var v=1, curP=0;

function a(){
    curP += v;
    v *= 2;
    document.getElementById('outputA').innerHTML = "<h3>Текущая позиция "+curP+"</h3>";
    document.getElementById('outputR').innerHTML = "<h3>Текущая скорость "+v+"</h3>";
    document.getElementById('left').innerHTML = "<h1>"+(curP-Math.abs(v/2)-Math.abs(v/4)-Math.abs(v/8))+"</h1>";
    document.getElementById('right').innerHTML = "<h1>"+(curP+v*7)+"</h1>";
    document.getElementById('m1').innerHTML = "<h1>"+(curP-Math.abs(v/2)-Math.abs(v/4))+"</h1>";
    document.getElementById('m2').innerHTML = "<h1>"+(curP-Math.abs(v/2))+"</h1>";
    document.getElementById('m3').innerHTML = "<h1>"+(curP)+"</h1>";
    document.getElementById('m4').innerHTML = "<h1>"+(curP+v)+"</h1>";
    document.getElementById('m5').innerHTML = "<h1>"+(curP+v*3)+"</h1>";
}

function r(){
    if(v>=0){
        v=-1;
    }else v=1;
    document.getElementById('outputR').innerHTML = "<h3>Текущая скорость "+v+"</h3>";
    document.getElementById('outputA').innerHTML = "<h3>Текущая позиция "+curP+"</h3>";
    document.getElementById('left').innerHTML = "<h1>"+(curP-1)+"</h1>";
    document.getElementById('right').innerHTML = "<h1>"+(curP+1)+"</h1>";
}


