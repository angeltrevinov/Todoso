<script lang="ts">
    import { toggleMode } from "mode-watcher";
    
    import { Button } from "$lib/components/ui/button";
	import TaskCard from "$lib/components/task-card.svelte";
	import KanbanCol from "$lib/components/kanban-col.svelte";
</script>

<div class="flex flex-row overflow-x-auto">
    <KanbanCol title="To Do">
        <TaskCard title="My Task" description="This is a task description"></TaskCard>
        <TaskCard title="My Task" description="This is a task description"></TaskCard>
        <TaskCard title="My Task" description="This is a task description"></TaskCard>
        <TaskCard title="My Task" description="This is a task description"></TaskCard>
    </KanbanCol>
    <KanbanCol title="In Progress">
        <TaskCard title="My Task" description="This is a task description"></TaskCard>
        <TaskCard title="My Task" description="This is a task description"></TaskCard>
        <TaskCard title="My Task" description="This is a task description"></TaskCard>
        <TaskCard title="My Task" description="This is a task description"></TaskCard>
    </KanbanCol>
    <KanbanCol title="Done">
        <TaskCard title="My Task" description="This is a task description"></TaskCard>
        <TaskCard title="My Task" description="This is a task description"></TaskCard>
        <TaskCard title="My Task" description="This is a task description"></TaskCard>
        <TaskCard title="My Task" description="This is a task description"></TaskCard>
    </KanbanCol>
</div>
        
<Button onclick={toggleMode}>Dark mode</Button>