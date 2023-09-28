function scuberGreetingForFeet(num){
  // Write your code here!
  if (num <= 400){
    return 'This one is on me!'
  } else if (num > 400 && num <= 2000){
    return 'That will be twenty bucks.'
  }else if(num > 2000 && num <= 2500){
    return 'I will gladly take your thirty bucks.'
  }else{
   return  'No can do.'
  }
}

function ternaryCheckCity(city){
  return city !== "NYC" ? 'No go.' : 'Ok, sounds good.'
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  if(tip === "generous"){
    return "Thank you so much."
  } else if (tip === "not as generous"){
    return "Thank you."
  } else {
    return "Bye."
  }
}