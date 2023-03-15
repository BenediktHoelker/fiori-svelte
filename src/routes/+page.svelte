<script lang="ts">
	import '@ui5/webcomponents-icons/dist/AllIcons.js';
	import '@ui5/webcomponents-fiori/dist/ShellBar';
	import '@ui5/webcomponents-fiori/dist/SideNavigation.js';
	import '@ui5/webcomponents-fiori/dist/SideNavigationItem.js';
	import '@ui5/webcomponents-fiori/dist/SideNavigationSubItem.js';

	/** @type {import('./$types').PageData} */
	export let data;
</script>

<ui5-shellbar primary-title="UI5 Web Components" secondary-title="The Best Run SAP">
	<!-- <ui5-button icon="menu" slot="startButton" id="startButton" /> -->
</ui5-shellbar>

<ui5-side-navigation>
	{#each data.workitems as workitem (workitem.title)}
		<ui5-side-navigation-item text={workitem.title} />
	{/each}
</ui5-side-navigation>

<style>
	ui5-shellbar::part(root) {
		padding-left: 0.5rem;
	}
</style>
