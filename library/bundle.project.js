require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"AnimOp":[function(require,module,exports){
"use strict";
cc._RFpush(module, '4e3baV0NxpJN499jOJaFuhI', 'AnimOp');
// Script\AnimOp.js

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
        anim.play('1');
    },

    // called every frame, uncomment this function to activate update callback
    onOpFinish: function onOpFinish() {
        cc.director.loadScene('Title');
    }
});

cc._RFpop();
},{}],"EnemyScript":[function(require,module,exports){
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
        count: 0
    },

    // use this for initialization
    onLoad: function onLoad() {
        this.count = 0;
    },

    outOfTheWall: function outOfTheWall() {
        if (this.node.x > 480 || this.node.x < -480 || this.node.y > 320 || this.node.y < -320) {
            return true;
        }
        return false;
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
            var rand = Math.floor(Math.random() * (24 + 1));
            switch (rand) {
                case 1:
                    this.node.x += this.speed;
                    /*if(this.outOfTheWall()){
                        this.node.x-=this.speed;
                    }*/
                    break;
                case 2:
                    this.node.x -= this.speed;
                    /*if(this.outOfTheWall()){
                        this.node.x+=this.speed;
                    }*/
                    break;
                case 3:
                    this.node.y += this.speed;
                    /*if(this.outOfTheWall()){
                        this.node.y-=this.speed;
                    }*/
                    break;
                case 4:
                    this.node.y -= this.speed;
                    /*if(this.outOfTheWall()){
                        this.node.y+=this.speed;
                    }*/
                    break;
                case 5:
                    this.node.x -= this.speed * 0.8;
                    this.node.y += this.speed * 0.6;
                    /*if(this.outOfTheWall()){
                        this.node.x+=this.speed * 0.8;
                        this.node.y-=this.speed * 0.6;
                    }*/
                    break;
                case 6:
                    this.node.x -= this.speed * 0.6;
                    this.node.y += this.speed * 0.8;
                    /*if(this.outOfTheWall()){
                        this.node.x+=this.speed * 0.6;
                        this.node.y-=this.speed * 0.8;
                    }*/
                    break;
                case 7:
                    this.node.x += this.speed * 0.6;
                    this.node.y += this.speed * 0.8;
                    /*if(this.outOfTheWall()){
                        this.node.x-=this.speed * 0.6;
                        this.node.y-=this.speed * 0.8;
                    }*/
                    break;
                case 8:
                    this.node.x -= this.speed * 0.6;
                    this.node.y -= this.speed * 0.8;
                    /*if(this.outOfTheWall()){
                        this.node.x+=this.speed * 0.6;
                        this.node.y+=this.speed * 0.8;
                    }*/
                    break;
                case 9:
                    this.node.x -= this.speed * 0.8;
                    this.node.y -= this.speed * 0.6;
                    /*if(this.outOfTheWall()){
                        this.node.x+=this.speed * 0.8;
                        this.node.y+=this.speed * 0.6;
                    }*/
                    break;
                case 10:
                    this.node.x += this.speed * 0.8;
                    this.node.y += this.speed * 0.6;
                    /*if(this.outOfTheWall()){
                        this.node.x-=this.speed * 0.8;
                        this.node.y-=this.speed * 0.6;
                    }*/
                    break;
                case 11:
                    this.node.x += this.speed * 0.8;
                    this.node.y -= this.speed * 0.6;
                    /*if(this.outOfTheWall()){
                        this.node.x-=this.speed * 0.8;
                        this.node.y+=this.speed * 0.6;
                    }*/
                    break;
                case 12:
                    this.node.x += this.speed * 0.6;
                    this.node.y -= this.speed * 0.8;
                    /*if(this.outOfTheWall()){
                        this.node.x-=this.speed * 0.6;
                        this.node.y+=this.speed * 0.8;
                    }*/
                    break;
            }
            this.count = 0;
        }
    }
});

