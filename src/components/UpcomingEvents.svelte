<script>
    export let poster, url, slug, title, description, background ="";
</script>
<style>
.container {
    color:white;
    font-size:1.4em;
    position: relative; 
    background:black;
}
.content {
    margin:0px auto;
    max-width:80vw;
    padding:240px 120px;    
    display:flex;      
    flex-wrap: wrap;
    position: relative; 
    justify-content: space-evenly;
}
.bg {  
    background: rgba(0,0,0,.5);
    position: absolute;
    width:100%;
    filter:blur(5px);
    height:100%;
    background-size:cover;
    z-index:0;
    opacity:.5
}
.poster {
    max-width:280px;
    transform: rotate(-13deg);
    box-shadow:0px 0px 20px black;
    transition:transform .14s ease-in;
    flex-shrink: 0;
    margin:0px 60px;
}
.poster:hover {
    transform: rotate(0) scale(1.2);
}
.poster img {
    max-width: 100%;
    margin:0px;
    display: block;
}
.preheader {
    background: var(--accent);
    color: var(--bg);
    display:inline-block;
    padding:.5em .75em;
    font-size:.6em;
    font-weight:bold;
}
.details {
    max-width:650px;
}
</style>
<div class="container">
<div class="bg" style="background-image:url('{background}')"></div>    
<div class="content">
    <div class="poster">
        <img src="{poster}" alt="">
    </div>
    <div class="details">
        <div class="preheader">Tickets available now!</div>
        <h2>{title}</h2>
        <p>{@html description}        </p> 
        <a href="events/{slug}">
            <div class="preheader">Find out more</div>
        </a>
    </div>
</div>
</div>