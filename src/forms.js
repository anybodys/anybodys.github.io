forms = [{
  'say': 'cawtah 1',
  'name': 'kata 1',
},{
  'say': 'cawtah 2',
  'name': 'kata 2',
},{
  'say': 'cawtah 3',
  'name': 'kata 3',
},{
  'say': 'cawtah 4',
  'name': 'kata 4',
},{
  'say': 'pin-yon 1',
  'name': 'pinyon 1',
},{
  'say': 'pin-yon 2',
  'name': 'pinyon 2',
},{
  'say': 'pin-yon 3',
  'name': 'pinyon 3',
},{
  'say': 'pin-yon 4',
  'name': 'pinyon 4',
},{
  'say': 'pin-yon 5',
  'name': 'pinyon 5',
},{
  'say': 'pin-yon 6',
  'name': 'pinyon 6',
},{
  'say': 'pin-yon 7',
  'name': 'pinyon 7',
},{
  'say': 'pin-yon 8',
  'name': 'pinyon 8',
},{
  'say': 'pin-yon 9',
  'name': 'pinyon 9',
},{
  'say': 'pin-yon 10',
  'name': 'pinyon 10',
},{
  'say': 'limp-oh',
  'name': 'limpo',
}];


var msg = new SpeechSynthesisUtterance();

function go() {
  // Pick a random form.
  next_form = forms[Math.floor(Math.random() * forms.length)];
  // Update the DOM.
  $('#form').html(next_form['name']);
  // Say it out loud.
  msg.text = next_form['say'];
  window.speechSynthesis.speak(msg);
  // Schedule the next 'go'.
  setTimeout(go, 10000);
}
