<template>
  <div class="container">
    <ul>
      <router-link to="html">
        <li>HTML</li>
      </router-link>
      <router-link to="js">
        <li>JS</li>
      </router-link>
      <router-link to="css">
        <li>CSS</li>
      </router-link>
      <router-link to="img">
        <li>IMG</li>
      </router-link>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'common_nav',
  data () {
    return {

    }
  }
}
</script>


<style scoped lang="scss">
  .router-link-active{
    background: blue;
    color: #fff;
  }
  .container{
    ul{
      width: 500px;
      display: block;
      margin: 0 auto;
      &:after{
        content: '';
        clear: both;
        display: block;
      }
      a{
        width: 100px;
        height: 30px;
        line-height: 30px;
        float: left;
        list-style: none;
        border: 1px solid black;
        margin-left: -1px;
        cursor: pointer;
        text-decoration: none;
      }
    }
  }

</style>
