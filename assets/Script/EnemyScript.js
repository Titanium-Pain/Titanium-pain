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
        sightDetectRaidus:80,
        hearingDetectRadius:40,
        
    },

    // use this for initialization
    onLoad: function () {
        
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
