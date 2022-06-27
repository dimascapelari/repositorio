const url = "http://localhost:8000/api"

export const postVeiculo = (objetoCliente) => {
    console.log("objetoCliente: ", JSON.stringify(objetoCliente))
    return fetch(url + "/vehicles", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(objetoCliente)
    }).then((response) => {
        if (response.status != 200) {
            console.log(`Erro no servidor: ${response.status}`)
        } else {
            alert(`Sucesso ao salvar: ${response.status}`)
        }
    })
}