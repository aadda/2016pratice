define(['jquery'],function($){
	
		return {
			open:function(options){
				var str = '<div class="container">'
							+'<div class="connect"></div>'
							+'<div class="box">'									+'<div class="box-title">'
									+'<div class="title">'+options.title+'</div>'
									+'<div class="chose">[X]</div>'
								+'</div>'
								+'<div class="box-connect">'+options.connect+'</div>'
							+'</div>'
						+'</div>';
				$('body').append(str);
			},
			chose:function(){
				$('.container').remove();
			}
		}
	
});
//$(function(){
		/*function Dialog(options){
			this.open = function(){
				var str = '<div class="container">'
							+'<div class="connect"></div>'
							+'<div class="box">'									+'<div class="box-title">'
									+'<div class="title">'+options.title+'</div>'
									+'<div class="chose">[X]</div>'
								+'</div>'
								+'<div class="box-connect">'+options.connect+'</div>'
							+'</div>'
						+'</div>';
				$('body').append(str);
			}
			this.chose = function(){
				$('.chose').on('click',function(){
					$('.container').remove();
				});
			}
		}
	return dialog;*/
	//});