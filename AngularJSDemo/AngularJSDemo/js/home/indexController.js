﻿angular.module("indexApp")
    .controller("indexController",
    [
        function () {
            var self = this;

            self.firstName = "Johnny";
            self.lastName = "Chuang";

            self.fullName = function () {
                return self.firstName + ", " + self.lastName;
            };
        }
    ]);