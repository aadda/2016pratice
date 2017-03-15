require(['jquery','dialog'],function($,dialog){
	$(function(){
		$('input').on('click',function(){
			//var dialog = new dialog();
			dialog.open({
				width: 500,
				height: 400,
				title: "asdasdasd",
				connect: 15486135
			});
			//console.log(dialog);
			
			//console.log($('.chose').html());
			$('.chose').on('click',function(){
				dialog.chose();
				//console.log(158);
			});
		});
		//dialog.chose();
	});
});