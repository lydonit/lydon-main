<script>
	import NavItem from './NavItem.svelte';

	let opened = false;
</script>

<nav
	class="sticky top-0 z-50 transition-all bg-gradient-to-r from-teal-900 to-emerald-900 text-white bg-opacity-80 backdrop-blur-md "
>
  <div class="py-4 px-6 md:px-28 gap-4 flex flex-row items-center">
    <a href="/">
      <img src="lydon_logo.png" class="w-20 h-20" />
    </a>
    <div
      class="flex flex-col justify-between md:justify-start flex-wrap transition-all"
    >
      <div class="mb-4">
        <a href="/" class="font-bold text-2xl flex flex-row items-center space-x-3">
          <span>
            Lydon Lab
          </span>
        </a>
      </div>

      <div class="hidden md:flex flex-row text-base flex-wrap gap-y-2">
        <NavItem route="/research" display="Research" />
        <NavItem route="/publications" display="Publications" />
        <NavItem route="/lab-members" display="Lab Members" />
        <NavItem route="/media" display="Media" />
        <NavItem route="/news" display="News" />
        <!-- <NavItem route="/blog" display="Blog" /> -->
        <!-- <NavItem route="/poster-presentations" display="Poster Presentations" /> -->
        <NavItem route="/get-involved" display="Get Involved" />
        <NavItem route="/contact-us" display="Contact Us" />
      </div>

      <button class="md:hidden" on:click={() => (opened = !opened)}>
        {#if !opened}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-7 h-7"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        {:else}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-7 h-7"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        {/if}
      </button>
    </div>
  </div>

	{#if opened}
		<div class="md:hidden flex flex-col pb-4" on:click={() => (opened = !opened)}>
			<NavItem style="col" route="/research" display="Research" />
			<NavItem style="col" route="/publications" display="Publications" />
			<NavItem style="col" route="/lab-members" display="Lab Members" />
			<NavItem style="col" route="/media" display="Media" />
			<NavItem style="col" route="/news" display="News" />
			<!-- <NavItem style="col" route="/blog" display="Blog" /> -->
			<NavItem style="col" route="/get-involved" display="Get Involved" />
			<NavItem style="col" route="/contact-us" display="Contact Us" />
		</div>
	{/if}
</nav>
