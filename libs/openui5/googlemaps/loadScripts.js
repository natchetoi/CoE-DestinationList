sap.ui.define(["jquery.sap.global","openui5/googlemaps/ScriptsUtil"],function(a,l){"use strict";var e=function(){var l={};return l.defaultUrl="https://maps.google.com/maps/api/js?",l.notifyEvent="google.maps.loaded",l.callbackName="google.maps.callBack",l.callBack=function(){this.loaded=!0,sap.ui.getCore().getEventBus().publish(this.notifyEvent)},l.load=function(l){var e={},s=l.getParams(),t=s.url?s.url:this.defaultUrl;a.sap.endsWith(t,"?")||(t+="?"),s.v&&(e.v=s.v),e.sensor=s.sensor||!0,s.libraries&&(e.libraries=s.libraries),s.language&&(e.language=s.language),s.key&&(e.key=s.key),e.callback=this.callbackName;var i=t.concat(a.param(e));a.sap.includeScript(i,"google.maps",null,null)},l}();return e.load(l),e},!0);