import { useParams } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { reviewsData } from "./Reviews";
import ColoredSection from "@components/ColoredSection";

const ReviewRating = ({
  rating,
  size = "small",
}: {
  rating: number;
  size?: "small" | "large";
}) => {
  const dotSize = size === "large" ? "w-5 h-5" : "w-3 h-3 sm:w-4 sm:h-4";
  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, index) => (
        <div
          key={index}
          className={`${dotSize} rounded-full ${
            index < rating ? "bg-green" : "bg-green/20"
          }`}
        />
      ))}
    </div>
  );
};

const Section = ({ title, content }: { title: string; content: string }) => (
  <div className="mb-6 md:mb-8">
    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold font-Large text-green mb-4">
      {title}
    </h3>
    <p className="text-base md:text-lg leading-relaxed">{content}</p>
  </div>
);

const ReviewSection = ({
  title,
  content,
  rating,
}: {
  title: string;
  content: string;
  rating: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
    className="space-y-4"
  >
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0">
      <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold font-Large">
        {title}
      </h3>
      <ReviewRating rating={rating} size="large" />
    </div>
    <p className="text-base md:text-lg leading-relaxed">{content}</p>
  </motion.div>
);

const ReviewPage = () => {
  const { id } = useParams({ from: "/reviews/$id" });
  const review = reviewsData.find((r) => r.id === id);

  if (!review) {
    return (
      <div className="flex justify-center items-center min-h-screen p-4">
        <h1 className="text-xl md:text-2xl text-center">Review not found</h1>
      </div>
    );
  }

  const fullTitle = review.bookSaga
    ? `${review.bookSaga} : ${review.bookTitle}`
    : review.bookTitle;

  return (
    <main className="font-WorkSans">
      <Helmet>
        <title>Review: {fullTitle} | Vanya Stolarski</title>
        <meta
          name="description"
          content={`Découvrez la critique de ${fullTitle}. Note globale: ${review.globalRating}/5. ${review.synopsis.substring(0, 150)}...`}
        />
        <meta
          property="og:title"
          content={`Critique: ${fullTitle} | Vanya Stolarski`}
        />
        <meta
          property="og:description"
          content={`Critique littéraire de ${fullTitle}. Découvrez l'analyse de l'univers, de l'histoire et des personnages.`}
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:image"
          content={`https://www.vanyastolarski.fr${review.bookCover}`}
        />
        <meta
          property="og:url"
          content={`https://www.vanyastolarski.fr/reviews/${id}`}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`Review: ${fullTitle}`} />
        <meta
          name="twitter:description"
          content={`Découvrez la critique détaillée de ${fullTitle} par Vanya Stolarski.`}
        />
        <meta
          name="keywords"
          content={`critique ${review.bookTitle}, review ${review.bookSaga || ""}, avis lecture, critique littéraire, Vanya Stolarski`}
        />
        <link
          rel="canonical"
          href={`https://www.vanyastolarski.fr/reviews/${id}`}
        />
      </Helmet>

      <ColoredSection bgColor="bg-white">
        <div className="px-4 md:px-6 lg:px-8">
          <div className="text-green font-Large text-center mb-12 md:mb-20 lg:mb-32">
            <h1 className="text-4xl md:text-5xl lg:text-7xl mb-2 md:mb-4 border-b border-green inline-block pb-2">
              {review.bookSaga}
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl mt-4">
              {review.bookTitle}
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 max-w-7xl mx-auto">
            <motion.div
              className="flex justify-center lg:justify-start flex-shrink-0"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={review.bookCover}
                alt={review.bookTitle}
                className="rounded-lg shadow-2xl w-auto max-w-full h-auto max-h-[300px] md:max-h-[400px] lg:max-h-[500px] object-contain"
              />
            </motion.div>

            <div className="flex flex-col justify-center w-full lg:w-2/3 lg:pl-8 xl:pl-20 max-w-3xl">
              <Section title="Synopsis" content={review.synopsis} />
              <Section title="Contexte" content={review.context} />
            </div>
          </div>
        </div>
      </ColoredSection>

      <ColoredSection bgColor="bg-green">
        <div className="w-full md:w-10/12 lg:w-9/12 mx-auto px-4 md:px-6">
          <div className="text-white space-y-8 md:space-y-12">
            <ReviewSection
              title="L'Univers"
              content={review.universeReview.content}
              rating={review.universeReview.rating}
            />
            <ReviewSection
              title="L'Histoire"
              content={review.storyReview.content}
              rating={review.storyReview.rating}
            />
            <ReviewSection
              title="Les Personnages"
              content={review.charactersReview.content}
              rating={review.charactersReview.rating}
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              className="border-t border-white/20 pt-6 md:pt-8"
            >
              <div className="flex flex-row justify-between items-start sm:items-center gap-4">
                <h3 className="text-2xl md:text-3xl font-bold">Note Globale</h3>
                <div className="flex items-center gap-4">
                  <ReviewRating rating={review.globalRating} size="large" />
                  <span className="text-xl md:text-2xl font-bold">
                    {review.globalRating}/5
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </ColoredSection>
    </main>
  );
};

export default ReviewPage;
