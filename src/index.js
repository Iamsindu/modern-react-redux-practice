import React from "react";
import ReactDOM from "react-dom";
import ApprovalCard from "./ApprovalCard";
import CommentDetail from "./CommentDetail";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author="Sam"
          date="Yesterday at 10:00PM"
          comment="Great post!"
        />
      </ApprovalCard>
      <CommentDetail
        author="Alex"
        date="Today at 10:00AM"
        comment="Nice blog post."
      />
      <CommentDetail
        author="Jane"
        date="Thrusday at 05:00PM"
        comment="Good blog."
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
