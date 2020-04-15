<template>
  <div id="app">
    <p>
      <young-button>默认按钮</young-button>
      <young-button type="primary">主要按钮</young-button>
      <young-button type="success">成功按钮</young-button>
      <young-button type="info">信息按钮</young-button>
      <young-button type="warning">警告按钮</young-button>
      <young-button type="danger">危险按钮</young-button>
    </p>
    <p>
      <young-button type="primary"
                    icon="sousuo"
                    icon-position="left">默认按钮</young-button>
      <young-button type="primary"
                    icon="sousuo"
                    icon-position="right">默认按钮</young-button>
      <young-button type="primary" loading>加载中</young-button>
    </p>
    <young-button type="primary" @click="fn">触发事件</young-button>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    fn(data) {
      console.log(data);
    }
  }
}
</script>

<style lang="scss">
</style>
