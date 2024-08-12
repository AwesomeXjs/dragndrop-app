<script setup lang="ts">
import { useDragNDropStore } from '@/store/useStore'

const store = useDragNDropStore()
</script>

<template>
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
            type="number"
            placeholder="Введите количество"
          />
          <div v-if="store.item_del_confirm_show" class="content_buttons">
            <button @click="store.item_del_confirm_show = false" class="cancel_btn">Отмена</button>
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
</template>

<style scoped lang="scss">
@import '@/scss/_animations.scss';

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
  border: 1px solid var(--var-border);
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

.content_avatar {
  min-width: 130px;
  min-height: 130px;
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

@keyframes content-show-from {
  0% {
    transform: translateX(300px);
  }
  100% {
    transform: translateX(0px);
  }
}
</style>
