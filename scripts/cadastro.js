function validar(){
    var nome = document.getElementById("nome");
    var email = document.getElementById("email");
    var cpf = document.getElementById("cpf");
    var celular = document.getElementById("cel");
    var dt = document.getElementById("dataNasc")
    var endereco = document.getElementById("end");
    var cep = document.getElementById("cep");


    if(nome.value == ""){
        alert("Nome não informado");
        nome.focus();
    }

    if(email.value == ""){
        alert("Email não informado");
        email.focus();
    }

    if(cpf.value == ""){
        alert("CPF não informado");
        cpf.focus();
    }

    if(celular.value == ""){
        alert("Celular não informado");
        celular.focus();
    }

    if(dt.value == ""){
        alert("Data de Nascimento não informada");
        dt.focus();
    }

    if(endereco.value == ""){
        alert("Endereço não informado");
        endereco.focus();
    }

    if(cep.value == ""){
        alert("CEP não informado");
        cep.focus();
    }

    else{
        alert("Dados Cadastrados com Sucesso!!");
    }

   
}
