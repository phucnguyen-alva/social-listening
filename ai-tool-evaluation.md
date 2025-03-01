---
title: AI Tool Evaluation
layout: layout.liquid
---

<div class="max-w-3xl mx-auto p-6 bg-gray-800 rounded-lg shadow-lg">
    
    <h1 class="text-3xl font-bold text-center text-white mb-6">🧠 AI Tool Evaluation</h1>

    <p class="text-gray-300 mb-4">
        For this assignment, I used **ChatGPT-4o** and **Claude** to assist in developing a 
        <span class="text-blue-400 font-semibold">social listening tool</span> using **Alpine.js, Alpine Fetch, and Tailwind CSS** while integrating two API endpoints:
    </p>

    <ul class="list-disc list-inside text-gray-300 mb-4">
        <ul>📌 **Posts API:** <code>https://dummyjson.com/posts</code></ul>
        <ul>📌 **Comments API:** <code>https://dummyjson.com/comments</code></ul>
    </ul>

    <h2 class="text-2xl font-semibold text-white mt-6 mb-4">📊 Performance Comparison</h2>

    <p class="text-gray-300 mb-4">
        Initially, I asked ChatGPT-4o to include **Alpine.js, Alpine Fetch, and Tailwind CSS** in my layout. 
        It successfully updated the **`layout.liquid`** file with the correct dependencies. However, when I prompted it to 
        integrate both API endpoints, it generated a static template with placeholders instead of dynamically fetching and rendering data.
    </p>

    <p class="text-gray-300 mb-4">
        In contrast, **Claude** provided a fully functional <code>fetchData()</code> method that efficiently used 
        <code>Promise.all()</code> to retrieve data concurrently. It correctly stored the data in Alpine.js variables, ensuring reactivity.
    </p>

    <h2 class="text-2xl font-semibold text-white mt-6 mb-4">📝 Conclusion</h2>

    <p class="text-gray-300 mb-4">
        **Claude** performed better at handling **real-time coding tasks**, particularly those involving **API fetching and state management**, 
        while **ChatGPT-4o** was more effective at **conceptual structuring** and generating supporting data (like stop words and themes).
    </p>

    <p class="text-gray-300">
        Moving forward, I would use **Claude for live coding assistance** and **ChatGPT-4o for structured data generation**, 
        creating a workflow that balances automation with logical structuring.
    </p>

</div>
