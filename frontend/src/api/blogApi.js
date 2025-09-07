// Blog API client for user blog pages
// Uses the same base URL convention as other frontend APIs
import { API_CONFIG, buildApiUrl } from "./config";

const handleResponse = async (response) => {
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData?.message || `HTTP error! status: ${response.status}`);
  }
  return response.json();
};

// Normalize list response
const normalizeArticlesList = (json) => {
  if (Array.isArray(json)) return json;
  if (Array.isArray(json?.data)) return json.data;
  if (Array.isArray(json?.articles)) return json.articles;
  if (Array.isArray(json?.docs)) return json.docs;
  if (Array.isArray(json?.data?.docs)) return json.data.docs;
  return [];
};

// Normalize single article response
const normalizeSingleArticle = (json) => {
  if (json?.data && typeof json.data === "object") return json.data;
  if (json?.article && typeof json.article === "object") return json.article;
  return json;
};

export async function getAllArticles() {
  const response = await fetch(buildApiUrl("/api/v1/articles"), {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  return normalizeArticlesList(await handleResponse(response));
}

export async function getArticleById(id) {
  if (!id) throw new Error("Article id is required");
  const response = await fetch(buildApiUrl(`/api/v1/articles/${id}`), {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  return normalizeSingleArticle(await handleResponse(response));
}

export async function createArticle(articleData) {
  const response = await fetch(buildApiUrl("/api/v1/articles"), {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(articleData),
  });
  return normalizeSingleArticle(await handleResponse(response));
}

export async function updateArticle(id, updatedData) {
  if (!id) throw new Error("Article id is required");
  const response = await fetch(buildApiUrl(`/api/v1/articles/${id}`), {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedData),
  });
  return normalizeSingleArticle(await handleResponse(response));
}

export async function deleteArticle(id) {
  if (!id) throw new Error("Article id is required");
  const response = await fetch(buildApiUrl(`/api/v1/articles/${id}`), {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });
  return normalizeSingleArticle(await handleResponse(response));
}

export default {
  getAllArticles,
  getArticleById,
  createArticle,
  updateArticle,
  deleteArticle,
};
