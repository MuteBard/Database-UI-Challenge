var isFutureDate = (dateString) => new Date(dateString) > new Date()



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

    
    $('#addNew').click(() => {


        var currentText = $('#addNew').text();
        $('#addNew').text(
            currentText == "New" ? "Add" : "New");
        
        
        $('#box4b').append(
            currentText == "New" 
            ? 
            `<button class="buttonstyle secretbox5a" id="Cancel">Cancel</button>`
            :
            $('#box4b').empty()
        )

        $('#box3b').append(
            currentText == "New" 
            ? 
            `<form class="secretbox1a" action="/http://localhost:8080/getAppointments" method="get">
                <div class="secretbox2a">
                    <input class="secretbox3a" id="secretbox3a" href="javascript:validate()" type="date" name="Search" placeholder="Date">
                </div>
                <div class="secretbox2b">
                    <input class="secretbox3b"  type="text" name="Search" placeholder="Time">
                </div>
                <div class="secretbox2c">
                    <input class="secretbox3c" type="text" name="Search" placeholder="Desc">
                </div>
                <input type="submit" value="Submit">
            </form>` 
            : 
            $('#box3b').empty())
    
        });

        // $("#secretbox3a").on(datepicker({
        //     maxDate: "-1d"
        //   });

        // $(document).on('focus','#secretbox3a', () => {
            $('#secretbox3a').datepicker({
                maxDate: "-1d"
            });
        // });

    $('#box4b').on("click", () => { 
        $('#box3b').empty()
        $('#box4b').empty()
        var currentText = $('#addNew').text();
        $('#addNew').text(currentText == "New" ? "Add" : "New");
        
    })



        

})