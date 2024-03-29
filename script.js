const inputElement = document.getElementById('textarea');

const mensagem = document.getElementById('mensagem');
const noMsg = document.getElementById('no-msg');
const msgDescriptografada = document.getElementById('msg-descriptografada');

const buttonCriptografar = document.getElementById('btn-criptografar');

function btnCriptografar() {
    if (inputElement.value == '') {

        alert('Por favor, digite seu texto.')

    } else {

        noMsg.classList.add('none');
        msgDescriptografada.classList.remove('none');

        const criptografarVogais = (mensagem) => {
            switch (mensagem) {
                case 'a':
                    return 'ai';
                case 'e':
                    return 'enter';
                case 'i':
                    return 'imes';
                case 'o':
                    return 'ober';
                case 'u':
                    return 'ufat';
                default:
                    return mensagem;
            }
        }

        let textoCriptografado = inputElement.value
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/[^a-zA-Z0-9]/g, ' ')
            .replace(/[aeiou]/g, criptografarVogais);

        mensagem.innerHTML = textoCriptografado;
        inputElement.value = ''
    }
}


function btnDscriptografar() {

    if (inputElement.value == '') {

        alert('Por favor, digite seu texto.')

    } else {

        let descriptografarVogais = (mensagem) => {
            switch (mensagem) {
                case 'ai':
                    return 'a';
                case 'enter':
                    return 'e';
                case 'imes':
                    return 'i';
                case 'ober':
                    return 'o';
                case 'ufat':
                    return 'u';
                default:
                    return mensagem;
            }
        }

        var textoDescriptografado = inputElement.value
            .replace(/ai/g, descriptografarVogais('ai'))
            .replace(/enter/g, descriptografarVogais('enter'))
            .replace(/imes/g, descriptografarVogais('imes'))
            .replace(/ober/g, descriptografarVogais('ober'))
            .replace(/ufat/g, descriptografarVogais('ufat'));

        mensagem.innerHTML = textoDescriptografado;
        inputElement.value = ''
    }

}

function copiar() {  
    navigator.clipboard.writeText(mensagem.textContent)
}
