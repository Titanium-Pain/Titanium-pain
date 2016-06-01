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
    },

    // use this for initialization
    onLoad: function () {
        var anim = this.getComponent(cc.Animation);
        anim.play('5');
        var self = this;
        cc.eventManager.addListener({
            event: cc.EventListener.KEYBOARD,
            onKeyPressed: function(keyCode, event) {
                switch(keyCode) {
                    case cc.KEY.s:
                        cc.director.loadScene('Title');
                        break;
                }
            },
        }, self.node);
    },
    

    // called every frame, uncomment this function to activate update callback
    onStoryFinished:function(){
       cc.director.loadScene('Title');
    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
