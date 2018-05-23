$(document).ready(() => {
    $.ajax({
            type: "GET",
            url:`http://localhost:8080/getAppointments`,
            success: data => {
                console.log(data)
                data.forEach(appointment => {
                    $('#box1c').append(`<tr class="box2">
                                            <td>${appointment.bookdate}</td>
                                            <td>${appointment.booktime}</td>
                                            <td>${appointment.description}</td>
                                        </tr>`)
                })
            },
            failure: err => console.log(err)
        })

})