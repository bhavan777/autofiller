$.fn.autofiller=function(e){"getVal"==e&&alert($("#autofiller li.selected").attr("autofiller-data")),_elem="<div class='autofillerWrap' id='autofiller'><ul class='autofillerlist'>",$.each(e.data,function(e,t){_elem=_elem+"<li autofiller-data='"+t+"'>"+e+"</li>"}),_elem+="</ul></div>",$(this).after(_elem),_top=$(this).offset().top+$(this).outerHeight(),_left=$(this).offset().left,_width=$(this).outerWidth(),$("#autofiller").css("top",_top).css("left",_left).width(_width),$(this).on("keydown",function(e){9==e.keyCode&&(e.preventDefault(),e.stopPropagation())}),$(this).on("keyup",function(e){$("#autofiller").show(),_key=e.which;var t=[37,38,39,40,27,13,9,8];if(t.indexOf(_key)<0)_val=$(this).val(),$(".autofillerlist li").each(function(){_compare=$(this).text().trim(),_compare.indexOf(_val)<0?$(this).addClass("is-hidden"):$(this).removeClass("is-hidden")});else{if(37==_key||39==_key)return;if(38==_key){if(_current=$(".autofillerlist li.selected"),0==_current.length)return void(_current=$(".autofillerlist li:visible").last().addClass("selected"));for(;_current.prev().hasClass("is-hidden");)_current=_current.prev();$(".selected").removeClass("selected"),_current.prev().addClass("selected")}else if(40==_key){if(_current=$(".autofillerlist li.selected"),0==_current.length)return void(_current=$(".autofillerlist li:visible").first().addClass("selected"));for(;_current.next().hasClass("is-hidden");)_current=_current.next();$(".selected").removeClass("selected"),_current.next().addClass("selected")}else 27==_key?$("#autofiller").hide():13==_key||9==_key?(_val=$("li.selected").text(),$(this).val(_val),$("#autofiller").hide()):8==_key&&""==$(this).val()&&$("#autofiller").hide()}})};