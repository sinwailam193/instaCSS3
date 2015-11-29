  
$.ajax({
  url: '/images',
  type: "GET",
  contentType: 'application/json; charset=utf-8',
  success: function(data){
    var start = "";
    for(var i = 0; i < 15; i++){
      start += "<a target='_blank' href='" + data[i].link + "'><img height='150' width='150' src='" + data[i].images.standard_resolution.url + "' class='boingInUp' /></a>";
    }
    $('#instafeed').html(start);
  },
  error: function(){
    console.log('there is an error!');
  },
  timeout: 120000
});

$(function(){
  $('#magic').on('click', function(){
    $('#instafeed img').removeClass($('#instafeed img').attr('class'));
    $('#instafeed img').toggleClass("shake")
  });
  $('#spin').on('click', function(){
    $('#instafeed img').removeClass($('#instafeed img').attr('class'));
    $('#instafeed img').toggleClass("rotate")
  });
  $('#pulse').on('click', function(){
    $('#instafeed img').removeClass($('#instafeed img').attr('class'));
    $('#instafeed img').toggleClass("heart")
  });
  $('#ball').on('click', function(){
    $('#instafeed img').removeClass($('#instafeed img').attr('class'));
    $('#instafeed img').toggleClass("bounce")
  });
})