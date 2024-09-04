// JavaScript source code
var productos = [
    { nombre: "Mesa", precio: 105, cantidad:100},
    { nombre: "Sillas", precio: 75, cantidad:300 },
    { nombre: "Sofa", precio: 250, cantidad:175},
    { nombre: "Refrijeradora", precio: 350, cantidad:67},
    { nombre: "Cocina", precio: 450, cantidad: 80},
    { nombre: "Plancha", precio: 200, cantidad:45 },
    { nombre: "Paragua", precio: 17.50, cantidad:400 },
    { nombre: "Lavadora", precio: 300, cantidad:45 },
    { nombre: "Gabetero", precio: 85, cantidad:60},
    { nombre: "Saxofon", precio: 230, cantidad:600}
];

console.log(productos);

for (var i = 0; i < productos.length; i++) {
    var html = "<tr>";
    html += "        <td>" + productos[i].nombre + "</td>";
    html += "        <td>" + productos[i].precio + "</td>";
    html += "        <td>" + productos[i].cantidad + "</td>";
    html += "</tr>";

    document.getElementById("tbodyProductos").innerHTML += html;
}  
