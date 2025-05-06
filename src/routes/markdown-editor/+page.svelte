
<script lang="ts">
    import { onMount } from 'svelte';

    onMount(async () => {
        const EditorJS = (await import('@editorjs/editorjs')).default;
        const Header = (await import('@editorjs/header')).default;
        const editor = new EditorJS({
            holder: 'editorjs',
            tools: {
                header: {
                    class: Header,
                    config: {
                        placeholder: 'Enter a header',
                        levels: [1, 2, 3, 4],
                        defaultLevel: 1,
                    },
                },
            },
        });
    });
</script>

<h1 class="text-3xl font-bold underline">
    Markdown Editor Exploration
</h1>

<div id="editorjs">

</div>