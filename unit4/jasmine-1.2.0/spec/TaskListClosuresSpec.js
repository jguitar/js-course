describe("TaskListClosures", function() {
  it('adds a new task', function(){
    add('a task');
    expect(taskList.length).toEqual(1);
  });

  it('removes a valid task', function(){
    remove('a task');
    expect(taskList.length).toEqual(0);
  });

  it('do a valid task', function(){
    add('a task');
    expect(taskList[0].done).toEqual(false);
    doTask('a task');
    expect(taskList[0].done).toEqual(true);
  });

  it('returns a done list', function(){
    // hack to empty all
    remove('a task');

    add('a task');
    expect(doneList().length).toEqual(0);
    doTask('a task');
    expect(doneList().length).toEqual(1);
  });

  it('returns a pending list', function(){
    // hack to empty all
    remove('a task');

    add('a task');
    expect(pendingList().length).toEqual(1);
    doTask('a task');
    expect(pendingList().length).toEqual(0);
  });

  it('returns all tasks', function(){
    // hack to empty all
    remove('a task');

    add('a task1');
    add('a task2');
    add('a task3');
    add('a task4');
    expect(all().length).toEqual(4);

  });

});
