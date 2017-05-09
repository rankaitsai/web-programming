$(document).ready(function() {
  document.getElementById('photoURL').onchange = function() {
    document.getElementById('photo').value = this.files[0].name;
  };

  // for age option value
  addDropDownValue();


  function addDropDownValue() {
    var i;
    var $option;

    for(i=1;i<100;i++) {
      $option = $("<option>");
      $option.value = i;
      $option.text(i);
      $('#age').append($option);
    }
  }

  // button submit
  var dbRef = firebase.database();
  const $btnSubmit = $('#btnSubmit');
  const $signInfo = $('#signInfo');
  const $username = $('#username');
  const $occupation = $('#occupation');
  const $age = $('#age');
  const $photoURL = $('#photoURL');
  const $description = $('#description');

  $btnSubmit.click(function(e) {
    console.log('submit button click!');
    dbRef.ref('/users/' + firebase.auth().currentUser.uid).set({
      username: $username.val(),
      occupation: $occupation.val(),
      age: $age.val(),
      photoURL: $photoURL.val(),
      description: $description.val(),
    },function(error) {
      if(!error) {
        window.location.href = "./chatroom.html";
      }
    });
    $signInfo.css('color','green');
    $signInfo.html('Update success!');
  });


});
