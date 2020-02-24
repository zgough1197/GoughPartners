<template>
  <div id="app" v-bind:style="{ 'min-height': windowHeight + 'px' }">
    <b-container fluid id="navbarContainer">
      <div id="logosTitle" class="bg-secondary text-white">
        The Gough Group
      </div>
      <b-container id="logos">
        <b-row style="align-items: end;">
          <b-col md="8" sm="12">
            <router-link to="/" style="text-decoration:none;color:black">
              <img src="/resources/stratatas.jpg" height="150" />
              <div class="subtitle">
                Launceston
              </div>
            </router-link>
          </b-col>
          <b-col md="4" sm="12">
            <div class="subtitle" style="font-size:0.6em">
              Other Locations
            </div>
            <hr/>
            <b-row>
              <b-col cols="6">
                <a
                  href="https://www.goughpartners.com.au"
                  style="text-decoration:none;color:black"
                >
                  <img src="/resources/goughpartners.png" height="60" />
                  <div class="subtitle">
                    Melbourne
                  </div>
                </a>
              </b-col>
              <b-col cols="6">
                <a
                  href="http://www.taspropertygroup.com.au"
                  style="text-decoration:none;color:black"
                >
                  <img src="/resources/tasstrata.png" height="60" />
                  <div class="subtitle">
                    Hobart
                  </div>
                </a>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-container>
      <b-navbar toggleable="md" type="dark" variant="secondary">
        <b-container>
          <b-navbar-toggle target="collapse" />

          <b-collapse id="collapse" is-nav>
            <b-navbar-nav>
              <b-nav-item to="/">Home</b-nav-item>
              <b-nav-item to="/about">About Us</b-nav-item>
            </b-navbar-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
              <b-nav-form id="navButtons">
                <b-button to="/quote" variant="primary">Get a Quote</b-button>
                <b-button
                  href="https://www.lookatmystrata.com.au/login/999562"
                  variant="primary"
                >
                  Owner's Portal
                </b-button>
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

<style lang="scss">
@import "assets/customBootstrap.scss";

@import '~bootstrap/scss/bootstrap.scss';
@import '~bootstrap-vue/src/index.scss';
</style>

<style>
@font-face {
  font-family: aPompodour;
  font-style: normal;
  src: url(/resources/APompodour.otf);
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  margin: 0;
  padding: 0;
}

#logosTitle {
  font-family: aPompodour, Arial, sans-serif;
  text-align: center;
  font-size: 1.2em;
}

#logos {
  background-color: #fff;
  font-family: aPompodour, Arial, sans-serif;
  color: dark-grey;
  font-size: 2em;
  padding: 0;
  width: 100%;
  text-align: center;
}

.subtitle {
  font-size: 0.4em;
  font-family: aPompodour, Arial, sans-serif;
  font-variant: small-caps;
  padding: 6px;
}

#navButtons * {
  margin: 0 3px 0 3px;
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
      windowWidth: window.innerWidth
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
