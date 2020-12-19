var obj;

$(function(){  ///for document to be ready 
    $.ajax("rockbands.json",{
        
        type:"GET",
        dataType:"json",
        contentType:"application/json",
        success:function(data){
            //console.log(data)
            obj=data;
            for(i in data){
                  $('#band').append($("<option></option>").attr("value", i).text(i)); 
            }
             var bandData=document.getElementById("band").value;
            if(bandData == "beatles"){
               for(var j=0;j<obj[bandData].length;j++){
                $('#artist').append($("<option></option>").attr("value", obj[bandData][j].name).text(obj[bandData][j].name).click(document.location.assign( obj[bandData][j].value))); }
            }
			  if(bandData == "stones"){
               for(var j=0;j<obj[bandData].length;j++){
                $('#artist').append($("<option></option>").attr("value", obj[bandData][j].name).text(obj[bandData][j].name)); }
            }
			  if(bandData == "genesis"){
               for(var j=0;j<obj[bandData].length;j++){
                $('#artist').append($("<option></option>").attr("value", obj[bandData][j].name).text(obj[bandData][j].name)); }
            }
			  if(bandData == "eagles"){
               for(var j=0;j<obj[bandData].length;j++){
                $('#artist').append($("<option></option>").attr("value", obj[bandData][j].name).text(obj[bandData][j].name)); }
            }
			var artist=document.getElementById("artist").value;
			//var res=obj[bandData][artist].value;
			//document.getElementsByTagName("a")[0].hre=res;
        },
        error:function(){
            
        }
        
        
        
    })
    
});


