
let saldo = 60000;
let saldoActual;
let extraccion;
let opcion;
let minimoExtraccion = 1000;
let transaccionOk = false;


do {
    alert(" Bienvenido \n 1.Extraccion de dinero \n 2.Consultar saldo \n 3.Cerrar Sesion")
    opcion = parseInt(prompt("Seleccione una opcion para continuar..."));


    switch (opcion) {
        case 1:
            extraccion = parseInt(prompt("Cuanto desea extraer?"));

            if (extraccion <= saldo && extraccion && extraccion >= minimoExtraccion) {
                saldo = saldo - extraccion;
                saldoActual = saldo;
                transaccionOk = true;
                alert("Transaccion exitosa")
            } else {
                alert("Operacion invalida");
            }

            break;

        case 2:

            if (transaccionOk == true) {
                alert("saldo disponible es de" + " " + saldoActual + "$")

            } else {
                alert("saldo disponible es de" + " " + saldo + "$")

            }

            break;

        case 3:

            alert("Hasta luego!!");

            break;

        default:
            alert("Por favor seleccione una opcion valida")
            break;
    }

} while (opcion != 3);