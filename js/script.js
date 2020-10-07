let obj = document.querySelector("#obj");
let mouse = document.querySelector("#mouse");
let start = document.querySelector("#start");
let help = document.querySelector(".help");
obj.addEventListener("click", go);

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (Math.floor(max) - Math.floor(min)) + Math.floor(min));
}

let a = 0;
let aBack = 0;
let b = 0;
let bBack = 0;
let c = 100;
let d = 300;
let cBack = 0;
let dBack = 0;

function go() {
    start.style.display = 'none';
    obj.style.left = a + "px";
    setInterval(goLeft, getRandomArbitrary(20, 30));
    setInterval(goTop, getRandomArbitrary(20, 30));
    setTimeout(goHelp, 10000);
    setTimeout(hideHelp, 15000);

    function goHelp() {
        help.style.display = 'block';
    }

    function hideHelp() {
        help.style.display = 'none';
    }

    function goLeft() {
        if (a <= 0 || a < 255) {
            obj.style.transform = 'scaleX(' + -1 + ')';
            a += getRandomArbitrary(-2, 5);
            obj.style.left = a + "px";
            aBack = a;
        } else if (a >= 255) {
            obj.style.transform = 'scaleX(' + 1 + ')';
            aBack -= getRandomArbitrary(-2, 5);
            obj.style.left = aBack + "px";
            if (aBack <= 0) {
                a = aBack;
            }
        }
        if (parseInt(obj.style.left) >= c && parseInt(obj.style.left) <= (c + 50) && parseInt(obj.style.top) >= d && parseInt(obj.style.top) <= (d + 50) || parseInt(obj.style.left) >= c && parseInt(obj.style.left) <= (c + 50) && parseInt(obj.style.top) >= d && parseInt(obj.style.top) <= (d - 50) || parseInt(obj.style.left) <= c && parseInt(obj.style.left) >= (c - 50) && parseInt(obj.style.top) >= d && parseInt(obj.style.top) <= (d + 50)) {
            a = undefined;
            b = undefined;
            c = undefined;
            d = undefined;
            mouse.classList.add("pulse");
        }
        //mouse
        if (c <= 0 || c < 155) {
            mouse.style.transform = 'scaleX(' + 1 + ')';
            c += getRandomArbitrary(-1, 3);
            mouse.style.left = c + "px";
            cBack = c;
        } else if (c >= 155) {
            mouse.style.transform = 'scaleX(' + -1 + ')';
            cBack -= getRandomArbitrary(-1, 3);
            mouse.style.left = cBack + "px";
            if (aBack <= 0) {
                c = cBack;
            }
        }
    }

    function goTop() {
        if (b <= 0 || b < 400) {
            b += getRandomArbitrary(-1, 3)
            obj.style.top = b + "px";
            bBack = b;
        } else if (b >= 400) {
            bBack -= getRandomArbitrary(-1, 3);
            obj.style.top = bBack + "px";
            if (bBack <= 0) {
                b = bBack;
            }
        }
        //mouse
        if (d <= 0 || d < 400) {
            d += getRandomArbitrary(-1, 3)
            mouse.style.top = d + "px";
            dBack = d;
        } else if (d >= 400) {
            dBack -= getRandomArbitrary(-1, 3);
            mouse.style.top = dBack + "px";
            if (dBack <= 0) {
                d = dBack;
            }
        }
    }
}