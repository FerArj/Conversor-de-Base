
// ====================================================== DECIMAL ==========================================================

function converter() {
                
var decimal = Number (demo1.value);

let octal = decimal.toString(8);

let hexadecimal = decimal.toString(16);

let binaria = decimal.toString(2);

console.log (decimal);
console.log (octal);
console.log (hexadecimal);
console.log (binaria);

document.getElementById("demo1").innerHTML = ` ${decimal}`;
document.getElementById("demo2").innerHTML = ` ${octal}`;
document.getElementById("demo3").innerHTML = ` ${hexadecimal}`;
document.getElementById("demo4").innerHTML = ` ${binaria}`;

}

function aparecer_bin() {
    demo4.style.display = 'block'
}

function aparecer_hexa() {
    demo3.style.display = 'block'
}

function aparecer_octal() {
    demo2.style.display = 'block'
}
document.bgColor = "white";

// ====================================================== OCTAL ==========================================================

function converter2() {
                
var octal = Number (demo5.value);

let decimal = parseInt(octal,8);

let hexadecimal = decimal.toString(16);

let binaria = decimal.toString(2);

console.log (decimal);
console.log (octal);
console.log (hexadecimal);
console.log (binaria);

document.getElementById("demo5").innerHTML = ` ${octal}`;
document.getElementById("demo6").innerHTML = ` ${decimal}`;
document.getElementById("demo7").innerHTML = ` ${hexadecimal}`;
document.getElementById("demo8").innerHTML = ` ${binaria}`;

}

function aparecer_bin() {
    demo4.style.display = 'block'
}

function aparecer_hexa() {
    demo3.style.display = 'block'
}

function aparecer_octal() {
    demo2.style.display = 'block'
}
document.bgColor = "white";

// ====================================================== HEXADECIMAL =====================================================

function converter3() {
                
    var hexadecimal = demo9.value;

    let decimal = parseInt(hexadecimal,16);
    
    let binaria = decimal.toString(2);
    
    let octal = decimal.toString(8);
    
    
    console.log (decimal);
    console.log (octal);
    console.log (hexadecimal);
    console.log (binaria);
    
    document.getElementById("demo9").innerHTML = ` ${hexadecimal}`;
    document.getElementById("demo10").innerHTML = ` ${octal}`;
    document.getElementById("demo11").innerHTML = ` ${decimal}`;
    document.getElementById("demo12").innerHTML = ` ${binaria}`;
    
    }
    
    function aparecer_bin() {
        demo4.style.display = 'block'
    }
    
    function aparecer_hexa() {
        demo3.style.display = 'block'
    }
    
    function aparecer_octal() {
        demo2.style.display = 'block'
    }
    document.bgColor = "white";


// ====================================================== BIN??RIO =====================================================


function converter4() {
                
    var binaria = Number (demo13.value);
    
    let decimal = parseInt(binaria,2);

    let octal = decimal.toString(8);
    
    let hexadecimal = decimal.toString(16);
    
    console.log (decimal);
    console.log (octal);
    console.log (hexadecimal);
    console.log (binaria);
    
    document.getElementById("demo13").innerHTML = ` ${binaria}`;
    document.getElementById("demo14").innerHTML = ` ${octal}`;
    document.getElementById("demo15").innerHTML = ` ${hexadecimal}`;
    document.getElementById("demo16").innerHTML = ` ${decimal}`;
    
    }
    
    function aparecer_bin() {
        demo4.style.display = 'block'
    }
    
    function aparecer_hexa() {
        demo3.style.display = 'block'
    }
    
    function aparecer_octal() {
        demo2.style.display = 'block'
    }
    document.bgColor = "white";
