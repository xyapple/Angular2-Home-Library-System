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
var book_service_1 = require('./book.service');
var BookListComponent = (function () {
    function BookListComponent(_bookService) {
        this._bookService = _bookService;
        this.pageTitle = 'Book List';
        this.imageWidth = 100;
        this.imageMargin = 2;
        this.showImage = false;
    }
    BookListComponent.prototype.toggleImage = function () {
        this.showImage = !this.showImage;
    };
    BookListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._bookService.getBooks()
            .subscribe(function (books) { return _this.books = books; }, function (error) { return _this.errorMessage = error; });
    };
    BookListComponent.prototype.onRatingClicked = function (message) {
        this.pageTitle = 'Book List: ' + message;
    };
    BookListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'books-list.component.html',
            styleUrls: ['books-list.component.css']
        }), 
        __metadata('design:paramtypes', [book_service_1.BookService])
    ], BookListComponent);
    return BookListComponent;
}());
exports.BookListComponent = BookListComponent;
//# sourceMappingURL=books-list.component.js.map