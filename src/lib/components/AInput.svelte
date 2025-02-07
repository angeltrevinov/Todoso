<script>
    let { value = $bindable(), ...inputProps } = $props();
</script>

<input
    bind:value={value}
    {...inputProps}
    class="h-8
                bg-white
                dark:bg-neutral-900
                text-neutral-900
                dark:text-white
                border-slate-700
                border-solid border-2
                rounded-md"
/>
