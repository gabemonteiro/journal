$(document).ready(function() {
  $('#journalInput').submit(funciton(event){
    event.preventDefault();
    console.log(subject);
    let subject = $('#subjectInput').val();
    let body = $('#bodyInput').val();
  });
});
