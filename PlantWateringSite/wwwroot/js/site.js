

// Write your JavaScript code.
var $progressBar1 = $('#progress-bar1');
var DURATION = 10000; // in miliseconds
var negDURATION = 100000; // in miliseconds



//JS for plant 1
$('#start1').click(() => $progressBar1.animate({ width: '100%' }, DURATION));
$('#stop1').click(() => $progressBar1.stop());
$('#stop1').click(() => $progressBar1.animate({ width: '0%' }, negDURATION));
$('#reset1').click(() => {
    var clearQueue = true;
    $progressBar1.stop(clearQueue).animate({ width: 0 });
});
$progressBar1.animate({ width: '25%' });


//JS for plant 2
var $progressBar2 = $('#progress-bar2');

$('#start2').click(() => $progressBar2.animate({ width: '100%' }, DURATION));
$('#stop2').click(() => $progressBar2.stop());
$('#stop2').click(() => $progressBar2.animate({ width: '0%' }, negDURATION));
$('#reset2').click(() => {
    var clearQueue = true;
    $progressBar2.stop(clearQueue).animate({ width: 0 });
});
$progressBar2.animate({ width: '50%' });



//JS for plant 3
var $progressBar3 = $('#progress-bar3');

$('#start3').click(() => $progressBar3.animate({ width: '100%' }, DURATION));
$('#stop3').click(() => $progressBar3.stop());
$('#stop3').click(() => $progressBar3.animate({ width: '0%' }, negDURATION));
$('#reset3').click(() => {
    var clearQueue = true;
    $progressBar3.stop(clearQueue).animate({ width: 0 });
});
$progressBar3.animate({ width: '10%' });





//JS for plant 4
var $progressBar4 = $('#progress-bar4');

$('#start4').click(() => $progressBar4.animate({ width: '100%' }, DURATION));
$('#stop4').click(() => $progressBar4.stop());
$('#stop4').click(() => $progressBar4.animate({ width: '0%' }, negDURATION));
$('#reset4').click(() => {
    var clearQueue = true;
    $progressBar4.stop(clearQueue).animate({ width: 0 });
});
$progressBar4.animate({ width: '75%' });





//JS for plant 5
var $progressBar5 = $('#progress-bar5');

$('#start5').click(() => $progressBar5.animate({ width: '100%' }, DURATION));
$('#stop5').click(() => $progressBar5.stop());
$('#stop5').click(() => $progressBar5.animate({ width: '0%' }, negDURATION));
$('#reset5').click(() => {
    var clearQueue = true;
    $progressBar5.stop(clearQueue).animate({ width: 0 });
});
$progressBar5.animate({ width: '90%' });


//popup reminder to water flowers
$(window).on('load', function () {
    setTimeout(function () { alert("Plants one and three havent been watered in 6 hours"); }, 2000);
});


//will display a popup 6 hours after you last pressed the water button
function myFunction() {
    setTimeout(function () { alert("A plant hasnt been watered in 6 hours. Please Check water levels"); }, 21600000);
}
