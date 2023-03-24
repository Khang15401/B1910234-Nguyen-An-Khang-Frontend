<template>
  <Form @submit="submitContact" :validation-schema="userFormSchema">
    <div class="form-group">
      <label for="userName">Username</label>
      <Field
        name="userName"
        type="text"
        class="form-control"
        v-model="userLocal.userName"
      />
      <ErrorMessage name="userName" class="error-feedback" />
    </div>
    <div class="form-group">
      <label for="password">Mật Khẩu</label>
      <Field
        name="password"
        type="password"
        class="form-control"
        v-model="userLocal.password"
      />
      <ErrorMessage name="password" class="error-feedback" />
    </div>
    <div class="form-group">
      <button class="btn btn-primary">Đăng Nhập</button>
    </div>
  </Form>
</template>

<script>
import * as yup from "yup";
import { Form, Field, ErrorMessage } from "vee-validate";
export default {
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  emits: ["submit:user"],
  props: {
    user: { type: Object, required: true },
  },

  data() {
    const userFormSchema = yup.object().shape({
      userName: yup
        .string()
        .required("Tên đăng nhập phải có giá trị."),
      password: yup
        .string()
        .required("Mật khẩu phải có giá trị.") 
    });
    return {
      userLocal: this.user,
      userFormSchema,
    };
  },
  methods: {
    submitContact() {
      console.log(this.userLocal);
      this.$emit("submit:user", this.userLocal);
    },
  },
};
</script>

<style scoped>
@import "@/assets/form.css";
</style>
