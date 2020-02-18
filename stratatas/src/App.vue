<template>
  <div id="app" v-bind:style="{ 'min-height': windowHeight + 'px' }">
    <b-container fluid id="navbar">
      <b-navbar
        toggleable="lg"
        type="dark"
        variant="dark"
        style="margin: 0; padding: 0 24px 0 24px;"
      >
        <b-container>
          <b-navbar-brand id="logo">
            Stratatas
          </b-navbar-brand>

          <b-navbar-toggle
            target="large"
            style="right: 0px; position: absolute;"
          ></b-navbar-toggle>

          <b-collapse id="large" is-nav>
            <b-navbar-nav>
              <b-nav-item to="/">Home</b-nav-item>
              <b-nav-item to="/about">About</b-nav-item>
              <b-nav-item to="/qupte">Get a Quote</b-nav-item>
            </b-navbar-nav>
          </b-collapse>
        </b-container>
      </b-navbar>
    </b-container>
    <b-container>
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
  background-image: url("/resources/bg.png");
  margin: 0;
  padding: 0;
}

#logo {
  font-size: 3em;
  font-family: serif;
  width: 100%;
  text-align: center;
}

#content {
  margin-top: 32px;
  background: #fff;
  padding: 24px;
  box-shadow: 0px 0px 48px 0px #777;
}

#navbar {
  margin: 0;
  padding: 0;
}
</style>

<script>
export default {
  el: "#app",
  data() {
    return {
      windowHeight: window.innerHeight,
      lastScrollPos: 0,
      scrollingDown: false
    };
  },
  mounted: function() {
    window.addEventListener("resize", this.onResize);
    window.addEventListener("scroll", this.scroll);
  },
  destroyed: function() {
    window.removeEventListener("resize", this.onResize);
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    onResize: function() {
      this.windowHeight = window.innerHeight;
    },
    onScroll: function() {
      this.scrollingDown = window.scrollY > this.lastScrollPos;
      this.lastScrollPos = window.scrollY;
      console.log(this.scrollingDown);
    }
  }
};
</script>
