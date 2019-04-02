var id = '',
  xCoordinate,
  yCoordinate,
  finalPosition = '',
  faceDirection = '';

function getCommand() {
  let str = document.getElementById('command').value;
  userInput(str);
}

function userInput(str) {
  let commandType = str
    .split(' ', 1)
    .toString()
    .toUpperCase();
  if (
    xCoordinate == undefined &&
    xCoordinate == null &&
    yCoordinate == undefined &&
    yCoordinate == null
  ) {
    if (str.indexOf(' ') >= 0) {
      let strArray = str.split(',');
      let posX = strArray[0].split(' ')[1].toString();
      let posY = strArray[1];
      let direction = strArray[2];
      if (commandType == 'PLACE') {
        place(posX, posY, direction);
      } else {
        console.log('error');
      }
    } else {
      alert('Please enter the PLACE command first');
    }
  } else if (
    commandType == 'PLACE' &&
    xCoordinate != undefined &&
    xCoordinate != null &&
    yCoordinate != undefined &&
    yCoordinate != null
  ) {
    if (str.indexOf(' ') >= 0) {
      let strArray = str.split(',');
      let posX = strArray[0].split(' ')[1].toString();
      let posY = strArray[1];
      let direction = strArray[2];
      prev(id);
      place(posX, posY, direction);
    } else {
      console.log('error');
    }
  } else {
    if (commandType == 'MOVE') {
      move();
    } else if (commandType == 'LEFT') {
      left();
    } else if (commandType == 'RIGHT') {
      right();
    } else if (commandType == 'REPORT') {
      report();
    } else {
      console.log('error');
    }
  }
}

function place(x, y, f) {
  id = x + y;
  xCoordinate = parseInt(x);
  yCoordinate = parseInt(y);
  finalPosition = '' + x + y;
  f = f.toUpperCase();
  faceDirection = f;
  document.getElementById(id).style.background = '#EE82EE';
  document.getElementById(id).innerHTML = '';

  if (f == 'NORTH') {
    document.getElementById(id).style.borderTop = 'thick solid #00FF00';
  } else if (f == 'SOUTH') {
    document.getElementById(id).style.borderBottom = 'thick solid #00FF00';
  } else if (f == 'EAST') {
    document.getElementById(id).style.borderRight = 'thick solid #00FF00';
  } else if (f == 'WEST') {
    document.getElementById(id).style.borderLeft = 'thick solid #00FF00';
  }
}

function prev(id) {
  var selectedElement = document.getElementById(id);
  if (selectedElement.className == 'grid white') {
    selectedElement.style.background = 'white';
  } else {
    selectedElement.style.background = 'black';
  }
  selectedElement.style.border = 'none';
  selectedElement.innerHTML = '' + id;
}

function next(id) {
  document.getElementById(id).style.background = '#EE82EE';
  document.getElementById(id).innerHTML = '';
}

function move() {
  if (faceDirection == 'NORTH' && yCoordinate < 4) {
    prev(id);
    yCoordinate = parseInt(yCoordinate) + 1;
    id = '' + xCoordinate + yCoordinate;
    next(id);
    document.getElementById(id).style.borderTop = 'thick solid #00FF00';
  } else if (faceDirection == 'SOUTH' && yCoordinate > 0) {
    prev(id);
    yCoordinate = parseInt(yCoordinate) - 1;
    id = '' + xCoordinate + yCoordinate;
    next(id);
    document.getElementById(id).style.borderBottom = 'thick solid #00FF00';
  } else if (faceDirection == 'EAST' && xCoordinate < 4) {
    prev(id);
    xCoordinate = parseInt(xCoordinate) + 1;
    id = '' + xCoordinate + yCoordinate;
    next(id);
    document.getElementById(id).style.borderRight = 'thick solid #00FF00';
  } else if (faceDirection == 'WEST' && xCoordinate > 0) {
    prev(id);
    xCoordinate = parseInt(xCoordinate) - 1;
    id = '' + xCoordinate + yCoordinate;
    next(id);
    document.getElementById(id).style.borderLeft = 'thick solid #00FF00';
  } else {
    alert('Cannot go forward, please change the direction');
  }
}

function left() {
  if (faceDirection == 'NORTH') {
    faceDirection = 'WEST';
    document.getElementById(id).style.border = 'none';
    document.getElementById(id).style.borderLeft = 'thick solid #00FF00';
  } else if (faceDirection == 'SOUTH') {
    faceDirection = 'EAST';
    document.getElementById(id).style.border = 'none';
    document.getElementById(id).style.borderRight = 'thick solid #00FF00';
  } else if (faceDirection == 'EAST') {
    faceDirection = 'NORTH';
    document.getElementById(id).style.border = 'none';
    document.getElementById(id).style.borderTop = 'thick solid #00FF00';
  } else if (faceDirection == 'WEST') {
    faceDirection = 'SOUTH';
    document.getElementById(id).style.border = 'none';
    document.getElementById(id).style.borderBottom = 'thick solid #00FF00';
  }
}

function right() {
  if (faceDirection == 'NORTH') {
    faceDirection = 'EAST';
    document.getElementById(id).style.border = 'none';
    document.getElementById(id).style.borderRight = 'thick solid #00FF00';
  } else if (faceDirection == 'SOUTH') {
    faceDirection = 'WEST';
    document.getElementById(id).style.border = 'none';
    document.getElementById(id).style.borderLeft = 'thick solid #00FF00';
  } else if (faceDirection == 'EAST') {
    faceDirection = 'SOUTH';
    document.getElementById(id).style.border = 'none';
    document.getElementById(id).style.borderBottom = 'thick solid #00FF00';
  } else if (faceDirection == 'WEST') {
    faceDirection = 'NORTH';
    document.getElementById(id).style.border = 'none';
    document.getElementById(id).style.borderTop = 'thick solid #00FF00';
  }
}

function report() {
  document.getElementById('report').innerHTML =
    'Output: ' + xCoordinate + ',' + yCoordinate + ',' + faceDirection;
}
