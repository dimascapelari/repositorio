import { postVeiculo } from "../service/index.js"
import { view } from "../view/index.js"

export const CadastroComponent = () => {
    view.getCadastroHtml();

    const formulario = document.getElementById('formulario')
    formulario.addEventListener('submit', function (event) {
        event.preventDefault()

        const cadastroCliente = {
            owner: document.getElementById('name').value,
            model: document.getElementById('modelo').value,
            type: document.getElementById('tipo').value,
            label: document.getElementById('placa').value,
            observation: document.getElementById('observacoes').value
        }

        postVeiculo(cadastroCliente)
        // console.log(cadastroCliente)
    })
}