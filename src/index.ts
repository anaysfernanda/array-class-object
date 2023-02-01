//ex.1

let arrayNumeros: number[] = [
  8, 72, 1, 37, 21, 54, 7, 81, 23, 92, 12, 87, 3, 12, 6, 4,
];

let arrayImpares = arrayNumeros.filter((impar) => {
  return impar % 2 != 0;
});

console.log(arrayImpares);

//ex.2

let soma = arrayNumeros.reduce((current, item) => {
  return current + item;
}, 0);

console.log(`Soma dos valores do array: ${soma}`);

//ex.3

export class Pessoa {
  public nome: string;
  public idade: number;
  public salario: number;

  constructor(nome: string, idade: number, salario: number) {
    this.nome = nome;
    this.idade = idade;
    this.salario = salario;
  }
}

let arrayPessoas: Pessoa[] = [
  new Pessoa("Carlos", 30, 1000),
  new Pessoa("Fernanda", 21, 800),
  new Pessoa("Claudia", 18, 1020),
  new Pessoa("Eduardo", 33, 5000),
  new Pessoa("João", 23, 3200),
  new Pessoa("Maria", 40, 6000),
];

let menorVinteETres = arrayPessoas.filter((pessoa) => {
  return pessoa.idade < 23;
});

console.log(`Menos de 23 anos: `);
menorVinteETres.forEach((pessoa) => console.log(pessoa));

//ex.4

let menorTrinta = arrayPessoas.filter((pessoa) => {
  if (pessoa.idade < 30) {
    return true;
  } else {
    return false;
  }
});

let somaIdade = menorTrinta.reduce((current, pessoa) => {
  return current + pessoa.idade;
}, 0);

let mediaIdade = somaIdade / menorTrinta.length;

console.log(`Média da idade das pessoas menores de 30 anos: ${mediaIdade}`);

//ex. 5
let menorSalario = arrayPessoas.filter((pessoa) => {
  if (pessoa.salario < 1027) {
    return true;
  } else {
    return false;
  }
});

let novoArrayPessoas = menorSalario.map((pessoa) => {
  return {
    nome: pessoa.nome,
    idade: pessoa.idade,
  };
});

console.log(`A nova lista de pessoas é:`);
novoArrayPessoas.forEach((pessoa) => console.log(pessoa));

//ex.6
export enum Status {
  aprovado = "Aprovado",
  reprovado = "Reprovado",
}

export class Aluno {
  nome: string;
  idade: number;
  nota?: number;
  status?: Status;

  constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
  }

  atribuirNota(gabarito: string[]) {
    this.nota = 0;
    const alternativas = ["A", "B", "C"];
    const escolhidas = [];

    for (let item of gabarito) {
      let resultado = Math.floor(Math.random() * 10) % 3;
      escolhidas.push(alternativas[resultado]);
      if (item === alternativas[resultado]) {
        this.nota += 1;
      }
    }
    this.atribuirStatus();
  }

  atribuirStatus() {
    if (this.nota! >= 6) {
      this.status = Status.aprovado;
    } else {
      this.status = Status.reprovado;
    }
  }
}

let listaDeAlunos: Aluno[] = [
  new Aluno("Fernanda", 31),
  new Aluno("Maria", 18),
  new Aluno("Claudio", 44),
  new Aluno("João", 21),
  new Aluno("Paulo", 27),
  new Aluno("Joana", 23),
  new Aluno("Lucas", 38),
];

let gabarito: string[] = ["A", "B", "C", "A", "B", "A", "B", "B", "C"];

listaDeAlunos.map((aluno) => {
  aluno.atribuirNota(gabarito);
});

let aprovados = listaDeAlunos.filter((aluno) => {
  return aluno.status === Status.aprovado;
});

let reprovados = listaDeAlunos.filter((aluno) => {
  return aluno.status === Status.reprovado;
});

let somaDeNotas = listaDeAlunos.reduce((current, total) => {
  return current + total.nota!;
}, 0);

let mediaDasNotas = somaDeNotas / listaDeAlunos.length;

let melhorAluno = listaDeAlunos.reduce((current, valorAtual) => {
  if (current.nota! > valorAtual.nota!) {
    return current;
  } else {
    return valorAtual;
  }
});

let piorAluno = listaDeAlunos.reduce((current, valorAtual) => {
  if (current.nota! > valorAtual.nota!) {
    return valorAtual;
  } else {
    return current;
  }
});

console.log("=== Alunos aprovados ===");
console.log(aprovados);
console.log("=== Alunos reprovados ===");
console.log(reprovados);
console.log("=== Média da turma ===");
console.log(mediaDasNotas);
console.log("=== Melhor aluno ===");
console.log(melhorAluno);
console.log("=== Pior aluno ===");
console.log(piorAluno);
