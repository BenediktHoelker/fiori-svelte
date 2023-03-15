<script lang="ts">
	import '@ui5/webcomponents-icons/dist/AllIcons.js';

	import '@ui5/webcomponents/dist/Button';
	import '@ui5/webcomponents/dist/List';
	import '@ui5/webcomponents/dist/ListItem';
	import '@ui5/webcomponents-fiori/dist/ShellBar';
	import '@ui5/webcomponents-fiori/dist/FlexibleColumnLayout';

	/** @type {import('./$types').PageData} */
	export let data;
</script>

<ui5-flexible-column-layout id="fcl" layout="TwoColumnsMidExpanded">
	<!-- start column -->
	<div slot="startColumn">
		<ui5-shellbar primary-title="Dep. New York, USA" />

		<ui5-list id="col1list" header-text="Employees">
			{#each data.workitems as workitem (workitem.title)}
				<ui5-li>{workitem.title}</ui5-li>
			{/each}
		</ui5-list>
	</div>

	<!-- middle column -->
	<div slot="midColumn">
		<!-- <div class="colHeader">
			<ui5-button design="Emphasized">Edit</ui5-button>
			<ui5-button design="Transparent" icon="add" />
			<ui5-button id="fullscreenMidColumn" design="Transparent" icon="full-screen" />
			<ui5-button id="closeMidColumn" icon="decline" design="Transparent" />
		</div> -->

		<ui5-list id="col2list" header-text="Employees" />
	</div>
</ui5-flexible-column-layout>

<style>
	.colHeader {
		display: flex;
		align-items: end;
		row-gap: 5px;
	}
	ui5-shellbar::part(root) {
		padding-left: 0.5rem;
	}
</style>
