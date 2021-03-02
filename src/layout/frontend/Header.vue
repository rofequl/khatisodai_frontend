<template>
  <div class="header-wrapper">
    <div class="header-top border-bottom">
      <div class="container-fluid">
        <ul class="nav justify-content-end">
          <li class="nav-item active">
            <a class="nav-link" href="#">Help <i class="fas fa-sm fa-question" style="color: #444;"></i> </a>
          </li>
          <li class="nav-item">
            <a href="" class="nav-link">BN/ENG</a>
          </li>
          <a-dropdown class="nav-item">
            <a class="ant-dropdown-link mt-2" @click="e => e.preventDefault()">
              <i class="fas fa-sm fa-user" style="color: #444;"></i> Account
            </a>
            <a-menu slot="overlay">
              <a-menu-item>
                <div class="welcome-part overflow-hidden">
                  <router-link class="d-block pb-3 font-weight-bold" to="/">Welcome To
                    {{ $store.getters.generalSettings.app_name }}
                  </router-link>
                  <a id="sign-up" class="btn active btn-outline-success btn-sm mr-1"
                     style="background: #f05931;border-color: #f05931;">Join</a>
                  <a id="sign-in" class="btn active btn-outline-success btn-sm"
                     style="background: #f05931;border-color: #f05931;">Sign In</a>
                </div>
              </a-menu-item>
            </a-menu>
          </a-dropdown>
        </ul>
      </div>
    </div>

    <div class="logo-search-section">
      <div class="container">
        <div class="row">
          <div class="col-md-4 col-lg-3 col-xl-3 col-sm-3 col-6">
            <router-link to="/"><img v-if="$store.getters.generalSettings.logo_black"
                                     :src="showImage($store.getters.generalSettings.logo_black)" class="w-25 logo"
                                     alt="Logo"></router-link>
          </div>
          <div class="col-12 col-sm-7 col-md-6 col-lg-7 col-xl-7 mt-2">
            <form action="" method="post">
              <input type="text" placeholder="Search For Products.." size="400"
                     class="form-control rounded-pill position-relative">
              <button type="submit" class="btn btn-success btn-search"><i class="fas fa-search"></i>
              </button>
            </form>
          </div>
          <div class="col-6 col-md-3 col-sm-2 col-lg-2 col-xl-2 mt-2 card-wrapper">
            <a-badge count="1" :number-style="{ backgroundColor: '#52c41a' }">
              <a-avatar :size="34" class="shopping-cart" shape="square" icon="shopping-cart"/>
            </a-badge>
            <a-badge count="1" :number-style="{ backgroundColor: '#52c41a' }">
              <a-avatar :size="34" class="shopping-cart ml-4" shape="square" icon="heart"/>
            </a-badge>
          </div>
        </div>
      </div>
    </div>
    <LoginModal/>
  </div>
</template>

<script>
import LoginModal from "@/components/Account/LoginModal";

export default {
  name: "Header",
  components: {LoginModal}
}
</script>

<style scoped>

.shopping-cart {
  background: white;
  color: black;
}

.shopping-cart >>> i {
  font-size: 32px;
}

.header-top .dropdown-menu {
  left: -75px !important;
}

.header-wrapper {
  position: fixed;
  width: 100%;
  top: 0;
  margin: 0;
  padding: 0;
  z-index: 101;
  box-shadow: 0 0 10px 0 #ac555142;
}
</style>
