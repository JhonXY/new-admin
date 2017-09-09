<template>
  <div class="dashboard-container">
    <div class='dashboard-text'>name:admin</div>
    <div class='dashboard-text'>role:<span>admin</span></div>
  </div>
</template>

<script>
export default {
  name: 'dashboard',
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
