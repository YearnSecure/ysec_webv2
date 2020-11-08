am4core.ready(function() {

    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    var chart = am4core.create("tokenchart", am4charts.PieChart);

        // Add data
        chart.data = [
          {"name": "Farming", 
          "value": 200000},
          {"name": "Pre-sale", 
          "value": 300000},
          {"name": "Uniswap Liquidity", 
          "value": 197000}, 
          {"name": "Team", 
          "value": 100000}, 
          {"name": "Marketing 1", 
          "value": 50000}, 
          {"name": "Marketing 2", 
          "value": 143000},
          {"name": "LID", 
          "value": 10000,}
        ];

    // Add and configure Series
    var pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "value";
    pieSeries.dataFields.category = "name";

    pieSeries.slices.template.cursorOverStyle = [{
      "property": "cursor",
      "value": "pointer"
    }];
    
    pieSeries.ticks.template.disabled = true;
    pieSeries.alignLabels = false;
    pieSeries.labels.template.text = "{value.percent.formatNumer('#.0')}%"
    pieSeries.labels.template.radius = am4core.percent(-40);
    pieSeries.labels.template.fill = am4core.color("white");
    
    // Create a base filter effect (as if it's not there) for the hover to return to
    var shadow = pieSeries.slices.template.filters.push(new am4core.DropShadowFilter);
    shadow.opacity = 0;
    
    // Create hover state
    var hoverState = pieSeries.slices.template.states.getKey("hover"); // normally we have to create the hover state, in this case it already exists
    
    // Slightly shift the shadow and make it more prominent on hover
    var hoverShadow = hoverState.filters.push(new am4core.DropShadowFilter);
    hoverShadow.opacity = 0.7;
    hoverShadow.blur = 5;

    // animation
    pieSeries.hiddenState.properties.opacity = 1;
    pieSeries.hiddenState.properties.endAngle = -90;
    pieSeries.hiddenState.properties.startAngle = -90;
    
    chart.hiddenState.properties.radius = am4core.percent(0);
    
    chart.responsive.enabled = true;
    
pieSeries.colors.list = [
  am4core.color("#152494"),
  am4core.color("#1c7aed"),
  am4core.color("#06254B"),
  am4core.color("#FD9842"),
  am4core.color("#0E54AA"),
  am4core.color("#1A71DB"), 
  am4core.color("#6DA7EE"),
];

    }); // end am4core.ready()