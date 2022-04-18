<template>
  <v-expansion-panel ref="item">
    <v-expansion-panel-header>
      <span :class="{done: item.done}">{{ item.title }}</span>
    </v-expansion-panel-header>
    <v-expansion-panel-content>
      <v-checkbox v-model="done" label="标记为完成" @click.prevent="changeItemState"></v-checkbox>
      <v-row align="center" justify="space-between">
        <div>{{ item.date | date }}</div>
        <div>
          <v-dialog ref="dialog" max-width="600" transition="dialog-bottom-transition">
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="primary" v-bind="attrs" v-on="on">修改</v-btn>
            </template>
            <template>
              <v-card class="pa-10">
                <v-card-text>
                  <v-text-field v-model="newTitle" label="Things To Do" outlined>
                  </v-text-field>
                </v-card-text>
                <v-card-actions class="justify-end">
                  <v-btn color="primary" elevation="0" @click="changeItem">确定</v-btn>
                </v-card-actions>
              </v-card>
            </template>
          </v-dialog>
          <v-btn class="btn" color="error" elevation="0" @click="deleteItem">删除</v-btn>
        </div>
      </v-row>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script>
import moment from 'moment';
import {
  VExpansionPanel,
  VExpansionPanelContent,
  VExpansionPanelHeader,
  VCheckbox,
  VCard,
  VCardText,
  VCardActions,
  VBtn,
  VRow,
} from 'vuetify/lib'

export default {
  name: "TodoListItem",
  props: ['item'],
  components: {
    VExpansionPanel,
    VExpansionPanelContent,
    VExpansionPanelHeader,
    VCheckbox,
    VCard,
    VCardText,
    VCardActions,
    VBtn,
    VRow
  },
  data() {
    return {
      done: this.item.done,
      newTitle: this.item.title,
    }
  },
  filters: {
    date(val) {
      return moment(val).calendar();
    }
  },
  methods: {
    deleteItem() {
      this.$refs.item.isActive = false;
      setTimeout(() => {
        this.$root.$emit('deleteItem', this.item.id);
      }, 300);
    },
    changeItemState() {
      this.$root.$emit('changeItemState', this.item.id);
    },
    changeItem() {
      this.$refs.dialog.isActive = false;
      this.$root.$emit('changeItem', {title: this.newTitle, id: this.item.id, date: new Date().getTime()});
    }
  },
}
</script>

<style scoped>
.btn {
  margin: 5px;
  height: 30px;
  width: 50px;
}

.done {
  text-decoration: line-through;
  color: darkgray;
}
</style>