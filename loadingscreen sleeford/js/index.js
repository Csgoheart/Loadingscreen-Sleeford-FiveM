$( document ).ready(function() {
  setTimeout(loadDatSkweenie, 2000);
});

function loadDatSkweenie() {
  var banner = ["&nbsp", "C","Z","/","S","K", "&nbsp", "G","r","a","m","l","e","s", "&nbsp", "R", "P", "&nbsp"]
  var rules = ["Použivať /me a /do!", 
               "Mať funkčný mikrofón!", 
               "Nezneuživať bugy v hre!", 
               "Nepouživať cheaty!", 
               "Žiadný rasizmus!",
               "Neurážať ostatných!",
               "Byť stále na discorde!",
               "Prečitať pravidla!"
              ]
  var fadeTime = 500
  var fadeTime2 = 500
  $(".infohold").fadeIn(900)
  $(".steamid").show(900)
  $(banner).each(function( i ) {
    var tCount = Number(i)
    fadeTime = fadeTime + 200
    $(".banner p:nth-child("+tCount+")").hide()
    $( ".banner" ).append( "<p>"+banner[tCount]+"</p>" );
    $(".banner p:nth-child("+tCount+")").fadeIn(fadeTime)
  })
  $(rules).each(function( i ) {
    var rCount = Number(i) 
    fadeTime2 = fadeTime2 + 300
    $(".block .text:nth-child("+rCount+")").hide()
    $( ".block:nth-child(1)" ).append( "<p class='text'>"+rules[rCount]+"</p>" )
    $(".block .text:nth-child("+rCount+")").show(fadeTime2)
  })
}
