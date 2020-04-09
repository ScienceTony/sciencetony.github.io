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
                document.getElementById("lastUpdated").innerHTML = d;
            }      
			var uri = "https://corona.lmao.ninja/all";
            $.get(uri,onSuccess); 
        }    
        
        function sort(request) {
                var onSuccess = function(data){
                 
                if (request == "deaths" ) {
                    document.getElementById("sortFilter").innerHTML = "deaths"
                    $.each(data, function(index) {
                     if (index < 6) {document.getElementById("results-"+index.toString()).innerHTML = data[index].country;
                    document.getElementById("resultsValue-"+index.toString()).innerHTML = data[index].deaths;
                    document.getElementById("index"+index.toString()).innerHTML = index + 1 + ".&nbsp;";   
                    }else{ return false}
                       
                });
                } 
                
                if (request == "recovered" ) {
                   document.getElementById("sortFilter").innerHTML = "recoveries"
                    $.each(data, function(index) {
                     if (index < 6){ document.getElementById("results-"+index.toString()).innerHTML = data[index].country;
                    document.getElementById("resultsValue-"+index.toString()).innerHTML = data[index].recovered;
                    document.getElementById("index"+index.toString()).innerHTML = index + 1 + ".&nbsp;"; 
                    }else{return false}
                        
                });
                }
                
                if (request == "tests" ) {
                    document.getElementById("sortFilter").innerHTML = "tests"
                    $.each(data, function(index) {
                     if (index < 6) {document.getElementById("results-"+index.toString()).innerHTML = data[index].country;
                    document.getElementById("resultsValue-"+index.toString()).innerHTML = data[index].tests;
                     document.getElementById("index"+index.toString()).innerHTML = index + 1 + ".&nbsp;"; 
                    }else{return false}
                        
                });
                }
				
               
               
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
			var uri = "https://corona.lmao.ninja/countries/"+country;

			if (country != "") 
                $.get(uri,onSuccess);

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
 
                sort("deaths");
			}
            
            covidStatsObject.sortByRecoveries = function (){
				sort("recovered");
			}
            
            covidStatsObject.sortByTests = function (){
				sort("tests");
			}
            
            covidStatsObject.stats = function(){
                //if (timerId) clearInterval(timerId);
                timerId = setInterval(worldStats, 600000); 
                worldStats();
            }
			
			//return the intialised object
			return covidStatsObject;
		}

		//Create the object, visible in the HTML file as app.covid19
		app.covid19 = new COVID19Stats();
	}
};
app.initialize();
app.covid19.stats(); 
