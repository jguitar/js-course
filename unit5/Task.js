var Task = function(taskText){
  var done = false;
  var text = taskText;

  this.toString = function(){
    return 'Task: ' + text + '. Done: ' + done;
  }

  this.do = function(){
    this.done = true;
  };

  this.undo = function(){
    this.done = false;
  };

  this.isDone = function(){
    return this.done;
  };

  this.hasText = function(aText){
    return this.text === aText;
  };
};