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
        speed:10,
        direction:0,
        shootingrange:250,
    },

    // use this for initialization
    onLoad: function () {
    },
    
    outOfTheWall: function(){
        if(this.node.x>this.shootingrange||this.node.x<-this.shootingrange||this.node.y>this.shootingrange||this.node.y<-this.shootingrange){
            return true;
        }
        return false;
    },

    // called every frame, uncomment this function to activate update callback
    update: function (dt) {
        switch(this.direction){
            case 0:
                this.node.y+=this.speed;
                break;
            case 1:
                this.node.y-=this.speed;
                break;
            case 2:
                this.node.x-=this.speed;
                break;
            case 3:
                this.node.x+=this.speed;
                break;
        }
        if(this.outOfTheWall()){
            this.node.destroy();
        }
    },
});
