// from data.js
// var tableData = data;

// This is really a function called renderTable()
var tBody = d3.select('tbody');
var button = d3.select("#filter-btn");
var enterDate = d3.select('#datetime');
var enterCity = d3.select('#city');
var enterState = d3.select('#state');
var enterCountry = d3.select('#country');
var enterShape = d3.select('#shape');


function populate(dataInput){
    dataInput.map(ufo_sighting => {
        var newTr = tBody.append('tr');
        Object.values(ufo_sighting).forEach(sighting => {
            newTr.append('td').text(sighting);
        })
    })
}

populate(data);

// when the 'filter table' button is pressed...
button.on('click', () => {
    d3.selectAll("tbody>tr").remove();
    d3.event.preventDefault();
    console.log('clicked');

    // capture the date in the 'enter a date' field to filter table
    let capturedDate = enterDate.node().value.trim();
    console.log(capturedDate);

    // capture the city in the 'enter a city' field to filter table
    var capturedCity = enterCity.node().value.toLowerCase().trim();
    console.log(capturedCity);

    // capture the state in the 'enter a state' field to filter table
    var capturedState = enterState.node().value.toLowerCase().trim();
    console.log(capturedState);

    // capture the country in the 'enter a country' field to filter table
    var capturedCountry = enterCountry.node().value.toLowerCase().trim();
    console.log(capturedCountry);

    // capture the shape in the 'enter a shape' field to filter table
    var capturedShape = enterShape.node().value.toLowerCase().trim();
    console.log(capturedShape);


/// filtering the table by the captured variables
    //  captured date
    var filterDate = data.filter(data => data.datetime === capturedDate);
    console.log(filterDate);
    
    // captured city
    var filterCity = data.filter(data => data.city === capturedCity);
    console.log(filterCity);

    // captured state
    var filterState = data.filter(data => data.state === capturedState);
    console.log(filterState);

    // captured country 
    var filterCountry = data.filter(data => data.country === capturedCountry);
    console.log(filterCountry);

    // captured shape
    var filterShape = data.filter(data => data.shape === capturedShape);
    console.log(filterShape);

    if (filterDate.length !== 0) {
        populate(filterDate);
        console.log(filterDate.length);
    }
});
