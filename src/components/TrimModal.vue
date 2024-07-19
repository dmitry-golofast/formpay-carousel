<template>
  <div v-if="model" class="trimmodal__wrapper"></div>
  <div v-if="model" ref="target" class="trimmodal__container">
    <div class="trimmodal__header">
      <slot name="header"></slot>
    </div>
    <div class="trimmodal__contant">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';
import { onClickOutside } from '@vueuse/core';

const props = defineProps({
  modelValue: Boolean,
});

const emits = defineEmits(['select', 'close', 'update:model-value']);

const target = ref<HTMLDivElement>();
const model = computed({ get: () => props.modelValue, set: (value) => emits('update:model-value', value) });

const onClickOutsideModal = () => {
  model.value = false;
  emits('close');
};

onClickOutside(target, onClickOutsideModal);
</script>

<style lang="scss" scoped>
.trimmodal {
  &__container {
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    flex-direction: column;
    background-color: #ffffff;
    width: 500px;
    padding: 2em;
    border: 1px solid rgb(195, 186, 224);
    border-radius: 1em;
    height: 500px;
    overflow: scroll;
    overflow-x: hidden;
    margin-top: 10px;

    z-index: 1000;
  }

  &__wrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: #0000001f;
    backdrop-filter: blur(10px);
    z-index: 999;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__header {
    display: flex;
    gap: 12px;
  }

  &__contant {
    margin-top: 10px;
  }
}
</style>
