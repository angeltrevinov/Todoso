<script>
    import { AButton, AInput, ALink } from "$lib";

</script>

<form class="w-full flex flex-col gap-4">
    <div class="w-full flex flex-row justify-center">
        <h1 class="text-2xl font-bold">Log In</h1>
    </div>
    <div class="w-full flex flex-col">
        <label for="email">Email:</label>
        <AInput type="email" id="email" required />
    </div>
    <div class="w-full flex flex-col">
        <label for="password">Password:</label>
        <AInput type="password" id="password" required />
    </div>
    <div class="w-full flex flex-col">
        <AButton>Log In!</AButton>
    </div>
    <div class="w-full flex flex-row justify-center">
        <span>Don't have an account?&nbsp;</span>
        <ALink href="/signup">Sign up</ALink>
    </div>
</form>