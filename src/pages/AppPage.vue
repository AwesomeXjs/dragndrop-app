<script setup lang="ts">
import { ref } from 'vue'
import SkeletonProfile from '@/components/skeleton-profile/SkeletonProfile.vue'
import item1 from '@/assets/item1.svg'
import item2 from '@/assets/item2.svg'
import item3 from '@/assets/item3.svg'

interface IItem {
  id: number
  reactive_number: number
  img: string
  slot: number
}

interface ISlot {
  id: number
}

const items = ref<IItem[]>([
  { id: 1, reactive_number: 4, img: item1, slot: 1 },
  { id: 2, reactive_number: 2, img: item2, slot: 2 },
  { id: 3, reactive_number: 5, img: item3, slot: 3 }
])
const item_slots = ref<ISlot[]>([
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
  { id: 7 },
  { id: 8 },
  { id: 9 },
  { id: 10 },
  { id: 11 },
  { id: 12 },
  { id: 13 },
  { id: 14 },
  { id: 15 },
  { id: 16 },
  { id: 17 },
  { id: 18 },
  { id: 19 },
  { id: 20 },
  { id: 21 },
  { id: 22 },
  { id: 23 },
  { id: 24 },
  { id: 25 }
])

const onDragStart = (e: DragEvent, item: IItem) => {
  if (e.dataTransfer) {
    e.dataTransfer.dropEffect = 'move'
    e.dataTransfer.effectAllowed = 'move'
  }
  e.dataTransfer?.setData('slotId', item.slot.toString())
}

const onDrop = (e: DragEvent, slotId: number) => {
  if (e.dataTransfer !== null && e.dataTransfer !== undefined) {
    const getSlotId = parseInt(e.dataTransfer.getData('slotId'))
    const checkSlot = items.value.find((item) => item.slot === slotId)
    if (checkSlot) {
      return
    }
    items.value = items.value.map((item) => {
      if (item.slot === getSlotId) {
        item.slot = slotId
      }
      return item
    })
  }
}
</script>

<template>
  <div class="app-wrapper">
    <div class="profile">
      <SkeletonProfile />
    </div>
    <div class="app_table">
      <div
        v-for="item_slot in item_slots"
        :key="item_slot.id"
        class="droppable"
        @drop="onDrop($event, item_slot.id)"
        @dragover.prevent
        @dragenter.prevent
      >
        <div
          v-for="item in items.filter((item) => item.slot === item_slot.id)"
          :key="item.id"
          @dragstart="onDragStart($event, item)"
          class="draggable"
          draggable="true"
        >
          <img :src="item.img" alt="item" />
          <div class="reactive_number">
            {{ item.reactive_number }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.profile {
  background-color: var(--var-background-card);
  padding: 18px 14px 0 14px;
  border-radius: var(--var-border-radius);
  border: 1px solid var(--var-border);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
}

.app-wrapper {
  display: flex;
  min-height: 500px;
  flex-wrap: wrap;
  justify-content: space-between;
}

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
</style>
