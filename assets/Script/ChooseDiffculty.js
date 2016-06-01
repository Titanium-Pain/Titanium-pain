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
        reference: {
            default: null,
            type:cc.Node,
        },
    },

    // use this for initialization
    onLoad: function () {

    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
    
    chooseEasy:function(){
        window.Global.diffculty=0;
        cc.director.loadScene("Mainloop");
    },
    
    chooseNormal:function(){
        window.Global.diffculty=1;
        cc.director.loadScene("Mainloop");
    },
    
    chooseHard:function(){
        window.Global.diffculty=2;
        cc.director.loadScene("Mainloop");
    },
});
