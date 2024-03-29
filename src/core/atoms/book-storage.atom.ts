import { atomWithStorage } from "jotai/utils"
import Book from "../entities/book.entity"

const bookStorageAtom = atomWithStorage<Book[]>("bookStorage", [
    new Book({
        id: "1",
        name: "ทะลุมิติไปเป็นสะใภ้ผู้มั่งคั่งด้วยโกดังสินค้าในยุค 70",
        thumbnail: "bookmark-thumbnail-1.jpg",
        author: "Kawebook",
        episodes: [
            {
                "name": "ช่วยน้องชาย",
                "nth": 1
            },
            {
                "name": "คนดีที่ไม่ต้องการอะไรตอบแทน",
                "nth": 2
            },
            {
                "name": "โกดังสินค้าก็ตามมาด้วย",
                "nth": 3
            },
            {
                "name": "พี่จะพาเราไปอยู่บ้านคุณตาคุณยาย",
                "nth": 4
            },
            {
                "name": "ไปเอาเรื่องคนสารเลว",
                "nth": 5
            },
            {
                "name": "ผู้ใหญ่บ้านทวงความยุติธรรมคืนให้",
                "nth": 6
            },
            {
                "name": "ลักพาตัวหรือเลี้ยงแบบทิ้งขว้าง",
                "nth": 7
            },
            {
                "name": "คำพูดใช้เป็นหลักฐานไม่ได้ ตัวหนังสือถึงจะใช้เป็นหลักฐานได้",
                "nth": 8
            },
            {
                "name": "เด็กคนนี้นี่ น้ำเข้าสมองไปแล้วหรืออย่างไร",
                "nth": 9
            },
            {
                "name": "เล่นละครเก่งจนได้แฟนคลับ",
                "nth": 10
            },
            {
                "name": "โดนดูถูก",
                "nth": 11
            },
            {
                "name": "เอาตามนี้",
                "nth": 12
            },
            {
                "name": "ให้คำแนะนำคุณปู่จ้าว",
                "nth": 13
            },
            {
                "name": "บังเอิญเจอชายสารเลว",
                "nth": 14
            },
            {
                "name": "ความรู้สึกที่มีบ้านช่างดีเหลือเกิน",
                "nth": 15
            },
            {
                "name": "บนเขามีของดีเยอะเหลือเกิน",
                "nth": 16
            },
            {
                "name": "พวกค้ามนุษย์มาจับคน",
                "nth": 17
            },
            {
                "name": "ซ่งมู่ไป๋อยากจับคนยัดใส่กระสอบแล้วกระหน่ำตี",
                "nth": 18
            },
            {
                "name": "มีหลานเพิ่มอีกคน",
                "nth": 19
            },
            {
                "name": "ชื่อเสียงของตระกูลเซี่ยถูกทำลายจนป่นปี้หมดแล้ว",
                "nth": 20
            }
        ]
        ,
    }),
    new Book({
        id: "2",
        name: "ทะลุมิติครั้งนี้ฉันจะเป็นเศรษฐีนีด้วยซูเปอร์มาร์เก็ต",
        thumbnail: "bookmark-thumbnail-2.jpg",
        author: "Jinovel",
        episodes: [
            {
                "name": "การแต่งงานของต้วนซานหลาง",
                "nth": 1
            },
            {
                "name": "คืนสินสอดทองหมั้น",
                "nth": 2
            },
            {
                "name": "ค่ายาและค่ารักษา",
                "nth": 3
            },
            {
                "name": "แยกจวน",
                "nth": 4
            },
            {
                "name": "เปลี่ยนนาม",
                "nth": 5
            },
            {
                "name": "ต้วนซานหลาง",
                "nth": 6
            },
            {
                "name": "เรื่องน่ายินดีที่ไม่ทันตั้งตัว",
                "nth": 7
            },
            {
                "name": "ผู้เฒ่าทั้งสองคน",
                "nth": 8
            },
            {
                "name": "กราบอาจารย์",
                "nth": 9
            },
            {
                "name": "ข้อตกลง",
                "nth": 10
            },
            {
                "name": "ความปีติยินดีของมารดาสกุลต้วน",
                "nth": 11
            },
            {
                "name": "จวนเก่าแสนทรุดโทรมของสกุลเคอ",
                "nth": 12
            },
            {
                "name": "เข็มคลื่นเมฆาเจ็ดสี",
                "nth": 13
            },
            {
                "name": "อาหารเย็น",
                "nth": 14
            },
            {
                "name": "ความริษยาของหยวนซื่อ",
                "nth": 15
            },
            {
                "name": "เข้าเมือง",
                "nth": 16
            },
            {
                "name": "หาเงิน",
                "nth": 17
            },
            {
                "name": "สอนวิธีจดบัญชี",
                "nth": 18
            },
            {
                "name": "พบลูกพี่ลูกน้องระหว่างทาง",
                "nth": 19
            },
            {
                "name": "ล้อมสกัดกั้น",
                "nth": 20
            }
        ],
    }),
    new Book({
        id: "3",
        name: "อุบายนางหงส์",
        thumbnail: "bookmark-thumbnail-3.jpg",
        author: "มนต์มิถุนา",
        episodes: [
            {
                "name": "บทที่ 1 มู่ถิงหลิว (ตอนต้น)",
                "nth": 1
            },
            {
                "name": "บทที่ 1 มู่ถิงหลิว (ตอนปลาย)",
                "nth": 2
            },
            {
                "name": "บทที่ 2 คืนอำนาจ (ตอนต้น)",
                "nth": 3
            },
            {
                "name": "บทที่ 2 คืนอำนาจ (ตอนปลาย)",
                "nth": 4
            },
            {
                "name": "บทที่ 3 อำนาจฮองเฮา (ตอนต้น)",
                "nth": 5
            },
            {
                "name": "บทที่ 3 อำนาจฮองเฮา (ตอนปลาย)",
                "nth": 6
            },
            {
                "name": "บทที่ 4 บรรลุเป้าหมาย (ตอนต้น)",
                "nth": 7
            },
            {
                "name": "บทที่ 4 บรรลุเป้าหมาย (ตอนปลาย)",
                "nth": 8
            },
            {
                "name": "บทที่ 5 ผลประโยชน์ร่วมกัน (ตอนต้น)",
                "nth": 9
            },
            {
                "name": "บทที่ 5 ผลประโยชน์ร่วมกัน (ตอนปลาย)",
                "nth": 10
            },
            {
                "name": "บทที่ 6 รื้อฟื้นกฎระเบียบ (ตอนต้น)",
                "nth": 11
            },
            {
                "name": "บทที่ 6 รื้อฟื้นกฎระเบียบ (ตอนปลาย)",
                "nth": 12
            },
            {
                "name": "บทที่ 7 สกุลมู่ขอเข้าเฝ้า (ตอนต้น)",
                "nth": 13
            },
            {
                "name": "บทที่ 7 สกุลมู่ขอเข้าเฝ้า (ตอนปลาย)",
                "nth": 14
            },
            {
                "name": "บทที่ 8 ข่าวลือในวังหลวง (ตอนต้น)",
                "nth": 15
            },
            {
                "name": "บทที่ 8 ข่าวลือในวังหลวง (ปลาย)",
                "nth": 16
            },
            {
                "name": "บทที่ 9 มนุษย์หรือปีศาจ (ตอนต้น)",
                "nth": 17
            },
            {
                "name": "บทที่ 9 มนุษย์หรือปีศาจ (ตอนปลาย)",
                "nth": 18
            },
            {
                "name": "บทที่ 10 ฮองเฮาสะสาง (ตอนต้น)",
                "nth": 19
            },
            {
                "name": "บทที่ 10 ฮองเฮาสะสาง (ตอนปลาย)",
                "nth": 20
            }
        ],
    }),
    new Book({
        id: "4",
        name: "ลู่หลิง ยอดหญิงสกุลฟ่าน (อ่านฟรีจนจบ)",
        thumbnail: "bookmark-thumbnail-4.jpg",
        author: "ไป่เยว่-จันทร์พิสุทธิ์",
        episodes: [
            {
                "name": "เกิดใหม่เป็นคุณหนูใหญ่สกุลฟ่าน",
                "nth": 1
            },
            {
                "name": "เอาใจเจ้านายคนใหม่",
                "nth": 2
            },
            {
                "name": "ออดอ้อนขอเข้าเรียน",
                "nth": 3
            },
            {
                "name": "เริ่มเรียนวันแรก",
                "nth": 4
            },
            {
                "name": "อัจฉริยะด้านการค้า",
                "nth": 5
            },
            {
                "name": "คุณหนูใหญ่ข้างถนน",
                "nth": 6
            },
            {
                "name": "งานเลี้ยงดูตัว",
                "nth": 7
            },
            {
                "name": "งานเลี้ยงอวยพรวันเกิด",
                "nth": 8
            },
            {
                "name": "เป็นสตรีต้องออกเรือน แผนการของฮูหยินใหญ่",
                "nth": 9
            },
            {
                "name": "ดาบทื่อ ๆ แต่ก็ยังคงเป็นดาบที่มีวันได้ลับความคม",
                "nth": 10
            },
            {
                "name": "ความลำบากใจของฟ่านอิง",
                "nth": 11
            },
            {
                "name": "ดั่งเพชรเม็ดงามที่ยังไม่ได้เจียระไน",
                "nth": 12
            },
            {
                "name": "แผนการเปิดร้าน",
                "nth": 13
            },
            {
                "name": "ปัญหาวันเปิดร้าน",
                "nth": 14
            },
            {
                "name": "กลยุทธ์การขายที่เยี่ยมยอด",
                "nth": 15
            },
            {
                "name": "การกลับมาของฮูหยินเฒ่า",
                "nth": 16
            },
            {
                "name": "การปรากฎตัวของหานฮูหยิน",
                "nth": 17
            },
            {
                "name": "รอเพียงขบวนสู่ขอจากสกุลหาน",
                "nth": 18
            },
            {
                "name": "การซื้อขายครั้งใหญ่",
                "nth": 19
            },
            {
                "name": "หนึ่งจุมพิตคืนลมหายใจ",
                "nth": 20
            }
        ],
    }),
    new Book({
        id: "5",
        name: "โจวซิงเฉิงชายพิการแห่งหมู่บ้านหนิงสุ่ย",
        thumbnail: "bookmark-thumbnail-5.jpg",
        author: "Nedra",
        episodes: [
            {
                "name": "บ้านดินที่ผุพังท้ายหมู่บ้าน",
                "nth": 1
            },
            {
                "name": "น้ำใจจากสหาย",
                "nth": 2
            },
            {
                "name": "ความลับของปานแดงที่ข้อมือ",
                "nth": 3
            },
            {
                "name": "รอดตายแล้ว",
                "nth": 4
            },
            {
                "name": "การมาถึงของลุงใหญ่ตระกูลโจว",
                "nth": 5
            },
            {
                "name": "พบอดีตคู่หมั้น",
                "nth": 6
            },
            {
                "name": "คำดูถูกของชายอื่น",
                "nth": 7
            },
            {
                "name": "ขาเริ่มดีขึ้น",
                "nth": 8
            },
            {
                "name": "ลูกไก่",
                "nth": 9
            },
            {
                "name": "พ่อแม่ที่ไม่คุ้นเคย",
                "nth": 10
            },
            {
                "name": "ขยายบ่อเลี้ยงปลาในพื้นที่ลึกลับ",
                "nth": 11
            },
            {
                "name": "ขึ้นเขาเพื่อหาสัตว์เลี้ยงเพิ่ม",
                "nth": 12
            },
            {
                "name": "สหายร่วมรบ",
                "nth": 13
            },
            {
                "name": "ขายได้โดยบังเอิญ",
                "nth": 14
            },
            {
                "name": "หลิวม่านม่าน",
                "nth": 15
            },
            {
                "name": "ซ่อมแซมบ้าน",
                "nth": 16
            },
            {
                "name": "เด็กสาวตัวผอมในตลาดมืด",
                "nth": 17
            },
            {
                "name": "สหายใหม่",
                "nth": 18
            },
            {
                "name": "ผลไม้ประหลาด",
                "nth": 19
            },
            {
                "name": "ความฝัน",
                "nth": 20
            }
        ]
    }),
    new Book({
        id: "6",
        name: "ทะลุมิติมาเป็นภรรยาตัวร้ายในยุค 80",
        thumbnail: "bookmark-thumbnail-6.jpg",
        author: "ชงเมิ่ง",
        episodes: [
            {
                "name": "บทนำ",
                "nth": 1
            },
            {
                "name": "บทที่ 1.1 แม่ที่เปลี่ยนไป",
                "nth": 2
            },
            {
                "name": "บทที่ 1.2 แม่ที่เปลี่ยนไป",
                "nth": 3
            },
            {
                "name": "บทที่ 1.3 แม่ที่เปลี่ยนไป",
                "nth": 4
            },
            {
                "name": "บทที่ 2.1 แม่ที่น่าโมโห",
                "nth": 5
            },
            {
                "name": "บทที่ 2.2 แม่ที่น่าโมโห",
                "nth": 6
            },
            {
                "name": "บทที่ 2.3 แม่ที่น่าโมโห",
                "nth": 7
            },
            {
                "name": "บทที่ 3.1 แม่ที่ใฝ่ฝัน",
                "nth": 8
            },
            {
                "name": "บทที่ 3.2 แม่ที่ใฝ่ฝัน",
                "nth": 9
            },
            {
                "name": "บทที่ 3.3 แม่ที่ใฝ่ฝัน",
                "nth": 10
            },
            {
                "name": "บทที่ 4.1 แม่ตัวอย่าง",
                "nth": 11
            },
            {
                "name": "บทที่ 4.2 แม่ตัวอย่าง",
                "nth": 12
            },
            {
                "name": "บทที่ 4.3 แม่ตัวอย่าง",
                "nth": 13
            },
            {
                "name": "บทที่ 5.1 ลูกชายที่เชื่อฟัง",
                "nth": 14
            },
            {
                "name": "บทที่ 5.2 ลูกชายทีเชื่อฟัง",
                "nth": 15
            },
            {
                "name": "บทที่ 5.3 ลูกชายที่เชื่อฟัง",
                "nth": 16
            },
            {
                "name": "บทที่ 6.1 การกลับมาของคนที่หายไป",
                "nth": 17
            },
            {
                "name": "บทที่ 6.2 การกลับมาของคนที่หายไป",
                "nth": 18
            },
            {
                "name": "บทที่ 6.3 การกลับมาของคนที่หายไป",
                "nth": 19
            },
            {
                "name": "บทที่ 7.1 อย่างนั้นไม่สู้พวกเราแยกบ้าน",
                "nth": 20
            }
        ]
    }),
])

export default bookStorageAtom