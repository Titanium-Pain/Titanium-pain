"use strict";
cc._RFpush(module, '4d753Wha7lJFY7hl0Pp2d1l', 'LabelAnimation');
// Script\LabelAnimation.js

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
        var anim = this.getComponent(cc.Animation);
        anim.play('6');
    },

    // called every frame, uncomment this function to activate update callback
    onOp2Finished: function onOp2Finished() {
        var anim = this.getComponent(cc.Animation);
        anim.play('6');
    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});

cc._RFpop();