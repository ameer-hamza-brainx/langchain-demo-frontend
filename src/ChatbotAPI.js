import axios from 'axios';

const API = {
  GetChatbotResponse: async (message) => {
    return new Promise(function (resolve, reject) {
      console.log(message);
      axios
        .post('http://localhost:5000/chat', { message })
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
};

export default API;
