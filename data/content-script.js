function replace() {
  var seenElems = document.getElementsByClassName('seen');

  for (var i = 0; i < seenElems.length; ++i) {
    console.log("i");
    var seen = seenElems[i].firstChild.nextSibling.firstChild;
    seen.nodeValue = seen.nodeValue.replace('Seen', 'Violently Rejected');
  }
}

setInterval(replace, 100);
