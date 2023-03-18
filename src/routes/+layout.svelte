<script lang="ts">
	import '@ui5/webcomponents-icons/dist/AllIcons.js';
	import '@ui5/webcomponents/dist/DateRangePicker';
	import '@ui5/webcomponents/dist/List';
	import '@ui5/webcomponents/dist/Label';
	import '@ui5/webcomponents/dist/Input';
	import '@ui5/webcomponents/dist/StandardListItem';
	import '@ui5/webcomponents-fiori/dist/Page';
	import '@ui5/webcomponents-fiori/dist/Bar';
	import '@ui5/webcomponents-fiori/dist/ShellBar';
	import '@ui5/webcomponents-fiori/dist/SideNavigation.js';
	import '@ui5/webcomponents-fiori/dist/SideNavigationItem.js';
	import '@ui5/webcomponents-fiori/dist/SideNavigationSubItem.js';

	let title = '';

	function onSelectionChange({ selectedItems }) {
		const selectedItem = selectedItems[0];
	}
</script>

<!-- <div class="with-sidebar"> -->
<ui5-shellbar primary-title="UI5 Web Components" secondary-title="The Best Run SAP">
	<!-- <ui5-button icon="menu" slot="startButton" id="startButton" /> -->
</ui5-shellbar>

<div class="nav-sidebar">
	<!-- <ui5-side-navigation>
		<ui5-side-navigation-item text="Home" />
	</ui5-side-navigation> -->

	<!-- Page Route Content -->
	<slot />
</div>

<style>
	.nav-sidebar {
		display: flex;
		gap: 6px;
	}
	ui5-shellbar::part(root) {
		padding-left: 0.5rem;
	}
</style>
