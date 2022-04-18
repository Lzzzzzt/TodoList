<template>
  <v-app>
    <v-main id="main">
      <v-card id="App" class="mx-auto overflow-hidden" height="100%">
        <v-app-bar fixed height="50px">
          <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
          <v-toolbar-title ref="title" style="width: 150px">{{ $route.path.split('/')[1] || 'App' }}</v-toolbar-title>
          <router-view name="TodoListNavBar"></router-view>
        </v-app-bar>
        <v-navigation-drawer v-model="drawer" absolute temporary>
          <v-list dense nav>
            <v-list-item-group active-class="text--accent-4">
              <v-list-item @click="toTodoList">
                <v-list-item-title>TodoList</v-list-item-title>
              </v-list-item>
              <v-list-item @click="toDailySentence">
                <v-list-item-title>一言</v-list-item-title>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-navigation-drawer>
        <div id="content">
          <router-view></router-view>
        </div>
      </v-card>

    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
    drawer: false,
    title: 'App',
  }),

  methods: {
    toTodoList() {
      this.$router.push({name: 'TodoListPage'})
    },
    toDailySentence() {
      this.$router.push({name: 'DailySentencePage'})
    }
  },
};
</script>

<style scoped>
#content {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}


#main::-webkit-scrollbar {
  width: 0 !important;
}
</style>
