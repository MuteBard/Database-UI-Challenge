var isFutureDate = (dateString) => new Date(dateString) > new Date()
// var getData = (string) => alert(string)


$(document).ready(() => {

    //make a GET request upon pressing get Search button
    document.getElementById("search").onclick = () => {

        //empty the data on box2 if something is there

        //make this part work left off
        if (!$('#box2').on("is:empty")){
            // $("#box2").empty()
            console.log("TEst")
        }

        $.ajax({
                type: "GET",
                url:`http://localhost:8080/getAppointments`,
                success: data => {
                    console.log(data)
                    data.forEach(appointment => {
                        $('#box1c').append(`<tr class="box2" id="box2">
                                                <td>${appointment.bookdate}</td>
                                                <td>${appointment.booktime}</td>
                                                <td>${appointment.description}</td>
                                            </tr>`)
                    })
                },
                failure: err => console.log(err)
            })
    }
   
    
    //when the New button is pressed..
    $('#addNew').click(() => {

        //Toggle the text inside the New button to Add.
        var currentText = $('#addNew').text();
        $('#addNew').text(
            currentText == "New" ? "Add" : "New");
        
        
        //Create the cancel button upon toggling New.
        //when it is pressed again, check the conditional and if false, make the div 
        //containing the button empty
        $('#box4b').append(
            currentText == "New" 
            ? 
            `<button class="buttonstyle secretbox5a" id="Cancel">Cancel</button>`
            :
            $('#box4b').empty()
        )

        //Upon pressing the Add button the page reloads
        $('#addNew').text() == "Add" 
            ? 
            //delay was added since it would apply the attribute to quickly
            setTimeout(() => $('form').attr("onsubmit", "return true") , 2000)
            : 
            null

        //Create three input fields below the Add and Cancel buttons that manage
        //Date, Time and Description
        $('#box3b').append(
            currentText == "New" 
            ? 
            `
            <div class="secretbox2a">
                <input class="secretbox3a" id="secretbox3a" href="javascript:validate()" type="date" name="Search" placeholder="Date">
            </div>
            <div class="secretbox2b">
                <input class="secretbox3b"  type="text" name="Search" placeholder="Time">
            </div>
            <div class="secretbox2c">
                <input class="secretbox3c" type="text" name="Search" placeholder="Desc">
            </div>
            ` 
            : 
            $('#box3b').empty())
    
        });

    
    //When in the future if cancel is clicked on...
    $('#box4b').on("click", () => { 
        //remove the input fields from div #box3b
        $('#box3b').empty()
        //remove the cancel button from div #box4b
        $('#box4b').empty()
        //toggle the Add button text back to New
        var currentText = $('#addNew').text();
        $('#addNew').text(currentText == "New" ? "Add" : "New");
        
    })



        

})