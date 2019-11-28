<template>
  <div>
      这里是登录页面
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      versions: "asyncRouters"
    })
  },
  mounted() {
    console.log(this.versions)
    // this.$store.dispatch("getPermissionList");
  },
}
</script>
