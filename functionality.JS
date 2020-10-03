function hi(){
       var  name=document.getElementById("name").value;
       var  phone=document.getElementById("phone").value;
       var  address=document.getElementById("address").value;
       var  mail=document.getElementById("email").value;
       var  thing=document.getElementById("thing").value;

       if(name=="")
       alert("**Name is required**");

       else if
       (phone=="")
       alert("**Please fill your phone number**");

      else if(address=="")
       alert("**Your adress is necessary to deliver your item please fill**");

       else if(mail=="")
       alert("**Please fill your email address**");

       else if(thing=="")
       alert("**Please write the thing you want to order**");

      else
    alert ("Your name is "+name+" Your phone number is "+phone+" and the thing you ordered is to be dilevered to "+address+" If their will be any problem we will mail you at your email address "+mail+" thing you ordered is "+thing );
     }   
             