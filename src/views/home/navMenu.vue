<template>
  <el-aside width="200px">
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo" router>

      <el-menu-item index="/index">
        <i class="el-icon-s-home"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-menu-item index="/user">
        <i class="el-icon-s-custom"></i>
        <span slot="title">用户管理</span>
      </el-menu-item>

      <el-submenu index="/order">
        <template slot="title">
          <i class="el-icon-shopping-bag-2"></i>订单管理
        </template>
        <el-menu-item index="/order/orderInfo">订单信息</el-menu-item>
      </el-submenu>

    </el-menu>
  </el-aside>

</template>

<script>
export default {
    data(){
        return {

        }
    },
    methods:{
        
    }
}
</script>

