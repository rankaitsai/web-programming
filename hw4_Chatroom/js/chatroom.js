var dbRef = firebase.database().ref('/chatroom/');

// Register dom elements
var $messageField = $('#messageInput');
var $messageList = $('#messages');

// Listen for keypress event
$messageField.keypress(function(e){
  if(e.keyCode == 13) {
    var username = "yoo";
    var message = $messageField.val();
    console.log(username);
    console.log(message);

    // save data to firebase and empty field
    dbRef.push({name:username, text:message});
    $messageField.val('');
  }
});

// add a callback that is triggered for each chat message.
dbRef.limitToLast(10).on('child_added', function(snapshot) {
  var data = snapshot.val();
  var username = data.name || "anonymous";
  var message = data.text;

  // create elements message
  var $messageElement = $("<li>");
  var $nameElement = $("<strong></strong>")
  $nameElement.text(username);
  $messageElement.text(message).prepend($nameElement);

  $messageList.append($messageElement);

  // scroll to bottom of message List
  $messageList[0].scrollTop = $messageList[0].scrollHeight;

});