cc._RFpop();
},{}],"MainLoop":[function(require,module,exports){
"use strict";
cc._RFpush(module, 'c20f4tSvydGS5qRzvn5G9z9', 'MainLoop');
// Script\MainLoop.js

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
    },

    // use this for initialization
    onLoad: function onLoad() {}

});
// called every frame, uncomment this function to activate update callback
// update: function (dt) {

// },

cc._RFpop();
},{}],"StartGame":[function(require,module,exports){
"use strict";
cc._RFpush(module, '36629pAxdpBI4tOsHKceOZu', 'StartGame');
// Script\StartGame.js

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
                        cc.director.loadScene('Mainloop');
                        break;
                    case cc.KEY.l:
                        break;
                }
            }
        }, self.node);
    },

    StartGame: function StartGame() {
        cc.director.loadScene('Mainloop');
    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});

cc._RFpop();
},{}]},{},["StartGame","AnimOp","EnemyScript","MainLoop"])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL0FwcERhdGEvTG9jYWwvQ29jb3NDcmVhdG9yL2FwcC0xLjAuMy9yZXNvdXJjZXMvYXBwLmFzYXIvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsImFzc2V0cy9TY3JpcHQvQW5pbU9wLmpzIiwiYXNzZXRzL1NjcmlwdC9FbmVteVNjcmlwdC5qcyIsImFzc2V0cy9TY3JpcHQvTWFpbkxvb3AuanMiLCJhc3NldHMvU2NyaXB0L1N0YXJ0R2FtZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4SkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnNGUzYmFWME54cEpONDk5ak9KYUZ1aEknLCAnQW5pbU9wJyk7XG4vLyBTY3JpcHRcXEFuaW1PcC5qc1xuXG5jYy5DbGFzcyh7XG4gICAgJ2V4dGVuZHMnOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIC8vIGZvbzoge1xuICAgICAgICAvLyAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAvLyAgICB1cmw6IGNjLlRleHR1cmUyRCwgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XG4gICAgICAgIC8vICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxuICAgICAgICAvLyAgICB2aXNpYmxlOiB0cnVlLCAgICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcbiAgICAgICAgLy8gICAgZGlzcGxheU5hbWU6ICdGb28nLCAvLyBvcHRpb25hbFxuICAgICAgICAvLyAgICByZWFkb25seTogZmFsc2UsICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIGZhbHNlXG4gICAgICAgIC8vIH0sXG4gICAgICAgIC8vIC4uLlxuICAgIH0sXG5cbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uIG9uTG9hZCgpIHtcbiAgICAgICAgdmFyIGFuaW0gPSB0aGlzLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pO1xuICAgICAgICBhbmltLnBsYXkoJzEnKTtcbiAgICB9LFxuXG4gICAgLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lLCB1bmNvbW1lbnQgdGhpcyBmdW5jdGlvbiB0byBhY3RpdmF0ZSB1cGRhdGUgY2FsbGJhY2tcbiAgICBvbk9wRmluaXNoOiBmdW5jdGlvbiBvbk9wRmluaXNoKCkge1xuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ1RpdGxlJyk7XG4gICAgfVxufSk7XG5cbmNjLl9SRnBvcCgpOyIsIlwidXNlIHN0cmljdFwiO1xuY2MuX1JGcHVzaChtb2R1bGUsICc2NjhjYTRINGc1S3BKdmxyRHdOeTQ1TScsICdFbmVteVNjcmlwdCcpO1xuLy8gU2NyaXB0XFxFbmVteVNjcmlwdC5qc1xuXG5jYy5DbGFzcyh7XG4gICAgXCJleHRlbmRzXCI6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLy8gZm9vOiB7XG4gICAgICAgIC8vICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgIC8vICAgIHVybDogY2MuVGV4dHVyZTJELCAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcbiAgICAgICAgLy8gICAgc2VyaWFsaXphYmxlOiB0cnVlLCAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXG4gICAgICAgIC8vICAgIHZpc2libGU6IHRydWUsICAgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxuICAgICAgICAvLyAgICBkaXNwbGF5TmFtZTogJ0ZvbycsIC8vIG9wdGlvbmFsXG4gICAgICAgIC8vICAgIHJlYWRvbmx5OiBmYWxzZSwgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgZmFsc2VcbiAgICAgICAgLy8gfSxcbiAgICAgICAgLy8gLi4uXG4gICAgICAgIHNpZ2h0RGV0ZWN0UmFpZHVzOiA4MCxcbiAgICAgICAgaGVhcmluZ0RldGVjdFJhZGl1czogNDAsXG4gICAgICAgIHBldHJvbGNvb2xkb3duOiAxLFxuICAgICAgICBzcGVlZDogMCxcbiAgICAgICAgY291bnQ6IDBcbiAgICB9LFxuXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXG4gICAgb25Mb2FkOiBmdW5jdGlvbiBvbkxvYWQoKSB7XG4gICAgICAgIHRoaXMuY291bnQgPSAwO1xuICAgIH0sXG5cbiAgICBvdXRPZlRoZVdhbGw6IGZ1bmN0aW9uIG91dE9mVGhlV2FsbCgpIHtcbiAgICAgICAgaWYgKHRoaXMubm9kZS54ID4gNDgwIHx8IHRoaXMubm9kZS54IDwgLTQ4MCB8fCB0aGlzLm5vZGUueSA+IDMyMCB8fCB0aGlzLm5vZGUueSA8IC0zMjApIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9LFxuXG4gICAgLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lLCB1bmNvbW1lbnQgdGhpcyBmdW5jdGlvbiB0byBhY3RpdmF0ZSB1cGRhdGUgY2FsbGJhY2tcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShkdCkge1xuXG4gICAgICAgIC8qdmFyIHJhbmQ9TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKigzKzEpKTtcbiAgICAgICAgc3dpdGNoKHJhbmQpe1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS54Kz10aGlzLnNwZWVkO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS54LT10aGlzLnNwZWVkO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS55Kz10aGlzLnNwZWVkO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS55LT10aGlzLnNwZWVkO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9Ki9cbiAgICAgICAgdGhpcy5jb3VudCsrO1xuICAgICAgICBpZiAodGhpcy5jb3VudCA+PSB0aGlzLnBldHJvbGNvb2xkb3duKSB7XG4gICAgICAgICAgICB2YXIgcmFuZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICgyNCArIDEpKTtcbiAgICAgICAgICAgIHN3aXRjaCAocmFuZCkge1xuICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLnggKz0gdGhpcy5zcGVlZDtcbiAgICAgICAgICAgICAgICAgICAgLyppZih0aGlzLm91dE9mVGhlV2FsbCgpKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS54LT10aGlzLnNwZWVkO1xuICAgICAgICAgICAgICAgICAgICB9Ki9cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUueCAtPSB0aGlzLnNwZWVkO1xuICAgICAgICAgICAgICAgICAgICAvKmlmKHRoaXMub3V0T2ZUaGVXYWxsKCkpe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLngrPXRoaXMuc3BlZWQ7XG4gICAgICAgICAgICAgICAgICAgIH0qL1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS55ICs9IHRoaXMuc3BlZWQ7XG4gICAgICAgICAgICAgICAgICAgIC8qaWYodGhpcy5vdXRPZlRoZVdhbGwoKSl7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUueS09dGhpcy5zcGVlZDtcbiAgICAgICAgICAgICAgICAgICAgfSovXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLnkgLT0gdGhpcy5zcGVlZDtcbiAgICAgICAgICAgICAgICAgICAgLyppZih0aGlzLm91dE9mVGhlV2FsbCgpKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS55Kz10aGlzLnNwZWVkO1xuICAgICAgICAgICAgICAgICAgICB9Ki9cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUueCAtPSB0aGlzLnNwZWVkICogMC44O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUueSArPSB0aGlzLnNwZWVkICogMC42O1xuICAgICAgICAgICAgICAgICAgICAvKmlmKHRoaXMub3V0T2ZUaGVXYWxsKCkpe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLngrPXRoaXMuc3BlZWQgKiAwLjg7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUueS09dGhpcy5zcGVlZCAqIDAuNjtcbiAgICAgICAgICAgICAgICAgICAgfSovXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLnggLT0gdGhpcy5zcGVlZCAqIDAuNjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLnkgKz0gdGhpcy5zcGVlZCAqIDAuODtcbiAgICAgICAgICAgICAgICAgICAgLyppZih0aGlzLm91dE9mVGhlV2FsbCgpKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS54Kz10aGlzLnNwZWVkICogMC42O1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLnktPXRoaXMuc3BlZWQgKiAwLjg7XG4gICAgICAgICAgICAgICAgICAgIH0qL1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS54ICs9IHRoaXMuc3BlZWQgKiAwLjY7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS55ICs9IHRoaXMuc3BlZWQgKiAwLjg7XG4gICAgICAgICAgICAgICAgICAgIC8qaWYodGhpcy5vdXRPZlRoZVdhbGwoKSl7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUueC09dGhpcy5zcGVlZCAqIDAuNjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS55LT10aGlzLnNwZWVkICogMC44O1xuICAgICAgICAgICAgICAgICAgICB9Ki9cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA4OlxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUueCAtPSB0aGlzLnNwZWVkICogMC42O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUueSAtPSB0aGlzLnNwZWVkICogMC44O1xuICAgICAgICAgICAgICAgICAgICAvKmlmKHRoaXMub3V0T2ZUaGVXYWxsKCkpe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLngrPXRoaXMuc3BlZWQgKiAwLjY7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUueSs9dGhpcy5zcGVlZCAqIDAuODtcbiAgICAgICAgICAgICAgICAgICAgfSovXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgOTpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLnggLT0gdGhpcy5zcGVlZCAqIDAuODtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLnkgLT0gdGhpcy5zcGVlZCAqIDAuNjtcbiAgICAgICAgICAgICAgICAgICAgLyppZih0aGlzLm91dE9mVGhlV2FsbCgpKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS54Kz10aGlzLnNwZWVkICogMC44O1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLnkrPXRoaXMuc3BlZWQgKiAwLjY7XG4gICAgICAgICAgICAgICAgICAgIH0qL1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDEwOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUueCArPSB0aGlzLnNwZWVkICogMC44O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUueSArPSB0aGlzLnNwZWVkICogMC42O1xuICAgICAgICAgICAgICAgICAgICAvKmlmKHRoaXMub3V0T2ZUaGVXYWxsKCkpe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLngtPXRoaXMuc3BlZWQgKiAwLjg7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUueS09dGhpcy5zcGVlZCAqIDAuNjtcbiAgICAgICAgICAgICAgICAgICAgfSovXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMTE6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS54ICs9IHRoaXMuc3BlZWQgKiAwLjg7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS55IC09IHRoaXMuc3BlZWQgKiAwLjY7XG4gICAgICAgICAgICAgICAgICAgIC8qaWYodGhpcy5vdXRPZlRoZVdhbGwoKSl7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUueC09dGhpcy5zcGVlZCAqIDAuODtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS55Kz10aGlzLnNwZWVkICogMC42O1xuICAgICAgICAgICAgICAgICAgICB9Ki9cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAxMjpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLnggKz0gdGhpcy5zcGVlZCAqIDAuNjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLnkgLT0gdGhpcy5zcGVlZCAqIDAuODtcbiAgICAgICAgICAgICAgICAgICAgLyppZih0aGlzLm91dE9mVGhlV2FsbCgpKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS54LT10aGlzLnNwZWVkICogMC42O1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLnkrPXRoaXMuc3BlZWQgKiAwLjg7XG4gICAgICAgICAgICAgICAgICAgIH0qL1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY291bnQgPSAwO1xuICAgICAgICB9XG4gICAgfVxufSk7XG5cbmNjLl9SRnBvcCgpOyIsIlwidXNlIHN0cmljdFwiO1xuY2MuX1JGcHVzaChtb2R1bGUsICdjMjBmNHRTdnlkR1M1cVJ6dm41Rzl6OScsICdNYWluTG9vcCcpO1xuLy8gU2NyaXB0XFxNYWluTG9vcC5qc1xuXG5jYy5DbGFzcyh7XG4gICAgXCJleHRlbmRzXCI6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLy8gZm9vOiB7XG4gICAgICAgIC8vICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgIC8vICAgIHVybDogY2MuVGV4dHVyZTJELCAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcbiAgICAgICAgLy8gICAgc2VyaWFsaXphYmxlOiB0cnVlLCAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXG4gICAgICAgIC8vICAgIHZpc2libGU6IHRydWUsICAgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxuICAgICAgICAvLyAgICBkaXNwbGF5TmFtZTogJ0ZvbycsIC8vIG9wdGlvbmFsXG4gICAgICAgIC8vICAgIHJlYWRvbmx5OiBmYWxzZSwgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgZmFsc2VcbiAgICAgICAgLy8gfSxcbiAgICAgICAgLy8gLi4uXG4gICAgfSxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gb25Mb2FkKCkge31cblxufSk7XG4vLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xuLy8gdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcblxuLy8gfSxcblxuY2MuX1JGcG9wKCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5jYy5fUkZwdXNoKG1vZHVsZSwgJzM2NjI5cEF4ZHBCSTR0T3NIS2NlT1p1JywgJ1N0YXJ0R2FtZScpO1xuLy8gU2NyaXB0XFxTdGFydEdhbWUuanNcblxuY2MuQ2xhc3Moe1xuICAgICdleHRlbmRzJzogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICAvLyBmb286IHtcbiAgICAgICAgLy8gICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgLy8gICAgdXJsOiBjYy5UZXh0dXJlMkQsICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0eXBlb2YgZGVmYXVsdFxuICAgICAgICAvLyAgICBzZXJpYWxpemFibGU6IHRydWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcbiAgICAgICAgLy8gICAgdmlzaWJsZTogdHJ1ZSwgICAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXG4gICAgICAgIC8vICAgIGRpc3BsYXlOYW1lOiAnRm9vJywgLy8gb3B0aW9uYWxcbiAgICAgICAgLy8gICAgcmVhZG9ubHk6IGZhbHNlLCAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyBmYWxzZVxuICAgICAgICAvLyB9LFxuICAgICAgICAvLyAuLi5cbiAgICB9LFxuXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXG4gICAgb25Mb2FkOiBmdW5jdGlvbiBvbkxvYWQoKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgY2MuZXZlbnRNYW5hZ2VyLmFkZExpc3RlbmVyKHtcbiAgICAgICAgICAgIGV2ZW50OiBjYy5FdmVudExpc3RlbmVyLktFWUJPQVJELFxuICAgICAgICAgICAgb25LZXlQcmVzc2VkOiBmdW5jdGlvbiBvbktleVByZXNzZWQoa2V5Q29kZSwgZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGtleUNvZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBjYy5LRVkuczpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnTWFpbmxvb3AnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIGNjLktFWS5sOlxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LCBzZWxmLm5vZGUpO1xuICAgIH0sXG5cbiAgICBTdGFydEdhbWU6IGZ1bmN0aW9uIFN0YXJ0R2FtZSgpIHtcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdNYWlubG9vcCcpO1xuICAgIH1cblxuICAgIC8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXG4gICAgLy8gdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcblxuICAgIC8vIH0sXG59KTtcblxuY2MuX1JGcG9wKCk7Il19
