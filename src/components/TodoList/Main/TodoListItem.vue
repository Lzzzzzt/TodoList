<template>
  <v-expansion-panel ref="item">
    <!--    title-->
    <v-expansion-panel-header :class="{important: cachedItem.important && !cachedItem.done}" class="item">
      <span :class="{done: cachedItem.done}">
        <transition>
          <v-icon v-show="cachedItem.important" :color="cachedItem.done ? 'lightgray' : 'red'" class="mr-1 icon">
          mdi-alert-octagram
          </v-icon>
        </transition>
        {{ cachedItem.title }}
      </span>
    </v-expansion-panel-header>
    <!--    content-->
    <v-expansion-panel-content :class="{important: cachedItem.important && !cachedItem.done}" class="item">
      <v-row justify="space-between">
        <v-checkbox v-model="cachedItem.done" label="标记为完成" style="width: 50%;"
                    @click.prevent="change('done')"></v-checkbox>
        <v-checkbox v-model="cachedItem.important" label="标记为重要" style="width: 50%;"
                    @click.prevent="change('important')"></v-checkbox>
      </v-row>
      <v-row align="center" justify="space-between">
        <div>{{ item.startDate | date }}</div>
        <div>
          <v-dialog ref="dialog" max-width="600" transition="dialog-bottom-transition">
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="primary" elevation="0" v-bind="attrs" v-on="on">修改</v-btn>
            </template>
            <template>
              <v-card class="pa-10">
                <v-card-text>
                  <v-text-field v-model="cachedItem.title" label="Things To Do" outlined>
                  </v-text-field>
                </v-card-text>
                <v-card-actions class="justify-end">
                  <v-btn color="primary" elevation="0" @click="change('title')">确定</v-btn>
                </v-card-actions>
              </v-card>
            </template>
          </v-dialog>
          <v-btn class="btn" color="error" elevation="0" @click="del">删除</v-btn>
        </div>
      </v-row>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script>
import moment from 'moment';
import {mapMutations} from "vuex";
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
      cachedItem: this.item
    }
  },
  filters: {
    date(val) {
      return moment(val).calendar();
    }
  },
  methods: {
    ...mapMutations('TodoList', ['deleteItem', 'changeItem']),
    del() {
      this.$refs.item.isActive = false;
      setTimeout(() => {
        this.deleteItem(this.item.id);
      }, 300);
    },
    change(category) {
      switch (category) {
        case 'done':
          this.changeItem({
            id: this.cachedItem.id,
            done: this.cachedItem.done,
            finishDate: this.cachedItem.done ? new Date().getTime() : this.item.finishDate
          });
          break;
        case 'important':
          this.changeItem({id: this.cachedItem.id, important: this.cachedItem.important});
          break;
        case 'title':
          this.$refs.dialog.isActive = false;
          this.changeItem({
            title: this.cachedItem.title,
            id: this.item.id,
            startDate: new Date().getTime()
          });
          break;
        default:
          return;
      }
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
  color: darkgray;
}

.important {
  background-color: rgba(225, 82, 65, 0.1);
}

.item {
  transition: background-color ease 0.3s;
}

.icon {
  width: 20px;
}

.v-enter-active, .v-leave-active {
  transition: opacity ease 0.3s;
}

.v-enter, .v-leave-to {
  opacity: 0;
}

.v-enter-to, .v-leave {
  opacity: 1;
}
</style>
