<template>
  <StackLayout rows="auto, auto">
    <Label class="message" :text="msg" horizontalAlignment="center"/>
    <!-- copy-webpack-plugin copies asset from src/assets to project output/build directory /assets -->
    <Image src="~/components/icon.png" />

    <Label class="date" :text="getDate()" horizontalAlignment="center"/>
  </StackLayout>
</template>

<script src="./HelloWorldBase.js"></script>

<style scoped>
  .message {
    color: #42b983;
    margin-top: 10;
  }

  Image {
    height: 20%;
    width: 20%;
    margin-top: 20;
  }

  .date {
    margin-top: 10;
  }
</style>
