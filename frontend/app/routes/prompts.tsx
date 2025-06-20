import { useLoaderData, Link } from "@remix-run/react";
import { json } from "@remix-run/node";
import api from "../services/api";

export const loader = async () => {
  const response = await api.get("/snippets");
  return json(response.data);
};

export default function PromptsPage() {
  const prompts = useLoaderData<typeof loader>();

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-8">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-xl shadow-md">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-center w-full">All Prompts</h1>
        </div>

        <div className="space-y-4">
          {prompts.map((item: any, index: number) => (
            <div key={index} className="bg-gray-50 p-4 rounded-md shadow">
              <p className="font-semibold">Prompt:</p>
              <p className="mb-2">{item.text}</p>
              <p className="font-semibold">Summary:</p>
              <p>{item.summary}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-end mb-4">
          <Link
            to="/"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
