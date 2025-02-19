import * as signalR from '@microsoft/signalr';

const connection = new signalR.HubConnectionBuilder()
  .withUrl('https://your-signalr-url') // Замените на URL вашего SignalR хаба
  .build();

export const startConnection = async () => {
  try {
    await connection.start();
    console.log('SignalR Connected');
  } catch (err) {
    console.error('Error while starting connection: ' + err);
  }
};

export const sendMessage = async (message: string) => {
  try {
    await connection.invoke('SendMessage', message);
  } catch (err) {
    console.error('Error while sending message: ' + err);
  }
};
