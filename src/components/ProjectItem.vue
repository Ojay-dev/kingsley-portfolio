<script setup>
const props = defineProps(['bgColor']);
</script>

<template>
  <div
    :class="`flex w-full flex-col justify-between overflow-hidden rounded-[32px] bg-[#EBFAFF]  ${props.bgColor}`"
  >
    <div class="pl-[30px] pt-[30px] lg:pl-[51px] lg:pt-[52px]">
      <i>
        <slot name="icon"></slot>
      </i>

      <div class="mr-8 mt-[42px] flex flex-col gap-y-8 lg:-mr-14">
        <h3 class="max-w-[447px] text-[40px] font-semibold leading-[52px] text-header-text">
          <slot name="heading"></slot>
        </h3>

        <p class="max-w-[482px] text-xl leading-8">
          <slot name="description"></slot>
        </p>

        <slot></slot>
      </div>
    </div>

    <i>
      <slot name="appImage"></slot>
    </i>
  </div>
</template>

<style scoped></style>
