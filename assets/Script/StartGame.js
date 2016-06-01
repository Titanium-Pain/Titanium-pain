cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //    default: null,
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
        startingmusic:{
            default:null,
            url:cc.AudioClip,
        },
    },

    // use this for initialization
    onLoad: function () {
        cc.audioEngine.playMusic(this.startingmusic);
        var self = this;
        cc.eventManager.addListener({
            event: cc.EventListener.KEYBOARD,
            onKeyPressed: function(keyCode, event) {
                switch(keyCode) {
                    case cc.KEY.s:
                        cc.director.loadScene('ChooseDiffculty');
                        break;
                    case cc.KEY.l:
                        break;
                }
            },
        }, self.node);
    },
    
    StartGame:function(){
        //cc.director.loadScene('Mainloop');
    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
