<template>
  <div class="about">
    <h1 class="text-scelloo-red">This is an about page</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, computed } from 'vue'
import { mainStore } from '@/store'

export default defineComponent({
  setup() {
    const store = mainStore()
    const count = computed(()=> store.$state.count)

    const updateCount = () => {
      console.log(store.$state.userData[0].name)
    }

    onBeforeMount(() => {
      updateCount()
    })

    return { 
      count
    }
  },
})
</script>
