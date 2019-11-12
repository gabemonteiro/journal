export function Journal(subject, body) {
  this.subject = subject,
  this.body = body
}
let fullJournal = [];

Journal.prototype.combineJournal = function() {
  fullJournal.push(subject+body);
  return fullJournal;
  console.log(fullJournal);
}

Journal.prototype.getWords = function () {
  return fullJournal = fullJournal.split(" ").length;
  console.log(getWords);
}



// export function journal(subject, body) {
  //   let fullJournal = [];
  //   fullJournal.push(subject+body);
  //   return fullJournal;
  // };
