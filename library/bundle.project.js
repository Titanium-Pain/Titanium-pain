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
        cc.director.loadScene('Story');
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
},{}],"AnimStory":[function(require,module,exports){
"use strict";
cc._RFpush(module, '27b06SMm0ZMGoPtP+dIYwdU', 'AnimStory');
// Script\AnimStory.js

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
        anim.play('5');
        var self = this;
        cc.eventManager.addListener({
            event: cc.EventListener.KEYBOARD,
            onKeyPressed: function onKeyPressed(keyCode, event) {
                switch (keyCode) {
                    case cc.KEY.s:
                        cc.director.loadScene('Title');
                        break;
                }
            }
        }, self.node);
    },

    // called every frame, uncomment this function to activate update callback
    onStoryFinished: function onStoryFinished() {
        cc.director.loadScene('Title');
    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
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
    },

    chooseInsane: function chooseInsane() {
        window.Global.diffculty = 3;
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
        cc.director.loadScene('ChooseDiffculty');
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
        DetectRadius: 1200,
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
        window.Global.score++;
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
            this.speed *= 0.5;
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
},{}],"Finish":[function(require,module,exports){
"use strict";
cc._RFpush(module, 'bda5fz1uapHlYOVKn+euGqr', 'Finish');
// Script\Finish.js

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
        scoreDisplay: {
            'default': null,
            type: cc.Label
        },
        playsound: {
            'default': null,
            url: cc.AudioClip
        }
    },

    // use this for initialization
    onLoad: function onLoad() {
        cc.audioEngine.playMusic(this.playsound);
        var self = this;
        this.setScoreLabel();
        cc.eventManager.addListener({
            event: cc.EventListener.KEYBOARD,
            onKeyPressed: function onKeyPressed(keyCode, event) {
                switch (keyCode) {
                    case cc.KEY.r:
                        cc.director.loadScene('Mainloop');
                        break;
                    case cc.KEY.c:
                        cc.director.loadScene("ChooseDiffculty");
                        break;
                }
            }
        }, self.node);
    },

    setScoreLabel: function setScoreLabel() {
        var diff = '';
        switch (window.Global.diffculty) {
            case 0:
                diff = 'Easy';
                break;
            case 1:
                diff = 'Normal';
                break;
            case 2:
                diff = 'Hard';
                break;
            case 3:
                diff = 'Lunatic';
                break;
        }

        this.scoreDisplay.string = "You Killed " + '\n' + window.Global.score.toString() + '\n' + "Zombies" + '\n' + 'Under' + '\n' + diff + '\n' + 'Diffculty';
    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});

cc._RFpop();
},{}],"Global":[function(require,module,exports){
"use strict";
cc._RFpush(module, '8e5a0P2rJJBLrwrW4wVzLlE', 'Global');
// Script\Global.js

window.Global = {
    diffculty: 0,
    score: 0
};

cc._RFpop();
},{}],"LabelAnimation":[function(require,module,exports){
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
},{}],"MainLoop":[function(require,module,exports){
"use strict";
cc._RFpush(module, 'c20f4tSvydGS5qRzvn5G9z9', 'MainLoop');
// Script\MainLoop.js

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
        enemyCount: 0,
        spawnNumber: 0,
        wave: 0,
        clearwave: 5,
        enemyPrefab: {
            'default': null,
            type: cc.Prefab
        },
        player: {
            'default': null,
            type: cc.Node
        },
        bgm: {
            'default': null,
            url: cc.AudioClip
        },
        waveDisplay: {
            'default': null,
            type: cc.Label
        }
    },

    // use this for initialization
    onLoad: function onLoad() {
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
        this.enemyCount = 0;
        this.wave = 0;
        window.Global.score = 0;
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
            case 3:
                this.spawnNumber = 50;
                break;
        }
        cc.audioEngine.playMusic(this.bgm);
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
        while ((randx - playerx) * (randx - playerx) + (randy - playery) * (randy - playery) < 45000) {
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
            this.waveDisplay.string = 'Wave:' + this.wave.toString();
        }
    }
});

cc._RFpop();
},{}],"MusicScript":[function(require,module,exports){
"use strict";
cc._RFpush(module, '0fd33A665BNhpcv6Ce/8D+Q', 'MusicScript');
// Script\MusicScript.js

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
        bgm: {
            "default": null,
            url: cc.AudioClip
        }
    },

    // use this for initialization
    onLoad: function onLoad() {
        cc.audioEngine.playMusic(this.bgm, true);
    }

});
// called every frame, uncomment this function to activate update callback
// update: function (dt) {

