import { int, mysqlEnum, mysqlTable, text, timestamp, varchar } from "drizzle-orm/mysql-core";

/**
 * Core user table backing auth flow.
 * Extend this file with additional tables as your product grows.
 * Columns use camelCase to match both database fields and generated types.
 */
export const users = mysqlTable("users", {
  /**
   * Surrogate primary key. Auto-incremented numeric value managed by the database.
   * Use this for relations between tables.
   */
  id: int("id").autoincrement().primaryKey(),
  /** Manus OAuth identifier (openId) returned from the OAuth callback. Unique per user. */
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

/**
 * Categorías del sitio CAELION
 */
export const categories = mysqlTable("categories", {
  id: int("id").autoincrement().primaryKey(),
  slug: varchar("slug", { length: 64 }).notNull().unique(),
  name: varchar("name", { length: 255 }).notNull(),
  description: text("description"),
  imageUrl: text("imageUrl"),
  order: int("order").default(0).notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Category = typeof categories.$inferSelect;
export type InsertCategory = typeof categories.$inferInsert;

/**
 * Artículos de cada categoría
 */
export const articles = mysqlTable("articles", {
  id: int("id").autoincrement().primaryKey(),
  categoryId: int("categoryId").notNull(),
  slug: varchar("slug", { length: 255 }).notNull().unique(),
  title: varchar("title", { length: 500 }).notNull(),
  subtitle: text("subtitle"),
  content: text("content").notNull(),
  excerpt: text("excerpt"),
  imageUrl: text("imageUrl"),
  authorId: int("authorId").notNull(),
  published: int("published").default(0).notNull(),
  featured: int("featured").default(0).notNull(),
  viewCount: int("viewCount").default(0).notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  publishedAt: timestamp("publishedAt"),
});

export type Article = typeof articles.$inferSelect;
export type InsertArticle = typeof articles.$inferInsert;

/**
 * Tags para artículos
 */
export const tags = mysqlTable("tags", {
  id: int("id").autoincrement().primaryKey(),
  name: varchar("name", { length: 100 }).notNull().unique(),
  slug: varchar("slug", { length: 100 }).notNull().unique(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type Tag = typeof tags.$inferSelect;
export type InsertTag = typeof tags.$inferInsert;

/**
 * Relación muchos a muchos entre artículos y tags
 */
export const articleTags = mysqlTable("article_tags", {
  id: int("id").autoincrement().primaryKey(),
  articleId: int("articleId").notNull(),
  tagId: int("tagId").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

/**
 * Preguntas/comentarios del bot simbiótico
 */
export const questions = mysqlTable("questions", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("userId"),
  content: text("content").notNull(),
  qualityScore: int("qualityScore").default(0).notNull(),
  approved: int("approved").default(0).notNull(),
  rejected: int("rejected").default(0).notNull(),
  rejectionReason: text("rejectionReason"),
  articleId: int("articleId"),
  categoryId: int("categoryId"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Question = typeof questions.$inferSelect;
export type InsertQuestion = typeof questions.$inferInsert;

/**
 * Respuestas del bot simbiótico
 */
export const botResponses = mysqlTable("bot_responses", {
  id: int("id").autoincrement().primaryKey(),
  questionId: int("questionId").notNull(),
  content: text("content").notNull(),
  custodioInvocado: varchar("custodioInvocado", { length: 64 }),
  motorIaUsado: varchar("motorIaUsado", { length: 64 }),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type BotResponse = typeof botResponses.$inferSelect;
export type InsertBotResponse = typeof botResponses.$inferInsert;

/**
 * Historial de interacciones del bot (para WABUN)
 */
export const botInteractions = mysqlTable("bot_interactions", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("userId"),
  questionId: int("questionId").notNull(),
  responseId: int("responseId"),
  sessionId: varchar("sessionId", { length: 255 }),
  userFeedback: mysqlEnum("userFeedback", ["positive", "negative", "neutral"]),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type BotInteraction = typeof botInteractions.$inferSelect;
export type InsertBotInteraction = typeof botInteractions.$inferInsert;