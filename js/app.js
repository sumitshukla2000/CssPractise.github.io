const form = document.getElementById("form");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const phone = document.getElementById("phone");
const email = document.getElementById("email");
const age = document.getElementById("age");
const add = document.getElementById("add");
const pass = document.getElementById("pass");
const pass2 = document.getElementById("pass2");
const btn = document.getElementById("btn");
const sub = document.getElementById("sub");

sub.addEventListener("click" , (e)=>{
    if(fname.value.length > 0 && lname.value.length > 0 && phone.value.length > 0 && email.value.length > 0 && age.value.length > 0 && add.value.length>0 && pass.value.length >= 8 && pass2.value.length >= 8){
     
      if(pass.value.length === pass2.value.length){
  // redirect();
  return true;
      }  
      else{
        validateForm();
      }
    }
    else{
      validateForm();
    }
    
  e.preventDefault();
});

// function redirect(){
//   window.location.href = '../html/redirected.html';
// }

btn.addEventListener("click" , (e)=>{
    validateForm();    
    e.preventDefault();
});

// sub.addEventListener("click" , (e)=>{
//     validateForm();  
//     e.preventDefault();
// })


const validateForm = ()=>{
    const fnameValue = fname.value.trim();
    const lnameValue = lname.value.trim();
    const phoneValue = phone.value.trim();
    const emailValue = email.value.trim();
    const ageValue = age.value.trim();
    const addValue = add.value.trim();
    const passValue = pass.value.trim();
    const pass2Value = pass2.value.trim();
    //for first name
  if(fnameValue === ''){
    setError(fname , "First Name Can't be empty");
  }
  else{
    setSuccess(fname);
    
  }

  if(lnameValue === ''){
    setError(lname , "Last Name can't be empty");
  }
  else{
    setSuccess(lname);
    
  }
  if(phoneValue === ''){
    setError(phone , "Phone Can't be invalid");
  }
  else{
    setSuccess(phone);
    
  }
  if(ageValue === ''){
    setError(age , "Age Required");
  }
  else{
    setSuccess(age);
    
  }
  if(addValue === ''){
    setError(add , "Address can't be empty");
  }
  else{
    setSuccess(add);
    
  }

  //password

  if(passValue === ''){
    setError(pass , "Password Should be Greater then 8 characters");
  }else if(passValue.split('').length >=8){
    setSuccess(pass);
    
  }else{
    setError(pass, "Password Should be Greater then 8 characters");
  }
    //confirm password

    if(passValue === ''){
        setError(pass2 , "Password Not Matched");

    }
    else if(passValue != pass2Value){
        setError(pass2 , "Password Not Matched");

    }
    else{
        setSuccess(pass2);
    
    }
    if(emailValue === ''){
      setError(email , "Email can't be invalid, and should include '@'")
    }
    else{
      setSuccess(email);
      
    }
    return true;
}

// sub.addEventListener("click" , (e)=>{
//     if(validate === true){
//         location.href = '../html/redirected.html';
//     }
//     e.preventDefault();
// })

function redirect(){
    window.location.href = '../html/redirected.html';
}

const setError = (element , msg)=>{
        const inputData = element.parentElement;
        const errorValue = inputData.querySelector("small");
        errorValue.innerText = msg;
        inputData.className = 'input-data error';
        const img2 = inputData.querySelector(".img2");
        img2.classList.add('active');
}

const setSuccess = (element)=>{
        const inputData = element.parentElement;
        inputData.className = 'input-data success';
        const img1 = inputData.querySelector(".img1");
        img1.classList.add('active');
}


//information box popup

const cross_btn = document.querySelector(".image_cross");
const box = document.querySelector(".box");
const lets = document.querySelector(".lets");
const opac = document.querySelector(".opacity");


cross_btn.addEventListener("click" , ()=>{
        box.classList.add("up");   
        opac.style.opacity = "1";        
});

lets.addEventListener("click" , ()=>{
    box.classList.add("left");
    opac.style.opacity = '1';
});


//change background color after 5 second of page load


setTimeout(() => {
        document.body.style.background = 'var(--darkColor)';    
}, 5000);


//dyanamically bold and underline text

const mouseEvent = document.querySelector(".change_color");

mouseEvent.addEventListener("mouseover" , (e)=>{
    e.target.style.fontWeight = '900';
});


mouseEvent.addEventListener("mouseout" , (e)=>{
    e.target.style.fontWeight = '500';
});

//underline event

const line = document.querySelector(".line");

line.addEventListener('mouseover' , (e)=>{
    e.target.style.textDecoration = 'underline';
    e.target.style.color = 'var(--blue)';
    e.target.style.fontStyle = 'italic';
});

line.addEventListener('mouseout' , (e)=>{
    e.target.style.textDecoration = 'none';
   e.target.style.color = 'white'; 
   e.target.style.fontStyle = 'normal';
});



//redirected page



