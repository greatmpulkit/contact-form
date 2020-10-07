function hi(){
       var  name=document.getElementById("name").value;
       var  phone=document.getElementById("phone").value;
       var  address=document.getElementById("address").value;
       var  mail=document.getElementById("email").value;
       var  thing=document.getElementById("thing").value;

       if(name=="")
       alert("**Name is required**");

       else if (/*!ValidateNo(phoneNo)*/phone=="")
       alert("**Please fill your phone number**");

       else if(!validateNo(phone)){
         alert("please enter a 10 digit no.")
       }

      else if(address=="")
       alert("**Your adress is necessary to deliver your item please fill**");

      
     else if(/*!validate(email)*/mail=="")
       alert("**Please fill your email address**"); 

       else if(!validate(mail)){
         alert("please enter a valid email");
       }

      else if(thing=="")
       alert("**Please write the thing you want to order**");

      else
    alert ("Your name is "+name+" Your phone number is "+phone+" and the thing you ordered is to be dilevered to "+address+" If their will be any problem we will mail you at your email address "+mail+" thing you ordered is "+thing );
     }   
   
     function validate(mail) {

      var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
      //var address = document.getElementById[mail].value;
      if (reg.test(mail) == false) 
      {
         /* alert('Invalid Email Address');*/
          return false;
      }
else
  return true;
 }
function validateNo(phoneNo){
  if (phoneNo =="" || phoneNo == null ) {
    alert("please fill your mobile no.");
    return false;
  }

  if (phoneNo.length < 10 || phoneNo.length > 10) {
    alert("phone number invalid,please enter 10 digit number");
    return false;
  }
  else
    return true;
  }


     
     
     
     
     
     
     
     
     
     
     
     