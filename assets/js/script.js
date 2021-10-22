/*
Case Sensitive

Acessar o DOM:
por tag: getElementByTagName()
por id: getElementById() +usado
por nome: getElementsByName()
por classe: getElementsByClassName()
por seletor: queryselector() ++usado
*/

let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOK= false
let emailOK= false
let assuntoOK= false
let mapa = document.querySelector('#mapa')

nome.style.width = '100%'
email.style.width = '100%'

function validaNome() {
    let txtNome = document.querySelector('#txtNome')
    if(nome.value.length < 3){
        txtNome.innerHTML = 'Nome inválido'
        txtNome.style.color = "red"
    }else{
        txtNome.innerHTML= "Nome válido"
        txtNome.style.color = "green"
        nomeOK= true
    }

}

function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')
    if(email.value.indexOf ('@') == -1 || email.value.indexOf('.') == -1){
        txtEmail.innerHTML = 'E-mail inválido'
        txtEmail.style.color = "red"
    }else{
        txtEmail.innerHTML= "E-mail válido"
        txtEmail.style.color = "green"
        emailOK= true
    }

}

function validaAssunto() {
    let txtAssunto = document.querySelector('#txtAssunto')
    if(assunto.value.length>= 100){
        txtAssunto.innerHTML = 'Texto é muito grande, máximo permitido de 100 caracteres'
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = 'block'
    }else {
        txtAssunto.style.display = 'none'
        assuntoOK= true
    }
}

function enviar(){
    if(nomeOK == true && emailOK == true && assuntoOK == true){
        alert("Formulário enviado com sucesso, aguarde que entraremos em contato !")
    }else{
        alert ("Preencha o formulário corretamente, antes de enviar !")
    }

}

function mapaZoom() {
    mapa.style.width = '800px'
    mapa.style.height = '600px'
}


function mapaNormal(){
    mapa.style.width = '400px'
    mapa.style.height = '250px'
}