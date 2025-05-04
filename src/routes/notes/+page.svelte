<script lang="ts">

    /**
        Notes functionality
        - edit content 
        - Use formats 
        - Use / + <format> command: /bold
        - Have menu button 
        - WYSIWYG options 
    */
    let content = "";
    let editableDiv: HTMLDivElement; 

    let showCommandPalette = false;
    let commandPalettePosition = { x: 0, y: 0 };

    let commands = [
        "bold",
        "italic",
        "underline"
    ];

    let isListeningForCommand = false;
    let currentCommand = "";

    function listenForCommand(event: KeyboardEvent) {
        if (event.key === "/") {
            event.preventDefault();
            const rect = editableDiv.getBoundingClientRect();
            commandPalettePosition = { x: rect.left, y: rect.top + window.scrollY };
            showCommandPalette = true;
            isListeningForCommand = true;
            currentCommand = ""; // Reset the command
        } else if (isListeningForCommand) {
            if (event.key === "Enter") {
                event.preventDefault();
                applyCommand(currentCommand);
                showCommandPalette = false;
                isListeningForCommand = false;
            } else if (event.key === "Escape") {
                showCommandPalette = false;
                isListeningForCommand = false;
            } else {
                currentCommand += event.key; // Append the key to the current command
            }
        }
    }

    function applyCommand(command: string) {
        const selection = window.getSelection();
        if (!selection || selection.rangeCount === 0) return;

        const range = selection.getRangeAt(0);
        const span = document.createElement("span");

        if (command.toLowerCase() === "bold") {
            span.style.fontWeight = "bold";
        } else if (command.toLowerCase() === "italic") {
            span.style.fontStyle = "italic";
        } else if (command.toLowerCase() === "underline") {
            span.style.textDecoration = "underline";
        }

        span.appendChild(range.extractContents());
        range.insertNode(span);
    }
</script>

<h1 class="text-3xl font-bold underline">
    Command Palette Demo
</h1>

<div 
    contenteditable="true"
    bind:this={editableDiv}
    onkeydown={listenForCommand}>
    {@html content}
</div>

{#if showCommandPalette}
    <ul style="position: absolute; top: {commandPalettePosition.y}px; left: {commandPalettePosition.x}px; background: white; border: 1px solid black;">
        <li>Current Command: {currentCommand}</li>
        {#each commands as command}
            <li onclick={() => applyCommand(command)}>{command}</li>
        {/each}
    </ul>
{/if}