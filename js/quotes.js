const quotes = [
  {
    quote: "중요한 것은 사랑을 받는 것이 아니라 사랑을 하는 것이었다.",
    author: "윌리엄 서머셋",
  },
  {
    quote: "인생이란 누구나 한 번쯤 시도해 볼 만한 것이다.",
    author: "헨리 J. 틸만",
  },
  {
    quote: "행복하게 여행하려면 가볍게 여행해야 한다.",
    author: "생텍쥐페리",
  },
  {
    quote: "삶은 공평하지 않다. 다만 죽음보다는 공평할 뿐이다.",
    author: "윌리엄 골드먼",
  },
  {
    quote:
      "안전이란 대개 미신이다. 그것은 사실상 존재하지 않는다… 인생은 대담한 모험이거나 아니면 아무것도 아니다.",
    author: "헬렌 켈러",
  },
  {
    quote:
      "인생은 사람들 앞에서 바이올린을 켜면서 바이올린을 배우는 것과 같다.",
    author: "사무엘 버틀러",
  },
  {
    quote: "인생은 가까이서 보면 비극이지만 멀리서 보면 희극이다",
    author: "찰리 채플린",
  },
  {
    quote: "인생에 필요한 것은 무지와 확신 뿐이다. 그러면 성공은 확실하다.",
    author: "마크 트웨인",
  },
  {
    quote: "의심으로 가득 찬 마음은 승리로의 여정에 집중할 수 없다.",
    author: "아서 골든",
  },
  {
    quote: "비전만 쫓다 보니 방향을 잃었다.",
    author: "로빈 그린",
  },
  {
    quote:
      "극복할 장애와 성취할 목표가 없다면 우리는 인생에서 진정한 만족이나 행복을 찾을 수 없다.",
    author: "맥스웰 몰츠",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
