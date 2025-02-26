<script lang="ts">
    interface Props {
        title: string;
        children?: any;
    }

    let { title, children = undefined }: Props = $props();
</script>

<div class="h-full border-l border-r border-zinc-600 p-4">
    <div class="border-b border-white pb-4 mb-4">
        <h2 class="text-2xl font-bold">{title}</h2>
    </div>
    <div class="flex flex-col gap-3">
        {@render children?.()}
    </div>
</div>