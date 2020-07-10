<script>
    export let url= "";
    export let title= "";
    export let clazz="";
</script>
<style>
    
	.button {
		padding:.5em .8em; 
		background: var(--bg);
		color:white;
		border-radius:2px;
		display: inline-block;
		font-size:14px;
	}

	.facebook {
		background:#3b5998 ;
	}
</style>

<a href="{url}" class="{clazz}">
    <div class="button {clazz}">
        {title}
    </div>
</a>