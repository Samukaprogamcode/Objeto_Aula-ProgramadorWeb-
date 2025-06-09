
//criação de objeto//
const informacaoDeMim = {
    idade: 18,
    nome: "Samuel",
    profissao: "Estou estudando programação Front-End e essa seria meu projeto real sobre OBJETO em JS!"
};

//criando a função de caixa de perguntas//
function PerguntasSobreMinhaPessoa() {
    const pergunta = prompt("Aqui você vai saber algumas informações sobre minha pessoa: (Idade , Nome ou Profissão)");

    if (!pergunta) {
        alert("você não digitou nada");
        return;
    }

    if (pergunta === "nome") {
        alert(`Meu nome é ${informacaoDeMim.nome}`);
    }

    if (pergunta === "idade") {
        alert(`Hoje eu tenho ${informacaoDeMim.idade}`);
    }
    if (pergunta === "profissao") {
        alert(informacaoDeMim.profissao);
    }



}

//comando de integração do componente html recebendo o sistema de js//
document.getElementById("mostrarObjeto").addEventListener("click", PerguntasSobreMinhaPessoa);
