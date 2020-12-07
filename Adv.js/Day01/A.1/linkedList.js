var linkedList = {}

linkedList.data=[];

linkedList.pushValue=function(val){
      //[].push.call(linkedList.data,val);
     linkedList.data.push(val);
}

linkedList.popValue=function(){
    //[].pop.call(linkedList.data);
    linkedList.data.pop();
}

linkedList.displayAll=function(){
    var len;
    len=linkedList.data.length;
    for(var i=0;i<len;i++){
        console.log(linkedList.data[i]);
    } 
}

linkedList.removeIndex=function (index){
    var temp;
    var len;
    len=linkedList.data.length;
    for(var i=0;i<len;i++){
        if((index-1) == i){
             
            
            temp=linkedList.data[i];
            linkedList.data[i]=linkedList.data[0];
            linkedList.data[0]=temp;
            [].shift.call(linkedList.data);
            
            //return values to it's places
            temp=linkedList.data[0];
            linkedList.data[0]=linkedList.data[i-1];
            linkedList.data[i-1]=temp;
            
            }
    } 
    
}

linkedList.insertValue=function (index,Value){
    var part1=[],part2=[],total=[];
    var len;
    var flag=1;
    len=linkedList.data.length;
         for(var i=0;i<len;i++){
             if(linkedList.data[i]===Value){
                 flag=0;   
             }
         }
    
    if(flag){
        part1=linkedList.data.slice(0,index);
                part2=linkedList.data.slice(index,len+1); 
                part1.push(Value);
                total=part1.concat(part2);
                linkedList.data=total;
    }
    else{
        throw new Error("Value is Found");
    }
    
                
  
}