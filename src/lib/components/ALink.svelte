<script>
    let { children, ...aProps } = $props();
</script>

<a { ...aProps } class="text-blue-600 hover:underline">
    {@render children?.()}
</a>