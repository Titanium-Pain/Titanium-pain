cc.Class({
    'extends': cc.Component,

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
    onLoad: function onLoad() {
        var self = this;
        cc.eventManager.addListener({
            event: cc.EventListener.KEYBOARD,
            onKeyPressed: function onKeyPressed(keyCode, event) {
                switch (keyCode) {
                    case cc.KEY.s:
                        cc.director.loadScene('ChooseMap');
                        break;
                    case cc.KEY.l:
                        break;
                }
            }
        }, self.node);
    },

    StartGame: function StartGame() {}
    //cc.director.loadScene('Mainloop');

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});