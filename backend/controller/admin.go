package controller

import (
	"net/http"

	"github.com/Kleawthong/sa-65-example/entity"
	"github.com/gin-gonic/gin"
)

// GET /admins
// List all admins

func Listadmins(c *gin.Context) {
	var admins []entity.Admin
	if err := entity.DB().Raw("SELECT * FROM admins").Scan(&admins).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"data": admins})
}

// GET /admins/:id
// Get admins by id
func Getadmins(c *gin.Context) {
	var admins entity.Admin
	id := c.Param("id")
	if tx := entity.DB().Where("id = ?", id).First(&admins); tx.RowsAffected == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "admins not found"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"data": admins})
}

// PATCH /admins
func Updateadmins(c *gin.Context) {
	var admins entity.Admin
	if err := c.ShouldBindJSON(&admins); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	if tx := entity.DB().Where("id = ?", admins.ID).First(&admins); tx.RowsAffected == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "admins not found"})
		return
	}

	if err := entity.DB().Save(&admins).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"data": admins})
}

// DELETE /admins/:id
func Deleteadmins(c *gin.Context) {
	id := c.Param("id")
	if tx := entity.DB().Exec("DELETE FROM admins WHERE id = ?", id); tx.RowsAffected == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "admins not found"})
		return
	}
	/*
		if err := entity.DB().Where("id = ?", id).Delete(&entity.admins{}).Error; err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
			return
		}*/

	c.JSON(http.StatusOK, gin.H{"data": id})
}
