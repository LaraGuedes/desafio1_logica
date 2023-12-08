console.log("Ano novo está chegando!!");

let nome = "Mariah Carey";
let idade = 54;
let anoAtual = 2023;
let dataNascimento = (anoAtual - idade);

// console.log(nome);
// console.log(idade);
// console.log(anoAtual);
console.log(dataNascimento);

let quartaFeira = false;

console.log(quartaFeira);

let suaIdade = 18;
if (suaIdade >= 18){
    console.log(" Você é maior de idade, poderá curtir o show do Roberto Carlos com participação especial de Mariah Carey.");
} else{
    console.log("Sinto muito, mas assistirá da tv globo");
}

let mesDeAniversário = "JULHO";
if (mesDeAniversário == "JUNHO" || mesDeAniversário == "AGOSTO" || mesDeAniversário == "DEZEMBRO"){
    console.log(`Uma ou mais opções estão corretas, O mês escolhido foi o mês ${mesDeAniversário}`);
}else{
    console.log(`Algo de errado não está certo, o mês digitado foi o mês ${mesDeAniversário}`)
}
