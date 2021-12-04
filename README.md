# UFOs
Module 11 UFO Sightings with JavaScript
## Overview
This purpose of this project was to create a responsive website that filters a large data set of UFO sightings. There are 5 available search criteria, by Date, City, State, Country and The Shape of the UFO. The search bars are set to the default of; January 1st 2010, the city of aspen, state of colorado, country US, and the UFO shape of chevron.

![search_bars](https://github.com/chefcramer/UFOs/blob/main/write%20up%20resources/search%20boxes.PNG)

## Results
Using this website is fairly intuitive. You simply enter which ever variable you want into the correct search bar, and the code we wrote will fill in the proper information on the table.
- In this instance, the city of aspen has been entered into the search bar, and the enter key is pressed to run the program. The program filters the data for any entry where the city equals 'aspen'.

![aspen](https://github.com/chefcramer/UFOs/blob/main/write%20up%20resources/aspen%20search.PNG)

- In this instance, the state of co (colorado) has been entered into the state search bar. The program filters the data and finds all of the entries that have 'co' as the state value.

![colorado](https://github.com/chefcramer/UFOs/blob/main/write%20up%20resources/colorado%20search.%20PNG.PNG)

## Summary
Unfortunately there are several drawbacks to this design. 
- All of the search criteria are case sensitive. For instance if the in the city search above, if we used "Aspen" instead of "aspen", no data would be displayed.
- The website is not self resetting. Once the site performs a search, the page must be manually reloaded. This also applies if a search is entered incorrectly, the whole page must be reloaded.

Further Development opportunities;
- Add functionality to the search peramiters to accept all forms of text, capital and lower case letters.
- Add a clear search button that would clear all of the search bars and reset the data in the table to the default, and prepare the site to accept new input **-OR-** Add functionality that when the user clicks on a search bar after successfully completing a search, the site would automatically reload and be ready to accept new input.
