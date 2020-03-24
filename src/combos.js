belts = [];
basicsByBelt = {};


function loadData(json) {
  var ss = json.feed.entry;
  for(var i=0; i<ss.length; i++) {
    var cell = ss[i]["gs$cell"];

    if (cell.row === '1') {
      belts.push(cell['$t']);
      continue;
    }

    var beltRank = belts[cell.col - 1];
    var basics = basicsByBelt[beltRank];
    if (basics === undefined) {
      basics = [];
      basicsByBelt[beltRank] = basics;
    }
    basics.push(cell['$t']);
  }
}


function generate(rank, itemCount) {
  var beltI = belts.indexOf(rank);
  var selected = []
  while (selected.length < itemCount) {
    var color = belts[Math.floor(Math.random() * beltI)];
    console.log(color);
    var rand = Math.floor(Math.random() * basicsByBelt[color].length);
    var newBasic = basicsByBelt[color][rand];
    if (selected.indexOf(newBasic) === -1) {
      selected.push(newBasic);
    }
  }
  $('#combo').html(selected.join('<br>'));
}
