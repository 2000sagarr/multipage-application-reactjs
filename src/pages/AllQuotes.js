import QuateList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
  { id: "q1", author: "Max", text: "Learning React is fun!" },
  { id: "q2", author: "Maximilian", text: "Learning React is fun!" },
  { id: "q3", author: "Max", text: "Learning React is fun!" },
];

const AllQuaotes = () => {
  return <QuateList quotes={DUMMY_QUOTES} />;
};

export default AllQuaotes;
