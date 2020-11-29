 var strq,firstName,lastName,password,email,mobile,gender,address;
 var parArr=[];


function getQuary(){
   
    strq=window.location.search;
    parArr = strq.split('&');
    firstName=parArr[0].split('=')[1];
    lastName=parArr[1].split('=')[1];                          
    password=parArr[2].split('=')[1]; 
    email=parArr[3].split('=')[1]; 
    mobile=parArr[4].split('=')[1]; 
    address=parArr[5].split('=')[1]; 
    gender=parArr[6].split('=')[1]; 
                              
}

function writeDiv(){
    
    document.getElementById("id1").innerHTML=firstName;
    document.getElementById("id2").innerHTML=lastName;
    document.getElementById("id3").innerHTML=password;
    document.getElementById("id4").innerHTML=email;
    document.getElementById("id5").innerHTML=mobile;
    document.getElementById("id6").innerHTML=address;
    document.getElementById("id7").innerHTML=gender;
    
    }

getQuary();
writeDiv();