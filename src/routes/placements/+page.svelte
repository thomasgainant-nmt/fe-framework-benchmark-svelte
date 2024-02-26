<script lang="ts">
	import { writable } from 'svelte/store';

	import PlacementHeader from './PlacementsHeader.svelte';
	import PlacementContent from './PlacementsContent.svelte';

	import { entries } from './DataContext';
</script>

<div id="placements-tool">
	<PlacementHeader></PlacementHeader>
	<PlacementContent></PlacementContent>
</div>

<style>
	#placements-tool{
    display: flex;
    flex-direction: column;

    height: 100%;
    width: 100%;

    margin: 0;
    padding: 0;
}

    #placements-header{
        height: 20%;
        width: 100%;
    }

    #placements-content{
        height: 80%;
        width: 100%;
    }
</style>
