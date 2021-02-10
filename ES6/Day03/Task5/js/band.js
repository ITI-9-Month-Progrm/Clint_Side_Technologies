var band = document.getElementById("Band");
var singer = document.getElementById("Singer");
//to create new option foe select tag
function addOption(val, select) 
{
      var option = document.createElement('option');
      option.value = val;
      option.innerHTML = val;
      select.appendChild(option);
}

fetch("../json/rockbands.json",{
    method:"GET"
}).then((reponse)=>{   //feach successfull
    return reponse.json()  // it will return promise
}).then((data)=>{     //convert from json to object successfull
    console.log(data)
    let len = Object.keys(data).length;
    let bands = Object.keys(data);
    for(let i =0 ;i<len;i++){
        addOption(bands[i], band);
    }
    band.onchange = function(event) 
    {
       let  bandValue = event.target.value;
        var  lenB = data[bandValue].length;
        for(let j =0;j<lenB;j++){
            let val = data[bandValue][j]["name"];
            addOption(val,singer);
             }
             singer.onchange = function(event){
                let  singerValue = event.target.value;
                for(let j =0;j<lenB;j++){
                    if(data[bandValue][j]["name"] === singerValue){
                        let link = data[bandValue][j]["value"];
                        window.location.assign(link);
                    }
                }
             }
       }
    }).catch(()=>{console.error('json convert failure')}
).catch(()=>{
    console.error('Feach failure')
})

