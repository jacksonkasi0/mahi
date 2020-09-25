function opentab() {
    if($('#browser').css('visibility') == 'hidden'){
    $('#browser').css('visibility', 'visible');
    }
    else if($('#browser').css('visibility') == 'visible')
      $('#browser').css('visibility', 'hidden');
  }
  
  $("a[href^='#']").on("click", function(e){
    e.preventDefault();
    //return false;
  });
  
  // tab New
  $(".add").on("click", function(e){ 
    if($(".tabs li").length < 4){ 
      $(".tabs li.active").removeClass("active");
      $(".tabs").append('<li class="active"><span>New Tab</span><a class="close" href="#">×</a></li>');
      $(".page iframe").attr("src", "https://bing.com");
    }
  });
    
  
  // tab Click.active
  $(".tabs li").on("click", function(e){
    
    //önce active olan class'ı silelim
    $(".tabs li.active").removeClass("active");
    $(this).addClass("active");
    
   
    $(".page iframe").attr("src", $(this).find("a").attr("href"));
    
    e.preventDefault();
  });
    
  
  // tab Close
  $(".tabs li a.close").on("click", function(e){
    $(this).closest("li").remove();
    if($(".tabs li").length == 0){
      $(".tabs").append('<li><span>New Tab</span><a class="close" href="#">×</a></li>');
    }
    
    $(".tabs li:last-child").addClass("active");
    e.preventDefault();
  });
  
  
  // bookmark link
  $(".bookmark ul li a").on("click", function(e){
    $(".page iframe").attr("src", $(this).attr("href"));
    e.preventDefault();
  });