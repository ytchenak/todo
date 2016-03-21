var app;
(function (app) {
    var service;
    (function (service) {
        var todoAppl = my.app.todoAppl;
        var LocalStorage = (function () {
            function LocalStorage() {
            }
            LocalStorage.prototype.save = function (data) {
                localStorage['tasks'] = JSON.stringify(data);
            };
            LocalStorage.prototype.load = function () {
                var data = localStorage['tasks'];
                if (data && data.length > 0)
                    return JSON.parse(data);
                else
                    return null;
            };
            return LocalStorage;
        }());
        todoAppl.service('localStorage', LocalStorage);
    })(service = app.service || (app.service = {}));
})(app || (app = {}));
//# sourceMappingURL=localStorage.js.map