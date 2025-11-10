'use strict'

import { lerContatos } from "./contato.js"
import { criarContato } from "./contato.js"


const container             = document.getElementById('container')
const novo_contato_button   = document.getElementById('novo-contato')
const cancelar_button       = document.getElementById('cancelar')
const salvar_button         = document.getElementById('salvar')
const input_nome            = document.getElementById('nome')
const input_email           = document.getElementById('email')
const input_celular         = document.getElementById('celular')
const input_endereco        = document.getElementById('endereco')
const input_cidade          = document.getElementById('cidade')
const foto_input            = document.getElementById('foto')
const foto_img              = document.getElementById('preview-image')


async function criarContatoList() {

    const contatos = await lerContatos()

    let i = 0
    while(i < contatos.length){
        
        let card_contato        = document.createElement('div')
        let imagem_contato      = document.createElement('img')
        let nome_contato        = document.createElement('h2')
        let telefone_contato    = document.createElement('p')


        card_contato.classList.add('card-contato')
        imagem_contato.src              = contatos[i].foto
        nome_contato.textContent        = contatos[i].nome
        telefone_contato.textContent    = contatos[i].celular

        container.appendChild(card_contato)
        card_contato.appendChild(imagem_contato)
        card_contato.appendChild(nome_contato)
        card_contato.appendChild(telefone_contato)

        i++
    }
    
}



novo_contato_button.addEventListener('click', function () {

    const form_show = container.parentElement

    form_show.classList.remove('card-show')

    form_show.classList.add('form-show')

})

cancelar_button.addEventListener('click', function () {

    const form_show = container.parentElement

    form_show.classList.remove('form-show')

    form_show.classList.add('card-show')

})

async function salvarContato() {
    
    let nome = input_nome.value
    let email = input_email.value
    let celular = input_celular.value
    let endereco = input_endereco.value
    let cidade = input_cidade.value
    let foto = foto_img.src

    const contato = {
        "nome": `${nome}`,
        "celular": `${celular}`,
        "foto": `${foto}`,
        "email": `${email}`,
        "endereco": `${endereco}`,
        "cidade": `${cidade}`
    }

    criarContato(contato)

}


foto_input.addEventListener('change', function () {
    foto_img.src = URL.createObjectURL(foto_input.files[0])
})

salvar_button.addEventListener('click', function () {
    salvarContato()
    alert('Contato criado com sucesso')
})




criarContatoList()