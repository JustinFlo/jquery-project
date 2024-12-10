$(document).ready(function(){
    
    
    const scheduleList = $('#scheduleList')
    const button = $('#submitDay')

        button.on('click', function () {
            let selectedDay = $('#dayInput').val().trim().toUpperCase()
            console.log(selectedDay)
        if(!['A', 'B', 'C','D', 'E', 'F', 'G'].includes(selectedDay)){
            alert('Please enter a valid day(A-G)');
            return;
        }   
        else {
            $.ajax({
                url: 'https://api.npoint.io/b7e35d035261a23de2d0',
                method: 'GET',
                success: function (data) {
                    const schedule = data.schedule
                    console.log(schedule)

                    const daySchedule = schedule.filter(item => item.days.includes(selectedDay))
                    console.log(daySchedule)

                    renderHTML(daySchedule)
                }
            })
        }

        function renderHTML(daySchedule){
            $('#scheduleList').empty()
            let htmlString = ''
            daySchedule.forEach(function (classItem) {
                htmlString += (`
                    <tr>
                    <td>${classItem.days}</td>
                    <td>${classItem.room}</td>
                    <td>${classItem.class}</td>
                    <td>${classItem.period}</td>
                    <td>${classItem.teacher}</td>
                    </td>`)
            })

            $('#scheduleList').append(htmlString);
        }

})


})

