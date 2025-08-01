import * as s from "drizzle-orm/sqlite-core"
import { relations } from "drizzle-orm"
import { createInsertSchema } from "drizzle-zod"
import { udb } from "../db.js"
import { eq, sql } from "drizzle-orm"


export const configTable = s.sqliteTable("config", {
    id: s.integer().primaryKey({ autoIncrement: true }),
    name: s.text({ enum: ["llm_key", "version", "banned"] }).notNull(),
    value: s.text().notNull(),
    metdata: s.text({ mode: "json" }).$type<object>(),
    createdAt: s.text('created_at').notNull().default(sql`(CURRENT_TIMESTAMP)`),
    updatedAt: s.text('updated_at').$onUpdate(() => new Date().toISOString()),
})
export const scheduleTable = s.sqliteTable('schedule_table', {
    id: s.integer().primaryKey({ autoIncrement: true }),
    type: s.text({ enum: ["ai-meet", "custom", "internal", "resume-screen", ""] }),
    applicantId: s.integer().references(() => applicantsTable.id),
    time: s.text().notNull(),
    createdAt: s.text('created_at').notNull().default(sql`(CURRENT_TIMESTAMP)`),
    updatedAt: s.text('updated_at').$onUpdate(() => new Date().toISOString()),
})
export const usage = s.sqliteTable("usage", {
    id: s.integer().primaryKey({ autoIncrement: true }),
    creditsRemaining: s.integer("credits_remaining").notNull().default(0),
    totalCredits: s.integer("total_credits").notNull().default(0),
    plan: s.text({ enum: ["free", "pro", "enterprise"] }).notNull().default("free"),
    createdAt: s.text('created_at').notNull().default(sql`(CURRENT_TIMESTAMP)`),
    updatedAt: s.text('updated_at').$onUpdate(() => new Date().toISOString()),
})
export const applicantsTable = s.sqliteTable("applicants", {
    id: s.integer().primaryKey({ autoIncrement: true }),
    jobId: s.integer().notNull().references(() => jobsTable.id),
    name: s.text().notNull(),
    email: s.text().notNull(),
    phone: s.text(),
    status: s.text({ enum: ['applied', 'screening', 'rejected', 'hired'] }).notNull().default("applied"),
    resumeStorageId: s.text("resume_storage_id").notNull(),
    remarks: s.text({ mode: "json" }).$type<Array<{ by: number, rating: number, remark: string }>>(),
    formResponse: s.text("form_response", { mode: "json" }).$type<object>(),
    createdAt: s.text('created_at').notNull().default(sql`(CURRENT_TIMESTAMP)`),
    updatedAt: s.text('updated_at').$onUpdate(() => new Date().toISOString()),
})

export const empTable = s.sqliteTable("emp", {
    id: s.integer().primaryKey({ autoIncrement: true }),
    name: s.text().notNull(),
    email: s.text().notNull(),
    phone: s.text(),
    role: s.text().notNull().default("employee"),
    joinedAt: s.text('joined_at').notNull().default(sql`(CURRENT_TIMESTAMP)`),
})

export const jobsTable = s.sqliteTable("jobs", {
    id: s.integer().primaryKey({ autoIncrement: true }),
    role: s.text().notNull(),
    description: s.text().notNull(), // markdown rahega
    status: s.text({ enum: ["open", "closed", "screening"] }).notNull().default("open"),
    skills: s.text({ mode: "json" }).$type<Array<string>>().notNull(),
    exp: s.text().notNull(),
    salary: s.integer().notNull(),
    location: s.text({ mode: "json" }).$type<{ country: string, city: string, location: string }>().notNull(),
    createdAt: s.text('created_at').notNull().default(sql`(CURRENT_TIMESTAMP)`),
    updatedAt: s.text('updated_at').$onUpdate(() => new Date().toISOString()),

})

export const empJobMapTable = s.sqliteTable("empJobMap", {
    id: s.integer().primaryKey({ autoIncrement: true }),
    empId: s.integer().notNull(),
    jobId: s.integer().notNull(),
    role: s.text().notNull().default("employee"),
    status: s.text().default("applied"),
    createdAt: s.text('created_at').notNull().default(sql`(CURRENT_TIMESTAMP)`),
    updatedAt: s.text('updated_at').$onUpdate(() => new Date().toISOString()),

});

// -- Notification schema
export const notificationTable = s.sqliteTable("notifications", {
    id: s.integer().primaryKey({ autoIncrement: true }),
    sender: s.integer().notNull(),
    receiver: s.integer().notNull() || s.text({ enum: ["all"] }),
    message: s.text().notNull(),
    to: s.text({ mode: 'json' }).$type<{
        id: number,
        read: string
    }[]>(),
    createdAt: s.text('created_at').notNull().default(sql`(CURRENT_TIMESTAMP)`),
    updatedAt: s.text('updated_at').$onUpdate(() => new Date().toISOString()),
})
// -- Process schema
export const processTable = s.sqliteTable("process", {
    id: s.integer().primaryKey({ autoIncrement: true }),
    jobId: s.integer("job_id").notNull().references(() => jobsTable.id),
    name: s.text().notNull(),
    stepNum: s.integer().notNull(),
    type: s.text({ enum: ["quiz", "ai-meet", "custom", "jd_form", "resume_screen"] }).notNull(),
    status: s.text().notNull().default("created"),
    completed: s.integer("completed_at", { mode: "boolean" }).notNull().default(false),
    createdAt: s.text('created_at').notNull().default(sql`(CURRENT_TIMESTAMP)`),
    updatedAt: s.text('updated_at').$onUpdate(() => new Date().toISOString()),
})


