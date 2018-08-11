function consomeAPI(){

    let request = new XMLHttpRequest();
    request.open('GET', 'https://api.coinmarketcap.com/v1/ticker/?convert=BRL&limit=10', false);
    request.send();

    let moedas = JSON.parse(request.response);
    for(let i=0; i < moedas.length; i++){
         
         // TABELA
         let tr= document.createElement('tr');
         
         let rank= document.createElement('td');
         rank.innerText= moedas[i].rank;
         tr.appendChild(rank);
        
         let nome= document.createElement('td');
         nome.innerText= moedas[i].name;
         tr.appendChild(nome);
        
         let simbolo= document.createElement('td');
         simbolo.innerText= moedas[i].symbol;
         tr.appendChild(simbolo);
        
         let real= document.createElement('td');
         real.innerText= moedas[i].price_brl;
         tr.appendChild(real);
        
         let usd= document.createElement('td');
         usd.innerText= moedas[i].price_usd;
         tr.appendChild(usd);
        
         let tbody = document.getElementById('adiciona-linha');
         tbody.appendChild(tr);
         
         // SELECT
         let option= document.createElement('option');
         option.innerText = moedas[i].name;
         option.value = moedas[i].price_brl;
         
         let select = document.getElementById('conversor');
         select.appendChild(option);
         
    }
}

consomeAPI();