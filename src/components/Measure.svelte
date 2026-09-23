<script lang="ts">
	import type { Entry } from 'contentful';
	import type { Measure } from 'src/lib/types';
	import CopyCitation from './CopyCitation.svelte';
	import ReadOnline from './ReadOnline.svelte';
	import RichText from './RichText.svelte';

	export let entry: Entry<Measure>;
	const measure = entry.fields;
</script>

<div class="pb-6 mb-6 border-b first:border-t first:pt-6">
	<div class="font-semibold mb-2 text-lg">
		{measure.measureName}
	</div>

	<div class="mb-4">
		{measure.citation}
	</div>

	<div class="mb-4">
		<RichText rich={measure.description} />
	</div>

    <div class="mt-8 text-gray-800 text-sm flex flex-row items-center gap-x-6">
        <ReadOnline link={measure.link} />

        <CopyCitation citation={measure.citation} />

        <a>
            href={measure.measureLink}
            target="_blank"
            rel="noopener noreferrer"
            class="measure-btn inline-flex items-center gap-1.5 whitespace-nowrap">
            <svg>
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="flex-shrink-0">
                <rect x="2" y="7" width="20" height="10" rx="1.5" />
                <line x1="6" y1="7" x2="6" y2="11" />
                <line x1="10" y1="7" x2="10" y2="13" />
                <line x1="14" y1="7" x2="14" y2="11" />
                <line x1="18" y1="7" x2="18" y2="13" />
            </svg>

            <span>Access Measure</span>
        </a>
    </div>


</div>
