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
                    case cc.KEY.f1:
                        //this.chooseEasy();
                        //console.log("entered");
                        cc.director.loadScene('ChooseDiffculty');
                        break;
                    /*case cc.KEY.f2:
                        //this.chooseNormal();
                        window.Global.diffculty=1;
                        cc.director.loadScene("Mainloop");
                        break;
                    case cc.KEY.f3:
                        //this.chooseHard();
                        window.Global.diffculty=2;
                        cc.director.loadScene("Mainloop");
                        break;
                    case cc.KEY.f4:
                        //this.chooseInsane();
                        window.Global.diffculty=3;
                        cc.director.loadScene("Mainloop");
                        break;*/
                }
            }
        }, self.node);
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {
    // },

    chooseMap1: function chooseMap1() {
        cc.director.loadScene('ChooseDiffculty');
    }
});