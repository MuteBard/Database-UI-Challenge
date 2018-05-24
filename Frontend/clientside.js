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
            currentText == "Add New" ? "Save" : "Add New");
        
        $('#box4b').append(
            currentText == "Add New" 
            ? 
            `<button class="buttonstyle secretbox5a" id="Cancel">Cancel</button>`
            :
            $('#box4b').empty()
        )

        $('#box3b').append(
            currentText == "Add New" 
            ? 
            `<form class="secretbox1a" action="clientside.js">
                <div class="secretbox2a">
                    <input class="secretbox3a" type="text" name="Search" placeholder="Date">
                </div>
                <div class="secretbox2b">
                    <input class="secretbox3b" type="text" name="Search" placeholder="Time">
                </div>
                <div class="secretbox2c">
                    <input class="secretbox3c" type="text" name="Search" placeholder="Desc">
                </div>
            </form>` 
            : 
            $('#box3b').empty())
    
        });

    $('#Cancel').on('click', "Cancel" , () =>{
        // $('#box3b').empty();

        var currentText = $('#addNew').text();
        console.log(currentText)
        $('#Cancel').text("kjhhkjhkjh");
        
    })



        

})