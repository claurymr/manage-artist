<template>
    <div id="artist-form">
        <form @submit.prevent="handleSubmit">
            <label>First Name</label>
            <input v-model="artist.firstname" type="text" />
            <label>Last Name</label>
            <input v-model="artist.lastname" type="text" />
            <label>Date Of Birth</label>
            <input v-model="artist.dateofbirth" type="datetime" />
            <button>Add Artist</button>
        </form>
    </div> 
</template>

<script>
export default {
    name: 'artist-form',
    data() {
        return {
            artist: {
                firstname: '',
                lastname: '',
                dateofbirth: ''
            }
        }
    },
    methods: {
    handleSubmit(){
      console.log('testing handleSubmit')
    }
  }
}
</script>

<style scoped>
    form {
        margin-bottom: 2rem;
    }
</style>