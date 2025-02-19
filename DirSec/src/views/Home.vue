<template>
    <div class="container">
      <h1>Hello PWA with Vue 3!</h1>
      <button class="btn btn-primary" @click="sendTestMessage">Send Test Message</button>
    </div>
</template>

<script setup lang="ts">
import { sendMessage } from '../services/signalRService';

function sendTestMessage() {
    sendMessage('Hello from PWA!');
}

</script>
  