require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"AnimOp2":[function(require,module,exports){
"use strict";
cc._RFpush(module, '43e31YqUUZMEZoHCsFf3oME', 'AnimOp2');
// Script\AnimOp2.js

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
        anim.play('2');
    },

    // called every frame, uncomment this function to activate update callback
    onOp2Finished: function onOp2Finished() {
        cc.director.loadScene('Title');
    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});

cc._RFpop();
},{}],"AnimOp":[function(require,module,exports){
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
        cc.director.loadScene('op2');
    }
});

cc._RFpop();
},{}],"Bullet":[function(require,module,exports){
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
    onLoad: function onLoad() {},

    outOfTheWall: function outOfTheWall() {
        if (this.node.x > this.shootingrange || this.node.x < -this.shootingrange || this.node.y > this.shootingrange || this.node.y < -this.shootingrange) {
            return true;
        }
        return false;
    },

    // called every frame, uncomment this function to activate update callback
    update: function update(dt) {
        switch (this.direction) {
            case 0:
                this.node.y += this.speed;
                break;
            case 1:
                this.node.y -= this.speed;
                break;
            case 2:
                this.node.x -= this.speed;
                break;
            case 3:
                this.node.x += this.speed;
                break;
        }
        if (this.outOfTheWall()) {
            this.node.destroy();
        }
    }
});

cc._RFpop();
},{}],"ChooseDiffculty":[function(require,module,exports){
"use strict";
cc._RFpush(module, '63ae010Q4hBIpypEQfuWM+P', 'ChooseDiffculty');
// Script\ChooseDiffculty.js

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
        reference: {
            "default": null,
            type: cc.Node
        }
    },

    // use this for initialization
    onLoad: function onLoad() {},

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },

    chooseEasy: function chooseEasy() {
        window.Global.diffculty = 0;
        cc.director.loadScene("Mainloop");
    },

    chooseNormal: function chooseNormal() {
        window.Global.diffculty = 1;
        cc.director.loadScene("Mainloop");
    },

    chooseHard: function chooseHard() {
        window.Global.diffculty = 2;
        cc.director.loadScene("Mainloop");
    }
});

cc._RFpop();
},{}],"ChooseMap":[function(require,module,exports){
"use strict";
cc._RFpush(module, '185395JNV9EW5e8sW0Y7O/0', 'ChooseMap');
// Script\ChooseMap.js

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
    onLoad: function onLoad() {},

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {
    // },

    chooseMap1: function chooseMap1() {
        cc.director.loadScene('Mainloop');
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
        DetectRadius: 150,
        petrolcooldown: 1,
        speed: 0,
        count: 0,
        detected: false
    },

    // use this for initialization
    onLoad: function onLoad() {
        this.count = 0;
        this.detected = false;
    },

    outOfTheWall: function outOfTheWall() {
        if (this.node.x > 480 || this.node.x < -480 || this.node.y > 320 || this.node.y < -320) {
            return true;
        }
        return false;
    },

    onCollisionEnter: function onCollisionEnter(other, self) {
        //this.node.parent.getComponent("MainLoop").enemyCount--;
        this.game.enemyCount--;
        self.node.destroy();
        if (other.node.group == "Player") {
            cc.director.loadScene("GameOver");
        } else {
            other.node.destroy();
        }
    },

    onDestroy: function onDestroy() {},

    getPlayerDistance: function getPlayerDistance() {
        var playerposx = this.game.player.x;
        //console.log("playerposx"+playerposx);
        var playerposy = this.game.player.y;
        var dist = cc.pDistance(this.node.position, cc.p(playerposx, playerposy));
        return dist;
    },

    moveTowardPlayer: function moveTowardPlayer() {
        var playerx = this.game.player.x;
        var playery = this.game.player.y;
        if (playerx >= this.node.x) {
            if (this.node.x + this.speed >= playerx) {
                this.node.x = playerx;
            } else {
                this.node.x += this.speed;
            }
        } else {
            if (this.node.x - this.speed < playerx) {
                this.node.x = playerx;
            } else {
                this.node.x -= this.speed;
            }
        }
        if (playery >= this.node.y) {
            if (this.node.y + this.speed >= playery) {
                this.node.y = playery;
            } else {
                this.node.y += this.speed;
            }
        } else {
            if (this.node.y - this.speed < playery) {
                this.node.y = playery;
            } else {
                this.node.y -= this.speed;
            }
        }
    },

    // called every frame, uncomment this function to activate update callback
    update: function update(dt) {
        //console.log(this.detected);
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
        if (this.detected === true) {
            this.moveTowardPlayer();
        } else if (this.getPlayerDistance() < this.DetectRadius) {
            //this.speed*=0.5;
            this.moveTowardPlayer();
            this.detected = true;
        } else {
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
    }
});

cc._RFpop();
},{}],"GameOver":[function(require,module,exports){
"use strict";
cc._RFpush(module, 'd0569adHfJExZ8lXXGpzM4R', 'GameOver');
// Script\GameOver.js

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
                    case cc.KEY.r:
                        cc.director.loadScene('Mainloop');
                        break;
                }
            }
        }, self.node);
    }

});
// called every frame, uncomment this function to activate update callback
// update: function (dt) {

// },

cc._RFpop();
},{}],"Global":[function(require,module,exports){
"use strict";
cc._RFpush(module, '8e5a0P2rJJBLrwrW4wVzLlE', 'Global');
// Script\Global.js

window.Global = {
    diffculty: 0
};

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
        enemyCount: 0,
        spawnNumber: 0,
        wave: 0,
        clearwave: 5,
        enemyPrefab: {
            "default": null,
            type: cc.Prefab
        },
        player: {
            "default": null,
            type: cc.Node
        }
    },

    // use this for initialization
    onLoad: function onLoad() {
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
        this.enemyCount = 0;
        this.wave = 0;
        //console.log(enemyCount);
        var diffculty = window.Global.diffculty;
        //console.log(cc.game.isPersistRootNode(this.passarg));
        //console.log("diffculty"+diffculty)
        switch (diffculty) {
            case 0:
                this.spawnNumber = 5;
                break;
            case 1:
                this.spawnNumber = 15;
                break;
            case 2:
                this.spawnNumber = 35;
                break;
        }
        //console.log("onLoad "+this.spawnNumber);
    },

    randomPosition: function randomPosition() {
        var playerx = 0;
        var playery = 0;
        playerx = this.player.x;
        playery = this.player.y;
        var randx = 0;
        var randy = 0;
        var maxx = this.node.width / 2;
        var maxy = this.node.height / 2;
        randx = cc.randomMinus1To1() * maxx;
        randy = cc.randomMinus1To1() * maxy;
        while ((randx - playerx) * (randx - playerx) + (randy - playery) * (randy - playery) < 10000) {
            randx = cc.randomMinus1To1() * maxx;
            randy = cc.randomMinus1To1() * maxy;
        }
        return cc.p(randx, randy);
    },

    spawnAnEnemy: function spawnAnEnemy() {
        var newEnemy = cc.instantiate(this.enemyPrefab);
        this.node.addChild(newEnemy);
        newEnemy.setPosition(this.randomPosition());
        newEnemy.getComponent('EnemyScript').game = this;
        this.enemyCount++;
        //log("spawn an enemy "+this.enemyCount);
    },

    spawnEnemy: function spawnEnemy() {
        //console.log(this.spawnNumber);
        for (var i = 0; i < this.spawnNumber; i++) {
            this.spawnAnEnemy();
        }
    },

    // called every frame, uncomment this function to activate update callback
    update: function update(dt) {
        //console.log(this.enemyCount);
        if (this.enemyCount <= 0) {
            this.wave++;
            if (this.wave > this.clearwave) {
                cc.director.loadScene("Finish");
            }
            this.spawnNumber += 5;
            this.spawnEnemy();
        }
    }
});

