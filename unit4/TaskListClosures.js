var taskList = [];

var add = function(text){
  var task = {
    text: text,
    done: false
  }
  taskList.push(task);
}

var remove = function(text){
  selected = -1;
  iterator(function(task, index){
    if (task.text === text){
      selected = index;
    }
  });
  taskList.splice(selected, 1);
}

var doTask = function(text){
  iterator(function(task){
    if (task.text === text){
      task.done = true;
    }
  });
}

var doneList = function(){
  doneTasks = [];
  iterator(function(task){
    if (task.done) {
      doneTasks.push(task);
    }
  })
  return doneTasks;
}

var pendingList = function(){
  pendingTasks = [];
  iterator(function(task){
    if (!task.done) {
      pendingTasks.push(task);
    }
  });
  return pendingTasks;
}

var all = function(){
  return taskList;
}

var toConsole = function(){
  iterator(function(task, index){
    console.log('Task #', index + 1 + ':', task.text, '. Done:', task.done);
  });
}

var iterator = function(operation){
  for (var i = 0; i < taskList.length; i++){
    operation(taskList[i], i);
  }
}