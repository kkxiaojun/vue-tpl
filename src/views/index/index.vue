<template>
  <div>
    <h1>{{ msg }}</h1>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
@Component
export default class Menu extends Vue {
  @Prop({ default: 'this is a test page' }) msg: string;
}
</script>