cc._RFpop();
},{}],"Player":[function(require,module,exports){
"use strict";
cc._RFpush(module, 'eb35476F6BEvpTzVCY3Tw39', 'Player');
// Script\Player.js

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
        speed: 0,
        atkcooldown: 10,
        atkcount: 0,
        shootingrange: 200,

        /*moveup:false,
        movedown:false,
        moveleft:false,
        moveright:false,*/
        bulletPrefab: {
            "default": null,
            type: cc.Prefab
        }
    },

    // use this for initialization
    onLoad: function onLoad() {
        var moveup = false;
        var movedown = false;
        var moveleft = false;
        var moveright = false;
        var atkup = false;
        var atkdown = false;
        var atkleft = false;
        var atkright = false;
        var attatkdir = 0;
        this.atkcount = 0;
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
                    case cc.KEY.up:
                        self.atkup = true;
                        self.atkdown = false;
                        self.atkleft = false;
                        self.atkright = false;
                        break;
                    case cc.KEY.down:
                        self.atkup = false;
                        self.atkdown = true;
                        self.atkleft = false;
                        self.atkright = false;
                        break;
                    case cc.KEY.left:
                        self.atkup = false;
                        self.atkdown = false;
                        self.atkleft = true;
                        self.atkright = false;
                        break;
                    case cc.KEY.right:
                        self.atkup = false;
                        self.atkdown = false;
                        self.atkleft = false;
                        self.atkright = true;
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
                    case cc.KEY.up:
                        self.atkup = false;
                        break;
                    case cc.KEY.down:
                        self.atkdown = false;
                        break;
                    case cc.KEY.left:
                        self.atkleft = false;
                        break;
                    case cc.KEY.right:
                        self.atkright = false;
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

    checkAtkCooldown: function checkAtkCooldown() {
        if (this.atkcount >= this.atkcooldown) {
            return true;
        }
        return false;
    },

    attack: function attack(a) {
        if (this.checkAtkCooldown()) {
            var newbullet = cc.instantiate(this.bulletPrefab);
            this.node.addChild(newbullet);
            newbullet.setPosition(0, 0);
            var script = newbullet.getComponent("Bullet");
            script.direction = a;
            script.shootingrange = this.shootingrange;
            this.atkcount = 0;
        }
    },

    // called every frame, uncomment this function to activate update callback
    update: function update(dt) {
        this.atkcount++;
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
        if (this.atkup) {
            this.attack(0);
        }
        if (this.atkdown) {
            this.attack(1);
        }
        if (this.atkleft) {
            this.attack(2);
        }
        if (this.atkright) {
            this.attack(3);
        }
    }

});
/*onDestroy:function(){
    cc.director.loadScene('GameOver');
},*/

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
                        cc.director.loadScene('ChooseDiffculty');
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

