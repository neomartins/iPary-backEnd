$(document).ready(function($){

     $('#tel').focusout(function(){
        var phone, element;
        element = $(this);
        element.unmask();
        /* removo tudo que não for numeros (D) */
        phone = element.val().replace(/D/g, "");
        if(phone.length > 10) {
            element.mask('(99) 99999-9999');
        } else {
            element.mask('(99) 9999-99999');
        }
    }).trigger('focusout');
    
    $('#cep').mask('00000-000');
    $('#cnpj').mask('00.000.000/0000-00');
    /*Validação do Cadastro*/
    jQuery.validator.addMethod("lettersonly", function(value, element) {
        return this.optional(element) || /^[a-z^\S\n]+$/i.test(value);
    }, "Only alphabetical characters"); 
    
    $("#register-form").validate({
        rules : {
            username: { 
                required: true,
            },
            
            password : {
                required: true,
                minlength : 5
            },
            
            password_confirm : {
                required: true,
                minlength : 5,
                equalTo : "#cad_password"
            },
            
            first_name: {
                required: true,
                number: false
            },
            
            last_name: { 
                required: true
            },
            
            email: {
                required: true,
                email: true
            },
            
            fantasy_name: { 
                required: true
            },
            
            tel: {
                required: true
            },
            
            cnpj: {
                required: true
            },
            
            cep: {
                required: true
            },
            
            city: {
                required: true
            },
            
            adress: {
                required: true
            }
        },
        
        messages: {
            username: { 
                required: "Digite um nome de usuario.",
            },
            
            password : {
                required: "Digite uma senha.",
                minlength : "A senha precisa ter no minimo 5 caracteres."
            },
            
            password_confirm : {
                required: "Confirme sua senha.",
                minlength : "A senha precisa ter no minimo 5 caracteres.",
                equalTo : "As senhas devem ser iguais."
            },
            
            first_name: {
                required: "Digite seu primeiro nome."
            },
            
            last_name: { 
                required: "Digite seu segundo nome."
            },
            
            email: {
                required: "Digite seu endereço de e-mail",
                email: "Ex. exemplo@exemplo.com"
            },
            
            fantasy_name: { 
                required: "Digite o nome de sua empresa"
            },
            
            tel: {
                required: "Digite um numero de telefone ou celular."
            },
            
            cnpj: {
                required: "Digite o CNPJ da sua empresa."
            },
            
            cep: {
                required: "Digite o CEP da sua cidade."
            },
            
            city: {
                required: "Digite o nome da sua cidade."
            },
                        
            adress: {
                required: "Digite o endereço de sua empresa."
            }
        }
    });
    
    /*Transiçoes entre login e cadastro.*/
    $('#register-submit').click(function(){
        console.log($('#register-form').valid());
    });
    
    $(function() {
        $('#login-form-link').click(function(e) {
            $("#login-form").delay(100).fadeIn(100);
            $("#register-form").fadeOut(100);
            $('#register-form-link').removeClass('active');
            $(this).addClass('active');
            e.preventDefault();
        });
        $('#register-form-link').click(function(e) {
            $("#register-form").delay(100).fadeIn(100);
            $("#login-form").fadeOut(100);
            $('#login-form-link').removeClass('active');
            $(this).addClass('active');
            e.preventDefault();
        });
    });
});
    