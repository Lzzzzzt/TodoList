<template>
  <div>
    <vue-particles
        :clickEffect="true"
        :hoverEffect="true"
        :lineLinked="true"
        :lineOpacity="0.2"
        :linesDistance="128"
        :linesWidth="1"
        :moveSpeed="2"
        :particleOpacity="0.3"
        :particleSize="3"
        :particlesNumber="64"
        clickMode="push"
        color="#000000"
        hoverMode="grab"
        linesColor="#000000"
        shapeType="circle"
    >
    </vue-particles>
    <keep-alive>
      <router-view class="overflow-y-auto overflow-x-auto" style="z-index: 1"></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "TodoListPage"
}
</script>

<style scoped>

div {
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>
