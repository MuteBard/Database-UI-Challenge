$(document).ready(() => {
    $.ajax({
            type: "GET",
            url:`http://localhost:8080/getAppointments`,
            success: data => {
                console.log(data)
                data.forEach(appointment => {
                    $('#box1a').append(`<tr>
                                            <td>${appointment.bookdate}</td>
                                            <td>${appointment.booktime}</td>
                                            <td>${appointment.description}</td>
                                        </tr>`)
                })
            },
            failure: err => console.log(err)
        })

})