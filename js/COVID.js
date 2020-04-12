/***********
 * COVID19 Statistics App
 * 
 * File modified by: (Tony McDonald)
 ************/

/**
 * Utility to get default value from the field name if it was undefined or empty
 * @param {type} fieldName
 * @param {type} defaultValue
 * @returns {jQuery}
 */
function get_name_value(fieldName, defaultValue) {
    "use strict"
  var value = $("#" + fieldName).val();
  if (value == "") {
    value = defaultValue;
    $("#" + fieldName).val(value);
  }
  return value;
}

/**
 * This is the main class
 */
var app = {
	initialize: function() {
        // this.onDeviceReady();
		document.addEventListener(
			"deviceready",
			this.onDeviceReady(this),
			false
        );
	},
	// deviceready Event Handler
	onDeviceReady: function() {
		this.receivedEvent("deviceready");
	},
	
	// Update DOM on a Received Event
	receivedEvent: function(id) {
		
        function worldStats() {
                var onSuccess = function(data){
                var d = new Date();
				// obj = $.parseJSON(data); 
               document.getElementById("affectedCountries").innerHTML = data.affectedCountries; document.getElementById("worldDeathsToday").innerHTML = data.todayDeaths;
                document.getElementById("worldDeathsTotal").innerHTML = data.deaths;
                document.getElementById("worldCasesToday").innerHTML = data.todayCases;
                document.getElementById("worldCasesTotal").innerHTML = data.cases;
                document.getElementById("recovered").innerHTML = data.recovered;
                
                document.getElementById("deathsPerOneMillion").innerHTML = data.deathsPerOneMillion;
                
                document.getElementById("lastUpdated").innerHTML = d;
            }      
			var uri = "https://corona.lmao.ninja/all";
            $.get(uri,onSuccess); 
        }    
        
        function clearTable(numb) {
            var i = 0;
            while (i < 10){
                document.getElementById("resultsValue-"+i.toString()).innerHTML = "";
                document.getElementById("results-"+i.toString()).innerHTML = "";
                document.getElementById("index"+i.toString()).innerHTML = "";
                i++;
            }
        }
        
        function sort(request, numb) {
            var requestedPretty;
            var onSuccess = function(data){
                
                if (request == "deaths" ) {
                    $.each(data, function(index) {
                     if (index < numb) {document.getElementById("results-"+index.toString()).innerHTML = data[index].country;
                    document.getElementById("resultsValue-"+index.toString()).innerHTML = data[index].deaths;
                   requestedPretty = "deaths"; document.getElementById("index"+index.toString()).innerHTML = index + 1 + ".&nbsp;";   
                    }else{ return false}
                       
                });
                } 
                
                if (request == "recovered" ) {
                    $.each(data, function(index) {
                     if (index < numb){ document.getElementById("results-"+index.toString()).innerHTML = data[index].country;
                    document.getElementById("resultsValue-"+index.toString()).innerHTML = data[index].recovered;
                   requestedPretty = "recoveries"; document.getElementById("index"+index.toString()).innerHTML = index + 1 + ".&nbsp;"; 
                    }else{return false}       
                });
                }
                
                if (request == "tests" ) {
                    $.each(data, function(index) {
                     if (index < numb) {document.getElementById("results-"+index.toString()).innerHTML = data[index].country;
                    document.getElementById("resultsValue-"+index.toString()).innerHTML = data[index].tests;
                    requestedPretty = "tests"; document.getElementById("index"+index.toString()).innerHTML = index + 1 + ".&nbsp;"; 
                    }else{return false}
                        
                });
                }
                
                if (request == "deathsPerOneMillion" ) {
                    $.each(data, function(index) {
                     if (index < numb) {document.getElementById("results-"+index.toString()).innerHTML = data[index].country;
                    document.getElementById("resultsValue-"+index.toString()).innerHTML = data[index].deathsPerOneMillion;
                    requestedPretty = "deaths per millon";
                     document.getElementById("index"+index.toString()).innerHTML = index + 1 + ".&nbsp;"; 
                    }else{return false}
                        
                });
                }
			document.getElementById("sortFilter").innerHTML = requestedPretty;
            document.getElementById("tableHeading").innerHTML = "Table showing " + numb + " highest countries by " + requestedPretty + ".";	   
            } 
            
			var uri = "https://corona.lmao.ninja/countries?sort="+request;
            $.get(uri,onSuccess); 
    
        };   
        
        var x = document.createElement("IMG");
		/**
		 * Updates the html page with the statistics from the requested country
		 * @param {type} country
		 * @returns {undefined}
		 */
		function updateStats(country) {
			//app_id=  ""; 	
			//app_code= "";  

			/* Invoke the RESTful API to get the data */
			var onSuccess = function(data){
                
                if (data.country != ""){
				// obj = $.parseJSON(data);
                
                x.setAttribute("src", data.countryInfo.flag);
                x.setAttribute("width", "auto");
                x.setAttribute("height", "130");
                x.setAttribute("alt", "flag of "+country);
                document.getElementById("flagContainer").appendChild(x);
                document.getElementById("CountryName").innerHTML = country+":";
				document.getElementById("results-deathsToday").innerHTML = data.todayDeaths;
				document.getElementById("results-casesToday").innerHTML = data.todayCases;
                document.getElementById("results-totalCases").innerHTML = data.cases;
                document.getElementById("results-totalDeaths").innerHTML = data.deaths;
                document.getElementById("results-critical").innerHTML = "People in "+ country +" in a critical condition " + data.critical;
			}else{
                alert("Something went wrong! " + country + " is not a valid country name.")
            }
            }
			// Post the country using the "countries" API
            var onSuccess2 = function(data){
                if (data.country != ""){
                
                document.getElementById("results-deathsYesterday").innerHTML = data.todayDeaths;
                document.getElementById("results-casesYesterday").innerHTML = data.todayCases;
            }
            }
			var uri = "https://corona.lmao.ninja/countries/"+country;
            var uri2 = "https://corona.lmao.ninja/yesterday/"+country;
            
			if (country != "") {
                $.get(uri,onSuccess);
                $.get(uri2,onSuccess2);
            }

		}

		// This function creates the public interface to covid19, these fuctions may be called 
		// by the JavaScript in the HTML file.
		function COVID19Stats(){
		
			// These varibles are private
			var covidStatsObject = {};
			
			//Call to read in the address and turn this into a report
			covidStatsObject.update = function (){
				var country = get_name_value("country", "United Kingdom");
				updateStats(country);
			}
            
            covidStatsObject.sortByDeaths = function (){
                var numb = get_name_value("numb", 5);
                if (numb >2 && numb <11){
                clearTable();
                sort("deaths", numb);
                }else{
                    alert("Please enter a number between 3 and 10.")
                }
			}
            
            covidStatsObject.sortByRecoveries = function (){
                var numb = get_name_value("numb", 5);
                if (numb >2 && numb <11){
                clearTable();
				sort("recovered", numb);
                }else{
                    alert("Please enter a number between 3 and 10.")
                }
			}
            
            covidStatsObject.sortByTests = function (){
				var numb = get_name_value("numb", 5);
                if (numb >2 && numb <11){
                clearTable();
				sort("tests", numb);
                }else{
                    alert("Please enter a number between 3 and 10.")
                }
			}
            
            covidStatsObject.sortByPerMil = function (){
				var numb = get_name_value("numb", 5);
                if (numb >2 && numb <11){
                clearTable();
				sort("deathsPerOneMillion", numb);
                }else{
                    alert("Please enter a number between 3 and 10.")
                }
			}
            
            covidStatsObject.stats = function(){
                //if (timerId) clearInterval(timerId);
                timerId = setInterval(worldStats, 6e4); 
                worldStats();
            }
			
			//return the intialised object
			return covidStatsObject;
		}

		//Create the Weather object, visible in the HTML file as app.weather
		app.covid19 = new COVID19Stats();
	}
};
app.initialize();
app.covid19.stats(); 
