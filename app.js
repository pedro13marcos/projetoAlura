// Seleciona a seção onde os resultados serão exibidos
let section = document.getElementById("resultados-pesquisa");

function pesquisar() {
    

    let campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();


    // Inicializa uma string vazia para armazenar o HTML dos resultados
    let resultado = "";

    if (campoPesquisa){
       // Itera sobre cada objeto de dado no array 'dados'
        for (let dado of dados) {

           

            if (dado.titulo.toLocaleLowerCase().includes(campoPesquisa)||dado.descricao.toLocaleLowerCase().includes(campoPesquisa)||dado.tag.toLocaleLowerCase().includes(campoPesquisa)){

        // Constrói o HTML para cada item do resultado
                resultado += `
                    <div class="item-resultado">
                    <h2>
                        <a href="${dado.redeSocial}" target="_blank">${dado.titulo}</a>
                    </h2>
                    <p class="descricao-meta">${dado.descricao}</p>
                    <a href="${dado.link}" target="_blank">Mais informações</a>
                    </div>
                `;
            }
        } 
    }

    if(!resultado){
        resultado = "<p>Nenhum resultado encontrado</p>";
    }
  
        // Atribui o HTML gerado à seção de resultados
        section.innerHTML = resultado;
    
}

function limpar(){
    section.innerHTML = "";
}
