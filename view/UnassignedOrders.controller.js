sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
], function(Controller, Filter, FilterOperator) {
	"use strict";
	return Controller.extend("destlist1.view.UnassignedOrders", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf view.UnassignedOrders
		 */
		onInit: function() {

		},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf view.UnassignedOrders
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf view.UnassignedOrders
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf view.UnassignedOrders
		 */
		//	onExit: function() {
		//
		//	}

		onNavBack: function() {
			this.getRouter().myNavBack("main");
		},

		getRouter: function() {
			return sap.ui.core.UIComponent.getRouterFor(this);
		},
		onSearch: function(e) {
			var filter = [];
			var query = e.getParameter("query");
			if (query) {
				filter.push(new Filter("Address", FilterOperator.Contains, query));
			}
			var table = this.getView().byId("_tableUnassigned");
			table.getBinding("items").filter(filter);
		}
	});
});