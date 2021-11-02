// ON KEYDOWN
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
    } else {
        return "Audio is not supported."
    }
});

// ON CLICK
const aKey = document.getElementById("aKey");
const sKey = document.getElementById("sKey");
const dKey = document.getElementById("dKey");
const fKey = document.getElementById("fKey");
const gKey = document.getElementById("gKey");
const hKey = document.getElementById("hKey");
const jKey = document.getElementById("jKey");
const kKey = document.getElementById("kKey");
const lKey = document.getElementById("lKey");


aKey.addEventListener("click", () => {
    document.getElementById("boom").play();
})

sKey.addEventListener("click", () => {
    document.getElementById("clap").play();
})

dKey.addEventListener("click", () => {
    document.getElementById("hihat").play();
})

fKey.addEventListener("click", () => {
    document.getElementById("kick").play();
})

gKey.addEventListener("click", () => {
    document.getElementById("openhat").play();
})

hKey.addEventListener("click", () => {
    document.getElementById("ride").play();
})

jKey.addEventListener("click", () => {
    document.getElementById("snare").play();
})

kKey.addEventListener("click", () => {
    document.getElementById("tink").play();
})

lKey.addEventListener("click", () => {
    document.getElementById("tom").play();
})


