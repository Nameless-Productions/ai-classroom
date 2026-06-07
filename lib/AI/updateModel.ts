import { db } from "../db";

export async function updateModel(model: string) {
    const modelSetting = await db.config.findUnique({
        where: {
            key: "DEFAULT_MODEL"
        }
    })

    if(!modelSetting) {
        db.config.create({
            data: {
                key: "DEFAULT_MODEL",
                value: model
            }
        })
    }

    db.config.update({
        where: {
            key: "DEFAULT_MODEL"
        },
        data: {
            value: model
        }
    })
}