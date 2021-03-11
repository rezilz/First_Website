// set up text to print, each item in array is new line
var aText = new Array(
    "Hi there..",
    "Welcome back again to my website. :)",
    "I'm so glad that you're here again.",
    "So, What do you think about my first personal website?",
    " . . . . . . . . . . . . . . . .<br>",
    "I want it to look kind of simple. ",
    "Cause simple is the best.",
    "","As ever, this website would be kind of simple again. :P","Nothing noticeable..",
    "So not get bored :(","","To explore more about me, <a style='color:black;', href='../intro.html'>click me</a>."
    );
    var iSpeed = 70; // time delay of print out
    var iIndex = 0; // start printing array at this posision
    var iArrLength = aText[0].length; // the length of the text array
    var iScrollAt = 20; // start scrolling up at this many lines
     
    var iTextPos = 0; // initialise text position
    var sContents = ''; // initialise contents variable
    var iRow; // initialise current row
     
    function typewriter()
    {
     sContents =  ' ';
     iRow = Math.max(0, iIndex-iScrollAt);
     var destination = document.getElementById("typedtext");
     
     while ( iRow < iIndex ) {
      sContents += aText[iRow++] + '<br />';
     }
     destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
     if ( iTextPos++ == iArrLength ) {
      iTextPos = 0;
      iIndex++;
      if ( iIndex != aText.length ) {
       iArrLength = aText[iIndex].length;
       setTimeout("typewriter()", 500);
      }
     } else {
      setTimeout("typewriter()", iSpeed);
     }
    }

    typewriter();
