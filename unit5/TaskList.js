var taskList = [];

var add = function(text){
  var task = new Task(text);
  taskList.push(task);
}

var remove = function(text){
  selected = -1;
  iterator(function(task, index){
    if (task.hasText(text)){
      selected = index;
    }
  });
  taskList.splice(selected, 1);
}

var doTask = function(text){
  iterator(function(task){
    if (task.hasText(text)){
      task.do();
    }
  });
}

var doneList = function(){
  doneTasks = [];
  iterator(function(task){
    if (task.isDone()) {
      doneTasks.push(task);
    }
  })
  return doneTasks;
}

var pendingList = function(){
  pendingTasks = [];
  iterator(function(task){
    if (!task.isDone()) {
      pendingTasks.push(task);
    }
  });
  return pendingTasks;
}

var all = function(){
  return taskList;
}

var toConsole = function(){
  iterator(function(task){
    console.log(task.toString());
  });
}

var iterator = function(operation){
  for (var i = 0; i < taskList.length; i++){
    operation(taskList[i], i);
  }
}