var phone = prompt("What is your phone number!")
  if(phone.charAt(3)==="-"&& phone.charAt(7)==="-"){
    alert("true")
  }
  else {
    alert("false")
  }
  var birthday = prompt("What is your birthday?")
    if(birthday.charAt(2)==="/"&& birthday.charAt(5)==="/"){
      alert("true")
    }
    else {
      alert("false")
    }
var zipcode = prompt("What is your zipcode?")
  if(zipcode.length === 5 || zipcode.charAt(5)==="-"){
    alert("true")
  }
  else{
    alert("false")
  }
var state = prompt("Please abbreviate the state you live in!")
  if(state.length === 2){
    alert("true")
  }
  else{
    ("false")
  }
var status = prompt("Are you married?")
  if(status.length === 3 || status.length === 2){
    alert("true")
  }
  else {
    alert("false")
  }
