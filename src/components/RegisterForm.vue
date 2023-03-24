<template>
  <Form 
  @submit="submitContact" 
  >
  <!-- :validation-schema="userFormSchema" -->
    <div class="form-group">
      <label for="userName">Tên</label>
      <Field
        name="userName"
        type="text"
        class="form-control"
        v-model="userLocal.userName"
      />
      <ErrorMessage name="userName" class="error-feedback" />
    </div>
    <div class="form-group">
      <label for="email">E-mail</label>
      <Field
        name="email"
        type="email"
        class="form-control"
        v-model="userLocal.email"
      />
      <ErrorMessage name="email" class="error-feedback" />
    </div>
    <div class="form-group">
      <label for="password">Password</label>
      <Field
        name="password"
        type="text"
        class="form-control"
        v-model="userLocal.password"
      />
      <ErrorMessage name="address" class="error-feedback" />
    </div>
    <div class="form-group">
      <label for="phone">Điện thoại</label>
      <Field
        name="phone"
        type="tel"
        class="form-control"
        v-model="userLocal.phone"
      />
      <ErrorMessage name="phone" class="error-feedback" />
    </div>
    <!-- <div class="form-group form-check">
      <input
        name="favorite"
        type="checkbox"
        class="form-check-input"
        v-model="contactLocal.favorite"
      /> -->
      <!-- <label for="favorite" class="form-check-label">
        <strong>Liên hệ yêu thích</strong>
      </label>
    </div> -->
    <div class="form-group">
      <button class="btn btn-primary">Lưu</button>
    </div>
  </Form>
</template>

<script>
import * as yup from "yup";
import { Form, Field, ErrorMessage } from "vee-validate";
import axios from "axios";
export default {
  components: {
    Form,
    Field,
    ErrorMessage,
  },

  // Truyền xuống 1 contact và trả về 2 kiểu ["submit:contact", "delete:contact"]
  emits: ["submit:user"],
  props: {
    user: { type: Object, required: true },
  },

  // valid
  data() {
    const userFormSchema = yup.object().shape({
      userName: yup
        .string()
        .required("Tên phải có giá trị.")
        .min(2, "Tên phải ít nhất 2 ký tự.")
        .max(50, "Tên có nhiều nhất 50 ký tự."),
      email: yup
        .string()
        .email("E-mail không đúng.")
        .max(50, "E-mail tối đa 50 ký tự."),
      password: yup
      .string()
      .required("Mật khẩu phải có giá trị")
      .min(8,"Mật khẩu ít nhất 8 kí tự"),
      phone: yup
        .string()
        .matches(
          /((09|03|07|08|05)+([0-9]{8})\b)/g,
          "Số điện thoại không hợp lệ."
        ),
    });

    // Sử dụng các biến cục bộ trong khi tao tác làm dữ liệu an toàn hơn
    // Gọi hàm valid
    return {
      // Chúng ta sẽ không muốn hiệu chỉnh props, nên tạo biến cục bộ
      // contactLocal để liên kết với các input trên form
      userLocal: this.user,
      userFormSchema,
    };
  },

  // Lấy dữ liệu từ form
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
