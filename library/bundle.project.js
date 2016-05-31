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
            this.rand = Math.floor(Math.random() * 10 + 1);
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
            case 5:
                this.node.x -= this.speed * 0.8;
                this.node.y += this.speed * 0.5;
                break;
            case 6:
                this.node.x -= this.speed * 0.5;
                this.node.y += this.speed * 0.8;
                break;
            case 7:
                this.node.x += this.speed * 0.5;
                this.node.y += this.speed * 0.8;
                break;
            case 8:
                this.node.x -= this.speed * 0.5;
                this.node.y -= this.speed * 0.8;
                break;
            case 9:
                this.node.x -= this.speed * 0.8;
                this.node.y -= this.speed * 0.5;
                break;
            case 10:
                this.node.x += this.speed * 0.8;
                this.node.y += this.speed * 0.5;
                break;
            case 11:
                this.node.x += this.speed * 0.8;
                this.node.y -= this.speed * 0.5;
                break;
            case 12:
                this.node.x += this.speed * 0.5;
                this.node.y -= this.speed * 0.8;
                break;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6L1VzZXJzL0VkX1N0cmlja2xhbmQvQXBwRGF0YS9Mb2NhbC9Db2Nvc0NyZWF0b3IvYXBwLTEuMC4zL3Jlc291cmNlcy9hcHAuYXNhci9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiYXNzZXRzL1NjcmlwdC9BbmltT3AuanMiLCJhc3NldHMvU2NyaXB0L0VuZW15U2NyaXB0LmpzIiwiYXNzZXRzL1NjcmlwdC9NYWluTG9vcC5qcyIsImFzc2V0cy9TY3JpcHQvU3RhcnRHYW1lLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiXCJ1c2Ugc3RyaWN0XCI7XG5jYy5fUkZwdXNoKG1vZHVsZSwgJzRlM2JhVjBOeHBKTjQ5OWpPSmFGdWhJJywgJ0FuaW1PcCcpO1xuLy8gU2NyaXB0XFxBbmltT3AuanNcblxuY2MuQ2xhc3Moe1xuICAgICdleHRlbmRzJzogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICAvLyBmb286IHtcbiAgICAgICAgLy8gICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgLy8gICAgdXJsOiBjYy5UZXh0dXJlMkQsICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0eXBlb2YgZGVmYXVsdFxuICAgICAgICAvLyAgICBzZXJpYWxpemFibGU6IHRydWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcbiAgICAgICAgLy8gICAgdmlzaWJsZTogdHJ1ZSwgICAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXG4gICAgICAgIC8vICAgIGRpc3BsYXlOYW1lOiAnRm9vJywgLy8gb3B0aW9uYWxcbiAgICAgICAgLy8gICAgcmVhZG9ubHk6IGZhbHNlLCAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyBmYWxzZVxuICAgICAgICAvLyB9LFxuICAgICAgICAvLyAuLi5cbiAgICB9LFxuXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXG4gICAgb25Mb2FkOiBmdW5jdGlvbiBvbkxvYWQoKSB7XG4gICAgICAgIHZhciBhbmltID0gdGhpcy5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKTtcbiAgICAgICAgYW5pbS5wbGF5KCcxJyk7XG4gICAgfSxcblxuICAgIC8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXG4gICAgb25PcEZpbmlzaDogZnVuY3Rpb24gb25PcEZpbmlzaCgpIHtcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdUaXRsZScpO1xuICAgIH1cbn0pO1xuXG5jYy5fUkZwb3AoKTsiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnNjY4Y2E0SDRnNUtwSnZsckR3Tnk0NU0nLCAnRW5lbXlTY3JpcHQnKTtcbi8vIFNjcmlwdFxcRW5lbXlTY3JpcHQuanNcblxuY2MuQ2xhc3Moe1xuICAgIFwiZXh0ZW5kc1wiOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIC8vIGZvbzoge1xuICAgICAgICAvLyAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAvLyAgICB1cmw6IGNjLlRleHR1cmUyRCwgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XG4gICAgICAgIC8vICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxuICAgICAgICAvLyAgICB2aXNpYmxlOiB0cnVlLCAgICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcbiAgICAgICAgLy8gICAgZGlzcGxheU5hbWU6ICdGb28nLCAvLyBvcHRpb25hbFxuICAgICAgICAvLyAgICByZWFkb25seTogZmFsc2UsICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIGZhbHNlXG4gICAgICAgIC8vIH0sXG4gICAgICAgIC8vIC4uLlxuICAgICAgICBzaWdodERldGVjdFJhaWR1czogODAsXG4gICAgICAgIGhlYXJpbmdEZXRlY3RSYWRpdXM6IDQwLFxuICAgICAgICBwZXRyb2xjb29sZG93bjogMSxcbiAgICAgICAgc3BlZWQ6IDAsXG4gICAgICAgIGNvdW50OiAwLFxuICAgICAgICByYW5kOiAwXG4gICAgfSxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gb25Mb2FkKCkge1xuICAgICAgICB0aGlzLmNvdW50ID0gMDtcbiAgICB9LFxuXG4gICAgLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lLCB1bmNvbW1lbnQgdGhpcyBmdW5jdGlvbiB0byBhY3RpdmF0ZSB1cGRhdGUgY2FsbGJhY2tcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShkdCkge1xuXG4gICAgICAgIC8qdmFyIHJhbmQ9TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKigzKzEpKTtcclxuICAgICAgICBzd2l0Y2gocmFuZCl7XHJcbiAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS54Kz10aGlzLnNwZWVkO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS54LT10aGlzLnNwZWVkO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS55Kz10aGlzLnNwZWVkO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS55LT10aGlzLnNwZWVkO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfSovXG4gICAgICAgIHRoaXMuY291bnQrKztcbiAgICAgICAgaWYgKHRoaXMuY291bnQgPj0gdGhpcy5wZXRyb2xjb29sZG93bikge1xuICAgICAgICAgICAgdGhpcy5yYW5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAgKyAxKTtcbiAgICAgICAgICAgIHRoaXMuY291bnQgPSAwO1xuICAgICAgICB9XG4gICAgICAgIHN3aXRjaCAodGhpcy5yYW5kKSB7XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnggKz0gdGhpcy5zcGVlZDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUueCAtPSB0aGlzLnNwZWVkO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS55ICs9IHRoaXMuc3BlZWQ7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnkgLT0gdGhpcy5zcGVlZDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUueCAtPSB0aGlzLnNwZWVkICogMC44O1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZS55ICs9IHRoaXMuc3BlZWQgKiAwLjU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnggLT0gdGhpcy5zcGVlZCAqIDAuNTtcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUueSArPSB0aGlzLnNwZWVkICogMC44O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA3OlxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS54ICs9IHRoaXMuc3BlZWQgKiAwLjU7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnkgKz0gdGhpcy5zcGVlZCAqIDAuODtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgODpcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUueCAtPSB0aGlzLnNwZWVkICogMC41O1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZS55IC09IHRoaXMuc3BlZWQgKiAwLjg7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnggLT0gdGhpcy5zcGVlZCAqIDAuODtcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUueSAtPSB0aGlzLnNwZWVkICogMC41O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAxMDpcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUueCArPSB0aGlzLnNwZWVkICogMC44O1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZS55ICs9IHRoaXMuc3BlZWQgKiAwLjU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDExOlxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS54ICs9IHRoaXMuc3BlZWQgKiAwLjg7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnkgLT0gdGhpcy5zcGVlZCAqIDAuNTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMTI6XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnggKz0gdGhpcy5zcGVlZCAqIDAuNTtcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUueSAtPSB0aGlzLnNwZWVkICogMC44O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxufSk7XG5cbmNjLl9SRnBvcCgpOyIsIlwidXNlIHN0cmljdFwiO1xuY2MuX1JGcHVzaChtb2R1bGUsICdjMjBmNHRTdnlkR1M1cVJ6dm41Rzl6OScsICdNYWluTG9vcCcpO1xuLy8gU2NyaXB0XFxNYWluTG9vcC5qc1xuXG5jYy5DbGFzcyh7XG4gICAgXCJleHRlbmRzXCI6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLy8gZm9vOiB7XG4gICAgICAgIC8vICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgIC8vICAgIHVybDogY2MuVGV4dHVyZTJELCAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcbiAgICAgICAgLy8gICAgc2VyaWFsaXphYmxlOiB0cnVlLCAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXG4gICAgICAgIC8vICAgIHZpc2libGU6IHRydWUsICAgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxuICAgICAgICAvLyAgICBkaXNwbGF5TmFtZTogJ0ZvbycsIC8vIG9wdGlvbmFsXG4gICAgICAgIC8vICAgIHJlYWRvbmx5OiBmYWxzZSwgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgZmFsc2VcbiAgICAgICAgLy8gfSxcbiAgICAgICAgLy8gLi4uXG4gICAgfSxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gb25Mb2FkKCkge31cblxufSk7XG4vLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xuLy8gdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcblxuLy8gfSxcblxuY2MuX1JGcG9wKCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5jYy5fUkZwdXNoKG1vZHVsZSwgJzM2NjI5cEF4ZHBCSTR0T3NIS2NlT1p1JywgJ1N0YXJ0R2FtZScpO1xuLy8gU2NyaXB0XFxTdGFydEdhbWUuanNcblxuY2MuQ2xhc3Moe1xuICAgICdleHRlbmRzJzogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICAvLyBmb286IHtcbiAgICAgICAgLy8gICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgLy8gICAgdXJsOiBjYy5UZXh0dXJlMkQsICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0eXBlb2YgZGVmYXVsdFxuICAgICAgICAvLyAgICBzZXJpYWxpemFibGU6IHRydWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcbiAgICAgICAgLy8gICAgdmlzaWJsZTogdHJ1ZSwgICAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXG4gICAgICAgIC8vICAgIGRpc3BsYXlOYW1lOiAnRm9vJywgLy8gb3B0aW9uYWxcbiAgICAgICAgLy8gICAgcmVhZG9ubHk6IGZhbHNlLCAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyBmYWxzZVxuICAgICAgICAvLyB9LFxuICAgICAgICAvLyAuLi5cbiAgICB9LFxuXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXG4gICAgb25Mb2FkOiBmdW5jdGlvbiBvbkxvYWQoKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgY2MuZXZlbnRNYW5hZ2VyLmFkZExpc3RlbmVyKHtcbiAgICAgICAgICAgIGV2ZW50OiBjYy5FdmVudExpc3RlbmVyLktFWUJPQVJELFxuICAgICAgICAgICAgb25LZXlQcmVzc2VkOiBmdW5jdGlvbiBvbktleVByZXNzZWQoa2V5Q29kZSwgZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGtleUNvZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBjYy5LRVkuczpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnTWFpbmxvb3AnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIGNjLktFWS5sOlxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LCBzZWxmLm5vZGUpO1xuICAgIH0sXG5cbiAgICBTdGFydEdhbWU6IGZ1bmN0aW9uIFN0YXJ0R2FtZSgpIHtcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdNYWlubG9vcCcpO1xuICAgIH1cblxuICAgIC8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXG4gICAgLy8gdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcblxuICAgIC8vIH0sXG59KTtcblxuY2MuX1JGcG9wKCk7Il19
