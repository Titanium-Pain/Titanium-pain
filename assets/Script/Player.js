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
        /*moveup:false,
        movedown:false,
        moveleft:false,
        moveright:false,*/
    },

    // use this for initialization
    onLoad: function () {
        var moveup=false;
        var movedown=false;
        var moveleft=false;
        var moveright=false;
        this.setInputControl();
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

    // called every frame, uncomment this function to activate update callback
    update: function (dt) {
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
    },
});
