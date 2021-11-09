const ville = document.getElementById("ville");
const click = document.getElementById("click");
const reponse = document.getElementById("reponse");
//let c'est locale a une fonct°

click.addEventListener('click',()=>
    {
        let data;
        let xhr = new XMLHttpRequest();
        console.log(click)
        xhr.addEventListener('readystatechange',function()
            {
                if(xhr.readyState === 4 && xhr.status===200 )
                {
                    data = JSON.parse(xhr.responseText);
                    console.log(data)
                    console.log(ville.value);
                    data.forEach(element => 
                        {
                            let Balise_ul = document.createElement('ul');
                            let Balise_li_nom = document.createElement('li');
                            let Balise_li_code = document.createElement('li');
                            let Balise_li_population = document.createElement('li');

                            Balise_li_nom.textContent = element.nom;
                            Balise_li_code.textContent = element.code;
                            Balise_li_population.textContent = element.population;

                            //Balise_li.textContent = element.address.city;
                            Balise_ul.appendChild(Balise_li_nom);
                            Balise_ul.appendChild(Balise_li_code);
                            Balise_ul.appendChild(Balise_li_population);
                            reponse.appendChild(Balise_ul);
                            console.log(data)
                        }
                    );        
                }
            }
        )
        xhr.open('GET', 'https://geo.api.gouv.fr/communes?codePostal='+ville.value);
        console.log(ville);
        xhr.send();
    }
);