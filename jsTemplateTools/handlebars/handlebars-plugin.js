/**
 * Created by xingyucheng@jd.com on 2016/9/5.
 * @parm  template & data
 *
 */
(function($){
   var compiled = {};
    $.fn.handlebars = function(template,data){
        if( template instanceof  jQuery){
            template = $(template).html();
        }
        compiled[template] = Handlebars.compile(template);
        this.html(compiled[template](data));
    };
})(jQuery);

//use
$('#content').handlebars($('#template'),{name:'alll'});