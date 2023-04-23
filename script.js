const origArray = [2, 3, 4];
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("Box1").value = origArray[0];
  document.getElementById("Box2").value = origArray[1];
  document.getElementById("Box3").value = origArray[2];

  document.getElementById("Square").addEventListener("click", function() {
    const squareArray = origArray.map(function(num) {
      return Math.pow(num, 2);
    });
    document.getElementById("Box1").value = squareArray[0];
    document.getElementById("Box2").value = squareArray[1];
    document.getElementById("Box3").value = squareArray[2];
  });
  
  document.getElementById("Cube").addEventListener("click", function() {
    document.getElementById("Box1").value = Math.pow(origArray[0], 3);
    document.getElementById("Box2").value = Math.pow(origArray[1], 3);
    document.getElementById("Box3").value = Math.pow(origArray[2], 3);
  });
  document.getElementById("To the Fourth").addEventListener("click", fourthPower);
});

function fourthPower() {
  document.getElementById("Box1").value = Math.pow(origArray[0], 4);
  document.getElementById("Box2").value = Math.pow(origArray[1], 4);
  document.getElementById("Box3").value = Math.pow(origArray[2], 4);
}