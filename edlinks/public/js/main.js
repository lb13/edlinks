// Normal search function for desktop interface
function search() {
    var list = document.getElementsByClassName('searchstring');
    var item = document.getElementsByClassName('item');
    var input = document.getElementById('searchbox');
    var filter = input.value.toUpperCase();    
    var string;

  for (i = 0; i < item.length; i++) {

      string = list[i].innerHTML;

      if  (
          string.toUpperCase().indexOf(filter) > -1
          )
      {
        item[i].style.display = "block";
      } else {
        item[i].style.display = "none";
      }
      }
  };
// End of normal search function for desktop interface

function tagToggle() {
  var x = document.getElementById("quicktags");
  var y = document.getElementById("indicator");
  if (x.style.display === "none") {
    x.style.display = "block";
    y.innerHTML = "&#9660;";
  } else {
    x.style.display = "none";
    y.innerHTML = "&#9654;";
  }
};

