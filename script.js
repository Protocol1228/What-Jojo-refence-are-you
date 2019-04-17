$(".theFuture").click(function(){
   var userInput1 = parseInt($(".oraora").val());
   var userInput2 = $(".Muda").val();
       if(userInput1 >= "10" && userInput2 === "Yes"){
           $(".results").html("<img src='https://i.kym-cdn.com/photos/images/newsfeed/000/754/539/566.gif'>");
       } else if (userInput1 < "10") {
           $(".results").html("<img src='https://thumbs.gfycat.com/BlackandwhiteDemandingHeron-size_restricted.gif'>");
           
       }
  });