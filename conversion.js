var cantidad;

function cantidad(){
    cantidad = Number.parseFloat(document.getElementById("Can").value);
    console.log(cantidad);
}

function Convertir(){
    var dolar = 7.23;
    var resultado;
    resultado = cantidad / dolar;
    Docoment.getElementById("resultado").innerHTML += "$" + resultado;
}

function Eliminar(){
    var lista= Doocument.getElementById("resultado");
    lista.removeChild(lista.children[0]);
}