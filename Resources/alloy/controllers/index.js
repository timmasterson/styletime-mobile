function Controller() {
    function doClick(e) {
        var controller = Alloy.createController("admin_login");
        controller.getView().open();
    }
    function changeTheFrikkenLabel(zString) {
        $.findasalonlabel.setText("zString");
        alert("SHOULD HAVE CHANGED IT!  GAH");
    }
    function getNames() {
        var url = "http://styletime.herokuapp.com/testNames.json", client = Ti.Network.createHTTPClient({
            onload: function(e) {
                var names = eval("(" + this.responseText + ")"), nameOne = names.people[1].firstName + " " + names.people[1].lastName;
                changeTheFrikkenLabel(nameOne);
            },
            onerror: function(e) {
                alert(e.error);
                alert("error");
            },
            timeout: 5000
        });
        client.open("GET", url);
        client.send();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.index = A$(Ti.UI.createWindow({
        navBarHidden: !0,
        layout: "vertical",
        id: "index",
        backgroundColor: "white",
        fullscreen: "true"
    }), "Window", null);
    $.addTopLevelView($.__views.index);
    $.__views.home_header = A$(Ti.UI.createView({
        backgroundColor: "#000000",
        top: 0,
        left: 0,
        width: "100%",
        height: "10%",
        id: "home_header"
    }), "View", $.__views.index);
    $.__views.index.add($.__views.home_header);
    $.__views.headerlabel = A$(Ti.UI.createLabel({
        margin: "auto",
        text: "StyleTime",
        color: "#fff",
        font: {
            fontSize: "24dp"
        },
        id: "headerlabel"
    }), "Label", $.__views.home_header);
    $.__views.home_header.add($.__views.headerlabel);
    $.__views.findasalonlabel = A$(Ti.UI.createLabel({
        top: 200,
        margin: "auto",
        color: "#000",
        font: {
            fontSize: "30dp"
        },
        id: "findasalonlabel",
        text: "temp"
    }), "Label", $.__views.index);
    $.__views.index.add($.__views.findasalonlabel);
    $.__views.locationsearchbutton = A$(Ti.UI.createButton({
        id: "locationsearchbutton",
        title: "By City & State"
    }), "Button", $.__views.index);
    $.__views.index.add($.__views.locationsearchbutton);
    $.__views.keywordsearchview = A$(Ti.UI.createView({
        width: 350,
        height: 60,
        layout: "horizontal",
        backgroundColor: "green",
        id: "keywordsearchview"
    }), "View", $.__views.index);
    $.__views.index.add($.__views.keywordsearchview);
    $.__views.keywordtextField = A$(Ti.UI.createTextField({
        color: "#336699",
        width: 200,
        height: 60,
        borderColor: "blue",
        id: "keywordtextField"
    }), "TextField", $.__views.keywordsearchview);
    $.__views.keywordsearchview.add($.__views.keywordtextField);
    $.__views.keywordsearchbutton = A$(Ti.UI.createButton({
        title: "Go",
        id: "keywordsearchbutton"
    }), "Button", $.__views.keywordsearchview);
    $.__views.keywordsearchview.add($.__views.keywordsearchbutton);
    $.__views.adminloginbutton = A$(Ti.UI.createButton({
        top: 10,
        margin: "auto",
        id: "adminloginbutton",
        title: "Admin Login"
    }), "Button", $.__views.index);
    $.__views.index.add($.__views.adminloginbutton);
    doClick ? $.__views.adminloginbutton.on("click", doClick) : __defers["$.__views.adminloginbutton!click!doClick"] = !0;
    $.__views.jsonlabel = A$(Ti.UI.createLabel({
        top: 100,
        color: "black",
        id: "jsonlabel"
    }), "Label", $.__views.index);
    $.__views.index.add($.__views.jsonlabel);
    $.__views.__alloyId0 = A$(Ti.UI.createLabel({
        id: "__alloyId0"
    }), "Label", $.__views.index);
    $.__views.index.add($.__views.__alloyId0);
    exports.destroy = function() {};
    _.extend($, $.__views);
    getNames();
    $.index.open();
    __defers["$.__views.adminloginbutton!click!doClick"] && $.__views.adminloginbutton.on("click", doClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A, $model;

module.exports = Controller;