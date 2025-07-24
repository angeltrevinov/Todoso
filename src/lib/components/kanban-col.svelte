<script lang="ts">
    export let title: string = "Status";
</script>

<section class="min-w-screen md:min-w-auto md:max-w-md p-4">
    <h2 class="text-3xl font-semibold pb-3">{title}</h2>
    <div class="flex flex-col gap-2">
        <slot />
    </div>
</section>