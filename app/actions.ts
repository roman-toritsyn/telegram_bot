'use server'

import axios from "axios";

export async function sendMessage(message: string) {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

  const text = `
      Message: ${message}
    `;
  try {
    const response = await axios.post(telegramUrl, {
      chat_id: chatId,
      text: text,
    });

    if (response.data.ok) {
      console.log("message had been sent");
    }
  } catch (error) {
    console.error("Error sending message to Telegram:", error);
  }
}