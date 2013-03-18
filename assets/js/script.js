$(function(){
   	$( "#datepicker" ).datepicker({

    	onSelect: function(){
			var note = $('#note'),
				ts = new Date(2012, 0, 1),
				newYear = true;
			
			if((new Date()) > ts){
				// The new year is here! Count towards something else.
				// Notice the *1000 at the end - time must be in milliseconds
				/*ts = (new Date()).getTime() + 10*24*60*60*1000;*/
				ts = (new Date($("#datepicker").val())).getTime();
				newYear = false;
			}
			
			/* erases the current value */
			$('#countdown').html('');
			$('#countdown').countdown({
				timestamp	: ts,
				callback	: function(days, hours, minutes, seconds){
					
					var message = "";
					
					message += days + " day" + ( days==1 ? '':'s' ) + ", ";
					message += hours + " hour" + ( hours==1 ? '':'s' ) + ", ";
					message += minutes + " minute" + ( minutes==1 ? '':'s' ) + " and ";
					message += seconds + " second" + ( seconds==1 ? '':'s' ) + " <br />";
			

				}
			});

			$('.time_left').show();
		}
   	});

	
	
});
