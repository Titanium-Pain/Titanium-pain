"use strict";
cc._RFpush(module, 'c9c22MJeHlFsIchbvM7DuGK', 'Bullet');
// Script\Bullet.js

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
        speed: 10,
        direction: 0,
        shootingrange: 250
    },

    // use this for initialization
    onLoad: function onLoad() {
        this.node.parent.getComponent("Player").playShootSound();
    },

    outOfTheWall: function outOfTheWall() {
        if (this.node.x > this.shootingrange || this.node.x < -this.shootingrange || this.node.y > this.shootingrange || this.node.y < -this.shootingrange) {
            return true;
        }
        return false;
    },

    // called every frame, uncomment this function to activate update callback
    update: function update(dt) {
        /*switch(this.direction){
            case 0:
                this.node.y+=this.speed;
                break;
            case 1:
                this.node.x+=this.speed;
                break;
            case 2:
                this.node.y-=this.speed;
                break;
            case 3:
                this.node.x-=this.speed;
                break;
        }*/
        this.node.y += this.speed;
        if (this.outOfTheWall()) {
            this.node.destroy();
        }
    }
});

cc._RFpop();