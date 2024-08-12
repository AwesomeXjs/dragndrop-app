<script setup lang="ts">
import { useDragNDropStore } from '@/store/useStore'
const store = useDragNDropStore()
</script>

<template>
  <div class="app_table">
    <div
      @click="store.item_content_show = false"
      v-if="store.item_content_show"
      class="modal_back"
    ></div>
    <div
      v-for="(slot, index) in 25"
      :key="index"
      class="droppable"
      @drop="store.onDrop($event, index)"
      @dragover.prevent
      @dragenter.prevent
    >
      <div
        v-for="item in store.items.filter((item) => item.slot === index)"
        :key="item.id"
        @dragstart="store.onDragStart($event, item)"
        class="draggable"
        draggable="true"
        @click="store.showContent(item)"
      >
        <img :src="item.img" alt="item" />
        <div class="reactive_number">
          {{ item.reactive_number }}
        </div>
        <div class="drag_wrapper"></div>
      </div>
    </div>
    <transition-group name="fade">
      <div v-if="store.item_content_show" class="item_content">
        <div class="content_wrapper">
          <div @click="store.item_content_show = false" class="cross"></div>
          <div class="content_header">
            <div class="content_img">
              <img class="content_avatar" :src="store.current_item?.img" alt="avatar" />
            </div>

            <div class="content_text">
              <div class="content_title"></div>
              <div class="content_descr"></div>
              <div class="content_descr"></div>
              <div class="content_descr"></div>
            </div>
          </div>
          <div class="content_actions">
            <input
              v-model.number="store.number_of_del_item"
              class="content_input"
              type="text"
              placeholder="Введите количество"
            />
            <div v-if="store.item_del_confirm_show" class="content_buttons">
              <button @click="store.item_del_confirm_show = false" class="cancel_btn">
                Отмена
              </button>
              <button @click="store.del_number(store.current_item!)" class="confirm_btn">
                Подтвердить
              </button>
            </div>
            <button @click="store.item_del_confirm_show = true" v-else class="delete_item_btn">
              Удалить предмет
            </button>
          </div>
        </div>
      </div>
    </transition-group>
  </div>
</template>

<style scoped lang="scss">
.app_table {
  position: relative;
  background-color: var(--var-border);
  width: 67%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 1px;
  border-radius: var(--var-border-radius);
  box-sizing: content-box;
  overflow: hidden;
  border: 1px solid var(--var-border);
}

.item_content {
  position: absolute;
  right: 0;
  height: 100%;
  border-left: 1px solid var(--var-border);
  background-color: var(--var-background-card);
  z-index: 10;
}

.content_wrapper {
  position: relative;
}
.content_header {
  border-bottom: 1px solid var(--var-border);
  padding: 10px 20px;
  animation: skeleton_animation 1s linear infinite alternate;
}

.content_img {
  padding: 40px 40px 30px 40px;
  border-bottom: 1px solid var(--var-border);
  margin-bottom: 16px;
}
.content_title {
  width: 100%;
  min-height: 30px;
  background: var(--var-bcc-gradient);
  border-radius: var(--var--skeleton-border-radius);
  margin-bottom: 24px;
}

.content_descr {
  width: 100%;
  min-height: 10px;
  background: var(--var-bcc-gradient);
  border-radius: var(--var-skeleton-text-border-radius);
  margin-bottom: 16px;
}

.content_actions {
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.content_input {
  width: 100%;
  background-color: var(--var-background-card);
  color: var(--var-text);
  padding: 11px;
  border-radius: 4px;
  margin-bottom: 16px;
  appearance: none;
  border: 1px solid var(--var-border);
  outline: none;
}

.delete_item_btn {
  background-color: var(--var-background-delete-button);
  width: 100%;
  padding: 11px 0;
  border-radius: var(--var--skeleton-border-radius);
  cursor: pointer;
  &:hover {
    background-color: var(--var-background-delete-button);
  }
}
.content_buttons {
  width: 100%;
  display: flex;
  justify-content: space-between;
  & button {
    padding: 8px 15px;
  }
}
.cancel_btn {
  color: var(--var-cancel-button);
  background-color: var(--var-background-cancel-button);
  border-radius: var(--var--skeleton-border-radius);
}
.confirm_btn {
  border-radius: var(--var--skeleton-border-radius);
  color: var(--var-text);
  background-color: var(--var-background-delete-button);
}
.confirm_btn,
.cancel_btn {
  &:hover {
    cursor: pointer;
  }
}

.cross {
  position: absolute;
  top: 10px;
  right: 5px;
  width: 12px;
  height: 12px;
  opacity: 1;
  cursor: pointer;
  transition: opacity ease 0.5s;
  z-index: 10;
}

.cross::before,
.cross::after {
  content: '';
  position: absolute;
  top: 10px;
  right: 0;
  display: block;
  width: 16px;
  height: 1px;
  background: #ffffff;
}

.cross::before {
  transform: rotate(45deg);
}

.cross::after {
  transform: rotate(-45deg);
}

.droppable {
  width: 19.8%;
  background-color: var(--var-background-card);
  height: 101px;
}

.draggable {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  &:hover {
    background-color: #2f2f2f;
    cursor: url('@/assets/cursor-pointer.svg'), auto;
  }
  &:active {
    cursor: url('@/assets/cursor-svg.svg'), auto;
  }
}
.reactive_number {
  position: absolute;
  bottom: 0;
  right: 0;
  border: 1px solid var(--var-border);
  border-radius: 5px 0 0 0;
  color: var(--var-text);
  padding: 2px 5px 0 5px;
  font-size: 10px;
}
.drag_wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: transparent;
}

.content_avatar {
  min-width: 130px;
  min-height: 130px;
}

.modal_back {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
  cursor: pointer;
  transition: 0.3s linear;
}

.fade {
  &-enter-active {
    animation: content-show-from 0.5s linear;
  }
  &-leave-active {
    transform: translateX(300px);
    transition: 0.5s linear;
  }

  //&-leave-active {
  //  transition: opacity 0.5s ease;
  //}
  &-enter-from {
  }
  &-leave-to {
  }
  //&-leave-to {
  //  opacity: 0;
  //}
}

@keyframes skeleton_animation {
  0% {
    opacity: 0.4;
  }
  100% {
    opacity: 1;
  }
}
@keyframes content-show-from {
  0% {
    transform: translateX(300px);
  }
  100% {
    transform: translateX(0px);
  }
}
</style>
