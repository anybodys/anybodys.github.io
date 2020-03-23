//BASICS = 'https://docs.google.com/spreadsheets/d/1S1cfyvfCz24ZYhNfutgEEfNcas_MpETWK-kie8O65Iw/edit?usp=sharing';
//BASICS_ID = '1S1cfyvfCz24ZYhNfutgEEfNcas_MpETWK-kie8O65Iw';


//https://docs.google.com/spreadsheets/d/e/2PACX-1vSmUvmuRHAbkX-z5g9X9GhQarRHAbl3eLAdsloGgnBqE7r4dlybe88XJUYJLtH4SFO68nF5hjUPm6jy/pubhtml?gid=0&single=true

//https://spreadsheets.google.com/feeds/cells/  /1/public/values?alt=json-in-script

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
  var combo = '';
  for (var i = 0; i < itemCount; i++) {
    var color = belts[Math.floor(Math.random() * beltI)];
    console.log(color);
    var rand = Math.floor(Math.random() * basicsByBelt[color].length);
    combo += basicsByBelt[color][rand] + '<br/>';
  }
  $('#combo').html(combo);
}
