(function() {//This is the SongPlayer service
  function SongPlayer() {
    // @desc private attribute for our SongPlayer service
    // @type object, array, number, boolean, null? = object
    var SongPlayer = {};
    // @desc private attribute for our SongPlayer service
    // @type object, array, number, boolean, null? = null
    var currentSong = null;

  /*
 * @desc Buzz object audio file
 * @type {Object}
 */
    var currentBuzzObject = null;
    /*
     * @function playSong
     * @desc This is a function that has a method of play and a method with a boolean?
     * @param {Object} song
     * @returns {Number}
     */

    var playSong = function(){

      currentBuzzObject.play();
      song.playing = true;

    };
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
        playSong();
        /*currentBuzzObject.play();
        song.playing = true; */
      } else if (currentSong === song) {
        if (currentBuzzObject.isPaused()) {
          currentBuzzObject.play();
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
