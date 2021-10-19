function setStyleSource (linkID, sourceLoc) {
    var theLink = document.getElementById(linkID);
    theLink.href = sourceLoc;
  }
  
  document.getElementById("mySelect").addEventListener("change", function(){
      var selected = this.options[this.selectedIndex].value;
      setStyleSource ("s1", selected);
  });
