$(document).ready(()=>
{
    $.ajax({
    dataType: "json",
    url: "http://ddragon.leagueoflegends.com/cdn/9.23.1/data/en_US/champion.json",
    method:'GET',
    success: function(data){
        var champs=data.data;
        var url="http://ddragon.leagueoflegends.com/cdn/";
        for (var name in champs){
            console.log('Campeon: ' + name, 'JSON: ', champs[name]);
            var title = champs[name];
            var icon= url+'9.23.1/img/champion/' + name + '.png'
            var html= 
            `<div class="col l3 m5 s10 border-lol center-align teal darken-4 white-text pad marg">
            <img src="${icon}" alt="">
            <h4>${title.id} </h4> 
            <a href="champion.html#${title.id}" class=""> Leer más </a> 
            </div>`;
             $('#fill').append(html);
            }
        }

    });
});
