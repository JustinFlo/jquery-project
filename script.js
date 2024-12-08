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
                url: 'https://api.npoint.io/949bdfd66401dab4585c',
                method: 'GET',
                success: function (data)
            })
        }

})
})

