let clientes = []

/**
 * READ
 * Exibe todos os lcientes cadastrados
 * 
 * @return void
 */
function exibirClientes() {
  console.log(clientes)
}

/**
 * CREATE
 * Adiciona um novo cliente
 * 
 * @param {string} name 
 * @param {string} surename 
 * @param {string} email 
 * @param {number} cpf 
 * @param {string} date 
 * @return void
 */
function adicionarCliente(name, surename, email, cpf, date) {

  const idCliente = cpf

  let cliente = { idCliente, name, surename, email, cpf, date }
  clientes.push(cliente)
}

function filtraClientePorAlgumParametro(clientes, chave, valor) {
  return clientes.filter((cliente) => {
    if(cliente[chave] === valor) {
      return cliente
    }
  })
}


/**
 * SERVIÇO - SERVICE
 * Verifica se existe cliente com email fornecido
 * 
 * @param {string} email 
 * @return boolean
 */
function verificaSeExisteClientePeloEmail(email) {

  //Filtra para ver se existe cliente com esse email 
  const clienteExiste = filtraClientePorAlgumParametro(clientes, 'email', email)

  //Verifica se o array de clientes tem cliente
  //E retorna verdadeiro
  if(clienteExiste.length > 0) {
    return true
  }

  //E retorna false se a condição acima não for satisfeita
  return false
}

/**
 * DELETE
 * Exclui o cliente pelo email fornecido
 * 
 * @param {string} email 
 * @return void
 */
function excluirClientePorEmail(email) {
  if(!verificaSeExisteClientePeloEmail(email)) {
    console.log(`Não existe`)
    return
  }

  clientes = clientes.filter((cliente) => {
    if(cliente.email != email) {
      return cliente
    }
  })
}

function atualizaCliente(idCliente, dadosDoCliente) {
  clientes = clientes.filter((cliente) => {
    if(cliente.idCliente === idCliente) {
      cliente = dadosDoCliente
      return cliente
    }

    return cliente
  })
}

/**
 * 
 * 
 * @param {number} cpf
 * @return void 
 */
function exibeUmUsuárioPorCpf(cpf) {
  const clienteExiste = filtraClientePorAlgumParametro(clientes, 'cpf', cpf)

  if(clienteExiste.length <= 0) {
    console.log('Cliente não exite')
    return
  }

  console.log(clienteExiste)
}


adicionarCliente('Maria', 'Silva', 'mariasilva@gmail.com', 22222222222, '11/11/2011')
adicionarCliente('Fa', 'Souza', 'joaosouza@gmail.com', 55555555555, '11/01/1987')
adicionarCliente('João', 'Souza', 'joaosouza@gmail.com', 55555555555, '11/01/1987')
adicionarCliente('Pedro', 'Lima', 'pedrolima@gmail.com', 99999999999, '30/12/1990')
adicionarCliente('Luiza', 'Silva', 'luizasilva@gmail.com', 77777777777, '15/01/1990')

// exibeUmUsuárioPorCpf(22222222222)

// console.log(parseInt(Math.random() * 9999999));

// console.log(verificaSeExisteClientePeloEmail('mariasilva@gmail.com'))

const novosDados = {name: 'Mariana', surename: 'Silva', email: 'mariasilva@gmail.com', cpf: 22222222222, date: '11/11/2011'}

atualizaCliente(22222222222, novosDados)

exibirClientes()
