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
	alert("Inside initialize");
        //this.onDeviceReady();
		document.addEventListener(
			"deviceready",
			this.onDeviceReady(this),
			false
        );
	},
	// deviceready Event Handler
	onDeviceReady: function() {
		alert("Inside onDeviceReady");
		this.receivedEvent("deviceready");
	},
	
	// Update DOM on a Received Event
	receivedEvent: function(id) {
		
        
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
                x.setAttribute("height", "100");
                x.setAttribute("alt", "flag of "+country);
                document.getElementById("flagContainer").appendChild(x);
                document.getElementById("CountryName").innerHTML = country+":";
				document.getElementById("results-deathsToday").innerHTML = data.todayDeaths+" deaths reported today.";
				document.getElementById("results-casesToday").innerHTML = data.todayCases + " cases reported today";
                document.getElementById("results-totalCases").innerHTML = "Total case to date for " + country + " is " + data.cases;
                document.getElementById("results-totalDeaths").innerHTML = "Total deaths to date for " + country + " is " + data.deaths;
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
			
			//Call to read in the country and turn this into a covid19 report
			covidStatsObject.update = function (){
				var country = get_name_value("country", "France");
				updateStats(country);
			}
			
			//return the intialised object
			return covidStatsObject;
		}
		
		 
		//Create the object, visible in the HTML file as app.covid19
		app.covid19 = new COVID19Stats();
	}
};
alert("hello");
app.initialize();
