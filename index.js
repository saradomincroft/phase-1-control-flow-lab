
function scuberGreetingForFeet(feet, greeting){
  if (feet <= 400) {
    greeting = 'This one is on me!'
  } else if (feet > 400 && feet <= 2000) {
      greeting = 'That will be twenty bucks.'
    } else if (feet > 2000 && feet <= 2500) {
      greeting = 'I will gladly take your thirty bucks.'
    } else {
      greeting = 'No can do.'
    }
  return greeting
}

function ternaryCheckCity(city){
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.'
}

function switchOnCharmFromTip(tip){
  switch(tip) {
    case 'generous': 
        return 'Thank you so much.'
        break;
    case 'not as generous':
        return 'Thank you.'
        break;
    default:
        return 'Bye.'
  }
}