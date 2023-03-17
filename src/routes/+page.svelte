<script lang="ts">
	import '@ui5/webcomponents-icons/dist/AllIcons.js';
	import '@ui5/webcomponents/dist/DateRangePicker';
	import '@ui5/webcomponents/dist/List';
	import '@ui5/webcomponents/dist/StandardListItem';
	import '@ui5/webcomponents-fiori/dist/Page';
	import '@ui5/webcomponents-fiori/dist/Bar';
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

<div class="with-sidebar">
	<div class="sidebar" style="display: flex; flex-direction: column">
		<!-- <ui5-page id="masterPage" background-design="List">
			<ui5-bar slot="header"> -->
		<ui5-daterange-picker />
		<!-- </ui5-bar> -->
		<ui5-list mode="SingleSelect" style="height: 85.6vh">
			{#each data.workitems as workitem (workitem.title)}
				<ui5-li>{workitem.title}</ui5-li>
			{/each}
		</ui5-list>
		<!-- </ui5-page> -->
	</div>
	<div class="content">
		<ui5-page id="detailPage" background-design="List" floating-footer show-footer>
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
		gap: var(--s1);
	}

	.sidebar {
		flex-direction: column;
		gap: 6px;
	}

	.with-sidebar > :first-child {
		flex-grow: 1;
	}

	.with-sidebar > :last-child {
		flex-basis: 0;
		flex-grow: 999;
		min-inline-size: 50%;
	}

	ui5-shellbar::part(root) {
		padding-left: 0.5rem;
	}
</style>
