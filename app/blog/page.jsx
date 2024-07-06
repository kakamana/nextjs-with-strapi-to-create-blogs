import axios from "axios";
import HighlightArticle from "../_components/Blog/HighlightArticle";
import SubscribeToNewsletter from "../_components/Blog/SubscribeToNewsletter";
import FeaturedItems from "../_components/FeaturedItems/FeaturedItems";
import { fetchBlogArticles, fetchDataFromStrapi } from "@/utils/strapi.utils";

export default async function Page() {
    const data = await fetchBlogArticles();

    const highlightArticleData = data.find(
        (article) => article.isHighlightArticle
    );

    const featuredArticlesData = data.filter(
        (article) => !article.isHighlightArticle
    );

    // const highlightArticleData = {        
    //     headline: "3 tips for a super fast takeoff",
    //     excerpt:(
    //         <>
    //             Improving your take-off phase in surfing is a fundamental step toward 
    //             riding waves with more confidence and style. Improving your take-off 
    //             phase is a gradual process, and it may take time to master. Be patient, 
    //             stay committed to practice, and enjoy the journey of becoming a better 
    //             surfer. With dedication and persistence, you'll see progress and have 
    //             more enjoyable rides. Here is how:
    //         </>
    //     ),
    //     slug: "takeoff",
    //     featuredImage: "/assets/hero-experience.png",
    // };
    // const data = await fetchBlogArticles();
    // // write different queries: first one to find the highlight blog article
    // // find the articles that are not highlight articles but sorted by publishing date.
  
    // const highlightArticleData = data.find(
    //   (article) => article.isHighlightArticle
    // );
  
    // const featuredArticlesData = data.filter(
    //   (article) => !article.isHighlightArticle
    // );

    // const featuredArticles = [
    //     {        
    //         headline: "surfboard shaping and design behind the scenes of crafting the perfect board ",
    //         slug: '/blog/surfboard-shaping',
    //         featuredImage: "/assets/hero-experience.png",
    //         date: "Monday, June 05, 2023"
    //     },
    //     {
    //         headline: "your perfect stretching routine before your first surfing session",
    //         slug: '/blog/stretching-routine',
    //         featuredImage: "/assets/hero-experience.png",
    //         date: "Monday, June 05, 2023"
    //     },
    //     {        
    //         headline: "surfboard shaping and design behind the scenes of crafting the perfect board ",
    //         slug: '/blog/surfboard-shaping',
    //         featuredImage: "/assets/hero-experience.png",
    //         date: "Monday, June 05, 2023"
    //     },
    //     {
    //         headline: "your perfect stretching routine before your first surfing session",
    //         slug: '/blog/stretching-routine',
    //         featuredImage: "/assets/hero-experience.png",
    //         date: "Monday, June 05, 2023"
    //     },
    //     {        
    //         headline: "surfboard shaping and design behind the scenes of crafting the perfect board ",
    //         slug: '/blog/surfboard-shaping',
    //         featuredImage: "/assets/hero-experience.png",
    //         date: "Monday, June 05, 2023"
    //     },
    //     {
    //         headline: "your perfect stretching routine before your first surfing session",
    //         slug: '/blog/stretching-routine',
    //         featuredImage: "/assets/hero-experience.png",
    //         date: "Monday, June 05, 2023"
    //     }
    // ]
  
    return (
      <main className="blog-page">        
        <HighlightArticle data={highlightArticleData} />
        <SubscribeToNewsletter />
        {/* <FeaturedItems items={featuredArticlesData} /> */}
        <FeaturedItems items={featuredArticlesData} />
      </main>
    );
  }
  
  export const revalidate = 300;