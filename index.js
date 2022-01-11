// code your solution here
function superbowlWin(recArray){
    const yearWon = recArray.find( (iteration) => {
        if(iteration.result === "W"){
            return iteration;
        }
    })
//console.log(yearWon);
    if (yearWon ) {
      return yearWon.year;
    } else {
      return undefined;
    }
}

