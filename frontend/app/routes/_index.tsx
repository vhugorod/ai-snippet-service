import { Form, useActionData } from "@remix-run/react";
import type { ActionFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Link } from "@remix-run/react";
import api from "../services/api";

export const action: ActionFunction = async ({ request }) => {
  try {
    const form = await request.formData();
    const text = form.get("text");

    const response = await api.post("/snippets", { text });
    return json(response.data);
  } catch (error) {
    console.error("API error:", error);
    return json({ error: "Failed to generate summary" }, { status: 500 });
  }
};

export default function Index() {
  const data = useActionData<typeof action>();

  return (
    <div>
      <Form method="post" className="space-y-4">
        <label className="block">
          <textarea
            name="text"
            rows={6}
            required
            className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </label>
        <button
          type="submit"
          className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Create Summary
        </button>
      </Form>

      {data && (
        <div className="mt-8 bg-gray-50 p-4 rounded-lg border border-gray-200">
          <h2 className="font-semibold text-lg text-gray-800">Summary:</h2>
          <p className="mt-2 text-gray-700 whitespace-pre-wrap">{data.summary}</p>
        </div>
      )}
      <Link to="/prompts">
        <button className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800 mt-4">
          View All Prompts
        </button>
      </Link>
    </div>
  );
}
