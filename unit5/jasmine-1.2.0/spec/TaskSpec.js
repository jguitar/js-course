describe("Task", function() {
  it('creates a new task', function(){
    var task = new Task('a task');
    expect(task.text).toBeUndefined();
  });

  it('formats to string', function(){
    var task = new Task('a task');
    expect(task.toString()).toEqual('Task: a task. Done: false');
  });

  it('should be undone by default', function(){
    var task = new Task('a task');
    expect(task.isDone).toBeFalsy;
  });

  it('does a task', function(){
    var task = new Task('a task');
    task.do();
    expect(task.isDone).toBeTruety;
  });

  it('undoes a task', function(){
    var task = new Task('a task');
    task.do();
    task.undo();
    expect(task.isDone).toBeFalsy;
  });

  it('can check for the same text', function(){
    var task = new Task('a task');
    expect(task.hasText('a task')).toBeTruety;
    expect(task.hasText('a task2')).toBeFalst;
  });


});
