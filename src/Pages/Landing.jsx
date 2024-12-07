import React from "react";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className="container-fluid  d-flex flex-column justify-content-center align-items-center bg-light">
      <nav className="navbar navbar-light bg-white w-100 mb-4">
        <div className="container-fluid">
          <h1 className="navbar-brand text-success fw-bold p-4">Task Manager</h1>
        </div>
      </nav>
      <div className="row w-100 d-flex align-items-center" style={{height:'80vh'}}>
        {/* Text Section */}
        <div className="col-md-6 text-center text-md-start px-4">
          <h2 className="display-4 fw-bold text-success">
            Organize Your Day, Achieve Your Goals
          </h2>
          <p className="lead text-secondary my-4">
            Stay on top of your tasks and deadlines with our intuitive task
            management system. Start your journey to ultimate productivity
            today.
          </p>
          <Link className="btn btn-success btn-lg" to={'/home'}>Get Started</Link>
        </div>

        {/* Image Section */}
        <div className="col-md-6 text-center mt-4 mt-md-0">
          <img
            src='https://media.istockphoto.com/id/1317983109/vector/project-tracking-goal-tracker-task-completion-or-checklist-to-remind-project-progress.jpg?s=612x612&w=0&k=20&c=Icl4grxyosadqnGxVUlwCmUOgZ2_qsF0YzLjBNQwSSs='
            alt="Task management illustration"
            className="img-fluid rounded shadow"
          />
        </div>
     </div>
    </div>
  );
}

export default Landing;
