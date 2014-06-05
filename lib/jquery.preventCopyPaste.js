/**
 * This is simple plugin which prevent text fields from copy paste
 */
(function ($) {

    $.fn.preventCopyPaste = function () {

        this.on("cut copy paste", function (e) {
            e.preventDefault();

        });
        return this;
    };

}(jQuery));