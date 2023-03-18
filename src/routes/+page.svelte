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

	/** @type {import('./$types').PageData} */
	export let data: any;

	let title = '';

	function onSelectionChange({ selectedItems }) {
		const selectedItem = selectedItems[0];
	}
</script>

<div class="with-sidebar">
	<div class="sidebar">
		<ui5-daterange-picker />
		<ui5-list mode="SingleSelect" selection-change="onSelectionChange" style="height: 100vh">
			{#each data.workitems as workitem (workitem.title)}
				<ui5-li>{workitem.title}</ui5-li>
			{/each}
		</ui5-list>
	</div>
	<div class="not-sidebar" style="height: 100vh">
		<ui5-page
			id="detailPage"
			background-design="List"
			floating-footer
			show-footer
			class="not-sidebar"
		>
			<ui5-input value={title} id="titleInput" />
			<div slot="footer">
				<ui5-bar design="FloatingFooter">
					<ui5-button design="Positive" slot="endContent">Agree</ui5-button>
					<ui5-button design="Negative" slot="endContent">Decline</ui5-button>
					<ui5-button design="Transparent" slot="endContent">Cancel</ui5-button>
				</ui5-bar>
			</div>
		</ui5-page>
	</div>
</div>

<style>
	.with-sidebar {
		display: flex;
		flex-wrap: wrap;
	}

	.sidebar {
		flex-basis: 20rem;
		flex-grow: 1;
	}

	.not-sidebar {
		flex-basis: 0;
		flex-grow: 999;
		min-inline-size: 50%;
	}
</style>
