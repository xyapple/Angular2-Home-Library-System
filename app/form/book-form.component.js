"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var bookform_1 = require('./bookform');
var BookFormComponent = (function () {
    function BookFormComponent() {
        this.languages = ['English', 'Spanish', 'Chinese', 'French', 'Italitan', 'German', 'Portuguese', 'Arabic', 'Others'];
        this.model = new bookform_1.Bookform(32, this.languages[0], 'Stamped from the Beginning: The Definitive History of Racist Ideas ', 9781568584638, 'Ibram X. Kendi', 'Nation Books', 'April 12, 2016', 'New York', 4.8);
        this.submitted = false;
    }
    BookFormComponent.prototype.onSubmit = function () { this.submitted = true; };
    Object.defineProperty(BookFormComponent.prototype, "diagnostic", {
        // TODO: Remove this when we're done
        get: function () { return JSON.stringify(this.model); },
        enumerable: true,
        configurable: true
    });
    BookFormComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'book-form',
            templateUrl: './book-form.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], BookFormComponent);
    return BookFormComponent;
}());
exports.BookFormComponent = BookFormComponent;
//# sourceMappingURL=book-form.component.js.map