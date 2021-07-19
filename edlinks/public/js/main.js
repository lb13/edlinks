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


// Navbar search function
function navbarsearch() {
  var results = document.getElementById('navbarresults');
  var list = document.getElementsByClassName('navbarsearchstring');
  var item = document.getElementsByClassName('navbaritem');
  var input = document.getElementById('navbarsearchbox');
  var filter = input.value.toUpperCase();    
  var string;

  if (input.value.length > 0) {
    results.style.display = "block";
  }
  else {
    results.style.display = "none";
  }


  for (i = 0; i < item.length; i++) {

      string = list[i].innerHTML;

      if  (
          string.toUpperCase().indexOf(filter) > -1
          )
      {
        item[i].style.display = "inline-block";
      } else {
        item[i].style.display = "none";
      }
      }

};

// End of navbar search function

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

