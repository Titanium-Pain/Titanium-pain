require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"AnimOp":[function(require,module,exports){
"use strict";
cc._RFpush(module, '4e3baV0NxpJN499jOJaFuhI', 'AnimOp');
// Script/AnimOp.js

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
// Script/EnemyScript.js

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
                    if (this.outOfTheWall()) {
                        this.node.x -= this.speed;
                    }
                    break;
                case 2:
                    this.node.x -= this.speed;
                    if (this.outOfTheWall()) {
                        this.node.x += this.speed;
                    }
                    break;
                case 3:
                    this.node.y += this.speed;
                    if (this.outOfTheWall()) {
                        this.node.y -= this.speed;
                    }
                    break;
                case 4:
                    this.node.y -= this.speed;
                    if (this.outOfTheWall()) {
                        this.node.y += this.speed;
                    }
                    break;
                case 5:
                    this.node.x -= this.speed * 0.8;
                    this.node.y += this.speed * 0.6;
                    if (this.outOfTheWall()) {
                        this.node.x += this.speed * 0.8;
                        this.node.y -= this.speed * 0.6;
                    }
                    break;
                case 6:
                    this.node.x -= this.speed * 0.6;
                    this.node.y += this.speed * 0.8;
                    if (this.outOfTheWall()) {
                        this.node.x += this.speed * 0.6;
                        this.node.y -= this.speed * 0.8;
                    }
                    break;
                case 7:
                    this.node.x += this.speed * 0.6;
                    this.node.y += this.speed * 0.8;
                    if (this.outOfTheWall()) {
                        this.node.x -= this.speed * 0.6;
                        this.node.y -= this.speed * 0.8;
                    }
                    break;
                case 8:
                    this.node.x -= this.speed * 0.6;
                    this.node.y -= this.speed * 0.8;
                    if (this.outOfTheWall()) {
                        this.node.x += this.speed * 0.6;
                        this.node.y += this.speed * 0.8;
                    }
                    break;
                case 9:
                    this.node.x -= this.speed * 0.8;
                    this.node.y -= this.speed * 0.6;
                    if (this.outOfTheWall()) {
                        this.node.x += this.speed * 0.8;
                        this.node.y += this.speed * 0.6;
                    }
                    break;
                case 10:
                    this.node.x += this.speed * 0.8;
                    this.node.y += this.speed * 0.6;
                    if (this.outOfTheWall()) {
                        this.node.x -= this.speed * 0.8;
                        this.node.y -= this.speed * 0.6;
                    }
                    break;
                case 11:
                    this.node.x += this.speed * 0.8;
                    this.node.y -= this.speed * 0.6;
                    if (this.outOfTheWall()) {
                        this.node.x -= this.speed * 0.8;
                        this.node.y += this.speed * 0.6;
                    }
                    break;
                case 12:
                    this.node.x += this.speed * 0.6;
                    this.node.y -= this.speed * 0.8;
                    if (this.outOfTheWall()) {
                        this.node.x -= this.speed * 0.6;
                        this.node.y += this.speed * 0.8;
                    }
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
// Script/MainLoop.js

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
},{}],"Player":[function(require,module,exports){
"use strict";
cc._RFpush(module, 'eb35476F6BEvpTzVCY3Tw39', 'Player');
// Script/Player.js

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
        speed: 0
    },

    /*moveup:false,
    movedown:false,
    moveleft:false,
    moveright:false,*/
    // use this for initialization
    onLoad: function onLoad() {
        var moveup = false;
        var movedown = false;
        var moveleft = false;
        var moveright = false;
        this.setInputControl();
    },

    setInputControl: function setInputControl() {
        var self = this;
        cc.eventManager.addListener({
            event: cc.EventListener.KEYBOARD,
            onKeyPressed: function onKeyPressed(keyCode, event) {
                switch (keyCode) {
                    case cc.KEY.w:
                        //self.moveleft =false;
                        //self.moveright= false;
                        self.moveup = true;
                        //self.movedown = false;
                        break;
                    case cc.KEY.s:
                        //self.moveleft =false;
                        //self.moveright= false;
                        //self.moveup = false;
                        self.movedown = true;
                        break;
                    case cc.KEY.a:
                        self.moveleft = true;
                        //self.moveright= false;
                        //self.moveup = false;
                        //self.movedown = false;
                        break;
                    case cc.KEY.d:
                        //self.moveleft =false;
                        self.moveright = true;
                        //self.moveup = false;
                        //self.movedown = false;
                        break;
                }
            },
            onKeyReleased: function onKeyReleased(keyCode, event) {
                switch (keyCode) {
                    case cc.KEY.w:
                        self.moveup = false;
                        break;
                    case cc.KEY.s:
                        self.movedown = false;
                        break;
                    case cc.KEY.a:
                        self.moveleft = false;
                        break;
                    case cc.KEY.d:
                        self.moveright = false;
                        break;
                }
            }
        }, self.node);
    },

    outOfTheWall: function outOfTheWall() {
        if (this.node.x > 480 || this.node.x < -480 || this.node.y > 320 || this.node.y < -320) {
            return true;
        }
        return false;
    },

    // called every frame, uncomment this function to activate update callback
    update: function update(dt) {
        if (this.moveleft) {
            this.node.x -= this.speed;
            if (this.outOfTheWall()) {
                this.node.x += this.speed;
            }
        }
        if (this.moveright) {
            this.node.x += this.speed;
            if (this.outOfTheWall()) {
                this.node.x -= this.speed;
            }
        }
        if (this.movedown) {
            this.node.y -= this.speed;
            if (this.outOfTheWall()) {
                this.node.y += this.speed;
            }
        }
        if (this.moveup) {
            this.node.y += this.speed;
            if (this.outOfTheWall()) {
                this.node.y -= this.speed;
            }
        }
    }
});

