<template>
  <form @submit="handleSubmit(onSubmit)">
    <vee-form :validation-schema="schema">
      <!-- Username Field -->
      <vee-field name="username" v-slot="{ field, meta }">
        <input
          v-bind="field"
          type="text"
          class="block w-[300px] h-10 border border-black p-4 mb-4"
          placeholder="Enter your username"
        />
        <span v-if="meta.touched && meta.invalid" class="text-red-500">
          Username is required and must be at least 3 characters long.
        </span>
      </vee-field>

      <!-- Email Field -->
      <vee-field name="email" v-slot="{ field, meta }">
        <input
          v-bind="field"
          type="email"
          class="block w-[300px] h-10 border border-black p-4 mb-4"
          placeholder="Enter your email"
        />
        <span v-if="meta.touched && meta.invalid" class="text-red-500">
          Please provide a valid email address.
        </span>
      </vee-field>

      <!-- Phone Number Field -->
      <vee-field name="phone" v-slot="{ field, meta }">
        <input
          v-bind="field"
          type="text"
          class="block w-[300px] h-10 border border-black p-4 mb-4"
          placeholder="Enter your phone number"
        />
        <span v-if="meta.touched && meta.invalid" class="text-red-500">
          Please provide a valid phone number.
        </span>
      </vee-field>

      <!-- Age Field -->
      <vee-field name="age" v-slot="{ field, meta }">
        <input
          v-bind="field"
          type="number"
          class="block w-[300px] h-10 border border-black p-4 mb-4"
          placeholder="Enter your age"
        />
        <span v-if="meta.touched && meta.invalid" class="text-red-500">
          Age must be a valid number greater than 18.
        </span>
      </vee-field>

      <!-- Dropdown Select for Country -->
      <vee-field name="country" v-slot="{ field, meta }" :rules="requiredRule">
        <select
          v-bind="field"
          class="block w-[300px] h-10 border border-black p-4 mb-4"
        >
          <option value="">Select a country</option>
          <option value="USA">USA</option>
          <option value="Mexico">Mexico</option>
          <option value="Germany">Germany</option>
          <option value="Antarctica">Antarctica</option>
        </select>
        <span v-if="meta.touched && meta.invalid" class="text-red-500">
          Please select a country.
        </span>
      </vee-field>

      <!-- Submit Button -->
      <button type="submit" class="bg-blue-500 text-white p-2 mt-4">
        Submit
      </button>
    </vee-form>
  </form>
</template>

<script>
import { useForm } from "vee-validate";
import * as yup from "yup";

export default {
  setup() {
    // Validation schema using Yup
    const schema = yup.object({
      username: yup
        .string()
        .required("Username is required.")
        .min(3, "Username must be at least 3 characters long."),
      email: yup
        .string()
        .email("Please provide a valid email address.")
        .required("Email is required."),
      phone: yup
        .string()
        .matches(/^\+?[1-9]\d{1,14}$/, "Please provide a valid phone number.") // International phone number regex
        .required("Phone number is required."),
      age: yup
        .number()
        .positive("Age must be greater than 0.")
        .integer("Age must be an integer.")
        .min(18, "You must be at least 18 years old.")
        .required("Age is required."),
      country: yup.string().required("Please select a country."),
    });

    // VeeValidate's useForm hook to manage form state and validation
    const { handleSubmit } = useForm({
      validationSchema: schema, // Assign the validation schema here
    });

    // Submit handler
    const onSubmit = (values) => {
      console.log("Form submitted with values:", values);
    };

    // Custom rules for select field
    const requiredRule = "required";

    return {
      schema,
      handleSubmit,
      onSubmit,
      requiredRule,
    };
  },
};
</script>

<style scoped>
/* You can style your form here */
</style>
