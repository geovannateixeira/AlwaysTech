document.getElementById("btn_prosseguir").onclick = function() {

    alert("Compra confirmada!");

}

document.getElementById("sub1").onclick = function() {

    sub("quantidade");
    produtos_selecionados();
    valor_total();

}
document.getElementById("add1").onclick = function() {

    add("quantidade");
    produtos_selecionados();
    valor_total();

}
document.getElementById("sub2").onclick = function() {

    sub("quantidade2");
    produtos_selecionados();
    valor_total();

}
document.getElementById("add2").onclick = function() {

    add("quantidade2");
    produtos_selecionados();
    valor_total();

}

function sub(id) {
    let val = parseInt(document.getElementById(id).innerText);
    if(val == 1) {
        alert("Este valor é o mínino possivel");
    }
    else {
        document.getElementById(id).innerHTML = val - 1;
    }
}
function add(id) {
    let val = parseInt(document.getElementById(id).innerText);
    document.getElementById(id).innerHTML = val + 1;
}
function produtos_selecionados() {
    let val1 = parseInt(document.getElementById("quantidade").innerText);
    let val2 = parseInt(document.getElementById("quantidade2").innerText);
    let soma = val1 + val2;
    document.getElementById("quant_prod").innerHTML = soma + " produtos selecionados";
}
function valor_total() {

    let val1 = parseInt(document.getElementById("quantidade").innerText);
    let val2 = parseInt(document.getElementById("quantidade2").innerText);
    let val_prod1 = val1 * 2000;
    let val_prod2 = val2 * 250;

    let soma = val_prod1 + val_prod2;
    document.getElementById("total_value").innerHTML = "Total: R$ " + soma.toLocaleString('pt-br', {minimumFractionDigits: 2});

}
