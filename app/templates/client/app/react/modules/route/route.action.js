'use strict';

var Dispatcher = require('../../lib/core/dispatcher');
var routeConstants = require('./route.constant');

var actions = {

  setRoute: function(route) {
    Dispatcher.handleViewAction({
      actionType: routeConstants.SET_CURRENT_ROUTE,
      // Change to specified route, or default to root route
      route: route || routeConstants.root
    });
  }

};

module.exports = actions;