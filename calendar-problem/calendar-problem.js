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
