<template>
  <div>
    <div class="message">{{ msg }}</div>
    <img src="~/components/icon.png" alt="logo" />
    <div class="date">{{ getDate() }}</div>
  </div>
</template>

<script src="./HelloWorldBase.js"></script>

<style scoped>
.message {
  color: #42b983;
  display: block;
  margin: auto;
  margin-top: 4em;
  text-align: center;
}
img {
  height: 75px;
  display: block;
  margin: auto;
  margin-top: 4em;
}
.date {
  margin-top: 4em;
}
</style>
