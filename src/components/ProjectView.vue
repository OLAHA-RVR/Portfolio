<script setup>
const props = defineProps([
  "display",
  "title",
  "date",
  "technology",
  "links",
  "imageLinks",
]);

const emit = defineEmits(["close"]);

function closeModal() {
  emit("close");
}
</script>

<template>
  <section class="modal-container" v-if="display">
    <div class="modal-content">
      <button class="close-button" @click="closeModal">&times;</button>
      <div class="data-holder">
        <h2 id="modal-title">{{ title }}</h2>
      </div>
      <div class="data-holder">
        <h3 class="title">Date:</h3>
        <p>{{ date }}</p>
      </div>
      <div class="data-holder">
        <h3 class="title">Technology:</h3>
        <p>{{ technology }}</p>
      </div>
      <div class="data-holder">
        <h3 class="title">Link to site/repository:</h3>
        <a :href="links" target="_blank" class="link">Click here</a>
      </div>
      <div class="data-holder">
        <h3 class="title">Link to image example:</h3>
        <a :href="imageLinks" target="_blank" class="link">View Image</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.modal-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 90%;
  max-width: 500px;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
}
</style>
