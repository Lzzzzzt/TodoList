<template>
  <div class="root">
    <v-carousel :show-arrows="false" class="carousel" cycle height="100%" hide-delimiters>
      <v-carousel-item v-for="(src, i) in source" :key="i"
                       reverse-transition="scroll-y-transition"
                       transition="scroll-y-transition">
        <v-img :src="`https://api.paugram.com/wallpaper/?source=${src}`"
               alt="https://api.paugram.com/wallpaper/"
               height="100vh"
               width="100vw"
               @click="render"
        ></v-img>
      </v-carousel-item>
    </v-carousel>
    <v-card :loading="loading" class="text" elevation="8" height="300px" shaped
            width="600px">
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
          :particlesNumber="128"
          clickMode="push"
          color="#000000"
          hoverMode="grub"
          linesColor="#000000"
          shapeType="circle"
      >
      </vue-particles>
      <v-card-title class="mt-10 ml-10 mr-10">
        {{ sentence.hitokoto }}
      </v-card-title>
      <v-card-subtitle class="ml-10 mr-10">
        {{ sentence.from_who || sentence.creator }}
      </v-card-subtitle>
      <v-card-text class="ml-10 mr-10">
        {{ date }}
        <br>
        <a href="https://developer.hitokoto.cn/">@hitokoto</a>
      </v-card-text>
      <v-card-actions class="mb-5 ml-10 mr-10 mt-3">
        <v-btn :color="colors[Math.floor(Math.random() * 5)]" :disabled="click || loading" @click="antiShake">
          <span class="btn-text">换一个?</span>
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import moment from "moment";
import {VCard, VCardTitle, VCardText, VCardActions, VCardSubtitle, VImg} from 'vuetify/lib'

export default {
  name: "DailySentencePage",
  components: {VCard, VCardTitle, VCardText, VCardActions, VCardSubtitle, VImg},
  data() {
    return {
      sentence: {},
      click: false,
      clickTimes: 1,
      changeTimes: 0,
      colors: ['#01295F', '#437F97', '#849324', '#FFB30F', '#EC4E20'],
      source: ['gh', 'gt', 'paul']
    }
  },
  computed: {
    date() {
      let date = moment(parseInt(this.sentence.created_at) * 1000).format('LL');
      return date === 'Invalid date' ? '' : date;
    },
    loading() {
      return JSON.stringify(this.sentence) === '{}' || this.changeTimes !== this.clickTimes;
    },
  },
  methods: {
    getSentence() {
      fetch('https://v1.hitokoto.cn?c=a&c=b&c=d&c=c&c=h&c=i&max_length=24').then(
          response => response.json()
      ).then(
          json => {
            this.sentence = {...this.sentence, ...json}
          }
      ).catch(
          err => console.error(err)
      )
    },
    antiShake() {
      this.click = true;
      this.clickTimes++;
      this.getSentence();
      setTimeout(() => {
        this.click = false;
      }, 500);
    },
    render() {
      this.sourceIndex = Math.floor(Math.random() * 3);
    }
  },
  watch: {
    sentence: {
      deep: true,
      handler() {
        this.changeTimes++;
      }
    }
  },
  mounted() {
    this.getSentence()
  }

}
</script>

<style scoped>
.root {
  width: 100%;
  height: 100%;
}

.img {
  position: absolute;
  cursor: pointer;
  top: 50%;
  width: 50%;
  z-index: 1;
}

.text {
  position: absolute;
  left: 10%;
  top: 50%;
  transform: translateY(-50%);
}

.btn-text {
  color: whitesmoke;
}

.carousel {
  position: absolute;
  width: 100vw;
  height: 100vh;

  top: 50%;
  transform: translateY(-50%);
}
</style>
