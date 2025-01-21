<script>
	import '../app.css';
	import {  LinkedinSolid } from 'flowbite-svelte-icons';
	import { Tooltip } from 'flowbite-svelte';
</script>

<header class="bg-secondary text-primary py-4 shadow-md">
	<div class="container mx-auto px-4 flex items-center justify-between">
	  <!-- <img src="https://via.placeholder.com/50" alt="Logo izquierdo" class="h-10"> -->
	  
	  <a href="https://www.linkedin.com/in/werner-augusto-müller-hudats-781a3a143" class="flex items-center" id="LinkedinSolid">
		<LinkedinSolid/>
	  </a>
	</div>
	<Tooltip triggeredBy="#LinkedinSolid">linkedin</Tooltip>
  </header>

<slot></slot>


<footer class="bg-secondary text-primary pb-4">	
</footer>