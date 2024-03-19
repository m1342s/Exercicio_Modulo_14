$(document).ready(function() {
    $("#telefone").mask("(00)00000-0000")
    $("form").validate({
        rules:{
            Nome:{
                required:true
            },
            Email:{
                required:true,
                email:true
            },
            Mensagem:{
                required:true
            }
        }
    })
})