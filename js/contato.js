'use strict'

export async function lerContatos() {
    const url = 'https://bakcend-fecaf-render.onrender.com/contatos/'

    const response = await fetch (url)
    const contatos = await response.json()

    console.log(contatos)
    return contatos
}

export async function criarContato (contato) {
    const url = 'https://bakcend-fecaf-render.onrender.com/contatos/'

    const options = {
        'method': 'POST',
        'headers': {
            'content-type':'application/json'
        },
        'body': JSON.stringify(contato)
    }

    const response = await fetch(url, options)

    console.log (response.ok)
    return response.ok
}

async function atualizarContato (id, contato) {
    const url = `https://bakcend-fecaf-render.onrender.com/contatos/${id}`

    const options = {
        'method': 'PUT',
        'headers': {
            'content-type':'application/json'
        },
        'body': JSON.stringify(contato)
    }

    const response = await fetch(url, options)

    console.log (response.ok)
    return response.ok
}

export async function deleteContato(id) {
    const url = `https://bakcend-fecaf-render.onrender.com/contatos/${id}`
    const options = {
        method: 'DELETE'
    }
    const response = await fetch (url, options)

    console.log(response.ok)
    return response.ok
    
}


const novoContato = {
        "nome": "Kauan Atualizado",
        "celular": "11 9 5106-2253",
        "foto": "semfoto.pmg",
        "email": "kauanantuneslima07@gmail.com",
        "endereco": "Rua das hortencias, 53",
        "cidade": "Itapevi"
}