"use strict";
cc._RFpush(module, '668ca4H4g5KpJvlrDwNy45M', 'EnemyScript');
// Script\EnemyScript.js

cc.Class({
    "extends": cc.Component,

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
        sightDetectRaidus: 80,
        hearingDetectRadius: 40,
        petrolcooldown: 1,
        speed: 0,
        count: 0,
        rand: 0
    },

    // use this for initialization
    onLoad: function onLoad() {
        this.count = 0;
    },

    // called every frame, uncomment this function to activate update callback
    update: function update(dt) {

        /*var rand=Math.floor(Math.random()*(3+1));
        switch(rand){
            case 0:
                this.node.x+=this.speed;
                break;
            case 1:
                this.node.x-=this.speed;
                break;
            case 2:
                this.node.y+=this.speed;
                break;
            case 3:
                this.node.y-=this.speed;
                break;
        }*/
        this.count++;
        if (this.count >= this.petrolcooldown) {
            this.rand = Math.floor(Math.random() * 4 + 1);
            this.count = 0;
        }
        switch (this.rand) {
            case 1:
                this.node.x += this.speed;
                break;
            case 2:
                this.node.x -= this.speed;
                break;
            case 3:
                this.node.y += this.speed;
                break;
            case 4:
                this.node.y -= this.speed;
                break;
        }
    }
});

cc._RFpop();