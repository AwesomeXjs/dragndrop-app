import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import item1 from '@/assets/item1.svg'
import item2 from '@/assets/item2.svg'
import item3 from '@/assets/item3.svg'

interface IItem {
  id: number
  reactive_number: number
  img: string
  slot: number
}

export const useDragNDropStore = defineStore('DragNDropStore', () => {
  const items = ref<IItem[]>([
    { id: 1, reactive_number: 4, img: item1, slot: 1 },
    { id: 2, reactive_number: 2, img: item2, slot: 2 },
    { id: 3, reactive_number: 5, img: item3, slot: 3 }
  ])

  const current_item = ref<IItem | null>(null)
  const item_content_show = ref<boolean>(false)
  const item_del_confirm_show = ref<boolean>(false)
  const number_of_del_item = ref<number>(0)

  const onDragStart = (e: DragEvent, item: IItem) => {
    if (e.dataTransfer && e.target) {
      e.target.style.background = '#2f2f2f'
      e.target.style.border = '1px solid var(--var-border)'
      e.dataTransfer.dropEffect = 'move'
      e.dataTransfer.effectAllowed = 'move'
    }
    e.dataTransfer?.setData('slotId', item.slot.toString())
    return
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

  const showContent = (item: IItem) => {
    current_item.value = item
    item_content_show.value = true
  }

  const del_number = (item: IItem) => {
    const current_item = items.value.find((i) => i.id === item.id)
    if (current_item) {
      if (current_item.reactive_number === 0) {
        return
      }
      current_item.reactive_number = current_item.reactive_number - number_of_del_item.value
      item_del_confirm_show.value = true
      item_content_show.value = false
    }
  }
  return {
    items,
    current_item,
    item_content_show,
    item_del_confirm_show,
    number_of_del_item,
    onDragStart,
    onDrop,
    showContent,
    del_number
  }
})
