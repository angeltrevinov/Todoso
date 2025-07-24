<script lang="ts">
    import * as Card from "$lib/components/ui/card";

    export let title: string = "Task";
    export let description: string = "Description of the card";
</script>

<Card.Root>
    <Card.Header>
        <Card.Title>
            {title}
        </Card.Title>
    </Card.Header>
    <Card.Content>
        <p>
            {description}
        </p>
    </Card.Content>   
</Card.Root>

