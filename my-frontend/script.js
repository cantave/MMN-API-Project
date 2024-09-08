// Fetch data from the backend
fetch('http://localhost:3000/api/report')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // Parse JSON response
  })
  .then(data => {
    console.log(data); // Log the data for debugging
    
    const commodities = data[1].results;
    if(Array.isArray(commodities)){
        const filteredCommodities = commodities.filter( item => 
            item.commodity === "Peppers, Bell Type" ||  item.commodity === "Tomatoes"
        );

        const ul = document.getElementById('commodity-list');

        filteredCommodities.forEach(item => {
            const li = document.createElement('li');
    
            li.textContent = `Commodity: ${item.commodity}`;
    
            const detailsUl = document.createElement('ul');
    
            const details = {
                "Variety" : item.variety,
                Package : item.package,
                "Low Price" : item.low_price,
                "High Price" : item.high_price,
                Origin : item.origin,
                Environment : item.environment,
                "Item Size" : item.item_size,
                Grade : item.grade,
                Organic : item.organic,
                "Market Tone Comments" : item.market_tone_comments,
                "Offering Comments" : item.offerings_comments,
                "Published Date" : item.published_date
            };
    
            for(const [key, value] of Object.entries(details)) {
                const detailsLi = document.createElement('li');
                detailsLi.textContent = `${key}: ${value || 'N/A'}`;
                detailsUl.appendChild(detailsLi);
            }
    
            li.appendChild(detailsUl);
            ul.appendChild(li);
        });
    } else {
        console.error("Expected an array of commodities, but got:', commodities");
    }
    // // Display the data in the HTML
    // const outputDiv = document.getElementById('data-output');
    // outputDiv.innerHTML = JSON.stringify(data, null, 2);
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