// -- Config schemas
export const resumeScreenConfigTable = s.sqliteTable("resume_screener", {
    id: s.integer().primaryKey({ autoIncrement: true }),
    jobId: s.integer("job_id").notNull().references(() => jobsTable.id),
    processId: s.integer("process_id").notNull().references(() => processTable.id),
    status: s.text({ enum: ["created", "active", "inactive"] }).notNull().default("created"),
    // experience:s.text(),
    // education:s.text(),
    // skills:s.text(),
    prompt: s.text().notNull(),
    updatedAt: s.text('updated_at').$onUpdate(() => new Date().toISOString()),
})

export const quizConfigTable = s.sqliteTable("quiz_config", {
    id: s.integer().primaryKey({ autoIncrement: true }),
    jobId: s.integer("job_id").notNull().references(() => jobsTable.id),
    processId: s.integer("process_id").notNull().references(() => processTable.id),
    prompt: s.text().notNull(),
    notes: s.text(),
    questions: s.text({ mode: "json" }).$type<Array<{ question: string, ideal_answer: string }>>().notNull(),
    status: s.text().notNull().default("created")
})

export const customScreenConfigTable = s.sqliteTable("custom_screen_config", {
    id: s.integer().primaryKey({ autoIncrement: true }),
    jobId: s.integer("job_id").notNull().references(() => jobsTable.id),
    processId: s.integer("process_id").notNull().references(() => processTable.id),
    prompt: s.text().notNull(),
    notes: s.text({ mode: "json" }).$type<Array<{ by: number, msg: string }>>(),
    status: s.text().notNull().default("created"),
    meetID: s.text("meet_id"),

})

export const aiMeetConfigTable = s.sqliteTable("aiMeetConfig", {
    id: s.integer().primaryKey({ autoIncrement: true }),
    jobId: s.integer("job_id").notNull().references(() => jobsTable.id),
    processId: s.integer("process_id").notNull().references(() => processTable.id),
    status: s.text().notNull().default("created"),
    prompt: s.text()
})


// -- Results schemas 
export const resumeScreenResultTable = s.sqliteTable("resume_screener_result", {
    id: s.integer("id").primaryKey({ autoIncrement: true }),
    resumeScreenConfigId: s.integer().notNull().references(() => resumeScreenConfigTable.id),
    jobId: s.integer("job_id").notNull().references(() => jobsTable.id),
    processId: s.integer().notNull().references(() => processTable.id),
    candidateId: s.integer('candidate_id').notNull().references(() => applicantsTable.id),
    aiRemark: s.text("ai_remark"),
    score: s.integer(),
    notes: s.text({ mode: "json" }).$type<Array<{ by: number, remark: string }>>(),
    createdAt: s.text('created_at').notNull().default(sql`(CURRENT_TIMESTAMP)`),
    updatedAt: s.text('updated_at').$onUpdate(() => new Date().toISOString()),

})

export const quizResultTable = s.sqliteTable("quiz_result", {
    id: s.integer("id").primaryKey({ autoIncrement: true }),
    quizConfigId: s.integer().notNull().references(() => quizConfigTable.id),
    jobId: s.integer("job_id").notNull().references(() => jobsTable.id),
    processId: s.integer().notNull().references(() => processTable.id),
    candidateId: s.integer('candidate_id').notNull().references(() => applicantsTable.id),
    aiRemark: s.text("ai_remark"),
    score: s.integer(),
    notes: s.text({ mode: "json" }).$type<Array<{ by: number, msg: string }>>(),
})


export const customScreenResultTable = s.sqliteTable("custom_screen_result", {
    id: s.integer("id").primaryKey({ autoIncrement: true }),
    customScreenConfigId: s.integer().notNull().references(() => customScreenConfigTable.id),
    candidateId: s.integer('candidate_id').notNull().references(() => applicantsTable.id),
    jobId: s.integer("job_id").notNull().references(() => jobsTable.id),
    processId: s.integer().notNull().references(() => processTable.id),
    score: s.integer(),
    notes: s.text({ mode: "json" }).$type<Array<{ by: number, msg: string }>>(),
    remark: s.text(),
})
export const aiMeetResultTable = s.sqliteTable("aiMeetResult", {
    id: s.integer("id").primaryKey({ autoIncrement: true }),
    aiMeetConfigId: s.integer().notNull().references(() => aiMeetConfigTable.id),
    jobId: s.integer("job_id").notNull().references(() => jobsTable.id),
    processId: s.integer("process_id").notNull().references(() => processTable.id),
    candidateId: s.integer('candidate_id').notNull().references(() => applicantsTable.id),
    result: s.text("result", { mode: "json" }).$type<Array<{ question: string, answer: string }>>().notNull(),
    status: s.text().notNull().default("created"),
    aiRemark: s.text("ai_remark"),
    score: s.integer(),
    notes: s.text({ mode: "json" }).$type<Array<{ by: number, remark: string }>>(),

})
// export { customScreenConfigTable, customScreenResultTable, aiMeetConfigTable, aiMeetResultTable, quizConfigTable, quizResultTable, resumeScreenConfigTable, resumeScreenResultTable }

