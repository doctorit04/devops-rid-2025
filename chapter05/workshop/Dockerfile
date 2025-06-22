# ใช้ nginx official image
FROM nginx:alpine

# คัดลอกไฟล์ static ไปไว้ที่ root ของ nginx web directory
COPY . /usr/share/nginx/html

# (ถ้ามี config nginx เพิ่มเติมให้คัดลอกลง /etc/nginx/nginx.conf)
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
