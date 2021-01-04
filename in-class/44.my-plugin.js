// 建立一個名為 easonRed 的 plug-in

$.fn.easonRed = function () {
    $(this).css('color', 'red');
    return $(this);
}