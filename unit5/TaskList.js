var TaskList = function(){

  var taskList = [];

  this.add = function(text){
    var task = new Task(text);
    taskList.push(task);
  }

  this.remove = function(text){
    var selected = -1;
    iterator(function(task, index){
      if (task.hasText(text)){
        selected = index;
      }
    });
    taskList.splice(selected, 1);
  }

  this.doTask = function(text){
    iterator(function(task){
      if (task.hasText(text)){
        task.do();
      }
    });
  }

  this.doneList = function(){
    var doneTasks = [];
    iterator(function(task){
      if (task.isDone()) {
        doneTasks.push(task);
      }
    })
    return doneTasks;
  }

  this.pendingList = function(){
    var pendingTasks = [];
    iterator(function(task){
      if (!task.isDone()) {
        pendingTasks.push(task);
      }
    });
    return pendingTasks;
  }

  this.all = function(){
    return taskList;
  }

  this.clear = function(){
    taskList = [];
  }

  this.toConsole = function(){
    iterator(function(task){
      console.log(task.toString());
    });
  }

  var iterator = function(operation){
    for (var i = 0; i < taskList.length; i++){
      operation(taskList[i], i);
    }
  }
};

var aTaskList = new TaskList();
