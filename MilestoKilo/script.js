(function(){
    'use strict';
    let convertType='miles';
    const heading=document.querySelector('h1');
    const intro =document.querySelector('p');
    const answerDiv=document.getElementById('answer');
    const form=document.getElementById('convert');
        document.addEventListener('keydown',function(event){
            var key=event.code;
            if(key==='KeyK'){
                convertType='kilometers';
                heading.innerHTML='Kilometers to Miles Converter';
                intro.innerHTML='Type in a number of kilometers and click the button to convert the distance to miles.';

            }
            else if(key ==='KeyM'){
                convertType='miles';
                heading.innerHTML="Miles to Kilometers Converter";
                intro.innerHTML="Type in a number of Miles and click the button to convert the distance to Kilometers.";

            }
        });
        form.addEventListener('submit',function(event){
            event.preventDefault();
            const distance=parseFloat(document.getElementById('distance').value);
            if(distance){
                //convert M to K   1.609344
                //convert K to M  0.6213711192
                if(convertType=="miles"){
                    const converted=(distance*1.609344).toFixed(3);
                    answerDiv.innerHTML=`${distance} Miles converts to ${converted} Kilometers`;

                }else{
                    const converted=(distance*0.621371192).toFixed(3);
                    answerDiv.innerHTML=`${distance} Kilometers convets to ${converted} miles`;
                }

            }
            else{
                answerDiv.innerHTML="<h2>Please provide a number!</h2>";
            }

        });
})();