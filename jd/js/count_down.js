showTime();
            		var timer = setInterval(showTime,1000);
           			function showTime(){
              			var end = Date.parse('2019/01/01');
               			var now = Date.now();
               			var offset = Math.floor((end - now)/1000);//毫秒
                		if(offset <= 0){
                  	 		clearInterval(timer);
              			}
                		var sec = offset%60;
                		var min = Math.floor(offset/60)%60;
                		var hour = Math.floor(offset/60/60)%24;
               			sec = sec<10? '0'+sec : sec;
               			min = min<10? '0'+min : min;
                		hour = hour<10? '0'+hour : hour;
                		document.getElementById('shi').innerHTML = hour;
                		document.getElementById('fen').innerHTML = min;
                		document.getElementById('miao').innerHTML = sec;
            		}