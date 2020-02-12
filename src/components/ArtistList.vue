<template>
    <div id="artist-list">
        <table>
            <tbody>
                <tr v-for="artist in artists" :key="artist.id">
                    <td>{{artist.firstname}}</td>
                    <td>{{artist.lastname}}</td>
                    <td>{{artist.dateofbirth}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: 'artist-list',
    props: {
        artists: Array
    }
}
</script>

<style scoped>

</style>