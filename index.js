
document.getElementById('searchButton').addEventListener('click', function() {
    const query = document.getElementById('search').value.toLowerCase();
    const recommendations = document.getElementById('recommendations');
    let text='';
    fetch('./travel_recommendation_api.json')
    .then(response => response.json())
    .then(data => {
        console.log(data);

        if (query.includes("beach")) {
            // Show beach results
            data.beaches.forEach(e => {
               text+=('<div><img src='+e.imageUrl+'/><h3>'+e.name+'</h3><p>'+e.description+'</p><button>Visit</button></div>')
            });
            console.log(text);
            recommendations.innerHTML=text;
            text='';
    
        } else if (query.includes("temple")) {
            // Show temple results
            data.temples.forEach(e => {
                text+=('<div><img src='+e.imageUrl+'/><h3>'+e.name+'</h3><p>'+e.description+'</p><button>Visit</button></div>')
             });
             console.log(text);
             recommendations.innerHTML=text;
             text='';
        } else if (query.includes("australia")) {
            // Show country results
            data.countries[0].cities.forEach(e => {
                text+=('<div><img src='+e.imageUrl+'/><h3>'+e.name+'</h3><p>'+e.description+'</p><button>Visit</button></div>')
             });
             console.log(text);
             recommendations.innerHTML=text;
             text='';
        }else if (query.includes("japan")) {
            // Show country results
            data.countries[1].cities.forEach(e => {
                text+=('<div><img src='+e.imageUrl+'/><h3>'+e.name+'</h3><p>'+e.description+'</p><button>Visit</button></div>')
             });
             console.log(text);
             recommendations.innerHTML=text;
             text='';
        }else if (query.includes("brazil")) {
            // Show country results
            data.countries[2].cities.forEach(e => {
                text+=('<div><img src='+e.imageUrl+'/><h3>'+e.name+'</h3><p>'+e.description+'</p><button>Visit</button></div>')
             });
             console.log(text);
             recommendations.innerHTML=text;
             text='';
        }
    })
    .catch(error => console.error('Error fetching data:', error));

    
});

document.getElementById("resetButton").addEventListener("click",()=>{
    document.getElementById('search').value="";
    document.getElementById('recommendations').innerHTML="";
})
