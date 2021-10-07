// function add(){
//     var div =$(<div class="progress"></div>);
//     $("body").append(div);
//     $('progress').animate(
//         {width:'100%'},
//         {duration:'5000'}
//     );
// }

function clickme(){
    var div =$("<div class='progress-bar'></div><br>");
    $("body").append(div);
    $('.progress-bar').animate(
      {width: '100%'}, 
      {duration: 5000}        
    );
  }     