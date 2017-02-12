$(function(){
        var $tabs = $('.cate-mod div.list li');
        $tabs.on('click',function(){
          var $li = $(this);
          var idx = $li.index();
          $li.addClass('on').siblings().removeClass('on');
          $($(".content .item")[idx]).show().siblings().hide();

        });
        function go(){
          var timer = 0;
          this.start = function(){
              var index = $tabs.index($tabs.filter(".on"));
              timer = setInterval(function(){
               // console.log(index);
                index++;
                if(index == $tabs.length){
                  index = 0;
                }
                $($tabs[index]).trigger("click");

            },2000);
          }
          this.prese = function(){
            clearInterval(timer);
          }
        };
        var go = new go();
        go.start();
        $tabs.hover(function(){
                go.prese();
              },function(){
                go.start();
              });
        });