// This code is adapated from Chris Grangers ChromaShift.
// https://github.com/ibdknox/ChromaShift/blob/master/js/input.js
// It has been modified to return a keyboard state instead of
// getting queried for a key state.

var active = {}

// Maps Keywords to keycode
var keyMap = {
  37: "left",
  38: "up",
  39: "right",
  40: "down",
  90: "z",
  32: "space"
}

var state = function() {
  return active
}

// TODO: Make sure this is cross
window.addEventListener("keydown", function(e) {
  if(e.keyCode in keyMap) {
    e.preventDefault();
    active[keyMap[e.keyCode]] = true;
  }
})

window.addEventListener("keyup", function(e) {
  if(e.keyCode in keyMap) {
    e.preventDefault();
    delete active[keyMap[e.keyCode]];
  }
})

module.exports = {
  state: state
}
