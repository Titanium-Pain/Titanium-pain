require=function e(t,o,n){function s(c,a){if(!o[c]){if(!t[c]){var d="function"==typeof require&&require;if(!a&&d)return d(c,!0);if(i)return i(c,!0);var h=new Error("Cannot find module '"+c+"'");throw h.code="MODULE_NOT_FOUND",h}var r=o[c]={exports:{}};t[c][0].call(r.exports,function(e){var o=t[c][1][e];return s(o?o:e)},r,r.exports,e,t,o,n)}return o[c].exports}for(var i="function"==typeof require&&require,c=0;c<n.length;c++)s(n[c]);return s}({AnimOp2:[function(e,t,o){"use strict";cc._RFpush(t,"43e31YqUUZMEZoHCsFf3oME","AnimOp2"),cc.Class({"extends":cc.Component,properties:{},onLoad:function(){var e=this.getComponent(cc.Animation);e.play("2")},onOp2Finished:function(){cc.director.loadScene("Story")}}),cc._RFpop()},{}],AnimOp:[function(e,t,o){"use strict";cc._RFpush(t,"4e3baV0NxpJN499jOJaFuhI","AnimOp"),cc.Class({"extends":cc.Component,properties:{},onLoad:function(){var e=this.getComponent(cc.Animation);e.play("1")},onOpFinish:function(){cc.director.loadScene("op2")}}),cc._RFpop()},{}],AnimStory:[function(e,t,o){"use strict";cc._RFpush(t,"27b06SMm0ZMGoPtP+dIYwdU","AnimStory"),cc.Class({"extends":cc.Component,properties:{},onLoad:function(){var e=this.getComponent(cc.Animation);e.play("5");var t=this;cc.eventManager.addListener({event:cc.EventListener.KEYBOARD,onKeyPressed:function(e,t){switch(e){case cc.KEY.s:cc.director.loadScene("Title")}}},t.node)},onStoryFinished:function(){cc.director.loadScene("Title")}}),cc._RFpop()},{}],Bullet:[function(e,t,o){"use strict";cc._RFpush(t,"c9c22MJeHlFsIchbvM7DuGK","Bullet"),cc.Class({"extends":cc.Component,properties:{speed:10,direction:0,shootingrange:250},onLoad:function(){this.node.parent.getComponent("Player").playShootSound()},outOfTheWall:function(){return this.node.x>this.shootingrange||this.node.x<-this.shootingrange||this.node.y>this.shootingrange||this.node.y<-this.shootingrange},update:function(e){this.node.y+=this.speed,this.outOfTheWall()&&this.node.destroy()}}),cc._RFpop()},{}],ChooseDiffculty:[function(e,t,o){"use strict";cc._RFpush(t,"63ae010Q4hBIpypEQfuWM+P","ChooseDiffculty"),cc.Class({"extends":cc.Component,properties:{reference:{"default":null,type:cc.Node}},onLoad:function(){var e=this;cc.eventManager.addListener({event:cc.EventListener.KEYBOARD,onKeyPressed:function(e,t){switch(e){case cc.KEY.f1:window.Global.diffculty=0,cc.director.loadScene("Mainloop");break;case cc.KEY.f2:window.Global.diffculty=1,cc.director.loadScene("Mainloop");break;case cc.KEY.f3:window.Global.diffculty=2,cc.director.loadScene("Mainloop");break;case cc.KEY.f4:window.Global.diffculty=3,cc.director.loadScene("Mainloop")}}},e.node)},chooseEasy:function(){window.Global.diffculty=0,cc.director.loadScene("Mainloop")},chooseNormal:function(){window.Global.diffculty=1,cc.director.loadScene("Mainloop")},chooseHard:function(){window.Global.diffculty=2,cc.director.loadScene("Mainloop")},chooseInsane:function(){window.Global.diffculty=3,cc.director.loadScene("Mainloop")}}),cc._RFpop()},{}],ChooseMap:[function(e,t,o){"use strict";cc._RFpush(t,"185395JNV9EW5e8sW0Y7O/0","ChooseMap"),cc.Class({"extends":cc.Component,properties:{},onLoad:function(){var e=this;cc.eventManager.addListener({event:cc.EventListener.KEYBOARD,onKeyPressed:function(e,t){switch(e){case cc.KEY.f1:cc.director.loadScene("ChooseDiffculty")}}},e.node)},chooseMap1:function(){cc.director.loadScene("ChooseDiffculty")}}),cc._RFpop()},{}],EnemyScript:[function(e,t,o){"use strict";cc._RFpush(t,"668ca4H4g5KpJvlrDwNy45M","EnemyScript"),cc.Class({"extends":cc.Component,properties:{DetectRadius:1200,petrolcooldown:1,speed:0,count:0,detected:!1},onLoad:function(){this.count=0,this.detected=!1},outOfTheWall:function(){return this.node.x>480||this.node.x<-480||this.node.y>320||this.node.y<-320},onCollisionEnter:function(e,t){this.game.enemyCount--,window.Global.score++,t.node.destroy(),"Player"==e.node.group?cc.director.loadScene("GameOver"):e.node.destroy()},onDestroy:function(){},getPlayerDistance:function(){var e=this.game.player.x,t=this.game.player.y,o=cc.pDistance(this.node.position,cc.p(e,t));return o},moveTowardPlayer:function(){var e=this.game.player.x,t=this.game.player.y;e>=this.node.x?this.node.x+this.speed>=e?this.node.x=e:this.node.x+=this.speed:this.node.x-this.speed<e?this.node.x=e:this.node.x-=this.speed,t>=this.node.y?this.node.y+this.speed>=t?this.node.y=t:this.node.y+=this.speed:this.node.y-this.speed<t?this.node.y=t:this.node.y-=this.speed},update:function(e){if(this.detected===!0)this.moveTowardPlayer();else if(this.getPlayerDistance()<this.DetectRadius)this.speed*=.5,this.moveTowardPlayer(),this.detected=!0;else if(this.count++,this.count>=this.petrolcooldown){var t=Math.floor(25*Math.random());switch(t){case 1:this.node.x+=this.speed,this.outOfTheWall()&&(this.node.x-=this.speed);break;case 2:this.node.x-=this.speed,this.outOfTheWall()&&(this.node.x+=this.speed);break;case 3:this.node.y+=this.speed,this.outOfTheWall()&&(this.node.y-=this.speed);break;case 4:this.node.y-=this.speed,this.outOfTheWall()&&(this.node.y+=this.speed);break;case 5:this.node.x-=.8*this.speed,this.node.y+=.6*this.speed,this.outOfTheWall()&&(this.node.x+=.8*this.speed,this.node.y-=.6*this.speed);break;case 6:this.node.x-=.6*this.speed,this.node.y+=.8*this.speed,this.outOfTheWall()&&(this.node.x+=.6*this.speed,this.node.y-=.8*this.speed);break;case 7:this.node.x+=.6*this.speed,this.node.y+=.8*this.speed,this.outOfTheWall()&&(this.node.x-=.6*this.speed,this.node.y-=.8*this.speed);break;case 8:this.node.x-=.6*this.speed,this.node.y-=.8*this.speed,this.outOfTheWall()&&(this.node.x+=.6*this.speed,this.node.y+=.8*this.speed);break;case 9:this.node.x-=.8*this.speed,this.node.y-=.6*this.speed,this.outOfTheWall()&&(this.node.x+=.8*this.speed,this.node.y+=.6*this.speed);break;case 10:this.node.x+=.8*this.speed,this.node.y+=.6*this.speed,this.outOfTheWall()&&(this.node.x-=.8*this.speed,this.node.y-=.6*this.speed);break;case 11:this.node.x+=.8*this.speed,this.node.y-=.6*this.speed,this.outOfTheWall()&&(this.node.x-=.8*this.speed,this.node.y+=.6*this.speed);break;case 12:this.node.x+=.6*this.speed,this.node.y-=.8*this.speed,this.outOfTheWall()&&(this.node.x-=.6*this.speed,this.node.y+=.8*this.speed)}this.count=0}}}),cc._RFpop()},{}],Finish:[function(e,t,o){"use strict";cc._RFpush(t,"bda5fz1uapHlYOVKn+euGqr","Finish"),cc.Class({"extends":cc.Component,properties:{},onLoad:function(){}}),cc._RFpop()},{}],GameOver:[function(e,t,o){"use strict";cc._RFpush(t,"d0569adHfJExZ8lXXGpzM4R","GameOver"),cc.Class({"extends":cc.Component,properties:{scoreDisplay:{"default":null,type:cc.Label},playsound:{"default":null,url:cc.AudioClip}},onLoad:function(){cc.audioEngine.playMusic(this.playsound);var e=this;this.setScoreLabel(),cc.eventManager.addListener({event:cc.EventListener.KEYBOARD,onKeyPressed:function(e,t){switch(e){case cc.KEY.r:cc.director.loadScene("Mainloop");break;case cc.KEY.c:cc.director.loadScene("ChooseDiffculty")}}},e.node)},setScoreLabel:function(){var e="";switch(window.Global.diffculty){case 0:e="Easy";break;case 1:e="Normal";break;case 2:e="Hard";break;case 3:e="Lunatic"}this.scoreDisplay.string="You Killed \n"+window.Global.score.toString()+"\nZombies\nUnder\n"+e+"\nDiffculty"}}),cc._RFpop()},{}],Global:[function(e,t,o){"use strict";cc._RFpush(t,"8e5a0P2rJJBLrwrW4wVzLlE","Global"),window.Global={diffculty:0,score:0},cc._RFpop()},{}],LabelAnimation:[function(e,t,o){"use strict";cc._RFpush(t,"4d753Wha7lJFY7hl0Pp2d1l","LabelAnimation"),cc.Class({"extends":cc.Component,properties:{},onLoad:function(){var e=this.getComponent(cc.Animation);e.play("6")},onOp2Finished:function(){var e=this.getComponent(cc.Animation);e.play("6")}}),cc._RFpop()},{}],MainLoop:[function(e,t,o){"use strict";cc._RFpush(t,"c20f4tSvydGS5qRzvn5G9z9","MainLoop"),cc.Class({"extends":cc.Component,properties:{enemyCount:0,spawnNumber:0,wave:0,clearwave:5,enemyPrefab:{"default":null,type:cc.Prefab},player:{"default":null,type:cc.Node},bgm:{"default":null,url:cc.AudioClip},waveDisplay:{"default":null,type:cc.Label}},onLoad:function(){var e=cc.director.getCollisionManager();e.enabled=!0,this.enemyCount=0,this.wave=0,window.Global.score=0;var t=window.Global.diffculty;switch(t){case 0:this.spawnNumber=5;break;case 1:this.spawnNumber=15;break;case 2:this.spawnNumber=35;break;case 3:this.spawnNumber=50}cc.audioEngine.playMusic(this.bgm)},randomPosition:function(){var e=0,t=0;e=this.player.x,t=this.player.y;var o=0,n=0,s=this.node.width/2,i=this.node.height/2;for(o=cc.randomMinus1To1()*s,n=cc.randomMinus1To1()*i;45e3>(o-e)*(o-e)+(n-t)*(n-t);)o=cc.randomMinus1To1()*s,n=cc.randomMinus1To1()*i;return cc.p(o,n)},spawnAnEnemy:function(){var e=cc.instantiate(this.enemyPrefab);this.node.addChild(e),e.setPosition(this.randomPosition()),e.getComponent("EnemyScript").game=this,this.enemyCount++},spawnEnemy:function(){for(var e=0;e<this.spawnNumber;e++)this.spawnAnEnemy()},update:function(e){this.enemyCount<=0&&(this.wave++,this.wave>this.clearwave&&cc.director.loadScene("Finish"),this.spawnNumber+=5,this.spawnEnemy(),this.waveDisplay.string="Wave:"+this.wave.toString())}}),cc._RFpop()},{}],MusicScript:[function(e,t,o){"use strict";cc._RFpush(t,"0fd33A665BNhpcv6Ce/8D+Q","MusicScript"),cc.Class({"extends":cc.Component,properties:{bgm:{"default":null,url:cc.AudioClip}},onLoad:function(){cc.audioEngine.playMusic(this.bgm,!0)}}),cc._RFpop()},{}],Player:[function(e,t,o){"use strict";cc._RFpush(t,"eb35476F6BEvpTzVCY3Tw39","Player"),cc.Class({"extends":cc.Component,properties:{speed:0,atkcooldown:10,atkcount:0,shootingrange:200,bulletPrefab:{"default":null,type:cc.Prefab},attacksound:{"default":null,url:cc.AudioClip},bgm:{"default":null,url:cc.AudioClip}},onLoad:function(){this.atkcount=0,this.setInputControl()},playShootSound:function(){cc.audioEngine.playEffect(this.attacksound,!1),cc.audioEngine.setEffectsVolume(.3)},setInputControl:function(){var e=this;cc.eventManager.addListener({event:cc.EventListener.KEYBOARD,onKeyPressed:function(t,o){switch(t){case cc.KEY.w:e.moveup=!0;break;case cc.KEY.s:e.movedown=!0;break;case cc.KEY.a:e.moveleft=!0;break;case cc.KEY.d:e.moveright=!0;break;case cc.KEY.up:e.atkup=!0,e.atkdown=!1,e.atkleft=!1,e.atkright=!1;break;case cc.KEY.down:e.atkup=!1,e.atkdown=!0,e.atkleft=!1,e.atkright=!1;break;case cc.KEY.left:e.atkup=!1,e.atkdown=!1,e.atkleft=!0,e.atkright=!1;break;case cc.KEY.right:e.atkup=!1,e.atkdown=!1,e.atkleft=!1,e.atkright=!0;break;case cc.KEY.escape:cc.audioEngine.playMusic(this.bgm,!0),cc.director.loadScene("Title")}},onKeyReleased:function(t,o){switch(t){case cc.KEY.w:e.moveup=!1;break;case cc.KEY.s:e.movedown=!1;break;case cc.KEY.a:e.moveleft=!1;break;case cc.KEY.d:e.moveright=!1;break;case cc.KEY.up:e.atkup=!1;break;case cc.KEY.down:e.atkdown=!1;break;case cc.KEY.left:e.atkleft=!1;break;case cc.KEY.right:e.atkright=!1}}},e.node)},outOfTheWall:function(){return this.node.x>480||this.node.x<-480||this.node.y>320||this.node.y<-320},checkAtkCooldown:function(){return this.atkcount>=this.atkcooldown},attack:function(e){if(this.checkAtkCooldown()){var t=cc.instantiate(this.bulletPrefab);this.node.addChild(t),t.setPosition(0,0);var o=t.getComponent("Bullet");o.direction=e,o.shootingrange=this.shootingrange,this.node.setRotation(90*e),this.atkcount=0}},update:function(e){this.atkcount++,this.moveleft&&(this.node.x-=this.speed,this.outOfTheWall()&&(this.node.x+=this.speed)),this.moveright&&(this.node.x+=this.speed,this.outOfTheWall()&&(this.node.x-=this.speed)),this.movedown&&(this.node.y-=this.speed,this.outOfTheWall()&&(this.node.y+=this.speed)),this.moveup&&(this.node.y+=this.speed,this.outOfTheWall()&&(this.node.y-=this.speed)),this.atkup&&this.attack(0),this.atkdown&&this.attack(2),this.atkleft&&this.attack(3),this.atkright&&this.attack(1)}}),cc._RFpop()},{}],StartGame:[function(e,t,o){"use strict";cc._RFpush(t,"36629pAxdpBI4tOsHKceOZu","StartGame"),cc.Class({"extends":cc.Component,properties:{},onLoad:function(){var e=this;cc.eventManager.addListener({event:cc.EventListener.KEYBOARD,onKeyPressed:function(e,t){switch(e){case cc.KEY.s:cc.director.loadScene("ChooseMap");break;case cc.KEY.l:}}},e.node)},StartGame:function(){}}),cc._RFpop()},{}]},{},["MusicScript","ChooseMap","AnimStory","StartGame","AnimOp2","AnimOp","LabelAnimation","ChooseDiffculty","EnemyScript","Global","Finish","MainLoop","Bullet","GameOver","Player"]);