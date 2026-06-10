/*
  Warnings:

  - Added the required column `classId` to the `Assigment` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Assigment" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "classId" INTEGER NOT NULL,
    "hasQuiz" BOOLEAN NOT NULL,
    "hasFlashcards" BOOLEAN NOT NULL
);
INSERT INTO "new_Assigment" ("content", "hasFlashcards", "hasQuiz", "id", "name") SELECT "content", "hasFlashcards", "hasQuiz", "id", "name" FROM "Assigment";
DROP TABLE "Assigment";
ALTER TABLE "new_Assigment" RENAME TO "Assigment";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
