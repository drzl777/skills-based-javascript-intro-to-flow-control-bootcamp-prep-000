function basicTeenager(age) {
  if(age<=19 && age>=13)
  {return "You are a teenager!"}
}

function teenager(age) {
  if(age<=19 && age>=13)
  {return "You are a teenager!"}
  else {return "You are not a teenager"}
}

function ageChecker(age) {
  if(age<13){
    return "You are a kid"
  } else if(age<20){
    return "You are a teenager!"
  } else {
    return "You are a grownup"
  }
}

function ternaryTeenager(age) {
  return (age>=13 && age<=20)? "You are a teenager":"You are not a teenager"
}

function switchAge(age) {
  var teenOrNah;
  teenOrNah = (age>=13 && age<=20)? "Teen":"Nah";
  switch(teenOrNah){
    case "Teen":
      return "You are a teenager"
    default:
      return "You have an age"
  }
}
