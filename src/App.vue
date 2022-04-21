<template>
  <v-app>
    <v-main id="main">
      <v-card id="App" class="mx-auto overflow-hidden" height="100%">
        <v-app-bar fixed height="50px">
          <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
          <v-toolbar-title ref="title" style="width: 150px">{{ $route.path.split('/')[1] || 'Home' }}</v-toolbar-title>
          <router-view name="TodoListNavBar"></router-view>
        </v-app-bar>
        <v-navigation-drawer v-model="drawer" absolute temporary>
          <v-list dense nav>
            <v-list-item-group active-class="text--accent-4">
              <v-list-item :to="{name: 'Home'}">
                <v-list-item-title>Home</v-list-item-title>
              </v-list-item>
              <v-list-item :to="{name: 'TodoListPage'}">
                <v-list-item-title>TodoList</v-list-item-title>
              </v-list-item>
              <v-list-item :to="{name: 'DailySentencePage'}">
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
  })
};
</script>

<style>
#content {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
}


#main::-webkit-scrollbar {
  width: 0 !important;
}

#particles-js {
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: fixed;
  z-index: 0;
}
</style>
