-- CreateTable
CREATE TABLE "blocks" (
    "bl__uuid" UUID NOT NULL DEFAULT gen_random_uuid(),
    "bl_block" VARCHAR(50),
    "bl_address" VARCHAR(50),
    "bl_hour" VARCHAR(50),

    CONSTRAINT "blocks_pkey" PRIMARY KEY ("bl__uuid")
);
