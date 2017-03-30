(function() {
  //This is the SongPlayer service
  // @desc private attribute for our SongPlayer service
  // @type object, array, number, boolean, null? = object
  function SongPlayer() {

    var SongPlayer = {};
    var currentSong = null;
    var currentBuzzObject = null;//private attribute for our SongPlayer service
    /*
     * @function playSong
     * @desc This is a function that has a method of play and a method with a boolean?
     * @param {Object} song
     * @returns {Number}
     */
    var playSong = function(song) {
      currentBuzzObject.play();
      song.playing = true;
    }

    var setSong = function(song) {//this is a private function(setSong)
      if (currentBuzzObject) {
        currentBuzzObject.stop();
        currentSong.playing = null;
        /*
         * @function setSong
         * @desc Stops currently playing song and loads new audio file as currentBuzzObject
         * @param {Object} song
         * @returns {Number}
         */
      }
      currentBuzzObject = new buzz.sound(song.audioUrl, {
        formats: ['mp3'],
        preload: true
      });
      currentSong = song;
    };

    SongPlayer.play = function(song) {//public method
      if (currentSong !== song) {
        setSong(song);
        playSong(song);
      } else if (currentSong === song) {
        if (currentBuzzObject.isPaused()) {
          playSong(song)
        }
      }
    };
    SongPlayer.pause = function(song) {//public method
      currentBuzzObject.pause();
      song.playing = false;
    };
    return SongPlayer;
  }

  angular
    .module('blocJams')
    .factory('SongPlayer', SongPlayer);
})();
