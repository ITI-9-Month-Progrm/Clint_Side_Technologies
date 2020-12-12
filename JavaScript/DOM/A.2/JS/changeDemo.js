var div1,div2,div3,
    attr1,attr2,attr3,
    attr4,attr5,attr6,
    attr7,image1, image2,
    cloneDiv;


cloneDiv=document.getElementById("navigation");
div2=cloneDiv.cloneNode(true);
document.body.innerHTML="";


///create Three divs to hold images and list
document.body.appendChild(document.createElement("div"));
document.body.appendChild(div2);
document.body.appendChild(document.createElement("div"));

//create ids for divs
attr1=document.createAttribute("id");
attr1.value="header";
attr2=document.createAttribute("id");
attr2.value="content";
attr3=document.createAttribute("id");
attr3.value="footer";

//determine divs
div1=document.getElementsByTagName("div")[0];
//div2=document.getElementsByTagName("div")[1];
div3=document.getElementsByTagName("div")[2];

//set ids for divs
div1.setAttributeNode(attr1);
div2.setAttributeNode(attr2);
div3.setAttributeNode(attr3);

//create new node to hold image top right

image1=document.createElement("IMG");
div1.appendChild(image1);
attr4=document.createAttribute("src");
attr5=document.createAttribute("id");
attr4.value="../HTML/dom.jpg";
attr5.value="img1";
div1.children[0].setAttributeNode(attr4);
div1.children[0].setAttributeNode(attr5);
document.getElementById("img1").style.right="0px";



//create new node to hold image bottom left

image2=document.createElement("IMG");
div3.appendChild(image2);
attr6=document.createAttribute("src");
attr7=document.createAttribute("id");
attr6.value="../HTML/dom.jpg";
attr7.value="img2";
div3.children[0].setAttributeNode(attr6);
div3.children[0].setAttributeNode(attr7);
document.getElementById("img2").style.bottom="0px";

//Edit div2 node
  document.getElementById("content").style.listStyleType="circle";
  document.getElementById("content").style.textAlign="center";





