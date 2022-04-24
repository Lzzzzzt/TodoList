<template>
  <v-text-field
      id="input"
      ref="input"
      v-model="itemTitle"
      dense
      filled
      label="Things To Do"
      @blur="addItem"
      @keydown.enter="addItem"
  >
  </v-text-field>
</template>

<script>
import {nanoid} from 'nanoid'
import {VTextField} from 'vuetify/lib'

export default {
  name: "AddItem",
  components: {VTextField},
  data() {
    return {
      itemTitle: ''
    }
  },
  methods: {
    addItem() {
      if (this.itemTitle.trim() === '') {
        return;
      }

      this.$root.$emit('addItem', {
        id: nanoid(),
        title: this.itemTitle,
        date: new Date().getTime(),
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
