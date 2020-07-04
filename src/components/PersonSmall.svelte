<script>
    import AnimatedAvatar from '../components/AnimatedAvatar.svelte';    
    export let emoji = "";
    export let image= "";
    export let pretitle= "";
    export let name= "";
    export let paragraph= "";
    export let attributes= "";
</script>

<style>
	.person {
		max-width:30%;
		display:flex;
        flex-direction:row;
        margin:20px 0px;
        flex-wrap: wrap;
    }
    .person .name {
        font-size:1.4em;
        margin-bottom:0px;
    }
	.person .details {
		flex:1;
    }
    .posttitle {
        margin-top:-15px;
        font-size:.7em;
        text-emphasis: italic;
    }
	.person .attributes {
		padding:0px;
        margin:0px;
        flex:0 0 100%;
        width:100%;
	} 
	.person .attributes li {
		font-size:.68em;
		padding:.2em .65em;
		background:darkslategray;
		color:white;
		border-radius:4px;
		display: inline-block;
		margin:2px;
    } 
    .emerwhat {
        position:relative;
    } 
    .emerwhat:after {
        position:absolute;
        opacity:0;
        transition:top .4s ease, opacity .4s ease;
        top:0px;
        right:-5px;
        left:-5px;
        text-align:center;
        font-size:.7em;
        font-weight:bold;
        border-radius:50px;
        padding: 2px 4px;
        background:darkslategray;
        content:"CEASED TO BE";
    }
	.emerwhat:hover:after {
        opacity:1;
        top:-15px;
	}
</style>

<div class="person">
    <AnimatedAvatar 
        emoji="{emoji}"
        size="small" 
        animated="{false}"
        image="{image}">
    </AnimatedAvatar>
    <div class="details">
        <span class="pretitle">{pretitle}</span>
        <h4 class="name">{name}</h4>
        <p>{paragraph}</p>
    </div>
        <ul class="attributes">
            {#each attributes as cat}
                {#if cat == 'Emeritus'}
                  <li class="emerwhat"><span>{cat}</span></li>
                {:else}
                   <li>{cat}</li>
                {/if}
            {/each}
        </ul>
</div>