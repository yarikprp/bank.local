<template>
    <div class="card">
        <h1 class="card-title">{{ title }}
            <slot name="header"/> </h1>
    </div>

</template>

<script>

    export default {
        props: {
            title: {
                type: String,
                required: true
            }
        },
        setup(props) {
            document.title = `${props.title} | Банк`
        }
    }
</script>
