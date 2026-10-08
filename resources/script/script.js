// // if e else, else if, switch
// // looping
// // array (funções nativas)
// // objeto
// // funções
// // var,let e const
// // dicas: +=
// // concatenação
// // defer

// // condicionais
//let nome = "João"
//let idade = 16
//let maiorIdade = false 
//let saldo =- 10000


//if(idade >= 18){
  //  console.log("Sou maior de idade")
//}
//else{
  //  console.log("Sou menor de idade")
//}

// // condicional composta

//if(saldo < 1000){
   // confirm.log("fique em casa")
//}//
//else if(saldo >= 1000 && saldo < 5000){//
   // console.log("Sair pra festa")
//}
//else{
   // console.log("guardar dinheiro")
//}

 let idade = Number(prompt("Qual a sua idade?"))

 if(idade <= 0 ){
    console.log("numero invalido")
 }

else if(idade > 0 && idade < 12){
    console.log("você é uma criança")
 }

 else if(idade >= 12 && idade < 19){
    console.log("você é um adolescente")
 }

 else if(idade >= 19 && idade < 60){
    console.log("você é um adulto")
 }

 else if(idade >= 60){
    console.log("você é um idoso")
 }




 let altura = Number(prompt("Qual a sua altura?"))
 let peso = Number(prompt("Qual seu peso?"))

 let resultado = peso /  (altura * altura)
 resultado = resultado.toFixed(2);

 if(resultado < 18.5){
    console.log("peso normal")
 }
 else if(resultado > 18.5 && resultado < 29.9){
    console.log("excesso de peso")
}
 else if(resultado > 29.9 && resultado < 34.9){
    console.log("obesidade classe I ")
 }
else if(resultado > 35 && resultado < 39.9){
    console.log("obesidade classe II ")
 }
 else if(resultado > 40){
    console.log("obesidade classe III ")
 }


let opcao =  Number(prompt("Digite um número que :"))
switch (opcao) {

case 2:
    console.log("segunda")
    break;
case 3:
    console.log("terça")
    break;
case 4:
    console.log("quarta")
    break;
case 5:
    console.log("quita")
    break;
case 6:
    console.log("sexta")
    break;
case 7:
    console.log("sabado")
    break;
case 1:
    console.log("domingo")
    break;
default:
    console.log("opção inválida")
    break;
}



let idade2 = Number(prompt("Qual a sua idade?"))

 if(idade <= 0 ){
    console.log("numero invalido")
 }

else if(idade > 0 && idade < 12){
    console.log("você é uma criança")
 }

 else if(idade >= 12 && idade < 19){
    console.log("você é um adolescente")
 }

 else if(idade >= 19 && idade < 60){
    console.log("você é um adulto")
 }

 else if(idade >= 60){
    console.log("você é um idoso")
 }




 let altura2 = Number(prompt("Qual a sua altura?"))
 let peso2 = Number(prompt("Qual seu peso?"))

 let resultado2 = peso2 /  (altura2 * altura2)
 resultado2 = resultado2.toFixed(2);

 switch (true)  {
 

    case (resultado2 < 18.5) : {
        console.log("peso normal")
    }
    break
    case (resultado2 > 18.5 && resultado2 < 29.9) : {
        console.log("excesso de peso")
    }
    break
    case (resultado2 > 29.9 && resultado2 < 34.9) : {
        console.log("obesidade classe I ")
    }
    break
    case (resultado2 > 35 && resultado2 < 39.9) : {
        console.log("obesidade classe II ")
    }
    break
    case (resultado2 > 40) : {
        console.log("obesidade classe III ")
    }
    break
    default:
        console.log("número invalido")
        break

}



                                                                                                                                                                                                                                                       