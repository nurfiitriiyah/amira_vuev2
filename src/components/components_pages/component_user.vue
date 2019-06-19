<template>
  <div>
    <componentHeads></componentHeads>
    <div class="row col-lg-12 col-md-12 col-sm-12">
      <div class="col-lg-12 col-md-12 col-sm-12">
        <div class="card">
          <div class="card-header"><h3>USER</h3> <br>

            <b-button class="btn btn-success btn-sm" v-b-modal.modal-1>Add User</b-button>
            <b-modal id="modal-1" title="BootstrapVue">
              <p class="my-4">Hello from modal!</p>
            </b-modal>


          </div>
          <div class="card-body">
            <table class="table table-striped">
              <thead>
              <tr>
                <td>No</td>
                <td>Nama</td>
                <td>Role</td>
                <td>Username</td>
                <td>Action</td>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>1</td>
                <td>Pite</td>
                <td>Admin</td>
                <td>fitriadmin</td>
                <td>
                  <button class="btn btn-warning btn-sm">Edit</button>
                  <button class="btn btn-primary btn-sm">Detail</button>
                </td>
              </tr>
              </tbody>
              <tfoot>
              <tr>
                <td>No</td>
                <td>Nama</td>
                <td>Role</td>
                <td>Username</td>
                <td>Action</td>
              </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>
<script>
  import componentHeader from '../components_layouts/component_heads'

  const axios = require('axios')
  const API_URL = 'http://localhost:10009/dashboard'
  import {Bar} from 'vue-chartjs'

  export default {

    name: 'user',
    data () {
      return {
        datas: {},
      }
    },
    components: {
      'componentHeads': componentHeader
    },
  }
</script>
