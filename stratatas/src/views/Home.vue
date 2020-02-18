<template>
  <div class="home">
    <b-carousel
      id="carouselHome1"
      :interval="6000"
      controls
      indicators
      background="333"
      img-width="1024"
      img-height="360"
      style="text-shadow: 1px 1px 2px #333"
    >
      <b-carousel-slide img-src="https://picsum.photos/1024/360/?image=249">
        <h2>Get a Quote</h2>
        <p>
          Find out what we can do for you with our professional, cost effective
          Owners Corporation management.
        </p>
        <b-button to="/quote" variant="outline-light">Get a Quote Now</b-button>
      </b-carousel-slide>
      <b-carousel-slide img-src="https://picsum.photos/1024/360/?image=1078">
        <h2>Get a Quote</h2>
        <p>
          Find out what we can do for you with our professional, cost effective
          Owners Corporation management.
        </p>
        <b-button to="/quote" variant="outline-light">Get a Quote Now</b-button>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  name: "home"
};
</script>
