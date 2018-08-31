(function () {
    var init = function () {
        $("#subscribe").on("click", function () {
            var email = $("#txtEmail").val();
            subscribe(email);
        });
        $("#subscribe2").on("click", function () {
            var email = $("#txtEmail2").val();
            subscribe(email);
        });
    };

    var subscribe = function (email) {
        if (!email) {
            alert("TODO: validate");
            return;
        }

        alert("subscribed");
        clearAll();
    };

    var clearAll = function () {
        $("#txtEmail2").val("");
        $("#txtEmail").val("");
    };

    init();
}());