<template>
  <div id="app" class="medium-container">
    <h1>Artists</h1>
    
    <artist-form />
    <artist-list v-bind:artists="artists"/>
  </div>
</template>

<script>
import ArtistList from '@/components/ArtistList.vue';
import ArtistForm from '@/components/ArtistForm.vue';

export default {
  name: 'app',
  components: {
    ArtistList,
    ArtistForm
  },
  data() {
    return {
      artists: [
        {
          id: 1,
          firstname: 'Samantha',
          lastname: 'Moonwaler',
          dateofbirth: '05/05/1998',
          contactinfo: {
            phone: '222-222-2222',
            address: {
              street: '21 moon road, apt. 5',
              state: 'Moon',
              city: 'Astro',
              zipcode: '55555',
              country: 'United Stars'
            }
          }
        },
        {
          id: 2,
          firstname: 'Amy',
          lastname: 'Song',
          dateofbirth: '02/02/1995',
          contactinfo: {
            phone: '222-222-0000',
            address: {
              street: '1212 album st., apt. 12',
              state: 'Single',
              city: 'Hit',
              zipcode: '12121',
              country: 'United Songs'
            }
          }
        }
      ]
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
