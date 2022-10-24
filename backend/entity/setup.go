package entity

import (
	"golang.org/x/crypto/bcrypt"
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

var db *gorm.DB

func DB() *gorm.DB {
	return db
}
func SetupDatabase() {
	database, err := gorm.Open(sqlite.Open("sa-65.db"), &gorm.Config{})
	if err != nil {

		panic("failed to connect database")
	}
	// Migrate the schema
	database.AutoMigrate(
		&Admin{},
		&Scholarships_status{},
		&Scholarships_type{},
		&Scholarship{})
	db = database

	password, err := bcrypt.GenerateFromPassword([]byte("123456"), 14)

	db.Model(&Admin{}).Create(&Admin{
		Name:     "Anucha",
		Email:    "Anucha@gmail.com",
		Password: string(password),
	})

	var ohm Admin

	db.Raw("SELECT * FROM admins WHERE email = ?", "Anucha@gmail.com").Scan(&ohm)

	status1 := Scholarships_status{
		Status: "ยังเปิดรับอยู่",
	}
	db.Model(&Scholarships_status{}).Create(&status1)
	// status2 := Scholarships_status{
	// 	Status: "ปิดรับแล้ว",
	// }
	// db.Model(&Scholarships_status{}).Create(&status2)

	// type
	type1 := Scholarships_type{
		Type: "ทุนให้เปล่า",
	}
	db.Model(&Scholarships_type{}).Create(&type1)

	// type2 := Scholarships_type{
	// 	Type: "ทุนต่อเนื่อง",
	// }
	// db.Model(&Scholarships_type{}).Create(&type2)

	// db.Model(&Scholarship{}).Create(&Scholarship{
	// 	Scholarship_Name:   "ทุนเด็กเรียนดี",
	// 	theAdmin:           Admin{Admin_Name: "Anucha"},
	// 	theStatus:          status1,
	// 	theTypes:           type1,
	// 	Scholarship_detail: "เป็นทุนที่มอบให้เด็กเรียนดี โดยมีทุนให้สูงสุดถึง 20,000 บาท",
	// })

	// var target Admin
	// db.Model(&Admin{}).Find(&target, db.Where("email = ?", "Anucha@gmail.com"))

	// 	var scholarshipList []*Scholarship
	// 	db.Model(&Scholarship{}).
	// 		Joins("Admin").
	// 		Joins("Scholarships_status").
	// 		Joins("Scholarships_type").
	// 		Find(&scholarshipList, db.Where("playlist_id = ?", ScholarshipAdmin))

}
