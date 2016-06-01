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
        enemyCount:0,
        spawnNumber:0,
        wave:0,
        clearwave:5,
        enemyPrefab:{
            default:null,
            type:cc.Prefab,
        },
        player:{
            default:null,
            type:cc.Node,
        },
        bgm:{
            default:null,
            url:cc.AudioClip,
        },
    },

    // use this for initialization
    onLoad: function () {
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
        this.enemyCount=0;
        this.wave=0;
        //console.log(enemyCount);
        var diffculty= window.Global.diffculty;
        //console.log(cc.game.isPersistRootNode(this.passarg));
        //console.log("diffculty"+diffculty)
        switch(diffculty){
            case 0:
                this.spawnNumber=5;
                break;
            case 1:
                this.spawnNumber=15;
                break;
            case 2:
                this.spawnNumber=35;
                break;
        }
        cc.audioEngine.playMusic(this.bgm,true);
        //console.log("onLoad "+this.spawnNumber);
    },
    
    randomPosition:function(){
        var playerx=0;
        var playery=0;
        playerx=this.player.x;
        playery=this.player.y;
        var randx=0;
        var randy=0;
        var maxx=this.node.width/2;
        var maxy=this.node.height/2;
        randx = cc.randomMinus1To1() * maxx;
        randy = cc.randomMinus1To1() * maxy;
        while((((randx-playerx)*(randx-playerx))+((randy-playery)*(randy-playery)))<10000){
            randx = cc.randomMinus1To1() * maxx;
            randy = cc.randomMinus1To1() * maxy;
        }
        return cc.p(randx,randy);
    },
    
    spawnAnEnemy:function(){
      var newEnemy = cc.instantiate(this.enemyPrefab);
      this.node.addChild(newEnemy); 
      newEnemy.setPosition(this.randomPosition());
      newEnemy.getComponent('EnemyScript').game = this;
      this.enemyCount++;
      //log("spawn an enemy "+this.enemyCount);
    },
    
    
    spawnEnemy:function(){
        //console.log(this.spawnNumber);
        for(var i=0;i<this.spawnNumber;i++){
            this.spawnAnEnemy();
        }
    },
    
    // called every frame, uncomment this function to activate update callback
    update: function (dt) {
        //console.log(this.enemyCount);
        if(this.enemyCount<=0){
            this.wave++;
            if(this.wave>this.clearwave){
                cc.director.loadScene("Finish");
            }
            this.spawnNumber+=5;
            this.spawnEnemy()
        }
    },
});
