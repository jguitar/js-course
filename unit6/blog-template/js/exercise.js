function addIcon() {
  var content = document.getElementById('content');
  var titles = content.getElementsByTagName('h1');
  for (var i = 0; i < titles.length; i++){
    icon = document.createElement('img');
    icon.src = 'images/blog.png';
    titles[i].insertBefore(icon);
  }
}

function removeBlogArchive(){
  var archive = document.getElementById('archive');
  archive.parentNode.removeChild(archive); // archive.innerHTML = '';
}

function addBlogRoll() {
  var sidebar = document.getElementById('sidebar');
  var widget = createWidget('Blog Roll', ['texto 1', 'algo mejor', 'un buen post']);
  sidebar.appendChild(widget);
}

function createWidget(title, elements){
  var widget = document.createElement('div');
  widget.className = 'widget';

  var h2 = createH2(title);
  widget.appendChild(h2);
  var content = createContent(elements);
  widget.appendChild(content);
  return widget;
}

function createH2(title){
  var h2 = document.createElement('h2');
  h2.innerHTML = title;
  return h2;
}

function createContent(elements){
  var content = document.createElement('div');
  content.className = 'contentarea';

  var list = document.createElement('ul');
  for (var i = 0; i < elements.length; i++){
    var link = document.createElement('a');
    link.href = '#';
    link.innerHTML = elements[i];
    var li = document.createElement('li');
    li.appendChild(link);
    list.appendChild(li);
  }
  content.appendChild(list);
  return content;
}
