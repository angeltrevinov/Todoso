<script>
    import { AButton, AInput, ALink } from "$lib";

    const signupForm = $state({
        email: "",
        password: "",
        confirmPassword: "",
    });

    const formIsValid = $state(false);

    $effect(() => {
        // Missing form validation 
        formIsValid.value = signupForm.email.includes("@") && signupForm.password.length >= 6 && signupForm.password === signupForm.confirmPassword;
    });

    function onSubmitForm(event) {
        event.preventDefault();
        console.log(event);
    };

</script>

<form onsubmit={onSubmitForm} class="w-full flex flex-col gap-4">
    <div class="w-full flex flex-row justify-center">
        <h1 class="text-2xl font-bold">Create Account</h1>
    </div>
    <div class="w-full flex flex-col">
        <label for="email">Email:</label>
        <AInput
            type="email"
            id="email"
            required
            bind:value={signupForm.email}
        />
    </div>
    <div class="w-full flex flex-col">
        <label for="password">Password:</label>
        <AInput
            type="password"
            id="password"
            required
            bind:value={signupForm.password}
        />
    </div>
    <div class="w-full flex flex-col">
        <label for="confirmPassword">Confirm Password:</label>
        <AInput
            type="password"
            id="confirmPassword"
            required
            bind:value={signupForm.confirmPassword}
        />
    </div>
    <div class="w-full flex flex-col">
        <AButton disabled={!formIsValid}>Sign Up!</AButton>
    </div>
    <div class="w-full flex flex-row justify-center">
        <span>Already have an Account?&nbsp;</span>
        <ALink href="login">Login</ALink>
    </div>
</form>
