document.addEventListener("keydown", (event) => {
    if (event.key == "a" || event.key == "A") { 
       document.getElementById('boom').play();
       return false;
    } else if (event.key == "s" || event.key == "S") { 
            document.getElementById('clap').play();
            return false;
    } else if (event.key == "d" || event.key == "D") { 
        document.getElementById('hihat').play();
        return false;
    } else if (event.key == "f" || event.key == "F") { 
        document.getElementById('kick').play();
        return false;
    } else if (event.key == "g" || event.key == "G") { 
        document.getElementById('openhat').play();
        return false;
    } else if (event.key == "h" || event.key == "H") { 
        document.getElementById('ride').play();
        return false;
    } else if (event.key == "j" || event.key == "J") { 
        document.getElementById('snare').play();
        return false;
    } else if (event.key == "k" || event.key == "K") { 
        document.getElementById('tink').play();
        return false;
    } else if (event.key == "l" || event.key == "L") { 
        document.getElementById('tom').play();
        return false;
    }
});