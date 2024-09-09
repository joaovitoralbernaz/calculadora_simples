function calcula() {
    const num1 = parseFloat(document.getElementById('zeroum').value);
    const num2 = parseFloat(document.getElementById('zerodois').value);
    let resultado = 0;

    let oper = document.querySelector('input[name="operacao"]:checked').value;
    
    if (oper == 'soma') {
        resultado = num1 + num2;
    }
    if (oper == 'subtracao') {
        resultado = num1 - num2;
    }
    if (oper == 'multiplicacao') {
        resultado = num1 * num2;
    }
    if (oper == 'divisao'){
        if(num2 == 0){
            alert?("naõ é permitido a divisão por 0");
            re
        }else if{
            resultado = num1 / num2;
        }else{

        }



    document.getElementById('resultado').innerText = resultado;

}