function Controller() {
    function doClick(e) {
        $.admin_login.close();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.admin_login = A$(Ti.UI.createWindow({
        navBarHidden: !0,
        layout: "vertical",
        id: "admin_login",
        backgroundColor: "white",
        fullscreen: "true"
    }), "Window", null);
    $.addTopLevelView($.__views.admin_login);
    $.__views.home_header = A$(Ti.UI.createView({
        backgroundColor: "#000000",
        top: 0,
        left: 0,
        width: "100%",
        height: "10%",
        id: "home_header"
    }), "View", $.__views.admin_login);
    $.__views.admin_login.add($.__views.home_header);
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
    $.__views.adminloginlabel = A$(Ti.UI.createLabel({
        top: 200,
        margin: "auto",
        text: "Enter your credentials:",
        color: "#000",
        font: {
            fontSize: "30dp"
        },
        id: "adminloginlabel"
    }), "Label", $.__views.admin_login);
    $.__views.admin_login.add($.__views.adminloginlabel);
    $.__views.adminbackbutton = A$(Ti.UI.createButton({
        id: "adminbackbutton",
        title: "Back"
    }), "Button", $.__views.admin_login);
    $.__views.admin_login.add($.__views.adminbackbutton);
    doClick ? $.__views.adminbackbutton.on("click", doClick) : __defers["$.__views.adminbackbutton!click!doClick"] = !0;
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.adminbackbutton!click!doClick"] && $.__views.adminbackbutton.on("click", doClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A, $model;

module.exports = Controller;