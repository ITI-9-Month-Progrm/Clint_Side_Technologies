export class Polygon{
    constructor(_width=1,_height=1,_length=1){ 
         this.width=_width;
         this.height=_height;
         this.length=_length;
    }

   //Setter
   set setWidth(value)
        {
            this.width=value;
        }
    set setHeight(value)
        {
            this.height=value;
        }
    setLength(value){
        this.length=value;
    }    
    //Getter
    getWidth()    
    {
        return this.width;
    }
    getHeight()    
    {
        return this.height;
    }
    getLength(){
        return this.length;
    }
    //override  Functions 
     toString() {
        console.log(`The shaphe  has Width = ${this.width} and Height  = ${this.height}`);
    }
    claculateMyArea(){
       
    }
    claculateMyParameter(){
      
    }


}