cc._RFpop();
},{}],"StartGame":[function(require,module,exports){
"use strict";
cc._RFpush(module, '36629pAxdpBI4tOsHKceOZu', 'StartGame');
// Script/StartGame.js

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
},{}]},{},["StartGame","AnimOp","EnemyScript","MainLoop","Player"])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9Db2Nvc0NyZWF0b3IuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9hcHAuYXNhci9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiYXNzZXRzL1NjcmlwdC9BbmltT3AuanMiLCJhc3NldHMvU2NyaXB0L0VuZW15U2NyaXB0LmpzIiwiYXNzZXRzL1NjcmlwdC9NYWluTG9vcC5qcyIsImFzc2V0cy9TY3JpcHQvUGxheWVyLmpzIiwiYXNzZXRzL1NjcmlwdC9TdGFydEdhbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6SkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiXCJ1c2Ugc3RyaWN0XCI7XG5jYy5fUkZwdXNoKG1vZHVsZSwgJzRlM2JhVjBOeHBKTjQ5OWpPSmFGdWhJJywgJ0FuaW1PcCcpO1xuLy8gU2NyaXB0L0FuaW1PcC5qc1xuXG5jYy5DbGFzcyh7XG4gICAgJ2V4dGVuZHMnOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIC8vIGZvbzoge1xuICAgICAgICAvLyAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAvLyAgICB1cmw6IGNjLlRleHR1cmUyRCwgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XG4gICAgICAgIC8vICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxuICAgICAgICAvLyAgICB2aXNpYmxlOiB0cnVlLCAgICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcbiAgICAgICAgLy8gICAgZGlzcGxheU5hbWU6ICdGb28nLCAvLyBvcHRpb25hbFxuICAgICAgICAvLyAgICByZWFkb25seTogZmFsc2UsICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIGZhbHNlXG4gICAgICAgIC8vIH0sXG4gICAgICAgIC8vIC4uLlxuICAgIH0sXG5cbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uIG9uTG9hZCgpIHtcbiAgICAgICAgdmFyIGFuaW0gPSB0aGlzLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pO1xuICAgICAgICBhbmltLnBsYXkoJzEnKTtcbiAgICB9LFxuXG4gICAgLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lLCB1bmNvbW1lbnQgdGhpcyBmdW5jdGlvbiB0byBhY3RpdmF0ZSB1cGRhdGUgY2FsbGJhY2tcbiAgICBvbk9wRmluaXNoOiBmdW5jdGlvbiBvbk9wRmluaXNoKCkge1xuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ1RpdGxlJyk7XG4gICAgfVxufSk7XG5cbmNjLl9SRnBvcCgpOyIsIlwidXNlIHN0cmljdFwiO1xuY2MuX1JGcHVzaChtb2R1bGUsICc2NjhjYTRINGc1S3BKdmxyRHdOeTQ1TScsICdFbmVteVNjcmlwdCcpO1xuLy8gU2NyaXB0L0VuZW15U2NyaXB0LmpzXG5cbmNjLkNsYXNzKHtcbiAgICBcImV4dGVuZHNcIjogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICAvLyBmb286IHtcbiAgICAgICAgLy8gICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgLy8gICAgdXJsOiBjYy5UZXh0dXJlMkQsICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0eXBlb2YgZGVmYXVsdFxuICAgICAgICAvLyAgICBzZXJpYWxpemFibGU6IHRydWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcbiAgICAgICAgLy8gICAgdmlzaWJsZTogdHJ1ZSwgICAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXG4gICAgICAgIC8vICAgIGRpc3BsYXlOYW1lOiAnRm9vJywgLy8gb3B0aW9uYWxcbiAgICAgICAgLy8gICAgcmVhZG9ubHk6IGZhbHNlLCAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyBmYWxzZVxuICAgICAgICAvLyB9LFxuICAgICAgICAvLyAuLi5cbiAgICAgICAgc2lnaHREZXRlY3RSYWlkdXM6IDgwLFxuICAgICAgICBoZWFyaW5nRGV0ZWN0UmFkaXVzOiA0MCxcbiAgICAgICAgcGV0cm9sY29vbGRvd246IDEsXG4gICAgICAgIHNwZWVkOiAwLFxuICAgICAgICBjb3VudDogMFxuXG4gICAgfSxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gb25Mb2FkKCkge1xuICAgICAgICB0aGlzLmNvdW50ID0gMDtcbiAgICB9LFxuXG4gICAgb3V0T2ZUaGVXYWxsOiBmdW5jdGlvbiBvdXRPZlRoZVdhbGwoKSB7XG4gICAgICAgIGlmICh0aGlzLm5vZGUueCA+IDQ4MCB8fCB0aGlzLm5vZGUueCA8IC00ODAgfHwgdGhpcy5ub2RlLnkgPiAzMjAgfHwgdGhpcy5ub2RlLnkgPCAtMzIwKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSxcblxuICAgIC8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoZHQpIHtcblxuICAgICAgICAvKnZhciByYW5kPU1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSooMysxKSk7XG4gICAgICAgIHN3aXRjaChyYW5kKXtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUueCs9dGhpcy5zcGVlZDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUueC09dGhpcy5zcGVlZDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUueSs9dGhpcy5zcGVlZDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUueS09dGhpcy5zcGVlZDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfSovXG4gICAgICAgIHRoaXMuY291bnQrKztcbiAgICAgICAgaWYgKHRoaXMuY291bnQgPj0gdGhpcy5wZXRyb2xjb29sZG93bikge1xuICAgICAgICAgICAgdmFyIHJhbmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoMjQgKyAxKSk7XG4gICAgICAgICAgICBzd2l0Y2ggKHJhbmQpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS54ICs9IHRoaXMuc3BlZWQ7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm91dE9mVGhlV2FsbCgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUueCAtPSB0aGlzLnNwZWVkO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLnggLT0gdGhpcy5zcGVlZDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMub3V0T2ZUaGVXYWxsKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS54ICs9IHRoaXMuc3BlZWQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUueSArPSB0aGlzLnNwZWVkO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5vdXRPZlRoZVdhbGwoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLnkgLT0gdGhpcy5zcGVlZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS55IC09IHRoaXMuc3BlZWQ7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm91dE9mVGhlV2FsbCgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUueSArPSB0aGlzLnNwZWVkO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLnggLT0gdGhpcy5zcGVlZCAqIDAuODtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLnkgKz0gdGhpcy5zcGVlZCAqIDAuNjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMub3V0T2ZUaGVXYWxsKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS54ICs9IHRoaXMuc3BlZWQgKiAwLjg7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUueSAtPSB0aGlzLnNwZWVkICogMC42O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLnggLT0gdGhpcy5zcGVlZCAqIDAuNjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLnkgKz0gdGhpcy5zcGVlZCAqIDAuODtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMub3V0T2ZUaGVXYWxsKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS54ICs9IHRoaXMuc3BlZWQgKiAwLjY7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUueSAtPSB0aGlzLnNwZWVkICogMC44O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLnggKz0gdGhpcy5zcGVlZCAqIDAuNjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLnkgKz0gdGhpcy5zcGVlZCAqIDAuODtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMub3V0T2ZUaGVXYWxsKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS54IC09IHRoaXMuc3BlZWQgKiAwLjY7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUueSAtPSB0aGlzLnNwZWVkICogMC44O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgODpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLnggLT0gdGhpcy5zcGVlZCAqIDAuNjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLnkgLT0gdGhpcy5zcGVlZCAqIDAuODtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMub3V0T2ZUaGVXYWxsKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS54ICs9IHRoaXMuc3BlZWQgKiAwLjY7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUueSArPSB0aGlzLnNwZWVkICogMC44O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgOTpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLnggLT0gdGhpcy5zcGVlZCAqIDAuODtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLnkgLT0gdGhpcy5zcGVlZCAqIDAuNjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMub3V0T2ZUaGVXYWxsKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS54ICs9IHRoaXMuc3BlZWQgKiAwLjg7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUueSArPSB0aGlzLnNwZWVkICogMC42O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMTA6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS54ICs9IHRoaXMuc3BlZWQgKiAwLjg7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS55ICs9IHRoaXMuc3BlZWQgKiAwLjY7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm91dE9mVGhlV2FsbCgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUueCAtPSB0aGlzLnNwZWVkICogMC44O1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLnkgLT0gdGhpcy5zcGVlZCAqIDAuNjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDExOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUueCArPSB0aGlzLnNwZWVkICogMC44O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUueSAtPSB0aGlzLnNwZWVkICogMC42O1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5vdXRPZlRoZVdhbGwoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLnggLT0gdGhpcy5zcGVlZCAqIDAuODtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS55ICs9IHRoaXMuc3BlZWQgKiAwLjY7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAxMjpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLnggKz0gdGhpcy5zcGVlZCAqIDAuNjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLnkgLT0gdGhpcy5zcGVlZCAqIDAuODtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMub3V0T2ZUaGVXYWxsKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS54IC09IHRoaXMuc3BlZWQgKiAwLjY7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUueSArPSB0aGlzLnNwZWVkICogMC44O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5jb3VudCA9IDA7XG4gICAgICAgIH1cbiAgICB9XG59KTtcblxuY2MuX1JGcG9wKCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5jYy5fUkZwdXNoKG1vZHVsZSwgJ2MyMGY0dFN2eWRHUzVxUnp2bjVHOXo5JywgJ01haW5Mb29wJyk7XG4vLyBTY3JpcHQvTWFpbkxvb3AuanNcblxuY2MuQ2xhc3Moe1xuICAgIFwiZXh0ZW5kc1wiOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIC8vIGZvbzoge1xuICAgICAgICAvLyAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAvLyAgICB1cmw6IGNjLlRleHR1cmUyRCwgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XG4gICAgICAgIC8vICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxuICAgICAgICAvLyAgICB2aXNpYmxlOiB0cnVlLCAgICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcbiAgICAgICAgLy8gICAgZGlzcGxheU5hbWU6ICdGb28nLCAvLyBvcHRpb25hbFxuICAgICAgICAvLyAgICByZWFkb25seTogZmFsc2UsICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIGZhbHNlXG4gICAgICAgIC8vIH0sXG4gICAgICAgIC8vIC4uLlxuICAgIH0sXG5cbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uIG9uTG9hZCgpIHt9XG5cbn0pO1xuLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lLCB1bmNvbW1lbnQgdGhpcyBmdW5jdGlvbiB0byBhY3RpdmF0ZSB1cGRhdGUgY2FsbGJhY2tcbi8vIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XG5cbi8vIH0sXG5cbmNjLl9SRnBvcCgpOyIsIlwidXNlIHN0cmljdFwiO1xuY2MuX1JGcHVzaChtb2R1bGUsICdlYjM1NDc2RjZCRXZwVHpWQ1kzVHczOScsICdQbGF5ZXInKTtcbi8vIFNjcmlwdC9QbGF5ZXIuanNcblxuY2MuQ2xhc3Moe1xuICAgIFwiZXh0ZW5kc1wiOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIC8vIGZvbzoge1xuICAgICAgICAvLyAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAvLyAgICB1cmw6IGNjLlRleHR1cmUyRCwgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XG4gICAgICAgIC8vICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxuICAgICAgICAvLyAgICB2aXNpYmxlOiB0cnVlLCAgICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcbiAgICAgICAgLy8gICAgZGlzcGxheU5hbWU6ICdGb28nLCAvLyBvcHRpb25hbFxuICAgICAgICAvLyAgICByZWFkb25seTogZmFsc2UsICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIGZhbHNlXG4gICAgICAgIC8vIH0sXG4gICAgICAgIC8vIC4uLlxuICAgICAgICBzcGVlZDogMFxuICAgIH0sXG5cbiAgICAvKm1vdmV1cDpmYWxzZSxcbiAgICBtb3ZlZG93bjpmYWxzZSxcbiAgICBtb3ZlbGVmdDpmYWxzZSxcbiAgICBtb3ZlcmlnaHQ6ZmFsc2UsKi9cbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uIG9uTG9hZCgpIHtcbiAgICAgICAgdmFyIG1vdmV1cCA9IGZhbHNlO1xuICAgICAgICB2YXIgbW92ZWRvd24gPSBmYWxzZTtcbiAgICAgICAgdmFyIG1vdmVsZWZ0ID0gZmFsc2U7XG4gICAgICAgIHZhciBtb3ZlcmlnaHQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zZXRJbnB1dENvbnRyb2woKTtcbiAgICB9LFxuXG4gICAgc2V0SW5wdXRDb250cm9sOiBmdW5jdGlvbiBzZXRJbnB1dENvbnRyb2woKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgY2MuZXZlbnRNYW5hZ2VyLmFkZExpc3RlbmVyKHtcbiAgICAgICAgICAgIGV2ZW50OiBjYy5FdmVudExpc3RlbmVyLktFWUJPQVJELFxuICAgICAgICAgICAgb25LZXlQcmVzc2VkOiBmdW5jdGlvbiBvbktleVByZXNzZWQoa2V5Q29kZSwgZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGtleUNvZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBjYy5LRVkudzpcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vc2VsZi5tb3ZlbGVmdCA9ZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL3NlbGYubW92ZXJpZ2h0PSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYubW92ZXVwID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vc2VsZi5tb3ZlZG93biA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgY2MuS0VZLnM6XG4gICAgICAgICAgICAgICAgICAgICAgICAvL3NlbGYubW92ZWxlZnQgPWZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9zZWxmLm1vdmVyaWdodD0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL3NlbGYubW92ZXVwID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLm1vdmVkb3duID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIGNjLktFWS5hOlxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5tb3ZlbGVmdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL3NlbGYubW92ZXJpZ2h0PSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vc2VsZi5tb3ZldXAgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vc2VsZi5tb3ZlZG93biA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgY2MuS0VZLmQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAvL3NlbGYubW92ZWxlZnQgPWZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5tb3ZlcmlnaHQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9zZWxmLm1vdmV1cCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9zZWxmLm1vdmVkb3duID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25LZXlSZWxlYXNlZDogZnVuY3Rpb24gb25LZXlSZWxlYXNlZChrZXlDb2RlLCBldmVudCkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoa2V5Q29kZSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIGNjLktFWS53OlxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5tb3ZldXAgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIGNjLktFWS5zOlxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5tb3ZlZG93biA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgY2MuS0VZLmE6XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLm1vdmVsZWZ0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBjYy5LRVkuZDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYubW92ZXJpZ2h0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHNlbGYubm9kZSk7XG4gICAgfSxcblxuICAgIG91dE9mVGhlV2FsbDogZnVuY3Rpb24gb3V0T2ZUaGVXYWxsKCkge1xuICAgICAgICBpZiAodGhpcy5ub2RlLnggPiA0ODAgfHwgdGhpcy5ub2RlLnggPCAtNDgwIHx8IHRoaXMubm9kZS55ID4gMzIwIHx8IHRoaXMubm9kZS55IDwgLTMyMCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0sXG5cbiAgICAvLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKGR0KSB7XG4gICAgICAgIGlmICh0aGlzLm1vdmVsZWZ0KSB7XG4gICAgICAgICAgICB0aGlzLm5vZGUueCAtPSB0aGlzLnNwZWVkO1xuICAgICAgICAgICAgaWYgKHRoaXMub3V0T2ZUaGVXYWxsKCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUueCArPSB0aGlzLnNwZWVkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm1vdmVyaWdodCkge1xuICAgICAgICAgICAgdGhpcy5ub2RlLnggKz0gdGhpcy5zcGVlZDtcbiAgICAgICAgICAgIGlmICh0aGlzLm91dE9mVGhlV2FsbCgpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnggLT0gdGhpcy5zcGVlZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5tb3ZlZG93bikge1xuICAgICAgICAgICAgdGhpcy5ub2RlLnkgLT0gdGhpcy5zcGVlZDtcbiAgICAgICAgICAgIGlmICh0aGlzLm91dE9mVGhlV2FsbCgpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnkgKz0gdGhpcy5zcGVlZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5tb3ZldXApIHtcbiAgICAgICAgICAgIHRoaXMubm9kZS55ICs9IHRoaXMuc3BlZWQ7XG4gICAgICAgICAgICBpZiAodGhpcy5vdXRPZlRoZVdhbGwoKSkge1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZS55IC09IHRoaXMuc3BlZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59KTtcblxuY2MuX1JGcG9wKCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5jYy5fUkZwdXNoKG1vZHVsZSwgJzM2NjI5cEF4ZHBCSTR0T3NIS2NlT1p1JywgJ1N0YXJ0R2FtZScpO1xuLy8gU2NyaXB0L1N0YXJ0R2FtZS5qc1xuXG5jYy5DbGFzcyh7XG4gICAgJ2V4dGVuZHMnOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIC8vIGZvbzoge1xuICAgICAgICAvLyAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAvLyAgICB1cmw6IGNjLlRleHR1cmUyRCwgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XG4gICAgICAgIC8vICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxuICAgICAgICAvLyAgICB2aXNpYmxlOiB0cnVlLCAgICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcbiAgICAgICAgLy8gICAgZGlzcGxheU5hbWU6ICdGb28nLCAvLyBvcHRpb25hbFxuICAgICAgICAvLyAgICByZWFkb25seTogZmFsc2UsICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIGZhbHNlXG4gICAgICAgIC8vIH0sXG4gICAgICAgIC8vIC4uLlxuICAgIH0sXG5cbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uIG9uTG9hZCgpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICBjYy5ldmVudE1hbmFnZXIuYWRkTGlzdGVuZXIoe1xuICAgICAgICAgICAgZXZlbnQ6IGNjLkV2ZW50TGlzdGVuZXIuS0VZQk9BUkQsXG4gICAgICAgICAgICBvbktleVByZXNzZWQ6IGZ1bmN0aW9uIG9uS2V5UHJlc3NlZChrZXlDb2RlLCBldmVudCkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoa2V5Q29kZSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIGNjLktFWS5zOlxuICAgICAgICAgICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdNYWlubG9vcCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgY2MuS0VZLmw6XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHNlbGYubm9kZSk7XG4gICAgfSxcblxuICAgIFN0YXJ0R2FtZTogZnVuY3Rpb24gU3RhcnRHYW1lKCkge1xuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ01haW5sb29wJyk7XG4gICAgfVxuXG4gICAgLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lLCB1bmNvbW1lbnQgdGhpcyBmdW5jdGlvbiB0byBhY3RpdmF0ZSB1cGRhdGUgY2FsbGJhY2tcbiAgICAvLyB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xuXG4gICAgLy8gfSxcbn0pO1xuXG5jYy5fUkZwb3AoKTsiXX0=
