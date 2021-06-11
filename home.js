//duplicates flex card

document.getElementById('duplicateCard').onclick = duplicate;

var i = 0;
var original = document.getElementById('flexCard');

function duplicate() {
    var clone = original.cloneNode(true); // "deep" clone
    clone.id = "flexCard" + ++i; // there can only be one element with an ID
    original.parentNode.appendChild(clone);
}
