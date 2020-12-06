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
        setTimeout(clearData,30000);
        console.log("Firing");
    });
    //fire
    document.forms[0].dispatchEvent(myEvent);
    }

resetForm();