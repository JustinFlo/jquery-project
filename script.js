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
                success: function (data) {
                    const schedule = data.sceduele
                    console.log(schedule)

                    const dayScehule = schedule.filter(item => item.days.includes(selectedDay))
                    console.log(dayScehule)

                    renderHTML(dayScehule)
                }
            })
        }

        function renderHTML(dayScehule){
            $("scheduleList").empty()
            var htmlString = ''
            dayScehule.forEach(function (classItem) {
                
            })
        }

})
})

