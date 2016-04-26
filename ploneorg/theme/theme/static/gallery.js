define("pat-gallery",["jquery","pat-registry","pat-base","pat-parser","photoswipe","photoswipe-ui","tpl!photoswipe-template","underscore"],function(a,b,c,d,e,f,g,h){var i=new d("gallery");return i.addArgument("loop",!0),i.addArgument("scale-method","fit",["fit","fitNoUpscale","zoom"]),i.addArgument("delay",3e4),i.addArgument("effect-duration",250),c.extend({name:"gallery",trigger:".pat-gallery",init:function(b,c){this.options=i.parse(this.$el,c),0===a("#photoswipe-template").length&&a("body").append(g());var d=a("a",this.$el).map(function(){return{w:0,h:0,src:this.href,title:a(this).find("img").attr("title")}}),j=document.querySelectorAll(".pswp")[0],k={index:0,scaleMode:this.options.scaleMethod,loop:this.options.loop,slideshowDelay:this.options.delay,hideAnimationDuration:this.options.effectDuration,showAnimationDuration:this.options.effectDuration};a("a",this.$el).click(function(a){a.preventDefault(),this.href?k.index=h.indexOf(h.pluck(d,"src"),this.href):k.index=0;var b=new e(j,f,d,k);b.listen("gettingData",function(a,c){if(c.w<1||c.h<1){var d=new Image;d.onload=function(){c.w=this.width,c.h=this.height,b.invalidateCurrItems(),b.updateSize(!0)},d.src=c.src}}),b.init()})}})});