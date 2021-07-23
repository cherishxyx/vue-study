<template>
  <div>
    <ul>
      <li v-for="(item, index) in pageLists"
          :key="index">
        {{item.title}}-{{item.content}}
      </li>
    </ul>
    <div>
      <button type="button" class="btn" @click="ToAddPage()">发布文章</button>
    </div>
  </div>
</template>

<script>
import store from '@/store/index'
export default {
  name: "List",
  store,
  computed: {
    pageLists () {
      return store.state.lists
    }
  },
  methods: {
    ToAddPage () {
      this.$router.push('/add')
    }
  }
}
</script>

<style scoped lang="scss">

</style>