// var words = JSON.parse(words);
// var words = words;
console.log(words.events.length);

var el = document.getElementById("futureEvents");
if(!!el){
  let events = words.events;
  console.log(events.length);
  for (var i = 0; i < events.length; i++) {
    let event = events[i];
    let past = (event.past == "true") ? true : false;
    console.log(event.past + "past: " + past);
    // var divElement = el.firstChild;
    if(past){
      var divElement = document.getElementById("blankPastEvent");
    } else{
      var divElement = document.getElementById("blankEvent");
    }
    console.log(divElement);
    var clone = divElement.cloneNode(true);
    clone.id = "event" + i;
    clone.classList.remove("hide1");
    let eventArr=["title","details","place","date","time"];
    for (var j = 0; j < eventArr.length; j++) {
      let attribute = eventArr[j];
      let value = clone.querySelectorAll('[event="'+attribute+'"]')[0];
      value.innerHTML = event[attribute];
    }
    console.log(clone);
    if(past){
      document.getElementById("pastEvents").appendChild(clone);
    } else{
      el.appendChild(clone);
    }

  }

}


let changes = document.querySelectorAll('[change]');
let originalWords = {};
for(var i=0; i<changes.length; i++){
  let c = changes[i];
  let val = c.innerHTML;
  // console.log("c: " + c.innerHTML);
  let attribute = c.getAttribute('change')
  // console.log("a: " + attribute);
  originalWords[attribute] = val;
}

console.log("words = " + JSON.stringify(originalWords));
console.log("words");
for(w in words){
  let element = document.querySelectorAll('[change="' + w + '"]');
  if(!!element[0]){
    element[0].innerHTML = words[w];
    console.log("= " + element[0].innerHTML);
    if(w == "compare-22-h" && !!words[w]){
      document.getElementsByClassName("hide1")[0].classList.remove("hide1");
    }
    if(w == "compare-26-h" && !!words[w]){
      document.getElementsByClassName("hide2")[0].classList.remove("hide2");
    }
    if(w == "compare-30-h" && !!words[w]){
      document.getElementsByClassName("hide3")[0].classList.remove("hide3");
    }
    if(w == "compare-34-h" && !!words[w]){
      document.getElementsByClassName("hide4")[0].classList.remove("hide4");
    }
  }
}
