cc.Class({
    extends: cc.Component,

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
        speed:0,
        atkcooldown:10,
        atkcount:0,
        shootingrange:200,
        
        /*moveup:false,
        movedown:false,
        moveleft:false,
        moveright:false,*/
        bulletPrefab:{
            default:null,
            type:cc.Prefab,
        },
        attacksound:{
            default:null,
            url:cc.AudioClip,
        },
    },

    // use this for initialization
    onLoad: function () {
        var moveup=false;
        var movedown=false;
        var moveleft=false;
        var moveright=false;
        var atkup=false;
        var atkdown=false;
        var atkleft=false;
        var atkright=false;
        var attatkdir=0;
        this.atkcount=0;
        this.setInputControl();
    },
    
    playShootSound: function () {
        cc.audioEngine.playEffect(this.attacksound, false);
    },
    
    setInputControl: function () {
        var self = this;
        cc.eventManager.addListener({
            event: cc.EventListener.KEYBOARD,
            onKeyPressed: function(keyCode, event) {
                switch(keyCode) {
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
                        self.moveleft =true;
                        //self.moveright= false;
                        //self.moveup = false;
                        //self.movedown = false;
                        break;
                    case cc.KEY.d:
                        //self.moveleft =false;
                        self.moveright= true;
                        //self.moveup = false;
                        //self.movedown = false;
                        break;
                    case cc.KEY.up:
                        self.atkup=true;
                        self.atkdown=false;
                        self.atkleft=false;
                        self.atkright=false;
                        break;
                    case cc.KEY.down:
                        self.atkup=false;
                        self.atkdown=true;
                        self.atkleft=false;
                        self.atkright=false;
                        break;
                    case cc.KEY.left:
                        self.atkup=false;
                        self.atkdown=false;
                        self.atkleft=true;
                        self.atkright=false;
                        break;
                    case cc.KEY.right:
                        self.atkup=false;
                        self.atkdown=false;
                        self.atkleft=false;
                        self.atkright=true;
                        break;
                }
            },
            onKeyReleased: function(keyCode, event) {
                switch(keyCode) {
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
                        self.atkup=false;
                        break;
                    case cc.KEY.down:
                        self.atkdown=false;
                        break;
                    case cc.KEY.left:
                        self.atkleft=false;
                        break;
                    case cc.KEY.right:
                        self.atkright=false;
                        break;
                }
            }
        }, self.node);
    },
    
    outOfTheWall: function(){
        if(this.node.x>480||this.node.x<-480||this.node.y>320||this.node.y<-320){
            return true;
        }
        return false;
    },
    
    checkAtkCooldown:function(){
        if(this.atkcount>=this.atkcooldown){
            return true;
        }
        return false;
    },
    
    attack:function(a){
        if(this.checkAtkCooldown()){
            var newbullet=cc.instantiate(this.bulletPrefab);
            this.node.addChild(newbullet);
            newbullet.setPosition(0,0);
            var script=newbullet.getComponent("Bullet");
            script.direction=a;
            script.shootingrange=this.shootingrange;
            this.node.setRotation(90*a);
            this.atkcount=0;
        }
    },

    // called every frame, uncomment this function to activate update callback
    update: function (dt) {
        this.atkcount++;
        if(this.moveleft){
            this.node.x-=this.speed;
            if(this.outOfTheWall()){
                this.node.x+=this.speed;
            }
        }
        if(this.moveright){
            this.node.x+=this.speed;
            if(this.outOfTheWall()){
                this.node.x-=this.speed;
            }
        }
        if(this.movedown){
            this.node.y-=this.speed;
            if(this.outOfTheWall()){
                this.node.y+=this.speed;
            }
        }
        if(this.moveup){
            this.node.y+=this.speed;
            if(this.outOfTheWall()){
                this.node.y-=this.speed;
            }
        }
        if(this.atkup){
            this.attack(0);
        }
        if(this.atkdown){
            this.attack(2);
        }
        if(this.atkleft){
            this.attack(3);
        }
        if(this.atkright){
            this.attack(1);
        }
    },
    
    /*onDestroy:function(){
        cc.director.loadScene('GameOver');
    },*/
});
