var isFutureDate = (dateString) => new Date(dateString) > new Date()
// var getData = (string) => alert(string)


$(document).ready(() => {

    //make a GET request upon pressing get Search button    
    $("#search").on("click", () => {
    
        //remove all table data from the table while it exists
        while(!$('#box2').text() == ''){
            $('#box2').remove()
        }
        
        //make an ajax call to grab table data from the database
        $.ajax({
            //set the verb as GET
            type: "GET",
            //set the url the route created in the Spring server
            url:`http://localhost:8080/getAppointments`,
            success: data => {
                //create a forEach loop that iterates through the iterable data and grab the values one by one, called appointment. Then put the data inside HTML
                data.forEach(appointment => {
                    $('#box1c').append(`<tr class="box2" id="box2">
                                            <td class="secretbox3a" id="secretbox3">${appointment.bookdate}</td>
                                            <td class="secretbox3b" id="secretbox3">${appointment.booktime}</td>
                                            <td class="secretbox3c" id="secretbox3">${appointment.description}</td>
                                        </tr>`)
                })
            },
            failure: err => console.log(err)         
        })     
    })
   
    
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
        
        //set time out is added because the form would not make a request as soon as the attribute was
        //changed to return true.
        //set the attribute to true when the button does not say add, otherwise there is a bug  
        //when you press new, then cancel and then new again, it sends the form. this bug is fixed
        //line 104, under the #box4b ca
        setTimeout(() => $('form').attr("onsubmit", "return true") , 100)
            
            
        //Create three input fields below the Add and Cancel buttons that manage
        //Date, Time and Description
        $('#box3b').append(
            currentText == "New" 
            ? 
            `<div class="secretbox2a">
                <input class="secretbox3d" id="secretbox3d" type="date" name="Search" placeholder="Date">
            </div>
            <div class="secretbox2b">
                <input class="secretbox3e"  type="text" name="Search" placeholder="Time">
            </div>
            <div class="secretbox2c">
                <input class="secretbox3f" type="text" name="Search" placeholder="Desc">
            </div>` 
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
        //set the attribute of the new/add button back to return false to prevent sending
        $('form').attr("onsubmit", "return false")
        
    })
})