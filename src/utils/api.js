export async function generateImage(category) {
  // Replace with your backend endpoint
  const res = await fetch(`/api/generate?category=${encodeURIComponent(category)}`);
  const data = await res.json();
  return data.imageUrl;
}
