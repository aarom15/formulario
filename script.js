$(document).ready(function(){

    $('#btnSend').click(function(){

        var errores = '';

        // Validando Nombres ==================
        if( $('#nombres').val() == '' ){
            errores += '<p>Ingrese nombres</p>';
            $('#nombres').css("border-bottom-color", "#F14B4B")
        } else{
            $('#nombres').css("border-bottom-color", "#d1d1d1")
        }
		
		//Validando Apellidos ==================
		if( $('#apellidos').val() == '' ){
            errores += '<p>Ingrese apellidos</p>';
            $('#apellidos').css("border-bottom-color", "#F14B4B")
        } else{
            $('#apellidos').css("border-bottom-color", "#d1d1d1")
        }

        // Validando Correo ===============
        if( $('#correo').val() == '' ){
            errores += '<p>Ingrese un correo</p>';
            $('#correo').css("border-bottom-color", "#F14B4B")
        } else{
            $('#correo').css("border-bottom-color", "#d1d1d1")
        }

        // Validando Ciudad ====================
        if( $('#ciudad').val() == '' ){
            errores += '<p>Ingrese una ciudad</p>';
            $('#ciudad').css("border-bottom-color", "#F14B4B")
        } else{
            $('#ciudad').css("border-bottom-color", "#d1d1d1")
        }
		
		//Validando edad
		if( $('#edad').val() == '' ){
            errores += '<p>Digite una edad</p>';
            $('#edad').css("border-bottom-color", "#F14B4B")
        } else{
            $('#edad').css("border-bottom-color", "#d1d1d1")
        }

        // ENVIANDO MENSAJE ===================
        if( errores == '' == false){
            var mensajeModal = '<div class="modal_wrap">'+
                                    '<div class="mensaje_modal">'+
                                           '<h3>¡CAMPOS VACÍOS!</h3>'+
										   errores+ 
										   '<span id="btnClose">Cerrar</span'+                                           
                                   '</div>'+
                                '</div>'

            $('body').append(mensajeModal);
        }

        // CERRANDO MODAL ===============
        $('#btnClose').click(function(){
            $('.modal_wrap').remove();
        });
    });

});
