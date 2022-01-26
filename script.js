$(document).ready(function(){

    var typed = new Typed('.typed', {
        strings: ['Hey there.!! Athira here	:)', 'You Can Find Weather Info&#9925; '],
        smartBackspace: true,
        loop:true,
        typeSpeed:30,
        backSpeed:30
      });
      



    $("#place").on("keyup",function(plac){
        var cityname = plac.target.value;
        const APIKey = "1c46b465a507578fb9601d4ad7f3673e";

        //server request
        $.ajax({

            url : `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${APIKey}&units=metric`
        }).done(function(wethrdata){
            console.log(wethrdata);
            

            $("#profile").html(`
            <div class"container">
                <div class"row">

                    <div class="card" style="width: 18rem;">
                        <img src="http://openweathermap.org/img/wn/${wethrdata.weather[0].icon}@2x.png" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Weather: ${wethrdata.weather[0].description}</h5>
                            <p class="card-text">The Temperature at ${cityname} is ${wethrdata.main.feels_like} &#8451; and it feels like it is ${wethrdata.main.feels_like} &#8451;</p>
                            <a href="https://www.google.com/search?q=${cityname}" target="_blank" class="btn btn-primary">Learn more about ${cityname}</a>
                        </div>
                    </div>

                
                </div>

            </div>`
            );

        })
    });



})
