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
        bgm:{
            default:null,
            url:cc.AudioClip,
        }
    },

    // use this for initialization
    onLoad: function () {
        cc.audioEngine.playMusic(this.bgm,true);
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
