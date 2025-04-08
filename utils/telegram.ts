// utils/telegram.ts
import axios from "axios";

// Замените на ваш токен бота и chat_id
// const TELEGRAM_BOT_TOKEN: string = "your-telegram-bot-token";
// const CHAT_ID: string = "your-chat-id";
// const TELEGRAM_BOT_TOKEN: string = "your-telegram-bot-token";
// const CHAT_ID: string = "your-chat-id";

// Тип для параметров отправки сообщения
interface TelegramMessageParams {
  chat_id: string;
  text: string;
}

const chatList = [
  1005641275,
  1383333084,
  360128175,
]


  // let My_chat_id = 1005641275
  // let Asl_chat_id = 1383333084
  // let Sasha_chat_id = 360128175

  

// Функция для отправки сообщения в Telegram
export const sendMessageToTelegram = async (message: string): Promise<void> => {

  const url = `https://api.telegram.org/bot1963887065:AAFuxC-UXouiiGS2Z0TRaWmM0i0snhoUN3g/sendMessage`
  


  for (var i = 0; i < 2; i++){





  try {   
    await axios.post<TelegramMessageParams>(url, {
      // chat_id: 1005641275,  
      chat_id: chatList[i],  
      text: message,
    });


  // console.log("Сообщение отправлено в Telegram");
  } catch (error) {
    console.error("Ошибка при отправке сообщения в Telegram:", error);
  }






  }




};
