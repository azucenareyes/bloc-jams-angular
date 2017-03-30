(function() {
    //This is the SongPlayer service
    // @desc private attribute for our SongPlayer service
    // @type object, array, number, boolean, null? = object
    function SongPlayer(Fixtures) {

      var SongPlayer = {};
      //@desc private attirubute function
      //@type function
      var currentAlbum = Fixtures.getAlbum();

      var currentBuzzObject = null; //private attribute for our SongPlayer service
      /*
       * @function playSong
       * @desc This is a function that has a method of play and a method with a boolean?
       * @param {Object} song
       * @returns {Number}
       */
      var playSong = function(song) {
        currentBuzzObject.play();
        song.playing = true;
      };

      var setSong = function(song) { //this is a private function(setSong)
        if (currentBuzzObject) {
          currentBuzzObject.stop();
          SongPlayer.currentSong.playing = null;
        }
        currentBuzzObject = new buzz.sound(song.audioUrl, {
          formats: ['mp3'],
          preload: true
        });
        SongPlayer.currentSong = song;
      };
      var getSongIndex = function(song) {
        return currentAlbum.songs.indexOf(song);
      };
      SongPlayer.currentSong = null; //changed this from private to pubic somehow, so that we can use it in player bar.
      SongPlayer.play = function(song) { //public method
        song = song || SongPlayer.currentSong; // either assign the value of song or the value of SongPlayer.currentSong
        if (SongPlayer.currentSong !== song) {
          setSong(song);
          playSong(song);
        } else if (SongPlayer.currentSong === song) {
          song = song || Songplayer.currentSong;
          if (currentBuzzObject.isPaused()) {
            playSong(song);
          }
        }
      };
      SongPlayer.pause = function(song) { //public method
        song = song || SongPlayer.currentSong;
        currentBuzzObject.pause();
        song.playing = false;
      };
      SongPlayer.previous = function() {
        var currentSongIndex = getSongIndex(SongPlayer.currentSong); //what song are we on
        currentSongIndex--; //subtract one
        //if index doesn't exist
        if (currentSongIndex < 0) {
          currentBuzzObject.stop();
          SongPlayer.currentSong.playing = null;
        //if index does exist
        } else {
        var song = currentAlbum.songs[currentSongIndex];  //grab the song using the new index
        setSong(song);
        playSong(song);
      }
    };
    return SongPlayer;
  }
  /*
    @desc changes current song to prior song
    @function previous is a method to go to previous song
    @parameter none
    @returns
    */
  angular
  .module('blocJams')
  .factory('SongPlayer', ['Fixtures', SongPlayer]);
})();
