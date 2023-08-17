const cep = document.querySelector("#cep")

const showData = (result) => {
    for(const campo in result) {
        if(document.querySelector("#"+campo)) {
            document.querySelector("#"+campo).value = result[campo]
        }
    }
}

cep.addEventListener("blur", (e) => {
    let search = cep.value.replace("-", "")
    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }

    fetch(`https://viacep.com.br/ws/${search}/json/`, options)
    .then(response => { response.json()
        .then( data => showData(data))
    })
    .catch(e => console.log('Deu Erro: '+ e, message))
})


function formatar(mascara, documento){
    var i = documento.value.length;
    var saida = mascara.substring(0,1);
    var texto = mascara.substring(i)
    
    if (texto.substring(0,1) != saida){
              documento.value += texto.substring(0,1);
    }
    
  }
