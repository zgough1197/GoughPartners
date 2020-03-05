<template>
  <div
    id="app"
    v-bind:style="{ 'min-height': windowHeight + 'px', width: windowWidth }"
  >
    <b-container fluid id="navbarContainer">
      <b-navbar toggleable="sm" type="dark" variant="secondary">
        <b-container>
          <b-navbar-brand id="logosTitle" class="bg-secondary text-white">
            The Gough Group
          </b-navbar-brand>

          <b-navbar-toggle target="collapseOver"></b-navbar-toggle>

          <b-collapse id="collapseOver" is-nav v-if="isSm">
            <b-navbar-nav>
              <b-nav-item to="/">Home</b-nav-item>
              <b-nav-item to="/about">About Us</b-nav-item>
              <b-nav-item to="/services">Our Services</b-nav-item>
              <b-nav-item to="/resources">Resources</b-nav-item>
            </b-navbar-nav>
          </b-collapse>
        </b-container>
      </b-navbar>
      <b-container id="logos">
        <b-row style="align-items: center;">
          <b-col lg="8" md="12">
            <router-link to="/" style="text-decoration:none;color:black">
              <img src="/resources/stratatas.jpg" height="150" />
              <div class="subtitle">
                Launceston
              </div>
            </router-link>
          </b-col>
          <b-col lg="4" md="12">
            <hr v-if="isLg" />
            <div class="subtitle" style="font-size:0.6em">
              Other Locations
            </div>
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
      <b-navbar toggleable="sm" type="dark" variant="secondary">
        <b-container>
          <b-collapse id="collapseUnder" is-nav>
            <b-navbar-nav>
              <b-nav-item to="/">Home</b-nav-item>
              <b-nav-item to="/about">About Us</b-nav-item>
              <b-nav-item to="/services">Our Services</b-nav-item>
              <b-nav-item to="/resources">Resources</b-nav-item>
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
    <div id="footer" class="text-light bg-secondary">
      <b-container>
        Test
      </b-container>
    </div>
  </div>
</template>

<style lang="scss">
@import "assets/customBootstrap.scss";

@import "~bootstrap/scss/bootstrap.scss";
@import "~bootstrap-vue/src/index.scss";
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
  overflow-x: hidden;
  position: relative;
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

#footer {
  bottom: 0px;
  position: absolute;
  width: 100%;
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
  computed: {
    isSm: function() {
      return this.windowWidth <= 576;
    },
    isLg: function() {
      return this.windowWidth <= 992;
    }
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
