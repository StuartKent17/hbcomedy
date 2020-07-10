<style>
.container {
    background:darkslategray url('../bricksbg.jpg');
    color:white;
    font-size:1.4em;
    position: relative; 
}
.content {
    margin:0px auto;
    max-width:80vw;
    padding:190px 20px;
    display:flex;      
    flex-wrap: wrap;
    position: relative; 
    justify-content: space-evenly;
}
.bg {  
    background: rgba(0,0,0,.5);
    position: absolute;
    width:100%;
    height:100%;
    z-index:0;
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
<div class="bg"></div>    
<div class="content">
    <div class="poster">
        <img src="poster.jpg" alt="">
    </div>
    <div class="details">
        <div class="preheader">Tickets available now!</div>
        <h2>THE MAN</h2>
        <p>Set at speakers corner in Londons Hyde park The Man is a minimalist solo show that uses a mashup of standup comedy and Brectian style theatrics to explore the idea of a modern jester holding court to his fellow citizens with dark and playful wit.
        </p>
    </div>
</div>
</div>