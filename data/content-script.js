function replace() {
  var seenElems = document.getElementsByClassName('seen');

  for (var i = 0; i < seenElems.length; ++i) {
    console.log("i");
    var seen = seenElems[i].firstChild.nextSibling.firstChild;
    seen.nodeValue = seen.nodeValue.replace('Seen', 'Scorned');
  }
}

setInterval(replace, 100);
