// export function journal(subject, body) {
//   let fullJournal = [];
//   fullJournal.push(subject+body);
//   return fullJournal;
// };

function Journal(subject, body) {
  this.subject = subject,
  this.body = body
  let fullJournal = [];
}

Journal.prototype.combineJournal = function() {
  fullJournal.push(subject+body);
  return fullJournal;
}
