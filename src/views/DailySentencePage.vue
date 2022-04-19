<template>
  <div class="root">
    <v-img :src="`https://api.paugram.com/wallpaper/?source=${source[sourceIndex]}`"
           alt="https://api.paugram.com/wallpaper/" class="img"
           height="100%"
           width="100%"
           @click="render"></v-img>
    <v-card :loading="loading" class="text" elevation="8" height="300px" shaped
            width="600px">
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
      source: ['gt', 'sina', 'gh'],
      sourceIndex: 2,
      colors: ['#01295F', '#437F97', '#849324', '#FFB30F', '#EC4E20']
    }
  },
  computed: {
    date() {
      return moment(parseInt(this.sentence.created_at) * 1000).format('LL');
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
</style>