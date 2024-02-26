<script lang="ts">
    let inputs = {};

    function handleChange(event:any){
        const name = event.target.name;
        const value = event.target.value;
        inputs = {...inputs, [name]: value};
    }

    function handleSubmit(event:any){
        event.preventDefault();
        console.log(inputs);
    }
</script>

<div id="placements-header">
    <form class="filters" on:submit={handleSubmit}>
        <div class='filter-group'>
            <select name="presets" on:change={handleChange}>
                <option value="all">All</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
            </select>
            <input name="id" type="text" placeholder="ID/Search term" on:change={handleChange}/>
        </div>
        <div class='filter-group'>
            <input name="advertiser" type="text" placeholder="Advertiser" on:change={handleChange}/>
        </div>
        <div class='filter-group'>
            <input name="priority" type="number" placeholder="Priority" on:change={handleChange}/>
            <input name="forecast" type="number" placeholder="Forecast" on:change={handleChange}/>
        </div>
        <div class='filter-group'>
            <input name="start-date" type="text" placeholder="Start date" on:change={handleChange}/>
            <input name="tkp" type="number" placeholder="TKP" on:change={handleChange}/>
        </div>
        <div class='filter-group'>
            <input name="end-date" type="text" placeholder="End date" on:change={handleChange}/>
            <button type="submit">Filter</button>
        </div>
    </form>
</div>

<style>
    #placements-header .filters{
        display: flex;

        height: 100%;
        width: 100%;
    }

        #placements-header .filters .filter{
            height: 100%;
        }
            #placements-header .filters .filter > *{
                
            }
</style>