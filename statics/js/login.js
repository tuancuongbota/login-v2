$(document).ready(function () {
    if ($(".forgot-pos-password").length) {
        $('.forgot-pos-password').click(function () {
            $('.login-form-view').hide();
            $('.forgot-pass-view').show();
        });
    }
    if ($("#back-btn").length) {
        $('#back-btn').click(function () {
            $('.login-form-view').show();
            $('.forgot-pass-view').hide();
        });
    }
});