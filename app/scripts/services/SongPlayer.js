(function() {//This is the SongPlayer service
  function SongPlayer() {
    var SongPlayer = {};
    var currentSong = null;//private attrubute for our SongPlayer service
/*  @desc Buzz object audio file
*@type 
  */
    var currentBuzzObject = null;//private attribute for our SongPlayer service
    /*
     * @function setSong
     * @desc Stops currently playing song and loads new audio file as currentBuzzObject
     * @param {Object} song
     * @returns {Number}
     */

    var setSong = function(song) {//this is a private function(setSong)
      if (currentBuzzObject) {
        currentBuzzObject.stop();
        currentSong.playing = null;
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
        currentBuzzObject.play();
        song.playing = true;
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
