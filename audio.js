document.addEventListener('play', function(e){
    var Song = document.getElementsByTagName('audio');
    for(var i = 0; i<Song.length; i++){
        if(Song[i] != e.target){
            Song[i].pause();
        }
    }
}, true);