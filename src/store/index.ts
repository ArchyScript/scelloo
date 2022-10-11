import { UserData } from '@/common/types'
import { defineStore } from 'pinia'

export type RootState = {
  userData: UserData[]
}

export const mainStore = defineStore({
  id: 'mainStore',
  //   state: () =>
  //     ({
  //       userData: [],
  //     } as RootState),
  //   state: () => {
  //     return {
  //       count: 0,
  //       name: 'Eduardo',
  //       isAdmin: true,
  //     }
  //   },
  state: () => ({
    count: 0,
    userData: [
      {
        name: 'Daniel',
        id: 'fgvhbjnkml',
      },
    ] as UserData[],
  }),

  actions: {
    updateCount() {
      this.count++
    },
    updateUserData(item: UserData) {
      if (!item) return

      this.userData.push(item)
    },
    // createNewItem(item: UserData) {
    //   if (!item) return

    //   this.userData.push(item)
    // },

    // updateItem(id: string, payload: UserData) {
    //   if (!id || !payload) return;

    //   const index = this.findIndexById(id);

    //   if (index !== -1) {
    //     this.userData[index] = generateFakeData();
    //   }
    // },

    // deleteItem(id: string) {
    //   const index = this.findIndexById(id)

    //   if (index === -1) return

    //   this.userData.splice(index, 1)
    // },

    // findIndexById(id: string) {
    //   return this.userData.findIndex((item) => item.id === id)
    // },
  },
})
