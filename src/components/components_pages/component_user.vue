<template>
  <div>
    <componentHeads></componentHeads>
    <div class="row col-lg-12 col-md-12 col-sm-12">
      <div class="col-lg-12 col-md-12 col-sm-12">
        <div class="card">
          <div class="card-header"><h3>USER</h3> <br>
            <b-button v-b-modal.modal-prevent-closing>Open Modal</b-button>
            <b-modal
              id="modal-prevent-closing"
              ref="modal"
              title="Input User"
              @ok="handleOk"
            >
              <form ref="form" @submit.stop.prevent="handleSubmit">
                <b-form-group
                  label="Name"
                  label-for="name-input"
                  invalid-feedback="Name is required">
                  <b-form-input
                    id="name-input"
                    v-model="input_name"
                    required
                  ></b-form-input>
                </b-form-group>

                <b-form-group
                  label="Roles">
                  <b-form-select v-model="input_roles" :options="options"></b-form-select>
                </b-form-group>

                <b-form-group
                  label="Password"
                  label-for="name-input"
                  invalid-feedback="Password is required">
                  <b-form-input
                    id="password-input"
                    v-model="input_password"
                    type="password"
                    required
                  ></b-form-input>
                </b-form-group>

                <b-form-group
                  label="Confirmation Password"
                  label-for="name-input"
                  invalid-feedback="Confirmation Password is required">
                  <b-form-input
                    id="confirmation_password-input"
                    v-model="input_confirmation_password"
                    type="password"
                    required
                  ></b-form-input>
                </b-form-group>


              </form>
            </b-modal>
          </div>
          <div class="card-body">
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

  export default {
    name: 'user',
    data () {
      return {
        input_name: '',
        input_password: '',
        input_roles: '',
        input_confirmation_password: '',
        input_roles: null,
        options: [
          {value: null, text: 'Please select an option'},
          {value: '1', text: 'Super Admin'},
          {value: '2', text: 'User'}
        ]
      }
    },
    components: {
      'componentHeads': componentHeader
    }, methods: {
      handleSubmit () {
        var datas = {
          input_name: this.input_name,
          input_roles : this.input_roles,
          input_password: this.input_password,
          input_confirmation_password : this.input_confirmation_password
        }
        console.log(datas)
      },
      handleOk (bvModalEvt) {
        // Prevent modal from closing
        bvModalEvt.preventDefault()
        // Trigger submit handler
        this.handleSubmit()
      },
    }
  }
</script>
