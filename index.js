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
  const distance = end - start;
  if (distance > 0) {
    return distance * 264;
  } else {
  if (distance <0) {
    return distance * -264;
  }
}
}

function calculatesFarePrice(start, end) {
  const distance2 = end - start;
  if (distance2 < 400) {
    return 0;
  } else (distance2<2000) {
    distance * 0.02;}
    else (distance2<2500) {
      return 25;
    } else {
    return 'cannot travel that far';
    }
}

/**function calculatesFarePrice(start, end) {
  if (distanceTravelledInFeet(start, end) <= 400) {
    return 0;
  } else if (distanceTravelledInFeet(start, end) > 400 && distanceTravelledInFeet(start, end) < 2000) {
    return distanceTravelledInFeet() * 0.02;
  } else if (distanceTravelledInFeet() > 2000 && distanceTravelledInFeet() < 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
  }
*/
