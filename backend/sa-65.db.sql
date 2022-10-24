BEGIN TRANSACTION;
CREATE TABLE IF NOT EXISTS "admins" (
	"id"	integer,
	"created_at"	datetime,
	"updated_at"	datetime,
	"deleted_at"	datetime,
	"name"	text,
	"email"	text,
	"password"	text,
	PRIMARY KEY("id")
);
CREATE TABLE IF NOT EXISTS "scholarships_statuses" (
	"id"	integer,
	"created_at"	datetime,
	"updated_at"	datetime,
	"deleted_at"	datetime,
	"status"	text,
	PRIMARY KEY("id")
);
CREATE TABLE IF NOT EXISTS "scholarships_types" (
	"id"	integer,
	"created_at"	datetime,
	"updated_at"	datetime,
	"deleted_at"	datetime,
	"type"	text,
	PRIMARY KEY("id")
);
CREATE TABLE IF NOT EXISTS "scholarships" (
	"id"	integer,
	"created_at"	datetime,
	"updated_at"	datetime,
	"deleted_at"	datetime,
	"scholarship_name"	text,
	"admin_id"	integer,
	"status_id"	integer,
	"type_id"	integer,
	"scholarship_detail"	text,
	PRIMARY KEY("id"),
	CONSTRAINT "fk_admins_scholarshipes" FOREIGN KEY("admin_id") REFERENCES "admins"("id"),
	CONSTRAINT "fk_scholarships_statuses_scholarshipes" FOREIGN KEY("status_id") REFERENCES "scholarships_statuses"("id"),
	CONSTRAINT "fk_scholarships_types_scholarshipes" FOREIGN KEY("type_id") REFERENCES "scholarships_types"("id")
);
CREATE UNIQUE INDEX IF NOT EXISTS "idx_admins_email" ON "admins" (
	"email"
);
CREATE INDEX IF NOT EXISTS "idx_admins_deleted_at" ON "admins" (
	"deleted_at"
);
CREATE INDEX IF NOT EXISTS "idx_scholarships_statuses_deleted_at" ON "scholarships_statuses" (
	"deleted_at"
);
CREATE INDEX IF NOT EXISTS "idx_scholarships_types_deleted_at" ON "scholarships_types" (
	"deleted_at"
);
CREATE INDEX IF NOT EXISTS "idx_scholarships_deleted_at" ON "scholarships" (
	"deleted_at"
);
COMMIT;
