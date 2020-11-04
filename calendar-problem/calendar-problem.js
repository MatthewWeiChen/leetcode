//input array of time ranges
//output array of condensed ranges
//comebine times
//if start time overlaps with another end time combine times
//1 - 30
//2 - 60

//iterate through array
//sort array -> sort my start time
//if endtime in object is less add to array
//else end time is same or greater combine both objects
//to combine - get start time if times[i] and add endtime of times[i+1]?
//return times

function mergeRanges(meetings){
  //create a deep copy of the meetings array
  const meetingsCopy = JSON.parse(JSON.stringify(meetings));

  //sort by start time
  const sortedMeetings = meetingsCopy.sort((a,b)=>{
    return a.startTime - b.startTime;
  })

  //initialize mergedMeetings with the earliest meeting
  const mergedMeetings = [sortedMeetings[0]];

  for(let i = 0; i < sortedMeetings.length; i++){
    const currentMeeting = sortedMeetings[i];
    const lastMergedMeeting = mergedMeetings[mergedMeetings.length - 1];


    //if the current meeting overlaps with the last merged meeting, use the
    //later end time of the two

    if(currentMeeting.startTime <= lastMergedMeeting.endTime){
      lastMergedMeeting.endTime = Math.max(lastMergedMeeting.endTime, currentMeeting.endTime);
    } else {
      //add the current meeting since it doesn't overlap
      mergedMeetings.push(currentMeeting);
    }
  }
  return mergedMeetings;
}
