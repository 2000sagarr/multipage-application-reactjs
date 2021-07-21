import { Fragment } from "react";
import { useParams , Route} from "react-router";
import Comments from '../components/comments/Comments';

const QuateDetail = () => {
  const params = useParams();

  return (
    <Fragment>
      <h1>Quote detail pages</h1>
      <p>{params.quoteId}</p>
      <Route path={`/quotes/${params.quoteId}/comments`}>
          <Comments/>
      </Route>
    </Fragment>
  );
};

export default QuateDetail;
