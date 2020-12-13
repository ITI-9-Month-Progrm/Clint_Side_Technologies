$(function(){
  $("#btn1").click(function(){
      $("div").animate({
          marginLeft:'100px',
          width:'400px',
          fontSize:'50px',
          backgroundColor:'#ffccff',
          borderWidth:'2px',
    }) });
    
  $("#btn2").click(function(){
      $("div").animate({
          marginLeft:'0px',
          backgroundColor:'#dc143c',
          fontSize:'10px',
          width: '100px',
          border: 'solid',
      })
  })   ; 
    
    
    
});