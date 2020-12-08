function submitEvent(){
    var res=confirm("Do you want to submit this data?");
    if(res){
        document.forms[0].submit();
    }else{
        clearData();
    }
}

function clearData(){
    document.forms[0].reset();
}

function resetForm(){
    //create 
    var myEvent = new Event("TIMEOUT");
    //Lisenter
    document.forms[0].addEventListener("TIMEOUT",function(){
        alert("Please Enter Your Data ")
        clearData();
        console.log("Firing");
    });
    //fire
   document.forms[0].dispatchEvent(myEvent)
    }

setTimeout(resetForm,30000);