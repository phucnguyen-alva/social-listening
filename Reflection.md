# Effectiveness of AI Tools for This Assignment

For this assignment, I utilized both ChatGPT-4o and Claude to assist in building a social listening tool using Alpine.js, Alpine Fetch, and Tailwind CSS, while integrating two API endpoints:
1. Posts API: https://dummyjson.com/posts
2. Comments API: https://dummyjson.com/comments

Comparing AI Model Responses
My first prompt asked ChatGPT-4o to include Alpine.js, Alpine Fetch, and Tailwind CSS in the <head> of my main HTML page. It successfully inserted the correct dependencies into my layout.liquid file, setting up the foundational structure of the project. However, when I prompted it to incorporate two API endpoints into the social listening tool, its response was less effective than expected.

# ChatGPT-4o provided a layout with placeholder elements:

<main class="p-6">
    <section class="mb-8">
        <h2 class="text-2xl font-bold mb-4">Endpoint 1</h2>
        <div id="endpoint1" class="p-4 bg-gray-800 rounded">
            <!-- Content from Endpoint 1 will be rendered here -->
            {{ endpoint1_content }}
        </div>
    </section>
    <section>
        <h2 class="text-2xl font-bold mb-4">Endpoint 2</h2>
        <div id="endpoint2" class="p-4 bg-gray-800 rounded">
            <!-- Content from Endpoint 2 will be rendered here -->
            {{ endpoint2_content }}
        </div>
    </section>
</main>


This approach did not dynamically fetch and display data from the APIs; instead, it assumed pre-rendered template variables like {{ endpoint1_content }} and {{ endpoint2_content }}, which were not suitable for an Alpine.js-based implementation.

# In contrast, Claude provided a much more functional response by correctly implementing a fetchData() method that handled concurrent API requests using Promise.all():

async fetchData() {
    try {
        // Fetch both endpoints concurrently
        const [postsResponse, commentsResponse] = await Promise.all([
            fetch("https://dummyjson.com/posts"),
            fetch("https://dummyjson.com/comments")
        ]);

        const postsData = await postsResponse.json();
        const commentsData = await commentsResponse.json();

        this.posts = postsData.posts;
        this.comments = commentsData.comments;
        
        // After fetching both, analyze the data
        this.findMostFrequentWords();
        this.detectThemes();
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

Claude’s response correctly retrieved data from both endpoints, stored it in reactive properties (this.posts and this.comments), and even triggered analysis functions after the data was loaded. This was a far more useful response, as it immediately provided a working JavaScript implementation instead of just a static layout.

# When ChatGPT-4o Performed Well
Although Claude was better at handling state-aware coding and inserting functional Alpine.js code, I found ChatGPT-4o to be more effective when generating supporting data, such as stop words and themes for text analysis. After switching back to ChatGPT-4o for generating common themes and stop words, it provided structured lists that were well-organized and easy to integrate into my analysis functions. This suggests that while ChatGPT-4o is not always the best at tracking project state across multiple prompts, it excels at generating structured data and conceptual elements for implementation.

# Final Thoughts
Both models had strengths in different areas. Claude performed better at implementing live code that directly fit into the Alpine.js framework, effectively recognizing the need for dynamic updates and concurrent API fetching. Meanwhile, ChatGPT-4o was more useful for auxiliary tasks, like generating stop words and structured themes. If I were to use AI assistance in future projects, I would likely use Claude for real-time coding support and ChatGPT-4o for conceptual structuring and generating supporting data. Combining both tools created a well-rounded workflow that significantly improved efficiency.



