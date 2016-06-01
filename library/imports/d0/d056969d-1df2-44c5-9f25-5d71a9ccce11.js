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