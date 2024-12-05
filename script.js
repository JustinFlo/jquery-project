$(document).ready(function(){
    
    
    const scedueleList = $('#scheduleList')
    const button = $('#submitDay')

$('#submitDay').click (()=> {
        var selectedDay = $('#dayInput').val()
    
        if(!['A', 'B', 'C','D', 'E', 'F', 'G'].includes(selectedDay)){
            alert('Please enter a valid day(A-G)');
            return;
        }   else {
            $.ajax({
                url: 'https://api.npoint.io/0d8f38413549540fa060',
                method: 'GET',
                success: function (data)
            })
        }

})
})

