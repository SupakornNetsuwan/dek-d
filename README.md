## Dek-D project

โปรเจคนี้ถูกสร้างเพื่อยื่นสมัครเข้าร่วมสหกิจ Dek-D ประจำปี 2024

## เริ่มต้น 🚀
เพื่อเริ่มต้นโปรเจคนี้ คุณสามารถทำได้ 2 วิธี ดังต่อไปนี้

### วิธีที่ 1
Build โปรเจคและรันโปรแกรมในรูปแบบ Production environment
```bash
npm i # ติดตั้ง Dependencies

npm run build # สร้างโปรเจค

npm start
```

### วิธีที่ 2
รันโปรแกรมใน Development mode
> ไม่แนะนำ เนื่องจาก Poor performance ของ Next.js ใน Development mode เมื่อเริ่มต้น Cold start
```bash
npm i # ติดตั้ง Dependencies

npm run dev
```

### วิธีที่ 3
รันโปรแกรมผ่าน Dockerfile
```bash
docker build -t supakorn-dekd:latest . 

docker run -d -p 3000:3000 --name supakorn-dekd supakorn-dekd
```

## ตัวอย่าง 🚀
รูปภาพตัวอย่างหน้าจอของโปรแกรม
![Landing screen](https://img5.pic.in.th/file/secure-sv1/Screenshot-2024-01-15-222211.png)
![Landing with visualize graph](https://img5.pic.in.th/file/secure-sv1/Screenshot-2024-01-15-222438.png)
![create-bookmark.png](https://img2.pic.in.th/pic/create-bookmark.png)
![delete-bookmark.png](https://img2.pic.in.th/pic/delete-bookmark.png)
![edit-bookmark.png](https://img5.pic.in.th/file/secure-sv1/edit-bookmark.png)
![navbar-1.png](https://img2.pic.in.th/pic/navbar-1.png)
![navbar-2.png](https://img5.pic.in.th/file/secure-sv1/navbar-2.png)