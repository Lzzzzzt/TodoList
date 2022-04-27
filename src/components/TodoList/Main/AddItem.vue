<template>
  <v-text-field
      id="input"
      ref="input"
      v-model="itemTitle"
      dense
      filled
      label="Things To Do"
      @blur="add"
      @keydown.enter="add"
  >
  </v-text-field>
</template>

<script>
import {nanoid} from 'nanoid'
import {VTextField} from 'vuetify/lib'
import {mapMutations} from 'vuex'

export default {
  name: "AddItem",
  components: {VTextField},
  data() {
    return {
      itemTitle: ''
    }
  },
  methods: {
    ...mapMutations('TodoList', ['addItem']),
    add() {
      if (this.itemTitle.trim() === '') {
        return;
      }

      this.addItem({
        id: nanoid(),
        title: this.itemTitle,
        startDate: new Date().getTime(),
        finishDate: null,
        done: false,
        important: false,
      });
      this.$refs.input.blur();
      this.itemTitle = '';
    }
  }
}
</script>

<style scoped>
#input {
  width: 100%;
  height: 50px;
}
</style>
