# belly-button-challenge

Contributors: Alex Calametti

Overview: 

The main objective of this project was to create an interactive dashboard for users to explore a dataset containing information on the biodiversity of microbes found in human belly buttons. The dataset showed that for most people, a small number of microbial species (operational taxonmoic units, OTUs) were found in most individuals while the rest were more rare. The interactive dashboard allows users to look at metadata for each individual with a demographic info table, bar chart, bubble chart, and gauge. The dashboard can be found at this page: https://acalametti.github.io/belly-button-challenge/

What you need: 

- Dataset: samples.json (http://robdunnlab.com/projects/belly-button-biodiversity/) 

- Programs: HTML, JavaScript, D3.js, Plotly

- Starter code: index.html, apps.js


Project Steps: 

- Read in the samples.json using D3 library so sample information resets whe optionChanged
- Created a dropdown menu that re-populates when a new sample id is selected by user
  
  ![Screen Shot 2023-10-06 at 12 57 50 PM](https://github.com/acalametti/belly-button-challenge/assets/136642574/12819cfa-b290-49bb-80e1-0a5815b726ed)

- Created a bar chart to display the top 10 OTUs present in each individual and the amount of each microbial species found
- Results were sliced and reversed to display in descending order on the horizontal bar chart
  
  ![Screen Shot 2023-10-06 at 12 57 54 PM](https://github.com/acalametti/belly-button-challenge/assets/136642574/bdc446e5-943e-40f6-9ca7-93832954239e)\

-   Created a bubble chart to show the amount of OTUs found in the individual's belly button with hover text feature
-   Bubble chart formatted with otu information on the x-axis and the sample_values on the y-axis

  ![Screen Shot 2023-10-06 at 12 58 03 PM](https://github.com/acalametti/belly-button-challenge/assets/136642574/b0183796-31dd-4055-af5a-4bf9ce08303f)

-   A demographic information table was added to show users more information from the metadata collected in a key-value pair

  ![Screen Shot 2023-10-06 at 12 57 57 PM](https://github.com/acalametti/belly-button-challenge/assets/136642574/fd36b89f-241e-4d92-89fd-aa6a8e5b6b98)

Bonus: 

- A gauge chart was created to show the frequency of belly button washes per week (wfreq) using a pie chart
- To calculate the values for the chart the degrees for a cirlce (360) was divided by two - the bottom half of the pie chart will be hidden- and then 180 was divided by 10 to find the value for each seaction. 18/9 was listed 9 times (equivalent to 18) and the 10th value was listed as 18. This results in a pie chart divided into two sections.
- To make the bottom portion of the pie chart hidden, the color was set to white
- Documentation for how to calculate the chart radius and markers included in the sources section

  ![Screen Shot 2023-10-06 at 12 58 10 PM](https://github.com/acalametti/belly-button-challenge/assets/136642574/c3cb7fbd-4541-45f8-9449-6e05f0a65baf)

Shoutouts

A big thank you to my tutor Geronimo Perez for helping me get started on this project and assisting me in trouble shooting while making these visuals. 

Sources: 

Cccolor: Hex, RGB &amp; HSL Color Picker for HTML &amp; CSS. fffuel. (n.d.). https://fffuel.co/cccolor/ 

Plotly Javascript Open Source Graphing Library. Plotly javascript graphing library in JavaScript. (n.d.). https://plotly.com/javascript/ 

Shokeen, M. (2017, September 22). Create interactive charts using plotly.js, part 5: Pie and gauge charts: Envato tuts+. Code Envato Tuts+. https://code.tutsplus.com/create-interactive-charts-using-plotlyjs-pie-and-gauge-charts--cms-29216t 
