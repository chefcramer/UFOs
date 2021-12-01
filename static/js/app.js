//11.2.4 
//import the data from data.js
const tableData = data;

//reference the HTML table using d3
var tbody = d3.select("tbody");

//11.5.1
function buildTable (data){
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