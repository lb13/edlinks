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