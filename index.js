const arrowLeft = document.getElementById('arrow-left');
const arrowRight = document.getElementById('arrow-right');

const items = document.querySelectorAll('.item');
console.log("ITEMS: ", items);

arrowRight.onclick = () => {
    const items = document.querySelectorAll('.item');

    console.log("ITEMS: ", items);

    for (let i = 0; i < items.length-1; i++){

        const itemClassName = items[i].className;

        if(itemClassName.includes('active')){

            items[i].className = 'item';
            items[0].style.marginLeft = `-${(i+1) * 500}px`;
            items[i+1].className = 'item active';

            break;
        }
    }
}


arrowLeft.onclick = () => {
    const items = document.querySelectorAll('.item');

    console.log("ITEMS: ", items);

    for (let i = 1; i < items.length; i++){

        const itemClassName = items[i].className;

        if(itemClassName.includes('active')){

            items[i].className = 'item';
            items[0].style.marginLeft = `-${(i-1) * 500}px`;
            items[i-1].className = 'item active';

            break;
        }
    }
}

async function getCountryInfo(countryName){
    try {
        const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
        console.log(response);
        const data = await response.json();

        if(response.ok){
            return data;
        } else {
            throw new Error(data.message || "Erro ao buscar pais");
        }
    
    } catch (error) {
        console.log("ERRO: ", error);

        return null;
    }
}

getCountryInfo('Brazil').then( 
    (country) => {
        if(country){
            console.log("DADOS DO PAIS: ", country);        
        } else {
            console.log("PAIS NÃO ENCONTRADO");
        }
    }
).catch(error => {
    console.log("ERRO2: ", error);
});