cc._RFpop();
},{}]},{},["ChooseMap","StartGame","AnimOp2","AnimOp","ChooseDiffculty","EnemyScript","Global","MainLoop","Bullet","GameOver","Player"])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL0FwcERhdGEvTG9jYWwvQ29jb3NDcmVhdG9yL2FwcC0xLjEuMC9yZXNvdXJjZXMvYXBwLmFzYXIvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsImFzc2V0cy9TY3JpcHQvQW5pbU9wMi5qcyIsImFzc2V0cy9TY3JpcHQvQW5pbU9wLmpzIiwiYXNzZXRzL1NjcmlwdC9CdWxsZXQuanMiLCJhc3NldHMvU2NyaXB0L0Nob29zZURpZmZjdWx0eS5qcyIsImFzc2V0cy9TY3JpcHQvQ2hvb3NlTWFwLmpzIiwiYXNzZXRzL1NjcmlwdC9FbmVteVNjcmlwdC5qcyIsImFzc2V0cy9TY3JpcHQvR2FtZU92ZXIuanMiLCJhc3NldHMvU2NyaXB0L0dsb2JhbC5qcyIsImFzc2V0cy9TY3JpcHQvTWFpbkxvb3AuanMiLCJhc3NldHMvU2NyaXB0L1BsYXllci5qcyIsImFzc2V0cy9TY3JpcHQvU3RhcnRHYW1lLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3REQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnNDNlMzFZcVVVWk1FWm9IQ3NGZjNvTUUnLCAnQW5pbU9wMicpO1xuLy8gU2NyaXB0XFxBbmltT3AyLmpzXG5cbmNjLkNsYXNzKHtcbiAgICAnZXh0ZW5kcyc6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLy8gZm9vOiB7XG4gICAgICAgIC8vICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgIC8vICAgIHVybDogY2MuVGV4dHVyZTJELCAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcbiAgICAgICAgLy8gICAgc2VyaWFsaXphYmxlOiB0cnVlLCAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXG4gICAgICAgIC8vICAgIHZpc2libGU6IHRydWUsICAgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxuICAgICAgICAvLyAgICBkaXNwbGF5TmFtZTogJ0ZvbycsIC8vIG9wdGlvbmFsXG4gICAgICAgIC8vICAgIHJlYWRvbmx5OiBmYWxzZSwgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgZmFsc2VcbiAgICAgICAgLy8gfSxcbiAgICAgICAgLy8gLi4uXG4gICAgfSxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gb25Mb2FkKCkge1xuICAgICAgICB2YXIgYW5pbSA9IHRoaXMuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbik7XG4gICAgICAgIGFuaW0ucGxheSgnMicpO1xuICAgIH0sXG5cbiAgICAvLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xuICAgIG9uT3AyRmluaXNoZWQ6IGZ1bmN0aW9uIG9uT3AyRmluaXNoZWQoKSB7XG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnVGl0bGUnKTtcbiAgICB9XG5cbiAgICAvLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xuICAgIC8vIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XG5cbiAgICAvLyB9LFxufSk7XG5cbmNjLl9SRnBvcCgpOyIsIlwidXNlIHN0cmljdFwiO1xuY2MuX1JGcHVzaChtb2R1bGUsICc0ZTNiYVYwTnhwSk40OTlqT0phRnVoSScsICdBbmltT3AnKTtcbi8vIFNjcmlwdFxcQW5pbU9wLmpzXG5cbmNjLkNsYXNzKHtcbiAgICAnZXh0ZW5kcyc6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLy8gZm9vOiB7XG4gICAgICAgIC8vICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgIC8vICAgIHVybDogY2MuVGV4dHVyZTJELCAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcbiAgICAgICAgLy8gICAgc2VyaWFsaXphYmxlOiB0cnVlLCAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXG4gICAgICAgIC8vICAgIHZpc2libGU6IHRydWUsICAgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxuICAgICAgICAvLyAgICBkaXNwbGF5TmFtZTogJ0ZvbycsIC8vIG9wdGlvbmFsXG4gICAgICAgIC8vICAgIHJlYWRvbmx5OiBmYWxzZSwgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgZmFsc2VcbiAgICAgICAgLy8gfSxcbiAgICAgICAgLy8gLi4uXG4gICAgfSxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gb25Mb2FkKCkge1xuICAgICAgICB2YXIgYW5pbSA9IHRoaXMuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbik7XG4gICAgICAgIGFuaW0ucGxheSgnMScpO1xuICAgIH0sXG5cbiAgICAvLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xuICAgIG9uT3BGaW5pc2g6IGZ1bmN0aW9uIG9uT3BGaW5pc2goKSB7XG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnb3AyJyk7XG4gICAgfVxufSk7XG5cbmNjLl9SRnBvcCgpOyIsIlwidXNlIHN0cmljdFwiO1xuY2MuX1JGcHVzaChtb2R1bGUsICdjOWMyMk1KZUhsRnNJY2hidk03RHVHSycsICdCdWxsZXQnKTtcbi8vIFNjcmlwdFxcQnVsbGV0LmpzXG5cbmNjLkNsYXNzKHtcbiAgICBcImV4dGVuZHNcIjogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICAvLyBmb286IHtcbiAgICAgICAgLy8gICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgLy8gICAgdXJsOiBjYy5UZXh0dXJlMkQsICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0eXBlb2YgZGVmYXVsdFxuICAgICAgICAvLyAgICBzZXJpYWxpemFibGU6IHRydWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcbiAgICAgICAgLy8gICAgdmlzaWJsZTogdHJ1ZSwgICAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXG4gICAgICAgIC8vICAgIGRpc3BsYXlOYW1lOiAnRm9vJywgLy8gb3B0aW9uYWxcbiAgICAgICAgLy8gICAgcmVhZG9ubHk6IGZhbHNlLCAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyBmYWxzZVxuICAgICAgICAvLyB9LFxuICAgICAgICAvLyAuLi5cbiAgICAgICAgc3BlZWQ6IDEwLFxuICAgICAgICBkaXJlY3Rpb246IDAsXG4gICAgICAgIHNob290aW5ncmFuZ2U6IDI1MFxuICAgIH0sXG5cbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uIG9uTG9hZCgpIHt9LFxuXG4gICAgb3V0T2ZUaGVXYWxsOiBmdW5jdGlvbiBvdXRPZlRoZVdhbGwoKSB7XG4gICAgICAgIGlmICh0aGlzLm5vZGUueCA+IHRoaXMuc2hvb3RpbmdyYW5nZSB8fCB0aGlzLm5vZGUueCA8IC10aGlzLnNob290aW5ncmFuZ2UgfHwgdGhpcy5ub2RlLnkgPiB0aGlzLnNob290aW5ncmFuZ2UgfHwgdGhpcy5ub2RlLnkgPCAtdGhpcy5zaG9vdGluZ3JhbmdlKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSxcblxuICAgIC8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoZHQpIHtcbiAgICAgICAgc3dpdGNoICh0aGlzLmRpcmVjdGlvbikge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS55ICs9IHRoaXMuc3BlZWQ7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnkgLT0gdGhpcy5zcGVlZDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUueCAtPSB0aGlzLnNwZWVkO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS54ICs9IHRoaXMuc3BlZWQ7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMub3V0T2ZUaGVXYWxsKCkpIHtcbiAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XG4gICAgICAgIH1cbiAgICB9XG59KTtcblxuY2MuX1JGcG9wKCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5jYy5fUkZwdXNoKG1vZHVsZSwgJzYzYWUwMTBRNGhCSXB5cEVRZnVXTStQJywgJ0Nob29zZURpZmZjdWx0eScpO1xuLy8gU2NyaXB0XFxDaG9vc2VEaWZmY3VsdHkuanNcblxuY2MuQ2xhc3Moe1xuICAgIFwiZXh0ZW5kc1wiOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIC8vIGZvbzoge1xuICAgICAgICAvLyAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAvLyAgICB1cmw6IGNjLlRleHR1cmUyRCwgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XG4gICAgICAgIC8vICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxuICAgICAgICAvLyAgICB2aXNpYmxlOiB0cnVlLCAgICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcbiAgICAgICAgLy8gICAgZGlzcGxheU5hbWU6ICdGb28nLCAvLyBvcHRpb25hbFxuICAgICAgICAvLyAgICByZWFkb25seTogZmFsc2UsICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIGZhbHNlXG4gICAgICAgIC8vIH0sXG4gICAgICAgIC8vIC4uLlxuICAgICAgICByZWZlcmVuY2U6IHtcbiAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gb25Mb2FkKCkge30sXG5cbiAgICAvLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xuICAgIC8vIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XG5cbiAgICAvLyB9LFxuXG4gICAgY2hvb3NlRWFzeTogZnVuY3Rpb24gY2hvb3NlRWFzeSgpIHtcbiAgICAgICAgd2luZG93Lkdsb2JhbC5kaWZmY3VsdHkgPSAwO1xuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJNYWlubG9vcFwiKTtcbiAgICB9LFxuXG4gICAgY2hvb3NlTm9ybWFsOiBmdW5jdGlvbiBjaG9vc2VOb3JtYWwoKSB7XG4gICAgICAgIHdpbmRvdy5HbG9iYWwuZGlmZmN1bHR5ID0gMTtcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiTWFpbmxvb3BcIik7XG4gICAgfSxcblxuICAgIGNob29zZUhhcmQ6IGZ1bmN0aW9uIGNob29zZUhhcmQoKSB7XG4gICAgICAgIHdpbmRvdy5HbG9iYWwuZGlmZmN1bHR5ID0gMjtcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiTWFpbmxvb3BcIik7XG4gICAgfVxufSk7XG5cbmNjLl9SRnBvcCgpOyIsIlwidXNlIHN0cmljdFwiO1xuY2MuX1JGcHVzaChtb2R1bGUsICcxODUzOTVKTlY5RVc1ZThzVzBZN08vMCcsICdDaG9vc2VNYXAnKTtcbi8vIFNjcmlwdFxcQ2hvb3NlTWFwLmpzXG5cbmNjLkNsYXNzKHtcbiAgICAnZXh0ZW5kcyc6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLy8gZm9vOiB7XG4gICAgICAgIC8vICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgIC8vICAgIHVybDogY2MuVGV4dHVyZTJELCAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcbiAgICAgICAgLy8gICAgc2VyaWFsaXphYmxlOiB0cnVlLCAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXG4gICAgICAgIC8vICAgIHZpc2libGU6IHRydWUsICAgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxuICAgICAgICAvLyAgICBkaXNwbGF5TmFtZTogJ0ZvbycsIC8vIG9wdGlvbmFsXG4gICAgICAgIC8vICAgIHJlYWRvbmx5OiBmYWxzZSwgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgZmFsc2VcbiAgICAgICAgLy8gfSxcbiAgICAgICAgLy8gLi4uXG4gICAgfSxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gb25Mb2FkKCkge30sXG5cbiAgICAvLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xuICAgIC8vIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XG4gICAgLy8gfSxcblxuICAgIGNob29zZU1hcDE6IGZ1bmN0aW9uIGNob29zZU1hcDEoKSB7XG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnTWFpbmxvb3AnKTtcbiAgICB9XG59KTtcblxuY2MuX1JGcG9wKCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5jYy5fUkZwdXNoKG1vZHVsZSwgJzY2OGNhNEg0ZzVLcEp2bHJEd055NDVNJywgJ0VuZW15U2NyaXB0Jyk7XG4vLyBTY3JpcHRcXEVuZW15U2NyaXB0LmpzXG5cbmNjLkNsYXNzKHtcbiAgICBcImV4dGVuZHNcIjogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICAvLyBmb286IHtcbiAgICAgICAgLy8gICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgLy8gICAgdXJsOiBjYy5UZXh0dXJlMkQsICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0eXBlb2YgZGVmYXVsdFxuICAgICAgICAvLyAgICBzZXJpYWxpemFibGU6IHRydWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcbiAgICAgICAgLy8gICAgdmlzaWJsZTogdHJ1ZSwgICAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXG4gICAgICAgIC8vICAgIGRpc3BsYXlOYW1lOiAnRm9vJywgLy8gb3B0aW9uYWxcbiAgICAgICAgLy8gICAgcmVhZG9ubHk6IGZhbHNlLCAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyBmYWxzZVxuICAgICAgICAvLyB9LFxuICAgICAgICAvLyAuLi5cbiAgICAgICAgRGV0ZWN0UmFkaXVzOiAxNTAsXG4gICAgICAgIHBldHJvbGNvb2xkb3duOiAxLFxuICAgICAgICBzcGVlZDogMCxcbiAgICAgICAgY291bnQ6IDAsXG4gICAgICAgIGRldGVjdGVkOiBmYWxzZVxuICAgIH0sXG5cbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uIG9uTG9hZCgpIHtcbiAgICAgICAgdGhpcy5jb3VudCA9IDA7XG4gICAgICAgIHRoaXMuZGV0ZWN0ZWQgPSBmYWxzZTtcbiAgICB9LFxuXG4gICAgb3V0T2ZUaGVXYWxsOiBmdW5jdGlvbiBvdXRPZlRoZVdhbGwoKSB7XG4gICAgICAgIGlmICh0aGlzLm5vZGUueCA+IDQ4MCB8fCB0aGlzLm5vZGUueCA8IC00ODAgfHwgdGhpcy5ub2RlLnkgPiAzMjAgfHwgdGhpcy5ub2RlLnkgPCAtMzIwKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSxcblxuICAgIG9uQ29sbGlzaW9uRW50ZXI6IGZ1bmN0aW9uIG9uQ29sbGlzaW9uRW50ZXIob3RoZXIsIHNlbGYpIHtcbiAgICAgICAgLy90aGlzLm5vZGUucGFyZW50LmdldENvbXBvbmVudChcIk1haW5Mb29wXCIpLmVuZW15Q291bnQtLTtcbiAgICAgICAgdGhpcy5nYW1lLmVuZW15Q291bnQtLTtcbiAgICAgICAgc2VsZi5ub2RlLmRlc3Ryb3koKTtcbiAgICAgICAgaWYgKG90aGVyLm5vZGUuZ3JvdXAgPT0gXCJQbGF5ZXJcIikge1xuICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiR2FtZU92ZXJcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvdGhlci5ub2RlLmRlc3Ryb3koKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBvbkRlc3Ryb3k6IGZ1bmN0aW9uIG9uRGVzdHJveSgpIHt9LFxuXG4gICAgZ2V0UGxheWVyRGlzdGFuY2U6IGZ1bmN0aW9uIGdldFBsYXllckRpc3RhbmNlKCkge1xuICAgICAgICB2YXIgcGxheWVycG9zeCA9IHRoaXMuZ2FtZS5wbGF5ZXIueDtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcInBsYXllcnBvc3hcIitwbGF5ZXJwb3N4KTtcbiAgICAgICAgdmFyIHBsYXllcnBvc3kgPSB0aGlzLmdhbWUucGxheWVyLnk7XG4gICAgICAgIHZhciBkaXN0ID0gY2MucERpc3RhbmNlKHRoaXMubm9kZS5wb3NpdGlvbiwgY2MucChwbGF5ZXJwb3N4LCBwbGF5ZXJwb3N5KSk7XG4gICAgICAgIHJldHVybiBkaXN0O1xuICAgIH0sXG5cbiAgICBtb3ZlVG93YXJkUGxheWVyOiBmdW5jdGlvbiBtb3ZlVG93YXJkUGxheWVyKCkge1xuICAgICAgICB2YXIgcGxheWVyeCA9IHRoaXMuZ2FtZS5wbGF5ZXIueDtcbiAgICAgICAgdmFyIHBsYXllcnkgPSB0aGlzLmdhbWUucGxheWVyLnk7XG4gICAgICAgIGlmIChwbGF5ZXJ4ID49IHRoaXMubm9kZS54KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5ub2RlLnggKyB0aGlzLnNwZWVkID49IHBsYXllcngpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUueCA9IHBsYXllcng7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZS54ICs9IHRoaXMuc3BlZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy5ub2RlLnggLSB0aGlzLnNwZWVkIDwgcGxheWVyeCkge1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZS54ID0gcGxheWVyeDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnggLT0gdGhpcy5zcGVlZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAocGxheWVyeSA+PSB0aGlzLm5vZGUueSkge1xuICAgICAgICAgICAgaWYgKHRoaXMubm9kZS55ICsgdGhpcy5zcGVlZCA+PSBwbGF5ZXJ5KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnkgPSBwbGF5ZXJ5O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUueSArPSB0aGlzLnNwZWVkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRoaXMubm9kZS55IC0gdGhpcy5zcGVlZCA8IHBsYXllcnkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUueSA9IHBsYXllcnk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZS55IC09IHRoaXMuc3BlZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lLCB1bmNvbW1lbnQgdGhpcyBmdW5jdGlvbiB0byBhY3RpdmF0ZSB1cGRhdGUgY2FsbGJhY2tcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShkdCkge1xuICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMuZGV0ZWN0ZWQpO1xuICAgICAgICAvKnZhciByYW5kPU1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSooMysxKSk7XHJcbiAgICAgICAgc3dpdGNoKHJhbmQpe1xyXG4gICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUueCs9dGhpcy5zcGVlZDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUueC09dGhpcy5zcGVlZDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUueSs9dGhpcy5zcGVlZDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUueS09dGhpcy5zcGVlZDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH0qL1xuICAgICAgICBpZiAodGhpcy5kZXRlY3RlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgdGhpcy5tb3ZlVG93YXJkUGxheWVyKCk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5nZXRQbGF5ZXJEaXN0YW5jZSgpIDwgdGhpcy5EZXRlY3RSYWRpdXMpIHtcbiAgICAgICAgICAgIC8vdGhpcy5zcGVlZCo9MC41O1xuICAgICAgICAgICAgdGhpcy5tb3ZlVG93YXJkUGxheWVyKCk7XG4gICAgICAgICAgICB0aGlzLmRldGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY291bnQrKztcbiAgICAgICAgICAgIGlmICh0aGlzLmNvdW50ID49IHRoaXMucGV0cm9sY29vbGRvd24pIHtcbiAgICAgICAgICAgICAgICB2YXIgcmFuZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICgyNCArIDEpKTtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHJhbmQpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLnggKz0gdGhpcy5zcGVlZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm91dE9mVGhlV2FsbCgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLnggLT0gdGhpcy5zcGVlZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUueCAtPSB0aGlzLnNwZWVkO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMub3V0T2ZUaGVXYWxsKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUueCArPSB0aGlzLnNwZWVkO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS55ICs9IHRoaXMuc3BlZWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5vdXRPZlRoZVdhbGwoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS55IC09IHRoaXMuc3BlZWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLnkgLT0gdGhpcy5zcGVlZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm91dE9mVGhlV2FsbCgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLnkgKz0gdGhpcy5zcGVlZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUueCAtPSB0aGlzLnNwZWVkICogMC44O1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLnkgKz0gdGhpcy5zcGVlZCAqIDAuNjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm91dE9mVGhlV2FsbCgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLnggKz0gdGhpcy5zcGVlZCAqIDAuODtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUueSAtPSB0aGlzLnNwZWVkICogMC42O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS54IC09IHRoaXMuc3BlZWQgKiAwLjY7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUueSArPSB0aGlzLnNwZWVkICogMC44O1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMub3V0T2ZUaGVXYWxsKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUueCArPSB0aGlzLnNwZWVkICogMC42O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS55IC09IHRoaXMuc3BlZWQgKiAwLjg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA3OlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLnggKz0gdGhpcy5zcGVlZCAqIDAuNjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS55ICs9IHRoaXMuc3BlZWQgKiAwLjg7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5vdXRPZlRoZVdhbGwoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS54IC09IHRoaXMuc3BlZWQgKiAwLjY7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLnkgLT0gdGhpcy5zcGVlZCAqIDAuODtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUueCAtPSB0aGlzLnNwZWVkICogMC42O1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLnkgLT0gdGhpcy5zcGVlZCAqIDAuODtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm91dE9mVGhlV2FsbCgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLnggKz0gdGhpcy5zcGVlZCAqIDAuNjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUueSArPSB0aGlzLnNwZWVkICogMC44O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgOTpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS54IC09IHRoaXMuc3BlZWQgKiAwLjg7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUueSAtPSB0aGlzLnNwZWVkICogMC42O1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMub3V0T2ZUaGVXYWxsKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUueCArPSB0aGlzLnNwZWVkICogMC44O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS55ICs9IHRoaXMuc3BlZWQgKiAwLjY7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS54ICs9IHRoaXMuc3BlZWQgKiAwLjg7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUueSArPSB0aGlzLnNwZWVkICogMC42O1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMub3V0T2ZUaGVXYWxsKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUueCAtPSB0aGlzLnNwZWVkICogMC44O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS55IC09IHRoaXMuc3BlZWQgKiAwLjY7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS54ICs9IHRoaXMuc3BlZWQgKiAwLjg7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUueSAtPSB0aGlzLnNwZWVkICogMC42O1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMub3V0T2ZUaGVXYWxsKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUueCAtPSB0aGlzLnNwZWVkICogMC44O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS55ICs9IHRoaXMuc3BlZWQgKiAwLjY7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS54ICs9IHRoaXMuc3BlZWQgKiAwLjY7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUueSAtPSB0aGlzLnNwZWVkICogMC44O1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMub3V0T2ZUaGVXYWxsKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUueCAtPSB0aGlzLnNwZWVkICogMC42O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS55ICs9IHRoaXMuc3BlZWQgKiAwLjg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5jb3VudCA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59KTtcblxuY2MuX1JGcG9wKCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5jYy5fUkZwdXNoKG1vZHVsZSwgJ2QwNTY5YWRIZkpFeFo4bFhYR3B6TTRSJywgJ0dhbWVPdmVyJyk7XG4vLyBTY3JpcHRcXEdhbWVPdmVyLmpzXG5cbmNjLkNsYXNzKHtcbiAgICAnZXh0ZW5kcyc6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLy8gZm9vOiB7XG4gICAgICAgIC8vICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgIC8vICAgIHVybDogY2MuVGV4dHVyZTJELCAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcbiAgICAgICAgLy8gICAgc2VyaWFsaXphYmxlOiB0cnVlLCAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXG4gICAgICAgIC8vICAgIHZpc2libGU6IHRydWUsICAgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxuICAgICAgICAvLyAgICBkaXNwbGF5TmFtZTogJ0ZvbycsIC8vIG9wdGlvbmFsXG4gICAgICAgIC8vICAgIHJlYWRvbmx5OiBmYWxzZSwgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgZmFsc2VcbiAgICAgICAgLy8gfSxcbiAgICAgICAgLy8gLi4uXG4gICAgfSxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gb25Mb2FkKCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIGNjLmV2ZW50TWFuYWdlci5hZGRMaXN0ZW5lcih7XG4gICAgICAgICAgICBldmVudDogY2MuRXZlbnRMaXN0ZW5lci5LRVlCT0FSRCxcbiAgICAgICAgICAgIG9uS2V5UHJlc3NlZDogZnVuY3Rpb24gb25LZXlQcmVzc2VkKGtleUNvZGUsIGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChrZXlDb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgY2MuS0VZLnI6XG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ01haW5sb29wJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHNlbGYubm9kZSk7XG4gICAgfVxuXG59KTtcbi8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXG4vLyB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xuXG4vLyB9LFxuXG5jYy5fUkZwb3AoKTsiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnOGU1YTBQMnJKSkJMcndyVzR3VnpMbEUnLCAnR2xvYmFsJyk7XG4vLyBTY3JpcHRcXEdsb2JhbC5qc1xuXG53aW5kb3cuR2xvYmFsID0ge1xuICAgIGRpZmZjdWx0eTogMFxufTtcblxuY2MuX1JGcG9wKCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5jYy5fUkZwdXNoKG1vZHVsZSwgJ2MyMGY0dFN2eWRHUzVxUnp2bjVHOXo5JywgJ01haW5Mb29wJyk7XG4vLyBTY3JpcHRcXE1haW5Mb29wLmpzXG5cbmNjLkNsYXNzKHtcbiAgICBcImV4dGVuZHNcIjogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICAvLyBmb286IHtcbiAgICAgICAgLy8gICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgLy8gICAgdXJsOiBjYy5UZXh0dXJlMkQsICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0eXBlb2YgZGVmYXVsdFxuICAgICAgICAvLyAgICBzZXJpYWxpemFibGU6IHRydWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcbiAgICAgICAgLy8gICAgdmlzaWJsZTogdHJ1ZSwgICAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXG4gICAgICAgIC8vICAgIGRpc3BsYXlOYW1lOiAnRm9vJywgLy8gb3B0aW9uYWxcbiAgICAgICAgLy8gICAgcmVhZG9ubHk6IGZhbHNlLCAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyBmYWxzZVxuICAgICAgICAvLyB9LFxuICAgICAgICAvLyAuLi5cbiAgICAgICAgZW5lbXlDb3VudDogMCxcbiAgICAgICAgc3Bhd25OdW1iZXI6IDAsXG4gICAgICAgIHdhdmU6IDAsXG4gICAgICAgIGNsZWFyd2F2ZTogNSxcbiAgICAgICAgZW5lbXlQcmVmYWI6IHtcbiAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuUHJlZmFiXG4gICAgICAgIH0sXG4gICAgICAgIHBsYXllcjoge1xuICAgICAgICAgICAgXCJkZWZhdWx0XCI6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXG4gICAgb25Mb2FkOiBmdW5jdGlvbiBvbkxvYWQoKSB7XG4gICAgICAgIHZhciBtYW5hZ2VyID0gY2MuZGlyZWN0b3IuZ2V0Q29sbGlzaW9uTWFuYWdlcigpO1xuICAgICAgICBtYW5hZ2VyLmVuYWJsZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmVuZW15Q291bnQgPSAwO1xuICAgICAgICB0aGlzLndhdmUgPSAwO1xuICAgICAgICAvL2NvbnNvbGUubG9nKGVuZW15Q291bnQpO1xuICAgICAgICB2YXIgZGlmZmN1bHR5ID0gd2luZG93Lkdsb2JhbC5kaWZmY3VsdHk7XG4gICAgICAgIC8vY29uc29sZS5sb2coY2MuZ2FtZS5pc1BlcnNpc3RSb290Tm9kZSh0aGlzLnBhc3NhcmcpKTtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcImRpZmZjdWx0eVwiK2RpZmZjdWx0eSlcbiAgICAgICAgc3dpdGNoIChkaWZmY3VsdHkpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICB0aGlzLnNwYXduTnVtYmVyID0gNTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICB0aGlzLnNwYXduTnVtYmVyID0gMTU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgdGhpcy5zcGF3bk51bWJlciA9IDM1O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIC8vY29uc29sZS5sb2coXCJvbkxvYWQgXCIrdGhpcy5zcGF3bk51bWJlcik7XG4gICAgfSxcblxuICAgIHJhbmRvbVBvc2l0aW9uOiBmdW5jdGlvbiByYW5kb21Qb3NpdGlvbigpIHtcbiAgICAgICAgdmFyIHBsYXllcnggPSAwO1xuICAgICAgICB2YXIgcGxheWVyeSA9IDA7XG4gICAgICAgIHBsYXllcnggPSB0aGlzLnBsYXllci54O1xuICAgICAgICBwbGF5ZXJ5ID0gdGhpcy5wbGF5ZXIueTtcbiAgICAgICAgdmFyIHJhbmR4ID0gMDtcbiAgICAgICAgdmFyIHJhbmR5ID0gMDtcbiAgICAgICAgdmFyIG1heHggPSB0aGlzLm5vZGUud2lkdGggLyAyO1xuICAgICAgICB2YXIgbWF4eSA9IHRoaXMubm9kZS5oZWlnaHQgLyAyO1xuICAgICAgICByYW5keCA9IGNjLnJhbmRvbU1pbnVzMVRvMSgpICogbWF4eDtcbiAgICAgICAgcmFuZHkgPSBjYy5yYW5kb21NaW51czFUbzEoKSAqIG1heHk7XG4gICAgICAgIHdoaWxlICgocmFuZHggLSBwbGF5ZXJ4KSAqIChyYW5keCAtIHBsYXllcngpICsgKHJhbmR5IC0gcGxheWVyeSkgKiAocmFuZHkgLSBwbGF5ZXJ5KSA8IDEwMDAwKSB7XG4gICAgICAgICAgICByYW5keCA9IGNjLnJhbmRvbU1pbnVzMVRvMSgpICogbWF4eDtcbiAgICAgICAgICAgIHJhbmR5ID0gY2MucmFuZG9tTWludXMxVG8xKCkgKiBtYXh5O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjYy5wKHJhbmR4LCByYW5keSk7XG4gICAgfSxcblxuICAgIHNwYXduQW5FbmVteTogZnVuY3Rpb24gc3Bhd25BbkVuZW15KCkge1xuICAgICAgICB2YXIgbmV3RW5lbXkgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmVuZW15UHJlZmFiKTtcbiAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKG5ld0VuZW15KTtcbiAgICAgICAgbmV3RW5lbXkuc2V0UG9zaXRpb24odGhpcy5yYW5kb21Qb3NpdGlvbigpKTtcbiAgICAgICAgbmV3RW5lbXkuZ2V0Q29tcG9uZW50KCdFbmVteVNjcmlwdCcpLmdhbWUgPSB0aGlzO1xuICAgICAgICB0aGlzLmVuZW15Q291bnQrKztcbiAgICAgICAgLy9sb2coXCJzcGF3biBhbiBlbmVteSBcIit0aGlzLmVuZW15Q291bnQpO1xuICAgIH0sXG5cbiAgICBzcGF3bkVuZW15OiBmdW5jdGlvbiBzcGF3bkVuZW15KCkge1xuICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMuc3Bhd25OdW1iZXIpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuc3Bhd25OdW1iZXI7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5zcGF3bkFuRW5lbXkoKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKGR0KSB7XG4gICAgICAgIC8vY29uc29sZS5sb2codGhpcy5lbmVteUNvdW50KTtcbiAgICAgICAgaWYgKHRoaXMuZW5lbXlDb3VudCA8PSAwKSB7XG4gICAgICAgICAgICB0aGlzLndhdmUrKztcbiAgICAgICAgICAgIGlmICh0aGlzLndhdmUgPiB0aGlzLmNsZWFyd2F2ZSkge1xuICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIkZpbmlzaFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc3Bhd25OdW1iZXIgKz0gNTtcbiAgICAgICAgICAgIHRoaXMuc3Bhd25FbmVteSgpO1xuICAgICAgICB9XG4gICAgfVxufSk7XG5cbmNjLl9SRnBvcCgpOyIsIlwidXNlIHN0cmljdFwiO1xuY2MuX1JGcHVzaChtb2R1bGUsICdlYjM1NDc2RjZCRXZwVHpWQ1kzVHczOScsICdQbGF5ZXInKTtcbi8vIFNjcmlwdFxcUGxheWVyLmpzXG5cbmNjLkNsYXNzKHtcbiAgICBcImV4dGVuZHNcIjogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICAvLyBmb286IHtcbiAgICAgICAgLy8gICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgLy8gICAgdXJsOiBjYy5UZXh0dXJlMkQsICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0eXBlb2YgZGVmYXVsdFxuICAgICAgICAvLyAgICBzZXJpYWxpemFibGU6IHRydWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcbiAgICAgICAgLy8gICAgdmlzaWJsZTogdHJ1ZSwgICAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXG4gICAgICAgIC8vICAgIGRpc3BsYXlOYW1lOiAnRm9vJywgLy8gb3B0aW9uYWxcbiAgICAgICAgLy8gICAgcmVhZG9ubHk6IGZhbHNlLCAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyBmYWxzZVxuICAgICAgICAvLyB9LFxuICAgICAgICAvLyAuLi5cbiAgICAgICAgc3BlZWQ6IDAsXG4gICAgICAgIGF0a2Nvb2xkb3duOiAxMCxcbiAgICAgICAgYXRrY291bnQ6IDAsXG4gICAgICAgIHNob290aW5ncmFuZ2U6IDIwMCxcblxuICAgICAgICAvKm1vdmV1cDpmYWxzZSxcclxuICAgICAgICBtb3ZlZG93bjpmYWxzZSxcclxuICAgICAgICBtb3ZlbGVmdDpmYWxzZSxcclxuICAgICAgICBtb3ZlcmlnaHQ6ZmFsc2UsKi9cbiAgICAgICAgYnVsbGV0UHJlZmFiOiB7XG4gICAgICAgICAgICBcImRlZmF1bHRcIjogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLlByZWZhYlxuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gb25Mb2FkKCkge1xuICAgICAgICB2YXIgbW92ZXVwID0gZmFsc2U7XG4gICAgICAgIHZhciBtb3ZlZG93biA9IGZhbHNlO1xuICAgICAgICB2YXIgbW92ZWxlZnQgPSBmYWxzZTtcbiAgICAgICAgdmFyIG1vdmVyaWdodCA9IGZhbHNlO1xuICAgICAgICB2YXIgYXRrdXAgPSBmYWxzZTtcbiAgICAgICAgdmFyIGF0a2Rvd24gPSBmYWxzZTtcbiAgICAgICAgdmFyIGF0a2xlZnQgPSBmYWxzZTtcbiAgICAgICAgdmFyIGF0a3JpZ2h0ID0gZmFsc2U7XG4gICAgICAgIHZhciBhdHRhdGtkaXIgPSAwO1xuICAgICAgICB0aGlzLmF0a2NvdW50ID0gMDtcbiAgICAgICAgdGhpcy5zZXRJbnB1dENvbnRyb2woKTtcbiAgICB9LFxuXG4gICAgc2V0SW5wdXRDb250cm9sOiBmdW5jdGlvbiBzZXRJbnB1dENvbnRyb2woKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgY2MuZXZlbnRNYW5hZ2VyLmFkZExpc3RlbmVyKHtcbiAgICAgICAgICAgIGV2ZW50OiBjYy5FdmVudExpc3RlbmVyLktFWUJPQVJELFxuICAgICAgICAgICAgb25LZXlQcmVzc2VkOiBmdW5jdGlvbiBvbktleVByZXNzZWQoa2V5Q29kZSwgZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGtleUNvZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBjYy5LRVkudzpcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vc2VsZi5tb3ZlbGVmdCA9ZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL3NlbGYubW92ZXJpZ2h0PSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYubW92ZXVwID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vc2VsZi5tb3ZlZG93biA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgY2MuS0VZLnM6XG4gICAgICAgICAgICAgICAgICAgICAgICAvL3NlbGYubW92ZWxlZnQgPWZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9zZWxmLm1vdmVyaWdodD0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL3NlbGYubW92ZXVwID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLm1vdmVkb3duID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIGNjLktFWS5hOlxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5tb3ZlbGVmdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL3NlbGYubW92ZXJpZ2h0PSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vc2VsZi5tb3ZldXAgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vc2VsZi5tb3ZlZG93biA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgY2MuS0VZLmQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAvL3NlbGYubW92ZWxlZnQgPWZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5tb3ZlcmlnaHQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9zZWxmLm1vdmV1cCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9zZWxmLm1vdmVkb3duID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBjYy5LRVkudXA6XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmF0a3VwID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuYXRrZG93biA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5hdGtsZWZ0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmF0a3JpZ2h0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBjYy5LRVkuZG93bjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuYXRrdXAgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuYXRrZG93biA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmF0a2xlZnQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuYXRrcmlnaHQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIGNjLktFWS5sZWZ0OlxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5hdGt1cCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5hdGtkb3duID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmF0a2xlZnQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5hdGtyaWdodCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgY2MuS0VZLnJpZ2h0OlxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5hdGt1cCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5hdGtkb3duID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmF0a2xlZnQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuYXRrcmlnaHQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uS2V5UmVsZWFzZWQ6IGZ1bmN0aW9uIG9uS2V5UmVsZWFzZWQoa2V5Q29kZSwgZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGtleUNvZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBjYy5LRVkudzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYubW92ZXVwID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBjYy5LRVkuczpcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYubW92ZWRvd24gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIGNjLktFWS5hOlxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5tb3ZlbGVmdCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgY2MuS0VZLmQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLm1vdmVyaWdodCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgY2MuS0VZLnVwOlxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5hdGt1cCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgY2MuS0VZLmRvd246XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmF0a2Rvd24gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIGNjLktFWS5sZWZ0OlxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5hdGtsZWZ0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBjYy5LRVkucmlnaHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmF0a3JpZ2h0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHNlbGYubm9kZSk7XG4gICAgfSxcblxuICAgIG91dE9mVGhlV2FsbDogZnVuY3Rpb24gb3V0T2ZUaGVXYWxsKCkge1xuICAgICAgICBpZiAodGhpcy5ub2RlLnggPiA0ODAgfHwgdGhpcy5ub2RlLnggPCAtNDgwIHx8IHRoaXMubm9kZS55ID4gMzIwIHx8IHRoaXMubm9kZS55IDwgLTMyMCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0sXG5cbiAgICBjaGVja0F0a0Nvb2xkb3duOiBmdW5jdGlvbiBjaGVja0F0a0Nvb2xkb3duKCkge1xuICAgICAgICBpZiAodGhpcy5hdGtjb3VudCA+PSB0aGlzLmF0a2Nvb2xkb3duKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSxcblxuICAgIGF0dGFjazogZnVuY3Rpb24gYXR0YWNrKGEpIHtcbiAgICAgICAgaWYgKHRoaXMuY2hlY2tBdGtDb29sZG93bigpKSB7XG4gICAgICAgICAgICB2YXIgbmV3YnVsbGV0ID0gY2MuaW5zdGFudGlhdGUodGhpcy5idWxsZXRQcmVmYWIpO1xuICAgICAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKG5ld2J1bGxldCk7XG4gICAgICAgICAgICBuZXdidWxsZXQuc2V0UG9zaXRpb24oMCwgMCk7XG4gICAgICAgICAgICB2YXIgc2NyaXB0ID0gbmV3YnVsbGV0LmdldENvbXBvbmVudChcIkJ1bGxldFwiKTtcbiAgICAgICAgICAgIHNjcmlwdC5kaXJlY3Rpb24gPSBhO1xuICAgICAgICAgICAgc2NyaXB0LnNob290aW5ncmFuZ2UgPSB0aGlzLnNob290aW5ncmFuZ2U7XG4gICAgICAgICAgICB0aGlzLmF0a2NvdW50ID0gMDtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKGR0KSB7XG4gICAgICAgIHRoaXMuYXRrY291bnQrKztcbiAgICAgICAgaWYgKHRoaXMubW92ZWxlZnQpIHtcbiAgICAgICAgICAgIHRoaXMubm9kZS54IC09IHRoaXMuc3BlZWQ7XG4gICAgICAgICAgICBpZiAodGhpcy5vdXRPZlRoZVdhbGwoKSkge1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZS54ICs9IHRoaXMuc3BlZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMubW92ZXJpZ2h0KSB7XG4gICAgICAgICAgICB0aGlzLm5vZGUueCArPSB0aGlzLnNwZWVkO1xuICAgICAgICAgICAgaWYgKHRoaXMub3V0T2ZUaGVXYWxsKCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUueCAtPSB0aGlzLnNwZWVkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm1vdmVkb3duKSB7XG4gICAgICAgICAgICB0aGlzLm5vZGUueSAtPSB0aGlzLnNwZWVkO1xuICAgICAgICAgICAgaWYgKHRoaXMub3V0T2ZUaGVXYWxsKCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUueSArPSB0aGlzLnNwZWVkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm1vdmV1cCkge1xuICAgICAgICAgICAgdGhpcy5ub2RlLnkgKz0gdGhpcy5zcGVlZDtcbiAgICAgICAgICAgIGlmICh0aGlzLm91dE9mVGhlV2FsbCgpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnkgLT0gdGhpcy5zcGVlZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5hdGt1cCkge1xuICAgICAgICAgICAgdGhpcy5hdHRhY2soMCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuYXRrZG93bikge1xuICAgICAgICAgICAgdGhpcy5hdHRhY2soMSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuYXRrbGVmdCkge1xuICAgICAgICAgICAgdGhpcy5hdHRhY2soMik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuYXRrcmlnaHQpIHtcbiAgICAgICAgICAgIHRoaXMuYXR0YWNrKDMpO1xuICAgICAgICB9XG4gICAgfVxuXG59KTtcbi8qb25EZXN0cm95OmZ1bmN0aW9uKCl7XHJcbiAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ0dhbWVPdmVyJyk7XHJcbn0sKi9cblxuY2MuX1JGcG9wKCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5jYy5fUkZwdXNoKG1vZHVsZSwgJzM2NjI5cEF4ZHBCSTR0T3NIS2NlT1p1JywgJ1N0YXJ0R2FtZScpO1xuLy8gU2NyaXB0XFxTdGFydEdhbWUuanNcblxuY2MuQ2xhc3Moe1xuICAgICdleHRlbmRzJzogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICAvLyBmb286IHtcbiAgICAgICAgLy8gICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgLy8gICAgdXJsOiBjYy5UZXh0dXJlMkQsICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0eXBlb2YgZGVmYXVsdFxuICAgICAgICAvLyAgICBzZXJpYWxpemFibGU6IHRydWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcbiAgICAgICAgLy8gICAgdmlzaWJsZTogdHJ1ZSwgICAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXG4gICAgICAgIC8vICAgIGRpc3BsYXlOYW1lOiAnRm9vJywgLy8gb3B0aW9uYWxcbiAgICAgICAgLy8gICAgcmVhZG9ubHk6IGZhbHNlLCAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyBmYWxzZVxuICAgICAgICAvLyB9LFxuICAgICAgICAvLyAuLi5cbiAgICB9LFxuXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXG4gICAgb25Mb2FkOiBmdW5jdGlvbiBvbkxvYWQoKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgY2MuZXZlbnRNYW5hZ2VyLmFkZExpc3RlbmVyKHtcbiAgICAgICAgICAgIGV2ZW50OiBjYy5FdmVudExpc3RlbmVyLktFWUJPQVJELFxuICAgICAgICAgICAgb25LZXlQcmVzc2VkOiBmdW5jdGlvbiBvbktleVByZXNzZWQoa2V5Q29kZSwgZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGtleUNvZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBjYy5LRVkuczpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnQ2hvb3NlRGlmZmN1bHR5Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBjYy5LRVkubDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgc2VsZi5ub2RlKTtcbiAgICB9LFxuXG4gICAgU3RhcnRHYW1lOiBmdW5jdGlvbiBTdGFydEdhbWUoKSB7fVxuICAgIC8vY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdNYWlubG9vcCcpO1xuXG4gICAgLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lLCB1bmNvbW1lbnQgdGhpcyBmdW5jdGlvbiB0byBhY3RpdmF0ZSB1cGRhdGUgY2FsbGJhY2tcbiAgICAvLyB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xuXG4gICAgLy8gfSxcbn0pO1xuXG5jYy5fUkZwb3AoKTsiXX0=
