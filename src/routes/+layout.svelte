<script>
    let { children } = $props();
    import "../app.css";
</script>

<div class="bg-white dark:bg-black dark:text-white min-h-screen">
    {@render children()}
</div>