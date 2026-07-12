import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ArrowLeft } from "lucide-react";

export const BlogPost = () => {
  const { slug } = useParams();
  const [content, setContent] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch the markdown file from the public/blogs folder
    const fetchBlog = async () => {
      try {
        const response = await fetch(`/blogs/${slug}.md`);
        if (!response.ok) {
          throw new Error("Blog not found");
        }
        const text = await response.text();
        setContent(text);
      } catch (error) {
        setContent("# 404\n\nBlog post not found.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlog();
  }, [slug]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center font-mono">
        LOADING_DATA...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-24 px-4 font-sans text-foreground">
      <div className="container mx-auto max-w-4xl">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 mb-12 brutal-button-secondary py-2 px-4 text-sm"
        >
          <ArrowLeft size={16} /> RETURN_TO_BASE
        </Link>

        <article className="brutal-card p-8 md:p-16 prose prose-lg prose-h1:text-4xl prose-h1:font-black prose-h1:uppercase prose-h2:font-black prose-h2:uppercase prose-h2:border-b-4 prose-h2:border-border prose-h2:pb-2 prose-code:bg-secondary/20 prose-code:px-1 prose-pre:bg-card prose-pre:border-2 prose-pre:border-border prose-pre:shadow-[4px_4px_0_0_var(--color-border)] prose-pre:text-foreground prose-a:text-primary max-w-none">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {content}
          </ReactMarkdown>
        </article>
      </div>
    </div>
  );
};
