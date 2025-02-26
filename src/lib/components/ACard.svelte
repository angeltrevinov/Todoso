<script lang="ts">
    
    interface Props {
        title: string;
        description?: string;
    }

    let { title, description = undefined }: Props = $props();
</script>

<div class="border border-zinc-600 rounded-2xl p-4">
    <h3 class="text-lg font-bold mb-2">{title}</h3>
    <span>{description}</span>
</div>