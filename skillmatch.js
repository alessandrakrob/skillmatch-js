// OBJETO CANDIDATO

const candidato = {
    nome:"Alessandra",
    area:"Front-End",
    habilidades: ["JavaScript","GitHub","HTML","CSS"],
    experienciaMeses: 3
};

// ARRAY DE VAGAS

const vagas = [
    {
        id:1,
        empresa:"Play Star",
        cargo:"Desenvolvedor Front-End Júnior",
        requisitos:["JavaScript","GitHub","HTML","CSS","Metodologias ágeis"],
        salario:2500,
        modalidade:"Remoto"
    },
    {
        id:2,
        empresa: "Far Way",
        cargo:"Estágio Front-End",
        requisitos:["JavaScript","HTML","CSS"],
        salario:1500,
        madalidade:"Híbrido"
    },
    {
        id:3,
        empresa: "Espotifai",
        cargo:"Programador JavaScript Júnior",
        requisitos:["Lógica de Programação","JavaScript","HTML","CSS","GitHub","Metodologias ágeis", "POO"],
        salario:3000,
        madalidade:"Presencial"
    }
];

// FUNÇÃO DE COMPATIBILIDADE

function calcularCompatibilidade(candidato, vaga) {
    let totalRequisitos = vaga.requisitos.length;
    let requisitosAtendidos = 0;
    
    vaga.requisitos.forEach(requisito => {
        if(candidato.habilidades.includes(requisito)) {
            requisitosAtendidos++;
        }
    });
    
    let compatibilidade = (requisitosAtendidos / totalRequisitos) * 100;

    return compatibilidade;
}

// CLASSIFICAÇÃO DE COMPATIBILIDADE

function classificarCompatibilidade(compatibilidade){
    if (compatibilidade >= 80) {
        return "Alta ccmopatibilidade";
    } else if (compatibilidade >= 50) {
        return "média compatibilidade";
    } else if (compatibilidade >= 0){
        return "Baixa compatibilidade";
    } else {
        return "Porcentagem inválida";
    } 
}

// LISTAR HABILIDADES FALTANTES

function habilidadesFaltantes(candidato, vaga) {
    let faltantes = vaga.requisitos.filter(requisito => !candidato.habilidades.includes(requisito));

    return faltantes;
}

// ENCONTRAR A VAGA COM MAIOR COMPATIBILIDADE

function maiorCompatibilidade(candidato, vaga){
    
    let melhorVaga = vagas[0];
    let maiorPorcentagem = calcularCompatibilidade(candidato, vagas[0]);

    vagas.forEach(vaga => {
        let compatibilidade = calcularCompatibilidade(candidato,vaga);

        if(compatibilidade > maiorPorcentagem){
            maiorPorcentagem = compatibilidade;
            melhorVaga = vaga;
        }
    });

    console.log("Vaga mais compatível:");
    console.log(melhorVaga.empresa);
    console.log(maiorPorcentagem + "%");    
}

// GERAR UMA RECOMENDAÇÃO DE ESTUDO

function recomendacao(candidato, vagas){

    let faltantes = [];

    vagas.forEach(vaga => {

        let habilidades =
            habilidadesFaltantes(candidato, vaga);

        faltantes.push(...habilidades);
    });

    let semRepeticao = [...new Set(faltantes)];

    let texto = "";

    for(let i = 0; i < semRepeticao.length; i++){

        texto += semRepeticao[i];

        if(i < semRepeticao.length - 1){
            texto += ", ";
        }
    }

    console.log("Recomendação de estudo:");

    console.log(
        "Priorize estudar " +
        texto +
        ", pois esses conteúdos aparecem nas vagas analisadas."
    );
}

// CLASSE VAGA

class Vaga {
  constructor(empresa, cargo, requisitos, salario, modalidade) {
    this.empresa = empresa;
    this.cargo = cargo;
    this.requisitos = requisitos;
    this.salario = salario;
    this.modalidade = modalidade;
    }

    mostrarVaga(){
        console.log("Empresa:", this.empresa);
        console.log("Cargo:", this.cargo);
        console.log("Requisitos:", this.requisitos.join(", "));
        console.log("Salário:", this.salario);
        console.log("Modalidade:", this.modalidade);
    }
}

//HERANÇA

class VagaFrontEnd extends Vaga {
  constructor(empresa, cargo, requisitos, salario, modalidade, nivel) {
    super(empresa, cargo, requisitos, salario, modalidade);
    this.nivel = nivel;
  }

  mostrarVagaFront(){
     super.mostrarVaga();
     console.log("Nível:", this.nivel);
   }
}

//CALLBACK

function finalizarAnalise(nomeCandidato, callback) {
  console.log("Análise finalizada.");
  callback(nomeCandidato);
}

function exibirMensagemFinal(nome) {
  console.log(nome + ", revise suas habilidades faltantes e atualize seu plano de estudos.");
}

// CLOSURE

function criarContadorDeAnalises() {
  let total = 0;

  return function () {
    total++;
    return total;
  };
}



