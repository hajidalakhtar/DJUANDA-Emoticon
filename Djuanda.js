(function(window) {
    'use strict'
    function defineDjuanda(){
    var Djuanda = {};

        //  ============== emoticon ============= \\

        Djuanda.small = function(callback){
            document.getElementById(callback).innerHTML = "😀";
        }
        Djuanda.small1 = function(callback){
            document.getElementById(callback).innerHTML = "😁";
        }
        Djuanda.laugh = function(callback){
            document.getElementById(callback).innerHTML = "😂";
        }
        Djuanda.laugh1 = function(callback){
            document.getElementById(callback).innerHTML = "🤣";
        }
        Djuanda.love = function(callback){
            document.getElementById(callback).innerHTML = "😍";
        }
        Djuanda.grinning = function(callback){
            document.getElementById(callback).innerHTML = "😆";
        }
        Djuanda.slightly = function(callback){
            document.getElementById(callback).innerHTML = "🙂";
        }
        Djuanda.upsidedown = function(callback){
            document.getElementById(callback).innerHTML = "🙃";
        }
        Djuanda.winking  = function(callback){
            document.getElementById(callback).innerHTML = "😉";
        }
        Djuanda.angel = function(callback){
            document.getElementById(callback).innerHTML = "😇";
        }


        



        return Djuanda;
}

    if (typeof(Djuanda) === 'undefined') {
        window.Djuanda = defineDjuanda();
    }
})(window);
