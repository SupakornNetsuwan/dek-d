## Dek-D project

โปรเจคนี้ถูกสร้างเพื่อยื่นสมัครเข้าร่วมสหกิจ Dek-D ประจำปี 2024

## Getting start
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
docker build -t dek-d-supakorn:latest . 

docker run -d -p 3000:3000 --name dek-d-supakorn dek-d-supakorn
```

### วิธีที่ 4
ใช้ Docker public image
```bash
docker pull earththai98/dekd:1.0
docker run -d -p 3000:3000 --name dek-d-supakorn earththai98/dek-d-supakorn:1.0
```