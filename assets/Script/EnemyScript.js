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
        DetectRadius:100,
        petrolcooldown:1,
        speed:0,
        count:0,
        
    },

    // use this for initialization
    onLoad: function () {
        this.count=0;
        
    },
    
    outOfTheWall: function(){
        if(this.node.x>480||this.node.x<-480||this.node.y>320||this.node.y<-320){
            return true;
        }
        return false;
    },
    
    onCollisionEnter: function (other, self) {
        other.node.destroy();
        self.node.destroy();
},

    // called every frame, uncomment this function to activate update callback
    update: function (dt) {
        
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
        if(this.count>=this.petrolcooldown){
            var rand=Math.floor(Math.random()*(24+1));
            switch(rand){
                case 1:
                    this.node.x+=this.speed;
                    if(this.outOfTheWall()){
                        this.node.x-=this.speed;
                    }
                    break;
                case 2:
                    this.node.x-=this.speed;
                    if(this.outOfTheWall()){
                        this.node.x+=this.speed;
                    }
                    break;
                case 3:
                    this.node.y+=this.speed;
                    if(this.outOfTheWall()){
                        this.node.y-=this.speed;
                    }
                    break;
                case 4:
                    this.node.y-=this.speed;
                    if(this.outOfTheWall()){
                        this.node.y+=this.speed;
                    }
                    break;
                case 5:
                    this.node.x-=this.speed * 0.8;
                    this.node.y+=this.speed * 0.6;
                    if(this.outOfTheWall()){
                        this.node.x+=this.speed * 0.8;
                        this.node.y-=this.speed * 0.6;
                    }
                    break;
                case 6:
                    this.node.x-=this.speed * 0.6;
                    this.node.y+=this.speed * 0.8;
                    if(this.outOfTheWall()){
                        this.node.x+=this.speed * 0.6;
                        this.node.y-=this.speed * 0.8;
                    }
                    break;
                case 7:
                    this.node.x+=this.speed * 0.6;
                    this.node.y+=this.speed * 0.8;
                    if(this.outOfTheWall()){
                        this.node.x-=this.speed * 0.6;
                        this.node.y-=this.speed * 0.8;
                    }
                    break;
                case 8:
                    this.node.x-=this.speed * 0.6;
                    this.node.y-=this.speed * 0.8;
                    if(this.outOfTheWall()){
                        this.node.x+=this.speed * 0.6;
                        this.node.y+=this.speed * 0.8;
                    }
                    break;
                case 9:
                    this.node.x-=this.speed * 0.8;
                    this.node.y-=this.speed * 0.6;
                    if(this.outOfTheWall()){
                        this.node.x+=this.speed * 0.8;
                        this.node.y+=this.speed * 0.6;
                    }
                    break;
                case 10:
                    this.node.x+=this.speed * 0.8;
                    this.node.y+=this.speed * 0.6;
                    if(this.outOfTheWall()){
                        this.node.x-=this.speed * 0.8;
                        this.node.y-=this.speed * 0.6;
                    }
                    break;
                case 11:
                    this.node.x+=this.speed * 0.8;
                    this.node.y-=this.speed * 0.6;
                    if(this.outOfTheWall()){
                        this.node.x-=this.speed * 0.8;
                        this.node.y+=this.speed * 0.6;
                    }
                    break;
                case 12:
                    this.node.x+=this.speed * 0.6;
                    this.node.y-=this.speed * 0.8;
                    if(this.outOfTheWall()){
                        this.node.x-=this.speed * 0.6;
                        this.node.y+=this.speed * 0.8;
                    }
                    break;
            }
            this.count=0;
        }
    },
});
