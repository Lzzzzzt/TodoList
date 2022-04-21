<template>
  <div>
    <vue-particles
        :clickEffect="true"
        :hoverEffect="true"
        :lineLinked="true"
        :lineOpacity="0.2"
        :linesDistance="128"
        :linesWidth="1"
        :moveSpeed="3"
        :particleOpacity="0.3"
        :particleSize="3"
        :particlesNumber="64"
        clickMode="push"
        color="#000000"
        hoverMode="repulse"
        linesColor="#000000"
        shapeType="circle"
    >
    </vue-particles>
    <v-card-title class="text-h1 align-center justify-center" style="user-select: none">Welcome</v-card-title>
  </div>
</template>

<script>

export default {
  name: "HomePage",
}
</script>

<style scoped>

</style>
