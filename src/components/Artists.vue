<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <nav>
                    <div class="row">
                        <div class="col-sm-10">
                            <h1>Artists</h1>
                        </div>
                        <div class="col-sm-2">
                            <button type="button" class="btn text-success btn-success btn-sm soft-shadow outer-action-btn action-btn"><font-awesome-icon icon="user-plus" class="action-btn-font"/></button>
                        </div>
                    </div>
                </nav>                
                <ul class="no-style-list">
                    <li v-for="(artist, index) in artists" :key="index">
                        <div class="card soft-shadow">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-sm-8">
                                        <h5 class="card-title">{{artist.firstName}} {{artist.lastName}}</h5>
                                        <p><span>Date of Birth: </span>{{artist.dateOfBirth}}</p>
                                        <p>{{artist.contactInfo.street}}, {{artist.contactInfo.city}}, {{artist.contactInfo.state}}, {{artist.contactInfo.zipcode}}</p>
                                        <p>{{artist.contactInfo.phone}}</p>
                                    </div>
                                    <div class="col-sm-4">
                                        <div>
                                            <button 
                                            type="button" 
                                            class="btn text-danger btn-sm soft-shadow card-action-btn action-btn">
                                                <font-awesome-icon icon="trash-alt"/>
                                            </button>
                                            <button 
                                            type="button"
                                             class="btn text-success btn-sm soft-shadow card-action-btn action-btn">
                                                <font-awesome-icon icon="user-edit"/>
                                             </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'artists',
    data() {
        return {
            artists: []
        }
    },
    methods: {
        getArtists() {
        const path = 'http://localhost:5000/artists';
        axios.get(path)
            .then((res) => {
            this.artists = res.data.artists;
            })
            .catch((error) => {
            // eslint-disable-next-line
            console.error(error);
            });
        },
    },
    created() {
        this.getArtists();
    }
};
</script>

<style scoped>
    nav {
        margin: 0 1em 3em 1em;
    }

    .soft-shadow {
        border-radius: 1em;
        border: none;
        background: #d3dae4;
        box-shadow:  11px 11px 22px #b3b9c2, 
             -11px -11px 22px #f3fbff,
             4px 4px 10px rgba(255, 255, 255, 0.5);
    }

    .action-btn {
        float: right;
    }

    .outer-action-btn {
        border-radius: 50%;
        width: 5em;
        height: 5em;
    }

    .action-btn-font {
        font-size: 2em;
    }

    .card-action-btn {
        margin-right: 0.5em;
        width: 3em;
    }

    .card {
        margin-bottom: 1.5em;
    }
</style>