import { Journal } from './journal.js';

$(document).ready(function() {
  $('#journalInput').submit(function(event) {
    event.preventDefault();
    let subject = $('#subjectInput').val();
    let body = $('#bodyInput').val();
    myJournal = new Journal(subject, body)
    });
});
