function setCookie(key,value,day){

        var str = key+"="+value+";";
        if(day){
            var date = new Date();

            date.setDate(date.getDate()+day);

            str+= 'expires='+date;
        }

        document.cookie = str;


    }

    function getCookie(key){
        
        var str = document.cookie;
        var arr = str.split('; ');

        for(var i=0; i<arr.length; i++){
            var arr2 = arr[i].split('=');  

            if(arr2[0] == key){
                return arr2[1];
            }
        }
    }