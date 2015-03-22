		$.fn.autofiller = function(obj) {
			if(obj=="getVal"){
				alert($("#autofiller li.selected").attr('autofiller-data'));
			}
			_elem ="<div class='autofillerWrap' id='autofiller'><ul class='autofillerlist'>";
			$.each(obj.data,function(key,value){
				_elem=_elem+"<li autofiller-data='"+value+"'>"+key+"</li>";
			
			});
			_elem=_elem+"</ul></div>";
			$(this).after(_elem);
			// position the list
			_top =$(this).offset().top+$(this).outerHeight();
			_left=$(this).offset().left;
			_width=$(this).outerWidth();
			$("#autofiller").css("top",_top).css("left",_left).width(_width);

			//events binding
			//filter list
			$(this).on("keydown",function(e){
				if(e.keyCode==9){
					e.preventDefault();
					e.stopPropagation();
				}
			});
			$(this).on("keyup",function(e){
				$("#autofiller").show();
				_key=e.which;
				var nav_keys=[37,38,39,40,27,13,9,8];
				if(nav_keys.indexOf(_key)<0){
					_val=$(this).val();
					$(".autofillerlist li").each(function(){
						_compare=$(this).text().trim();
						if(_compare.indexOf(_val)<0){
							$(this).addClass('is-hidden');
						}
						else{
							$(this).removeClass('is-hidden');
						}
					});
				}
				else{
					//left,right arrows
					if(_key==37 ||_key==39){
						return ;
					}
					//up arrow
					else if(_key==38){
						_current=$(".autofillerlist li.selected");
						if(_current.length==0){
							_current=$(".autofillerlist li:visible").last().addClass('selected');
							return;
						}
						while(_current.prev().hasClass('is-hidden')){
							_current=_current.prev();
						}
						$(".selected").removeClass('selected');
						_current.prev().addClass('selected');
					}
					//down arrow
					else if(_key==40){
						_current=$(".autofillerlist li.selected");
						if(_current.length==0){
							_current=$(".autofillerlist li:visible").first().addClass('selected');
							return;
						}
						while(_current.next().hasClass('is-hidden')){
							_current=_current.next();
						}
						$(".selected").removeClass('selected');
						_current.next().addClass('selected');
					}
					//esc key
					else if(_key==27){
						$("#autofiller").hide();
					}
					//enter key
					else if(_key==13 || _key==9){
						_val=$("li.selected").text();
						$(this).val(_val);
						$("#autofiller").hide();
					}
					else if(_key==8){
						if($(this).val()==""){
							$("#autofiller").hide();
						}
					}
				}
			});
		}