// -- Zod Schema 
export const zodResumeScreenConfig = createInsertSchema(resumeScreenConfigTable)
export const zodApplicants = createInsertSchema(applicantsTable)

// -- Relations --

export const jobsRelations = relations(jobsTable, ({ many }) => ({
    processes: many(processTable),
}));

export const processRelations = relations(processTable, ({ one, many }) => ({
    job: one(jobsTable, {
        fields: [processTable.jobId],
        references: [jobsTable.id],
    }),
    resumeScreenResults: many(resumeScreenResultTable),
    quizResults: many(quizResultTable),
    customScreenResults: many(customScreenResultTable),
    aiMeetResults: many(aiMeetResultTable),
}));

export const resumeScreenConfigRelations = relations(resumeScreenConfigTable, ({ many, one }) => ({
    results: many(resumeScreenResultTable),
    job: one(jobsTable, {
        fields: [resumeScreenConfigTable.jobId],
        references: [jobsTable.id],
    }),
}));

export const quizConfigRelations = relations(quizConfigTable, ({ many, one }) => ({
    results: many(quizResultTable),
    job: one(jobsTable, {
        fields: [quizConfigTable.jobId],
        references: [jobsTable.id],
    }),
}));

export const customScreenConfigRelations = relations(customScreenConfigTable, ({ many, one }) => ({
    results: many(customScreenResultTable),
    job: one(jobsTable, {
        fields: [customScreenConfigTable.jobId],
        references: [jobsTable.id],
    }),
}));

export const aiMeetConfigRelations = relations(aiMeetConfigTable, ({ many, one }) => ({
    results: many(aiMeetResultTable),
    job: one(jobsTable, {
        fields: [aiMeetConfigTable.jobId],
        references: [jobsTable.id],
    }),
}));

export const resumeScreenResultRelations = relations(resumeScreenResultTable, ({ one }) => ({
    resumeScreenConfig: one(resumeScreenConfigTable, {
        fields: [resumeScreenResultTable.resumeScreenConfigId],
        references: [resumeScreenConfigTable.id],
    }),
    job: one(jobsTable, {
        fields: [resumeScreenResultTable.jobId],
        references: [jobsTable.id],
    }),
    process: one(processTable, {
        fields: [resumeScreenResultTable.processId],
        references: [processTable.id],
    }),
    candidate: one(applicantsTable, {
        fields: [resumeScreenResultTable.candidateId],
        references: [applicantsTable.id],
    }),
}));

export const quizResultRelations = relations(quizResultTable, ({ one }) => ({
    quizConfig: one(quizConfigTable, {
        fields: [quizResultTable.quizConfigId],
        references: [quizConfigTable.id],
    }),
    job: one(jobsTable, {
        fields: [quizResultTable.jobId],
        references: [jobsTable.id],
    }),
    process: one(processTable, {
        fields: [quizResultTable.processId],
        references: [processTable.id],
    }),
    candidate: one(applicantsTable, {
        fields: [quizResultTable.candidateId],
        references: [applicantsTable.id],
    }),
}));

export const customScreenResultRelations = relations(customScreenResultTable, ({ one }) => ({
    customScreenConfig: one(customScreenConfigTable, {
        fields: [customScreenResultTable.customScreenConfigId],
        references: [customScreenConfigTable.id],
    }),
    job: one(jobsTable, {
        fields: [customScreenResultTable.jobId],
        references: [jobsTable.id],
    }),
    process: one(processTable, {
        fields: [customScreenResultTable.processId],
        references: [processTable.id],
    }),
    candidate: one(applicantsTable, {
        fields: [customScreenResultTable.candidateId],
        references: [applicantsTable.id],
    }),
}));

export const aiMeetResultRelations = relations(aiMeetResultTable, ({ one }) => ({
    aiMeetConfig: one(aiMeetConfigTable, {
        fields: [aiMeetResultTable.aiMeetConfigId],
        references: [aiMeetConfigTable.id],
    }),
    job: one(jobsTable, {
        fields: [aiMeetResultTable.jobId],
        references: [jobsTable.id],
    }),
    process: one(processTable, {
        fields: [aiMeetResultTable.processId],
        references: [processTable.id],
    }),
    candidate: one(applicantsTable, {
        fields: [aiMeetResultTable.candidateId],
        references: [applicantsTable.id],
    }),
}));

export const applicantsRelations = relations(applicantsTable, ({ many }) => ({
    resumeScreenResults: many(resumeScreenResultTable),
    quizResults: many(quizResultTable),
    customScreenResults: many(customScreenResultTable),
    aiMeetResults: many(aiMeetResultTable),
}));