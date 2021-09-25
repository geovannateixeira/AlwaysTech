var usuarios = [
    {"login": "rodrigo", "senha": "547saq@@"},
    {"login": "guilherme", "senha": "547saq@@"},
    {"login": "geovanna", "senha": "547saq@@"},
    {"login": "diego", "senha": "547saq@@"}
];

var func = [
    {"login": "administrador", "senha": "547saq@@"},
    {"login": "func2", "senha": "547saq@@"},
    {"login": "func3", "senha": "547saq@@"},
    {"login": "func4", "senha": "547saq@@"}
];

function Login() {
    let usuario = document.getElementById("lg").value;
    let senha = document.getElementById("password").value;
    let check = false;

    for(let i = 0; i < func.length; i++) {
        if(usuario == func[i].login && senha == func[i].senha) {
            check = true;
            alert("Dados Corretos");
            window.location = "../html/funcionario.html";
            break;
        }
    }
    for(let i = 0; i < usuarios.length; i++) {
        if(usuario == usuarios[i].login && senha == usuarios[i].senha) {
            check = true;
            alert("Dados Corretos");
            window.location = "../html/perfiluser.html";
            break
        }
    }

    if(check == false) {
        alert("Dados Incorretos, por favor tente novamente.");
    }
}

function cadastro(){
    window.location = "../html/cadastro.html";
}