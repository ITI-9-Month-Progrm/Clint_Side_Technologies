var linkedList = {}

linkedList.data=[];

linkedList.pushValue=function(val){
      [].push.call(linkedList.data,val);
}

linkedList.popValue=function(){
    [].pop.call(linkedList.data);
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
    len=linkedList.data.length;
    part1=[].slice(0,index).call(linkedList.data);
                part2=[].slice(index,len+1).call(linkedList.data); 
                part1.push(Value);
                total=part1.concat(part2);
                linkedList.data=total;
  
}