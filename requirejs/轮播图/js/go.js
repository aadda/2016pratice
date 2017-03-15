define(['jquery'],function($){
	function Go(options){
		var _this = this;
		this.old = {
			speed: 1000,
			buttonType: ""
		}

		$.extend(this.old,options);

		this.timer = 0;
		
		function changeImg(index){
			$($('li',_this.old.location)[index]).addClass('selected').siblings().removeClass('selected');
			$($('img',_this.old.location)[index]).addClass('selected').siblings().removeClass('selected');
		}
	
		this.changeType = function(){
			$('#tab li').addClass(this.old.buttonType);
			$('#arrow span').addClass(this.old.buttonType);
		}

		this.start = function(){
			_this.timer = setInterval(function(){
						$('#next',_this.old.location).trigger('click');
					},_this.old.speed);
		}

		this.prese = function(){
			clearInterval(_this.timer);
		}

		this.nextImg = function(){
			var index = $('li',_this.old.location).filter('.selected').index();
				index++;
				if(index == $('li',_this.old.location).length){
					index = 0;
				}
			changeImg(index);
		}

		this.prevImg = function(){
			var index = $('li',_this.old.location).filter('.selected').index();
				index--;
				if(index < 0){
					index = $('li',_this.old.location).length-1;
				}
			changeImg(index);
		}

		this.init = function(){
			this.$container = $('<div id="container"></div>');
			this.$content = $('<div id="content"></div>');
			this.$tab = $('<ul id="tab"></ul>');
			this.$arrow = $('<div id="arrow"></div>');
			this.$prev = $('<span id="prev">&lt;</span>');
			this.$next = $('<span id="next">&gt;</span>');

			this.$container.append(this.$content).append(this.$tab).append(this.$arrow);
			for(var i=0; i<this.old.imgData.length; i++){
				this.$content.append('<img class="'+(i == 0?'selected':'')+'" src="'+this.old.imgData[i]+'"/>');
				this.$tab.append('<li class="'+(i == 0?'selected':'')+'">'+(i+1)+'</li>');
			};
			this.$arrow.append(this.$prev).append(this.$next);
			$(this.old.location).append(this.$container);

			$('li',_this.old.location).on('mouseover',function(){
				var index = $(this).index();
				changeImg(index);
			});

			$('#prev',_this.old.location).on('click',function(){
				_this.prevImg();
			});

			$('#next',_this.old.location).on('click',function(){
				_this.nextImg();
			});

			$('#container',_this.old.location).hover(function(){
				_this.prese();
			},function(){
				_this.start();
			});
			this.changeType();		
			this.start();
		}
		this.init();
	};	
	return Go;
});













	/*return {
		changeImg: function(index){
			$($('li')[index]).addClass('selected').siblings().removeClass('selected');
			$($('img')[index]).addClass('selected').siblings().removeClass('selected');

		},
		nextImg: function(){
			var index = $('li').filter('.selected').index();
			index++;
			if(index == $('li').length){
				index = 0;
			}
			this.changeImg(index);
		},
		prevImg: function(){
			var index = $('li').filter('.selected').index();
			index--;
			//console.log($('li').length);
			if(index < 0){
				index = $('li').length-1;
			}
			this.changeImg(index);
		},
		changeType: function(type){
			console.log(type);
			$('#tab li').addClass(type);
			$('#arrow span').addClass(type);
		}
	}*/