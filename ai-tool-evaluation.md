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
        <li>📌 **Posts API:** <code>https://dummyjson.com/posts</code></li>
        <li>📌 **Comments API:** <code>https://dummyjson.com/comments</code></li>
    </ul>

    <h2 class="text-2xl font-semibold text-white mt-6 mb-4">📊 Performance Comparison</h2>

    <p class="text-gray-300 mb-4">
        Initially, I asked ChatGPT-4o to **include Alpine.js, Alpine Fetch, and Tailwind CSS** in my layout. 
        It successfully updated the **`layout.liquid`** file with the correct dependencies. However, when I prompted it to 
        integrate both API endpoints, it generated a static template with placeholders instead of dynamically fetching and rendering data.
    </p>

    <p class="bg-gray-700 p-4 rounded-lg text-gray-200 text-sm italic mb-4">
        **Prompt:**  
        <code>incorporate two end points for a social listening tool: (1) https://dummyjson.com/posts (2) https://dummyjson.com/comments</code>  
    </p>

    <h3 class="text-xl font-semibold text-white mt-4 mb-2">🔹 ChatGPT-4o’s Response:</h3>
    <p class="bg-gray-700 p-4 rounded-lg text-gray-300 text-sm mb-4">
        <code>
        &lt;main class="p-6"&gt; <br>
            &lt;section class="mb-8"&gt; <br>
                &lt;h2 class="text-2xl font-bold mb-4"&gt;Endpoint 1&lt;/h2&gt; <br>
                &lt;div id="endpoint1" class="p-4 bg-gray-800 rounded"&gt; <br>
                    {{ endpoint1_content }} <br>
                &lt;/div&gt; <br>
            &lt;/section&gt; <br>
            &lt;section&gt; <br>
                &lt;h2 class="text-2xl font-bold mb-4"&gt;Endpoint 2&lt;/h2&gt; <br>
                &lt;div id="endpoint2" class="p-4 bg-gray-800 rounded"&gt; <br>
                    {{ endpoint2_content }} <br>
                &lt;/div&gt; <br>
            &lt;/section&gt; <br>
        &lt;/main&gt;
        </code>
    </p>

    <p class="text-gray-300 mb-4">
        ChatGPT-4o's response **failed to dynamically fetch data** from the API endpoints. Instead, it used template placeholders (`{{ endpoint1_content }}`), which are not useful in an **Alpine.js-based reactive setup**.
    </p>

    <h3 class="text-xl font-semibold text-white mt-4 mb-2">🔹 Claude’s Response:</h3>
    <p class="bg-gray-700 p-4 rounded-lg text-gray-300 text-sm mb-4">
        <code>
        async fetchData() { <br>
            try { <br>
                const [postsResponse, commentsResponse] = await Promise.all([ <br>
                    fetch("https://dummyjson.com/posts"), <br>
                    fetch("https://dummyjson.com/comments") <br>
                ]); <br>
                const postsData = await postsResponse.json(); <br>
                const commentsData = await commentsResponse.json(); <br>
                this.posts = postsData.posts; <br>
                this.comments = commentsData.comments; <br>
            } catch (error) { <br>
                console.error('Error fetching data:', error); <br>
            } <br>
        }
        </code>
    </p>

    <p class="text-gray-300 mb-4">
        **Claude's response provided a working implementation** that correctly fetched and stored data from both APIs in **Alpine.js variables**, making it reactive and usable for real-time UI updates.
    </p>

    <h2 class="text-2xl font-semibold text-white mt-6 mb-4">📌 Stop Words and Themes Mapping</h2>

    <p class="bg-gray-700 p-4 rounded-lg text-gray-200 text-sm italic mb-4">
        **Prompt:**  
        <code>generate list of stopwords and themes mapping</code>
    </p>

    <h3 class="text-xl font-semibold text-white mt-4 mb-2">🔹 ChatGPT-4o’s Response:</h3>

    <p class="bg-gray-700 p-4 rounded-lg text-gray-300 text-sm mb-4">
        <strong>Stop Words:</strong>  
        <code>["a", "an", "and", "are", "as", "at", "be", "but", "by", "for", "if", "in", "into", "is", "it", "of", "on", "or", "so", "that", "the", "to", "was", "were", "will", "with", "i", "you", "he", "she", "we", "they"]</code>
    </p>

    <p class="bg-gray-700 p-4 rounded-lg text-gray-300 text-sm mb-4">
        <strong>Themes Mapping:</strong>  
        <code>{
        "Technology & Innovation": ["AI", "computer", "tech", "innovation"],
        "Society & Relationships": ["community", "people", "society", "culture"],
        "Crime & Conflict": ["gun", "police", "crime", "violence"],
        "Fantasy & Dreams": ["dream", "magic", "illusion"]
        }</code>
    </p>

    <p class="text-gray-300 mb-4">
        While **Claude was better at coding live API integration**, **ChatGPT-4o was excellent at generating structured data**. It provided a **clear, categorized list** of stop words and themes, which I was able to use for **word frequency analysis and sentiment detection**.
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
