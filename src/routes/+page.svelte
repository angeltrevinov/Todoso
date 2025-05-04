<script lang="ts">
    let canvasElement: HTMLCanvasElement;
    let isDrawing = false;
    let prevX = 0;
    let prevY = 0;

    $effect(() => {
        calculateCanvasSize();
    });

    /**
     *  FIXME: The pencil/touch activates the browser's scroll
     *  - Use the draw area as a text area and disable scroll inside? 
    */
    function calculateCanvasSize() {
        const parent = canvasElement.parentElement;
        if (parent) {
            const rect = parent.getBoundingClientRect();
            const viewportHeight = window.innerHeight;
            const viewportWidth = window.innerWidth;

            // Ensure the canvas does not overflow the viewport
            const availableWidth = Math.min(rect.width, viewportWidth);
            const availableHeight = Math.min(rect.height, viewportHeight);

            canvasElement.style.maxWidth = `${availableWidth}px`;
            canvasElement.style.maxHeight = `${availableHeight}px`;
            canvasElement.width = availableWidth;
            canvasElement.height = availableHeight;
        } else {
            canvasElement.width = 500;
            canvasElement.height = 500;
        }
    }

    function startDrawing(event: MouseEvent) {
        isDrawing = true;
        prevX = event.offsetX;
        prevY = event.offsetY;
    }

    function startTouchDrawing(event: TouchEvent) {
        isDrawing = true;
        const touch = event.touches[0];
        const rect = canvasElement.getBoundingClientRect();
        prevX = touch.clientX - rect.left;
        prevY = touch.clientY - rect.top;
    }

    function stopDrawing() {
        isDrawing = false;
    }

    function draw(event: MouseEvent) {
        if (!isDrawing) return;

        const ctx = canvasElement.getContext('2d');
        if (!ctx) return;

        ctx.strokeStyle = 'black';
        ctx.lineCap = 'round';
        ctx.lineWidth = 5;

        ctx.beginPath();
        ctx.moveTo(prevX, prevY);
        ctx.lineTo(event.offsetX, event.offsetY);
        ctx.stroke();

        prevX = event.offsetX;
        prevY = event.offsetY;
    }

    function drawTouch(event: TouchEvent) {
        if (!isDrawing) return;

        const ctx = canvasElement.getContext('2d');
        if (!ctx) return;

        const touch = event.touches[0];
        const rect = canvasElement.getBoundingClientRect();
        const currentX = touch.clientX - rect.left;
        const currentY = touch.clientY - rect.top;

        ctx.strokeStyle = 'black';
        ctx.lineWidth = 5;

        ctx.beginPath();
        ctx.moveTo(prevX, prevY);
        ctx.lineTo(currentX, currentY);
        ctx.stroke();

        prevX = currentX;
        prevY = currentY;
    }
</script>

<h1 class="text-3xl font-bold underline">
    Drawing Demo
</h1>

<canvas
    bind:this={canvasElement}
    onmousedown={startDrawing} 
    ontouchstart={startTouchDrawing}
    onmouseup={stopDrawing} 
    ontouchend={stopDrawing}
    onmousemove={draw}
    ontouchmove={drawTouch} 
    >
    <p>  2D context not supported </p>
</canvas>