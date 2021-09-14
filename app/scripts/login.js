var usuarios = [
    {"login": "rodrigo", "senha": "547saq@@"},
    {"login": "guilherme", "senha": "547saq@@"},
    {"login": "geovanna", "senha": "547saq@@"},
    {"login": "diego", "senha": "547saq@@"}
];

var func = [
    {"login": "administrador", "senha": "547saq@@"}
];

function Login() {
    var usuario = document.getElementsByName('login')[0].value.toLowerCase();
    var senha = document.getElementsByName('password')[0].value;

    for (var u in usuarios) {
        var us = usuarios[u];
        if (us.login === usuario && us.senha === senha) {
           alert("Dados Corretos")
            window.location = "../html/perfiluser.html";
            return true;
        }
    
    for (var f in func) {
        var fc = func[f];
         if(fc.login === usuario && fc.senha === senha){ 
            alert("Você Está Entrando Na Página de Funcionário")
            window.location = "../html/funcionario.html";
            return true;
        }
    }

    alert("Dados incorretos, tente novamente.");
    return false;
}
}

function cadastro(){
    window.location = "../html/cadastro.html";
}