const getIndex = () => {
    const main = document.getElementById('root')
    const dadosHtml = `
      <section class="index">
        <h1 class="index__item">Bem vindo ao modulo 3 newDev() Traco!</h1>
        <a class="index__link" href="../checkin.html"><img src="../assets/img/traco-principal.png" /></a>
      </section>
      `
    main.innerHTML = dadosHtml
}

const getSpinner = () => {
    const main = document.getElementById('root')
    const dadosHtml = `
    <section class="container">
        <div id="spinner"></div>
    </section>
      `
    main.innerHTML = dadosHtml

}

const getCadastroHtml = () => {
    const main = document.getElementById('root')
    const dadosHtml = `
            <form class="cadastro" id="formulario">
                <h1 class="cadastro__titulo">Novo Cliente</h1>
                <label>Nome do Cliente</label>
                <input id="name" type="text" placeholder="Digite o seu nome">
                <label>Modelo</label>
                <input id="modelo" type="text" placeholder="Digite o modelo do veículo">
                <label>Tipo</label>
                <select id="tipo" type="text" placeholder="Digite o tipo do veículo">
                    <option value="1">Carro</option>
                    <option value="0">Moto</option>
                </select>                
                <label>Placa</label>
                <input id="placa" type="text" placeholder="Digite a placa do veículo">
                <label>Observações</label>
                <input id="observacoes" type="text" placeholder="Digite a observação:">
                <div class="cadastro__item">
                    <button class="button" id="cancelar" type="button">Cancelar</button>
                    <button class="button" id="salvar" type="submit">Salvar</button>
                </div>
            </form> `

    main.innerHTML = dadosHtml
}

const getListaClientesHtml = () => {
    const main = document.getElementById('root')
    const dadosHtml = `
        <section class="lista-cliente">
            <h1 class="lista-cliente__title">Lista de Clientes</h1>
            <table class="lista-cliente__table" id="tbody">
            <tr>
                <th class="none">Cliente</th>
                <th>Modelo</th>
                <th>Placa</th>
                <th class="none">Tipo</th>
                <th class="none">Observações</th>
                <th><a>Novo</a></th>
            </tr>
            </table>
        </section> `

    main.innerHTML = dadosHtml
}

const getAtualizaHtml = () => {
    const main = document.getElementById('root')
    const dadosHtml = `
            <form class="cadastro" id="formulario">
                <h1 class="cadastro__titulo">Editar Cliente</h1>
                <label>Nome do Cliente</label>
                <input id="name" type="text" placeholder="Digite o seu nome">
                <label>Modelo</label>
                <input id="modelo" type="text" placeholder="Digite o modelo do veículo">
                <label>Tipo</label>
                <select id="tipo" type="text" placeholder="Digite o tipo do veículo">
                    <option value="1">Carro</option>
                    <option value="0">Moto</option>
                </select>                
                <label>Placa</label>
                <input id="placa" type="text" placeholder="Digite a placa do veículo">
                <label>Observações</label>
                <input id="observacoes" type="text" placeholder="Digite a observação:">
                <div class="cadastro__item">
                    <button class="button" id="cancelar" type="button">Cancelar</button>
                    <button class="button" id="salvar" type="submit">Atualizar</button>
                </div>
            </form> `

    main.innerHTML = dadosHtml
}

const getCheckinHtml = () => {
    const main = document.getElementById('root')
    const dadosHtml = `
        <section class="checkin">
            <h2 class="checkin__title">Lista de Clientes no Estacionamento</h2>
            <table id="tbody" class="checkin__table">
            <tr>
                <th>Modelo</th>
                <th>Placa</th>
                <th>Opção</th>
            </tr>
            </table>
            <div class="checkin__item">
            <label>Placa</label>
            <select class="checkin__input" id="select"></select>
            <a type="button" id="adicionar-novo" class="checkin__item__link">Adicionar Novo</a>
            <div class="checkin__button">
                <button class="button" id="checkin">Checkin</button>
            </div>
            </div>
        </section>
  `

    main.innerHTML = dadosHtml
}

const getChekoutHtml = () => {
    const main = document.getElementById('root')
    const dadosHtml = `
          <section class="checkout">
            <h2 class="checkout__title">Dados do cliente</h2>
            <table class="checkout__table">
                <tr>
                    <th>Cliente</th>
                    <th>Modelo</th>
                    <th>Placa</th>
                </tr>
                <tr id="tbody"></tr>
            </table>
            <div class="checkout__item">
            <label>Total de Horas</label>
            <input
                id="totalHora"
                class="input"
                type="text"
                placeholder="Total de Horas"
                disabled
            />
            </div>
            <div class="checkout__item">
            <label>Valor a pagar</label>
            <input
                id="valorPagar"
                class="input"
                type="text"
                placeholder="Valor a pagar"
                disabled
            />
            </div>
            <div class="checkout__button">
                <button class="button" id="finalizar">Finalizar</button>
            </div>
          </section>
      `
    main.innerHTML = dadosHtml
}

const getFaturamentoHtml = () => {
    const main = document.getElementById('root')
    const dadosHtml = `
          <section class="faturamento">
            <h1 class="faturamento__title">Lista de Faturamento</h1>
            <table class="faturamento__table">
                <thead>
                <tr>
                    <th>Qtd Veiculos</th>
                    <th>Total</th>
                    <th>Dia</th>
                </tr>
                </thead>
                <tbody id="tbody"></tbody>
            </table>
            <div>
                <div class="faturamento__grafico" id="piechart_3d"></div>
            </div>
          </section>
      `
    main.innerHTML = dadosHtml
}
export const view = {
    getListaClientesHtml,
    getCadastroHtml,
    getAtualizaHtml,
    getCheckinHtml,
    getChekoutHtml,
    getFaturamentoHtml,
    getSpinner,
    getIndex
}