<script>
    let { children } = $props();
    import "../app.css";
</script>

<div class="bg-white dark:bg-black dark:text-white h-dvh">
    {@render children()}
</div>