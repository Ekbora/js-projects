function update(){
    let t = 1000
    setInterval('heure()', t);             
};
function heure(){
    let heure = new Date();
    let h = heure.getHours();
    let m = heure.getMinutes();
    let s = heure.getSeconds();
    if(h < 10){
        h = "0" + h;
    };
    if(m < 10){
        m = "0" + m;
    };
    if(s < 10){
        s = "0" + s;
    };
    let time = `${h + ":" + m + ":" + s}`;
    document.getElementById("heure").innerHTML = time;
    update();
};