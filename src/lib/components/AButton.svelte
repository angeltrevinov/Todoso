<script>
    let { children, ...btnProps } = $props();
</script>

<button
    {...btnProps}
    class=" h-9
                bg-blue-700
                rounded-md
                cursor-pointer
                disabled:bg-gray-500
                disabled:cursor-not-allowed"
>
    {@render children?.()}
</button>
