/*back-end*/
function numberArray(hard){
    var Numbers= [];

    for (var a=1; a <=hard; a++){
        if ((a % 3===0)&& (a%5===0)){
            Numbers.push("PingPong");
        }
        else if (a%5===0){
          Numbers.push("Pong");

        }
        else if (a % 3===0){
          Numbers.push("Ping");
        }
        else {
            Numbers.push(a)
        }
    };
    return Numbers;
};
/* back-end*/


function clearForm(form) {
        $(':input').not(':button, :submit').val('');
    };

/*Front-end*/
$(document).ready(function(){
$("form#pong").submit(function(event){
event.preventDefault();

$("ul").empty();

var hard = parseInt($("#harder").val());

var display= numberArray(hard);

for (var index =0; index <= display.length; index++){


$("ul#output").append("<li>"+display[index]+"</li>");
     };
     clearForm("#input");
     });

});

/*Front-end*/
