FROM ravindu01manoj/sewqueen:lovegift

RUN git clone https://github.com/ravindu01manoj/SewQueen /root/QueenSewWhatsappBot
WORKDIR /root/QueenSewWhatsappBot/
ENV TZ=Asia/Colombo
RUN git clone https://github.com/ravindu01manoj/data
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "sew.js"]
# RUN git clone https://github.com/ravindu01manoj/MediaData
