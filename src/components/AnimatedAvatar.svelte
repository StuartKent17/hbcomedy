<script>
    import { onMount } from 'svelte';
    export let emoji, image, size;
    export let animated = true;
    
    onMount(() => {
    jQuery = window.jQuery;  //could use anything here: window.jQuery = jQuery; 

    var dim = 150;
    if (size && size === "small") {dim = 80};
    
    function createNightmareSpawn() {
    jQuery(".avatar").append(function (el) {
        return jQuery("<span class='emoji'>" + jQuery(this).data("emoji") + "</span>")
        .css({
          left: Math.random(0, dim) * 100,
          top: Math.random(0, dim) * 100, 
          position: 'absolute',
          opacity:0,
          transform: ('scale(' + Math.random(0,2)*2 +')')
        }) 
        .animate(
          { 
            opacity:1,
            left: "+=".concat(Math.random(-dim/2, dim/2) * 100),
            top: "+=".concat(Math.random(-dim/2, dim/2) * 100)
          },
          3000
        ).fadeOut(1753)
    });
    }

    if(animated) {
       setInterval(function () {
           createNightmareSpawn();
        }, 4530);
    }
});
  </script>

  <style>
.avatar { 
  width:150px;
  height:150px;
  margin:0px 25px;
  position:relative;
  border-radius:50%;
  background-size:cover;
  overflow: hidden;
}

.avatar.small {
  width:80px;
  height:80px;
}
 .emoji {
  position:absolute;
  transform:scale(1);
  transition:transform 64s ease;
  opacity:0; 
}

.avatar img {
    max-width:100%;
}

.emoji.grow {
  transform:scale(1.2);
}
  </style>

<div class="avatar {size}" data-emoji="{emoji}">
    <img src="{image}" alt="">
</div>