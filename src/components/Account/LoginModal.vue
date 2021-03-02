<template>
  <a-modal
      title=""
      :visible="visible" :footer="null" :width="450"
      @cancel="cancelForm">
    <a-tabs @change="handleTabClick" :activeKey="customActiveKey"
            :tabBarStyle="{ textAlign: 'center', borderBottom: 'unset' }">
      <a-tab-pane key="tab1" tab="REGISTER">
        <Register/>
      </a-tab-pane>
      <a-tab-pane key="tab2" tab="SIGN IN">

      </a-tab-pane>
    </a-tabs>
    <Social/>
  </a-modal>
</template>

<script>
import Register from "@/components/Account/Register";
import Social from "@/components/Account/Social";

export default {
  name: "LoginModal",
  components: {Social, Register},
  data() {
    return {
      visible: true,
      customActiveKey: 'tab1',
    };
  },
  methods: {
    modal() {
      this.visible = true;
    },
    cancelForm() {
      this.$refs.ruleForm.resetFields();
      this.visible = false;
    },
    handleTabClick(key) {
      this.customActiveKey = key
    },
  }
}
</script>

<style scoped>

</style>
