<script lang="ts">
	import '@ui5/webcomponents-icons/dist/AllIcons.js';
	import '@ui5/webcomponents/dist/DateRangePicker';
	import '@ui5/webcomponents/dist/List';
	import '@ui5/webcomponents/dist/Label';
	import '@ui5/webcomponents/dist/Select';
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
	<section class="sidebar">
		<ui5-daterange-picker />
		<ui5-list mode="SingleSelect" selection-change="onSelectionChange" style="height: 92vh">
			{#each data.workitems as workitem (workitem.title)}
				<ui5-li>{workitem.title}</ui5-li>
			{/each}
		</ui5-list>
	</section>
	<section class="not-sidebar">
		<ui5-page
			id="detailPage"
			background-design="List"
			floating-footer
			show-footer
			style="padding: 0"
		>
			<div style="display: flex; flex-direction: column; gap: 6px; margin-top: 10px;">
				<ui5-label id="myLabel" for="myInput" required show-colon>First name</ui5-label>
				<ui5-input id="myInput" required placeholder="Enter your name" />
				<ui5-label id="myLabel2" for="myDP" required show-colon>Date of birth</ui5-label>
				<ui5-date-picker id="myDP" required />
				<ui5-label id="myLabel3" for="mySelect" required show-colon>Job</ui5-label>
				<ui5-select id="mySelect" required>
					<ui5-option>Manager</ui5-option>
					<ui5-option>Sales</ui5-option>
					<ui5-option selected>Developer</ui5-option>
				</ui5-select>
				<ui5-label id="myLabel4" for="myTextArea" required show-colon
					>Description label test</ui5-label
				>
				<ui5-textarea id="myTextArea" required placeholder="Type as much text as you wish" />
				<ui5-label for="myCB" required show-colon>Accept terms of use</ui5-label>
				<ui5-checkbox id="myCB" required />
			</div>
			<div slot="footer">
				<ui5-bar design="FloatingFooter">
					<ui5-button design="Positive" slot="endContent">Agree</ui5-button>
					<ui5-button design="Negative" slot="endContent">Decline</ui5-button>
					<ui5-button design="Transparent" slot="endContent">Cancel</ui5-button>
				</ui5-bar>
			</div>
		</ui5-page>
	</section>
</div>

<style>
	.create-todo-wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 2rem 1rem;
		margin: 2rem 0;
		box-sizing: border-box;
		background-color: var(--sapObjectHeader_Background);
	}
	.with-sidebar {
		display: flex;
		flex-wrap: wrap;
		gap: 1em;
	}

	.with-sidebar > :first-child {
		flex-basis: 30;
		flex-grow: 1;
	}

	.with-sidebar > :last-child {
		flex-basis: 0;
		flex-grow: 999;
		min-inline-size: 50%;
	}
</style>
