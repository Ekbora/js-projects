function update(){
    let t = 1000
    setInterval('time()', t);             
};
function time(){
    let time = new Date();
    let h = time.getHours();
    let m = time.getMinutes();
    let s = time.getSeconds();
    if(h < 10){
        h = "0" + h;
    };
    if(m < 10){
        m = "0" + m;
    };
    if(s < 10){
        s = "0" + s;
    };
    let clock = `${h + ":" + m + ":" + s}`;
    document.getElementById("clock").innerHTML = clock;
    update();
};