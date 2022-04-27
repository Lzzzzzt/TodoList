<template>
  <div class="Info">
    <v-progress-circular :color="color" :value="listInfo.length === 0 ? 0 : rate" size="60">
      {{ listInfo.done }} / {{ listInfo.length }}
    </v-progress-circular>
    <transition>
      <v-btn v-show="listInfo.done !== 0" color="error" @click="deleteDone">删除已完成</v-btn>
    </transition>
  </div>
</template>

<script>
import {VProgressCircular, VBtn} from 'vuetify/lib'
import {mapMutations, mapGetters} from "vuex";

export default {
  name: "TodoListInfo",
  components: {VProgressCircular, VBtn},
  data() {
    return {
      colors: ['#C3423F', '#EE5622', '#FDE74C', '#9BC53D', '#5BC0EB']
    }
  },
  computed: {
    ...mapGetters('TodoList', {listInfo: 'info'}),
    rate() {
      return this.listInfo.done / this.listInfo.length * 100
    },
    color() {
      return this.colors[Math.floor(this.rate / 20) - 1]
    },
  },
  methods: {
    ...mapMutations('TodoList', ['deleteDone']),
  },
}
</script>

<style scoped>
.Info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.v-enter-active, .v-leave-active {
  transition: opacity ease 0.3s;
}

.v-enter-to, .v-leave {
  opacity: 1;
}

.v-enter, .v-leave-to {
  opacity: 0;
}
</style>
