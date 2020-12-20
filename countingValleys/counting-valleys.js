function countingValleys(steps, path) {
    const pathArr = path.split('');
    let counter = 0;
    for(let i = 0; i < pathArr.length; i++){
      if(pathArr[i] === 'U'){
        if(pathArr[i] === pathArr[i + 1]){
          counter++;
          i++
        }
      }
    }
  return counter;
}
