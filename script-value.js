$("#mySelect").change(function () {
    $(":input").attr({
        value: this.value
    });
});