import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";
import { chronicles } from "@/data/missions";
import { GridBackground } from "@/components/grid-background";
import { PixelButton } from "@/components/pixel-button";
import { PixelPageHeader } from "@/components/pixel-page-header";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = chronicles.find((c) => c.slug === slug);

  if (!article) {
    notFound();
  }

  // Get related articles (exclude current, limit to 3)
  const relatedArticles = chronicles
    .filter((c) => c.slug !== slug)
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-background text-foreground font-mono p-4 md:p-8 relative">
      <GridBackground />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Navigation Bar */}
        <div className="mb-8 flex justify-between items-center bg-background/90 backdrop-blur border-b-4 border-black dark:border-white py-4 sticky top-0 z-30 px-4 -mx-4 md:mx-0 md:px-0">
            <Link href="/missions-board">
                <div className="flex items-center gap-2 group cursor-pointer">
                    <div className="bg-primary text-primary-foreground p-1 transition-transform group-hover:-translate-x-1">
                        <ArrowLeft size={20} />
                    </div>
                    <span className="font-pixel text-sm md:text-base hidden md:inline group-hover:underline decoration-2 underline-offset-4">
                        RETURN TO ARTICLES
                    </span>
                </div>
            </Link>
            <div className="font-pixel text-xs md:text-sm opacity-60">
                ARCHIVE_ID: {article.id}
            </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Main Content (8 cols) */}
            <article className="lg:col-span-8 space-y-8">
                
                {/* Hero Section */}
                <div className="space-y-6">
                    {/* Title Area */}
                    <div className="space-y-4">
                        <h1 className="font-pixel text-3xl md:text-5xl leading-tight text-shadow-sm">
                            {article.title}
                        </h1>
                    </div>

                    {/* Hero Image Frame */}
                    <div className="aspect-video w-full bg-gray-200 dark:bg-zinc-800 border-4 border-black dark:border-white shadow-pixel relative overflow-hidden group">
                        {article.image ? (
                            <Image 
                                src={article.image} 
                                alt={article.title}
                                fill
                                className="object-cover"
                                priority
                            />
                        ) : (
                            /* Placeholder for real image */
                            <div className="w-full h-full flex items-center justify-center bg-pattern opacity-50">
                                <span className="font-pixel text-6xl text-muted-foreground select-none">
                                    {article.category[0]}
                                </span>
                            </div>
                        )}
                        {/* Scanline overlay effect */}
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_4px,6px_100%] pointer-events-none opacity-20" />
                    </div>

                    {/* RPG Stats / Metadata Bar */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-accent/50 border-2 border-dashed border-gray-400">
                        <div className="space-y-1">
                            <p className="font-pixel text-[10px] text-muted-foreground">DATE_LOGGED</p>
                            <p className="font-mono text-sm font-bold flex items-center gap-2">
                                <Calendar size={14} className="text-primary"/> {article.date}
                            </p>
                        </div>
                        <div className="space-y-1">
                            <p className="font-pixel text-[10px] text-muted-foreground">OPERATOR</p>
                            <p className="font-mono text-sm font-bold flex items-center gap-2">
                                <User size={14} className="text-primary"/> {article.author}
                            </p>
                        </div>
                        <div className="col-span-2 space-y-1">
                            <p className="font-pixel text-[10px] text-muted-foreground">TAGS_DETECTED</p>
                            <div className="flex flex-wrap gap-2">
                                {article.tags.map(tag => (
                                    <span key={tag} className="text-[10px] bg-background border border-border px-1.5 py-0.5 font-mono">
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content Body - Prose optimized for readability */}
                <div 
                    className="prose dark:prose-invert prose-lg max-w-none font-sans leading-relaxed entry-content prose-headings:font-pixel prose-headings:uppercase prose-a:text-primary prose-img:border-2 prose-img:border-black dark:prose-img:border-white"
                    dangerouslySetInnerHTML={{ __html: article.content || "<p>Data corrupted. No content available.</p>" }}
                />

                {/* Footer / Share (Optional) */}
                <div className="pt-8 border-t-4 border-double border-gray-500">
                    <p className="font-pixel text-center text-muted-foreground text-sm">
                        *** END OF TRANSMISSION ***
                    </p>
                </div>
            </article>

            {/* Sidebar (4 cols) */}
            <aside className="lg:col-span-4 space-y-8">
                
                {/* Related Chronicles Widget */}
                <div className="bg-background border-4 border-black dark:border-white p-6 md:p-6 shadow-pixel sticky top-24">
                    <h3 className="font-pixel text-xl mb-6 flex items-center gap-2 text-primary">
                        <div className="w-2 h-2 bg-current animate-pulse"/>
                        RELATED DATA
                    </h3>
                    
                    <div className="space-y-6">
                        {relatedArticles.map(related => (
                            <Link key={related.id} href={`/missions-board/${related.slug}`} className="block group">
                                <article className="flex gap-4 items-start">
                                    {/* Mini Thumb */}
                                    <div className="w-20 h-20 shrink-0 bg-accent border-2 border-black dark:border-white overflow-hidden relative">
                                        <div className="w-full h-full flex items-center justify-center font-pixel text-lg text-muted-foreground bg-pattern">
                                            {related.category[0]}
                                        </div>
                                    </div>
                                    
                                    {/* Mini Content */}
                                    <div className="space-y-1">
                                         <span className="text-[10px] font-pixel text-primary bg-primary/10 px-1">
                                            {related.category}
                                        </span>
                                        <h4 className="font-bold font-mono text-sm leading-tight group-hover:text-primary transition-colors line-clamp-2">
                                            {related.title}
                                        </h4>
                                        <span className="text-[10px] text-muted-foreground font-mono block">
                                            {related.date}
                                        </span>
                                    </div>
                                </article>
                            </Link>
                        ))}

                        {relatedArticles.length === 0 && (
                            <p className="font-mono text-xs text-muted-foreground italic">
                                No related chronicles found.
                            </p>
                        )}
                    </div>

                    <div className="mt-8 pt-6 border-t-2 border-dashed border-gray-400">
                        <Link href="/missions-board">
                           <div className="w-full py-2 border-2 border-dashed border-gray-400 text-center font-pixel text-xs hover:bg-accent hover:border-solid hover:border-black dark:hover:border-white transition-all cursor-pointer">
                                VIEW ALL ARCHIVES
                           </div>
                        </Link>
                    </div>
                </div>

            </aside>
        </div>
      </div>
    </main>
  );
}
