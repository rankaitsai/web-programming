$(document).ready(function() {
  //var dbRef = firebase.database();
  const $email = $('#email');
  const $password = $('#password');
  const $btnSignIn = $('#btnSignIn');
  const $btnSignUp = $('#btnSignUp');
  const $signInfo = $('#signInfo');

  // sign in
  $btnSignIn.click(function(e) {
    const email = $email.val();
    const password = $password.val();
    const auth = firebase.auth();

    const promise = auth.signInWithEmailAndPassword(email,password);

    promise.catch(function(e){
      // if any error
      $signInfo.html(e.message);
      $signInfo.css('color','red');
      console.log(e.message);
    });

    promise.then(function(e) {
      window.location.href = "./chatroom.html";
    });
  });

  // sign up
  $btnSignUp.click(function(e) {
    const email = $email.val();
    const password = $password.val();
    const auth = firebase.auth();

    const promise = auth.createUserWithEmailAndPassword(email,password);

    promise.catch(function(e){
      // if any error,show error message
      $signInfo.html(e.message);
      $signInfo.css('color','red');
      console.log(e.message);
    });

    promise.then(function(user) {
      // when adding success, push to database

      // if sign up success, then go to profile.html
      window.location.href = "./profile.html";
    });

  });

  // // Listening Login User
  // firebase.auth().onAuthStateChanged(function(user){
  //   if(user) {
  //     //console.log(user);
  //     user.providerData.forEach(function(profile){
  //       console.log('Sign in provider: ' + profile.providerId);
  //       console.log('Provider-specific UID: ' + profile.uid);
  //       console.log('Name: ' + profile.displayName);
  //       console.log('Email: ' + profile.email);
  //     });
  //   }
  //   else {
  //     console.log('not login!');
  //   }
  // });
});
