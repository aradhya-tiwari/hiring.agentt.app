import { sql } from "drizzle-orm"

export function queryBuilder(queryObj: Record<string, string>) {
    let conditions: any[] = []
    let allowedProps = ["phone", "name", "jobId", "email"]

    for (let prop of allowedProps) {
        if (queryObj[prop]) {
            conditions.push(sql`${sql.raw(prop)} = ${queryObj[prop]}`)
        }
        if (prop === "email") {
            console.log("Hurraryyyyy")
        }
    }

    if (conditions.length === 0) {
        return undefined
    }

    return sql.join(conditions, sql` AND `)
}

