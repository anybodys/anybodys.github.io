function generate(rank) {
  var beltI = belts.indexOf(rank);
  var selected = []
  while (selected.length < localStorage.getItem('itemCount')) {
    var color = belts[Math.floor(Math.random() * beltI)];
    var rand = Math.floor(Math.random() * basicsByBelt[color].length);
    var newBasic = basicsByBelt[color][rand];
    if (selected.indexOf(newBasic) === -1) {
      selected.push(newBasic);
    }
  }
  $('#combo').html(selected.join('<br>'));
}


function setNum() {
  // Clear current primary.
  $('#settings #numTechniques .primary').removeClass('primary');
  // Set new primary.
  this.classList.add('primary');
  // Save the settings.
  localStorage.setItem('itemCount', parseInt(this.textContent));
}

function setSettings() {
  var settings = $('#settings');

  // First (and only, atm) setting: number of techinques to generate.
  var numTechniques = settings.find('#numTechniques');
  var itemCount = localStorage.getItem('itemCount') || 3;
  var buttons = numTechniques.find('.button');
  for (var i = 0; i < buttons.length; i++) {
    var b = buttons[i];
    b.onclick = setNum;
    bNum = parseInt(b.textContent);
    if (bNum == itemCount) {
      b.click();
    }
  }
}
