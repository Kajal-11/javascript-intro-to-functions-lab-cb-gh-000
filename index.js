function shout(aLine){
    return aLine.toUpperCase()
}

function whisper(string){
  return string.toLowerCase()
}

function logShout(string){
  string=string.toUpperCase()
  console.log(string)
}

function logWhisper(string){
  string=string.toLowerCase()
  console.log(string)
}

sayHiToGrandma(string){
  if(string === string.toLowerCase()){
    return "I can't hear you!"
  }
}