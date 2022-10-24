package main

import (
	"github.com/Kleawthong/sa-65-example/controller"
	"github.com/Kleawthong/sa-65-example/entity"
	"github.com/Kleawthong/sa-65-example/middlewares"
	"github.com/gin-gonic/gin"
)

const PORT = "5050"

func main() {

	entity.SetupDatabase()

	r := gin.Default()
	r.Use(CORSMiddleware())

	router := r.Group("/")
	{
		router.Use(middlewares.Authorizes())
		{

			// Status Routes
			router.GET("/scholarships_statuses", controller.ListMyscholarshipsStatus)
			router.GET("/scholarships_status/:id", controller.GetScholarshipsStatus)
			router.POST("/scholarships_statuses", controller.CreateScholarshipsStatus)
			router.PATCH("/scholarships_statuses", controller.UpdateScholarshipsStatus)
			router.DELETE("/scholarships_statuses/:id", controller.DeleteScholarshipsStatus)

			// Types Routes
			router.GET("/scholarships_types", controller.ListMyScholarshipsType)
			router.GET("/scholarships_type/:id", controller.GetScholarshipsType)
			router.POST("/scholarships_types", controller.CreateScholarshipsType)
			router.PATCH("/scholarships_types", controller.UpdateScholarshipsType)
			router.DELETE("/scholarships_types/:id", controller.DeleteScholarshipsType)

			// Types Routes
			router.GET("/scholarships", controller.ListScholarships)
			router.GET("/scholarships/:id", controller.GetScholarship)
			router.POST("/scholarships", controller.CreateScholarship)
			router.PATCH("/scholarships", controller.UpdateScholarship)
			router.DELETE("/scholarships/:id", controller.DeleteScholarship)
		}
	}

	// Run the server go run main.go
	r.Run("localhost: " + PORT)
}

func CORSMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
		c.Writer.Header().Set("Access-Control-Allow-Credentials", "true")
		c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With")
		c.Writer.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS, GET, PUT")

		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(204)
			return
		}

		c.Next()
	}
}
