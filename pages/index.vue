<template>
  <div class="container">
    <h1 class="title">favisnatch</h1>
    <div class="favicon-result">
      <img
        id="preview"
        @error="imageError"
        @load="loaded"
        :src="imageSrc"
        alt="Favicon Result"
      />
    </div>
    <div class="favicon-search">
      <form @submit.prevent>
        <section class="input-control">
          <label for="url">Enter any website url</label>
          <div class="input-actions">
            <input
              v-model="domain"
              :placeholder="disabled ? 'Loading...' : 'superdense.com'"
              type="text"
              name="url"
              id="url"
              :disabled="disabled"
            />
            <button
              v-if="!loading"
              @click="fetchFavicon"
              class="btn btn-success"
              :disabled="disabled"
            >
              Fetch
            </button>
          </div>
        </section>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    disabled: false,
    domain: "",
    imageSrc: "https://fdn.superdense.com/favicon?domain=superdense.web.app",
    loading: false,
  }),
  methods: {
    fetchFavicon() {
      this.imageSrc = "/loader.gif";
      this.disabled = true;

      if (!this.domain) {
        this.domain =
          "https://fdn.superdense.com/favicon?domain=superdense.web.app";
      }

      this.imageSrc =
        "https://fdn.superdense.com/favicon?domain=" +
        this.domain.toLowerCase();

      this.loading = true;
      this.domain = "";
    },
    imageError() {
      this.domain = ``;
      alert("Could not find that site's icon.");
      this.loading = false;
      this.disabled = false;
    },
    loaded() {
      this.disabled = false;
      this.domain = "";
      this.loading = false;
    },
  },
};
</script>

<style></style>
