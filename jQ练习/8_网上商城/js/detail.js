$(function(){
	

	//color_change
	$('.color_change li img').on('click',function(){
		$(this).addClass('hover').parent().siblings().children().removeClass('hover');
		var color = this.title;
		//console.log(color);
		$('.color_change strong').html(this.alt);
		$('.jqzoomWrap a').attr('href','images/pro_img/'+color+'_one_big.jpg');
		$('.zoomPad img').attr('src','images/pro_img/'+color+'_one_small.jpg');
		var $imgList = '#jnProitem .imgList .imgList_'+color;
		//console.log($($imgList));
		$('#jnProitem .imgList li').css('display','none');
		$($imgList).css('display','list-item');
	});



	//size_change
	$('.pro_size ul li').on('click',function(){
		$(this).addClass('cur').siblings().removeClass('cur');
		$('.pro_size strong').html($(this).html());
	});

	//price_change
	$('.pro_num #num_sort').on('click',function(){
		var $number = $('.pro_num #num_sort option:selected').val();
		//console.log($number);
		var $price = 200*$number;
		//console.log($price);               有问题
		$('.pro_price strong').html($price);
	});
	


	//属性
	$('.tab_menu ul li').on('click',function(){
		
		$(this).addClass('selected').siblings().removeClass('selected');
		var index = $(this).index();
		//console.log(index);
		$($('.tab_box div')[index]).removeClass('hide').siblings().addClass('hide');
	});
	//star
	$('.rating li').on('click',function(){
		var $star = $(this).children().attr('title');
		alert("感谢你的"+$star+"评价");
		//console.log($star);
		var $number = $(this).attr('class');
		$('.rating').attr('class','rating '+$number+'star');
		return false;
	});

	//cart
	$('#cart a').on('click',function(){
		
		var dialog = "感谢您的购买。您购买的产品是："+$('.jnProDetail h4').html()+
				"; 尺寸是："+$('.pro_size strong').html()+
				"; 颜色是："+$('.color_change strong').html()+
				"; 数量是："+$('.pro_num #num_sort option:selected').val()+
				"; 总价是："+$('.pro_price strong').html()+"元.";
		//$("#jnDialogContent").html(dialog);
		//$('#basic-dialog-ok').modal();
		alert(dialog);
		//console.log(dialog);
		return false;//避免页面跳转
	});

});