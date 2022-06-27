import { CadastroComponent } from "./controller/cadastro.js";

const link = document.getElementById('link')

link.addEventListener('click', (event) => {
    const option = event.path[0].innerText

    switch (option) {
        case "Cadastro":
            CadastroComponent();
            break
    }
})