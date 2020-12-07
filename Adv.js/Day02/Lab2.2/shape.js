function Shape(wValue,hValue){
    this.width=wValue;
    this.height=hValue;
    this.area=function(){
        var areaValue;
        areaValue=this.width*this.height;
        return areaValue;
    }
    this.perimeter=function(){
        var perimeterValue;
        perimeterValue=this.width+this.height;
        return perimeterValue;
    }
    this.shapeInfo=function(){
        return "Width_value "+this.width+" Height_value "+this.height+" Area_value "+this.area()+" Perimeter_value "+this.perimeter();
    }
    
}



function Run(){
  var w,h;
    w=parseInt(document.getElementById("w").value);
    h=parseInt(document.getElementById("h").value);
    var shapeX=new Shape(w,h);
    document.getElementById("width").innerHTML=shapeX.width;
    document.getElementById("height").innerHTML=shapeX.height;
    document.getElementById("area").innerHTML= shapeX.area();
    document.getElementById("perimeter").innerHTML=shapeX.perimeter();
    document.getElementById("info").innerHTML=shapeX.shapeInfo();    
}
