function calcularPromedio() {

    var ingles = parseFloat(document.getElementById("ingles").value);
    var matematica = parseFloat(document.getElementById("matematica").value);
    var lengua = parseFloat(document.getElementById("lengua").value);
    
    if ((ingles < 0 || ingles > 10) || (matematica < 0 || matematica > 10) || (lengua < 0 || lengua > 10)) {
        document.getElementById("resultados").innerHTML = "Error: Las notas deben estar entre 0 y 10.";
        return;
    }

    var promedio = (ingles + matematica + lengua) / 3;
    var resultado;

    if (promedio === 10) {
        resultado = "Satisfactorio (beca) y aprueba";
    } else if (promedio >= 8 && promedio < 10) {
        resultado = "Muy buena, y aprueba";
    } else if (promedio >= 7 && promedio < 8) {
        resultado = "Buena, y aprueba";
    } else {
        resultado = "Regular y reprueba";
    }

    document.getElementById("resultados").innerHTML = "Promedio: " + promedio.toFixed(2) + "<br>" + resultado;
}

function generarTabla() {
    var numero = parseInt(document.getElementById("numero").value);
    var resultados = document.getElementById("resultados");
    var tablaHTML = "<h3>Tabla de Multiplicar del " + numero + "</h3>";

    for (var i = 1; i <= 10; i++) {
        tablaHTML += "<p>" + numero + " x " + i + " = " + (numero * i) + "</p>";
    }

    resultados.innerHTML = tablaHTML;
}


function mostrarArreglo() {
    var arreglo = [1, 2, 3, 4, 5]; 
    var ul = document.createElement('ul');

    ul.classList.add('arreglo-horizontal');

    arreglo.forEach(function(numero) {
        var li = document.createElement('li');
        li.textContent = numero;
        ul.appendChild(li);
    });

    var arregloContainer = document.getElementById('arregloContainer');

    arregloContainer.innerHTML = '';
    arregloContainer.appendChild(ul);
}

