let BG = 1

document.getElementById("btn").onclick = () => {

    if( BG == 1 ) 
    {
        document.querySelector("body").style.backgroundColor = "#f5f9ff";
        document.getElementById("btn").style.background = " linear-gradient(to right ,#57a1ff , #0bb3cb )"
        BG = 2
    }

    else if( BG == 2){
        document.querySelector("body").style.backgroundColor = "#0d1117";
        document.getElementById("btn").style.background = "linear-gradient(to right ,#57a1ff , #b96ef7 )"
        BG = 1
    }
}