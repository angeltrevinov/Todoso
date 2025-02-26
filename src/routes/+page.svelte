<script>
    import AColumn from "$lib/components/AColumn.svelte";
    import { ACard } from "../lib";
</script>

<div class="columns-3 gap-4 h-full">
    <AColumn title="To do">
        <ACard title="Task 1" description="This is a description"></ACard>
        <ACard title="Task 2" description="This is a description"></ACard>
        <ACard title="Task 3" description="This is a description"></ACard>
    </AColumn>
    <AColumn title="In Progress"></AColumn>
    <AColumn title="Completed"></AColumn>
</div>