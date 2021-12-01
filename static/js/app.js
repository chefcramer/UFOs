//11.2.4 
//import the data from data.js
const tableData = data;

//reference the HTML table using d3
var tbody = d3.select("tbody");

//11.5.1
function buildTable(data) {
    //clearing out any existing data
    tbody.html("");
    //dataRow is a paramater that will be used as a value when the function is called
    data.forEach((dataRow) => {
        //telling javascript to find the tbody tag with in the HTML and add a table row (tr)
        //each tr tag is used for each row in a table (in the html)
        let row = tbody.append("tr");
        //object.value were telling javascript to reference one object from the array of UFO sightings
        //by adding datarow as the arguement we are saying that we want the values to go into the datarow
        //we added foreach(val) to specify that we want one object per row
        Object.values(dataRow).forEach((val) => {
            // with this line we set up the action of appending data into a table data tag (td)
            let cell = row.append("td");
            //extracting only the text of the value
            cell.text(val);
            }
        );
    });
    // weve done the following in this function, looped through each object in the array appended a row to the HTML table, added each value from the object into a cell
}

//11.5.3
function handleClick() {
    // d3.select #datetime is telling d3 to look for the #datetime id in the html tags
    // cahining property(value) to the d3 select weret elling d3 to look for where out date values are stored and actually grab that infor and hold it in the date variable
    let date = d3.select("#datetime").property("value");
    //tabledata is the original data imported from the data.js file above
    //by setting our filtereddata equal to the raw data were basically using it as a blank slate
    let filteredData = tableData;
    // if (a date is entered) {filter the default data to show only the date entered}
    // === is strict equality (they have to match exactly), == is loose equality
    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
    };
    // rebuild the table using the filtered data, using the buildTable function we created above
    // if no date is entered then the filtereddata will be just the original tabledata
    buildTable(filteredData);
}

//this is telling d3 to look for any activity on the tag #filter-btn in the HTML (.on(click)) and if it detects a click, to run the handleClick function we built
d3.selectAll("#filter-btn").on("click", handleClick);

//this makes sure that a table is loaded as soon as the page loads, so they can see the data before they use the filter we've set up
buildTable(tableData);