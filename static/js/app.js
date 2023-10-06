//Use D3 library to read in samples.json data 
d3.json('./samples.json').then(({names}) => {
    names.forEach(name => {
        d3.select('select').append('option').text(name)
    });
    optionChanged();
});

//use optionChanged as const to create visualizations
const optionChanged = () => {
    d3.json('./samples.json').then(({metadata,samples}) => {

        //create dropdown menu containing all sample ids
        let id = d3.select('select').node().value;
        let meta = metadata.find(obje => obje.id == id);
        let { otu_ids, sample_values, otu_labels} = samples.find(obje => obje.id == id);

        //create demographic info table with key-value pair
        d3.select('.panel-body').html('');
        Object.entries(meta).forEach(([key,val])=> {
            d3.select('.panel-body').append('h4').text(`${key.toUpperCase()}: ${val}`);
        });

        //create horizontal bar chart with dropdown menu
        var data = [
            {//
              x: sample_values.slice(0,10).reverse(),
              y: otu_ids.slice(0,10).reverse().map(x => `OTU ${x}`),
              text: otu_labels.slice(0,10).reverse(),
              type: 'bar',
              orientation: 'h'
            }
          ];
          
          Plotly.newPlot('bar', data);


        // create bubble chart to display each sample
          var trace1 = {
            x: otu_ids,
            y: sample_values,
            mode: 'markers',
            marker: {
              size: sample_values,
              color: otu_ids,
              colorscale: 'Earth'
            },
            text : otu_labels
          };
          
          var data = [trace1];
          Plotly.newPlot('bubble', data); 
          
        //create gauge to display washing frequency 
        var trace2 = [
          {
            type: 'pie',
            showlegend: false,
            hole: 0.5,
            rotation: 90,
            values: [18/9, 18/9, 18/9, 18/9, 18/9, 18/9, 18/9, 18/9, 18/9, 18],
            text: ["0-1","1-2","2-3","3-4","4-5","5-6","6-7","7-8","8-9",""],
            textinfo: "text",
            textposition: 'inside',
            direction: 'clockwise',
            labels: ["","","","","","","","","",""],
            marker: {
              colors:["rgba(236,242,233,1)", "rgba(198,216,191,1)","rgba(179,204,170,1)",
              "rgba(160,191,149,1)","rgba(142,179,129,1)", "rgba(123,166,109,1)", "rgba(104,154,90,1)",
              "rgba(85,141,70,1)","rgba(65,129,51,1)","white"]},
            hoverinfo: "text",
            title: { text: "Belly Button Washing Frequency"},
          }
        ];

        //create needle for the number of washes
        var degrees = (180/9) * meta.wfreq;
        var radius = 0.5;
        var radian = degrees * Math.PI/180;
        var x = -1 * radius * Math.cos(radian);
        var y = radius * Math.sin(radian);
        
        //add layout for the gauge
        var layout = { 
          shapes: [{
            type: "line",
            x0: 0.5,
            y0: 0.5,
            x1: x + 0.5,
            y1: y + 0.5,
            line: {
              color: 'black',
              width: 2.5,
              
            }
          }],
          width: 600, 
          height: 500, 
          margin: { t: 0, b: 0 } 
        };
        
        var data = [trace2];
      
        Plotly.newPlot('gauge', trace2, layout);
    }
    );
  };
