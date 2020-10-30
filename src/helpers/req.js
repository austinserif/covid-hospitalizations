const $ = require('jquery');

var data = {
    resource_id: '42d33765-20fd-44b8-a978-b083b7542225', // the resource id
    limit: 5, // get 5 results
    q: 'jones' // query for 'jones'
};



$.ajax({
    url: 'https://data.ca.gov/api/3/action/datastore_search',
    data: data,
    dataType: 'jsonp',
    success: function(data) {
        alert('Total results found: ' + data.result.total)
    }
});