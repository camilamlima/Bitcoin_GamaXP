

function converteValor (){
    let select = document.getElementById('conversor');
    let input_value = document.getElementById('value');
    
    let valor = input_value.value / select.value;
    
    let result = document.getElementById('result');
    result.innerText = "R$ "+ valor.toPrecision(2);
}


