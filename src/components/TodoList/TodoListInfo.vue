<template>
  <div class="Info">
    <v-progress-circular :color="colors[Math.floor(this.rate / 20) - 1]" :value="listInfo.length === 0 ? 0 : rate"
                         size="60">
      {{ this.listInfo.done }} / {{ this.listInfo.length }}
    </v-progress-circular>
    <v-btn color="error" @click="deleteDone">删除已完成</v-btn>
  </div>
</template>

<script>
import {VProgressCircular, VBtn} from 'vuetify/lib'

export default {
  name: "TodoListInfo",
  components: {VProgressCircular, VBtn},
  data() {
    return {
      listInfo: {},
      colors: ['#C3423F', '#EE5622', '#FDE74C', '#9BC53D', '#5BC0EB']
    }
  },
  computed: {
    rate() {
      return this.listInfo.done / this.listInfo.length * 100
    }
  },
  methods: {
    getInfo(info) {
      this.listInfo = {...this.listInfo, ...info}
    },
    deleteDone() {
      this.$root.$emit('deleteDone');
    }
  },
  mounted() {
    this.$root.$on('Info', this.getInfo);
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
</style>