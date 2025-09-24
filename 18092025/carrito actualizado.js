var productos = [
    {nombre: 'camisa', precio: 300},
    {nombre: 'pantalon', precio: 500},
    {nombre: 'zapatos', precio: 400},
    {nombre: 'sombrero', precio: 200}
];

var carrito = [];

// Función para mostrar el menú principal
function mostrarMenu() {
    var menu = "Seleccione una opción:\n";
    menu += "1. Comprar productos\n";
    menu += "2. Ver/modificar carrito\n";
    menu += "3. Menú de administrador\n";
    menu += "4. Salir\n";
    return menu;
}

// Función para mostrar el menú de productos
function mostrarProductos() {
    var menu = "Seleccione un producto para agregar al carrito:\n";
    for (var i = 0; i < productos.length; i++) {
        menu += (i + 1) + ". " + productos[i].nombre + " - $" + productos[i].precio + "\n";
    }
    menu += (productos.length + 1) + ". Ver Carrito y Total\n";
    menu += (productos.length + 2) + ". Volver al menú principal\n";
    return menu;
}

// Función para agregar un producto al carrito
function agregarAlCarrito(index) {
    var productoSeleccionado = productos[index];
    carrito.push(productoSeleccionado);
    console.log('Producto "' + productoSeleccionado.nombre + '" agregado al carrito.');
}

// Función para mostrar el carrito y el total
function mostrarCarritoYTotal() {
    if (carrito.length === 0) {
        console.log("El carrito está vacío.");
    } else {
        var mensajeCarrito = "Carrito de compras:\n";
        var total = 0;
        for (var i = 0; i < carrito.length; i++) {
            mensajeCarrito += (i + 1) + ". " + carrito[i].nombre + " - $" + carrito[i].precio + "\n";
            total += carrito[i].precio;
        }
        mensajeCarrito += "\nTotal: $" + total;
        console.log(mensajeCarrito);
    }
}

// Función para modificar el carrito (eliminar o cambiar cantidad)
function modificarCarrito() {
    if (carrito.length === 0) {
        console.log("El carrito está vacío.");
        return;
    }

    mostrarCarritoYTotal();
    var opcion = prompt("Seleccione una opción:\n1. Eliminar producto del carrito\n2. Volver al menú principal");

    if (opcion === "1") {
        var productoEliminar = prompt("Ingrese el número del producto que desea eliminar:");
        productoEliminar = Number(productoEliminar);
        
        if (isNaN(productoEliminar) || productoEliminar < 1 || productoEliminar > carrito.length) {
            console.log("Opción no válida.");
        } else {
            var productoEliminado = carrito.splice(productoEliminar - 1, 1);
            console.log('Producto "' + productoEliminado[0].nombre + '" eliminado del carrito.');
        }
    }
}

// Función para el menú de administrador
function menuAdministrador() {
    var opcion;
    do {
        opcion = prompt("Menú de administrador:\n1. Agregar producto al catálogo\n2. Ver catálogo actual\n3. Volver al menú principal");
        
        switch(opcion) {
            case "1":
                var nombre = prompt("Ingrese el nombre del nuevo producto:");
                var precio = prompt("Ingrese el precio del nuevo producto:");
                precio = Number(precio);
                
                if (nombre && !isNaN(precio) && precio > 0) {
                    productos.push({nombre: nombre, precio: precio});
                    console.log('Producto "' + nombre + '" agregado al catálogo con precio $' + precio);
                } else {
                    console.log("Datos inválidos. No se agregó el producto.");
                }
                break;
                
            case "2":
                console.log("Catálogo actual:");
                for (var i = 0; i < productos.length; i++) {
                    console.log((i + 1) + ". " + productos[i].nombre + " - $" + productos[i].precio);
                }
                break;
                
            case "3":
                console.log("Volviendo al menú principal...");
                break;
                
            default:
                console.log("Opción no válida.");
        }
    } while (opcion !== "3");
}

// Bucle principal de la tienda
var opcion;
do {
    opcion = prompt(mostrarMenu());

    switch(opcion) {
        case "1": // Comprar productos
            var opcionProducto;
            do {
                opcionProducto = prompt(mostrarProductos());
                opcionProducto = Number(opcionProducto);

                if (isNaN(opcionProducto) || opcionProducto < 1 || opcionProducto > productos.length + 2) {
                    console.log("Opción no válida, por favor intenta de nuevo.");
                } else if (opcionProducto >= 1 && opcionProducto <= productos.length) {
                    agregarAlCarrito(opcionProducto - 1);
                } else if (opcionProducto === productos.length + 1) {
                    mostrarCarritoYTotal();
                }
            } while (opcionProducto !== productos.length + 2);
            break;
            
        case "2": // Ver/modificar carrito
            modificarCarrito();
            break;
            
        case "3": // Menú de administrador
            menuAdministrador();
            break;
            
        case "4": // Salir
            console.log("Gracias por visitar la tienda.");
            break;
            
        default:
            console.log("Opción no válida, por favor intenta de nuevo.");
    }
} while (opcion !== "4");