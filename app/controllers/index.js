function doClick(e) {  
	var controller = Alloy.createController('admin_login');
	controller.getView().open();
};

//$.findasalonlabel.setText("zString");

function changeTheFrikkenLabel(zString) {
	$.findasalonlabel.setText("zString");
	alert("SHOULD HAVE CHANGED IT!  GAH");
};

function getNames() {
	
	var url = "http://styletime.herokuapp.com/testNames.json";
 	var client = Ti.Network.createHTTPClient({
     // function called when the response data is available
     	onload : function(e) {
        	//alert("Received text: " + this.responseText);
        	var names = eval('('+this.responseText+')');
         	//alert('success');
         	var nameOne = names.people[1].firstName + " " + names.people[1].lastName;
			changeTheFrikkenLabel(nameOne);
			//
     	},
     	// function called when an error occurs, including a timeout
     	onerror : function(e) {
        	alert(e.error);
         	alert('error');
     	},
     	timeout : 5000  // in milliseconds
 	});
 	// Prepare the connection.
 	client.open("GET", url);
 	// Send the request.
 	client.send(); 
}

getNames();

//var txt = '{"people":[{"firstName":"JT","lastName":"Blalock" }, {"firstName":"Tim","lastName":"Masterson" },{"firstName":"Fred","lastName":"Flintstone" }]}';

$.index.open();