
export function isTimeRangeWithin(start1, start2) {
    const [start1Hour, start1Minute] = start1.split(':');
    const [start2Hour, start2Minute] = start2.split(':');

    const start1Timestamp = new Date().setHours(parseInt(start1Hour), parseInt(start1Minute));
    const start2Timestamp = new Date().setHours(parseInt(start2Hour), parseInt(start2Minute));
  
    return start1Timestamp >= start2Timestamp;
}
  

  // const isWithinRange = isTimeRangeWithin(range1Start, range2Start);
  // console.log(isWithinRange); // Output: true
  


export function clickIfExist(element) {
    cy.get('body').then((body) => {
    cy.wait(5000).then(() => {
      if (body.find(element).length > -1) {
        return true
      } else {
        return false
      }
    })
    })
} 

export function timeFormat(time){
  const [hours, minutes, period] = time.split(/:| /);
  const formattedTime = `${hours.padStart(2, '0')}:${minutes} ${period}`;
  return formattedTime

}
