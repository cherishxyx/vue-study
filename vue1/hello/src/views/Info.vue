<template>
  <div>
    <ul>
      <li v-for="(item, index) in lists"
          @click="choice(index)"
          :class="{active: index === current}"
          :key="index">
        {{item}}
      </li>
    </ul>
    <button @click="appends()">添加</button>
    <ul>
      <li v-for="(item,index) in target"
          :key="index">
        {{item}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Info',
  data () {
    return {
      current: '',
      lists: [1, 2, 3, 4, 5, 6, 7],
      target: []
    }
  },
  methods: {
    choice (index) {
      this.current = index
    },
    appends () {
      if (this.current !== '') {
        this.target.push(this.lists[this.current])
        this.current = ''
      }
    }
  }
}
</script>

<style scoped>
li.active{
  background: green;
}
</style>
