
$(function(){
//搜索框
	$('#inputSearch').on('focus',function(){
		if($(this).val() == this.defaultValue){
					this.value = "";
		}
	}).on('blur',function(){
		if($(this).val() == ""){
					this.value = this.defaultValue;
		}
	});
//导航菜单
	$('#nav li').hover(function(){
		$(this).children('.jnNav').show();
	},function(){
		$(this).children('.jnNav').hide();
		});
//hot动图
	$('.promoted').append('<s class="hot"></s>');
//轮播图
	var $img = $('#jnImageroll div a');
	$img.on('mouseover',function(){
		$(this).addClass('chos').siblings().removeClass('chos');
	
		$('#JS_imgWrap img').eq($(this).index()).fadeIn()
		.parent().siblings().children().fadeOut();
	});

	startGo($img);


//tooltip
	$('#jnNoticeInfo li a').hover(function(e){
		this.myTitle = this.title == ''?this.innerHtml:this.title;
		this.title = '';
		var $div = $("<div id='tooltip'></div>");
		$div.appendTo('body').html(this.myTitle).offset({
			top: e.pageY +15,
			left: e.pageX +15
		}).show('fast');
	},function(){
		$('#tooltip').remove();
		this.title = this.myTitle;
	}).on('mousemove',function(e){
		$('#tooltip').offset({
			top: e.pageY +15,
			left: e.pageX +15
		})
	});	

//jnBrandTab
	$('#jnBrandTab li').on('click',function(){
		$(this).addClass('chos').siblings().removeClass('chos');
		var index = $(this).index();
		jnBrandList(index);
	});
	function jnBrandList(index){
		var iLeft = $('#jnBrandList').stop(true,false).find("li").outerWidth()*4;
		$('#jnBrandList').animate({
			left: -iLeft*index
		},1000);
	}
//changeColor
	$('#skin li').on('click',function(){
		var $skin = $(this).attr('id');
		$(this).addClass('selected').siblings()
		.removeClass('selected');
		$('#nav').attr('class','mainNav '+$skin);
		
		$('#jnCatalog').attr('class',$skin);

		setCookie('color',$skin,7);
	});

	var color = getCookie("color");
	//console.log(color);
	$('li#'+color).trigger('click');










});