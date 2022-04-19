function betterThanAverage(classPoints, yourPoints) {
  let sum= 0
  let average = 0
  for(let i = 0;i<classPoints.length;i++){
    sum = sum + classPoints[i]
}
  average = sum/classPoints.length
  
  if(yourPoints>average){
    return true
  }
  else{
    return false
  }
}