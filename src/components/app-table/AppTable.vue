<script setup lang="ts">
import { useDragNDropStore } from '@/store/useStore'
import ItemContent from '@/components/item-content/ItemContent.vue'
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
    <ItemContent />
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
    background-color: var(--var-items-drag-hover);
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
</style>
