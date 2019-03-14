// from data.js
var tableData = data;

// This is really a function called renderTable()
let tBody = d3.select('tbody');

data.map(ufo_sighting => {
    let newTr = tBody.append('tr');
    Object.values(ufo_sighting).forEach(x => {
        newTr.append('td').text(x);
    })
});

d3.select("#filter-btn").on('click', function(e) {
    d3.event.preventDefault();
    console.log('clicked');
    let dateVal = d3.select('#datetime').node().value;

    // call render table with dateVal
    // use an array filter method
    // to get teh value in the form field 
    // and filter the array of objects against it 
});