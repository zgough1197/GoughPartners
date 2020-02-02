<template>
  <div id="app">
    <b-container>
      <b-navbar toggleable="lg" type="dark" variant="dark">
        <b-navbar-brand>
          <div id="logo">
            stratatas
          </div>
        </b-navbar-brand>
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
}

#logo {
  font-size: 3em;
  font-family: serif;
}

#content {
  margin-top: 12px;
  background: #fff;
  padding: 12px;
}
</style>

<script>

</script>
