$(document).ready(function() {
    const $btnSignOut = $('#btnSignOut');

    // sign out
    $btnSignOut.click(function(e){
      if(firebase.auth().currentUser != null) {
        //$signInfo.html('Success Logout!');
        //$signInfo.css('color','green');
        firebase.auth().signOut();
        console.log('success logout!');
      }
      else {
        //$signInfo.css('color','red');
        //$signInfo.html('No User Login!');
      }
    });
});
