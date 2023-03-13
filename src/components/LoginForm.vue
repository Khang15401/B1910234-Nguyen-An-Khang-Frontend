<template>
  <Form @submit="submitContact" :validation-schema="contactFormSchema">
    <div class="form-group">
      <label for="name">Email</label>
      <Field
        name="email"
        type="text"
        class="form-control"
        v-model="userLocal.email"
      />
      <ErrorMessage name="name" class="error-feedback" />
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
    const contactFormSchema = yup.object().shape({
      email: yup
        .string()
        .required("Email đăng nhập phải có giá trị.")
        .min(8, "Email phải ít nhất 8 ký tự."),
      password: yup
        .string()
        .required("Mật khẩu phải có giá trị.")

      
    });
    return {
      userLocal: this.user,
      contactFormSchema,
    };
  },
  methods: {
    submitContact() {
      this.$emit("submit:user", this.userLocal);
    },
  },
};
</script>

<style scoped>
@import "@/assets/form.css";
</style>
