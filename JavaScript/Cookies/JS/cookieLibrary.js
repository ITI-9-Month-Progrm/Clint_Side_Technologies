//to create new Cookie
function setCookie(cookieName,cookieValue,expireDate){
    
    if(expireDate){
        var today=new Date();
        today.setMonth(today.getMonth+expireDate)
        document.cookie=cookieName+"="+cookieValue+";expires="+today.toUTCString();
    }
    else
        {
            document.cookie=cookieName+"="+cookieValue;
        }
}

//to Display All Cookies
function allCookieList(){
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

//to get one Cookie based on it's name
 function getCookie(cookieName){
     var cookieArr;
     cookieArr=allCookieList();
     for(cookieName in cookieArr){
         return cookieArr[cookieName];
     }
 }

//to delete Cookie based o it's name

function deleteCookie(cookieName){
    var today=new Date();
    today.setMonth(today.getMonth-12);
    document.cookie=cookieName+"="+";expires="+today.toUTCString();
}

// to check that cookie is found or not

function hasCookie(cookieName){
     var cookieArr;
     var flag;
     cookieArr=allCookieList();
     for(cookieName in cookieArr)
     {
        if(cookieArr[cookieName]){
            flag=1;
        }
         else{flag=0;}
     }
return flag;
}