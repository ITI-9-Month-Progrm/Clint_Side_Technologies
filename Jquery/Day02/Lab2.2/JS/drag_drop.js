$(function(){ //for document ready 
    //$("#div2").draggable()
    $("#div2").draggable();
    $("#black").droppable(  //div 1 is black circl
     {
         drop:function(){
             $("#div2").draggable( //div 2 is rabbit
             {
                 revert:false
             }).effect("drop",{
                 direction:"down"
             },2000)
         }
     }
    )
      
    
});