(function(){
    function cookieClass(){
    var cookie = {};
    
//to create new Cookie
cookie.setCookie=function(cookieName,cookieValue,expireDate){
    
    if(arguments.length==3 ){
        var today=new Date();
        today.setMonth(today.getMonth+expireDate)
        document.cookie=cookieName+"="+cookieValue+";expires="+today.toUTCString();
    }
    
    else if(arguments.length==2){
        document.cookie=cookieName+"="+cookieValue;
    }
    else
        {
            throw "You should enter only name and value Cookie or expire data or not";
        }
}
//to get one Cookie based on it's name
cookie.getCookie=function(cookieName){
     var cookieArr;
    if(arguments.length==1){
        cookieArr=cookie.allCookieList();
        return cookieArr[cookieName];
    }
    else{
        throw "should be enter name of cookie only";
    }
     
    
 }
//to Display All Cookies
cookie.allCookieList=function(){
    var assoiativeArray=[];
    var cookieSplit=document.cookie.split(";");
    var len;len=cookieSplit.length;
    var i;
    for(i=0;i<len;i++){
        
        //assoiativeArray[cookieName]=cookieValue;
        
        assoiativeArray[cookieSplit[i].split("=")[0].trim()]=cookieSplit[i].split("=")[1];
    }
     return assoiativeArray;
    
}
//to delete Cookie based o it's name
cookie.deleteCookie=function(cookieName){
    if(arguments.length==1){
        var today=new Date();
    today.setMonth(today.getMonth-12);
    document.cookie=cookieName+"="+";expires="+today.toUTCString();
    }
    else
    {
        throw "you should enter name of cookie only";
    }
}
// to check that cookie is found or not

cookie. hasCookie=function(cookieName){
    if(arguments.length==1){
        var cookieArr;
     var flag;
     cookieArr=cookie.allCookieList();
     for(cookieName in cookieArr)
     {
        if(cookieArr[cookieName]){
            flag=1;
        }
         else{flag=0;}
     }
return flag;
    } 
    else throw "you should enter name of  ";
}

return cookie;}
        window.$_c=cookieClass();

}

)();
