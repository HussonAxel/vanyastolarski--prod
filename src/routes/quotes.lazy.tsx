import { createLazyFileRoute } from '@tanstack/react-router'
import cover from "../../src/assets/covers/12_divins_couverture.webp"
import QuoteTemplate from '@components/QuoteTemplate/QuoteTemplate'

export const Route = createLazyFileRoute("/quotes")({
  component: () => <LivresComponents />,
});


const LivresComponents = () => {
  return (
    <>
      <QuoteTemplate
        BookQuote={"LES DOUZE DIVINS"}
        DateQuote={"24 Sept. 2024"}
        SentenceQuote={
          "Mariée de force au général de l'Etat major, Esther se retrouve embourbée dans les conflits politiques d'une France de 1890. Son cœur est pourtant ailleurs, loin de Paris"
        }
        AuthorSentence={
          "Cet amoureux d'enfance qu'elle veut à tout prix protéger, Esther ne sait plus qui aimer. Malheureusement, à cette époque où les tensions sont aussi vives que les conflits sont destructeurs"
        }
        BookCover={cover}
        BookCoverAlt={
          "ils devront parvenir à survivre sans que le monde n'apprenne leurs machinations sans quoi."
        }
      />
      <QuoteTemplate
        BookQuote={"LE SECRET D'ESTHER"}
        DateQuote={"15 August 2024"}
        SentenceQuote={
          "Piégée dans un mariage arrangé avec un officier influent, Esther navigue les eaux troubles des intrigues politiques en France en 1890. Son âme, cependant, rêve d'évasion."
        }
        AuthorSentence={
          "Son amour de jeunesse, avec qui elle partage des souvenirs précieux, est au cœur de ses préoccupations. Dans cette époque de bouleversements, l'amour et la survie sont des défis constants."
        }
        BookCover={cover}
        BookCoverAlt={
          "Une histoire de passion et de résistance dans une France divisée par les conflits et les ambitions."
        }
      />
      <QuoteTemplate
        BookQuote={"LES AMANTS D'UNE ÉPOQUE"}
        DateQuote={"12 October 2024"}
        SentenceQuote={
          "Mariée à un général sans cœur, Esther est plongée dans les complots politiques d'une France troublée en 1890. Son cœur, néanmoins, bat pour un autre."
        }
        AuthorSentence={
          "Son amant d'enfance, qu'elle cherche à protéger à tout prix, est sa seule consolation. Mais dans un monde en pleine effervescence, leurs sentiments doivent rester cachés."
        }
        BookCover={cover}
        BookCoverAlt={
          "Lutte, amour et survie dans une période de turbulences et de trahisons."
        }
      />
      <QuoteTemplate
        BookQuote={"L'ÉTREINTE DES DESTINS"}
        DateQuote={"30 November 2024"}
        SentenceQuote={
          "Forcée de se marier à un général implacable, Esther se retrouve au centre des machinations politiques d'une France divisée de 1890. Mais son cœur aspire à un amour plus simple."
        }
        AuthorSentence={
          "L'homme qu'elle aime depuis l'enfance représente une lueur d'espoir dans un monde de chaos. Cependant, leurs vies sont constamment menacées par les intrigues qui les entourent."
        }
        BookCover={cover}
        BookCoverAlt={
          "Un récit poignant d'amour et de survie dans une époque de grandes incertitudes."
        }
      />
    </>
  );
}

