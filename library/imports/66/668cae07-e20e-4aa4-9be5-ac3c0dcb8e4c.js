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