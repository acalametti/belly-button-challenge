//Use D3 library to read in samples.json data 
d3.json('./samples.json').then(({names}) => {
    names.forEach(name => {
        d3.select('select').append('option').text(name)
    });
    optionChanged();
});

const optionChanged = () => {
    d3.json('./samples.json').then(({metadata,samples}) => {

        let id = d3.select('select').node().value;
        let meta = metadata.find(obj => obj.id == id);
        let { otu_ids, sample_values, otu_labels} = samples.find(obj => obj.id == id);

        d3.select('.panel-body').html('');
        Object.entries(meta).forEach(([key,val])=> {
            d3.select('.panel-body').append('h4').text(`${key.toUpperCase()}: ${val}`);
        });

        var data = [
            {
              x: sample_values.slice(0,10).reverse(),
              y: otu_ids.slice(0,10).reverse().map(x => `OTU ${x}`),
              text: otu_labels.slice(0,10).reverse(),
              type: 'bar',
              orientation: 'h'
            }
          ];
          
          Plotly.newPlot('bar', data);

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

        
    });
};


