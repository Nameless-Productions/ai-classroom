"use server"
import { db } from "../db"

export async function getUserClasses(userId: number) {
  const enrollments = await db.enrollment.findMany({
    where: { userId },
    select: { classId: true }
  })

  const classes = await Promise.all(
    enrollments.map(e =>
      db.classes.findUnique({
        where: { id: e.classId },
        select: { id: true, name: true }
      })
    )
  )

  return classes.filter(c => c !== null)
}