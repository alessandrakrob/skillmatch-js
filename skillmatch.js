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
    let faltantes = [];

    console.log("Para a vaga da " + vaga.empresa + " faltam:");

    vaga.requisitos.forEach(requisito => {
        if (!candidato.habilidades.includes(requisito)) {
            faltantes.push(requisito);
            console.log(requisito);
        }
    });

    return faltantes;
}



