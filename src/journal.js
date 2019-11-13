export function Journal(subject, body, fullJournal) {
  this.subject = subject,
  this.body = body,
  this.fullJournal = " "
}


Journal.prototype.combineJournal = function() {
  let fullJournalArr = [];
  fullJournalArr.push(this.subject+" "+this.body);
  this.fullJournal = fullJournalArr.join();
  console.log(this.fullJournal);
}

Journal.prototype.getWords = function () {
  console.log(typeof this.fullJournal)

  let words = this.fullJournal.split(" ");
  console.log(words);
  // let journalArr = arrayLength.split(', ');
  // console.log(journalArr);
  // console.log(arrayLength.length);
  //   console.log(arrayLength);
}



// export function journal(subject, body) {
  //   let fullJournal = [];
  //   fullJournal.push(subject+body);
  //   return fullJournal;
  // };
