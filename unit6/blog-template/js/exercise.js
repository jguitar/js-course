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
  var widget = document.createElement('div');
  widget.className = 'widget';

  var h2 = document.createElement('h2');
  h2.innerHTML = 'Blog roll';

  var content = document.createElement('div');
  content.className = 'contentarea';

  var list = document.createElement('ul');
  for (var i = 0; i < 3; i++){
    var li = document.createElement('li');
    li.innerHTML = 'mi texto' + (i + 1);
    list.appendChild(li);
  }
  content.appendChild(list);

  widget.appendChild(h2);
  widget.appendChild(content);

  var sidebar = document.getElementById('sidebar');
  sidebar.appendChild(widget);
}
