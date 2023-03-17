<script lang="ts">
	import '@ui5/webcomponents-icons/dist/AllIcons.js';
	import '@ui5/webcomponents/dist/DateRangePicker';

	import '@ui5/webcomponents/dist/Button';
	import '@ui5/webcomponents/dist/List';
	import '@ui5/webcomponents/dist/StandardListItem';
	import '@ui5/webcomponents-fiori/dist/Page';
	import '@ui5/webcomponents-fiori/dist/Bar';
	import '@ui5/webcomponents-fiori/dist/ShellBar';
	import '@ui5/webcomponents-fiori/dist/FlexibleColumnLayout';

	/** @type {import('./$types').PageData} */
	export let data;
</script>

<ui5-flexible-column-layout id="fcl" layout="TwoColumnsMidExpanded">
	<!-- start column -->
	<div slot="startColumn">
		<!-- <ui5-shellbar primary-title="Dep. New York, USA" /> -->

		<ui5-daterange-picker />
		<ui5-list id="col1list" header-text="Employees" growing="Scroll" style="height: 91vh">
			{#each data.workitems as workitem (workitem.title)}
				<ui5-li>{workitem.title}</ui5-li>
			{/each}
		</ui5-list>
	</div>

	<!-- middle column -->
	<ui5-page id="detailPage" background-design="List" slot="midColumn" floating-footer show-footer>
		<div slot="footer">
			<ui5-bar design="FloatingFooter">
				<ui5-button design="Positive" slot="endContent">Agree</ui5-button>
				<ui5-button design="Negative" slot="endContent">Decline</ui5-button>
				<ui5-button design="Transparent" slot="endContent">Cancel</ui5-button>
			</ui5-bar>
		</div>
	</ui5-page>
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
