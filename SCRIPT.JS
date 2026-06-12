document.addEventListener("DOMContentLoaded", function() {
    
    // Elementos de entrada (Controles)
    const selectIrrigacao = document.getElementById("select-irrigacao");
    const selectLogistica = document.getElementById("select-logistica");
    const btnAtualizar = document.getElementById("btn-atualizar");

    // Elementos de saída (Indicadores gráficos)
    const barraAgua = document.getElementById("barra-agua");
    const txtAgua = document.getElementById("txt-agua");

    const barraAr = document.getElementById("barra-ar");
    const txtAr = document.getElementById("txt-ar");

    const valorSustentabilidade = document.getElementById("valor-sustentabilidade");

    // Cores lógicas para aplicação direta via JS (mantendo o padrão visual)
    const corSucesso = "#2e7d32";
    const corAlerta = "#e65100";
    const corPerigo = "#c62828";

    function calcularImpacto() {
        let notaAgua = 0;
        let notaAr = 0;

        // Avaliação do parâmetro de Irrigação (Foco no Campo)
        if (selectIrrigacao.value === "gotejamento") {
            notaAgua = 90; // Economia gigante de água
            txtAgua.innerText = "Excelente (Preservado)";
            txtAgua.style.color = corSucesso;
            barraAgua.style.backgroundColor = corSucesso;
        } else {
            notaAgua = 35; // Desperdício severo por evaporação
            txtAgua.innerText = "Crítico (Esgotamento)";
            txtAgua.style.color = corPerigo;
            barraAgua.style.backgroundColor = corPerigo;
        }

        // Avaliação do parâmetro de Logística (Foco no trajeto Campo -> Cidade)
        if (selectLogistica.value === "verde") {
            notaAr = 85; 
            txtAr.innerText = "Ar Limpo (Baixo CO2)";
            txtAr.style.color = corSucesso;
            barraAr.style.backgroundColor = corSucesso;
        } else {
            notaAr = 40;
            txtAr.innerText = "Poluído (Emissões Altas)";
            txtAr.style.color = corAlerta;
            barraAr.style.backgroundColor = corAlerta;
        }

        // Atualização visual das barras de progresso
        barraAgua.style.width = notaAgua + "%";
        barraAr.style.width = notaAr + "%";

        // Média Geral de Equilíbrio
        const mediaGeral = Math.round((notaAgua + notaAr) / 2);
        valorSustentabilidade.innerText = mediaGeral + "%";
    }

    // Executa a primeira carga com as opções padrão
    calcularImpacto();

    // Adiciona o evento de clique no botão para recalcular
    btnAtualizar.addEventListener("click", calcularImpacto);
});
