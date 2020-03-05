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
      <b-carousel-slide img-src="https://picsum.photos/id/351/1024/360/">
        <h2>Get a Quote</h2>
        <p>
          Find out what we can do for you with our professional, cost effective
          Owners Corporation management.
        </p>
        <b-button to="/quote" variant="outline-light">
          Get a Quote Now
        </b-button>
      </b-carousel-slide>
      <b-carousel-slide img-src="https://picsum.photos/id/352/1024/360/">
        <h2>Our Services</h2>
        <p>
          Learn more about the high quality services we have to offer.
        </p>
        <b-button to="/services" variant="outline-light">
          See Our Services
        </b-button>
      </b-carousel-slide>
      <b-carousel-slide img-src="https://picsum.photos/id/358/1024/360/">
        <h2>Owners Resources</h2>
        <p>
          View the resources relevant to your property.
        </p>
        <b-button to="/resources" variant="outline-light">
          View Resources
        </b-button>
      </b-carousel-slide>
    </b-carousel>
    <h1>Test</h1>
  </div>
</template>

<script>
export default {
  name: "home"
};
</script>
