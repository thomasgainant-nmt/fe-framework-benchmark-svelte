<script lang="ts">
    import { entries } from './DataContext';

    let currentEntries = [] as any[];
    entries.subscribe((value) => {
		currentEntries = value;
	});

    console.log(entries);

    setTimeout(() => {
        console.log("changing data from consumer");
        entries.set([
            {id: 1, lineItem: 'Entry ABC'},
            {id: 2, lineItem: 'Entry DEF'},
            {id: 3, lineItem: 'Entry GHI'}
        ]);
    }, 5000);
</script>

<div id="placements-content">
    <table class='placements-data'>
        <thead>
            <tr><th>Line Item</th><th>ID</th><th>Prio</th><th>Type</th><th>Start</th><th>End</th><th>TKP</th><th>Booked</th><th>Delivered</th><th>Clicks/CTR</th><th>Viewability 50/1</th><th>Viewability 100/1</th><th>Forecast</th><th>Progress</th><th>Order & Position</th></tr>
        </thead>
        <tbody>
            {#each currentEntries as entry (entry.id)}
                <tr class='placements-data-entry'><td>{ entry.lineItem }</td><td>{ entry.id }</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td></tr>
            {/each}
        </tbody>
    </table>
</div>

<style>
    #placements-tool #placements-content .placements-data{
        height: 100%;
        width: 100%;
    }
        #placements-tool #placements-content .placements-data .placements-data-entry{
            text-align: center;
        }
</style>