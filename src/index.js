import angular from "angular";
import ngRoute from "angular-route";
import "../styles/global.scss";

import FooController from "./controllers/foo.js";

import Home from "./templates/home.html";

const testModule = angular.module('test', ["ngRoute"]);
testModule.config(($routeProvider) => {
  $routeProvider
    .when("/", {
      template: Home,
    });
});
testModule.controller('fooController', FooController);
