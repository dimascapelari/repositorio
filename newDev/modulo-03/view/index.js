
export const getCadastro = () => {
    const main = document.getElementById('root')
    const dadosHtml = `
        <form id="formulario">
        <h1>Novo Cliente</h1>
        <label>Nome do Cliente</label>
        <input id="name" type="text" placeholder="Digite o seu nome">
        <br><br>
        <label>Modelo</label>
        <input id="modelo" type="text" placeholder="Digite o modelo do veiculo">
        <br><br>
        <label>Tipo</label>
        <select id="tipo" type="text" placeholder="Digite o tipo de veiculo">
            <option value="1">Carro</option>
            <option value="0">Moto</option>
        </select>
        <br><br>
        <label>Placa</label>
        <input id="placa" type="text" placeholder="Digite a placa do veiculo">
        <br><br>
        <label>Observações</label>
        <input id="observacoes" type="text" placeholder="Digite a observação">
        <br><br>
        <div>
            <button id="cancelar" type="button">Cancelar</button>
            <button id="salvar" type="submit">Salvar</button>
        </div>
        </form>`

    main.innerHTML = dadosHtml

}