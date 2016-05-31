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
        ispetrol: 1,
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

        this.count++;
        if (this.count >= this.petrolcooldown) {
<<<<<<< HEAD
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
=======
            if (this.ispetrol) {
                this.rand = Math.floor(Math.random() * 4 + 1);
                this.ispetrol = 0;
            } else {
                this.rand = 0;
                this.ispetrol = 1;
            }
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
>>>>>>> origin/master
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
<<<<<<< HEAD
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL0FwcERhdGEvTG9jYWwvQ29jb3NDcmVhdG9yL2FwcC0xLjAuMy9yZXNvdXJjZXMvYXBwLmFzYXIvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsImFzc2V0cy9TY3JpcHQvQW5pbU9wLmpzIiwiYXNzZXRzL1NjcmlwdC9FbmVteVNjcmlwdC5qcyIsImFzc2V0cy9TY3JpcHQvTWFpbkxvb3AuanMiLCJhc3NldHMvU2NyaXB0L1N0YXJ0R2FtZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4SkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnNGUzYmFWME54cEpONDk5ak9KYUZ1aEknLCAnQW5pbU9wJyk7XG4vLyBTY3JpcHRcXEFuaW1PcC5qc1xuXG5jYy5DbGFzcyh7XG4gICAgJ2V4dGVuZHMnOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIC8vIGZvbzoge1xuICAgICAgICAvLyAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAvLyAgICB1cmw6IGNjLlRleHR1cmUyRCwgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XG4gICAgICAgIC8vICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxuICAgICAgICAvLyAgICB2aXNpYmxlOiB0cnVlLCAgICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcbiAgICAgICAgLy8gICAgZGlzcGxheU5hbWU6ICdGb28nLCAvLyBvcHRpb25hbFxuICAgICAgICAvLyAgICByZWFkb25seTogZmFsc2UsICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIGZhbHNlXG4gICAgICAgIC8vIH0sXG4gICAgICAgIC8vIC4uLlxuICAgIH0sXG5cbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uIG9uTG9hZCgpIHtcbiAgICAgICAgdmFyIGFuaW0gPSB0aGlzLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pO1xuICAgICAgICBhbmltLnBsYXkoJzEnKTtcbiAgICB9LFxuXG4gICAgLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lLCB1bmNvbW1lbnQgdGhpcyBmdW5jdGlvbiB0byBhY3RpdmF0ZSB1cGRhdGUgY2FsbGJhY2tcbiAgICBvbk9wRmluaXNoOiBmdW5jdGlvbiBvbk9wRmluaXNoKCkge1xuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ1RpdGxlJyk7XG4gICAgfVxufSk7XG5cbmNjLl9SRnBvcCgpOyIsIlwidXNlIHN0cmljdFwiO1xuY2MuX1JGcHVzaChtb2R1bGUsICc2NjhjYTRINGc1S3BKdmxyRHdOeTQ1TScsICdFbmVteVNjcmlwdCcpO1xuLy8gU2NyaXB0XFxFbmVteVNjcmlwdC5qc1xuXG5jYy5DbGFzcyh7XG4gICAgXCJleHRlbmRzXCI6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLy8gZm9vOiB7XG4gICAgICAgIC8vICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgIC8vICAgIHVybDogY2MuVGV4dHVyZTJELCAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcbiAgICAgICAgLy8gICAgc2VyaWFsaXphYmxlOiB0cnVlLCAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXG4gICAgICAgIC8vICAgIHZpc2libGU6IHRydWUsICAgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxuICAgICAgICAvLyAgICBkaXNwbGF5TmFtZTogJ0ZvbycsIC8vIG9wdGlvbmFsXG4gICAgICAgIC8vICAgIHJlYWRvbmx5OiBmYWxzZSwgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgZmFsc2VcbiAgICAgICAgLy8gfSxcbiAgICAgICAgLy8gLi4uXG4gICAgICAgIHNpZ2h0RGV0ZWN0UmFpZHVzOiA4MCxcbiAgICAgICAgaGVhcmluZ0RldGVjdFJhZGl1czogNDAsXG4gICAgICAgIHBldHJvbGNvb2xkb3duOiAxLFxuICAgICAgICBzcGVlZDogMCxcbiAgICAgICAgY291bnQ6IDBcbiAgICB9LFxuXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXG4gICAgb25Mb2FkOiBmdW5jdGlvbiBvbkxvYWQoKSB7XG4gICAgICAgIHRoaXMuY291bnQgPSAwO1xuICAgIH0sXG5cbiAgICBvdXRPZlRoZVdhbGw6IGZ1bmN0aW9uIG91dE9mVGhlV2FsbCgpIHtcbiAgICAgICAgaWYgKHRoaXMubm9kZS54ID4gNDgwIHx8IHRoaXMubm9kZS54IDwgLTQ4MCB8fCB0aGlzLm5vZGUueSA+IDMyMCB8fCB0aGlzLm5vZGUueSA8IC0zMjApIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9LFxuXG4gICAgLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lLCB1bmNvbW1lbnQgdGhpcyBmdW5jdGlvbiB0byBhY3RpdmF0ZSB1cGRhdGUgY2FsbGJhY2tcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShkdCkge1xuXG4gICAgICAgIC8qdmFyIHJhbmQ9TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKigzKzEpKTtcclxuICAgICAgICBzd2l0Y2gocmFuZCl7XHJcbiAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS54Kz10aGlzLnNwZWVkO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS54LT10aGlzLnNwZWVkO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS55Kz10aGlzLnNwZWVkO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS55LT10aGlzLnNwZWVkO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfSovXG4gICAgICAgIHRoaXMuY291bnQrKztcbiAgICAgICAgaWYgKHRoaXMuY291bnQgPj0gdGhpcy5wZXRyb2xjb29sZG93bikge1xuICAgICAgICAgICAgdmFyIHJhbmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoMjQgKyAxKSk7XG4gICAgICAgICAgICBzd2l0Y2ggKHJhbmQpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS54ICs9IHRoaXMuc3BlZWQ7XG4gICAgICAgICAgICAgICAgICAgIC8qaWYodGhpcy5vdXRPZlRoZVdhbGwoKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS54LT10aGlzLnNwZWVkO1xyXG4gICAgICAgICAgICAgICAgICAgIH0qL1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS54IC09IHRoaXMuc3BlZWQ7XG4gICAgICAgICAgICAgICAgICAgIC8qaWYodGhpcy5vdXRPZlRoZVdhbGwoKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS54Kz10aGlzLnNwZWVkO1xyXG4gICAgICAgICAgICAgICAgICAgIH0qL1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS55ICs9IHRoaXMuc3BlZWQ7XG4gICAgICAgICAgICAgICAgICAgIC8qaWYodGhpcy5vdXRPZlRoZVdhbGwoKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS55LT10aGlzLnNwZWVkO1xyXG4gICAgICAgICAgICAgICAgICAgIH0qL1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS55IC09IHRoaXMuc3BlZWQ7XG4gICAgICAgICAgICAgICAgICAgIC8qaWYodGhpcy5vdXRPZlRoZVdhbGwoKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS55Kz10aGlzLnNwZWVkO1xyXG4gICAgICAgICAgICAgICAgICAgIH0qL1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS54IC09IHRoaXMuc3BlZWQgKiAwLjg7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS55ICs9IHRoaXMuc3BlZWQgKiAwLjY7XG4gICAgICAgICAgICAgICAgICAgIC8qaWYodGhpcy5vdXRPZlRoZVdhbGwoKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS54Kz10aGlzLnNwZWVkICogMC44O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUueS09dGhpcy5zcGVlZCAqIDAuNjtcclxuICAgICAgICAgICAgICAgICAgICB9Ki9cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUueCAtPSB0aGlzLnNwZWVkICogMC42O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUueSArPSB0aGlzLnNwZWVkICogMC44O1xuICAgICAgICAgICAgICAgICAgICAvKmlmKHRoaXMub3V0T2ZUaGVXYWxsKCkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUueCs9dGhpcy5zcGVlZCAqIDAuNjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLnktPXRoaXMuc3BlZWQgKiAwLjg7XHJcbiAgICAgICAgICAgICAgICAgICAgfSovXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLnggKz0gdGhpcy5zcGVlZCAqIDAuNjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLnkgKz0gdGhpcy5zcGVlZCAqIDAuODtcbiAgICAgICAgICAgICAgICAgICAgLyppZih0aGlzLm91dE9mVGhlV2FsbCgpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLngtPXRoaXMuc3BlZWQgKiAwLjY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS55LT10aGlzLnNwZWVkICogMC44O1xyXG4gICAgICAgICAgICAgICAgICAgIH0qL1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS54IC09IHRoaXMuc3BlZWQgKiAwLjY7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS55IC09IHRoaXMuc3BlZWQgKiAwLjg7XG4gICAgICAgICAgICAgICAgICAgIC8qaWYodGhpcy5vdXRPZlRoZVdhbGwoKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS54Kz10aGlzLnNwZWVkICogMC42O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUueSs9dGhpcy5zcGVlZCAqIDAuODtcclxuICAgICAgICAgICAgICAgICAgICB9Ki9cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA5OlxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUueCAtPSB0aGlzLnNwZWVkICogMC44O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUueSAtPSB0aGlzLnNwZWVkICogMC42O1xuICAgICAgICAgICAgICAgICAgICAvKmlmKHRoaXMub3V0T2ZUaGVXYWxsKCkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUueCs9dGhpcy5zcGVlZCAqIDAuODtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLnkrPXRoaXMuc3BlZWQgKiAwLjY7XHJcbiAgICAgICAgICAgICAgICAgICAgfSovXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMTA6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS54ICs9IHRoaXMuc3BlZWQgKiAwLjg7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS55ICs9IHRoaXMuc3BlZWQgKiAwLjY7XG4gICAgICAgICAgICAgICAgICAgIC8qaWYodGhpcy5vdXRPZlRoZVdhbGwoKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS54LT10aGlzLnNwZWVkICogMC44O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUueS09dGhpcy5zcGVlZCAqIDAuNjtcclxuICAgICAgICAgICAgICAgICAgICB9Ki9cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAxMTpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLnggKz0gdGhpcy5zcGVlZCAqIDAuODtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLnkgLT0gdGhpcy5zcGVlZCAqIDAuNjtcbiAgICAgICAgICAgICAgICAgICAgLyppZih0aGlzLm91dE9mVGhlV2FsbCgpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLngtPXRoaXMuc3BlZWQgKiAwLjg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS55Kz10aGlzLnNwZWVkICogMC42O1xyXG4gICAgICAgICAgICAgICAgICAgIH0qL1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDEyOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUueCArPSB0aGlzLnNwZWVkICogMC42O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUueSAtPSB0aGlzLnNwZWVkICogMC44O1xuICAgICAgICAgICAgICAgICAgICAvKmlmKHRoaXMub3V0T2ZUaGVXYWxsKCkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUueC09dGhpcy5zcGVlZCAqIDAuNjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLnkrPXRoaXMuc3BlZWQgKiAwLjg7XHJcbiAgICAgICAgICAgICAgICAgICAgfSovXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5jb3VudCA9IDA7XG4gICAgICAgIH1cbiAgICB9XG59KTtcblxuY2MuX1JGcG9wKCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5jYy5fUkZwdXNoKG1vZHVsZSwgJ2MyMGY0dFN2eWRHUzVxUnp2bjVHOXo5JywgJ01haW5Mb29wJyk7XG4vLyBTY3JpcHRcXE1haW5Mb29wLmpzXG5cbmNjLkNsYXNzKHtcbiAgICBcImV4dGVuZHNcIjogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICAvLyBmb286IHtcbiAgICAgICAgLy8gICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgLy8gICAgdXJsOiBjYy5UZXh0dXJlMkQsICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0eXBlb2YgZGVmYXVsdFxuICAgICAgICAvLyAgICBzZXJpYWxpemFibGU6IHRydWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcbiAgICAgICAgLy8gICAgdmlzaWJsZTogdHJ1ZSwgICAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXG4gICAgICAgIC8vICAgIGRpc3BsYXlOYW1lOiAnRm9vJywgLy8gb3B0aW9uYWxcbiAgICAgICAgLy8gICAgcmVhZG9ubHk6IGZhbHNlLCAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyBmYWxzZVxuICAgICAgICAvLyB9LFxuICAgICAgICAvLyAuLi5cbiAgICB9LFxuXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXG4gICAgb25Mb2FkOiBmdW5jdGlvbiBvbkxvYWQoKSB7fVxuXG59KTtcbi8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXG4vLyB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xuXG4vLyB9LFxuXG5jYy5fUkZwb3AoKTsiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnMzY2MjlwQXhkcEJJNHRPc0hLY2VPWnUnLCAnU3RhcnRHYW1lJyk7XG4vLyBTY3JpcHRcXFN0YXJ0R2FtZS5qc1xuXG5jYy5DbGFzcyh7XG4gICAgJ2V4dGVuZHMnOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIC8vIGZvbzoge1xuICAgICAgICAvLyAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAvLyAgICB1cmw6IGNjLlRleHR1cmUyRCwgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XG4gICAgICAgIC8vICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxuICAgICAgICAvLyAgICB2aXNpYmxlOiB0cnVlLCAgICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcbiAgICAgICAgLy8gICAgZGlzcGxheU5hbWU6ICdGb28nLCAvLyBvcHRpb25hbFxuICAgICAgICAvLyAgICByZWFkb25seTogZmFsc2UsICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIGZhbHNlXG4gICAgICAgIC8vIH0sXG4gICAgICAgIC8vIC4uLlxuICAgIH0sXG5cbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uIG9uTG9hZCgpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICBjYy5ldmVudE1hbmFnZXIuYWRkTGlzdGVuZXIoe1xuICAgICAgICAgICAgZXZlbnQ6IGNjLkV2ZW50TGlzdGVuZXIuS0VZQk9BUkQsXG4gICAgICAgICAgICBvbktleVByZXNzZWQ6IGZ1bmN0aW9uIG9uS2V5UHJlc3NlZChrZXlDb2RlLCBldmVudCkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoa2V5Q29kZSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIGNjLktFWS5zOlxuICAgICAgICAgICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdNYWlubG9vcCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgY2MuS0VZLmw6XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHNlbGYubm9kZSk7XG4gICAgfSxcblxuICAgIFN0YXJ0R2FtZTogZnVuY3Rpb24gU3RhcnRHYW1lKCkge1xuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ01haW5sb29wJyk7XG4gICAgfVxuXG4gICAgLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lLCB1bmNvbW1lbnQgdGhpcyBmdW5jdGlvbiB0byBhY3RpdmF0ZSB1cGRhdGUgY2FsbGJhY2tcbiAgICAvLyB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xuXG4gICAgLy8gfSxcbn0pO1xuXG5jYy5fUkZwb3AoKTsiXX0=
=======
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6L1VzZXJzL0VkX1N0cmlja2xhbmQvQXBwRGF0YS9Mb2NhbC9Db2Nvc0NyZWF0b3IvYXBwLTEuMC4zL3Jlc291cmNlcy9hcHAuYXNhci9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiYXNzZXRzL1NjcmlwdC9BbmltT3AuanMiLCJhc3NldHMvU2NyaXB0L0VuZW15U2NyaXB0LmpzIiwiYXNzZXRzL1NjcmlwdC9NYWluTG9vcC5qcyIsImFzc2V0cy9TY3JpcHQvU3RhcnRHYW1lLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIlwidXNlIHN0cmljdFwiO1xuY2MuX1JGcHVzaChtb2R1bGUsICc0ZTNiYVYwTnhwSk40OTlqT0phRnVoSScsICdBbmltT3AnKTtcbi8vIFNjcmlwdFxcQW5pbU9wLmpzXG5cbmNjLkNsYXNzKHtcbiAgICAnZXh0ZW5kcyc6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLy8gZm9vOiB7XG4gICAgICAgIC8vICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgIC8vICAgIHVybDogY2MuVGV4dHVyZTJELCAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcbiAgICAgICAgLy8gICAgc2VyaWFsaXphYmxlOiB0cnVlLCAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXG4gICAgICAgIC8vICAgIHZpc2libGU6IHRydWUsICAgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxuICAgICAgICAvLyAgICBkaXNwbGF5TmFtZTogJ0ZvbycsIC8vIG9wdGlvbmFsXG4gICAgICAgIC8vICAgIHJlYWRvbmx5OiBmYWxzZSwgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgZmFsc2VcbiAgICAgICAgLy8gfSxcbiAgICAgICAgLy8gLi4uXG4gICAgfSxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gb25Mb2FkKCkge1xuICAgICAgICB2YXIgYW5pbSA9IHRoaXMuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbik7XG4gICAgICAgIGFuaW0ucGxheSgnMScpO1xuICAgIH0sXG5cbiAgICAvLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xuICAgIG9uT3BGaW5pc2g6IGZ1bmN0aW9uIG9uT3BGaW5pc2goKSB7XG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnVGl0bGUnKTtcbiAgICB9XG59KTtcblxuY2MuX1JGcG9wKCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5jYy5fUkZwdXNoKG1vZHVsZSwgJzY2OGNhNEg0ZzVLcEp2bHJEd055NDVNJywgJ0VuZW15U2NyaXB0Jyk7XG4vLyBTY3JpcHRcXEVuZW15U2NyaXB0LmpzXG5cbmNjLkNsYXNzKHtcbiAgICBcImV4dGVuZHNcIjogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICAvLyBmb286IHtcbiAgICAgICAgLy8gICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgLy8gICAgdXJsOiBjYy5UZXh0dXJlMkQsICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0eXBlb2YgZGVmYXVsdFxuICAgICAgICAvLyAgICBzZXJpYWxpemFibGU6IHRydWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcbiAgICAgICAgLy8gICAgdmlzaWJsZTogdHJ1ZSwgICAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXG4gICAgICAgIC8vICAgIGRpc3BsYXlOYW1lOiAnRm9vJywgLy8gb3B0aW9uYWxcbiAgICAgICAgLy8gICAgcmVhZG9ubHk6IGZhbHNlLCAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyBmYWxzZVxuICAgICAgICAvLyB9LFxuICAgICAgICAvLyAuLi5cbiAgICAgICAgc2lnaHREZXRlY3RSYWlkdXM6IDgwLFxuICAgICAgICBoZWFyaW5nRGV0ZWN0UmFkaXVzOiA0MCxcbiAgICAgICAgcGV0cm9sY29vbGRvd246IDEsXG4gICAgICAgIGlzcGV0cm9sOiAxLFxuICAgICAgICBzcGVlZDogMCxcbiAgICAgICAgY291bnQ6IDAsXG4gICAgICAgIHJhbmQ6IDBcbiAgICB9LFxuXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXG4gICAgb25Mb2FkOiBmdW5jdGlvbiBvbkxvYWQoKSB7XG4gICAgICAgIHRoaXMuY291bnQgPSAwO1xuICAgIH0sXG5cbiAgICAvLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKGR0KSB7XG5cbiAgICAgICAgdGhpcy5jb3VudCsrO1xuICAgICAgICBpZiAodGhpcy5jb3VudCA+PSB0aGlzLnBldHJvbGNvb2xkb3duKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5pc3BldHJvbCkge1xuICAgICAgICAgICAgICAgIHRoaXMucmFuZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDQgKyAxKTtcbiAgICAgICAgICAgICAgICB0aGlzLmlzcGV0cm9sID0gMDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yYW5kID0gMDtcbiAgICAgICAgICAgICAgICB0aGlzLmlzcGV0cm9sID0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY291bnQgPSAwO1xuICAgICAgICB9XG4gICAgICAgIHN3aXRjaCAodGhpcy5yYW5kKSB7XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnggKz0gdGhpcy5zcGVlZDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUueCAtPSB0aGlzLnNwZWVkO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS55ICs9IHRoaXMuc3BlZWQ7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnkgLT0gdGhpcy5zcGVlZDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuXG5jYy5fUkZwb3AoKTsiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnYzIwZjR0U3Z5ZEdTNXFSenZuNUc5ejknLCAnTWFpbkxvb3AnKTtcbi8vIFNjcmlwdFxcTWFpbkxvb3AuanNcblxuY2MuQ2xhc3Moe1xuICAgIFwiZXh0ZW5kc1wiOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIC8vIGZvbzoge1xuICAgICAgICAvLyAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAvLyAgICB1cmw6IGNjLlRleHR1cmUyRCwgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XG4gICAgICAgIC8vICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxuICAgICAgICAvLyAgICB2aXNpYmxlOiB0cnVlLCAgICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcbiAgICAgICAgLy8gICAgZGlzcGxheU5hbWU6ICdGb28nLCAvLyBvcHRpb25hbFxuICAgICAgICAvLyAgICByZWFkb25seTogZmFsc2UsICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIGZhbHNlXG4gICAgICAgIC8vIH0sXG4gICAgICAgIC8vIC4uLlxuICAgIH0sXG5cbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uIG9uTG9hZCgpIHt9XG5cbn0pO1xuLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lLCB1bmNvbW1lbnQgdGhpcyBmdW5jdGlvbiB0byBhY3RpdmF0ZSB1cGRhdGUgY2FsbGJhY2tcbi8vIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XG5cbi8vIH0sXG5cbmNjLl9SRnBvcCgpOyIsIlwidXNlIHN0cmljdFwiO1xuY2MuX1JGcHVzaChtb2R1bGUsICczNjYyOXBBeGRwQkk0dE9zSEtjZU9adScsICdTdGFydEdhbWUnKTtcbi8vIFNjcmlwdFxcU3RhcnRHYW1lLmpzXG5cbmNjLkNsYXNzKHtcbiAgICAnZXh0ZW5kcyc6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLy8gZm9vOiB7XG4gICAgICAgIC8vICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgIC8vICAgIHVybDogY2MuVGV4dHVyZTJELCAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcbiAgICAgICAgLy8gICAgc2VyaWFsaXphYmxlOiB0cnVlLCAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXG4gICAgICAgIC8vICAgIHZpc2libGU6IHRydWUsICAgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxuICAgICAgICAvLyAgICBkaXNwbGF5TmFtZTogJ0ZvbycsIC8vIG9wdGlvbmFsXG4gICAgICAgIC8vICAgIHJlYWRvbmx5OiBmYWxzZSwgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgZmFsc2VcbiAgICAgICAgLy8gfSxcbiAgICAgICAgLy8gLi4uXG4gICAgfSxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gb25Mb2FkKCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIGNjLmV2ZW50TWFuYWdlci5hZGRMaXN0ZW5lcih7XG4gICAgICAgICAgICBldmVudDogY2MuRXZlbnRMaXN0ZW5lci5LRVlCT0FSRCxcbiAgICAgICAgICAgIG9uS2V5UHJlc3NlZDogZnVuY3Rpb24gb25LZXlQcmVzc2VkKGtleUNvZGUsIGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChrZXlDb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgY2MuS0VZLnM6XG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ01haW5sb29wJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBjYy5LRVkubDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgc2VsZi5ub2RlKTtcbiAgICB9LFxuXG4gICAgU3RhcnRHYW1lOiBmdW5jdGlvbiBTdGFydEdhbWUoKSB7XG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnTWFpbmxvb3AnKTtcbiAgICB9XG5cbiAgICAvLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xuICAgIC8vIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XG5cbiAgICAvLyB9LFxufSk7XG5cbmNjLl9SRnBvcCgpOyJdfQ==
>>>>>>> origin/master
