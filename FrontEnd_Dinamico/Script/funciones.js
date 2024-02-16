function calcularCuotaMensual(){
    const nombre = document.getElementById("name").value;
    const montoPrestamo = parseFloat(document.getElementById("monto").value);
    const tasaInteres = parseFloat(document.getElementById("interes").value);
    const meses = parseInt(document.getElementById("meses").value);
    const interesMensual = (tasaInteres)
   //return cuota = prestamo * ((interes * Math.pow(1+interes), meses * 1) / Math.pow(1+interes),meses - 1)
   const resultadoTexto = nombre + " debe pagar $" + cuotaMensual.toFixed(2) + " cada mes por el préstamo de $" + montoPrestamo.toFixed(2) + " a " + meses + " meses con el interés del " + tasaInteres.toFixed(2) + "%.";

   document.getElementById("resultado").value = resultadoTexto;
}