// },

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
        },
        attacksound: {
            "default": null,
            url: cc.AudioClip
        },
        bgm: {
            "default": null,
            url: cc.AudioClip
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

    playShootSound: function playShootSound() {
        cc.audioEngine.playEffect(this.attacksound, false);
        cc.audioEngine.setEffectsVolume(0.3);
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
                    case cc.KEY.escape:
                        cc.audioEngine.playMusic(this.bgm, true);
                        cc.director.loadScene('Title');
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
            this.node.setRotation(90 * a);
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
            this.attack(2);
        }
        if (this.atkleft) {
            this.attack(3);
        }
        if (this.atkright) {
            this.attack(1);
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

cc._RFpop();
},{}]},{},["MusicScript","ChooseMap","AnimStory","StartGame","AnimOp2","LabelAnimation","AnimOp","ChooseDiffculty","EnemyScript","Global","Finish","MainLoop","Bullet","GameOver","Player"])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6L1VzZXJzL0VkX1N0cmlja2xhbmQvQXBwRGF0YS9Mb2NhbC9Db2Nvc0NyZWF0b3IvYXBwLTEuMS4wL3Jlc291cmNlcy9hcHAuYXNhci9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiYXNzZXRzL1NjcmlwdC9BbmltT3AyLmpzIiwiYXNzZXRzL1NjcmlwdC9BbmltT3AuanMiLCJhc3NldHMvU2NyaXB0L0FuaW1TdG9yeS5qcyIsImFzc2V0cy9TY3JpcHQvQnVsbGV0LmpzIiwiYXNzZXRzL1NjcmlwdC9DaG9vc2VEaWZmY3VsdHkuanMiLCJhc3NldHMvU2NyaXB0L0Nob29zZU1hcC5qcyIsImFzc2V0cy9TY3JpcHQvRW5lbXlTY3JpcHQuanMiLCJhc3NldHMvU2NyaXB0L0ZpbmlzaC5qcyIsImFzc2V0cy9TY3JpcHQvR2FtZU92ZXIuanMiLCJhc3NldHMvU2NyaXB0L0dsb2JhbC5qcyIsImFzc2V0cy9TY3JpcHQvTGFiZWxBbmltYXRpb24uanMiLCJhc3NldHMvU2NyaXB0L01haW5Mb29wLmpzIiwiYXNzZXRzL1NjcmlwdC9NdXNpY1NjcmlwdC5qcyIsImFzc2V0cy9TY3JpcHQvUGxheWVyLmpzIiwiYXNzZXRzL1NjcmlwdC9TdGFydEdhbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0TkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiXCJ1c2Ugc3RyaWN0XCI7XG5jYy5fUkZwdXNoKG1vZHVsZSwgJzQzZTMxWXFVVVpNRVpvSENzRmYzb01FJywgJ0FuaW1PcDInKTtcbi8vIFNjcmlwdFxcQW5pbU9wMi5qc1xuXG5jYy5DbGFzcyh7XG4gICAgJ2V4dGVuZHMnOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIC8vIGZvbzoge1xuICAgICAgICAvLyAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAvLyAgICB1cmw6IGNjLlRleHR1cmUyRCwgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XG4gICAgICAgIC8vICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxuICAgICAgICAvLyAgICB2aXNpYmxlOiB0cnVlLCAgICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcbiAgICAgICAgLy8gICAgZGlzcGxheU5hbWU6ICdGb28nLCAvLyBvcHRpb25hbFxuICAgICAgICAvLyAgICByZWFkb25seTogZmFsc2UsICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIGZhbHNlXG4gICAgICAgIC8vIH0sXG4gICAgICAgIC8vIC4uLlxuICAgIH0sXG5cbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uIG9uTG9hZCgpIHtcbiAgICAgICAgdmFyIGFuaW0gPSB0aGlzLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pO1xuICAgICAgICBhbmltLnBsYXkoJzInKTtcbiAgICB9LFxuXG4gICAgLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lLCB1bmNvbW1lbnQgdGhpcyBmdW5jdGlvbiB0byBhY3RpdmF0ZSB1cGRhdGUgY2FsbGJhY2tcbiAgICBvbk9wMkZpbmlzaGVkOiBmdW5jdGlvbiBvbk9wMkZpbmlzaGVkKCkge1xuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ1N0b3J5Jyk7XG4gICAgfVxuXG4gICAgLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lLCB1bmNvbW1lbnQgdGhpcyBmdW5jdGlvbiB0byBhY3RpdmF0ZSB1cGRhdGUgY2FsbGJhY2tcbiAgICAvLyB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xuXG4gICAgLy8gfSxcbn0pO1xuXG5jYy5fUkZwb3AoKTsiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnNGUzYmFWME54cEpONDk5ak9KYUZ1aEknLCAnQW5pbU9wJyk7XG4vLyBTY3JpcHRcXEFuaW1PcC5qc1xuXG5jYy5DbGFzcyh7XG4gICAgJ2V4dGVuZHMnOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIC8vIGZvbzoge1xuICAgICAgICAvLyAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAvLyAgICB1cmw6IGNjLlRleHR1cmUyRCwgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XG4gICAgICAgIC8vICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxuICAgICAgICAvLyAgICB2aXNpYmxlOiB0cnVlLCAgICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcbiAgICAgICAgLy8gICAgZGlzcGxheU5hbWU6ICdGb28nLCAvLyBvcHRpb25hbFxuICAgICAgICAvLyAgICByZWFkb25seTogZmFsc2UsICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIGZhbHNlXG4gICAgICAgIC8vIH0sXG4gICAgICAgIC8vIC4uLlxuICAgIH0sXG5cbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uIG9uTG9hZCgpIHtcbiAgICAgICAgdmFyIGFuaW0gPSB0aGlzLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pO1xuICAgICAgICBhbmltLnBsYXkoJzEnKTtcbiAgICB9LFxuXG4gICAgLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lLCB1bmNvbW1lbnQgdGhpcyBmdW5jdGlvbiB0byBhY3RpdmF0ZSB1cGRhdGUgY2FsbGJhY2tcbiAgICBvbk9wRmluaXNoOiBmdW5jdGlvbiBvbk9wRmluaXNoKCkge1xuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ29wMicpO1xuICAgIH1cbn0pO1xuXG5jYy5fUkZwb3AoKTsiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnMjdiMDZTTW0wWk1Hb1B0UCtkSVl3ZFUnLCAnQW5pbVN0b3J5Jyk7XG4vLyBTY3JpcHRcXEFuaW1TdG9yeS5qc1xuXG5jYy5DbGFzcyh7XG4gICAgJ2V4dGVuZHMnOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIC8vIGZvbzoge1xuICAgICAgICAvLyAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAvLyAgICB1cmw6IGNjLlRleHR1cmUyRCwgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XG4gICAgICAgIC8vICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxuICAgICAgICAvLyAgICB2aXNpYmxlOiB0cnVlLCAgICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcbiAgICAgICAgLy8gICAgZGlzcGxheU5hbWU6ICdGb28nLCAvLyBvcHRpb25hbFxuICAgICAgICAvLyAgICByZWFkb25seTogZmFsc2UsICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIGZhbHNlXG4gICAgICAgIC8vIH0sXG4gICAgICAgIC8vIC4uLlxuICAgIH0sXG5cbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uIG9uTG9hZCgpIHtcbiAgICAgICAgdmFyIGFuaW0gPSB0aGlzLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pO1xuICAgICAgICBhbmltLnBsYXkoJzUnKTtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICBjYy5ldmVudE1hbmFnZXIuYWRkTGlzdGVuZXIoe1xuICAgICAgICAgICAgZXZlbnQ6IGNjLkV2ZW50TGlzdGVuZXIuS0VZQk9BUkQsXG4gICAgICAgICAgICBvbktleVByZXNzZWQ6IGZ1bmN0aW9uIG9uS2V5UHJlc3NlZChrZXlDb2RlLCBldmVudCkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoa2V5Q29kZSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIGNjLktFWS5zOlxuICAgICAgICAgICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdUaXRsZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LCBzZWxmLm5vZGUpO1xuICAgIH0sXG5cbiAgICAvLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xuICAgIG9uU3RvcnlGaW5pc2hlZDogZnVuY3Rpb24gb25TdG9yeUZpbmlzaGVkKCkge1xuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ1RpdGxlJyk7XG4gICAgfVxuXG4gICAgLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lLCB1bmNvbW1lbnQgdGhpcyBmdW5jdGlvbiB0byBhY3RpdmF0ZSB1cGRhdGUgY2FsbGJhY2tcbiAgICAvLyB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xuXG4gICAgLy8gfSxcbn0pO1xuXG5jYy5fUkZwb3AoKTsiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnYzljMjJNSmVIbEZzSWNoYnZNN0R1R0snLCAnQnVsbGV0Jyk7XG4vLyBTY3JpcHRcXEJ1bGxldC5qc1xuXG5jYy5DbGFzcyh7XG4gICAgXCJleHRlbmRzXCI6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLy8gZm9vOiB7XG4gICAgICAgIC8vICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgIC8vICAgIHVybDogY2MuVGV4dHVyZTJELCAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcbiAgICAgICAgLy8gICAgc2VyaWFsaXphYmxlOiB0cnVlLCAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXG4gICAgICAgIC8vICAgIHZpc2libGU6IHRydWUsICAgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxuICAgICAgICAvLyAgICBkaXNwbGF5TmFtZTogJ0ZvbycsIC8vIG9wdGlvbmFsXG4gICAgICAgIC8vICAgIHJlYWRvbmx5OiBmYWxzZSwgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgZmFsc2VcbiAgICAgICAgLy8gfSxcbiAgICAgICAgLy8gLi4uXG4gICAgICAgIHNwZWVkOiAxMCxcbiAgICAgICAgZGlyZWN0aW9uOiAwLFxuICAgICAgICBzaG9vdGluZ3JhbmdlOiAyNTBcbiAgICB9LFxuXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXG4gICAgb25Mb2FkOiBmdW5jdGlvbiBvbkxvYWQoKSB7XG4gICAgICAgIHRoaXMubm9kZS5wYXJlbnQuZ2V0Q29tcG9uZW50KFwiUGxheWVyXCIpLnBsYXlTaG9vdFNvdW5kKCk7XG4gICAgfSxcblxuICAgIG91dE9mVGhlV2FsbDogZnVuY3Rpb24gb3V0T2ZUaGVXYWxsKCkge1xuICAgICAgICBpZiAodGhpcy5ub2RlLnggPiB0aGlzLnNob290aW5ncmFuZ2UgfHwgdGhpcy5ub2RlLnggPCAtdGhpcy5zaG9vdGluZ3JhbmdlIHx8IHRoaXMubm9kZS55ID4gdGhpcy5zaG9vdGluZ3JhbmdlIHx8IHRoaXMubm9kZS55IDwgLXRoaXMuc2hvb3RpbmdyYW5nZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0sXG5cbiAgICAvLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKGR0KSB7XG4gICAgICAgIC8qc3dpdGNoKHRoaXMuZGlyZWN0aW9uKXtcclxuICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnkrPXRoaXMuc3BlZWQ7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLngrPXRoaXMuc3BlZWQ7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnktPXRoaXMuc3BlZWQ7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLngtPXRoaXMuc3BlZWQ7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9Ki9cbiAgICAgICAgdGhpcy5ub2RlLnkgKz0gdGhpcy5zcGVlZDtcbiAgICAgICAgaWYgKHRoaXMub3V0T2ZUaGVXYWxsKCkpIHtcbiAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XG4gICAgICAgIH1cbiAgICB9XG59KTtcblxuY2MuX1JGcG9wKCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5jYy5fUkZwdXNoKG1vZHVsZSwgJzYzYWUwMTBRNGhCSXB5cEVRZnVXTStQJywgJ0Nob29zZURpZmZjdWx0eScpO1xuLy8gU2NyaXB0XFxDaG9vc2VEaWZmY3VsdHkuanNcblxuY2MuQ2xhc3Moe1xuICAgIFwiZXh0ZW5kc1wiOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIC8vIGZvbzoge1xuICAgICAgICAvLyAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAvLyAgICB1cmw6IGNjLlRleHR1cmUyRCwgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XG4gICAgICAgIC8vICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxuICAgICAgICAvLyAgICB2aXNpYmxlOiB0cnVlLCAgICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcbiAgICAgICAgLy8gICAgZGlzcGxheU5hbWU6ICdGb28nLCAvLyBvcHRpb25hbFxuICAgICAgICAvLyAgICByZWFkb25seTogZmFsc2UsICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIGZhbHNlXG4gICAgICAgIC8vIH0sXG4gICAgICAgIC8vIC4uLlxuICAgICAgICByZWZlcmVuY2U6IHtcbiAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gb25Mb2FkKCkge30sXG5cbiAgICAvLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xuICAgIC8vIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XG5cbiAgICAvLyB9LFxuXG4gICAgY2hvb3NlRWFzeTogZnVuY3Rpb24gY2hvb3NlRWFzeSgpIHtcbiAgICAgICAgd2luZG93Lkdsb2JhbC5kaWZmY3VsdHkgPSAwO1xuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJNYWlubG9vcFwiKTtcbiAgICB9LFxuXG4gICAgY2hvb3NlTm9ybWFsOiBmdW5jdGlvbiBjaG9vc2VOb3JtYWwoKSB7XG4gICAgICAgIHdpbmRvdy5HbG9iYWwuZGlmZmN1bHR5ID0gMTtcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiTWFpbmxvb3BcIik7XG4gICAgfSxcblxuICAgIGNob29zZUhhcmQ6IGZ1bmN0aW9uIGNob29zZUhhcmQoKSB7XG4gICAgICAgIHdpbmRvdy5HbG9iYWwuZGlmZmN1bHR5ID0gMjtcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiTWFpbmxvb3BcIik7XG4gICAgfSxcblxuICAgIGNob29zZUluc2FuZTogZnVuY3Rpb24gY2hvb3NlSW5zYW5lKCkge1xuICAgICAgICB3aW5kb3cuR2xvYmFsLmRpZmZjdWx0eSA9IDM7XG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIk1haW5sb29wXCIpO1xuICAgIH1cbn0pO1xuXG5jYy5fUkZwb3AoKTsiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnMTg1Mzk1Sk5WOUVXNWU4c1cwWTdPLzAnLCAnQ2hvb3NlTWFwJyk7XG4vLyBTY3JpcHRcXENob29zZU1hcC5qc1xuXG5jYy5DbGFzcyh7XG4gICAgJ2V4dGVuZHMnOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIC8vIGZvbzoge1xuICAgICAgICAvLyAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAvLyAgICB1cmw6IGNjLlRleHR1cmUyRCwgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XG4gICAgICAgIC8vICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxuICAgICAgICAvLyAgICB2aXNpYmxlOiB0cnVlLCAgICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcbiAgICAgICAgLy8gICAgZGlzcGxheU5hbWU6ICdGb28nLCAvLyBvcHRpb25hbFxuICAgICAgICAvLyAgICByZWFkb25seTogZmFsc2UsICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIGZhbHNlXG4gICAgICAgIC8vIH0sXG4gICAgICAgIC8vIC4uLlxuICAgIH0sXG5cbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uIG9uTG9hZCgpIHt9LFxuXG4gICAgLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lLCB1bmNvbW1lbnQgdGhpcyBmdW5jdGlvbiB0byBhY3RpdmF0ZSB1cGRhdGUgY2FsbGJhY2tcbiAgICAvLyB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xuICAgIC8vIH0sXG5cbiAgICBjaG9vc2VNYXAxOiBmdW5jdGlvbiBjaG9vc2VNYXAxKCkge1xuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ0Nob29zZURpZmZjdWx0eScpO1xuICAgIH1cbn0pO1xuXG5jYy5fUkZwb3AoKTsiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnNjY4Y2E0SDRnNUtwSnZsckR3Tnk0NU0nLCAnRW5lbXlTY3JpcHQnKTtcbi8vIFNjcmlwdFxcRW5lbXlTY3JpcHQuanNcblxuY2MuQ2xhc3Moe1xuICAgIFwiZXh0ZW5kc1wiOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIC8vIGZvbzoge1xuICAgICAgICAvLyAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAvLyAgICB1cmw6IGNjLlRleHR1cmUyRCwgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XG4gICAgICAgIC8vICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxuICAgICAgICAvLyAgICB2aXNpYmxlOiB0cnVlLCAgICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcbiAgICAgICAgLy8gICAgZGlzcGxheU5hbWU6ICdGb28nLCAvLyBvcHRpb25hbFxuICAgICAgICAvLyAgICByZWFkb25seTogZmFsc2UsICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIGZhbHNlXG4gICAgICAgIC8vIH0sXG4gICAgICAgIC8vIC4uLlxuICAgICAgICBEZXRlY3RSYWRpdXM6IDEyMDAsXG4gICAgICAgIHBldHJvbGNvb2xkb3duOiAxLFxuICAgICAgICBzcGVlZDogMCxcbiAgICAgICAgY291bnQ6IDAsXG4gICAgICAgIGRldGVjdGVkOiBmYWxzZVxuICAgIH0sXG5cbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uIG9uTG9hZCgpIHtcbiAgICAgICAgdGhpcy5jb3VudCA9IDA7XG4gICAgICAgIHRoaXMuZGV0ZWN0ZWQgPSBmYWxzZTtcbiAgICB9LFxuXG4gICAgb3V0T2ZUaGVXYWxsOiBmdW5jdGlvbiBvdXRPZlRoZVdhbGwoKSB7XG4gICAgICAgIGlmICh0aGlzLm5vZGUueCA+IDQ4MCB8fCB0aGlzLm5vZGUueCA8IC00ODAgfHwgdGhpcy5ub2RlLnkgPiAzMjAgfHwgdGhpcy5ub2RlLnkgPCAtMzIwKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSxcblxuICAgIG9uQ29sbGlzaW9uRW50ZXI6IGZ1bmN0aW9uIG9uQ29sbGlzaW9uRW50ZXIob3RoZXIsIHNlbGYpIHtcbiAgICAgICAgLy90aGlzLm5vZGUucGFyZW50LmdldENvbXBvbmVudChcIk1haW5Mb29wXCIpLmVuZW15Q291bnQtLTtcbiAgICAgICAgdGhpcy5nYW1lLmVuZW15Q291bnQtLTtcbiAgICAgICAgd2luZG93Lkdsb2JhbC5zY29yZSsrO1xuICAgICAgICBzZWxmLm5vZGUuZGVzdHJveSgpO1xuICAgICAgICBpZiAob3RoZXIubm9kZS5ncm91cCA9PSBcIlBsYXllclwiKSB7XG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJHYW1lT3ZlclwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG90aGVyLm5vZGUuZGVzdHJveSgpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIG9uRGVzdHJveTogZnVuY3Rpb24gb25EZXN0cm95KCkge30sXG5cbiAgICBnZXRQbGF5ZXJEaXN0YW5jZTogZnVuY3Rpb24gZ2V0UGxheWVyRGlzdGFuY2UoKSB7XG4gICAgICAgIHZhciBwbGF5ZXJwb3N4ID0gdGhpcy5nYW1lLnBsYXllci54O1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwicGxheWVycG9zeFwiK3BsYXllcnBvc3gpO1xuICAgICAgICB2YXIgcGxheWVycG9zeSA9IHRoaXMuZ2FtZS5wbGF5ZXIueTtcbiAgICAgICAgdmFyIGRpc3QgPSBjYy5wRGlzdGFuY2UodGhpcy5ub2RlLnBvc2l0aW9uLCBjYy5wKHBsYXllcnBvc3gsIHBsYXllcnBvc3kpKTtcbiAgICAgICAgcmV0dXJuIGRpc3Q7XG4gICAgfSxcblxuICAgIG1vdmVUb3dhcmRQbGF5ZXI6IGZ1bmN0aW9uIG1vdmVUb3dhcmRQbGF5ZXIoKSB7XG4gICAgICAgIHZhciBwbGF5ZXJ4ID0gdGhpcy5nYW1lLnBsYXllci54O1xuICAgICAgICB2YXIgcGxheWVyeSA9IHRoaXMuZ2FtZS5wbGF5ZXIueTtcbiAgICAgICAgaWYgKHBsYXllcnggPj0gdGhpcy5ub2RlLngpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm5vZGUueCArIHRoaXMuc3BlZWQgPj0gcGxheWVyeCkge1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZS54ID0gcGxheWVyeDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnggKz0gdGhpcy5zcGVlZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm5vZGUueCAtIHRoaXMuc3BlZWQgPCBwbGF5ZXJ4KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnggPSBwbGF5ZXJ4O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUueCAtPSB0aGlzLnNwZWVkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChwbGF5ZXJ5ID49IHRoaXMubm9kZS55KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5ub2RlLnkgKyB0aGlzLnNwZWVkID49IHBsYXllcnkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUueSA9IHBsYXllcnk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZS55ICs9IHRoaXMuc3BlZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy5ub2RlLnkgLSB0aGlzLnNwZWVkIDwgcGxheWVyeSkge1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZS55ID0gcGxheWVyeTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnkgLT0gdGhpcy5zcGVlZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKGR0KSB7XG4gICAgICAgIC8vY29uc29sZS5sb2codGhpcy5kZXRlY3RlZCk7XG4gICAgICAgIC8qdmFyIHJhbmQ9TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKigzKzEpKTtcclxuICAgICAgICBzd2l0Y2gocmFuZCl7XHJcbiAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS54Kz10aGlzLnNwZWVkO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS54LT10aGlzLnNwZWVkO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS55Kz10aGlzLnNwZWVkO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS55LT10aGlzLnNwZWVkO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfSovXG4gICAgICAgIGlmICh0aGlzLmRldGVjdGVkID09PSB0cnVlKSB7XG4gICAgICAgICAgICB0aGlzLm1vdmVUb3dhcmRQbGF5ZXIoKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmdldFBsYXllckRpc3RhbmNlKCkgPCB0aGlzLkRldGVjdFJhZGl1cykge1xuICAgICAgICAgICAgdGhpcy5zcGVlZCAqPSAwLjU7XG4gICAgICAgICAgICB0aGlzLm1vdmVUb3dhcmRQbGF5ZXIoKTtcbiAgICAgICAgICAgIHRoaXMuZGV0ZWN0ZWQgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jb3VudCsrO1xuICAgICAgICAgICAgaWYgKHRoaXMuY291bnQgPj0gdGhpcy5wZXRyb2xjb29sZG93bikge1xuICAgICAgICAgICAgICAgIHZhciByYW5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDI0ICsgMSkpO1xuICAgICAgICAgICAgICAgIHN3aXRjaCAocmFuZCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUueCArPSB0aGlzLnNwZWVkO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMub3V0T2ZUaGVXYWxsKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUueCAtPSB0aGlzLnNwZWVkO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS54IC09IHRoaXMuc3BlZWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5vdXRPZlRoZVdhbGwoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS54ICs9IHRoaXMuc3BlZWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLnkgKz0gdGhpcy5zcGVlZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm91dE9mVGhlV2FsbCgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLnkgLT0gdGhpcy5zcGVlZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUueSAtPSB0aGlzLnNwZWVkO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMub3V0T2ZUaGVXYWxsKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUueSArPSB0aGlzLnNwZWVkO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS54IC09IHRoaXMuc3BlZWQgKiAwLjg7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUueSArPSB0aGlzLnNwZWVkICogMC42O1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMub3V0T2ZUaGVXYWxsKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUueCArPSB0aGlzLnNwZWVkICogMC44O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS55IC09IHRoaXMuc3BlZWQgKiAwLjY7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLnggLT0gdGhpcy5zcGVlZCAqIDAuNjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS55ICs9IHRoaXMuc3BlZWQgKiAwLjg7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5vdXRPZlRoZVdhbGwoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS54ICs9IHRoaXMuc3BlZWQgKiAwLjY7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLnkgLT0gdGhpcy5zcGVlZCAqIDAuODtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUueCArPSB0aGlzLnNwZWVkICogMC42O1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLnkgKz0gdGhpcy5zcGVlZCAqIDAuODtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm91dE9mVGhlV2FsbCgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLnggLT0gdGhpcy5zcGVlZCAqIDAuNjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUueSAtPSB0aGlzLnNwZWVkICogMC44O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgODpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS54IC09IHRoaXMuc3BlZWQgKiAwLjY7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUueSAtPSB0aGlzLnNwZWVkICogMC44O1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMub3V0T2ZUaGVXYWxsKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUueCArPSB0aGlzLnNwZWVkICogMC42O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS55ICs9IHRoaXMuc3BlZWQgKiAwLjg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA5OlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLnggLT0gdGhpcy5zcGVlZCAqIDAuODtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS55IC09IHRoaXMuc3BlZWQgKiAwLjY7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5vdXRPZlRoZVdhbGwoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS54ICs9IHRoaXMuc3BlZWQgKiAwLjg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLnkgKz0gdGhpcy5zcGVlZCAqIDAuNjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDEwOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLnggKz0gdGhpcy5zcGVlZCAqIDAuODtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS55ICs9IHRoaXMuc3BlZWQgKiAwLjY7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5vdXRPZlRoZVdhbGwoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS54IC09IHRoaXMuc3BlZWQgKiAwLjg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLnkgLT0gdGhpcy5zcGVlZCAqIDAuNjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDExOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLnggKz0gdGhpcy5zcGVlZCAqIDAuODtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS55IC09IHRoaXMuc3BlZWQgKiAwLjY7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5vdXRPZlRoZVdhbGwoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS54IC09IHRoaXMuc3BlZWQgKiAwLjg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLnkgKz0gdGhpcy5zcGVlZCAqIDAuNjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDEyOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLnggKz0gdGhpcy5zcGVlZCAqIDAuNjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS55IC09IHRoaXMuc3BlZWQgKiAwLjg7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5vdXRPZlRoZVdhbGwoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS54IC09IHRoaXMuc3BlZWQgKiAwLjY7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLnkgKz0gdGhpcy5zcGVlZCAqIDAuODtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmNvdW50ID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0pO1xuXG5jYy5fUkZwb3AoKTsiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnYmRhNWZ6MXVhcEhsWU9WS24rZXVHcXInLCAnRmluaXNoJyk7XG4vLyBTY3JpcHRcXEZpbmlzaC5qc1xuXG5jYy5DbGFzcyh7XG4gICAgXCJleHRlbmRzXCI6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLy8gZm9vOiB7XG4gICAgICAgIC8vICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgIC8vICAgIHVybDogY2MuVGV4dHVyZTJELCAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcbiAgICAgICAgLy8gICAgc2VyaWFsaXphYmxlOiB0cnVlLCAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXG4gICAgICAgIC8vICAgIHZpc2libGU6IHRydWUsICAgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxuICAgICAgICAvLyAgICBkaXNwbGF5TmFtZTogJ0ZvbycsIC8vIG9wdGlvbmFsXG4gICAgICAgIC8vICAgIHJlYWRvbmx5OiBmYWxzZSwgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgZmFsc2VcbiAgICAgICAgLy8gfSxcbiAgICAgICAgLy8gLi4uXG4gICAgfSxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gb25Mb2FkKCkge31cblxufSk7XG4vLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xuLy8gdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcblxuLy8gfSxcblxuY2MuX1JGcG9wKCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5jYy5fUkZwdXNoKG1vZHVsZSwgJ2QwNTY5YWRIZkpFeFo4bFhYR3B6TTRSJywgJ0dhbWVPdmVyJyk7XG4vLyBTY3JpcHRcXEdhbWVPdmVyLmpzXG5cbmNjLkNsYXNzKHtcbiAgICAnZXh0ZW5kcyc6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLy8gZm9vOiB7XG4gICAgICAgIC8vICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgIC8vICAgIHVybDogY2MuVGV4dHVyZTJELCAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcbiAgICAgICAgLy8gICAgc2VyaWFsaXphYmxlOiB0cnVlLCAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXG4gICAgICAgIC8vICAgIHZpc2libGU6IHRydWUsICAgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxuICAgICAgICAvLyAgICBkaXNwbGF5TmFtZTogJ0ZvbycsIC8vIG9wdGlvbmFsXG4gICAgICAgIC8vICAgIHJlYWRvbmx5OiBmYWxzZSwgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgZmFsc2VcbiAgICAgICAgLy8gfSxcbiAgICAgICAgLy8gLi4uXG4gICAgICAgIHNjb3JlRGlzcGxheToge1xuICAgICAgICAgICAgJ2RlZmF1bHQnOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcbiAgICAgICAgfSxcbiAgICAgICAgcGxheXNvdW5kOiB7XG4gICAgICAgICAgICAnZGVmYXVsdCc6IG51bGwsXG4gICAgICAgICAgICB1cmw6IGNjLkF1ZGlvQ2xpcFxuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gb25Mb2FkKCkge1xuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5TXVzaWModGhpcy5wbGF5c291bmQpO1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMuc2V0U2NvcmVMYWJlbCgpO1xuICAgICAgICBjYy5ldmVudE1hbmFnZXIuYWRkTGlzdGVuZXIoe1xuICAgICAgICAgICAgZXZlbnQ6IGNjLkV2ZW50TGlzdGVuZXIuS0VZQk9BUkQsXG4gICAgICAgICAgICBvbktleVByZXNzZWQ6IGZ1bmN0aW9uIG9uS2V5UHJlc3NlZChrZXlDb2RlLCBldmVudCkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoa2V5Q29kZSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIGNjLktFWS5yOlxuICAgICAgICAgICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdNYWlubG9vcCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgY2MuS0VZLmM6XG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJDaG9vc2VEaWZmY3VsdHlcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHNlbGYubm9kZSk7XG4gICAgfSxcblxuICAgIHNldFNjb3JlTGFiZWw6IGZ1bmN0aW9uIHNldFNjb3JlTGFiZWwoKSB7XG4gICAgICAgIHZhciBkaWZmID0gJyc7XG4gICAgICAgIHN3aXRjaCAod2luZG93Lkdsb2JhbC5kaWZmY3VsdHkpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBkaWZmID0gJ0Vhc3knO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIGRpZmYgPSAnTm9ybWFsJztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICBkaWZmID0gJ0hhcmQnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgIGRpZmYgPSAnTHVuYXRpYyc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNjb3JlRGlzcGxheS5zdHJpbmcgPSBcIllvdSBLaWxsZWQgXCIgKyAnXFxuJyArIHdpbmRvdy5HbG9iYWwuc2NvcmUudG9TdHJpbmcoKSArICdcXG4nICsgXCJab21iaWVzXCIgKyAnXFxuJyArICdVbmRlcicgKyAnXFxuJyArIGRpZmYgKyAnXFxuJyArICdEaWZmY3VsdHknO1xuICAgIH1cblxuICAgIC8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXG4gICAgLy8gdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcblxuICAgIC8vIH0sXG59KTtcblxuY2MuX1JGcG9wKCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5jYy5fUkZwdXNoKG1vZHVsZSwgJzhlNWEwUDJySkpCTHJ3clc0d1Z6TGxFJywgJ0dsb2JhbCcpO1xuLy8gU2NyaXB0XFxHbG9iYWwuanNcblxud2luZG93Lkdsb2JhbCA9IHtcbiAgICBkaWZmY3VsdHk6IDAsXG4gICAgc2NvcmU6IDBcbn07XG5cbmNjLl9SRnBvcCgpOyIsIlwidXNlIHN0cmljdFwiO1xuY2MuX1JGcHVzaChtb2R1bGUsICc0ZDc1M1doYTdsSkZZN2hsMFBwMmQxbCcsICdMYWJlbEFuaW1hdGlvbicpO1xuLy8gU2NyaXB0XFxMYWJlbEFuaW1hdGlvbi5qc1xuXG5jYy5DbGFzcyh7XG4gICAgJ2V4dGVuZHMnOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIC8vIGZvbzoge1xuICAgICAgICAvLyAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAvLyAgICB1cmw6IGNjLlRleHR1cmUyRCwgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XG4gICAgICAgIC8vICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxuICAgICAgICAvLyAgICB2aXNpYmxlOiB0cnVlLCAgICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcbiAgICAgICAgLy8gICAgZGlzcGxheU5hbWU6ICdGb28nLCAvLyBvcHRpb25hbFxuICAgICAgICAvLyAgICByZWFkb25seTogZmFsc2UsICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIGZhbHNlXG4gICAgICAgIC8vIH0sXG4gICAgICAgIC8vIC4uLlxuICAgIH0sXG5cbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uIG9uTG9hZCgpIHtcbiAgICAgICAgdmFyIGFuaW0gPSB0aGlzLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pO1xuICAgICAgICBhbmltLnBsYXkoJzYnKTtcbiAgICB9LFxuXG4gICAgLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lLCB1bmNvbW1lbnQgdGhpcyBmdW5jdGlvbiB0byBhY3RpdmF0ZSB1cGRhdGUgY2FsbGJhY2tcbiAgICBvbk9wMkZpbmlzaGVkOiBmdW5jdGlvbiBvbk9wMkZpbmlzaGVkKCkge1xuICAgICAgICB2YXIgYW5pbSA9IHRoaXMuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbik7XG4gICAgICAgIGFuaW0ucGxheSgnNicpO1xuICAgIH1cblxuICAgIC8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXG4gICAgLy8gdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcblxuICAgIC8vIH0sXG59KTtcblxuY2MuX1JGcG9wKCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5jYy5fUkZwdXNoKG1vZHVsZSwgJ2MyMGY0dFN2eWRHUzVxUnp2bjVHOXo5JywgJ01haW5Mb29wJyk7XG4vLyBTY3JpcHRcXE1haW5Mb29wLmpzXG5cbmNjLkNsYXNzKHtcbiAgICAnZXh0ZW5kcyc6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLy8gZm9vOiB7XG4gICAgICAgIC8vICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgIC8vICAgIHVybDogY2MuVGV4dHVyZTJELCAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcbiAgICAgICAgLy8gICAgc2VyaWFsaXphYmxlOiB0cnVlLCAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXG4gICAgICAgIC8vICAgIHZpc2libGU6IHRydWUsICAgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxuICAgICAgICAvLyAgICBkaXNwbGF5TmFtZTogJ0ZvbycsIC8vIG9wdGlvbmFsXG4gICAgICAgIC8vICAgIHJlYWRvbmx5OiBmYWxzZSwgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgZmFsc2VcbiAgICAgICAgLy8gfSxcbiAgICAgICAgLy8gLi4uXG4gICAgICAgIGVuZW15Q291bnQ6IDAsXG4gICAgICAgIHNwYXduTnVtYmVyOiAwLFxuICAgICAgICB3YXZlOiAwLFxuICAgICAgICBjbGVhcndhdmU6IDUsXG4gICAgICAgIGVuZW15UHJlZmFiOiB7XG4gICAgICAgICAgICAnZGVmYXVsdCc6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5QcmVmYWJcbiAgICAgICAgfSxcbiAgICAgICAgcGxheWVyOiB7XG4gICAgICAgICAgICAnZGVmYXVsdCc6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXG4gICAgICAgIH0sXG4gICAgICAgIGJnbToge1xuICAgICAgICAgICAgJ2RlZmF1bHQnOiBudWxsLFxuICAgICAgICAgICAgdXJsOiBjYy5BdWRpb0NsaXBcbiAgICAgICAgfSxcbiAgICAgICAgd2F2ZURpc3BsYXk6IHtcbiAgICAgICAgICAgICdkZWZhdWx0JzogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXG4gICAgb25Mb2FkOiBmdW5jdGlvbiBvbkxvYWQoKSB7XG4gICAgICAgIHZhciBtYW5hZ2VyID0gY2MuZGlyZWN0b3IuZ2V0Q29sbGlzaW9uTWFuYWdlcigpO1xuICAgICAgICBtYW5hZ2VyLmVuYWJsZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmVuZW15Q291bnQgPSAwO1xuICAgICAgICB0aGlzLndhdmUgPSAwO1xuICAgICAgICB3aW5kb3cuR2xvYmFsLnNjb3JlID0gMDtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhlbmVteUNvdW50KTtcbiAgICAgICAgdmFyIGRpZmZjdWx0eSA9IHdpbmRvdy5HbG9iYWwuZGlmZmN1bHR5O1xuICAgICAgICAvL2NvbnNvbGUubG9nKGNjLmdhbWUuaXNQZXJzaXN0Um9vdE5vZGUodGhpcy5wYXNzYXJnKSk7XG4gICAgICAgIC8vY29uc29sZS5sb2coXCJkaWZmY3VsdHlcIitkaWZmY3VsdHkpXG4gICAgICAgIHN3aXRjaCAoZGlmZmN1bHR5KSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgdGhpcy5zcGF3bk51bWJlciA9IDU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgdGhpcy5zcGF3bk51bWJlciA9IDE1O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIHRoaXMuc3Bhd25OdW1iZXIgPSAzNTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICB0aGlzLnNwYXduTnVtYmVyID0gNTA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheU11c2ljKHRoaXMuYmdtKTtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcIm9uTG9hZCBcIit0aGlzLnNwYXduTnVtYmVyKTtcbiAgICB9LFxuXG4gICAgcmFuZG9tUG9zaXRpb246IGZ1bmN0aW9uIHJhbmRvbVBvc2l0aW9uKCkge1xuICAgICAgICB2YXIgcGxheWVyeCA9IDA7XG4gICAgICAgIHZhciBwbGF5ZXJ5ID0gMDtcbiAgICAgICAgcGxheWVyeCA9IHRoaXMucGxheWVyLng7XG4gICAgICAgIHBsYXllcnkgPSB0aGlzLnBsYXllci55O1xuICAgICAgICB2YXIgcmFuZHggPSAwO1xuICAgICAgICB2YXIgcmFuZHkgPSAwO1xuICAgICAgICB2YXIgbWF4eCA9IHRoaXMubm9kZS53aWR0aCAvIDI7XG4gICAgICAgIHZhciBtYXh5ID0gdGhpcy5ub2RlLmhlaWdodCAvIDI7XG4gICAgICAgIHJhbmR4ID0gY2MucmFuZG9tTWludXMxVG8xKCkgKiBtYXh4O1xuICAgICAgICByYW5keSA9IGNjLnJhbmRvbU1pbnVzMVRvMSgpICogbWF4eTtcbiAgICAgICAgd2hpbGUgKChyYW5keCAtIHBsYXllcngpICogKHJhbmR4IC0gcGxheWVyeCkgKyAocmFuZHkgLSBwbGF5ZXJ5KSAqIChyYW5keSAtIHBsYXllcnkpIDwgNDUwMDApIHtcbiAgICAgICAgICAgIHJhbmR4ID0gY2MucmFuZG9tTWludXMxVG8xKCkgKiBtYXh4O1xuICAgICAgICAgICAgcmFuZHkgPSBjYy5yYW5kb21NaW51czFUbzEoKSAqIG1heHk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNjLnAocmFuZHgsIHJhbmR5KTtcbiAgICB9LFxuXG4gICAgc3Bhd25BbkVuZW15OiBmdW5jdGlvbiBzcGF3bkFuRW5lbXkoKSB7XG4gICAgICAgIHZhciBuZXdFbmVteSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuZW5lbXlQcmVmYWIpO1xuICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQobmV3RW5lbXkpO1xuICAgICAgICBuZXdFbmVteS5zZXRQb3NpdGlvbih0aGlzLnJhbmRvbVBvc2l0aW9uKCkpO1xuICAgICAgICBuZXdFbmVteS5nZXRDb21wb25lbnQoJ0VuZW15U2NyaXB0JykuZ2FtZSA9IHRoaXM7XG4gICAgICAgIHRoaXMuZW5lbXlDb3VudCsrO1xuICAgICAgICAvL2xvZyhcInNwYXduIGFuIGVuZW15IFwiK3RoaXMuZW5lbXlDb3VudCk7XG4gICAgfSxcblxuICAgIHNwYXduRW5lbXk6IGZ1bmN0aW9uIHNwYXduRW5lbXkoKSB7XG4gICAgICAgIC8vY29uc29sZS5sb2codGhpcy5zcGF3bk51bWJlcik7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zcGF3bk51bWJlcjsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLnNwYXduQW5FbmVteSgpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoZHQpIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLmVuZW15Q291bnQpO1xuICAgICAgICBpZiAodGhpcy5lbmVteUNvdW50IDw9IDApIHtcbiAgICAgICAgICAgIHRoaXMud2F2ZSsrO1xuICAgICAgICAgICAgaWYgKHRoaXMud2F2ZSA+IHRoaXMuY2xlYXJ3YXZlKSB7XG4gICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiRmluaXNoXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zcGF3bk51bWJlciArPSA1O1xuICAgICAgICAgICAgdGhpcy5zcGF3bkVuZW15KCk7XG4gICAgICAgICAgICB0aGlzLndhdmVEaXNwbGF5LnN0cmluZyA9ICdXYXZlOicgKyB0aGlzLndhdmUudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuXG5jYy5fUkZwb3AoKTsiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnMGZkMzNBNjY1Qk5ocGN2NkNlLzhEK1EnLCAnTXVzaWNTY3JpcHQnKTtcbi8vIFNjcmlwdFxcTXVzaWNTY3JpcHQuanNcblxuY2MuQ2xhc3Moe1xuICAgIFwiZXh0ZW5kc1wiOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIC8vIGZvbzoge1xuICAgICAgICAvLyAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAvLyAgICB1cmw6IGNjLlRleHR1cmUyRCwgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XG4gICAgICAgIC8vICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxuICAgICAgICAvLyAgICB2aXNpYmxlOiB0cnVlLCAgICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcbiAgICAgICAgLy8gICAgZGlzcGxheU5hbWU6ICdGb28nLCAvLyBvcHRpb25hbFxuICAgICAgICAvLyAgICByZWFkb25seTogZmFsc2UsICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIGZhbHNlXG4gICAgICAgIC8vIH0sXG4gICAgICAgIC8vIC4uLlxuICAgICAgICBiZ206IHtcbiAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBudWxsLFxuICAgICAgICAgICAgdXJsOiBjYy5BdWRpb0NsaXBcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uIG9uTG9hZCgpIHtcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheU11c2ljKHRoaXMuYmdtLCB0cnVlKTtcbiAgICB9XG5cbn0pO1xuLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lLCB1bmNvbW1lbnQgdGhpcyBmdW5jdGlvbiB0byBhY3RpdmF0ZSB1cGRhdGUgY2FsbGJhY2tcbi8vIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XG5cbi8vIH0sXG5cbmNjLl9SRnBvcCgpOyIsIlwidXNlIHN0cmljdFwiO1xuY2MuX1JGcHVzaChtb2R1bGUsICdlYjM1NDc2RjZCRXZwVHpWQ1kzVHczOScsICdQbGF5ZXInKTtcbi8vIFNjcmlwdFxcUGxheWVyLmpzXG5cbmNjLkNsYXNzKHtcbiAgICBcImV4dGVuZHNcIjogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICAvLyBmb286IHtcbiAgICAgICAgLy8gICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgLy8gICAgdXJsOiBjYy5UZXh0dXJlMkQsICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0eXBlb2YgZGVmYXVsdFxuICAgICAgICAvLyAgICBzZXJpYWxpemFibGU6IHRydWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcbiAgICAgICAgLy8gICAgdmlzaWJsZTogdHJ1ZSwgICAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXG4gICAgICAgIC8vICAgIGRpc3BsYXlOYW1lOiAnRm9vJywgLy8gb3B0aW9uYWxcbiAgICAgICAgLy8gICAgcmVhZG9ubHk6IGZhbHNlLCAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyBmYWxzZVxuICAgICAgICAvLyB9LFxuICAgICAgICAvLyAuLi5cbiAgICAgICAgc3BlZWQ6IDAsXG4gICAgICAgIGF0a2Nvb2xkb3duOiAxMCxcbiAgICAgICAgYXRrY291bnQ6IDAsXG4gICAgICAgIHNob290aW5ncmFuZ2U6IDIwMCxcblxuICAgICAgICAvKm1vdmV1cDpmYWxzZSxcclxuICAgICAgICBtb3ZlZG93bjpmYWxzZSxcclxuICAgICAgICBtb3ZlbGVmdDpmYWxzZSxcclxuICAgICAgICBtb3ZlcmlnaHQ6ZmFsc2UsKi9cbiAgICAgICAgYnVsbGV0UHJlZmFiOiB7XG4gICAgICAgICAgICBcImRlZmF1bHRcIjogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLlByZWZhYlxuICAgICAgICB9LFxuICAgICAgICBhdHRhY2tzb3VuZDoge1xuICAgICAgICAgICAgXCJkZWZhdWx0XCI6IG51bGwsXG4gICAgICAgICAgICB1cmw6IGNjLkF1ZGlvQ2xpcFxuICAgICAgICB9LFxuICAgICAgICBiZ206IHtcbiAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBudWxsLFxuICAgICAgICAgICAgdXJsOiBjYy5BdWRpb0NsaXBcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uIG9uTG9hZCgpIHtcbiAgICAgICAgdmFyIG1vdmV1cCA9IGZhbHNlO1xuICAgICAgICB2YXIgbW92ZWRvd24gPSBmYWxzZTtcbiAgICAgICAgdmFyIG1vdmVsZWZ0ID0gZmFsc2U7XG4gICAgICAgIHZhciBtb3ZlcmlnaHQgPSBmYWxzZTtcbiAgICAgICAgdmFyIGF0a3VwID0gZmFsc2U7XG4gICAgICAgIHZhciBhdGtkb3duID0gZmFsc2U7XG4gICAgICAgIHZhciBhdGtsZWZ0ID0gZmFsc2U7XG4gICAgICAgIHZhciBhdGtyaWdodCA9IGZhbHNlO1xuICAgICAgICB2YXIgYXR0YXRrZGlyID0gMDtcbiAgICAgICAgdGhpcy5hdGtjb3VudCA9IDA7XG4gICAgICAgIHRoaXMuc2V0SW5wdXRDb250cm9sKCk7XG4gICAgfSxcblxuICAgIHBsYXlTaG9vdFNvdW5kOiBmdW5jdGlvbiBwbGF5U2hvb3RTb3VuZCgpIHtcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmF0dGFja3NvdW5kLCBmYWxzZSk7XG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnNldEVmZmVjdHNWb2x1bWUoMC4zKTtcbiAgICB9LFxuXG4gICAgc2V0SW5wdXRDb250cm9sOiBmdW5jdGlvbiBzZXRJbnB1dENvbnRyb2woKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgY2MuZXZlbnRNYW5hZ2VyLmFkZExpc3RlbmVyKHtcbiAgICAgICAgICAgIGV2ZW50OiBjYy5FdmVudExpc3RlbmVyLktFWUJPQVJELFxuICAgICAgICAgICAgb25LZXlQcmVzc2VkOiBmdW5jdGlvbiBvbktleVByZXNzZWQoa2V5Q29kZSwgZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGtleUNvZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBjYy5LRVkudzpcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vc2VsZi5tb3ZlbGVmdCA9ZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL3NlbGYubW92ZXJpZ2h0PSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYubW92ZXVwID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vc2VsZi5tb3ZlZG93biA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgY2MuS0VZLnM6XG4gICAgICAgICAgICAgICAgICAgICAgICAvL3NlbGYubW92ZWxlZnQgPWZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9zZWxmLm1vdmVyaWdodD0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL3NlbGYubW92ZXVwID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLm1vdmVkb3duID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIGNjLktFWS5hOlxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5tb3ZlbGVmdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL3NlbGYubW92ZXJpZ2h0PSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vc2VsZi5tb3ZldXAgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vc2VsZi5tb3ZlZG93biA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgY2MuS0VZLmQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAvL3NlbGYubW92ZWxlZnQgPWZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5tb3ZlcmlnaHQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9zZWxmLm1vdmV1cCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9zZWxmLm1vdmVkb3duID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBjYy5LRVkudXA6XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmF0a3VwID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuYXRrZG93biA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5hdGtsZWZ0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmF0a3JpZ2h0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBjYy5LRVkuZG93bjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuYXRrdXAgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuYXRrZG93biA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmF0a2xlZnQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuYXRrcmlnaHQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIGNjLktFWS5sZWZ0OlxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5hdGt1cCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5hdGtkb3duID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmF0a2xlZnQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5hdGtyaWdodCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgY2MuS0VZLnJpZ2h0OlxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5hdGt1cCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5hdGtkb3duID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmF0a2xlZnQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuYXRrcmlnaHQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgY2MuS0VZLmVzY2FwZTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlNdXNpYyh0aGlzLmJnbSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ1RpdGxlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25LZXlSZWxlYXNlZDogZnVuY3Rpb24gb25LZXlSZWxlYXNlZChrZXlDb2RlLCBldmVudCkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoa2V5Q29kZSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIGNjLktFWS53OlxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5tb3ZldXAgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIGNjLktFWS5zOlxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5tb3ZlZG93biA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgY2MuS0VZLmE6XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLm1vdmVsZWZ0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBjYy5LRVkuZDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYubW92ZXJpZ2h0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBjYy5LRVkudXA6XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmF0a3VwID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBjYy5LRVkuZG93bjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuYXRrZG93biA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgY2MuS0VZLmxlZnQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmF0a2xlZnQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIGNjLktFWS5yaWdodDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuYXRrcmlnaHQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgc2VsZi5ub2RlKTtcbiAgICB9LFxuXG4gICAgb3V0T2ZUaGVXYWxsOiBmdW5jdGlvbiBvdXRPZlRoZVdhbGwoKSB7XG4gICAgICAgIGlmICh0aGlzLm5vZGUueCA+IDQ4MCB8fCB0aGlzLm5vZGUueCA8IC00ODAgfHwgdGhpcy5ub2RlLnkgPiAzMjAgfHwgdGhpcy5ub2RlLnkgPCAtMzIwKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSxcblxuICAgIGNoZWNrQXRrQ29vbGRvd246IGZ1bmN0aW9uIGNoZWNrQXRrQ29vbGRvd24oKSB7XG4gICAgICAgIGlmICh0aGlzLmF0a2NvdW50ID49IHRoaXMuYXRrY29vbGRvd24pIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9LFxuXG4gICAgYXR0YWNrOiBmdW5jdGlvbiBhdHRhY2soYSkge1xuICAgICAgICBpZiAodGhpcy5jaGVja0F0a0Nvb2xkb3duKCkpIHtcbiAgICAgICAgICAgIHZhciBuZXdidWxsZXQgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmJ1bGxldFByZWZhYik7XG4gICAgICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQobmV3YnVsbGV0KTtcbiAgICAgICAgICAgIG5ld2J1bGxldC5zZXRQb3NpdGlvbigwLCAwKTtcbiAgICAgICAgICAgIHZhciBzY3JpcHQgPSBuZXdidWxsZXQuZ2V0Q29tcG9uZW50KFwiQnVsbGV0XCIpO1xuICAgICAgICAgICAgc2NyaXB0LmRpcmVjdGlvbiA9IGE7XG4gICAgICAgICAgICBzY3JpcHQuc2hvb3RpbmdyYW5nZSA9IHRoaXMuc2hvb3RpbmdyYW5nZTtcbiAgICAgICAgICAgIHRoaXMubm9kZS5zZXRSb3RhdGlvbig5MCAqIGEpO1xuICAgICAgICAgICAgdGhpcy5hdGtjb3VudCA9IDA7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lLCB1bmNvbW1lbnQgdGhpcyBmdW5jdGlvbiB0byBhY3RpdmF0ZSB1cGRhdGUgY2FsbGJhY2tcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShkdCkge1xuICAgICAgICB0aGlzLmF0a2NvdW50Kys7XG4gICAgICAgIGlmICh0aGlzLm1vdmVsZWZ0KSB7XG4gICAgICAgICAgICB0aGlzLm5vZGUueCAtPSB0aGlzLnNwZWVkO1xuICAgICAgICAgICAgaWYgKHRoaXMub3V0T2ZUaGVXYWxsKCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUueCArPSB0aGlzLnNwZWVkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm1vdmVyaWdodCkge1xuICAgICAgICAgICAgdGhpcy5ub2RlLnggKz0gdGhpcy5zcGVlZDtcbiAgICAgICAgICAgIGlmICh0aGlzLm91dE9mVGhlV2FsbCgpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnggLT0gdGhpcy5zcGVlZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5tb3ZlZG93bikge1xuICAgICAgICAgICAgdGhpcy5ub2RlLnkgLT0gdGhpcy5zcGVlZDtcbiAgICAgICAgICAgIGlmICh0aGlzLm91dE9mVGhlV2FsbCgpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnkgKz0gdGhpcy5zcGVlZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5tb3ZldXApIHtcbiAgICAgICAgICAgIHRoaXMubm9kZS55ICs9IHRoaXMuc3BlZWQ7XG4gICAgICAgICAgICBpZiAodGhpcy5vdXRPZlRoZVdhbGwoKSkge1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZS55IC09IHRoaXMuc3BlZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuYXRrdXApIHtcbiAgICAgICAgICAgIHRoaXMuYXR0YWNrKDApO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmF0a2Rvd24pIHtcbiAgICAgICAgICAgIHRoaXMuYXR0YWNrKDIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmF0a2xlZnQpIHtcbiAgICAgICAgICAgIHRoaXMuYXR0YWNrKDMpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmF0a3JpZ2h0KSB7XG4gICAgICAgICAgICB0aGlzLmF0dGFjaygxKTtcbiAgICAgICAgfVxuICAgIH1cblxufSk7XG4vKm9uRGVzdHJveTpmdW5jdGlvbigpe1xyXG4gICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdHYW1lT3ZlcicpO1xyXG59LCovXG5cbmNjLl9SRnBvcCgpOyIsIlwidXNlIHN0cmljdFwiO1xuY2MuX1JGcHVzaChtb2R1bGUsICczNjYyOXBBeGRwQkk0dE9zSEtjZU9adScsICdTdGFydEdhbWUnKTtcbi8vIFNjcmlwdFxcU3RhcnRHYW1lLmpzXG5cbmNjLkNsYXNzKHtcbiAgICAnZXh0ZW5kcyc6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLy8gZm9vOiB7XG4gICAgICAgIC8vICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgIC8vICAgIHVybDogY2MuVGV4dHVyZTJELCAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcbiAgICAgICAgLy8gICAgc2VyaWFsaXphYmxlOiB0cnVlLCAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXG4gICAgICAgIC8vICAgIHZpc2libGU6IHRydWUsICAgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxuICAgICAgICAvLyAgICBkaXNwbGF5TmFtZTogJ0ZvbycsIC8vIG9wdGlvbmFsXG4gICAgICAgIC8vICAgIHJlYWRvbmx5OiBmYWxzZSwgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgZmFsc2VcbiAgICAgICAgLy8gfSxcbiAgICAgICAgLy8gLi4uXG4gICAgfSxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gb25Mb2FkKCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIGNjLmV2ZW50TWFuYWdlci5hZGRMaXN0ZW5lcih7XG4gICAgICAgICAgICBldmVudDogY2MuRXZlbnRMaXN0ZW5lci5LRVlCT0FSRCxcbiAgICAgICAgICAgIG9uS2V5UHJlc3NlZDogZnVuY3Rpb24gb25LZXlQcmVzc2VkKGtleUNvZGUsIGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChrZXlDb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgY2MuS0VZLnM6XG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ0Nob29zZU1hcCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgY2MuS0VZLmw6XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHNlbGYubm9kZSk7XG4gICAgfSxcblxuICAgIFN0YXJ0R2FtZTogZnVuY3Rpb24gU3RhcnRHYW1lKCkge31cbiAgICAvL2NjLmRpcmVjdG9yLmxvYWRTY2VuZSgnTWFpbmxvb3AnKTtcblxuICAgIC8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXG4gICAgLy8gdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcblxuICAgIC8vIH0sXG59KTtcblxuY2MuX1JGcG9wKCk7Il19
