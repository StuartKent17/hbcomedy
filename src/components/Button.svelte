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
	.flogo{
		width:19px;
		display: none;
		vertical-align: middle;
		margin-top:-4px;
		margin-right:2px;
	}


	.facebook {
		background:#3b5998 ;
	}

	.facebook .flogo {
		display:inline-block;
	}

</style>

<a href="{url}" class="{clazz}">
    <div class="button {clazz}">
	<img src="f_logo_RGB-White_58.png" alt="" class="flogo">
	{title}
    </div>
</a>