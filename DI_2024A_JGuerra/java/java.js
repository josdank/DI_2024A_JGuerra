function operacionesBasicas() {

    var numero1 = parseFloat(document.getElementById('numero1').value);
    var numero2 = parseFloat(document.getElementById('numero2').value);
    var operacion = document.getElementById('operacion').value;
    var resultado;

  
    switch (operacion) {
        case "suma":
            resultado = numero1 + numero2;
            break;
        case "resta":
            resultado = numero1 - numero2;
            break;
        case "multiplicacion":
            resultado = numero1 * numero2;
            break;
        case "division":
            if (numero2 !== 0) {
                resultado = numero1 / numero2;
            } else {
                resultado = "Error: División por cero";
            }
            break;
        case "modulo":
            resultado = numero1 % numero2;
            break;
        case "potencia":
            resultado = Math.pow(numero1, numero2);
            break;
        default:
            resultado = "Operación no válida";
    }

    // Mostrar el resultado
    document.getElementById("resultados").innerHTML = "Resultado: " + resultado;
}

function mostrarCampos() {
    var figura = document.getElementById("figura").value;
    var camposDiv = document.getElementById("campos");
    camposDiv.innerHTML = " ";

    switch (figura) {
        case "cuadrado":
            camposDiv.innerHTML = `
                <div class="form-group">
                    <label for="lado">Lado</label>
                    <input type="number" class="form-control" id="lado" required>
                </div>`;
            break;
        case "rectangulo":
            camposDiv.innerHTML = `
                <div class="form-group">
                    <label for="largo">Largo</label>
                    <input type="number" class="form-control" id="largo" required>
                </div>
                <div class="form-group">
                    <label for="ancho">Ancho</label>
                    <input type="number" class="form-control" id="ancho" required>
                </div>`;
            break;
        case "triangulo":
            camposDiv.innerHTML = `
                <div class="form-group">
                    <label for="base">Base</label>
                    <input type="number" class="form-control" id="base" required>
                </div>
                <div class="form-group">
                    <label for="altura">Altura</label>
                    <input type="number" class="form-control" id="altura" required>
                </div>`;
            break;
        case "circulo":
            camposDiv.innerHTML = `
                <div class="form-group">
                    <label for="radio">Radio</label>
                    <input type="number" class="form-control" id="radio" required>
                </div>`;
            break;
    }
}

function calcularArea() {
    var figura = document.getElementById("figura").value;
    var resultado;

    switch (figura) {
        case "cuadrado":
            var lado = parseFloat(document.getElementById("lado").value);
            resultado = lado * lado;
            break;
        case "rectangulo":
            var largo = parseFloat(document.getElementById("largo").value);
            var ancho = parseFloat(document.getElementById("ancho").value);
            resultado = largo * ancho;
            break;
        case "triangulo":
            var base = parseFloat(document.getElementById("base").value);
            var altura = parseFloat(document.getElementById("altura").value);
            resultado = (base * altura) / 2;
            break;
        case "circulo":
            var radio = parseFloat(document.getElementById("radio").value);
            resultado = Math.PI * Math.pow(radio, 2);
            break;
        default:
            resultado = "Por favor, selecciona una figura y llena los campos requeridos";
    }

    document.getElementById("resultados").innerHTML = "Área: " + resultado;
}

function calcularperimetro() {
    var figura = document.getElementById("figura").value;
    var resultado = " ";

    switch(figura) {
        case "cuadrado":
            var lado = parseFloat(document.getElementById("lado").value);
            var areaCuadrado = (lado * lado).toFixed(2);
            var perimetroCuadrado = (4 * lado).toFixed(2);
            resultado = "Área: " + areaCuadrado + ", Perímetro: " + perimetroCuadrado;
            break;
        case "rectangulo":
            var largo = parseFloat(document.getElementById("largo").value);
            var ancho = parseFloat(document.getElementById("ancho").value);
            var areaRectangulo = (largo * ancho).toFixed(2);
            var perimetroRectangulo = (2 * (largo + ancho)).toFixed(2);
            resultado = "Área: " + areaRectangulo + ", Perímetro: " + perimetroRectangulo;
            break;
        case "triangulo":
            var base = parseFloat(document.getElementById("base").value);
            var altura = parseFloat(document.getElementById("altura").value);
            var areaTriangulo = ((base * altura) / 2).toFixed(2);
            var hipotenusa = (Math.sqrt(base * base + altura * altura)).toFixed(2);
            var perimetroTriangulo = (base + altura + hipotenusa);
            resultado = "Área: " + areaTriangulo + ", Perímetro: " + perimetroTriangulo + ", Hipotenusa: " + hipotenusa;
            break;
        case "circulo":
            var radio = parseFloat(document.getElementById("radio").value);
            var areaCirculo = (Math.PI * radio * radio).toFixed(2);
            var perimetroCirculo = (2 * Math.PI * radio).toFixed(2);
            resultado = "Área: " + areaCirculo + ", Perímetro: " + perimetroCirculo;
            break;
    }

    document.getElementById("resultados").innerHTML = "Resultado: " + resultado;
}

