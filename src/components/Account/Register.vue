<template>
    <a-form :form="form" class="login-form user-layout-login"
            @submit="handleSubmit">
      <a-form-item class="mb-2">
        <a-input
            placeholder="Enter your first and last name"
            v-decorator="[
                'name',
                {rules: [{ required: true, message: 'You can\'t leave this empty. ' },{max: 50,message: 'Maximum length was 50 character'}]},
              ]">
          <a-icon slot="prefix" type="user" :style="{ color: 'rgba(0,0,0,.25)' }"/>
        </a-input>
      </a-form-item>
      <a-form-item class="mb-2">
        <a-input
            placeholder="Email or Phone number"
            v-decorator="[
                'emailOrMobile',
                {rules: [{ required: true, message: 'You can\'t leave this empty. ' },{max: 50,message: 'Maximum length was 50 character'}]},
              ]">
          <a-icon slot="prefix" type="mail" :style="{ color: 'rgba(0,0,0,.25)' }"/>
        </a-input>
      </a-form-item>
      <b-row>
        <b-col md="6">
          <a-form-item class="mb-2">
            <a-input-password
                placeholder="Password"
                v-decorator="[
                'password',
                {rules: [{ required: true, message: 'Please input your password!' },{max: 20,message: 'Maximum length was 20 character'},
                {min: 6,message: 'Minimum length was 6 character'},{validator: validateToNextPassword},]},
              ]"/>
          </a-form-item>
        </b-col>
        <b-col md="6">
          <a-form-item class="mb-2">
            <a-input-password
                placeholder="Confirm Password"
                @blur="handleConfirmBlur"
                v-decorator="[
                'confirm',
                {rules: [{ required: true, message: 'Please confirm your password!' },{validator: compareToFirstPassword}]},
              ]"/>
          </a-form-item>
        </b-col>
      </b-row>
      <div class="w-100">
          <a-button type="primary" html-type="submit" class="reg-btn" size="large">
            CREATE ACCOUNT
          </a-button>
      </div>
      <div class="form-row justify-content-center mt-2">
        <span class="text-center"
              style="font-size: 12px">By creating an account, you agree to the <br> {{ $store.getters.generalSettings.app_name }}
          <router-link to="/terms-conditions">Terms & Condition</router-link> and <router-link to="/privacy-policy">Privacy Policy</router-link></span>
      </div>
    </a-form>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      confirmDirty: false,
      form: this.$form.createForm(this),
    };
  },
  methods: {
    compareToFirstPassword(rule, value, callback) {
      const form = this.form;
      if (value && value !== form.getFieldValue('password')) {
        callback('Two passwords that you enter is inconsistent!');
      } else {
        callback();
      }
    },
    validateToNextPassword(rule, value, callback) {
      const form = this.form;
      if (value && this.confirmDirty) {
        form.validateFields(['confirm'], {force: true});
      }
      callback();
    },
    handleConfirmBlur(e) {
      const value = e.target.value;
      this.confirmDirty = this.confirmDirty || !!value;
    },
    handleSubmit: function (e) {
      e.preventDefault();
      this.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    }
  }
}
</script>

<style scoped>
>>> .ant-form-explain {
  font-size: 12px;
}

.reg-btn {
  width: 100%;
  border-radius: 3px;
  border: none;
  cursor: pointer;
  font-size: 14px;
  text-transform: uppercase;
  color: #fff;
  background-color: #f05a28;
}
</style>
