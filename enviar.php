<?php  

// Llamando a los campos
$nombres = $_POST['nombres'];
$apellidos = $_POST['apellidos'];
$celular = $_POST['celular'];
$correo = $_POST['correo'];
$ciudad = $_POST['ciudad'];
$edad = $_POST['edad'];

// Datos para el correo
$destinatario = "aaromagurto@gmail.com";
$asunto = "Contacto desde nuestra web";

$carta = "De: $nombres \n";
$carta .= "Apellidos: $apellidos \n";
$carta .= "Celular: $celular \n";
$carta .= "Correo: $correo\n";
$carta .= "Ciudad: $ciudad\n";
$carta .= "Edad: $edad";

// Enviando Mensaje
mail($destinatario, $asunto, $carta);
header('Location:mensaje-de-envio.html');

?>