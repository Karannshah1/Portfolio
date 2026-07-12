# Building a Semantic Search Engine with BERT

*By Karan Shah | April 15, 2026*

In the age of information overload, traditional keyword search is no longer sufficient. When users search for "how to fix a leaky pipe," they don't just want documents containing the words "leaky" and "pipe"—they want documents that conceptually answer the question.

This is where Semantic Search and models like BERT come into play.

## What is BERT?
BERT (Bidirectional Encoder Representations from Transformers) is a transformer-based machine learning technique for NLP pre-training developed by Google.

### Why use BERT for Search?
1. **Contextual Understanding:** It understands the context of a word based on its surroundings (bidirectional).
2. **Embeddings:** It converts sentences into dense vector representations where semantically similar sentences are close to each other in vector space.

## The Architecture

Here is how we built InsightFinder:
1. **Document Processing pipeline:** Cleaned text and chunked it into 512-token segments.
2. **Vectorization:** Used `sentence-transformers/all-MiniLM-L6-v2` to create embeddings.
3. **Vector Database:** Stored these embeddings in Pinecone for ultra-fast cosine similarity search.
4. **FastAPI Backend:** Built a lightweight Python backend to serve requests.

```python
from sentence_transformers import SentenceTransformer
import pinecone

model = SentenceTransformer('all-MiniLM-L6-v2')

def search(query):
    # Convert query to vector
    query_vector = model.encode(query).tolist()
    
    # Query Pinecone
    results = index.query(query_vector, top_k=5, include_metadata=True)
    return results
```

The result? A search engine that understands what you mean, not just what you say.
