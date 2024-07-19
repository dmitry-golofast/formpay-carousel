<template>
  <!-- <pre>{{ mainStore.personInfo }}</pre> -->
  <div class="carousel">
    <button class="carousel-button" @click="prev">Previous</button>
    <div class="carousel-wrapper">
      <div v-for="item in visibleItems" :key="item.id" class="carousel-item">
        <div class="carousel-link" @click="onClickPerson(item)">
          <img
            :src="`https://api.smotrim.ru/api/v1/pictures/${item.picId}/bq/redirect`"
            :alt="item.title"
            class="carousel-image"
          />
          <div class="carousel-title">{{ item.title }}</div>
        </div>
      </div>
    </div>
    <button class="carousel-button" @click="next">Next</button>
  </div>
  <TrimModal v-model="isRenderTrimModal">
    <template #header>
      <img :src="modalImage" :alt="modalTitle" class="modal-image" />
      <span class="carousel__modal-title">{{ modalTitle }}</span>
    </template>
    <template #content>
      <div
        v-if="mainStore.personInfo"
        class="carousel__html"
        v-html="sanitizeHTML(mainStore.personInfo.data?.body)"
      ></div>
    </template>
  </TrimModal>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';
import { useToggle } from '@vueuse/core';
import DOMPurify from 'dompurify';

import { useMainStore } from '../../stores';

import TrimModal from '@/components/TrimModal.vue';

const mainStore = useMainStore();

const currentIndex = ref(0);
const modalImage = ref();
const modalTitle = ref('');
const itemsToShow = 4;
const [isRenderTrimModal, toggleTrimModal] = useToggle();

const sanitizeHTML = (html) => {
  return DOMPurify.sanitize(html);
};

const visibleItems = computed(() => {
  const start = currentIndex.value;
  const end = start + itemsToShow;
  return mainStore.vestiPersons.slice(start, end);
});

const prev = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--;
  }
};

const next = () => {
  if (currentIndex.value < mainStore.vestiPersons.length - itemsToShow) {
    currentIndex.value++;
  }
};

const onClickPerson = async (item: any) => {
  modalImage.value = `https://api.smotrim.ru/api/v1/pictures/${item.picId}/bq/redirect`;
  modalTitle.value = item.title;
  mainStore.getPersonInfo(item.id);
  toggleTrimModal(true);
};

mainStore.getVestiPersons();
</script>

<style lang="scss" scoped>
.carousel {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 500px;

  &__modal-title {
    font-size: 32px;
    font-weight: 700;
  }
}

.carousel-wrapper {
  display: flex;
  overflow: hidden;
  width: 100%;
  justify-content: space-between;
}

.carousel-items {
  display: flex;
  transition: transform 0.3s ease;
}

.carousel-item {
  flex: 0 0 auto;
  width: calc(100% / 5);
  cursor: pointer;

  :hover {
    opacity: 0.7;
  }
}

.carousel-image {
  width: 100%;
  height: auto;
  border-radius: 100%;
}

.modal-image {
  width: 30%;
  border-radius: 10px;
}

.carousel-title {
  text-align: center;
}

.carousel-button {
  background-color: #0750aa;
  color: #fff;
  border: none;
  padding: 10px;
  cursor: pointer;
  border-radius: 4px;
}

.carousel-button:hover {
  background-color: #7097be;
}
</style>
