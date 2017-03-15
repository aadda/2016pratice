require(['jquery','go'],function($,Go){
	$(function(){
		new Go({
			speed: 2000,
			buttonType: "circle",
			location: "#container1",
			imgData: ['img/1.jpg','img/2.jpg','img/3.jpg','img/4.jpg']
		});

		new Go({
			speed: 1000,
			buttonType: "circle",
			location: "#container2",
			imgData: ['img/1.jpg','img/2.jpg','img/3.jpg']
		});
	});
});











		// $('li').on('mouseover',function(){
		// 	var index = $(this).index();
		// 	go.changeImg(index);
		// 	go1.changeImg(index);
		// });

		// $('#next').on('click',function(){
		// 	go.nextImg();
		// });

		// $('#prev').on('click',function(){
		// 	go.prevImg();
		// });

		// $('#container').hover(function(){
		// 	go.prese();
		// },function(){
		// 	go.start();
		// });