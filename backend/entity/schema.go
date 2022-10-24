package entity

import (
	"gorm.io/gorm"
)

type Admin struct {
	gorm.Model
	Name          string
	Email         string        `gorm:"uniqueIndex"`
	Password      string        `json:"-"`
	Scholarshipes []Scholarship `gorm:"foreignKey:AdminID"`
}

type Scholarships_status struct {
	gorm.Model
	Status        string
	Scholarshipes []Scholarship `gorm:"foreignKey:StatusID"`
}

type Scholarships_type struct {
	gorm.Model
	Type          string
	Scholarshipes []Scholarship `gorm:"foreignKey:TypeID"`
}

type Scholarship struct {
	gorm.Model
	Scholarship_Name string
	AdminID          *uint
	theAdmin         Admin

	StatusID  *uint
	thestatus Scholarships_status

	TypeID  *uint
	thetype Scholarships_type

	Scholarship_detail string
}
