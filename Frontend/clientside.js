let convertData = (obj) => {
    let dateStr = (new Date(obj.date)).toString()
    let dateArr = dateStr.split(' ')
    obj["date"] =`${dateArr[1]} ${dateArr[2]}`
    return obj
}


 
$(document).ready(() => {

    //make a GET request upon pressing get Search button    
    $("#searchbutton").on("click", () => {
    
        //remove all table data from the table while it exists
        while(!$('#box2').text() == ''){
            $('#box2').remove()
        }

        let json = {"search" : $("#searchfield").val() };

        json.search == ""
        
        ?
        
        //make an ajax call to grab table data from the database
        $.ajax({
            //set the verb as GET
            method: "GET",
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
        
        :
        
        $.ajax({
            url: `http://localhost:8080/getmatchingAppointments`,
            data: JSON.stringify(json),
            method: 'post',
            dataType: 'JSON',
            contentType: 'application/json',
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

        if ($('form').attr("onsubmit") == "return true"){

            let json = {}
            //create an array of the serialized data obtained and put it in a for..of loop to properly construct some json
            for(let obj of $('form').serializeArray()){
                json[obj.name] = obj.value
            }

            let sanitation = (obj) => {
                $('#errors').empty();
                let report = {"valid" : true, "message" : false}
                if(new Date(obj.date) < new Date() || obj.date == ""){
                    report["valid"] = false
                    report["message"] = `<div>Value for date is invalid</div><br>`
                } 
                if(obj.time == ""){ 
                    report["valid"] = false
                    report["message"] += `<div>Value for time is invalid</div><br>`
                }
                if(obj.description == ""){
                    report["valid"] = false
                    report["message"] += `<div>Value for description is empty</div>`
                }

                return report
            }

            sanitation(json).valid == true
            
            ?

            $.ajax({
                url: `http://localhost:8080/addAppointment`,
                data: JSON.stringify(convertData(json)),
                method: 'post',
                dataType: 'JSON',
                contentType: 'application/json'  
            })

            :

            $('#errors').append(sanitation(json).message);


        }

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

        //originally, adding the three input boxes would make styling off center. Therefore, when
        //the class is box2aOFF is activated when the button says new and is the class
        //box2aON is activated when the button says Add.
        
        $('#box2a').removeClass('box2aOFF');
        $('#box2a').addClass('box2aON');
        
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
                DATE <input class="secretbox3d" id="secretbox3d" type="date" name="date">
            </div>
            <div class="secretbox2b">
                TIME <input class="secretbox3e"  type="time" name="time">
            </div>
            <div class="secretbox2c">
                DESC <input class="secretbox3f" type="text" name="desc">
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
        //reapply the original class css for this id
        $('#box2a').removeClass('box2aON');
        $('#box2a').addClass('box2aOFF');
        
    })



})