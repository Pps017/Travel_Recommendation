
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
        } else if (query.includes("australia")||query.includes("japan")||query.includes("brazil")) {
            // Show country results
            
        }else {

        }
    })
    .catch(error => console.error('Error fetching data:', error));

    
});
