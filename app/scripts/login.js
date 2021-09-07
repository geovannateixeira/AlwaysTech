var usuarios = [
    {"login": "rodrigo", "senha": "12345"},
    {"login": "guilherme", "senha": "12345"},
    {"login": "geovanna", "senha": "12345"},
    {"login": "diego", "senha": "12345"}
];

var func = [
    {"login": "adm", "senha": "12345"}
];

function Login() {
    var usuario = document.getElementsByName('login')[0].value.toLowerCase();
    var senha = document.getElementsByName('password')[0].value;

    for (var u in usuarios) {
        var us = usuarios[u];
        if (us.login === usuario && us.senha === senha) {
           alert("Dados Corretos")
            window.location = "../index.html";
            return true;
        }
    
    for (var f in func) {
        var fc = func[f];
         if(fc.login === usuario && fc.senha === senha){ 
            alert("Você Está Entrando Na Página de Usuário")
            window.open("../html/funcionario.html","Funcionário",true);
            return true;
        }
    }

    alert("Dados incorretos, tente novamente.");
    return false;
}
}