<template>
  <div class="">
    <div class="wrapper">
      <div ref="card" class="credit-card">
        <div class="card-front">
          <div class="branding">
            <img src="@/assets/chip.png" class="chip-img" />
            <img src="@/assets/visa.png" class="visa-logo" />
          </div>
          <div class="card-number">
            <span>0000 0000 0000 0000 0000</span>
          </div>
          <div class="details">
            <div>
              <span>Card Holder</span>
              <span id="card-holder-name">IVAN IVANOV</span>
            </div>
            <div>
              <span>Expires</span>
              <span id="validity">06/28</span>
            </div>
          </div>
        </div>
        <div class="card-back">
          <div class="black-strip"></div>
          <div class="white-strip">
            <span>CVV</span>
            <div id="cvv-display"></div>
          </div>
          <img src="@/assets/visa.png" class="visa-logo" />
        </div>
      </div>
      <form>
        <label for="card-number">Номер карты</label>
        <input id="card-number" type="number" placeholder="0000 0000 0000 0000 0000" />

        <label for="card-holder">Имя держателя карты (Card Holder):</label>
        <input id="card-name-input" type="text" placeholder="IVAN IVANOV" />

        <div class="date-cvv">
          <div>
            <label for="validity">Срок (Expires On):</label>
            <input id="validity-input" type="month" />
          </div>
          <div>
            <label for="cvv">CVV:</label>
            <input id="cvv" ref="target" type="number" placeholder="***" @click="flip" />
          </div>
        </div>
      </form>
      <button class="button">Отправить</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { onClickOutside } from '@vueuse/core';

const target = ref<HTMLInputElement>();
const card = ref<HTMLDivElement>();

const flip = () => {
  if (!card.value) return;
  card.value.style.transform = 'rotateY(180deg)';
};

onClickOutside(target, () => {
  if (!card.value) return;
  card.value.style.transform = '';
});
</script>
<style lang="scss" scoped>
body {
  background-color: #a6c4e8;
}
.wrapper {
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
}
.credit-card {
  position: relative;
  width: 350px;
  height: 220px;
  margin: auto;
  transform-style: preserve-3d;
  transition: 0.3s;
}
.card-front,
.card-back {
  position: absolute;
  width: inherit;
  height: inherit;
  background: linear-gradient(#33a4f8, #206df9);
  border-radius: 1em;
  backface-visibility: hidden;
}
.card-front {
  padding: 2em 1em;
}
.branding {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.branding img {
  width: 50px;
  height: auto;
}
.card-back {
  position: absolute;
  transform: rotateY(180deg);
}
.card-number {
  color: #ffffff;
  font-weight: 600;
  display: flex;
  justify-content: center;
  font-size: 1.2em;
  margin-top: 1em;
  font-family: Rubik, sans-serif;
  font-family: 'Roboto Mono', monospace;
}
.details {
  color: #ffffff;
  display: flex;
  justify-content: space-between;
  margin-top: 1.5em;
  font-size: 0.8em;
}
.details span {
  display: block;
}
.details #card-holder-name {
  text-transform: uppercase;
}
.card-back .black-strip {
  position: relative;
  background-color: #000000;
  height: 50px;
  top: 2em;
}
.card-back .white-strip {
  top: 3em;
  position: relative;
  text-align: right;
}
.card-back .white-strip span {
  margin-right: 1em;
}
.card-back .white-strip div {
  height: 30px;
  background-color: #ffffff;
  margin-top: 0.5em;
}
.card-back .visa-logo {
  position: absolute;
  width: 50px;
  margin-top: 4em;
  right: 1em;
}
form {
  margin-top: 2em;
}
label,
input {
  display: block;
}
label {
  margin-bottom: 0.5em;
  font-weight: 600;
}

label {
  margin-bottom: 0.5em;
  font-weight: 600;
}
input {
  width: 100%;
  border: 1px solid #000000;
  padding: 0.5em;
  border-radius: 0.5em;
}
input:not(:last-child) {
  margin-bottom: 1em;
}
form .date-cvv {
  display: flex;
  justify-content: space-between;
}
.button {
  border: none;
  padding: 1em;
  border-radius: 0.5em;
  background-color: rgb(138, 107, 248);
  margin-top: 2em;
  width: 10em;

  &:hover {
    background-color: rgb(195, 186, 224);
  }
}
</style>
