"use strict";
var Bookform = (function () {
    function Bookform(id, language, title, ISBN, author, publisher, publishedDate, publishPlace, rating) {
        this.id = id;
        this.language = language;
        this.title = title;
        this.ISBN = ISBN;
        this.author = author;
        this.publisher = publisher;
        this.publishedDate = publishedDate;
        this.publishPlace = publishPlace;
        this.rating = rating;
    }
    return Bookform;
}());
exports.Bookform = Bookform;
//# sourceMappingURL=bookform.js.map