<template>
  <div id="app" v-bind:style="{ 'min-height': windowHeight + 'px' }">
    <b-container fluid id="navbarContainer">
      <div id="logo">
        Stratatas
      </div>
      <b-navbar
        toggleable="md"
        type="dark"
        variant="dark"
      >
        <b-container>
          <b-navbar-toggle target="collapse" />

          <b-collapse id="collapse" is-nav>
            <b-navbar-nav>
              <b-nav-item to="/">Home</b-nav-item>
              <b-nav-item to="/about">About Us</b-nav-item>
            </b-navbar-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
              <b-nav-form>
                <b-button to="/quote" variant="warning">Get a Quote</b-button>
                <b-button to="/" variant="primary">Owner's Portal</b-button>
              </b-nav-form>
            </b-navbar-nav>
          </b-collapse>
        </b-container>
      </b-navbar>
    </b-container>
    <b-container fluid style="padding:0">
      <div id="content">
        <router-view />
      </div>
    </b-container>
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  margin: 0;
  padding: 0;
}

#logo {
  background-color: #007bff;
  color: white;
  font-size: 4em;
  font-family: serif;
  padding: 0;
  width: 100%;
  text-align: center;
}

#content {
  background: #fff;
}

#navbarContainer {
  margin: 0;
  padding: 0;
}

.large {
  padding-bottom: 0;
}
</style>

<script>
export default {
  data() {
    return {
      windowHeight: window.innerHeight,
      windowWidth: window.innerWidth,
    };
  },
  created() {
    window.addEventListener("resize", this.onResize);
  },
  destroyed() {
    window.removeEventListener("resize", this.onResize);
  },
  methods: {
    onResize() {
      this.windowHeight = window.innerHeight;
      this.windowWidth = window.innerWidth;
    }
  }
};
</script>
