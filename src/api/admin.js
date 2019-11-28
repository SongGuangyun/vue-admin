import http from "@/utils/http";

export default {
  getPermissionList(params) {
    return http.get('permission', params);
  }
}