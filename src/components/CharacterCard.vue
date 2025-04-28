<script setup>
defineProps(['characters']);
</script>

<template>
    <div class="column is-multiline">
        <div v-for="character in characters" class="column is-one-quarter">
            <div class="card">
                <header class="card-header">
                    <p class="card-header-title">{{ character.name }}</p>
                </header>
                <div class="card-image">
                    <figure class="image is-4by3">
                        <img :src="character.image" alt="Placeholder image" />
                    </figure>
                </div>
                <div class="card-content">
                    <div class="content">
                        <table>
                            <tbody>
                                <tr>
                                    <td>Status</td>
                                    <td>{{ character.status }}</td>
                                </tr>
                                <tr>
                                    <td>Gender</td>
                                    <td>{{ character.gender }}</td>
                                </tr>
                                <tr>
                                    <td>Species</td>
                                    <td>{{ character.species }}</td>
                                </tr>
                                <tr>
                                    <td>Location</td>
                                    <td>{{ character.location }}</td>
                                </tr>
                                <tr>
                                    <td>Origin</td>
                                    <td>{{ character.name }}</td>
                                </tr>
                                <tr>
                                    <td>Episodes</td>
                                    <td>{{ character.episode.Length }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<style scoped>
.card {
    min-height: 100%;
}
</style>