# ใช้ Node.js เวอร์ชันล่าสุดแบบ official image
FROM node:18

# สร้างโฟลเดอร์แอปใน container
WORKDIR /app

# คัดลอกไฟล์ package.json และ package-lock.json (ถ้ามี) เพื่อทำการติดตั้ง dependencies ก่อน
COPY package.json ./

# ติดตั้ง dependencies
RUN npm install

# คัดลอกไฟล์ที่เหลือทั้งหมดไปยังโฟลเดอร์ /app ใน container
COPY . .

# เปิดพอร์ต 3001
EXPOSE 3001

# คำสั่งรันแอป
CMD ["npm", "start"]
