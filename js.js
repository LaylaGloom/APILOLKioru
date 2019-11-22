var champs;

$.ajax({
    dataType: "json",
    url: "http://ddragon.leagueoflegends.com/cdn/9.23.1/data/en_US/champion.json",
    method:'GET',
    success: function(data){
        $("#fill").html(data.data.Aatrox.blurb);
        console.log(data);
        }

        /*$(champs.items).each(function(index, item) {
            console.log(champs.item);
            div.append(
                $(document.createElement('p')).text(item)
            );
        });
    }*/
  });