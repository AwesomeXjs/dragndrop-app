<script setup lang="ts">
import { ref, watch } from 'vue'
import AppPage from '@/pages/AppPage.vue'

const inputValue = ref<boolean>(false)

const changeTheme = () => {
  if (inputValue.value === true) {
    document.documentElement.setAttribute('light', '')
  } else {
    document.documentElement.removeAttribute('light')
  }
}

watch(inputValue, () => {
  changeTheme()
})
</script>

<template>
  <div class="changeTheme">
    <label id="switch" class="switch">
      <input v-model="inputValue" type="checkbox" id="slider" />
      <span class="slider round"></span>
    </label>
  </div>
  <div class="container">
    <AppPage />
  </div>
</template>

<style scoped lang="scss">
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: '';
  height: 40px;
  width: 40px;
  left: 0px;
  bottom: 4px;
  top: 0;
  bottom: 0;
  margin: auto 0;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  box-shadow: 0 0px 15px #2020203d;
  background: white url('https://i.ibb.co/FxzBYR9/night.png');
  background-repeat: no-repeat;
  background-position: center;
}

input:checked + .slider {
  background-color: #2196f3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196f3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(24px);
  -ms-transform: translateX(24px);
  transform: translateX(24px);
  background: white url('https://i.ibb.co/7JfqXxB/sunny.png');
  background-repeat: no-repeat;
  background-position: center;
}

.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}

.changeTheme {
  display: flex;
  justify-content: center;
  padding-top: 20px;
}
</style>
