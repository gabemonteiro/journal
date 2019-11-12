import { Journal } from './journal.js';

$(document).ready(function() {
  $('#journalInput').submit(function(event) {
    event.preventDefault();
    let fullJournal = [];
    let subject = $('#subjectInput').val();
    let body = $('#bodyInput').val();
    let myJournal = new Journal(subject, body)
    console.log(myJournal);
    fullJournal.combineJournal(myJournal)
    console.log(myJournal);
    });
});
