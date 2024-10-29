import axios from "axios";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { message } = req.body;

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
        return res
          .status(200)
          .json({ success: true, message: "Message sent successfully!" });
      } else {
        return res
          .status(500)
          .json({ success: false, message: "Failed to send message." });
      }
    } catch (error) {
      console.error("Error sending message to Telegram:", error);
      return res
        .status(500)
        .json({ success: false, message: "Error sending message." });
    }
  } else {
    return res.status(405).json({ message: "Method not allowed" });
  }
}
