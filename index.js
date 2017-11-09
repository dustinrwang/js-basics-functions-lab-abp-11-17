// Code your solution in this file!
function distanceFromHqInBlocks(location) {
  if (location >42) {
    return location - 42;
  } else {
    return 42 - location;
  }
}

function distanceFromHqInFeet(location) {
  if (location >42) {
    return (location - 42) * 264;
  } else {
    return (42 - location) * 264;
  }
}

function distanceTravelledInFeet(start, end) {
  let distance;
(end - start>0) ? distance=end-start : distance=start-end;  
    return distance * 264;
  }
