$(document).ready(function () {
    $("#filter li").hover(
        function () {
            // $(this).parent("li").find("span").hide();
            // $(this).find("span").show('50');
            $(this).find("span").show('fast');
        },
        function () {
            $(this).find("span").hide('fast');
        }
    );
});