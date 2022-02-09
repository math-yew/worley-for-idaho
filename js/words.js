// var words = JSON.parse(words);
// var words = words;

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

// console.log("words = " + JSON.stringify(originalWords));
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
