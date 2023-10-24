<template>
    <div class="auth-wrapper d-flex align-center justify-center pa-4">
      <VCard
        class="auth-card pa-4 pt-7"
        max-width="448"
      >
        <VCardItem class="justify-center">
          <VCardTitle class="font-weight-semibold text-2xl text-uppercase">
            Materio
          </VCardTitle>
        </VCardItem>

        <VCardText class="pt-2">
              <h5 class="text-h5 font-weight-semibold mb-1">
                Welcome to Materio! 👋🏻
          </h5>
          <p class="mb-0">
            Please sign-in to your account and start the adventure
          </p>
        </VCardText>

        <VCardText>
          <VForm @submit.prevent="() => {}">
            <VRow>
              <!-- email -->
              <VCol cols="12">
                <VTextField
                  v-model="form.email"
                  label="Email"
                  type="email"
                />
              </VCol>
              <!-- password -->
              <VCol cols="12">
                <VTextField
                  v-model="form.password"
                  label="Password"
                  :type="isPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isPasswordVisible ? 'mdi-eye-off-outline' : 'mdi-eye-outline'"
                  @click:append-inner="isPasswordVisible = !isPasswordVisible"
                />
                <!-- remember me checkbox -->
                <div class="d-flex align-center justify-space-between flex-wrap mt-1 mb-4">
                  <VCheckbox
                    v-model="form.remember"
                    label="Remember me"
                  />
                  <a
                    class="ms-2 mb-1"
                    href="javascript:void(0)"
                  >
                    Forgot Password?
                  </a>
                </div>
                <!-- login button -->
                <VBtn
                  block
                  type="submit"
                  to="/"
                >
                  Login
                </VBtn>
              </VCol>
              <!-- create account -->
              <VCol
                cols="12"
                class="text-center text-base"
              >
                <span>New on our platform?</span>
                <RouterLink
                  class="text-primary ms-2"
                  :to="{ name: 'about' }"
                >
                  Create an account
                </RouterLink>
              </VCol>

              <VCol
                cols="12"
                class="d-flex align-center"
              >
                <VDivider />
                <span class="mx-4">or</span>
                <VDivider />
              </VCol>

              <!-- auth providers -->
              <VCol
                cols="12"
                class="text-center"
              >
              </VCol>
            </VRow>
          </VForm>
        </VCardText>
      </VCard>
    </div>
</template>

<script>
import logo from '@/assets/logo.svg'
import { ref } from 'vue';
export default {
    name: "LoginView",
    components: {
        logo
    },
    setup: () => {
        const form = ref({
            email: "",
            password: "",
            remember: false,
        })
        const isPasswordVisible = ref(false)
        return {form, isPasswordVisible}
    },
}
</script>