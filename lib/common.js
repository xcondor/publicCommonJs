
/**
 * 弹出窗口
 * @returns {$.fn.dialog}
 */
$.fn.dialog = function(){
    var oW = $(window).width();
    var oH = $(window).height();
    var oBw = this.width();
    var oBh = this.height();
    var _this = this;
    this.show();
    $('.mask').show();
    this.css({
        'left':(oW-oBw)/2,
        'margin':'0 auto',
        'top':(oH-oBh)/2
    });
    $(window).resize(function(){
        _this.css({
            'left':(oW-oBw)/2,
            'top':(oH-oBh)/2
        });
    });
    $('.close').on('click',function(){
        _this.hide();
        $('.mask').hide();
    });
    $('.btn-yes').on('click',function(callback){
        _this.hide();
        $('.mask').hide();
        callback = function(){
            console.log('callback');
        };
        callback();
    });
    return this;

};
/**
 * 元素项移动
 * @returns {$.fn}
 */
$.fn.move = function(){
    this.delegate('a.move-up-active','click',function(){
        var curItem = $(this).closest('li');
        var prevItem = curItem.prev();
        $(prevItem).before(curItem);
    });
    this.delegate('a.move-down-active','click',function(){
        var curItem = $(this).closest('li');
        var prevItem = curItem.next();
        $(prevItem).after(curItem);
    });
    return this;
};
$.fn.tabChange = function(){
    var oLi = $('.ele-tab li');
    var oBox = $('.tab-con .tab-box');
    oLi.on('click',function(){
        var oIndex = oLi.index(this);
        for(var i = 0;i<oLi.length;i++){
            oLi.removeClass('current');
            oBox.hide();
        }
        oBox.eq(oIndex).show();
        $(this).addClass('current');
    });
};
