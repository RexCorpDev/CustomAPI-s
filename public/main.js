'use strict';
// document.getEventListener('DOMContentLoaded', function () {
// 	document.getElementsByTagName('h1')[0].textContent = "ITS WORKING!!!";
// });


$(function () {
  // document.getElementsByTagName('h1')[0].textContent = "ITS WORKING!!!";
  $('button#gravatarButton').click(getGravatar);
  $('button#getPower').click(getMath.power);
  $('button#sAnalyzer').click(getSentence);
  $('button#calculateAge').click(getAge);
})

function getGravatar() {
  var email = $('#email').val();
  var hashEmail;

  $.get(`/analyzer/${email}`).done(function(data){
    console.log(data);
    $('img').attr('src', `https://gravatar.com/avatar/${data}`);
  })
  .fail(function(error){
    console.log('hash FAIL: ', error);
  });
};


var getMath =  {
  power: function(){
    var base = $('#base').val();
    var exponent = $('#exponent').val();
    $.get(`/math/math_tasks/pow/${base}/${exponent}`).done(function(data) {
      $('#powerDiv').text(data);
      console.log('power: ', data);
    }).fail(function (error){
      console.log('error: ', error);
    })
  }
};


function getSentence(){
  var sString = $('input#sentence').val();

  $.get(`/analyzer/sentence/${sString}`).done(function(data){
    var x = JSON.parse(data);
    console.log(x["Word Count"]);
    $('#wordcount').text("Word Count: " + x["Word Count"]);
    $('#charcount').text("Character Count: " + x["Character Count"]);
    $('#spacecount').text("Space Count: " + x["Space Count"]);
    $('#avgwordlength').text("Average Word Length: " + x["Avg Word Length"]);
  })
}


function getAge(){

  var year = $('#year').val();
  var month = $('#month').val();
  var day = $('#day').val();
  $.get(`/analyzer/age/${year}/${month}/${day}`).done(function(data){
    $('#ageDiv').text(`CONGRATULATION! You've been alive for: ${data}`);
  }).fail(function (error){
    console.log('error: ', error);
  })
}
