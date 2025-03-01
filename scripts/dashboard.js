function socialDashboard() {
    return {
        posts: [],
        comments: [],
        frequentWords: null,  // Initially null
        themes: null,         // Initially null

        async fetchData() {
            try {
                const [postsResponse, commentsResponse] = await Promise.all([
                    fetch("https://dummyjson.com/posts"),
                    fetch("https://dummyjson.com/comments")
                ]);

                const postsData = await postsResponse.json();
                const commentsData = await commentsResponse.json();

                this.posts = postsData.posts;
                this.comments = commentsData.comments;
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        },

        findMostFrequentWords() {
            this.frequentWords = "Analyzing..."; // Temporary state before processing

            const stopWords = new Set(["a", "an", "and", "are", "as", "at", "be", "but", "by", "for", "if", "in", "into",
                "is", "it", "of", "on", "or", "so", "that", "the", "to", "was", "were", "will", "with", 
                "i", "you", "he", "she", "we", "they", "this", "those", "these", "his", "her", "its",
                "from", "then", "than", "what", "which", "when", "who", "whom", "where", "how", "why", 
                "had", "there", "could", "would", "didnt", "been","wasnt", "have", "not", "him", "all", 
                "still", "them", "one"
            ]);

            let wordCount = {};

            [...this.posts, ...this.comments].forEach(item => {
                item.body.split(/\s+/).forEach(word => {
                    word = word.toLowerCase().replace(/[^a-z]/g, '');
                    if (word.length > 2 && !stopWords.has(word)) {
                        wordCount[word] = (wordCount[word] || 0) + 1;
                    }
                });
            });

            let sortedWords = Object.entries(wordCount)
                .sort((a, b) => b[1] - a[1])
                .slice(0, 5)
                .map(([word, count]) => `${word} (${count})`);

            this.frequentWords = sortedWords.length ? sortedWords.join(', ') : "No meaningful words found.";
        },

        detectThemes() {
            this.themes = "Analyzing..."; // Temporary state before processing

            let themesMap = {
                "Technology & Innovation": ["AI", "computer", "tech", "innovation", "robot", "system"],
                "Society & Relationships": ["community", "people", "society", "culture", "family", "friends"],
                "Survival & Emergency": ["fire", "emergency", "panic", "danger", "evacuation", "forest", "storm"],
                "Crime & Conflict": ["gun", "police", "crime", "robbery", "violence", "fight", "escape"],
                "Personal Struggles & Reflection": ["depression", "loneliness", "thinking", "memories", "regret"],
                "Fantasy & Dreams": ["dream", "magic", "illusion", "unreal", "mystery", "destiny"],
                "Business & Economy": ["market", "money", "company", "business", "job", "education", "work"],
                "Entertainment & Media": ["movie", "music", "show", "artist", "story", "fiction"],
                "Surreal & Unexplained": ["strange", "mystery", "paranormal", "unreal", "supernatural"],
                "Daily Life & Routine": ["cook", "eat", "food", "habit", "routine", "shopping", "waiting"]
            };

            let detectedThemes = {};

            [...this.posts, ...this.comments].forEach(item => {
                Object.keys(themesMap).forEach(theme => {
                    themesMap[theme].forEach(keyword => {
                        if (item.body.toLowerCase().includes(keyword)) {
                            detectedThemes[theme] = (detectedThemes[theme] || 0) + 1;
                        }
                    });
                });
            });

            this.themes = Object.entries(detectedThemes)
                .sort((a, b) => b[1] - a[1])
                .map(([theme, count]) => `${theme} (${count})`)
                .join(', ') || "No significant themes detected.";
        },

        async init() { 
            await this.fetchData();
        }
    };
}
