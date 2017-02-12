function startGo($img){
	function go(){
		var timer = 0;
		this.start = function(){
			timer = setInterval(function(){
			var index = $img.index($img.filter(".chos"));
			
			index++;
			if(index == $img.length){
				index = 0;
			}
				$($img[index]).trigger("mouseover");
			},3000);
		}
		this.pause = function(){
			clearInterval(timer);
		}
	}

	var go = new go();
        go.start();

	$('#JS_imgWrap a').hover(function(){
		go.pause();
	},function(){
		go.start();
	});
}
	