var taskList = [];

var add = function(text){
  var task = {
    text: text,
    done: false
  }
  taskList.push(task);
}

var remove = function(text){
  iterator(function(i, task){
    if (task.text === text){
      taskList.splice(i, 1);
      return true;
    }
  });
}

var doTask = function(text){
  iterator(function(i, task){
    if (task.text === text){
      task.done = true;
      return true;
    }
  });
}

var doneList = function(){
  result = [];
  iterator(function(i, task){
    if (task.done) {
      result.push(task);
    }
  })
  return result;
}

var pendingList = function(){
  result = [];
  iterator(function(i, task){
    if (!task.done) {
      result.push(task);
    }
  });
  return result;
}

var all = function(){
  return taskList;
}

var toConsole = function(){
  iterator(function(i, task){
    console.log('Task #', i + 1 + ':', task.text, '. Done:', task.done);
  });
}

var iterator = function(operation){
  for (var i = 0; i < taskList.length; i++){
    operation(i, taskList[i]);
  }
}